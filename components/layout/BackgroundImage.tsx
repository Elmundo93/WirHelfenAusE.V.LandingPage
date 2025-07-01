'use client'

import { useState, useEffect } from 'react'
import CustomImage from '@/components/ui/image'
import DankeSagen from '@/public/images/DankeSagen.png'

export default function BackgroundImage() {
  const [mounted, setMounted] = useState(false)
  
  // Amber/golden blur placeholder
  const amberBlurDataURL = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div 
      className="fixed inset-0 -z-10 pointer-events-none select-none transition-opacity duration-[1800ms] ease-out"
      aria-hidden="true"
      style={{ opacity: mounted ? 0.08 : 0 }}
    >
      <CustomImage
        src={DankeSagen}
        alt="Dekoratives Hintergrundbild: Helfende Menschen"
        fill={true}
        priority
        sizes="100vw"
        className="object-cover"
        placeholder="blur"
        blurDataURL={amberBlurDataURL}
        isSvg={true}
      />
    </div>
  )
}