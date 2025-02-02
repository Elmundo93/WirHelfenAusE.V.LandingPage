'use client'

import Image from 'next/image'

import BeitragVerfassen from '../../../public/images/BeitragVerfassen.png'
import BeitragSuchen from '../../../public/images/SucheBeitrag.png'
import AnimatedElement from '../Animation/AnimatedElement'
import Sicherheit from '../../../public/images/safe-and-stable-svgrepo-com.svg'




export default function Zigzag2() {
  return (
    <section id="zigzag2">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
      

          {/* Items */}
          <div className="grid gap-20">

            {/* 1st item */}
            <AnimatedElement className="h-full bg-white/4 backdrop-blur-xl rounded-xl shadow-lg p-10 lg:grid md:grid-cols-12 lg:gap-6 items-center flex flex-col">
              {/* Image */}
              <div className="flex justify-center max-w-md md:max-w-none md:w-full mx-auto md:col-span-6 lg:col-span-6 mb-8 md:mb-0 md:order-2 order-2" data-aos="fade-up">
                <div className="relative inline-block">
                <Image 
                  className="max-w-full mx-auto md:max-w-none h-auto 
                  border-2 border-white/20  
                  rounded-3xl              
                  p-0                     
                  hover:border-white/40   
                  transition-colors       /* 
                  " 
                  src={BeitragVerfassen} 
                  width={440} 
                  height={405} 
                  alt="Beitrag Verfassen" 
                />
                  <div className="absolute  top-[15%] backdrop-blur-sm w-10 h-10 rounded-full flex items-center justify-center text-2xl font-bold">
    1.
  </div>
  <div className="absolute top-[28%] backdrop-blur-sm w-10 h-10 rounded-full flex items-center justify-center text-2xl font-bold">
    2.
  </div>
  <div className="absolute top-[66%]   w-10 h-10 rounded-full flex items-center justify-center text-2xl font-bold">
    3.
  </div>
  </div>
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-6 lg:col-span-6 md:order-1 order-1" data-aos="fade-right">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  


                  <h3 className="text-4xl text-center mb-5">Kategorien machen die Definition einfach!</h3>
                  <p className="text-xl text-center text-gray-500 mb-4">Wähle ob du eine helfende Hand suchst, oder anbietest. Wähle anschließend eine Kategorie und beschreibe deine Anfrage!<br></br> <br></br>Unser intuitives Kategoriesystem lässt dich schnell und einfach definieren, wie dir geholfen werden kann, oder wie du helfen kannst!</p>
                </div>
              </div>
              </AnimatedElement>

            {/* 2nd item */}
            <AnimatedElement className="h-full bg-white/4 backdrop-blur-xl rounded-xl shadow-lg p-10 lg:grid md:grid-cols-12 lg:gap-6 items-center">
  {/* Image */}
  <div className="relative max-w-md md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0" data-aos="fade-up">
    <Image className="rounded-full max-w-full mx-auto md:max-w-none h-auto p-7" src={BeitragSuchen} width={540} height={405} alt="Features 02" />
    <div className="absolute -right-12 top-[15%] bg-white/10 backdrop-blur-sm w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold">
    1
  </div>
  <div className="absolute -right-12 top-[50%] bg-white/10 backdrop-blur-sm w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold">
    2
  </div>
  <div className="absolute -right-12 top-[85%] bg-white/10 backdrop-blur-sm w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold">
    3
  </div>
  </div>
  {/* Content */}
  <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left">
    <div className="md:pl-4 lg:pl-12 xl:pl-16">
      <h3 className="text-4xl text-center mb-5">Kategorien machen die Suche einfach!</h3>
      <p className="text-xl text-center text-gray-500 mb-4">Nicht nur wird die Definition einfach, sondern auch die Suche! <br></br> <br></br> Filtere deine Suche nach der Kategorie mit unserem leicht zugänglichem Filter!<br></br><br></br>Wenn du dann die richtige Person gefunden hast, schreibe ihr einfach eine Nachricht über die App!</p>
    </div>
  </div>
</AnimatedElement>

            {/* 3rd item */}
            <AnimatedElement className="h-full bg-white/4 backdrop-blur-xl rounded-xl shadow-lg p-10 lg:grid md:grid-cols-12 lg:gap-6 items-center">
  
              {/* Image */}
              <div className="max-w-md md:max-w-none md:w-full mx-auto md:col-span-6 lg:col-span-6 mb-8 md:mb-0 md:order-1 sm:order-1" data-aos="fade-up">
                <Image className=" rounded-full max-w-full mx-auto md:max-w-none h-auto p-7" src={Sicherheit} width={540} height={405} alt="Features 03" />
              </div>
              {/* Content */}
              <div className="max-w-md md:max-w-none md:w-full mx-auto md:col-span-6 lg:col-span-6" data-aos="fade-right">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                 {/* <div className="font-architects-daughter text-xl text-purple-600 mb-2">More speed. Less spend</div>*/}
                 
                  <h3 className="text-4xl text-center mb-5">Und dabei geht uns Sicherheit vor!</h3>
                  <p className="text-xl text-center text-gray-500 mb-4">Die Benutzung der App kostet einen minimal Betrag. <br></br><br></br>Neben der Deckung der laufenden App kosten hat die Angabe der Bankverbindung auch die Aufhebung der Anonymität als Vorteil. <br></br><br></br>Bei Problemen können die Verantwortlichen leicht ermittelt werden und zur Verantwortung gezogen werden!</p>
                </div>
              </div>
            </AnimatedElement>

          </div>

        </div>
      </div>
    </section>
  )
}