// app/api/contact/route.ts
import { NextResponse } from "next/server";
import { Redis } from "@upstash/redis";
import { Ratelimit } from "@upstash/ratelimit";
import * as Brevo from "@getbrevo/brevo";
import { z } from "zod";

export const dynamic = "force-dynamic"; // keine Caches für API-Route

// ---------- Validierung ----------
const schema = z.object({
  fullname: z.string().min(2).max(120),
  email: z.string().email().max(254),
  subject: z.string().min(2).max(160),
  message: z.string().min(5).max(5000),
  website: z.string().optional(), // Honeypot
  // captchaToken: z.string().optional(), // optional: Turnstile/hCaptcha
});

// ---------- Brevo Client ----------
const api = new Brevo.TransactionalEmailsApi();
api.setApiKey(
  Brevo.TransactionalEmailsApiApiKeys.apiKey,
  process.env.BREVO_API_KEY || ""
);

// ---------- Upstash Rate Limit (optional) ----------
let ratelimit: Ratelimit | null = null;
try {
  if (process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN) {
    const redis = new Redis({
      url: process.env.UPSTASH_REDIS_REST_URL,
      token: process.env.UPSTASH_REDIS_REST_TOKEN,
    });
    ratelimit = new Ratelimit({
      redis,
      limiter: Ratelimit.fixedWindow(3, "1h"),
    });
  } else {
    console.warn("⚠️ Upstash Redis not configured – rate limiting disabled.");
  }
} catch (e) {
  console.warn("⚠️ Rate limit init failed – continuing without.", e);
  ratelimit = null;
}

// ---------- Einfache Sicherheitsregeln ----------
const BLOCKLIST = [/<script/i]; // URLs erlaubt; Inhalte werden ge-escaped

// In-Memory Fallback Rate Limit
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1h
const RATE_LIMIT_MAX_REQUESTS = 3;

