"use client"

import React, { useState } from 'react'
import { useTranslations } from 'next-intl'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Loader2, CheckCircle, AlertCircle, Mail, User, MessageSquare, FileText } from 'lucide-react'
import AnimatedElement from '@/components/Animation/AnimatedElement'

interface FormData {
  fullname: string
  email: string
  subject: string
  message: string
  website?: string // Honeypot field
}

interface FormErrors {
  fullname?: string
  email?: string
  subject?: string
  message?: string
  website?: string
}

export default function ContactForm() {
  const t = useTranslations('ContactUs.form')
  
  const [formData, setFormData] = useState<FormData>({
    fullname: '',
    email: '',
    subject: '',
    message: '',
    website: '' // Honeypot field - should remain empty
  })
  
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [lastSubmissionTime, setLastSubmissionTime] = useState<number>(0)
  const [submissionCount, setSubmissionCount] = useState<number>(0)

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}
    
    if (!formData.fullname.trim()) {
      newErrors.fullname = t('validation.fullname')
    }
    
    if (!formData.email.trim()) {
      newErrors.email = t('validation.email')
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t('validation.email')
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = t('validation.subject')
    }
    
    if (!formData.message.trim()) {
      newErrors.message = t('validation.message')
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }
    
    // Client-side rate limiting
    const now = Date.now()
    const timeSinceLastSubmission = now - lastSubmissionTime
    const minInterval = 5000 // 5 seconds between submissions
    
    if (timeSinceLastSubmission < minInterval) {
      setSubmitStatus('error')
      setErrorMessage('Bitte warten Sie einen Moment, bevor Sie erneut senden.')
      return
    }
    
    // Check submission count (max 3 per hour)
    const hourInMs = 60 * 60 * 1000
    const submissionsInLastHour = submissionCount > 0 && (now - lastSubmissionTime) < hourInMs ? submissionCount : 0
    
    if (submissionsInLastHour >= 3) {
      setSubmitStatus('error')
      setErrorMessage('Sie haben das Limit von 3 Nachrichten pro Stunde erreicht. Bitte versuchen Sie es später erneut.')
      return
    }
    
    // Honeypot check - if website field is filled, it's likely a bot
    if (formData.website && formData.website.trim() !== '') {
      setSubmitStatus('error')
      setErrorMessage('Spam erkannt. Bitte versuchen Sie es erneut.')
      return
    }
    
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage('')
    
    try {
      const response = await fetch('/api/brevo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      
      const data = await response.json()
      
      if (response.ok && data.success) {
        setSubmitStatus('success')
        setLastSubmissionTime(Date.now())
        setSubmissionCount(prev => prev + 1)
        setFormData({
          fullname: '',
          email: '',
          subject: '',
          message: ''
        })
      } else {
        setSubmitStatus('error')
        setErrorMessage(data.error || t('error'))
      }
    } catch (error) {
      console.error('Contact form submission error:', error)
      setSubmitStatus('error')
      setErrorMessage(t('connectionError'))
    } finally {
      setIsSubmitting(false)
    }
  }

  const getFieldError = (field: keyof FormData) => {
    return errors[field] ? (
      <p className="text-sm text-red-600 mt-1 flex items-center gap-1">
        <AlertCircle className="h-3 w-3" />
        {errors[field]}
      </p>
    ) : null
  }

  return (
    <div className="relative">
      {/* Background Gradient */}
      <AnimatedElement className="z-10 rounded-xl bg-lightgrey p-10 w-full mx-auto backdrop-blur-xl items-center justify-center">    
      
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-amber-200/30 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-amber-300/20 to-transparent rounded-full blur-2xl" />
      
      <div className="relative p-8 space-y-8">
        {/* Form Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-500 rounded-2xl shadow-lg mb-4">
            <Mail className="h-8 w-8 text-white" />
          </div>
          <h3 className="text-3xl font-bold text-gray-900">{t('title')}</h3>
          <p className="text-gray-600 text-lg leading-relaxed max-w-md mx-auto">
            {t('subtitle')}
          </p>
        </div>

        {/* Success Alert */}
        {submitStatus === 'success' && (
          <Alert className="border-green-200 bg-green-50/80 backdrop-blur-sm shadow-lg">
            <CheckCircle className="h-5 w-5 text-green-600" />
            <AlertDescription className="text-green-800 font-medium">
              {t('success')}
            </AlertDescription>
          </Alert>
        )}

        {/* Error Alert */}
        {submitStatus === 'error' && (
          <Alert className="border-red-200 bg-red-50/80 backdrop-blur-sm shadow-lg">
            <AlertCircle className="h-5 w-5 text-red-600" />
            <AlertDescription className="text-red-800 font-medium">
              {errorMessage}
            </AlertDescription>
          </Alert>
        )}

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6 bg-white rounded-xl p-8">
          {/* Honeypot field - hidden from users but visible to bots */}
          <div style={{ display: 'none' }}>
            <label htmlFor="website">Website (leave empty)</label>
            <input
              type="text"
              id="website"
              name="website"
              value={formData.website}
              onChange={(e) => handleInputChange('website', e.target.value)}
              tabIndex={-1}
              autoComplete="off"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name Field */}
            <div className="space-y-2">
              <Label htmlFor="fullname" className="text-gray-700 font-medium flex items-center gap-2">
                <User className="h-4 w-4 text-amber-500" />
                {t('fields.fullname')}
              </Label>
              <Input
                id="fullname"
                type="text"
                value={formData.fullname}
                onChange={(e) => handleInputChange('fullname', e.target.value)}
                placeholder={t('placeholders.fullname')}
                className={`h-12 px-4 border-2 transition-all duration-200 focus:ring-2 focus:ring-amber-400/20 focus:border-amber-400 ${
                  errors.fullname ? 'border-red-300 bg-red-50' : 'border-gray-200 hover:border-amber-300'
                }`}
                disabled={isSubmitting}
              />
              {getFieldError('fullname')}
            </div>
            
            {/* Email Field */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-gray-700 font-medium flex items-center gap-2">
                <Mail className="h-4 w-4 text-amber-500" />
                {t('fields.email')}
              </Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                placeholder={t('placeholders.email')}
                className={`h-12 px-4 border-2 transition-all duration-200 focus:ring-2 focus:ring-amber-400/20 focus:border-amber-400 ${
                  errors.email ? 'border-red-300 bg-red-50' : 'border-gray-200 hover:border-amber-300'
                }`}
                disabled={isSubmitting}
              />
              {getFieldError('email')}
            </div>
          </div>
          
          {/* Subject Field */}
          <div className="space-y-2">
            <Label htmlFor="subject" className="text-gray-700 font-medium flex items-center gap-2">
              <FileText className="h-4 w-4 text-amber-500" />
              {t('fields.subject')}
            </Label>
            <Input
              id="subject"
              type="text"
              value={formData.subject}
              onChange={(e) => handleInputChange('subject', e.target.value)}
              placeholder={t('placeholders.subject')}
              className={`h-12 px-4 border-2 transition-all duration-200 focus:ring-2 focus:ring-amber-400/20 focus:border-amber-400 ${
                errors.subject ? 'border-red-300 bg-red-50' : 'border-gray-200 hover:border-amber-300'
              }`}
              disabled={isSubmitting}
            />
            {getFieldError('subject')}
          </div>
          
          {/* Message Field */}
          <div className="space-y-2">
            <Label htmlFor="message" className="text-gray-700 font-medium flex items-center gap-2">
              <MessageSquare className="h-4 w-4 text-amber-500" />
              {t('fields.message')}
            </Label>
            <Textarea
              id="message"
              rows={5}
              value={formData.message}
              onChange={(e) => handleInputChange('message', e.target.value)}
              placeholder={t('placeholders.message')}
              className={`px-4 py-3 border-2 transition-all duration-200 focus:ring-2 focus:ring-amber-400/20 focus:border-amber-400 resize-none ${
                errors.message ? 'border-red-300 bg-red-50' : 'border-gray-200 hover:border-amber-300'
              }`}
              disabled={isSubmitting}
            />
            {getFieldError('message')}
          </div>
          
          {/* Submit Button */}
          <div className="pt-4">
            <Button 
              type="submit" 
              className="w-full h-14 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-white font-semibold text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-3 h-5 w-5 animate-spin" />
                  {t('submitting')}
                </>
              ) : (
                <>
                  <Mail className="mr-3 h-5 w-5" />
                  {t('submit')}
                </>
              )}
            </Button>
          </div>
        </form>
        </div>
      </AnimatedElement>
    </div>
  )
} 