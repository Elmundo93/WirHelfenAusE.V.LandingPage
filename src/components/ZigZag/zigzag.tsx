//zigzag.tsx

import Image from 'next/image'

import EigentümerBild from '../../../public/images/img_eigentümer.jpg.jpg'
import SeniorenBild from '../../../public/images/img_senioren.jpg.jpg'
import ProzessBild from '../../../public/images/process_img.jpg.jpg'
import AnimatedElement from '../Animation/AnimatedElement'
import StepButton from '../Buttons/Button'



export default function ZigZag() {  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
      

          {/* Items */}
          <div className="grid gap-20">

            {/* 1st item */}
            <AnimatedElement className="h-full bg-white/4 backdrop-blur-xl rounded-xl shadow-lg p-10 lg:grid md:grid-cols-12 lg:gap-6 items-center">
              {/* Image */}
              <div className="max-w-md md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1 sm:order-1" data-aos="fade-up">
                <Image className=" rounded-full max-w-full mx-auto md:max-w-none h-auto p-7" src={EigentümerBild} width={540} height={405} alt="Hilfe für Eigentümer" />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  


                  <h3 className="text-4xl text-center mb-5">Hilfe für Eigentümer</h3>
                  <p className="text-xl text-center text-gray-500 mb-4">Im Alltag fallen regelmäßig Arbeiten an, das kennen wir alle.<br></br><br></br> & vor allem als Eigentümer können diese Alltagspflichten, je nach Art, mehr Arbeitskraft fordern als im Haus vertreten ist. <br></br><br></br>Wenn dann auch noch der Nachbar keine Zeit hat, steht man vor einer eigentlich vergnügsamen Aufgabe, welche zum stressigen Wochen-, oder vielleicht sogar Monatsprojekt wird.</p>
                </div>
              </div>
              </AnimatedElement>

            {/* 2nd item */}
            <AnimatedElement className="h-full bg-white/4 backdrop-blur-xl rounded-xl shadow-lg p-10 lg:grid md:grid-cols-12 lg:gap-6 items-center">
  {/* Image */}
  <div className="max-w-md md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0" data-aos="fade-up">
    <Image className="rounded-full max-w-full mx-auto md:max-w-none h-auto p-7" src={SeniorenBild} width={540} height={405} alt="Features 02" />
  </div>
  {/* Content */}
  <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left">
    <div className="md:pl-4 lg:pl-12 xl:pl-16">
      <h3 className="text-4xl text-center mb-5">Hilfe für beeinträchtigte Menschen oder Senioren</h3>
      <p className="text-xl text-center text-gray-500 mb-4">Kleinere Aufgaben wie Gassie gehen, Einkaufen oder sich um den Garten kümmern, werden für Menschen mit einer Beeinträchtigung oft schon zu einem Problem.<br></br><br></br> Hier reichen oft schon kleine Hilfestellungen um einen imensen Unterschied in der Lebensqualität zu erzielen.</p>
    </div>
  </div>
</AnimatedElement>

            {/* 3rd item */}
            <AnimatedElement className="h-full bg-white/4 backdrop-blur-xl rounded-xl shadow-lg p-10 lg:grid md:grid-cols-12 lg:gap-6 items-center">
  
              {/* Image */}
              <div className="max-w-md md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1 sm:order-1" data-aos="fade-up">
                <Image className=" rounded-full max-w-full mx-auto md:max-w-none h-auto p-7" src={ProzessBild} width={540} height={405} alt="Features 03" />
              </div>
              {/* Content */}
              <div className="max-w-md md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                 {/* <div className="font-architects-daughter text-xl text-purple-600 mb-2">More speed. Less spend</div>*/}
                 
                  <h3 className="text-4xl text-center mb-5">Hilfe beim Prozess</h3>
                  <p className="text-xl text-center text-gray-500 mb-4">Ist dann eine helfende Hand gefunden, kommen fragen auf wie:<br></br>&apos;Falls denn was passiert, ist man denn dann Versichert?&apos;<br></br><br></br>
      Bei Fragen jeder Art stehen wir als Verein ihnen zur Seite.<br></br><br></br> 
      Des weiteren finden Sie einen ausführlichen Schritt für Schritt Guide mit nützlichen Tipps rund um die Minijobanmeldug 
      <StepButton
        buttonLabel="hier!"
        buttonAction={{ type: 'navigate', target: '/anmeldung' }}
        variant="cta"
      />

       </p>
                </div>
              </div>
            </AnimatedElement>

          </div>

        </div>
      </div>
    </section>
  )
}