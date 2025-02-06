'use client';

import People from '../../../public/images/licensed/3143372.jpg';
import Image from 'next/image';

import { motion } from 'framer-motion';
import dynamic from 'next/dynamic'

import RightArrow from '../../../public/animation/Right Arrow.json'
import AnimatedElement from '../Animation/AnimatedElement'
import DankeSagen from '../../../public/images/DankeSagen.png'
import { useHeaderHeight } from '../headerHeight'

const LottieView = dynamic(() => import('lottie-react'), { ssr: false });

export default function Hero3() {
  const headerHeight = useHeaderHeight()
  const handleScroll = () => {    
    const target = document.querySelector('#preview');
    target?.scrollIntoView({ behavior: 'smooth' });
  };

  const animationData = require('../../../public/Scribble Line.json');

  return (
    <section className="relative h-full"    style={{ marginTop: `${headerHeight}px` }}>

    {/* Hintergrundbild */}
   
    <AnimatedElement className="h-full">
    {/* Content-Bereich – er liegt über dem Hintergrund */}
    <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pt-32 pb-10 md:pt-30 md:pb-16">
      <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16  border-t-0 backdrop-blur-sm rounded-2xl">
            <h1 className="text-5xl mb-4 md:text-7xl" data-aos="fade-up">
              Sie möchten ihre<br />
              <span className="relative inline-block">

                <span className="text-amber-500 relative">
                  helfende Hand{''} 

                  <span className="absolute left-0 bottom-[-60px] sm:bottom-[-60px] w-full lg:bottom-[-90px] md:bottom-[-90px]">
                    <LottieView
                      animationData={animationData}
                      loop={false}
                      autoplay={true}
                      style={{
                        width: '100%',
                        height: 'auto',
                      }}
                      className="z-[-1]"
                      aria-hidden="true"
                    />
                  </span>
                </span>
              </span>
              <br />
              <div className="h-3"></div> {/* Fügt zusätzlichen vertikalen Abstand hinzu */}
            <span className="text-5xl mb-4 md:text-7xl relative">
               anmelden?
            </span>
            </h1>
            <h2 className="text-3xl text-gray-500 mb-8" data-aos="fade-up" data-aos-delay="200">
              <br />Dann finden Sie hier nützliche Informationen rund um die Anmeldung eines Minijobbs!
            </h2>


            <div className="space-y-6">
            <div className="flex justify-center mt-10">
      <a  className="group cursor-pointer" onClick={handleScroll}>
        <div className="flex flex-col pb-4 border-b border-gray-200">
          <p className="text-2xl text-gray-500">
          <span className="relative  text-2xl text-gray-500">
            Mehr Erfahren!
            <span className="absolute left-0 bottom-[-18px] w-full h-0.5 bg-amber-500 origin-center transform scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
          </span>
          </p>
        </div>

        <div className="flex justify-center">
          <LottieView animationData={RightArrow} loop={true} className="rotate-90 w-32 h-32" />
        </div>
      </a>
    </div>
           
            </div>
          </div>
        </div>
        </AnimatedElement>
    </section>
  );
}