// components/ContactForm.tsx
"use client"

import { useState, FormEvent } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { cn } from "@/lib/utils"
import { useTranslations } from 'next-intl'

export default function ContactForm() {
  const t = useTranslations('ContactUs.form')
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    subject: "",
    message: ""
  })
  const [errors, setErrors] = useState<Partial<typeof formData>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [feedback, setFeedback] = useState<{ type: "success" | "error" | ""; message: string }>({
    type: "",
    message: ""
  })

  const FIELD_LABELS: Record<string, string> = {
    fullname: t('fields.fullname'),
    email: t('fields.email'),
    subject: t('fields.subject'),
    message: t('fields.message'),
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const validateForm = () => {
    const errs: Partial<typeof formData> = {}
    if (!formData.fullname.trim()) errs.fullname = t('validation.fullname')
    if (!formData.email.trim()) errs.email = t('validation.email')
    if (!formData.subject.trim()) errs.subject = t('validation.subject')
    if (!formData.message.trim()) errs.message = t('validation.message')
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
      const data = await res.json()
      if (!res.ok || data.error) {
        setFeedback({ type: "error", message: t('error') })
      } else {
        setFeedback({ type: "success", message: t('success') })
        setFormData({ fullname: "", email: "", subject: "", message: "" })
      }
    } catch {
      setFeedback({ type: "error", message: t('connectionError') })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 bg-white shadow-xl rounded-3xl p-10 border border-gray-200 text-lg"
    >
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">{t('title')}</h2>
      <p className="text-center text-muted-foreground mb-4 text-base">
        {t('subtitle')}
      </p>

      {Object.keys(formData).map((field) => (
        <div key={field} className="space-y-1">
          <Label htmlFor={field} className="text-base font-semibold text-gray-700">
            {FIELD_LABELS[field]}<span className="text-red-500"> *</span>
          </Label>

          {field === "message" ? (
            <Textarea
              id={field}
              name={field}
              rows={4}
              value={formData[field as keyof typeof formData]}
              onChange={handleChange}
              placeholder={t('placeholders.message')}
              className={cn("text-base p-4 rounded-md resize-y", errors[field] && "border-red-500")}
            />
          ) : (
            <Input
              id={field}
              name={field}
              type={field === "email" ? "email" : "text"}
              value={formData[field as keyof typeof formData]}
              onChange={handleChange}
              placeholder={t(`placeholders.${field}`)}
              className={cn("text-base p-4 rounded-md", errors[field as keyof typeof formData] && "border-red-500")}
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
        {isSubmitting ? t('submitting') : t('submit')}
      </Button>

      {feedback.message && (
        <Alert variant={feedback.type === "success" ? "default" : "destructive"} className="mt-4 text-base">
          <AlertDescription>{feedback.message}</AlertDescription>
        </Alert>
      )}
    </form>
  )
}