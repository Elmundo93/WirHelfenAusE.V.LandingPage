'use client'

import Image from "next/image"
import AnimatedElement from "@/components/Animation/AnimatedElement"
import StepButton, { ButtonAction } from "@/components/Buttons/StepButton"

type ZigZagItem = {
  title: string
  text: string
  imageSrc: string
  imageAlt: string
  reverse?: boolean
  buttonLabel?: string
  buttonAction?: ButtonAction
  id?: string
  buttonActionOffset?: number
}

export default function ZigZagLayout({ items }: { items: ZigZagItem[] }) {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">
          <div className="grid gap-20">
            {items.map((item, i) => (
              <AnimatedElement
                key={i}
                className="relative h-full bg-white/4 backdrop-blur-xl rounded-xl shadow-lg p-10 lg:grid md:grid-cols-12 lg:gap-6 items-center md:items-center"
                id={item.id}
              >
                {/* Image */}
                <div
                  className={`max-w-md md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 flex justify-center items-center md:justify-center md:items-center ${
                    (i % 2 === 0) ? "md:order-1 sm:order-1" : ""
                  }`}
                  data-aos="fade-up"
                >
                  <Image
                    className="z-[-50] absolute top-32 lg:relative lg:top-auto lg:mx-auto lg:block rounded-full max-w-full mx-auto md:max-w-none h-auto p-7"
                    src={item.imageSrc}
                    width={540}
                    height={405}
                    alt={item.imageAlt}
                  />
                  <Image
                    className=" invisible lg:hidden rounded-full max-w-full mx-auto md:max-w-none h-auto p-7"
                    src={item.imageSrc}
                    width={540}
                    height={405}
                    alt={item.imageAlt}
                  />
                </div>

                {/* Text */}
                <div
                  className={`max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 ${
                    (i % 2 === 0) ? "" : "md:order-2"
                  }`}
                  data-aos={(i % 2 === 0) ? "fade-right" : "fade-left"}
                >
                  <div className={`md:${(i % 2 === 0) ? "pr-4 lg:pr-12 xl:pr-16" : "pl-4 lg:pl-12 xl:pl-16"}`}>
                    <div className="flex justify-center mb-5">
                      <h3 className="relative text-4xl text-center rounded-xl py-4 px-10 bg-white shadow-lg bg-gradient-to-r from-amber-400 via-amber-300 to-amber-200 backdrop-blur-xl shadow-lg">{item.title}</h3>
                    </div>
                    <p className="text-2xl text-center text-gray-500 mb-4 whitespace-pre-line">
                      {item.text}
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
                    </p>
                  </div>
                </div>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}