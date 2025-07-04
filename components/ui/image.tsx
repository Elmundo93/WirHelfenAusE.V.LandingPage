'use client'
import Image, { ImageProps, StaticImageData } from 'next/image'

interface CustomImageProps extends Omit<ImageProps, 'src'> {
  src: string | StaticImageData
  isSvg?: boolean
  fill?: boolean
  sizes?: string
}

export default function CustomImage({ src, isSvg, fill, sizes, ...props }: CustomImageProps) {
  // For SVG files, use unoptimized to prevent hydration issues
  if (isSvg || (typeof src === 'string' && src.endsWith('.svg'))) {
    return (
      <Image
        {...props}
        src={src}
        fill={fill}
        unoptimized
        sizes={sizes}
        alt={props.alt || ''}
        style={{ 
          ...props.style,
          // Only add width/height if not using fill prop
          ...(fill ? {} : {
            width: props.style?.width || 'auto',
            height: props.style?.height || 'auto',
            maxWidth: props.style?.maxWidth || '100%',
            maxHeight: props.style?.maxHeight || '100%'
          })
        }}
      />
    )
  }

  // For other images, use normal optimization with proper aspect ratio handling
  return (
    <Image 
      {...props} 
      src={src} 
      fill={fill}
      sizes={sizes}
      alt={props.alt || ''}
      style={{ 
        ...props.style,
        // Only add width/height if not using fill prop
        ...(fill ? {} : {
          width: props.style?.width || 'auto',
          height: props.style?.height || 'auto',
          maxWidth: props.style?.maxWidth || '100%',
          maxHeight: props.style?.maxHeight || '100%'
        })
      }}
    />
  )
} 
