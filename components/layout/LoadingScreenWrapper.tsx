'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useLoadingManager } from '@/lib/hooks/useLoadingManager'
import LoadingScreen from './LoadingScreen'

interface LoadingScreenWrapperProps {
  children: React.ReactNode
}

export default function LoadingScreenWrapper({ children }: LoadingScreenWrapperProps) {
  const { isLoading, loadingProgress } = useLoadingManager()
  const [showContent, setShowContent] = useState(false)

  const handleLoadingComplete = () => {
    // Add a small delay to ensure DOM is fully ready
    setTimeout(() => {
      setShowContent(true)
    }, 100)
  }

  // If loading is not needed (from cache), show content immediately
  if (!isLoading && loadingProgress >= 100) {
    return (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    )
  }

  return (
    <>
      {!showContent && (
        <LoadingScreen
          onLoadingComplete={handleLoadingComplete}
          loadingProgress={loadingProgress}
          isLoading={isLoading}
        />
      )}
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: showContent ? 1 : 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </>
  )
} 