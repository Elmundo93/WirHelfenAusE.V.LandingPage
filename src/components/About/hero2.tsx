'use client';

import People from '../../../public/images/licensed/3143372.jpg';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import RightArrow from '../../../public/animation/Right Arrow.json'
const LottieView = dynamic(() => import('lottie-react'), { ssr: false });
import AnimatedElement from '../Animation/AnimatedElement'
import { useHeaderHeight } from '../headerHeight'
import DankeSagen from '../../../public/images/DankeSagen.png'
import { handleScroll } from '../util/handleScroll'

export default function Hero2() {

  const headerHeight = useHeaderHeight()

  const NavigateToAbout = () => {
    const target = document.querySelector('#zigzag2');
    target?.scrollIntoView({ behavior: 'smooth' });
  };
  const animationData = require('../../../public/Scribble Line.json');

  return (
    <section className="relative h-full"    style={{ marginTop: `${headerHeight}px` }}>
   
 

    <AnimatedElement className="h-full">
    {/* Content-Bereich – er liegt über dem Hintergrund */}
    <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pt-32 pb-10 md:pt-30 md:pb-16">
      <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16  border-t-0 backdrop-blur-sm rounded-2xl">
          <h1 className="text-3xl text-gray-500 mt-[-100px] py-4 " data-aos="fade-up" data-aos-delay="200">
              <br />Sicher, Zugänglich & Intuitiv!
            </h1>
            <h2 className="text-5xl mb-4 md:text-7xl relative py-10" data-aos="fade-up">
              Die{' '}
              <span className="relative inline-block">
                {/* Wrapping the text */}
                <span className="text-amber-500 relative">
                  AushilfApp</span>!
                  {/* Lottie animation underneath */}
                  <span className="absolute left-0 bottom-[-50px] sm:bottom-[-90px] w-full">
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
            </h2>

            <h2 className="text-2xl text-gray-500 mb-8" data-aos="fade-up" data-aos-delay="200">
              Schnell und einfach mit der App eine helfende Hand aus der Nähe finden!
            </h2>
            <h2 className="text-2xl text-gray-500 mb-8" data-aos="fade-up" data-aos-delay="200">
              -oder einfach selbst eine werden!
            </h2>

            <div className="space-y-6">

            <div data-aos="fade-up" data-aos-delay="400">
    <button
    onClick={NavigateToAbout}
    className="
      relative group
      overflow-hidden
      px-4 py-2
      border-4 border-gray-400
        
      rounded-full
      transition-colors duration-200
      hover:text-white
      hover:border-amber-400
      text-2xl text-gray-500
      shadow-lg  "
  >
    {/* Der eigentliche Button-Text */}
    <span className="relative z-10">Schnell und einfach mit der AushilfApp!</span>

    {/* Overlay, das sich beim Hover nach oben schiebt */}
    <span
      className="
        absolute inset-0
        bg-amber-400
        transform translate-y-full
        transition-transform duration-300 ease-in-out
        group-hover:translate-y-0
        z-0
      "
    />
  </button>   </div>
            
              <div className="flex justify-center mt-10">
      <a  className="group cursor-pointer" onClick={() => handleScroll('#preview2')}>
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