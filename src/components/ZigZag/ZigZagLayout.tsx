'use client';

import React from 'react';
import Image, { StaticImageData } from 'next/image';
import AnimatedElement from '../Animation/AnimatedElement';

export interface ZigZagStep {
  id: string;
  image: StaticImageData;
  imageAlt: string;
  heading: string;
  text: React.ReactNode;
  reverse?: boolean;
  imageClass?: string;
}

interface ZigZagLayoutProps {
  steps: ZigZagStep[];
}

interface StepContentProps {
  step: ZigZagStep;
  className?: string;
}

const StepContent: React.FC<StepContentProps> = ({ step, className = '' }) => (
  <div
    className={`max-w-xl md:max-w-none md:w-full mx-auto mt-12 ${className}`}
    data-aos="fade-left"
  >
    <div className="relative">
    <div className="invisible lg:absolute">
      <Image
        src={step.image}
        alt={`Placeholder ${step.imageAlt}`}
        width={120}
        height={120}
        className="rounded-full max-w-full mx-auto p-7"
        placeholder="blur"
      />
    </div>
      {/* Mobile overlay image */}
      <div className="absolute -top-56  inset-0 flex justify-center items-center lg:hidden">
        
        <Image
          src={step.image}
          alt={step.imageAlt}
          width={540}
          height={405}
          className={`${step.imageClass}`}
          placeholder="blur"
        />
      </div>
      <h3
        id={`${step.id}-heading`}
        className="relative flex self-center justify-center text-4xl text-center mb-5 inline-block rounded-full bg-gradient-to-r from-amber-400 via-amber-300 to-amber-200 backdrop-blur-xl shadow-lg p-8"
      >
        {step.heading}
      </h3>
    </div>

    <div className=" text-2xl text-center text-gray-600 mb-4 ">{step.text}</div>
    </div>

);

interface StepImageProps {
  step: ZigZagStep;
  className?: string;
}

const StepImage: React.FC<StepImageProps> = ({ step, className = '' }) => (
  <div
    className={`hidden lg:block relative ${className}`}
    data-aos="fade-up"
  >
    <Image
      src={step.image}
      alt={step.imageAlt}
      width={540}
      height={405}
      className={`${step.imageClass} max-w-full mx-auto h-auto p-7`}
      placeholder="blur"
    />
 
  </div>
);

const ZigZagLayout: React.FC<ZigZagLayoutProps> = ({ steps }) => {
  return (
    <section className="z-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">
          <div className="grid gap-20">
            {steps.map((step) => (
              <article
                key={step.id}
                id={step.id}
                className="flex"
                aria-labelledby={`${step.id}-heading`}
              >
                <AnimatedElement className="h-full bg-white/4 backdrop-blur-xl rounded-xl shadow-lg p-10 lg:grid md:grid-cols-12 lg:gap-6 items-center justify-center">
               
                  <StepImage
                    step={step}
                    className={`md:col-span-5 lg:col-span-6 ${step.reverse ? 'lg:order-2' : 'lg:order-1'} ${step.imageClass}`}
                  />
                  <StepContent
                    step={step}
                    className={`md:col-span-7 lg:col-span-6 ${step.reverse ? 'lg:order-1' : 'lg:order-2'} ${step.imageClass}`}
                  />
                </AnimatedElement>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ZigZagLayout;