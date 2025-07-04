// components/layout/PreviewLayout.tsx
'use client'
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import CustomImage from '@/components/ui/image'
import { handleScroll } from '@/components/util/handleScroll'
import { StaticImageData } from "next/image"
import { useState } from 'react'

interface Step {
  label: string
  text: string
  step: string
}

interface PreviewLayoutProps {
  imageSrc: StaticImageData
  heading: string
  subheading: React.ReactNode
  buttonText: string
  canvasText: string
  buttonAction: { target: string; offset: number }
  steps: Step[]
}

export default function PreviewLayout({ imageSrc, heading, subheading, buttonText, canvasText, buttonAction, steps }: PreviewLayoutProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const handleStepClick = (stepNumber: string) => {
    // Close the dialog first
    setIsDialogOpen(false)
    // Then scroll to the target after a short delay to ensure dialog is closed
    setTimeout(() => {
      handleScroll(`#guideStep${stepNumber}`, 50)
    }, 100)
  }

  // Amber/golden blur placeholder
  const amberBlurDataURL = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="

  return (
    <div className="relative max-w-5xl mx-auto p-6 rounded-2xl shadow-xl bg-white/80 backdrop-blur-xl flex flex-col items-center space-y-6">

      <CustomImage 
        src={imageSrc} 
        alt="Preview" 
        width={400} 
        height={300} 
        className="rounded-full relative -mb-8 z-10" 
        priority
        placeholder="blur"
        blurDataURL={amberBlurDataURL}
        isSvg={true}
        style={{ width: '400px', height: '300px' }}
      />
      <h2 className="relative text-4xl text-center mb-5 rounded-xl py-4 px-10 bg-white shadow-lg mx-auto inline-block bg-gradient-to-r from-amber-400 via-amber-300 to-amber-200 backdrop-blur-xl shadow-lg p-8 z-20">{heading}</h2>
      <p className="text-2xl text-gray-700 text-center">{subheading}</p>

      <div className="flex flex-col md:flex-row items-center gap-4">
        <Button onClick={() => handleScroll(buttonAction.target, buttonAction.offset)} className="text-xl text-gray-700 hover:bg-amber-400 hover:text-white border-1 border-gray-400 hover:border-amber-400 bg-white flex items-center justify-center">
          {buttonText}
        </Button>

        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button variant="ghost" className="text-xl text-gray-700 hover:bg-amber-400 hover:text-white border-1 border-gray-400 hover:border-amber-400 flex items-center justify-center">{canvasText}</Button>
          </DialogTrigger>
          <DialogContent className="max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>{canvasText}</DialogTitle>
            </DialogHeader>
            <ul className="space-y-4 mt-4">
              {steps.map((step) => (
                <li key={step.step}>
                  <button
                    className="text-left w-full text-gray-700 hover:text-amber-600"
                    onClick={() => handleStepClick(step.step)}
                  >
                    <span className="font-semibold">{step.label}</span> – {step.text}
                  </button>
                </li>
              ))}
            </ul>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}