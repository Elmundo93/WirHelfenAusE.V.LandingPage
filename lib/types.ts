import { StaticImageData } from "next/image"
import { ComponentType } from "react"

export interface FeatureType {
  title: string
  description: string
  icon: ComponentType<{ className?: string }> // Lucide icon component
  image: StaticImageData
} 