'use client'

import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import HelpingPeople from '../../../public/images/Help and support to climbing employee from mentor or leader hand.png'
import AnimatedElement from '../Animation/AnimatedElement'
import Image from 'next/image'
import { useEffect } from 'react'
import { handleScroll } from '../util/handleScroll'

// Globaler Wheel-Listener (bleibt unverändert)
function GlobalWheelScroll({ enabled }: { enabled: boolean }) {
  useEffect(() => {
    if (!enabled) return

    const handleWheel = (e: WheelEvent) => {
      window.scrollBy({ top: e.deltaY, behavior: 'auto' })
    }

    window.addEventListener('wheel', handleWheel, { passive: true })
    return () => window.removeEventListener('wheel', handleWheel)
  }, [enabled])
  return null
}

export default function Preview() {


  // Neuer Handler, der mit einem Delay scrollt – so wird erst nach Schließen des Dropdowns
  // der Ziel-Abschnitt gefunden.


  return (
    <section id="preview" className="relative">
      <AnimatedElement className="h-full bg-white/4 backdrop-blur-xl rounded-xl shadow-lg p-10 lg:grid md:grid-cols-12 lg:gap-6 items-center">
        {/* Content-Bereich */}
        <div  className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-14 lg:col-span-12" data-aos="fade-left">
          <div className="relative mt-60 mb-20">
            <Image 
              className="rounded-full max-w-full mx-auto md:max-w-none h-auto p-7 absolute z-[-1] top-[-300px] left-1/2 transform -translate-x-1/2" 
              src={HelpingPeople} 
              width={540} 
              height={405} 
              alt="Features 03" 
            />
            <div className="flex justify-center">
            <div className="inline-block rounded-full bg-gradient-to-r from-amber-400 via-amber-300 to-amber-200 backdrop-blur-xl shadow-lg px-6 py-3">
                <h1 className="text-4xl text-center z-[1] text-gray-700">Unser Schritt für Schritt Guide!</h1>
              </div>
            </div>
          </div>
          <h2 className="text-3xl text-gray-500 mb-8 text-center">
            Finde nützliche Informationen und eine umfassende Anleitung!
          </h2>
          
          <div id="previewScroll" className="flex justify-center mb-10">
            <button
              onClick={() => handleScroll('#guideStep1', 0)}
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
                shadow-lg
              "
            >
              <span className="relative z-10">Direkt zum Guide!</span>
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
            </button> 
          </div>

          {/* Dropdown-Menü */}
          <Menu as="div" className="relative inline-block text-left justify-center min-w-full">
            {({ open }) => (
              <>
                {/* Globaler Scroll-Listener aktiv, wenn das Dropdown offen ist */}
                <GlobalWheelScroll enabled={open} />

                <div className="flex justify-center w-full">
                  <MenuButton
                    className="
                      flex 
                      pb-4
                      border-b-4 border-gray-200
                      text-xl text-gray-500
                      cursor-pointer
                      focus:outline-none
                    "

                    onClick={(e) => {
                      if (!open) {
                        handleScroll('#previewScroll', 0)
                      }
                      else {
                        handleScroll('#preview', 0)
                        }
                      
                    }}
                  >
                    <p className="text-2xl text-gray-500">
                      <span className="group relative">
                        <span className="relative justify-center">
                          Übersicht aller Schritte
                          <span
                            className="
                              absolute left-0 bottom-[-20px] w-full h-1 
                              bg-amber-500 origin-center transform scale-x-0 
                              transition-transform duration-300 ease-out 
                              group-hover:scale-x-100 rounded-full
                            "
                          />
                        </span>
                      </span>
                    </p>
                  </MenuButton>
                </div>

                <div className="flex justify-center w-full">
                  <MenuItems
                    transition
                    className={`
                      list-disc text-xl text-gray-500 
                      space-y-6 md:space-y-8 
                      max-w-3xl w-full px-4 
                      transform origin-top transition duration-200 ease-out 
                      data-[closed]:scale-95 data-[closed]:opacity-0
                    `}
                  >
                    {/* Beispiel: Schritt 1 */}
                    <MenuItem
                      as="li"
                      className="flex flex-col pb-4 pt-4 border-b border-gray-200 focus:outline-none"
                    >
                      {({ active }) => (
                        <>
                          <a onClick={() => handleScroll('#guideStep1', 800)} className="cursor-pointer block">
                            <span className="font-semibold">Schritt 1:</span>
                            <br/>
                            <span className="group relative cursor-pointer">
                              <span className="relative">
                                Finde deine helfende Hand mit der AushilfApp!
                                <span
                                  className="
                                    absolute left-0 bottom-[-18px] w-full h-0.5 
                                    bg-amber-500 origin-center transform scale-x-0 
                                    transition-transform duration-300 ease-out 
                                    group-hover:scale-x-100
                                  "
                                />
                              </span>
                            </span>
                          </a>
                        </>
                      )}
                    </MenuItem>
                    <MenuItem
          as="li"
          className="flex flex-col pb-4 border-b border-gray-200 focus:outline-none"
        >
          {({ active }) => (
            <>
              
              <a onClick={() => handleScroll('#guideStep2', 800)} className="cursor-pointer block">


              
              <span className="font-semibold">Schritt 2:</span>
              <br/>
              <span className="group relative cursor-pointer">
                <span className="relative">
                  Bereite einen Arbeitsvertrag vor!
                  <span
                    className="
                      absolute 
                      left-0 
                      bottom-[-18px] 
                      w-full 
                      h-0.5 
                      bg-amber-500 
                      origin-center 
                      transform 
                      scale-x-0 
                      transition-transform 
                      duration-300 
                      ease-out 
                      group-hover:scale-x-100
                    "
                  />
                </span>
              </span>
              </a>
            </>
          )}
        </MenuItem>

        {/* Schritt 3 */}
        <MenuItem
          as="li"
          className="flex flex-col pb-4 border-b border-gray-200 focus:outline-none"
        >
          {({ active }) => (
            <>
              <a onClick={() => handleScroll('#guideStep3', 800)} className="cursor-pointer block">
                <span className="font-semibold">Schritt 3:</span>
                <br/>
                <span className="group relative cursor-pointer">
                  <span className="relative">
              Melde deine helfende Hand bei der Minijobzentrale an!
              <span
                className="
                  absolute 
                  left-0 
                  bottom-[-18px] 
                  w-full 
                  h-0.5 
                  bg-amber-500 
                  origin-center 
                  transform 
                  scale-x-0 
                  transition-transform 
                  duration-300 
                  ease-out 
                  group-hover:scale-x-100
                "
              />
            </span>
          </span>
          </a>
          </>
        )}
        </MenuItem>

        {/* Schritt 3, Teil 2 */}
        <MenuItem
          as="li"
          className="flex flex-col space-y-1 pb-4 border-b border-gray-200 focus:outline-none"
        >
          {({ active }) => (
            <>
              <a onClick={() => handleScroll('#guideStep4', 800)} className="cursor-pointer block">
                <span className="font-semibold">Schritt 3, Teil 2:</span>
                <br/>
                <span className="group relative cursor-pointer">
                  <span className="relative">
              Details zu Anmeldung
              <span
                className="
                  absolute 
                  left-0 
                  bottom-[-18px] 
                  w-full 
                  h-0.5 
                  bg-amber-500 
                  origin-center 
                  transform 
                  scale-x-0 
                  transition-transform 
                  duration-300 
                  ease-out 
                  group-hover:scale-x-100
                "
              />
            </span>
          </span>
          </a>
          </>
        )}
        </MenuItem>

        {/* Schritt 4 */}
        <MenuItem
          as="li"
          className="flex flex-col pb-4 border-b border-gray-200 focus:outline-none"
        >
          {({ active }) => (
            <>
              <a onClick={() => handleScroll('#guideStep5', 800)} className="cursor-pointer block">
                <span className="font-semibold">Schritt 4:</span>
                <br/>
                <span className="group relative cursor-pointer">
                  <span className="relative">
              Kalkulation der Abgaben
              <span
                className="
                  absolute 
                  left-0 
                  bottom-[-18px] 
                  w-full 
                  h-0.5 
                  bg-amber-500 
                  origin-center 
                  transform 
                  scale-x-0 
                  transition-transform 
                  duration-300 
                  ease-out 
                  group-hover:scale-x-100
                "
              />
            </span>
          </span>
          </a>
          </>
        )}
        </MenuItem>

        {/* Schritt 4, Teil 2 */}
        <MenuItem
          as="li"
          className="flex flex-col pb-4 border-b border-gray-200 focus:outline-none"
        >
          {({ active }) => (
            <>
              <a onClick={() => handleScroll('#guideStep6', 800)} className="cursor-pointer block">
                <span className="font-semibold">Schritt 4, Teil 2:</span>
                <br/>
                <span className="group relative cursor-pointer">
                  <span className="relative">
              Abgabedetails für helfende Hände!
              <span
                className="
                  absolute 
                  left-0 
                  bottom-[-18px] 
                  w-full 
                  h-0.5 
                  bg-amber-500 
                  origin-center 
                  transform 
                  scale-x-0 
                  transition-transform 
                  duration-300 
                  ease-out 
                  group-hover:scale-x-100
                "
              />
            </span>
          </span>
          </a>
          </>
        )}
        </MenuItem>

        {/* Schritt 4, Teil 3 */}
        <MenuItem
          as="li"
          className="flex flex-col pb-4 border-b border-gray-200 focus:outline-none"
        >
          {({ active }) => (
            <>
              <a onClick={() => handleScroll('#guideStep7', 800)} className="cursor-pointer block">
                <span className="font-semibold">Schritt 4, Teil 3:</span>
                <br/>
                <span className="group relative cursor-pointer">
                  <span className="relative">
              Abgabedetails für Arbeitgeber!
              <span
                className="
                  absolute 
                  left-0 
                  bottom-[-18px] 
                  w-full 
                  h-0.5 
                  bg-amber-500 
                  origin-center 
                  transform 
                  scale-x-0 
                  transition-transform 
                  duration-300 
                  ease-out 
                  group-hover:scale-x-100
                "
              />
            </span>
          </span>
          </a>
          </>
        )}
        </MenuItem>

        {/* Schritt 5 (ohne border-bottom) */}
        <MenuItem
          as="li"
          className="flex flex-col pb-4 focus:outline-none"
        >
          {({ active }) => (
            <>
              <a onClick={() => handleScroll('#guideStep8', 800)} className="cursor-pointer block">
                <span className="font-semibold">Schritt 5:</span>
                <br/>
                <span className="group relative cursor-pointer">
                  <span className="relative">
              Kurzzeitige Beschäftigung
              <span
                className="
                  absolute 
                  left-0 
                  bottom-[-18px] 
                  w-full 
                  h-0.5 
                  bg-amber-500 
                  origin-center 
                  transform 
                  scale-x-0 
                  transition-transform 
                  duration-300 
                  ease-out 
                  group-hover:scale-x-100
                "
              />
            </span>
          </span>
          </a>
          </>
        )}
        </MenuItem>
                  </MenuItems>
                </div>
              </>
            )}
          </Menu>

          <div className="space-y-6">
            {/* Weitere Inhalte */}
          </div>
        </div>
      </AnimatedElement>
    </section>
  )
}