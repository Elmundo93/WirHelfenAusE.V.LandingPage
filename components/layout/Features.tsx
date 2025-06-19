// components/layout/FeatureLayout.tsx
'use client'

import React from 'react'
import { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { StaticImageData } from 'next/image'
import FeatureCard from '@/components/Cards/FeatureCard'

interface FeatureCardData {
  icon: StaticImageData
  title: string
  description: string
  alt: string
}

interface FeatureLayoutProps {
  title: string
  description: string
  image: ReactNode
  features: FeatureCardData[]
}



export default function FeatureLayout({
  title,
  description,
  image,
  features,
}: FeatureLayoutProps) {
  
  return (
    <section id="ÜberUns" className="border-t mt-20 max-w-6xl mx-auto px-4 sm:px-6">
      <div className="">
        <div
          className={cn(
            'relative flex flex-col max-w-3xl mx-auto text-center bg-white/4 backdrop-blur-xl rounded-xl shadow-lg p-4'
          )}
        >
          <div className="relative inline-block w-full max-w-md mx-auto items-center justify-center flex flex-col">
            <div className="absolute inset-0 -z-10 top-15 left-16 right-0 bottom-50">{image}</div>
            <div className="invisible">{image}</div>
            <h1 className="relative text-4xl text-center mb-5 rounded-xl py-4 px-10 bg-white shadow-lg mx-auto inline-block bg-gradient-to-r from-amber-400 via-amber-300 to-amber-200 backdrop-blur-xl shadow-lg p-8">
              {title}
            </h1>
          </div>
          <p className="text-2xl text-center text-gray-600 whitespace-pre-line mb-10">{description}</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start max-w-sm md:max-w-2xl lg:max-w-none mx-auto mt-10">
          {features.map((feature, idx) => (
            <FeatureCard key={idx} {...feature} />
          ))}
        </div>
      </div>
    </section>
  )
}