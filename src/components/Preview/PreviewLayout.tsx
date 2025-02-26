'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import AnimatedElement from '../Animation/AnimatedElement'
import { ReactNode } from 'react'
import { StaticImageData } from 'next/image'
import { handleScroll } from '../util/handleScroll'
import StepButton from '../Buttons/Button'

import OffCanvas from './OffCanvas'





interface PreviewLayoutProps {

  imageSource: StaticImageData
  heading: string
  subheading: ReactNode
  buttonText: string
  canvasText: string
  buttonAction: { target: string, offset: number }
  steps: { label: string; text: string; step: string }[]

}

const PreviewLayout: React.FC<PreviewLayoutProps> = ({  imageSource, heading, subheading, buttonText, canvasText, buttonAction, steps }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  


  const onOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleLinkClick = (target: string, offset: number) => {
    setIsModalOpen(false);
    // Short delay to allow the modal to close
    setTimeout(() => {
      handleScroll(target, offset);
    }, 0);
  };
 
 
  return (

    <AnimatedElement className=" max-w-6xl mx-auto px-4 flex flex-col self-center relative h-screen bg-white/4 backdrop-blur-xl rounded-xl shadow-lg p-10 items-center">
      {/* Content-Bereich */}
      <div className="h-1/4 relative mx-auto" data-aos="fade-up">
        <Image 
          className="rounded-full max-w-full mx-auto h-auto p-7 absolute left-1/2 top-3/4 transform -translate-x-1/2 -translate-y-1/2 z-[-1]" 
          src={imageSource} 
          width={440} 
          height={305} 
          alt="Arbeitsvertrag" 
        />
        <div className="invisible relative">
          <Image 
            className="rounded-full max-w-full mx-auto " 
            src={imageSource} 
            width={450} 
            height={350} 
            alt="Placeholder Arbeitsvertrag" 
          />
        </div>
      </div>
      {/* Inhalt */}
      <div className="h-2/3 flex flex-col justify-between  mx-auto " data-aos="fade-left">
        <div className="text-center mx-auto">
          <h3 className="text-3xl sm:text-4xl text-center mb-5 inline-block rounded-full bg-gradient-to-r from-amber-400 via-amber-300 to-amber-200 backdrop-blur-xl shadow-lg p-8">
            {heading}
          </h3>
          <p className="text-2xl text-center text-gray-600 mb-4 max-w-xl">
            {subheading}
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 w-full">
         {buttonText && <div id="previewScroll">
            <StepButton
              buttonLabel={buttonText}
              buttonAction={{ type: 'scroll', target: buttonAction.target, offset: buttonAction.offset }}
              variant="cta"
            />


             
          </div>}

          {/* Trigger-Button für das Modal */}
          <div>
            <button
              onClick={() => onOpenModal()}
              className="
                border-b-4 border-gray-200
                text-xl text-gray-500
                cursor-pointer
                focus:outline-none
                pb-4
              "
            >
              <p className="text-2xl text-gray-600">
                <span className="group relative">
                  <span className="relative">
                    {canvasText}
                    <span
                      className="
                        absolute left-0 bottom-[-20px] w-full h-1 
                        bg-amber-400 origin-center transform scale-x-0 
                        transition-transform duration-300 ease-out 
                        group-hover:scale-x-100 rounded-full 
                      "
                    />
                  </span>
                </span>
              </p>
            </button>
          </div>
        </div>

        <div className="space-y-6">

        </div>
      </div>
      <OffCanvas 
        steps={steps}
        canvasText={canvasText}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onLinkClick={handleLinkClick}
      />

    </AnimatedElement>
   
  )
}

export default PreviewLayout