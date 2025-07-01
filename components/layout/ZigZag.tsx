'use client'

import { motion } from 'framer-motion'
import CustomImage from "@/components/ui/image"
import StepButton from "@/components/Buttons/StepButton"
import TranslatedText from "@/components/ui/TranslatedText"
import { ZigZagItem } from '@/components/types/FeatureType'

export default function ZigZagLayout({ items }: { items: ZigZagItem[] }) {
  // Amber/golden blur placeholder
  const amberBlurDataURL = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="

  // Helper function to determine if image is SVG
  const isSvgImage = (src: string) => {
    return typeof src === 'string' && src.endsWith('.svg')
  }

  return (
    <section className="w-full">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-amber-200/40">
          <div className="grid gap-16 md:gap-20">
            {items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 1, scale: 1, y: 0 }}
                whileHover={{ 
                  scale: 1.03,
                  y: -5,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                whileTap={{ 
                  scale: 0.98,
                  transition: { duration: 0.1 }
                }}
                className="relative bg-white/4 backdrop-blur-xl rounded-xl shadow-lg p-6 md:p-10 border border-amber-200/20 hover:border-amber-300/30 transition-colors duration-300 hover:shadow-amber-100/20 overflow-hidden transform-gpu"
                id={item.id}
              >
                {/* Mobile Layout - Image above heading */}
                <div className="lg:hidden w-full">
                  {/* Mobile image container with proper spacing */}
                  <div className="w-full h-[280px] mb-6 flex justify-center items-center">
                        <CustomImage
                          className="rounded-xl object-contain p-4 border-2 border-amber-200/30 hover:border-amber-300/50 transition-colors duration-300 shadow-lg hover:shadow-amber-100/30"
                          src={item.imageSrc}
                          fill={false}
                          width={320}
                          height={240}
                          alt={item.imageAlt}
                          sizes={isSvgImage(item.imageSrc) ? undefined : "(max-width: 768px) 100vw, 320px"}
                          loading="lazy"
                          placeholder="blur"
                          blurDataURL={amberBlurDataURL}
                          isSvg={isSvgImage(item.imageSrc)}
                          style={{ 
                            maxWidth: '320px', 
                            maxHeight: '240px',
                            objectFit: 'contain'
                          }}
                        />
                  </div>
                  
                  {/* Mobile text content */}
                  <div className="text-center w-full">
                    <div className="flex justify-center mb-4">
                                              <h3 className="text-2xl md:text-4xl text-center rounded-xl py-3 px-6 md:py-4 md:px-10 bg-white shadow-lg bg-gradient-to-r from-amber-400 via-amber-300 to-amber-200 backdrop-blur-xl border border-amber-200/30 hover:shadow-amber-200/30 transition-shadow duration-300">{item.title}</h3>
                    </div>
                    <div className="text-lg md:text-2xl text-center text-gray-500 mb-4 whitespace-pre-line">
                      <TranslatedText 
                        content={item.text}
                        className="text-lg md:text-2xl text-center text-gray-500"
                        linkClassName="text-amber-400 hover:text-amber-500 underline decoration-amber-400/60 hover:decoration-amber-500/80 transition-all duration-300 font-medium"
                      />
                      <br />
                      <br />
                      {item.buttonLabel && item.buttonAction && (
                        <StepButton
                          buttonLabel={item.buttonLabel}
                          buttonAction={item.buttonAction}
                          variant="cta"
                          buttonActionOffset={item.buttonActionOffset}
                        />
                      )}
                    </div>
                  </div>
                </div>

                {/* Desktop Layout - Grid with image and text side by side */}
                <div className="hidden lg:grid lg:grid-cols-12 lg:gap-6 lg:items-center w-full">
                  {/* Desktop Image */}
                  <div
                    className={`max-w-md md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 flex justify-center items-center md:justify-center md:items-center ${
                      (i % 2 === 0) ? "md:order-1 sm:order-1" : ""
                    }`}
                  >
                    <div className="relative w-full h-[350px] md:h-[405px]">
                      <CustomImage
                        className="rounded-full object-contain p-7 border-2 border-amber-200/30 hover:border-amber-300/50 transition-colors duration-300 shadow-lg hover:shadow-amber-100/30"
                        src={item.imageSrc}
                        fill={true}
                        alt={item.imageAlt}
                        sizes={isSvgImage(item.imageSrc) ? undefined : "(min-width: 1024px) 540px"}
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={amberBlurDataURL}
                        isSvg={isSvgImage(item.imageSrc)}
                        style={{ 
                          maxWidth: '500px', 
                          maxHeight: '400px',
                          objectFit: 'contain'
                        }}
                      />
                    </div>
                  </div>

                  {/* Desktop Text */}
                  <div
                    className={`max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 ${
                      (i % 2 === 0) ? "" : "md:order-2"
                    }`}
                  >
                    <div className={`md:${(i % 2 === 0) ? "pr-4 lg:pr-12 xl:pr-16" : "pl-4 lg:pl-12 xl:pl-16"}`}>
                      <div className="flex justify-center mb-5">
                        <h3 className="relative text-4xl text-center rounded-xl py-4 px-10 bg-white shadow-lg bg-gradient-to-r from-amber-400 via-amber-300 to-amber-200 backdrop-blur-xl border border-amber-200/30 hover:shadow-amber-200/30 transition-shadow duration-300">{item.title}</h3>
                      </div>
                      <div className="text-2xl text-center text-gray-500 mb-4 whitespace-pre-line">
                        <TranslatedText 
                          content={item.text}
                          className="text-2xl text-center text-gray-500"
                          linkClassName="text-amber-400 hover:text-amber-500 underline decoration-amber-400/60 hover:decoration-amber-500/80 transition-all duration-300 font-medium"
                        />
                        <br />
                        <br />
                        {item.buttonLabel && item.buttonAction && (
                          <StepButton
                            buttonLabel={item.buttonLabel}
                            buttonAction={item.buttonAction}
                            variant="cta"
                            buttonActionOffset={item.buttonActionOffset}
                          />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}