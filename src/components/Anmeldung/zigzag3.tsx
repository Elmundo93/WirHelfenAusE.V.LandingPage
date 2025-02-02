'use client'

import PhoneScreenshot from '../../../public/images/PhoneScreenshot.png'
import Arbeitsvertrag from '../../../public/images/vecteezy_business-friendship-agreement-idea-with-successful-vector_2914732.png'
import AnimatedElement from '../Animation/AnimatedElement'
import Calculation from '../../../public/images/Calculation.png'
import PaperPlane from '../../../public/images/PaperPlane.png'
import CheckList from '../../../public/images/Tiny man sitting on chair with laptop on checklist background.png'
import { Button } from '@heroui/react'
import Link from 'next/link'
import Image from 'next/image'
import Suchen from '../../../public/images/Curious analyst investigating question mark with magnifier.png'
import MarBusiness from '../../../public/images/Mar-Business_6.png'
import CheckList1 from '../../../public/images/Checklist1.png'
import Calculation1 from '../../../public/images/13286.png'
import ShortTime from '../../../public/images/3664288.png'

export default function Zigzag3() {

  const handleScroll = () => {    
    const target = document.querySelector('#guideStep1');
    if (target) {
      const offset = 0; // Passe diesen Wert an (größerer Wert = höhere Position)
      const elementPosition = target.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
  };

  const handleScroll2 = () => {
    const target = document.querySelector('#step3');
    if (target) {
      const offset = 250; // Passe diesen Wert an (größerer Wert = höhere Position)
      const elementPosition = target.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
  };
  const handleAnmeldungNavigation = (targetId: string, offset: number = 0) => {
    setTimeout(() => {
      const target = document.querySelector(targetId);
      if (target) {
        const elementPosition = target.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' });
      }
    }, 200); // Delay anpassen, falls nötig
  };

  const handleMinijobNavigation = (targetUrl: string) => {
    window.open(targetUrl, '_blank');
  };

  const handleMinijobNavigationS2 = () => {
    window.open('https://www.minijob-zentrale.de/SharedDocs/Downloads/DE/Formulare/privat/muster-arbeitsvertrag-privathaushalt.html?nn=b0bdec7a-a43b-4976-b45e-9d7ff303840e', '_blank');
  };
  return (
    <section >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">
          <div className="grid gap-20">
            {/* 1. Item */}
            <div id="guideStep1" className="flex">
            <AnimatedElement className="h-full bg-white/4 backdrop-blur-xl rounded-xl shadow-lg p-10 lg:grid md:grid-cols-12 lg:gap-6 items-center justify-center">
            {/* Bild */}
            <div className="relative max-w-md md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0" data-aos="fade-up">
                  <Image 
                    className="rounded-full max-w-full mx-auto md:max-w-none h-auto p-7 absolute lg:relative left-1/2 top-3/4 transform -translate-x-1/2 -translate-y-1/2 lg:transform-none lg:left-0 lg:top-0 z-[-1]" 
                    src={Suchen} 
                    width={540} 
                    height={405} 
                    alt="Suchen" 
                  />
                  <div className="invisible lg:absolute relative">
                    <Image 
                      className="rounded-full max-w-full mx-auto md:max-w-none p-7" 
                      src={Suchen} 
                      width={250} 
                      height={250} 
                      alt="Placeholder Suchen" 
                    />
                  </div>
                </div>
              {/* Inhalt */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-6 lg:col-span-6 md:order-1 order-1" data-aos="fade-right">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <h3 className="text-4xl text-center mb-5 bg-white rounded-full p-4">
                    Schritt 1: finde eine helfende Hand mit der <span className="text-amber-500">AushilfApp</span>!
                  </h3>
                  <p className="text-xl text-center text-gray-500 mb-4">
                    Unser intuitives Kategoriesystem lässt dich schnell und einfach definieren, wie dir geholfen werden kann, oder wie du helfen kannst!
                  </p>
                  <br />
                  <div className="space-y-6">
  <div data-aos="fade-up" data-aos-delay="400" className="flex flex-col items-center gap-4">
    <button
      onClick={handleScroll}
      className="
        relative group
        overflow-hidden
        px-8 py-2
        border-4 border-gray-400        
        rounded-full
        transition-colors duration-200
        hover:text-white
        hover:border-amber-400
        text-xl text-gray-500
        shadow-lg

      "
    >
      <span className="relative z-10">Direkt zur AushilfApp!</span>
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
    <button onClick={() => handleAnmeldungNavigation('#guideStep2')} className="cursor-pointer block">
                          <span className="group relative cursor-pointer">
                            <span className="relative font-semibold text-gray-500 text-xl">
                              Nächster Schritt
                              <span className="absolute left-0 bottom-[-18px] w-full h-0.5 bg-amber-500 origin-center transform scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100" />
                              <span className="absolute left-0 bottom-[-18px] w-full h-0.5 border-b-2 z-[-1]" />
                            </span>
                          </span>
                        </button>
  </div>
</div>
                </div>
              </div>
            </AnimatedElement>
            </div>

            {/* 2. Item */}
            <div id="guideStep2" className="flex">
              <AnimatedElement className="h-full bg-white/4 backdrop-blur-xl rounded-xl shadow-lg p-10 lg:grid md:grid-cols-12 lg:gap-6 items-center justify-center">
                {/* Bild */}
                <div className="relative max-w-md md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0md:order-1 sm:order-1" data-aos="fade-up">
                  <Image 
                    className="rounded-full max-w-full mx-auto md:max-w-none h-auto p-7 absolute lg:relative left-1/2 top-3/4 transform -translate-x-1/2 -translate-y-1/2 lg:transform-none lg:left-0 lg:top-0 z-[-1]" 
                    src={Arbeitsvertrag} 
                    width={540} 
                    height={405} 
                    alt="Arbeitsvertrag" 
                  />
                  <div className="invisible lg:absolute relative">
                    <Image 
                      className="rounded-full max-w-full mx-auto md:max-w-none p-7" 
                      src={Arbeitsvertrag} 
                      width={250} 
                      height={250} 
                      alt="Placeholder Arbeitsvertrag" 
                    />
                  </div>
                </div>
                {/* Inhalt */}
                <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 mt-12" data-aos="fade-left">
                  <div className="md:pl-4 lg:pl-12 xl:pl-16">
                    <h3 className="text-4xl text-center mb-5 bg-white rounded-full p-4">
                      Schritt 2: Bereite einen Arbeitsvertrag vor!
                    </h3>
                    <p className="text-xl text-center text-gray-500 mb-4 md:mt-14 lg:mt-0 sm:mt-0 mt-0">
                      Nachdem alle relevanten Eckdaten besprochen wurden, kann der Arbeitsvertrag aufgesetzt werden.
                      <br /><br />
                      Es ist wichtig, die persönlichen Daten beider Parteien, den Beginn des Arbeitsverhältnisses, die Arbeitszeit und natürlich die Vergütung festzuhalten!
                      <br /><br />
                      Um wirklich alle nötigen Informationen zu erfassen, findest du einen Mustervertrag der Minijobzentrale&nbsp;
              <button
              onClick={() => handleMinijobNavigation('https://www.minijob-zentrale.de/SharedDocs/Downloads/DE/Formulare/privat/muster-arbeitsvertrag-privathaushalt.html?nn=b0bdec7a-a43b-4976-b45e-9d7ff303840e')}
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
              <span className="relative z-10">hier</span>
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
            </button> !
                    </p>
                    <div className="space-y-6">
                      <div data-aos="fade-up" data-aos-delay="400" className="flex justify-center gap-4">
                        <button onClick={() => handleAnmeldungNavigation('#guideStep3')} className="cursor-pointer block">
                          <span className="group relative cursor-pointer">
                            <span className="relative font-semibold text-gray-500 text-xl">
                              Nächster Schritt
                              <span className="absolute left-0 bottom-[-18px] w-full h-0.5 bg-amber-500 origin-center transform scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100" />
                              <span className="absolute left-0 bottom-[-18px] w-full h-0.5 border-b-2 z-[-1]" />
                            </span>
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedElement>
            </div>

            {/* 3. Item */}
            <div id="guideStep3" className="flex">
              <AnimatedElement className="h-full bg-white/4 backdrop-blur-xl rounded-xl shadow-lg p-10 lg:grid md:grid-cols-12 lg:gap-6 items-center justify-center">
                {/* Bild */}
                <div className="relative max-w-md md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 " data-aos="fade-up">
                  <Image 
                    className="rounded-full max-w-full mx-auto md:max-w-none h-auto p-7 absolute lg:relative left-1/2 top-3/4 transform -translate-x-1/2 -translate-y-1/2 lg:transform-none lg:left-0 lg:top-0 z-[-1]" 
                    src={PaperPlane} 
                    width={540} 
                    height={405} 
                    alt="Arbeitsvertrag" 
                  />
                  <div className="invisible lg:absolute relative">
                    <Image 
                      className="rounded-full max-w-full mx-auto md:max-w-none p-7" 
                      src={PaperPlane} 
                      width={250} 
                      height={250} 
                      alt="Placeholder Arbeitsvertrag" 
                    />
                  </div>
                </div>
                {/* Inhalt */}
                <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 mt-12" data-aos="fade-left">
                  <div className="md:pl-4 lg:pl-12 xl:pl-16">
                    <h3 className="text-4xl text-center mb-5 bg-white rounded-full p-4">
                    Schritt 3: Melde deine helfende Hand bei der Minijobzentrale an!                    
                    </h3>
                    <p className="text-xl text-center text-gray-500 mb-4 md:mt-14 lg:mt-0 sm:mt-0 mt-0">
                    Du kannst deine helfende Hand bei der Minijobzentrale auf unterschiedlichen Wegen anmelden. <br/><br/>Per Telefon um eventuell offene Fragen zu klären unter 0355 2902-70799 von Montag bis Freitag zwischen 07.00 Uhr und 17.00 Uhr.<br/><br/>Per Post mit der Adresse: Minijob-Zentrale, 45115 Essen. <br/><br/> Oder einfach in 2 Schritten Online mit diesem
                    <button
              onClick={() => handleMinijobNavigation('https://www.minijob-zentrale.de/DE/service/formulare/haushaltshilfe-anmelden/_node.html')}
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
              <span className="relative z-10">Link</span>
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
            <br/><br/> 
            
                    </p>
                    <div className="space-y-6">
                      <div data-aos="fade-up" data-aos-delay="400" className="flex justify-center gap-4">
                        <button onClick={() => handleAnmeldungNavigation('#guideStep4')} className="cursor-pointer block">
                          <span className="group relative cursor-pointer">
                            <span className="relative font-semibold text-gray-500 text-xl">
                              Nächster Schritt
                              <span className="absolute left-0 bottom-[-18px] w-full h-0.5 bg-amber-500 origin-center transform scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100" />
                              <span className="absolute left-0 bottom-[-18px] w-full h-0.5 border-b-2 z-[-1]" />
                            </span>
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedElement>
            </div>

            {/* 4. Item */}
            <div id="guideStep4" className="flex">
            <AnimatedElement className="h-full bg-white/4 backdrop-blur-xl rounded-xl shadow-lg p-10 lg:grid md:grid-cols-12 lg:gap-6 items-center justify-center">
            {/* Bild */}
            <div className="relative max-w-md md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0md:order-1 sm:order-1" data-aos="fade-up">
            <Image 
                    className="rounded-full max-w-full mx-auto md:max-w-none h-auto p-7 absolute lg:relative left-1/2 top-3/4 transform -translate-x-1/2 -translate-y-1/2 lg:transform-none lg:left-0 lg:top-0 z-[-1]" 
                    src={CheckList1} 
                    width={540} 
                    height={405} 
                    alt="Arbeitsvertrag" 
                  />
                  <div className="invisible lg:absolute relative">
                    <Image 
                      className="rounded-full max-w-full mx-auto md:max-w-none p-7" 
                      src={CheckList1} 
                      width={250} 
                      height={250} 
                      alt="Placeholder Arbeitsvertrag" 
                    />
                  </div>
                </div>
                {/* Inhalt */}
                <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 mt-12" data-aos="fade-left">
                  <div className="md:pl-4 lg:pl-12 xl:pl-16">
                  <h3 className="text-4xl text-center mb-5 bg-white rounded-full p-4">
                  Schritt 3, Teil 2: Details zur Anmeldung
                  </h3>
                  <p className="text-xl  text-gray-500 mb-4 text-center">Grundsätzlich brauchst du für die Anmeldung mit dem Haushaltcheck-Verfahren:
    </p> 
    <div className="flex justify-center">
      <ul className="list-disc text-xl text-gray-500">
        <li>Die persönlichen Daten der Parteien</li>
        <li>Die Steuernummer des Arbeitgebers</li>
        <li>Die Rentenversicherungsnummer der helfenden Hand <br/> (falls nicht vorhanden, wird diese über das Geburtsdatum und -namen ermittelt.)</li>

      </ul>
    </div>

             
                    <div className="space-y-6">
                      <div data-aos="fade-up" data-aos-delay="400" className="flex justify-center gap-4 mt-10">
                        <button onClick={() => handleAnmeldungNavigation('#guideStep5')} className="cursor-pointer block">
                          <span className="group relative cursor-pointer">
                            <span className="relative font-semibold text-gray-500 text-xl">
                              Nächster Schritt
                              <span className="absolute left-0 bottom-[-18px] w-full h-0.5 bg-amber-500 origin-center transform scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100" />
                              <span className="absolute left-0 bottom-[-18px] w-full h-0.5 border-b-2 z-[-1]" />
                            </span>
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedElement>
            </div>
            {/* 5. Item */}
            <div id="guideStep5" className="flex">
            <AnimatedElement className="h-full bg-white/4 backdrop-blur-xl rounded-xl shadow-lg p-10 lg:grid md:grid-cols-12 lg:gap-6 items-center justify-center">
            {/* Bild */}
            <div className="relative max-w-md md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0" data-aos="fade-up">
            <Image 
                    className="rounded-full max-w-full mx-auto md:max-w-none h-auto p-7 absolute lg:relative left-1/2 top-3/4 transform -translate-x-1/2 -translate-y-1/2 lg:transform-none lg:left-0 lg:top-0 z-[-1]" 
                      src={MarBusiness} 
                    width={540} 
                    height={405} 
                    alt="Arbeitsvertrag" 
                  />
                  <div className="invisible lg:absolute relative">
                    <Image 
                      className="rounded-full max-w-full mx-auto md:max-w-none p-7" 
                      src={MarBusiness} 
                      width={250} 
                      height={250} 
                      alt="Placeholder Arbeitsvertrag" 
                    />
                  </div>
                </div>
                {/* Inhalt */}
                <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 mt-12" data-aos="fade-left">
                  <div className="md:pl-4 lg:pl-12 xl:pl-16">
                    <h3 className="text-4xl text-center mb-5 bg-white rounded-full p-4">
                    Schritt 4: Kalkulation der Abgaben:                    </h3>
                    <p className="text-xl text-center text-gray-500 mb-4 md:mt-14 lg:mt-0 sm:mt-0 mt-0">
                    Grundsätzlich gilt: Der Arbeitgeber ist für die Abgaben verantwortlich.<br/><br/>
      Insofern sich die helfende Hand nicht vorher von der Rentenversicherungspflicht befreit hat, behält der Arbeitgeber 13,6% vom Bruttolohn der helfenden Hand ein um diese mit seinen Abgaben der Minijobzentrale zukommen zu lassen.<br/><br/>
      Die Abgaben des Arbeitgebers betragen 14,92% vom Bruttolohn der helfenden Hand. (Stand: 01.01.2025)<br/><br/>
      Weitere Details folgen in den nächsten Schritten!<br/> Alle Informationen sind auch auf der Website der  
      <button
              onClick={() => handleMinijobNavigation("https://www.minijob-zentrale.de/DE/fuer-haushalte/vorteile-fuer-haushalte/vorteile-fuer-haushalte_node.html")}
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
              <span className="relative z-10"> Minijobzentrale</span>
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
            </button> zu finden!
            <br/><br/> 
            
                    </p>
                    <div className="space-y-6">
                      <div data-aos="fade-up" data-aos-delay="400" className="flex justify-center gap-4">
                        <button onClick={() => handleAnmeldungNavigation('#guideStep6')} className="cursor-pointer block">
                          <span className="group relative cursor-pointer">
                            <span className="relative font-semibold text-gray-500 text-xl">
                              Nächster Schritt
                              <span className="absolute left-0 bottom-[-18px] w-full h-0.5 bg-amber-500 origin-center transform scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100" />
                              <span className="absolute left-0 bottom-[-18px] w-full h-0.5 border-b-2 z-[-1]" />
                            </span>
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedElement>
            </div>

            {/* 6. Item */}
            <div id="guideStep6" className="flex">
            <AnimatedElement className="h-full bg-white/4 backdrop-blur-xl rounded-xl shadow-lg p-10 lg:grid md:grid-cols-12 lg:gap-6 items-center justify-center">
            {/* Bild */}
            <div className="relative max-w-md md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1 sm:order-1" data-aos="fade-up">
            <Image 
                    className="rounded-full max-w-full mx-auto md:max-w-none h-auto p-7 absolute lg:relative left-1/2 top-3/4 transform -translate-x-1/2 -translate-y-1/2 lg:transform-none lg:left-0 lg:top-0 z-[-1]" 
                    src={Calculation1} 
                    width={540} 
                    height={405} 
                    alt="Calculation" 
                  />
                  <div className="invisible lg:absolute relative">
                    <Image 
                      className="rounded-full max-w-full mx-auto md:max-w-none p-7" 
                      src={Calculation1} 
                      width={250} 
                      height={250} 
                      alt="Placeholder Calculation" 
                    />
                  </div>
                </div>
                {/* Inhalt */}
                <div id="step2" className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left">
                  <div className="md:pl-4 lg:pl-12 xl:pl-16">
                    <h3 className="text-4xl text-center mb-5 bg-white rounded-full p-4">
                      Schritt 4, Teil 2: Abgabedetails für helfende Hände
                    </h3>
                    <p className="text-xl text-center text-gray-500 mb-4 md:mt-14 lg:mt-0 sm:mt-0 mt-0">
                    Als helfende Hand, hast du die Möglichkeit dich von der Rentenversicherungspflicht zu befreien, sodass du keine weiteren Abgaben von deinem Lohn hast. <br/><br/>
                    Dadurch hast du zwar am Ende des Monats mehr Geld in der Tasche, verzichtest aber auf die Chance schon früh in deine Rentenversicherung einzuzahlen.<br/><br/>
                    Die Befreiung wird per Post mit diesem 
                    <button
              onClick={() => handleMinijobNavigation("https://www.minijob-zentrale.de/SharedDocs/Downloads/DE/Formulare/gewerblich/Befreiungsantrag-fuer-Arbeitnehmer-im-Gewerbe.html")}
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
              <span className="relative z-10"> Schreiben</span>
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
            eingereicht. <br/><br/>
                    Die Einzahlung kann jedoch durchaus sinnvoll sein, da die Rentenversicherung dir nicht nur die Anmeldung einer staatlich geförderten Riesterrente ermöglicht, sondern auch voll auf die Wartezeit der Rente angerechnet wird.<br/><br/>
                    Des weiteren werden Reha-Leistungen übernommen, insofern du in den letzten 2 Jahren mindestens 6 Monate Beiträge bezahlt hast.<br/><br/>
                    Bei einem Totalausfall des Versicherten besteht auch die Möglichkeit, eine Erwerbsminderungsrente zu beantragen. <br/><br/>
                    Für ausführlichere Details, les dich gerne in diesen
                    <button
              onClick={() => handleMinijobNavigation("https://magazin.minijob-zentrale.de/minijob-rentenversicher/")}
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
              <span className="relative z-10"> Artikel</span>
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
            </button> der Minijobzentrale ein! 
                    </p>
                    <div className="space-y-6">
                      <div data-aos="fade-up" data-aos-delay="400" className="flex justify-center gap-4 mt-10">
                        <button onClick={() => handleAnmeldungNavigation('#guideStep7')} className="cursor-pointer block">
                          <span className="group relative cursor-pointer">
                            <span className="relative font-semibold text-gray-500 text-xl">
                              Nächster Schritt
                              <span className="absolute left-0 bottom-[-18px] w-full h-0.5 bg-amber-500 origin-center transform scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100" />
                              <span className="absolute left-0 bottom-[-18px] w-full h-0.5 border-b-2 z-[-1]" />
                            </span>
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedElement>
            </div>

            {/* 7. Item */}
            <div id="guideStep7" className="flex">
            <AnimatedElement className="h-full bg-white/4 backdrop-blur-xl rounded-xl shadow-lg p-10 lg:grid md:grid-cols-12 lg:gap-6 items-center justify-center">
            {/* Bild */}
            <div className="relative max-w-md md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 " data-aos="fade-up">
            <Image 
                    className="rounded-full max-w-full mx-auto md:max-w-none h-auto p-7 absolute lg:relative left-1/2 top-3/4 transform -translate-x-1/2 -translate-y-1/2 lg:transform-none lg:left-0 lg:top-0 z-[-1]" 
                    src={Calculation} 
                    width={540} 
                    height={405} 
                    alt="Calculation" 
                  />
                  <div className="invisible lg:absolute relative">
                    <Image 
                      className="rounded-full max-w-full mx-auto md:max-w-none p-7" 
                      src={Calculation} 
                      width={250} 
                      height={250} 
                      alt="Placeholder Calculation" 
                    />
                  </div>
                </div>
                {/* Inhalt */}
                <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 mt-12" data-aos="fade-left">
                  <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <h3 className="text-4xl text-center mb-5 bg-white rounded-full p-4">
                  Schritt 4, Teil 3: Abgabedetails für Arbeitgeber!
                    </h3>
                    <p className="text-xl text-center text-gray-500 mb-4 md:mt-14 lg:mt-0 sm:mt-0 mt-0">
                    Die Abgaben werden halbjährig bequem von der Minijobzentrale per SEPA-Lastschrift eingezogen. <br/><br/>
                    Das zu erwartende Entgelt, den Zeitraum der Beschäftigung und andere wichtige Informationen teilen sie im vorhinein per 
                    <button
              onClick={() => handleMinijobNavigation("https://www.minijob-zentrale.de/DE/minijob-anmelden/haushaltshilfe-anmelden/haushaltshilfe-anmelden_node.html")}
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
              <span className="relative z-10"> Schreiben</span>
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
            
             der Minijobzentrale mit.<br/><br/>

                    Sollte das Einkommen sich wider erwarten ändern, können sie halbjährig ihre Angaben anpassen mit dem
                    <button
              onClick={() => handleMinijobNavigation("https://www.minijob-zentrale.de/DE/fuer-haushalte/halbjahresscheck/detailseite.html")}
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
              <span className="relative z-10"> Halbjahrescheck</span>
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
            <br/><br/>  
                    Wie bereits erwähnt, behalten Sie als Arbeitgeber 13,6% des Lohns ihrer helfenden Hand ein um sie der Minijobzentrale bereitzustellen. <br/><br />
                    Des weiteren müssen sie als Arbeitgeber im normalfall ( ihre helfende Hand ist regelmäßig bei ihnen beschäftigt) 14,92% des Lohns als Abgabe bezahlen. <br/><br/>
                    Wie sich die Abgaben zusammensetzen, können sie
                    <button
              onClick={() => handleMinijobNavigation("https://www.minijob-zentrale.de/DE/fuer-haushalte/abgaben-und-fristen/detailseite.html")}
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
              <span className="relative z-10"> hier</span>
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
            nachlesen.
            </p>
            <div className="space-y-6">
                      <div data-aos="fade-up" data-aos-delay="400" className="flex justify-center gap-4 mt-10">
                        <button onClick={() => handleAnmeldungNavigation('#guideStep8')} className="cursor-pointer block">
                          <span className="group relative cursor-pointer">
                            <span className="relative font-semibold text-gray-500 text-xl">
                              Nächster Schritt
                              <span className="absolute left-0 bottom-[-18px] w-full h-0.5 bg-amber-500 origin-center transform scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100" />
                              <span className="absolute left-0 bottom-[-18px] w-full h-0.5 border-b-2 z-[-1]" />
                            </span>
                          </span>
                        </button>
                      </div>
                    </div>                    
                   
                  </div>
                </div>
              </AnimatedElement>
            </div>

            {/* 8. Item */}
            <div id="guideStep8" className="flex">
              <AnimatedElement className="h-full bg-white/4 backdrop-blur-xl rounded-xl shadow-lg p-10 lg:grid md:grid-cols-12 lg:gap-6 items-center">
                {/* Bild */}
                <div className="relative max-w-md md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1 sm:order-1" data-aos="fade-up">
                  <Image 
                    className="rounded-full max-w-full mx-auto md:max-w-none h-auto p-7 absolute lg:relative left-1/2 top-3/4 transform -translate-x-1/2 -translate-y-1/2 lg:transform-none lg:left-0 lg:top-0 z-[-1]" 
                    src={ShortTime} 
                    width={540} 
                    height={405} 
                    alt="CheckList" 
                  />
                  <div className="invisible lg:absolute relative">
                    <Image 
                      className="rounded-full max-w-full mx-auto md:max-w-none p-7" 
                      src={ShortTime} 
                      width={250} 
                      height={250} 
                      alt="Placeholder CheckList" 
                    />
                  </div>
                </div>
                {/* Inhalt */}
                <div id="step2" className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left">
                  <div className="md:pl-4 lg:pl-12 xl:pl-16">
                  <h3 className="text-4xl text-center mb-5 bg-white rounded-full p-4">
                  Schritt 5: Kurzzeitige Beschäftigung
                    </h3>
                    <p className="text-xl text-gray-500 mb-4 text-center">
                      Eine Kurzzeitbeschäftigung liegt vor, wenn die helfende Hand weniger als 70 Arbeitstage im Kalenderjahr beschäftigt wird.
                      <br /><br />
                      Dabei entfallen Renten- & Sozialversicherungsbeiträge, weshalb auch die Abgaben geringer ausfallen.
                      <br /><br />
                      Der Anmeldeprozess läuft wie gewohnt über die Minijobzentrale – ideal für saisonale Tätigkeiten wie Erntehelfer oder unregelmäßige Nachhilfe.
                      <br /><br />
                      Details zu den Abgaben findest du hier!
                    </p>
                    <div className="space-y-6">
                      <div data-aos="fade-up" data-aos-delay="400" className="flex justify-center gap-4 mt-10">
                        <button onClick={() => handleAnmeldungNavigation('#preview')} className="cursor-pointer block">
                          <span className="group relative cursor-pointer">
                            <span className="relative font-semibold text-gray-500 text-xl">
                              Zurück zur Übersicht
                              <span className="absolute left-0 bottom-[-18px] w-full h-0.5 bg-amber-500 origin-center transform scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100" />
                              <span className="absolute left-0 bottom-[-18px] w-full h-0.5 border-b-2 z-[-1]" />
                            </span>
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedElement>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}