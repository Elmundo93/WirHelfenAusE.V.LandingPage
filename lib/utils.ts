import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Utility function to clear loading cache
export function clearLoadingCache() {
  if (typeof window !== 'undefined') {
    try {
      // Clear all loading-related cache entries
      const keys = Object.keys(localStorage)
      keys.forEach(key => {
        if (key.startsWith('wir-helfen-aus-preload-')) {
          localStorage.removeItem(key)
        }
      })
      console.log('Loading cache cleared successfully')
    } catch {
      console.warn('Failed to clear loading cache')
    }
  }
}

// Function to check if loading cache exists
export function hasLoadingCache(): boolean {
  if (typeof window !== 'undefined') {
    try {
      const keys = Object.keys(localStorage)
      return keys.some(key => key.startsWith('wir-helfen-aus-preload-'))
    } catch {
      return false
    }
  }
  return false
}
