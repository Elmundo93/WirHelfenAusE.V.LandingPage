import ImageComponent from './Image'
import AnimatedElement from '../Animation/AnimatedElement'
import Image from 'next/image'

import CasualFriends from '../../../public/images/CasualFriends.png'

export default function CRules() {

  return (
    <section id="cRules" className="flex flex-col items-center justify-center relative ">
      {/* Hintergrundbild mit sanfter Überblendung */}
      <div className="md:h-32 sm:h-24 lg:h-20 "></div>
      <ImageComponent />

      {/* Inhalt */}
      <AnimatedElement className="z-10 rounded-xl shadow-lg p-10 w-full mx-auto backdrop-blur-xl">
        <div className="relative flex flex-col w-full max-w-md mx-auto">
          {/* Hintergrundbild – absolut positioniert */}
          <div className="absolute inset-0 "  style={{ top: '-180px' }}>
            <Image
              src={CasualFriends}
              alt="CasualFriends"
              fill
              className="object-contain rounded-full "
              loading="eager"
            />
          </div>
          {/* Invisible Placeholder */}
          <div className="invisible">
            <Image
              src={CasualFriends}
              alt="CasualFriends"
              width={320}
              height={320}
              className="rounded-full"
              loading="eager"
            />
          </div>
          {/* Überschrift, die über dem Bild liegt */}
          <AnimatedElement className="p-4 border-t-none rounded-2xl bg-gradient-to-r from-amber-400 via-amber-300 to-amber-200 backdrop-blur-xl shadow-lg  bg-white/50 shadow-lg   relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="300" data-aos-anchor="[data-aos-id-blocks]">
            <h4 className="text-2xl  p-4 pt-0  rounded-full text-center">Unsere Kommunikationsrichtlinien!</h4>
            <p className="text-lg text-gray-500 text-center"> Miteinander helfen <br /> – respektvoll und freundlich - <br /> Diese Richtlinien sind unser Kern für ein positives und respektvolles Miteinander.</p>
          </AnimatedElement>
        </div>
        <div className="flex flex-col items-center justify-center max-w-md mx-auto w-full">
          {/* Abschnitt: Grundwerte */}
          <div className="mt-12">
            <h2 className="text-2xl font-semibold text-amber-600 mb-4">🧡 Unsere Grundwerte</h2>
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
        </div>
      </AnimatedElement>
    </section>
  )
}