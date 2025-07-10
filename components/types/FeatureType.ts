import { StaticImageData } from "next/image"
import { ComponentType } from "react"

export interface FeatureType {
  title: string
  description: string
  icon: ComponentType<{ className?: string }> // Lucide icon component
  image: StaticImageData
}

export interface ZigZagItem {
  title: string
  text: string
  imageSrc: string
  imageAlt: string
  reverse?: boolean
  buttonLabel?: string
  buttonAction?: {
    type: 'scroll' | 'navigate'
    target: string
  }
  id?: string
  buttonActionOffset?: number
} 