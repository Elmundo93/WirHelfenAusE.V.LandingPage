'use client'

import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'

import AnimatedElement from '../Animation/AnimatedElement'
import Image from 'next/image'
import { useEffect } from 'react'
import IdeaCrafting from '../../../public/images/IdeaCrafting.png'
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


export default function Preview2() {




  // Neuer Handler, der mit einem Delay scrollt – so wird erst nach Schließen des Dropdowns

  return (
    <section id="preview2" className="relative">
  <div  className="flex justify-center">
  <AnimatedElement className="relative h-full w-full  rounded-xl shadow-lg p-10 items-center justify-center">
    {/* Inhalt */}
    <div className="max-w-xl md:max-w-none md:w-full mx-auto " data-aos="fade-left">
      <AnimatedElement 
        className="relative flex flex-col max-w-3xl mx-auto text-center pb-12 bg-white/4 backdrop-blur-xl rounded-xl shadow-lg p-4" 
        data-aos="fade-up"
      >
        {/* Container für Überschrift inkl. Hintergrundbild */}
        <div className="relative inline-block w-full max-w-md mx-auto">
          {/* Hintergrundbild – absolut positioniert */}
          <div className="absolute inset-0 -z-10">
            <Image
              src={IdeaCrafting}
              alt="Arbeitsvertrag"
              fill
              className="object-contain rounded-full"
            />
          </div>
          {/* Invisible Placeholder sorgt dafür, dass der Container 
              die Höhe des Bildes übernimmt */}
          <div className="invisible">
            <Image
              src={IdeaCrafting}
              alt="Arbeitsvertrag"
              width={540}
              height={405}
              className="rounded-full"
            />
          </div>
          <div className="inline-block rounded-full bg-gradient-to-r from-amber-400 via-amber-300 to-amber-200 backdrop-blur-xl shadow-lg px-6 py-3">
                <h1 className="text-4xl text-center z-[1] text-gray-700">Die Idee:</h1>
              </div>
            </div>
        <p className="text-2xl text-center text-gray-500 mt-10">
          Finde Möglichkeiten, dort zu helfen wo du kannst!<br /><br />- oder jemanden, der es kann!<br /><br />Klingt einfach? Ist es auch!
        </p>

        <div id="previewScroll" data-aos="fade-up" data-aos-delay="400" className="flex justify-center gap-4 mt-10">
        <button
              onClick={() => handleScroll('#AboutStep1', 0)}
              className="relative group overflow-hidden px-4 py-2 border-4 border-gray-400 rounded-full transition-colors duration-200 hover:text-white hover:border-amber-400 text-2xl text-gray-500 shadow-lg"
            >
              <span className="relative z-10">
            Direkt zur Anleitung!
              </span>
              {/* Hover-Overlay */}
              <span
                className="absolute inset-0 bg-amber-400 transform translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0"
              />
            </button>

            
        </div>
        <Menu as="div" className="relative inline-block text-left justify-center min-w-full mt-10">
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
                          handleScroll('#guideStep2', 0)
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
                          <a onClick={() => handleScroll('#AboutStep1', 400)} className="cursor-pointer block">
                            <span className="font-semibold">Schritt 1:</span>
                            <br/>
                            <span className="group relative cursor-pointer">
                              <span className="relative">
                                App herunterladen & ein Konto erstellen!
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
              
              <a onClick={() => handleScroll('#AboutStep2', 600)} className="cursor-pointer block">


              
              <span className="font-semibold">Schritt 2:</span>
              <br/>
              <span className="group relative cursor-pointer">
                <span className="relative">
                Umschauen & Erkunden!
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
              <a onClick={() => handleScroll('#AboutStep3', 600)} className="cursor-pointer block">
                <span className="font-semibold">Schritt 3:</span>
                <br/>
                <span className="group relative cursor-pointer">
                  <span className="relative">
                Beitrag verfassen!
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
              <a onClick={() => handleScroll('#AboutStep4', 600)} className="cursor-pointer block">
                <span className="font-semibold">Schritt 4:</span>
                <br/>
                <span className="group relative cursor-pointer">
                  <span className="relative">
              In Kontakt treten!
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
              <a onClick={() => handleScroll('#AboutStep5', 600)} className="cursor-pointer block">
                <span className="font-semibold">Schritt 5:</span>
                <br/>
                <span className="group relative cursor-pointer">
                  <span className="relative">
                Schlau machen!
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
              <a onClick={() => handleScroll('#AboutStep6', 600)} className="cursor-pointer block">
                <span className="font-semibold">Schritt 5:</span>
                <br/>
                <span className="group relative cursor-pointer">
                  <span className="relative">
                Danke sagen!
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

      </AnimatedElement>

  
    </div>
  </AnimatedElement>
</div>

          {/* Dropdown-Menü */}
         

          <div className="space-y-6">
            {/* Weitere Inhalte */}
          </div>

      

      
      </section>
  )
}