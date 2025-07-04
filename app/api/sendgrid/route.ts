//app/api/sendgrid/route.ts
import { NextResponse } from "next/server"
import sendgrid from "@sendgrid/mail"
import { Redis } from "@upstash/redis"
import { Ratelimit } from "@upstash/ratelimit"

sendgrid.setApiKey(process.env.SENDGRID_API_KEY!)

// Redis-Instanz (Upstash)
const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
})

// Rate Limiter: max. 3 Anfragen pro IP / 1h
const ratelimit = new Ratelimit({
  redis,
  limiter: Ratelimit.fixedWindow(3, "1h"),
})

export async function POST(req: Request) {
  const ip =
    req.headers.get("x-forwarded-for") ||
    req.headers.get("x-real-ip") ||
    "unknown"

  const { success, reset } = await ratelimit.limit(ip)

  if (!success) {
    const retryAfterSeconds = Math.ceil((reset - Date.now()) / 1000)
    return NextResponse.json(
      {
        error: "Du hast das Nachrichtenlimit erreicht. Bitte versuche es später erneut.",
        retryAfterSeconds,
      },
      {
        status: 429,
        headers: {
          "Retry-After": retryAfterSeconds.toString(),
        },
      }
    )
  }

  const { fullname, email, subject, message } = await req.json()

  if (!fullname || !email || !subject || !message) {
    return NextResponse.json(
      { error: "Fehlende Felder im Formular" },
      { status: 400 }
    )
  }

  try {
    // 📩 1. Mail an Betreiber
    await sendgrid.send({
      to: process.env.SENDGRID_RECEIVER_EMAIL!,
      from: process.env.SENDGRID_SENDER_EMAIL!,
      replyTo: email,
      subject: `📬 Neue Nachricht von ${fullname}: ${subject}`,
      text: `
        Neue Nachricht über das Kontaktformular:

        Name: ${fullname}
        E-Mail: ${email}
        Betreff: ${subject}

        Nachricht:
        ${message}
      `,
    })

    // ✅ 2. Bestätigung an Absender
    const confirmationData = {
      to: email,
      from: process.env.SENDGRID_SENDER_EMAIL!,
      templateId: process.env.SENDGRID_TEMPLATE_ID!,
      dynamicTemplateData: {
        fullname,
        message,
        subject,
      },
    }

    console.log("Sending confirmation mail with data:", confirmationData)
    await sendgrid.send(confirmationData)

    return NextResponse.json({ success: true })
  } catch (error: unknown) {
    console.error("SendGrid error:", error)
    if (error && typeof error === 'object' && 'response' in error && error.response && typeof error.response === 'object' && 'body' in error.response) {
      console.error("SendGrid error response body:", error.response.body)
    }
    return NextResponse.json(
      { error: "Fehler beim Senden der Nachricht" },
      { status: 500 }
    )
  }
}