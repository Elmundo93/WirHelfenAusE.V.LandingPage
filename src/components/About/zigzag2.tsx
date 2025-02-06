'use client'

import Image from 'next/image'

import Registration from '../../../public/images/Registration.png'
import FilterSuche from '../../../public/images/FilterSucher.png'
import BeitragVerfassen from '../../../public/images/VerfasseBeitrag.png'
import AnimatedElement from '../Animation/AnimatedElement'
import { handleScroll } from '../util/handleScroll'
import InKontaktTreten from '../../../public/images/InKontaktTretene.png'
import DankeSagen from '../../../public/images/DankeSagen.png'
import SicherheitAnmeldung from '../../../public/images/SicherheitAnmeldung.png'




export default function Zigzag2() {
  return (
    <section >
    <div id="AboutStep1" className="flex justify-center">
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
                src={Registration}
                alt="Arbeitsvertrag"
                fill
                className="object-contain rounded-full"
              />
            </div>
            {/* Invisible Placeholder sorgt dafür, dass der Container 
                die Höhe des Bildes übernimmt */}
            <div className="invisible">
              <Image
                src={Registration}
                alt="Arbeitsvertrag"
                width={540}
                height={405}
                className="rounded-full"
              />
            </div>
            {/* Überschrift, die über dem Bild liegt */}
            <h1 className="relative text-4xl text-center mb-5 rounded-full py-4 px-10 inline-block rounded-full bg-gradient-to-r from-amber-400 via-amber-300 to-amber-200 backdrop-blur-xl shadow-lg px-6 py-3 shadow-lg">
              Schritt 1: <br/>
               App herunterladen & ein Konto erstellen!
            </h1>
          </div>
  
          <p className="text-2xl text-center text-gray-500">
            Du findest die App schnell und zugänglich im App- & Playstore!
          </p>
          <div className="flex justify-center mt-10">
          <button
                onClick={() => handleScroll('#AboutStep1', 0)}
                className="relative group overflow-hidden px-4 py-2 border-4 border-gray-400 rounded-full transition-colors duration-200 hover:text-white hover:border-amber-400 text-2xl text-gray-500 shadow-lg"
              >
                <span className="relative z-10">
                App herunterladen!
                </span>
                {/* Hover-Overlay */}
                <span
                  className="absolute inset-0 bg-amber-400 transform translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0"
                />
              </button>
              </div>
              <div className="mt-10">
                <p className="text-2xl text-center text-gray-500">Nachdem die App auf deinem Gerät installiert wurde, kannst du ein Konto erstellen. <br/><br/>Die App führt dich durch alle relevanten Verifiktationsschritte! </p>
              </div>
          <div id="previewScroll" data-aos="fade-up" data-aos-delay="400" className="flex justify-center gap-4 mt-10">
          <button onClick={() => handleScroll('#AboutStep2', 140)} className="cursor-pointer block">
                          <span className="group relative cursor-pointer">
                            <span className="relative font-semibold text-gray-500 text-2xl">
                              Nächster Schritt
                              <span className="absolute left-0 bottom-[-18px] w-full h-0.5 bg-amber-500 origin-center transform scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100" />
                              <span className="absolute left-0 bottom-[-18px] w-full h-0.5 border-b-2 z-[-1]" />
                            </span>
                          </span>
                        </button>
  
              
          </div>
       
  
        </AnimatedElement>
  
    
      </div>
    </AnimatedElement>
    
  </div>
  <div id="AboutStep2" className="flex justify-center">
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
            <div className="absolute inset-0 ">
              <Image
                src={FilterSuche}
                alt="FilterSucher"
                fill
                className="object-contain rounded-full "
              />
            </div>
            {/* Invisible Placeholder sorgt dafür, dass der Container 
                die Höhe des Bildes übernimmt */}
            <div className="invisible">
              <Image
                src={FilterSuche}
                alt="FilterSucher"
                width={540}
                height={405}
                className="rounded-full"
              />
            </div>
            {/* Überschrift, die über dem Bild liegt */}
            <h1 className="relative text-4xl text-center mb-5 rounded-full py-4 px-10 inline-block rounded-full bg-gradient-to-r from-amber-400 via-amber-300 to-amber-200 backdrop-blur-xl shadow-lg px-6 py-3 shadow-lg">
              Schritt 2: 
              <br/>
              Umschauen & Erkunden!
            </h1>
          </div>
  
          <p className="text-2xl text-center text-gray-500">
            Du hast ein Konto erstellt?
            <br/><br/>
            Dann herzlich willkommen in der AushilfApp!
            <br/><br/>
            Schaue dich auf der Pinnwand um und nutze den Filter um zu finden was du suchst!
          </p>
          
          <div id="previewScroll" data-aos="fade-up" data-aos-delay="400" className="flex justify-center gap-4 mt-10">
          <button onClick={() => handleScroll('#AboutStep3', 140)} className="cursor-pointer block">
                          <span className="group relative cursor-pointer">
                            <span className="relative font-semibold text-gray-500 text-2xl">
                              Nächster Schritt
                              <span className="absolute left-0 bottom-[-18px] w-full h-0.5 bg-amber-500 origin-center transform scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100" />
                              <span className="absolute left-0 bottom-[-18px] w-full h-0.5 border-b-2 z-[-1]" />
                            </span>
                          </span>
                        </button>
  
              
          </div>
       
  
        </AnimatedElement>
  

      </div>
    </AnimatedElement>
    </div>
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
                src={BeitragVerfassen}
                alt="BeitragVerfassen"
                fill
                className="object-contain rounded-full"
              />
            </div>
            {/* Invisible Placeholder sorgt dafür, dass der Container 
                die Höhe des Bildes übernimmt */}
            <div  className="invisible">
              <Image
                src={BeitragVerfassen}
                alt="BeitragVerfassen"
                width={540}
                height={405}
                className="rounded-full"
              />
            </div>
            {/* Überschrift, die über dem Bild liegt */}
            <h1 className="relative text-4xl text-center mb-5 rounded-full py-4 px-10 inline-block rounded-full bg-gradient-to-r from-amber-400 via-amber-300 to-amber-200 backdrop-blur-xl shadow-lg px-6 py-3 shadow-lg">
              Schritt 3: <br/>
               Beitrag verfassen!
            </h1>
          </div>
  
          <p className="text-2xl text-center text-gray-500">
Wenn du nach dem Ersten Blick auf die Pinnwand nicht das gefunden hast, was du suchst, dann wird es Zeit einen Beitrag zu verfassen!<br/><br/>
Definiere mit den vorgegebenen Kategorien wobei man dir helfen kann, oder in welchem Bereich du helfen möchtest!<br/><br/>
Dann nur noch eine kurze Beschreibung hinzufügen und der Post ist fertig!
          </p>

          <div id="previewScroll" data-aos="fade-up" data-aos-delay="400" className="flex justify-center gap-4 mt-10">
          <button onClick={() => handleScroll('#AboutStep4', 140)} className="cursor-pointer block">
                          <span className="group relative cursor-pointer">
                            <span className="relative font-semibold text-gray-500 text-2xl">
                              Nächster Schritt
                              <span className="absolute left-0 bottom-[-18px] w-full h-0.5 bg-amber-500 origin-center transform scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100" />
                              <span className="absolute left-0 bottom-[-18px] w-full h-0.5 border-b-2 z-[-1]" />
                            </span>
                          </span>
                        </button>
  
              
          </div>
       
  
        </AnimatedElement>
  
    
      </div>
    </AnimatedElement>
    
  </div>

  <div id="AboutStep4" className="flex justify-center">
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
                src={InKontaktTreten}
                alt="InKontaktTreten"
                fill
                className="object-contain rounded-full"
              />
            </div>
            {/* Invisible Placeholder sorgt dafür, dass der Container 
                die Höhe des Bildes übernimmt */}
            <div className="invisible">
              <Image
                src={InKontaktTreten}
                alt="InKontaktTreten"
                width={540}
                height={405}
                className="rounded-full"
              />
            </div>
            {/* Überschrift, die über dem Bild liegt */}
            <h1 className="relative text-4xl text-center mb-5 rounded-full py-4 px-10 inline-block rounded-full bg-gradient-to-r from-amber-400 via-amber-300 to-amber-200 backdrop-blur-xl shadow-lg px-6 py-3 shadow-lg">
              Schritt 4: <br/>
               In Kontakt treten!
            </h1>
          </div>
  
          <p className="text-2xl text-center text-gray-500">
          Es braucht manchmal seine Zeit, doch wenn sich dann die richtige Möglichkeit gefunden hat, schicke eine freundliche Nachricht um sich über das Szenario zu unterhalten und auszutauschen.<br/><br/>
Hierbei können auch schon wichtige Eckdaten mitgeteilt werden um zu schauen, ob man einander helfen kann.<br/><br/>
Achte dabei bitte immer darauf, den Kommunikationrichtilinien zu folgen.<br/><br/>
Wir als Verein behalten uns dabei das Recht ein, die Kommunikation in der AushilfApp zu moderieren und bei verstößen Konsequenzen zu ziehen.<br/><br/> 
Neben der Moderation durch den Verein, ermutigt die AushilfApp seine User auch dazu, eine Selbstregulierung durch ein effektives Meldesystem zu betreiben.
          </p>

          <div id="previewScroll" data-aos="fade-up" data-aos-delay="400" className="flex justify-center gap-4 mt-10">
          <button onClick={() => handleScroll('#AboutStep5', 140)} className="cursor-pointer block">
                          <span className="group relative cursor-pointer">
                            <span className="relative font-semibold text-gray-500 text-2xl">
                              Nächster Schritt
                              <span className="absolute left-0 bottom-[-18px] w-full h-0.5 bg-amber-500 origin-center transform scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100" />
                              <span className="absolute left-0 bottom-[-18px] w-full h-0.5 border-b-2 z-[-1]" />
                            </span>
                          </span>
                        </button>
  
              
          </div>
       
  
        </AnimatedElement>
  
    
      </div>
    </AnimatedElement>
    
  </div>

  <div id="AboutStep5" className="flex justify-center">
    <AnimatedElement className="relative h-full w-full brounded-xl shadow-lg p-10 items-center justify-center">
      {/* Inhalt */}
      <div className="max-w-xl md:max-w-none md:w-full mx-auto " data-aos="fade-left">
        <AnimatedElement 
          className="relative flex flex-col max-w-3xl mx-auto text-center pb-12 g-white/4 backdrop-blur-xl  rounded-xl shadow-lg p-4" 
          data-aos="fade-up"
        >
          {/* Container für Überschrift inkl. Hintergrundbild */}
          <div className="relative inline-block w-full max-w-md mx-auto">
            {/* Hintergrundbild – absolut positioniert */}
            <div className="absolute inset-0 -z-10">
              <Image
                src={SicherheitAnmeldung}
                alt="SicherheitAnmeldung"
                fill
                className="object-contain rounded-full"
              />
            </div>
            {/* Invisible Placeholder sorgt dafür, dass der Container 
                die Höhe des Bildes übernimmt */}
            <div className="invisible">
              <Image
                src={SicherheitAnmeldung}
                alt="SicherheitAnmeldung"
                width={540}
                height={405}
                className="rounded-full"
              />
            </div>
            {/* Überschrift, die über dem Bild liegt */}
            <h1 className="relative text-4xl text-center mb-5 rounded-full py-4 px-10inline-block rounded-full bg-gradient-to-r from-amber-400 via-amber-300 to-amber-200 backdrop-blur-xl shadow-lg px-6 py-3 shadow-lg">
              Schritt 5: <br/>
                Schlau machen!
              </h1>
          </div>
  
          <p className="text-2xl text-center text-gray-500">
          Es hat sich eine Möglichkeit ergeben, einander zu helfen?<br/><br/>
          Dann ist es Zeit, sich darüber gedanken zu machen, in welchem Rahmen man zusammen kommen möchte!<br/><br/>
          Ist die Unterstützung nur kurzfristig, oder absehbar langfristig?<br/><br/>
          So oder so, gibt es für jedes Szenario eine Lösung! <br/>
          Denn auch bei einer kurzzeitigen Beschäftigung, kann man die Vorteile einer Rechtskomformen Anmeldung genießen! <br/><br/>
          So ist man zum Beispiel in nur wenigen Schritten im Rahmen der Tätigkeit versichert, und kann sich auf das eigentliche Helfen konzentrieren!<br/><br/>
          Für ausführlichere Informationen, les' dich weiter bei der Minijobzentrale ein, oder schau einfach mal in unseren Schritt für Schritt Guide!
              
          </p>

          <div id="previewScroll" data-aos="fade-up" data-aos-delay="400" className="flex justify-center gap-4 mt-10">
          <button onClick={() => handleScroll('#AboutStep6', 140)} className="cursor-pointer block">
                          <span className="group relative cursor-pointer">
                            <span className="relative font-semibold text-gray-500 text-2xl">
                              Nächster Schritt
                              <span className="absolute left-0 bottom-[-18px] w-full h-0.5 bg-amber-500 origin-center transform scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100" />
                              <span className="absolute left-0 bottom-[-18px] w-full h-0.5 border-b-2 z-[-1]" />
                            </span>
                          </span>
                        </button>
  
              
          </div>
       
  
        </AnimatedElement>
  
    
      </div>
    </AnimatedElement>
    
  </div>

  <div id="AboutStep6" className="flex justify-center">
    <AnimatedElement className="relative h-full w-full brounded-xl shadow-lg p-10 items-center justify-center">
      {/* Inhalt */}
      <div className="max-w-xl md:max-w-none md:w-full mx-auto " data-aos="fade-left">
        <AnimatedElement 
          className="relative flex flex-col max-w-3xl mx-auto text-center pb-12 g-white/4 backdrop-blur-xl  rounded-xl shadow-lg p-4" 
          data-aos="fade-up"
        >
          {/* Container für Überschrift inkl. Hintergrundbild */}
          <div className="relative inline-block w-full max-w-md mx-auto">
            {/* Hintergrundbild – absolut positioniert */}
            <div className="absolute inset-0 -z-10">
              <Image
                src={DankeSagen}
                alt="DankeSagen"
                fill
                className="object-contain rounded-full"
              />
            </div>
            {/* Invisible Placeholder sorgt dafür, dass der Container 
                die Höhe des Bildes übernimmt */}
            <div className="invisible">
              <Image
                src={DankeSagen}
                alt="DankeSagen"
                width={540}
                height={405}
                className="rounded-full"
              />
            </div>
            {/* Überschrift, die über dem Bild liegt */}
            <h1 className="relative text-4xl text-center mb-5 rounded-full py-4 px-10 inline-block rounded-full bg-gradient-to-r from-amber-400 via-amber-300 to-amber-200 backdrop-blur-xl shadow-lg px-6 py-3 shadow-lg">
              Schritt 6: <br/>
                Danke sagen!
              </h1>
          </div>
  
          <p className="text-2xl text-center text-gray-500">
            Wenn am Ende des Tages alles erledigt ist und geklappt hat, vergessen sie nicht danke zu sagen!<br/><br/>
            In der AushilfApp finden sie auf jedem Profil eine Pinnwand für Danksagungen!<br/><br/>
            Geben sie dort einfach ihr Feedback ab und zeigen sie auch anderen Usern, dass das Zusammenarbeiten reibungslos funktioniert hat!
              
          </p>

          <div id="previewScroll" data-aos="fade-up" data-aos-delay="400" className="flex justify-center gap-4 mt-10">
          <button onClick={() => handleScroll('#preview2', 140)} className="cursor-pointer block">
                          <span className="group relative cursor-pointer">
                            <span className="relative font-semibold text-gray-500 text-2xl">
                              Zurück zur Startseite
                              <span className="absolute left-0 bottom-[-18px] w-full h-0.5 bg-amber-500 origin-center transform scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100" />
                              <span className="absolute left-0 bottom-[-18px] w-full h-0.5 border-b-2 z-[-1]" />
                            </span>
                          </span>
                        </button>
  
              
          </div>
       
  
        </AnimatedElement>
  
    
      </div>
    </AnimatedElement>
    
  </div>

  
    
    
</section>
  )
}