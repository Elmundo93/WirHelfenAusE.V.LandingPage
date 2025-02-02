'use client'

import People from '../../public/images/licensed/3143372.jpg'
import Image from 'next/image'
import { motion } from 'framer-motion'
import RightArrow from '../../public/animation/Right Arrow.json'
import { useRouter } from 'next/navigation'
import dynamic from 'next/dynamic'

const LottieView = dynamic(() => import('lottie-react'), { ssr: false })

export default function Hero() {
  // Animation für den Scribble Effekt
  const animationData = require('../../public/Scribble Line.json')

  // Smooth Scroll Funktion (clientseitig)
  const handleScroll = () => {
    const target = document.querySelector('#ÜberUns')
    if (target) {
      const offset = 0
      const elementPosition = target.getBoundingClientRect().top + window.scrollY
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      })
    }
  }

  const router = useRouter()
  const NavigateToAbout = () => {
    router.push('/about')
  }

  return (
    // Als relative Container, damit alle absolut positionierten Elemente daran ausgerichtet werden
    <section className="relative h-full">
      {/* Hintergrundbild */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 z-0"
      >
        <Image
          src={People}
          alt="Helfende Menschen"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
      </motion.div>

      {/* Content-Bereich – er liegt über dem Hintergrund */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pt-32 pb-10 md:pt-30 md:pb-16">
        <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
          <h1 className="text-5xl mb-4 md:text-7xl" data-aos="fade-up">
            Wir helfen ihnen, eine{' '}
            <span className="text-amber-500 relative">
              helfende Hand
              {/* Scribble-Effekt – als absolut positioniertes Element hinter dem Text */}
              <span className="absolute left-0 bottom-[-60px] w-full lg:bottom-[-90px] md:bottom-[-90px]">
                <LottieView
                  animationData={animationData}
                  loop={false}
                  autoplay
                  style={{ width: '100%', height: 'auto' }}
                  aria-hidden="true"
                  // In diesem Kontext sorgt diese Klasse dafür, dass der Scribble hinter dem Text liegt
                  className="z-[-1]"
                />
              </span>
            </span>
            <div className="h-3" />
            <span className="text-5xl mb-4 md:text-7xl relative">zu finden!</span>
          </h1>

          <p
            className="text-3xl text-gray-500 mb-8"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            -oder eine zu werden!
          </p>

          <div className="space-y-6" data-aos="fade-up" data-aos-delay="400">
            <button
              onClick={handleScroll}
              className="relative group overflow-hidden px-4 py-2 border-4 border-gray-400 rounded-full transition-colors duration-200 hover:text-white hover:border-amber-400 text-2xl text-gray-500 shadow-lg"
            >
              <span className="relative z-10">
                Schnell und einfach mit der AushilfApp!
              </span>
              {/* Hover-Overlay */}
              <span
                className="absolute inset-0 bg-amber-400 transform translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0"
              />
            </button>
          </div>

          <div className="flex justify-center mt-10">
            <a className="group cursor-pointer" onClick={NavigateToAbout}>
              <div className="flex flex-col pb-4 border-b border-gray-200">
                <p className="text-2xl text-gray-500">
                  <span className="relative">
                    Mehr Erfahren!
                    <span className="absolute left-0 bottom-[-18px] w-full h-0.5 bg-amber-500 origin-center transform scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
                  </span>
                </p>
              </div>
              <div className="flex justify-center">
                <LottieView
                  animationData={RightArrow}
                  loop
                  className="rotate-90 w-32 h-32"
                />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}