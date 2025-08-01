"use client"

import { useState, useEffect } from 'react'
import LoadingScreen from '@/components/layout/LoadingScreen'

export default function IdentitySuccessPage() {
  const [isLoading, setIsLoading] = useState(true)
  const [loadingProgress, setLoadingProgress] = useState(0)

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
    const url = 'aushilfapp://onboarding/identity-success'
    window.location.href = url
    setTimeout(() => {
      window.close()
    }, 300)
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