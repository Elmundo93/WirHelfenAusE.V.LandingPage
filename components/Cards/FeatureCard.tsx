// components/FeatureCard.tsx
import { Card, CardContent } from '@/components/ui/card'
import CustomImage from '@/components/ui/image'
import { StaticImageData } from 'next/image'

interface FeatureCardProps {
  icon: StaticImageData
  title: string
  description: string
  alt: string
}

export default function FeatureCard({ icon, title, description, alt }: FeatureCardProps) {
  // Amber/golden blur placeholder
  const amberBlurDataURL = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="

  return (
    <Card className="text-center backdrop-blur-xl shadow-lg bg-white/30 h-full flex flex-col">
      <CardContent className="flex flex-col items-center p-6 h-full justify-between">
        <div className="flex flex-col items-center flex-1">
          <div className="h-[90px] w-[90px] flex items-center justify-center mb-4">
            <CustomImage 
              width={75} 
              height={75} 
              alt={alt} 
              src={icon} 
              loading="lazy"
              placeholder="blur"
              blurDataURL={amberBlurDataURL}
              isSvg={true}
            />
          </div>
          <h4 className="text-2xl font-semibold mb-3">{title}</h4>
          <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>
      </CardContent>
    </Card>
  )
}