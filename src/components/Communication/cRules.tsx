'use client'

import HelpingPeople from '../../../public/images/Help and support to climbing employee from mentor or leader hand.png'
import DankeSagen from '../../../public/images/DankeSagen.png'
import AnimatedElement from '../Animation/AnimatedElement'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useHeaderHeight } from '../headerHeight'
import CasualFriends from '../../../public/images/CasualFriends.png'
import Handshake from '../../../public/images/handshake-svgrepo-com.svg'
export default function CRules() {
    const headerHeight = useHeaderHeight();
  return (
    <section id="cRules" className="flex flex-col items-center justify-center relative px-6 lg:px-16">
      {/* Hintergrundbild mit sanfter Überblendung */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2 }}
        className="fixed inset-0 z-0 h-full"
      >
        <Image src={DankeSagen} alt="Helfende Menschen" fill style={{ objectFit: 'cover' }} priority />
      </motion.div>

      {/* Inhalt */}
      <AnimatedElement  className=" relative z-10  rounded-xl shadow-lg p-10 max-w-5xl mx-auto backdrop-blur-xl backdrop-saturate-150 ">
        {/* Header mit Icon */}
        <div className=" relative flex flex-col items-center w-full max-w-md mx-auto ">
            {/* Hintergrundbild – absolut positioniert */}
            <div className="absolute inset-0">
              <Image
                src={CasualFriends}
                alt="CasualFriends"
                fill
                className="object-contain rounded-full"
              />
            </div>
            {/* Invisible Placeholder */}
            <div className="invisible">
              <Image
                src={CasualFriends}
                alt="CasualFriends"
                width={280}
                height={280}
                className="rounded-full"
              />
            </div>
            {/* Überschrift, die über dem Bild liegt */}
          <AnimatedElement className="rounded-2xl sm:mt-10 h-full  backdrop-blur-3xl shadow-lg backdrop-saturate-150 backdrop-opacity-100 p-8 relative flex flex-col items-center md:mt-10" data-aos="fade-up" data-aos-delay="300" data-aos-anchor="[data-aos-id-blocks]">
            <Image className="w-16 h-16 mb-4" src={Handshake} width={120} height={120} alt="handshake" />
               
              <h4 className="text-2xl mb-10">Unsere Kommunikationsrichtlinien!</h4>
              <p className="text-lg text-gray-500 text-center"> Miteinander helfen – mit Respekt und Freundlichkeit. Diese Richtlinien sind unser Kern für ein positives und respektvolles Miteinander.</p>
              </AnimatedElement>
         
          </div>

        {/* Abschnitt: Grundwerte */}
        <div className="mt-12 ">
          <h2 className="text-2xl font-semibold text-amber-600 mb-4  ">🧡 Unsere Grundwerte</h2>
          <ul className="space-y-4 text-gray-700">
            <li>✅ <b>Respektvoll & freundlich:</b> Jeder wird mit Würde behandelt.</li>
            <li>✅ <b>Hilfsbereit & solidarisch:</b> Jede Hilfe zählt – egal wie klein!</li>
            <li>✅ <b>Geduldig & verständnisvoll:</b> Wir geben einander die Möglichkeit, dazuzulernen.</li>
            <li>✅ <b>Ehrlich & vertrauensvoll:</b> Sei authentisch in dem, was du sagst und tust.</li>
            <li>✅ <b>Konstruktiv & lösungsorientiert:</b> Probleme werden respektvoll angesprochen.</li>
          </ul>
        </div>

        {/* Abschnitt: No-Gos */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-red-600 mb-4">🚫 No-Gos – Was wir nicht dulden</h2>
          <ul className="space-y-4 text-gray-700">
            <li>❌ <b>Diskriminierung & Hassrede:</b> Kein Platz für Rassismus, Sexismus oder andere Ausgrenzung.</li>
            <li>❌ <b>Beleidigungen & Mobbing:</b> Persönliche Angriffe sind tabu.</li>
            <li>❌ <b>Fake-Anfragen & Betrug:</b> Sei ehrlich in dem, was du suchst oder anbietest.</li>
            <li>❌ <b>Politische & religiöse Auseinandersetzungen:</b> Hier geht es um Hilfe – nicht um Überzeugungen.</li>
            <li>❌ <b>Spam & Werbung:</b> Keine Eigenwerbung oder unnötige Nachrichten.</li>
            <li>❌ <b>Drohungen & illegale Inhalte:</b> Gewalt oder gefährliche Inhalte werden nicht toleriert.</li>
          </ul>
        </div>

        {/* Abschnitt: Wertschätzende Kommunikation */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">💬 So kommunizieren wir wertschätzend</h2>
          <ul className="space-y-4 text-gray-700">
            <li>💡 <b>Bleib höflich & klar:</b> Formuliere deine Nachrichten verständlich.</li>
            <li>💡 <b>Nutze eine positive Sprache:</b> Worte können Kraft geben oder verletzen – wähle sie weise.</li>
            <li>💡 <b>Denke an den Ton:</b> Emojis 😊 oder freundliche Formulierungen helfen Missverständnisse zu vermeiden.</li>
            <li>💡 <b>Gib anderen eine Chance:</b> Jeder macht mal Fehler – sei nachsichtig.</li>
          </ul>
        </div>

        {/* Abschnitt: Verhalten bei Verstößen */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">🛠 Was tun bei Verstößen?</h2>
          <ul className="space-y-4 text-gray-700">
            <li>🔹 <b>Unangemessenes Verhalten melden:</b> Nutze die Meldefunktion.</li>
            <li>🔹 <b>Wir kümmern uns darum:</b> Unser Team prüft die Meldungen sorgfältig.</li>
            <li>🔹 <b>Konsequenzen:</b> Wiederholte oder schwere Verstöße können zur Sperrung führen.</li>
          </ul>
        </div>

        {/* Abschluss */}
        <div className="mt-12 text-center">
          <p className="text-lg font-semibold text-gray-700">Danke, dass du unsere Werte respektierst! 💙</p>
          <p className="text-gray-600 mt-2">Gemeinsam können wir eine hilfsbereite und freundliche Community schaffen.</p>
        </div>
      </AnimatedElement>
    </section>
  )
}