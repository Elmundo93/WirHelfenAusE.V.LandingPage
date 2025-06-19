import Image from "next/image"

type Props = {
  src: any
  alt: string
  className?: string
  fill?: boolean
}

export default function ShadcnImageWrapper({ src, alt, className = "", fill = true }: Props) {
  return (
    <div className={`relative ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill={fill}
        className="object-contain rounded-full shadow-md"
        loading="eager"
      />
    </div>
  )
}