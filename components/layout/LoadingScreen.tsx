'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import CustomImage from '@/components/ui/image'
import BienenLogo from '@/public/images/BienenLogoNeat.png'

interface ParticlePosition {
  x: number
  y: number
  targetX: number
  duration: number
  delay: number
}

interface LoadingScreenProps {
  onLoadingComplete: () => void
  loadingProgress: number
  isLoading: boolean
}

export default function LoadingScreen({ onLoadingComplete, loadingProgress, isLoading }: LoadingScreenProps) {
  const [isVisible, setIsVisible] = useState(true)
  const [particlePositions, setParticlePositions] = useState<ParticlePosition[]>([])

  useEffect(() => {
    // Generate particle positions only after component mounts
    if (typeof window !== 'undefined') {
      const positions = Array.from({ length: 6 }, () => ({
        x: Math.random() * window.innerWidth,
        y: window.innerHeight + 10,
        targetX: Math.random() * window.innerWidth,
        duration: 3 + Math.random() * 2,
        delay: Math.random() * 2
      }))
      setParticlePositions(positions)
    }
  }, [])

  const [showCompletionMessage, setShowCompletionMessage] = useState(false)

  useEffect(() => {
    // When loading is complete, show completion message and then exit
    if (!isLoading && loadingProgress >= 100) {
      setShowCompletionMessage(true)
      
      const timer = setTimeout(() => {
        setIsVisible(false)
        setTimeout(() => {
          onLoadingComplete()
        }, 500) // Wait for exit animation
      }, 2000) // Show completion message for 2 seconds, then fade out

      return () => clearTimeout(timer)
    }
  }, [isLoading, loadingProgress, onLoadingComplete])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[9999] bg-gradient-to-br from-background via-amber-50/30 dark:via-amber-900/10 to-amber-100/20 dark:to-amber-900/5 backdrop-blur-sm flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-10 left-10 w-32 h-32 border border-amber-400/20 rounded-full" />
            <div className="absolute top-20 right-20 w-24 h-24 border border-amber-400/20 rounded-full" />
            <div className="absolute bottom-20 left-20 w-40 h-40 border border-amber-400/20 rounded-full" />
            <div className="absolute bottom-10 right-10 w-16 h-16 border border-amber-400/20 rounded-full" />
          </div>
          
          {/* Animated Background Elements */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-2 h-2 bg-amber-400/30 rounded-full"
            animate={{
              scale: [1, 2, 1],
              opacity: [0.3, 0.8, 0.3]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute top-3/4 right-1/4 w-3 h-3 bg-amber-500/20 rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.6, 0.2]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
          {/* Logo Animation with Pulsing Waves */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8 relative"
          >
            {/* Pulsing Waves */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute inset-0 rounded-full border-2 border-amber-400/30"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={showCompletionMessage ? {
                  scale: [1, 3, 1],
                  opacity: [0.8, 0, 0.8]
                } : {
                  scale: [1, 2.5, 1],
                  opacity: [0.6, 0, 0.6]
                }}
                transition={{
                  duration: showCompletionMessage ? 2 : 3,
                  repeat: Infinity,
                  delay: i * (showCompletionMessage ? 0.4 : 0.8),
                  ease: "easeOut"
                }}
                style={{
                  width: '120px',
                  height: '120px',
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)'
                }}
              />
            ))}
            
            {/* Rotating Ring */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-amber-300/50"
              animate={{ rotate: 360 }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                width: '140px',
                height: '140px',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)'
              }}
            />
            
            {/* Main Logo */}
            <motion.div
              animate={showCompletionMessage ? {
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1],
                y: [0, -5, 0]
              } : {
                rotate: [0, 5, -5, 0],
                scale: [1, 1.05, 1]
              }}
              transition={{ 
                duration: showCompletionMessage ? 2 : 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative z-10"
            >
              <CustomImage
                src={BienenLogo}
                alt="Wir helfen aus e.V. Logo"
                width={120}
                height={120}
                className="rounded-full shadow-lg"
                priority
                isSvg={false}
              />
            </motion.div>
            
            {/* Glowing Effect */}
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-400/20 to-amber-600/20 blur-xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                width: '120px',
                height: '120px',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)'
              }}
            />
          </motion.div>

          {/* Enhanced Welcome Text */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center mb-8"
          >
            <motion.h1 
              className="text-3xl md:text-4xl font-bold text-amber-600 mb-2"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                background: 'linear-gradient(90deg, #f59e0b, #d97706, #f59e0b)',
                backgroundSize: '200% 100%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Willkommen bei
            </motion.h1>
            <motion.h2 
              className="text-2xl md:text-3xl font-semibold text-gray-700"
              animate={{
                textShadow: [
                  '0 0 0px rgba(245, 158, 11, 0)',
                  '0 0 20px rgba(245, 158, 11, 0.3)',
                  '0 0 0px rgba(245, 158, 11, 0)'
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Wir helfen aus e.V.
            </motion.h2>
            
            {/* Decorative elements */}
            <motion.div
              className="flex justify-center gap-2 mt-4"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 bg-amber-400 rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.2,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </motion.div>
          </motion.div>

          {/* Enhanced Loading Bar */}
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "100%", opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="w-64 md:w-80 mb-4"
          >
            <div className="relative">
              {/* Background with gradient */}
              <div className="bg-gradient-to-r from-amber-100 to-amber-200 rounded-full h-4 overflow-hidden shadow-inner border border-amber-300/30">
                {/* Main progress bar */}
                <motion.div
                  className="h-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 rounded-full relative"
                  initial={{ width: "0%" }}
                  animate={{ width: `${loadingProgress}%` }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Shimmer effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                    animate={{
                      x: ['-100%', '100%']
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                  
                  {/* Pulsing dots */}
                  <motion.div
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-white rounded-full"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.8, 1, 0.8]
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </motion.div>
              </div>
              
              {/* Progress percentage */}
              <motion.div
                className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-sm font-medium text-amber-600"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                {Math.round(loadingProgress)}%
              </motion.div>
            </div>
          </motion.div>

          {/* Loading Text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-center"
          >
            {!showCompletionMessage ? (
              <>
                <p className="text-gray-600 text-lg mb-2">
                  {loadingProgress < 10 && "Willkommen bei Wir helfen aus e.V.!"}
                  {loadingProgress >= 10 && loadingProgress < 15 && "Lade Schriftarten..."}
                  {loadingProgress >= 15 && loadingProgress < 40 && "Lade Bilder..."}
                  {loadingProgress >= 40 && loadingProgress < 65 && "Optimiere Inhalte..."}
                  {loadingProgress >= 65 && loadingProgress < 80 && "Bereite Komponenten vor..."}
                  {loadingProgress >= 80 && loadingProgress < 90 && "Finalisiere..."}
                  {loadingProgress >= 90 && "Fast fertig..."}
                </p>
                <p className="text-sm text-gray-500">
                  {Math.round(loadingProgress)}% geladen
                </p>
                <p className="text-xs text-gray-400 mt-2">
                  Für eine optimale Erfahrung werden alle Inhalte vorbereitet
                </p>
              </>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <motion.p 
                  className="text-2xl font-bold text-amber-600 mb-2"
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  style={{
                    background: 'linear-gradient(90deg, #f59e0b, #d97706, #f59e0b)',
                    backgroundSize: '200% 100%',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                >
                  ✨ Bereit! ✨
                </motion.p>
                <motion.p 
                  className="text-lg text-gray-600 mb-2"
                  animate={{
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  Willkommen bei Wir helfen aus e.V.
                </motion.p>
                <motion.p className="text-sm text-gray-500">
                  Genießen Sie die Animation...
                </motion.p>
                
                {/* Completion celebration particles */}
                <motion.div
                  className="flex justify-center gap-1 mt-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-1 h-1 bg-amber-400 rounded-full"
                      animate={{
                        y: [0, -10, 0],
                        opacity: [0, 1, 0]
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: i * 0.2,
                        ease: "easeInOut"
                      }}
                    />
                  ))}
                </motion.div>
              </motion.div>
            )}
          </motion.div>

          {/* Enhanced Floating Particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {particlePositions.map((position, i) => (
              <motion.div
                key={i}
                className="absolute"
                initial={{
                  x: position.x,
                  y: position.y,
                }}
                animate={{
                  y: -10,
                  x: position.targetX,
                }}
                transition={{
                  duration: position.duration,
                  repeat: Infinity,
                  ease: "linear",
                  delay: position.delay,
                }}
              >
                {/* Main Particle */}
                <motion.div
                  className="w-3 h-3 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full shadow-lg"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                {/* Particle Trail */}
                <motion.div
                  className="absolute top-0 left-0 w-1 h-1 bg-amber-300/50 rounded-full"
                  animate={{
                    y: [0, 20],
                    opacity: [0.5, 0]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                
                {/* Sparkle Effect */}
                <motion.div
                  className="absolute top-0 left-0 w-1 h-1 bg-white rounded-full"
                  animate={{
                    scale: [0, 1, 0],
                    opacity: [0, 1, 0]
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
} 