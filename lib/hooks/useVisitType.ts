'use client'

import { useState, useEffect } from 'react'

export function useVisitType() {
  const [isExternalVisit, setIsExternalVisit] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return

    // Check if this is an external visit
    const referrer = document.referrer
    const currentOrigin = window.location.origin
    
    // If no referrer or referrer is from different origin, it's external
    const isExternal = !referrer || !referrer.startsWith(currentOrigin)
    
    // Also check if user came from a bookmark or direct URL
    const navigationType = (performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming)?.type
    const isDirectVisit = navigationType === 'navigate' && !referrer
    
    setIsExternalVisit(isExternal || isDirectVisit)
  }, [])

  return { isExternalVisit }
} 