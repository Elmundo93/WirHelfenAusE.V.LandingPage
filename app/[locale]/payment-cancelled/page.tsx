"use client"

import { useState, useEffect } from 'react'
import LoadingScreen from '@/components/layout/LoadingScreen'

export default function PaymentCancelledPage() {
  const [isLoading, setIsLoading] = useState(true)
  const [loadingProgress, setLoadingProgress] = useState(0)
  const [deepLinkAttempted, setDeepLinkAttempted] = useState(false)

  useEffect(() => {
    if (isLoading && loadingProgress < 100) {
      const timer = setTimeout(() => {
        setLoadingProgress((prev) => Math.min(prev + 10, 100))
      }, 120)
      return () => clearTimeout(timer)
    }
    if (loadingProgress >= 100) {
      setTimeout(() => setIsLoading(false), 500)
    }
  }, [isLoading, loadingProgress])

  const handleLoadingComplete = () => {
    const deepLinkUrl = 'aushilfapp://onboarding/payment-cancelled'
    
    // Try to open the deep link
    const link = document.createElement('a')
    link.href = deepLinkUrl
    link.click()
    
    // Set a flag to track that we attempted the deep link
    setDeepLinkAttempted(true)
    
    // Give the deep link a moment to work, then provide fallback
    setTimeout(() => {
      // If we're still on this page after 2 seconds, the deep link probably failed
      if (window.location.pathname.includes('payment-cancelled')) {
        // Redirect to the main page or show a message
        window.location.href = '/'
      }
    }, 2000)
  }

  // If deep link was attempted but we're still here, show a fallback message
  if (deepLinkAttempted && !isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-amber-50/30 to-amber-100/20">
        <div className="text-center p-8 max-w-md">
          <h1 className="text-2xl font-bold text-red-600 mb-4">
            ❌ Zahlung abgebrochen
          </h1>
          <p className="text-gray-600 mb-6">
            Die Zahlung wurde abgebrochen. 
            Falls die AushilfApp nicht automatisch geöffnet wurde, 
            öffnen Sie bitte die App manuell.
          </p>
          <button
            onClick={() => window.location.href = '/'}
            className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-2 rounded-lg transition-colors"
          >
            Zurück zur Startseite
          </button>
        </div>
      </div>
    )
  }

  if (isLoading) {
    return (
      <LoadingScreen
        onLoadingComplete={handleLoadingComplete}
        loadingProgress={loadingProgress}
        isLoading={isLoading}
      />
    )
  }

  // Optionally, show a fallback message if not loading (should redirect before this)
  return null
} 