//features.tsx


import SichererRahmen from '../../public/images/safe-and-stable-svgrepo-com.svg';
import InderNähe from '../../public/images/location-svgrepo-com.svg';
import Image from 'next/image';
import Handshake from '../../public/images/handshake-svgrepo-com.svg';
import People from '../../public/images/staff-personnel-structure-management-svgrepo-com.svg';
import Register from '../../public/images/register-svgrepo-com.svg';
import RightOne from '../../public/images/choice-svgrepo-com.svg';
import AnimatedElement from './Animation/AnimatedElement';
import CoolKids from '../../public/images/CoolKids.svg'



export default function Features() {
  return (
    <section  id="ÜberUns">
      <div className="border-t mt-20 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          
        <AnimatedElement  className="relative flex flex-col max-w-3xl mx-auto text-center  md:pb-16 bg-white/4 backdrop-blur-xl rounded-xl shadow-lg p-4" data-aos="fade-up">
        <div className="relative inline-block w-full max-w-md mx-auto">

          <div className="absolute  inset-0 -z-10">
              <Image
                src={CoolKids}
                alt="CoolKids"
                width={640}
                height={505}
                className="object-contain rounded-full"
              />
            </div>
            {/* Invisible Placeholder sorgt dafür, dass der Container 
                die Höhe des Bildes übernimmt */}
            <div className="invisible">
              <Image
                src={CoolKids}
                alt="CoolKids"
                width={300}
                height={300}
                className="rounded-full"
              />

            </div>

            {/* Überschrift, die über dem Bild liegt */}
            <h1 className="relative text-4xl text-center mb-5 rounded-xl py-4 px-10 bg-white shadow-lg mx-auto inline-block bg-gradient-to-r from-amber-400 via-amber-300 to-amber-200 backdrop-blur-xl shadow-lg p-8">
             Unser Ziel
            </h1>
            </div>
           
            <p className="text-2xl text-center text-gray-600">Wir vom &apos;Wir helfen aus e.V.&apos; glauben daran, dass wir mit unserem Netzwerk die Helferkultur auf regionaler Ebene fördern.<br></br><br></br> Viele Aufgaben lassen sich mit mehr Händen schneller bewältigen &amp; deshalb verbinden wir Menschen mit unserer App!</p>

            </AnimatedElement>



          {/* Items */}
          <section  className="items-strech max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none" data-aos-id-blocks>

            {/* 1st item */}
            <AnimatedElement className="h-full mt-10 relative flex flex-col items-center text-center rounded-full bg-amber bg-white/4 backdrop-blur-xl rounded-xl shadow-lg p-4" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">

              <Image width={75} height={75} alt="Organisationsmöglichkeiten" className="w-16 h-16 mb-4" src={People} />
              
              <h4 className="text-2xl mb-2">Nützliche Organisationsmöglichkeiten</h4>

              <p className="text-lg text-gray-500 text-center">Alle helfenden Hände in deiner Umgebung in einer App!</p>
            </AnimatedElement>

            {/* 2nd item */}
            <AnimatedElement className="h-full bg-white/4 backdrop-blur-xl rounded-xl shadow-lg p-4 mt-10 relative flex flex-col items-center text-center" data-aos="fade-up" data-aos-delay="100" data-aos-anchor="[data-aos-id-blocks]">
              <Image width={100} height={100} alt="Schild" src={SichererRahmen} className="w-16 h-16 mb-4" />
              
              <h4 className="text-2xl mb-2">Einen sicheren Rahmen schaffen</h4>
              <p className="text-lg text-gray-500 text-center">Durch die Verifizierung  möchten wir ein möglichst sichereres Umfeld schaffen!</p>
            </AnimatedElement>

          
            <AnimatedElement className="h-full bg-white/4 backdrop-blur-xl rounded-xl shadow-lg p-4 mt-10 relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="200" data-aos-anchor="[data-aos-id-blocks]">
              <Image width={75} height={75} className="w-16 h-16 mb-4" src={InderNähe} alt="location" />
                            
              <h4 className="text-2xl mb-2 text-center">Bleib auf den Stand deiner Region!</h4>
              <p className="text-lg text-gray-700 text-center">Die App ermöglicht den Zugriff auf Regionsspezifische Announcen!<br/>Sehe was in deiner Umgebung los ist!</p>
            </AnimatedElement>

            {/* 4th item */}
            <AnimatedElement className="sm:mt-10 mt-10 h-full bg-white/4 backdrop-blur-xl rounded-xl shadow-lg p-4 relative flex flex-col items-center md:mt-10" data-aos="fade-up" data-aos-delay="300" data-aos-anchor="[data-aos-id-blocks]">
            <Image className="w-16 h-16 mb-4" src={Handshake} width={120} height={120} alt="handshake" />
               
              <h4 className="text-2xl mb-10">Respetvoller Umgang</h4>
              <p className="text-lg text-gray-500 text-center">Wir führen klare Richtlinien für die Appinterne Kommunikation!<br/>Respekt und Anstand stehen bei uns an erster Stelle!</p>
              </AnimatedElement>
            
            {/* 5th item */}
            <AnimatedElement className="sm:mt-10 mt-10 md:mt-10 h-full bg-white/4 backdrop-blur-xl rounded-xl shadow-lg p-4 relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="400" data-aos-anchor="[data-aos-id-blocks]">
            <Image className="w-16 h-16 mb-4" src={Register} width={75} height={75} alt="people" />
              <h4 className="text-2xl mb-10 text-center">Aufklärung durch Interaktion</h4>
              <p className="text-lg text-gray-500 text-center">Wir helfen bei den ersten Schritten bei der Minijob Zentrale!</p>
              </AnimatedElement>

            {/* 6th item */}
            <AnimatedElement className="sm:mt-10 mt-10 md:mt-10 h-full bg-white/4 backdrop-blur-xl rounded-xl shadow-lg p-4 relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="500" data-aos-anchor="[data-aos-id-blocks]">
            <Image className="w-16 h-16 mb-4" src={RightOne} width={75} height={120} alt="The Right One" />
              <h4 className="text-center text-2xl mb-2">Den richtigen für den Job finden!</h4>
              <p className="text-lg text-gray-500 text-center">Jeder Helfer hat die Möglichkeit sein können zu beschreiben.<br/>Suche und finde schnell und einfach durch ein strukturiertes System!</p>
            </AnimatedElement>

          </section>

        </div>
      </div>
    </section>
  )
}