import { StaticImageData } from "next/image"

export interface FeatureType {
  title: string
  description: string
  icon: any // Lucide icon component
  image: StaticImageData
} 