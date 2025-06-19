"use client"

import { useState, FormEvent } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { cn } from "@/lib/utils"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullname: "", email: "", subject: "", message: ""
  })
  const [errors, setErrors] = useState<Partial<typeof formData>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [feedback, setFeedback] = useState<{ type: "success" | "error" | ""; message: string }>({
    type: "", message: ""
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const validateForm = () => {
    const errs: Partial<typeof formData> = {}
    if (!formData.fullname.trim()) errs.fullname = "Bitte geben Sie Ihren Namen an."
    if (!formData.email.trim()) errs.email = "Bitte geben Sie Ihre E-Mail-Adresse an."
    if (!formData.subject.trim()) errs.subject = "Bitte geben Sie einen Betreff ein."
    if (!formData.message.trim()) errs.message = "Bitte schreiben Sie eine Nachricht."
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!validateForm()) return
    setIsSubmitting(true)
    setFeedback({ type: "", message: "" })

    try {
      const res = await fetch("/api/sendgrid", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      })
      const { error } = await res.json()
      if (error) {
        setFeedback({ type: "error", message: "Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut." })
      } else {
        setFeedback({ type: "success", message: "Vielen Dank! Wir melden uns bald bei Ihnen. 😊" })
        setFormData({ fullname: "", email: "", subject: "", message: "" })
      }
    } catch {
      setFeedback({ type: "error", message: "Verbindungsfehler – bitte später erneut versuchen." })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 bg-white shadow-xl rounded-3xl p-10 border border-gray-200 text-lg"
    >
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">📬 Schreiben Sie uns!</h2>

      <p className="text-center text-muted-foreground mb-4 text-base">
        Wir freuen uns über Ihre Nachricht ✨
      </p>

      {["fullname", "email", "subject", "message"].map((field) => (
        <div key={field} className="space-y-1">
          <Label htmlFor={field} className="text-base font-semibold text-gray-700">
            {field === "fullname" && "Ihr Name"}
            {field === "email" && "Ihre E-Mail-Adresse"}
            {field === "subject" && "Betreff"}
            {field === "message" && "Ihre Nachricht"}
            <span className="text-red-500"> *</span>
          </Label>

          {field === "message" ? (
            <Textarea
              id={field}
              name={field}
              rows={4}
              value={formData[field]}
              onChange={handleChange}
              placeholder="Was möchten Sie uns mitteilen?"
              className={cn(
                "text-base p-4 rounded-md",
                errors[field] && "border-red-500"
              )}
            />
          ) : (
            <Input
              id={field}
              name={field}
              type={field === "email" ? "email" : "text"}
              value={formData[field as keyof typeof formData]}
              onChange={handleChange}
              placeholder={
                field === "fullname" ? "z. B. Maria Mustermann" :
                field === "email" ? "z. B. maria@beispiel.de" :
                "z. B. Frage zur App"
              }
              className={cn(
                "text-base p-4 rounded-md",
                errors[field as keyof typeof formData] && "border-red-500"
              )}
            />
          )}
          {errors[field as keyof typeof formData] && (
            <p className="text-sm text-red-500">{errors[field as keyof typeof formData]}</p>
          )}
        </div>
      ))}

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full text-lg py-3 rounded-xl bg-primary hover:bg-primary/90"
      >
        {isSubmitting ? "Wird gesendet..." : "Nachricht abschicken"}
      </Button>

      {feedback.message && (
        <Alert variant={feedback.type === "success" ? "default" : "destructive"} className="mt-4 text-base">
          <AlertDescription>{feedback.message}</AlertDescription>
        </Alert>
      )}

 
    </form>
  )
}