'use client'

import { useState, useEffect, createContext, useContext } from 'react'

// Critical images that need to be preloaded for smooth scrolling across all routes
const CRITICAL_IMAGES = [
  // Main page images
  '/images/CoolKids.png',
  '/images/PeopleGardening2.png',
  '/images/processe.png',
  '/images/BienenLogoNeat.png',
  '/images/sign.png',
  '/images/DankeSagen.png',
  
  // About page images
  '/images/Registration.png',
  '/images/FilterSucher.png',
  '/images/VerfasseBeitrag.png',
  '/images/InKontaktTretene.png',
  '/images/SicherheitAnmeldung.png',
  '/images/IdeaCrafting.png',
  
  // Anmeldung page images
  '/images/vecteezy_business-friendship-agreement-idea-with-successful-vector_2914732.png',
  '/images/PaperPlane.png',
  '/images/Curious analyst investigating question mark with magnifier.png',
  '/images/Mar-Business_6.png',
  '/images/Checklist1.png',
  '/images/13286.png',
  '/images/3664288.png',
  '/images/OptionenKennen.png',
  '/images/Help and support to climbing employee from mentor or leader hand.png',
  
  // Communication page images
  '/images/CasualFriends.png',
  
  // Feature icons (SVGs)
  '/images/staff-personnel-structure-management-svgrepo-com.svg',
  '/images/safe-and-stable-svgrepo-com.svg',
  '/images/location-svgrepo-com.svg',
  '/images/handshake-svgrepo-com.svg',
  '/images/register-svgrepo-com.svg',
  '/images/choice-svgrepo-com.svg',
  
  // Additional images that might be used
  '/images/OldPeopleDancing.png',
]

// Version key for cache invalidation
const CACHE_VERSION = '1.0.0'
const CACHE_KEY = `wir-helfen-aus-preload-${CACHE_VERSION}`
const CACHE_DURATION = 24 * 60 * 60 * 1000 // 24 hours in milliseconds

interface CacheData {
  timestamp: number
  version: string
  imagesLoaded: boolean
}

interface LoadingContextType {
  isLoading: boolean
  loadingProgress: number
  wasCached: boolean
  setIsLoading: (loading: boolean) => void
  clearLoadingCache: () => void
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined)

export function useLoadingContext() {
  const context = useContext(LoadingContext)
  if (context === undefined) {
    throw new Error('useLoadingContext must be used within a LoadingProvider')
  }
  return context
}

