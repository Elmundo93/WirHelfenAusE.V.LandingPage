// app/api/sendgrid/route.ts
import { NextResponse } from "next/server"
import sendgrid from "@sendgrid/mail"

sendgrid.setApiKey(process.env.SENDGRID_API_KEY!)

export async function POST(req: Request) {
  const { fullname, email, subject, message } = await req.json()

  // Sicherstellen, dass alle Felder vorhanden sind
  if (!fullname || !email || !subject || !message) {
    return NextResponse.json(
      { error: "Fehlende Felder im Formular" },
      { status: 400 }
    )
  }

  try {
    // 📩 1. Mail an dich als Betreiber
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
  } catch (error: any) {
    console.error("SendGrid error:", error)

    // Falls SendGrid eine Response mit Body liefert → ausgeben
    if (error.response?.body) {
      console.error("SendGrid error response body:", error.response.body)
    }

    return NextResponse.json(
      { error: "Fehler beim Senden der Nachricht" },
      { status: 500 }
    )
  }
}