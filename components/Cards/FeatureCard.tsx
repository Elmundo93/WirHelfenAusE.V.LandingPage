// components/FeatureCard.tsx
import { Card, CardContent } from '@/components/ui/card'
import Image, { StaticImageData } from 'next/image'

interface FeatureCardProps {
  icon: StaticImageData
  title: string
  description: string
  alt: string
}

export default function FeatureCard({ icon, title, description, alt }: FeatureCardProps) {
  return (
    <Card className="text-center backdrop-blur-xl shadow-lg bg-white/30">
      <CardContent className="flex flex-col items-center p-6">
        <Image width={75} height={75} alt={alt} src={icon} />
        <h4 className="text-2xl mt-4">{title}</h4>
        <p className="text-gray-600 mt-2">{description}</p>
      </CardContent>
    </Card>
  )
}