export function useLoadingManager() {
  const [isLoading, setIsLoading] = useState(true)
  const [loadingProgress, setLoadingProgress] = useState(0)
  const [wasCached, setWasCached] = useState(false)

  useEffect(() => {
    // Check if we're in the browser
    if (typeof window === 'undefined') {
      return
    }

    const checkCache = (): CacheData | null => {
      try {
        const cached = localStorage.getItem(CACHE_KEY)
        if (!cached) return null
        
        const data: CacheData = JSON.parse(cached)
        const now = Date.now()
        
        // Check if cache is still valid (within 24 hours and same version)
        if (data.version === CACHE_VERSION && 
            (now - data.timestamp) < CACHE_DURATION && 
            data.imagesLoaded) {
          return data
        }
        
        return null
      } catch (error) {
        console.warn('Failed to read loading cache:', error)
        return null
      }
    }

    const setCache = (data: CacheData) => {
      try {
        localStorage.setItem(CACHE_KEY, JSON.stringify(data))
      } catch (error) {
        console.warn('Failed to write loading cache:', error)
      }
    }

    // const clearCache = () => {
    //   try {
    //     localStorage.removeItem(CACHE_KEY)
    //   } catch (error) {
    //     console.warn('Failed to clear loading cache:', error)
    //   }
    // }

    const shouldShowLoading = () => {
      console.log('=== LOADING CACHE DEBUG ===')
      console.log('Cache key:', CACHE_KEY)
      
      // Check if we have a valid cache
      const cached = checkCache()
      console.log('Cached data:', cached)
      
      if (cached) {
        console.log('✅ Using cached preload data, skipping loading screen')
        console.log('=== END LOADING CACHE DEBUG ===')
        setWasCached(true)
        return false
      }

      // Check if this is a fresh visit (no cache at all)
      const hasVisitedBefore = localStorage.getItem(CACHE_KEY) !== null
      console.log('Has visited before:', hasVisitedBefore)
      
      if (!hasVisitedBefore) {
        console.log('🆕 First visit, showing loading screen')
        console.log('=== END LOADING CACHE DEBUG ===')
        return true
      }

      // Check if cache is expired or invalid
      console.log('⚠️ Cache expired or invalid, showing loading screen')
      console.log('=== END LOADING CACHE DEBUG ===')
      return true
    }

    const preloadImages = async () => {
      // Start with initial progress
      setLoadingProgress(5)

      // Wait for initial page load
      await new Promise(resolve => setTimeout(resolve, 200))

      if (!mounted) return
      setLoadingProgress(10)

      // Wait for fonts and styles to load
      await new Promise(resolve => setTimeout(resolve, 300))

      if (!mounted) return
      setLoadingProgress(15)

      const imagePromises = CRITICAL_IMAGES.map((src, index) => {
        return new Promise<void>((resolve) => {
          if (typeof window === 'undefined') {
            resolve()
            return
          }
          
          const img = new window.Image()
          img.onload = () => {
            if (mounted) {
              // Update progress based on loaded images (15% to 65%)
              const progress = 15 + ((index + 1) / CRITICAL_IMAGES.length) * 50
              setLoadingProgress(progress)
            }
            resolve()
          }
          img.onerror = () => {
            // Still resolve even if image fails to load
            if (mounted) {
              const progress = 15 + ((index + 1) / CRITICAL_IMAGES.length) * 50
              setLoadingProgress(progress)
            }
            resolve()
          }
          img.src = src
        })
      })

      // Wait for all images to load (or fail)
      await Promise.all(imagePromises)

      if (mounted) {
        setLoadingProgress(65)
        
        // Wait for React components to be ready
        await new Promise(resolve => setTimeout(resolve, 400))
        
        if (mounted) {
          setLoadingProgress(80)
          
          // Wait for DOM to be fully rendered
          await new Promise(resolve => setTimeout(resolve, 300))
          
          if (mounted) {
            setLoadingProgress(90)
            
            // Final delay to ensure everything is ready
            setTimeout(() => {
              if (mounted) {
                setLoadingProgress(100)
                setTimeout(() => {
                  if (mounted) {
                    // Cache the successful preload
                    const cacheData = {
                      timestamp: Date.now(),
                      version: CACHE_VERSION,
                      imagesLoaded: true
                    }
                    console.log('💾 Setting cache:', cacheData)
                    setCache(cacheData)
                    
                    // Add a 3-second delay to let users enjoy the animation
                    console.log('🎉 Loading complete! Enjoying animation for 3 seconds...')
                    setTimeout(() => {
                      if (mounted) {
                        console.log('✨ Animation complete, transitioning to content')
                        setIsLoading(false)
                      }
                    }, 3000) // 3 seconds delay
                  }
                }, 300)
              }
            }, 200)
          }
        }
      }
    }

    let mounted = true

    // Check if we should show loading screen
    if (shouldShowLoading()) {
      preloadImages()
    } else {
      // Skip loading screen, content is already cached
      setIsLoading(false)
      setLoadingProgress(100)
    }

    // Listen for cache invalidation events (e.g., when you deploy new content)
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === CACHE_KEY && e.newValue === null) {
        // Cache was cleared, we might need to show loading screen again
        console.log('Cache cleared, will show loading screen on next visit')
      }
    }

    window.addEventListener('storage', handleStorageChange)

    return () => {
      mounted = false
      window.removeEventListener('storage', handleStorageChange)
    }
  }, [])

  // Function to manually clear cache (useful for testing or when you deploy new content)
  const clearLoadingCache = () => {
    if (typeof window !== 'undefined') {
      try {
        localStorage.removeItem(CACHE_KEY)
        console.log('Loading cache cleared manually')
      } catch (error) {
        console.warn('Failed to clear loading cache:', error)
      }
    }
  }

  return {
    isLoading,
    loadingProgress,
    wasCached,
    setIsLoading,
    clearLoadingCache
  }
} 