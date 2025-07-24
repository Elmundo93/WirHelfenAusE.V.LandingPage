"use client"

import { useState, useEffect } from 'react'
import LoadingScreen from '@/components/layout/LoadingScreen'

export default function PortalCallbackPage() {
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
    window.location.href = 'aushilfapp://cancelFeedbackModal'
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


  return null
}