function checkSimpleRateLimit(ip: string): { allowed: boolean; retryAfter?: number } {
  const now = Date.now();
  const rec = rateLimitStore.get(ip);
  if (!rec || now > rec.resetTime) {
    rateLimitStore.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return { allowed: true };
  }
  if (rec.count >= RATE_LIMIT_MAX_REQUESTS) {
    return { allowed: false, retryAfter: Math.ceil((rec.resetTime - now) / 1000) };
  }
  rec.count++;
  rateLimitStore.set(ip, rec);
  return { allowed: true };
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function requireEnv(keys: string[]): string | null {
  for (const k of keys) if (!process.env[k]) return k;
  return null;
}

export async function POST(req: Request) {
  // ---------- Pflicht-ENV prüfen ----------
  const missing = requireEnv(["BREVO_API_KEY", "BREVO_SENDER_EMAIL", "BREVO_RECEIVER_EMAIL"]);
  if (missing) {
    console.error("Missing ENV:", missing);
    return NextResponse.json({ error: "Serverfehler (Konfiguration)." }, { status: 500 });
  }

  // ---------- Header-Guards ----------
  const contentType = req.headers.get("content-type");
  if (!contentType || !contentType.includes("application/json")) {
    return NextResponse.json({ error: "Invalid content type." }, { status: 400 });
  }
  const userAgent = req.headers.get("user-agent");
  if (!userAgent || userAgent.length < 10) {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // ---------- IP ermitteln ----------
  const fwd = req.headers.get("x-forwarded-for");
  const ip = (fwd ? fwd.split(",")[0].trim() : req.headers.get("x-real-ip")) || "unknown";

  // ---------- Rate Limiting ----------
  let redisFailed = false;
  if (ratelimit) {
    try {
      const { success, reset } = await ratelimit.limit(ip);
      if (!success) {
        const retryAfter = Math.max(1, Math.ceil((reset - Date.now()) / 1000));
        return NextResponse.json(
          { error: "Du hast das Nachrichtenlimit erreicht. Bitte versuche es später erneut." },
          { status: 429, headers: { "Retry-After": String(retryAfter) } }
        );
      }
    } catch (e) {
      console.warn("⚠️ Redis rate limiting failed, fallback to in-memory:", e);
      redisFailed = true;
    }
  }
  if (!ratelimit || redisFailed) {
    const res = checkSimpleRateLimit(ip);
    if (!res.allowed) {
      return NextResponse.json(
        { error: "Du hast das Nachrichtenlimit erreicht. Bitte versuche es später erneut." },
        { status: 429, headers: { "Retry-After": String(res.retryAfter || 60) } }
      );
    }
  }

  // ---------- Body parsen & validieren ----------
  let payload: z.infer<typeof schema>;
  try {
    payload = schema.parse(await req.json());
  } catch {
    return NextResponse.json({ error: "Fehlende oder ungültige Felder." }, { status: 400 });
  }

  const { fullname, email, subject, message, website } = payload;

  // Honeypot
  if (website && website.trim() !== "") {
    console.warn("🤖 Honeypot triggered:", { ip });
    return NextResponse.json({ error: "Spam erkannt." }, { status: 400 });
  }

  // Grundlegender Content-Filter
  if (BLOCKLIST.some((rx) => rx.test(message))) {
    return NextResponse.json({ error: "Nachricht wurde blockiert." }, { status: 400 });
  }

  // ---------- Emails vorbereiten ----------
  const templateIdRaw = Number(process.env.BREVO_TEMPLATE_ID);
  const templateId = Number.isFinite(templateIdRaw) && templateIdRaw > 0 ? templateIdRaw : null;

  // 1) Interne Benachrichtigung (Plain/HTML)
  const notifyEmail: Brevo.SendSmtpEmail = {
    to: [{ email: process.env.BREVO_RECEIVER_EMAIL!, name: "Wir helfen aus e.V." }],
    replyTo: { email, name: fullname }, // Antworten gehen an den Nutzer
    sender: {
      email: process.env.BREVO_SENDER_EMAIL!,
      name: process.env.BREVO_SENDER_NAME || "Wir helfen aus e.V.",
    },
    subject: `📬 Neue Nachricht von ${fullname}: ${subject}`,
    textContent:
      `Neue Nachricht über das Kontaktformular:\n\n` +
      `Name: ${fullname}\n` +
      `E-Mail: ${email}\n` +
      `Betreff: ${subject}\n\n` +
      `Nachricht:\n${message}\n`,
    htmlContent:
      `<h2>Neue Kontaktanfrage</h2>` +
      `<p><b>Name:</b> ${escapeHtml(fullname)}<br/>` +
      `<b>E-Mail:</b> ${escapeHtml(email)}<br/>` +
      `<b>Betreff:</b> ${escapeHtml(subject)}</p>` +
      `<pre style="white-space:pre-wrap;font-family:inherit;">${escapeHtml(message)}</pre>`,
    tags: ["contact-form", "notify"],
  };

  // 2) Bestätigung an Absender (Template) – ohne BCC
  const confirmationEmail: Brevo.SendSmtpEmail | null = templateId
    ? {
        to: [{ email, name: fullname }],
        sender: {
          email: process.env.BREVO_SENDER_EMAIL!,
          name: process.env.BREVO_SENDER_NAME || "Wir helfen aus e.V.",
        },
        templateId,
        params: { fullname, subject, message }, // Template: {{ params.fullname }} etc.
        tags: ["contact-form", "confirmation"],
      }
    : null;

  // ---------- Senden (getrennt) ----------
  try {
    const res1 = await api.sendTransacEmail(notifyEmail);
    console.log("notify messageId:", (res1 as any)?.messageId ?? "ok");
  } catch (e: any) {
    const status = e?.response?.status || e?.status || "unknown";
    console.error("notify failed:", status);
    // Bestätigung trotzdem versuchen
  }

  try {
    if (confirmationEmail) {
      const res2 = await api.sendTransacEmail(confirmationEmail);
      console.log("confirm messageId:", (res2 as any)?.messageId ?? "ok");
    } else {
      console.warn("⚠️ BREVO_TEMPLATE_ID fehlt – Bestätigung übersprungen.");
    }
  } catch (e: any) {
    const status = e?.response?.status || e?.status || "unknown";
    console.error("confirm failed:", status);
  }

  return NextResponse.json({ success: true }, { headers: { "Cache-Control": "no-store" } });
}