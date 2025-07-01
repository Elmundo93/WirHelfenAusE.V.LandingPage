
import Image, { StaticImageData } from "next/image"

import CustomImage from "@/components/ui/image"

type Props = {
  src: StaticImageData
  alt: string
  className?: string
  fill?: boolean
}

export default function ShadcnImageWrapper({ src, alt, className = "", fill = true }: Props) {
  return (
    <div className={`relative ${className}`}>
      <CustomImage
        src={src}
        alt={alt}
        fill={fill}
        className="object-contain rounded-full shadow-md"
        loading="eager"
        isSvg={true}
      />
    </div>
  )
}