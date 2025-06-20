import AnimatedElement from '@/components/Animation/AnimatedElement'
import Image from 'next/image'
import GuidelineSection from '@/components/layout/GuidelineSection'

import CasualFriends from '../../../public/images/CasualFriends.svg'

export default function CRules() {
  return (
    <section id="cRules" className="flex flex-col items-center justify-center relative mt-20">
      <div className="md:h-8 sm:h-6 lg:h-4" />


      <AnimatedElement className="z-10 rounded-xl shadow-lg p-10 w-full mx-auto backdrop-blur-xl">
        <div className="relative flex flex-col w-full max-w-xl mx-auto">

          {/* Bild im Hintergrund */}
          <div className="absolute inset-0" style={{ top: '-180px' }}>
            <Image src={CasualFriends} alt="CasualFriends" fill className="object-contain rounded-full" priority />
          </div>

          <div className="invisible">
            <Image src={CasualFriends} alt="CasualFriends" width={320} height={320} className="rounded-full" priority />
          </div>

          {/* Überschrift */}
          <div className="p-4 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-200 rounded-2xl shadow-lg backdrop-blur-xl relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="300">
            <h4 className="text-2xl p-4 pt-0 rounded-full text-center">Unsere Kommunikationsrichtlinien!</h4>
            <p className="text-lg text-gray-500 text-center">
              Miteinander helfen <br />
              – respektvoll und freundlich – <br />
              Diese Richtlinien sind unser Kern für ein positives und respektvolles Miteinander.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center max-w-xl mx-auto w-full">
          <GuidelineSection
            title="Unsere Grundwerte"
            icon="🧡"
            color="text-amber-600"
            items={[
              { emoji: "✅", content: "<b>Respektvoll & freundlich:</b> Jeder wird mit Würde behandelt." },
              { emoji: "✅", content: "<b>Hilfsbereit & solidarisch:</b> Jede Hilfe zählt – egal wie klein!" },
              { emoji: "✅", content: "<b>Geduldig & verständnisvoll:</b> Wir geben einander die Möglichkeit, dazuzulernen." },
              { emoji: "✅", content: "<b>Ehrlich & vertrauensvoll:</b> Sei authentisch in dem, was du sagst und tust." },
              { emoji: "✅", content: "<b>Konstruktiv & lösungsorientiert:</b> Probleme werden respektvoll angesprochen." },
            ]}
          />

          <GuidelineSection
            title="No-Gos – Was wir nicht dulden"
            icon="🚫"
            color="text-red-600"
            items={[
              { emoji: "❌", content: "<b>Diskriminierung & Hassrede:</b> Kein Platz für Rassismus, Sexismus oder andere Ausgrenzung." },
              { emoji: "❌", content: "<b>Beleidigungen & Mobbing:</b> Persönliche Angriffe sind tabu." },
              { emoji: "❌", content: "<b>Fake-Anfragen & Betrug:</b> Sei ehrlich in dem, was du suchst oder anbietest." },
              { emoji: "❌", content: "<b>Politische & religiöse Auseinandersetzungen:</b> Hier geht es um Hilfe – nicht um Überzeugungen." },
              { emoji: "❌", content: "<b>Spam & Werbung:</b> Keine Eigenwerbung oder unnötige Nachrichten." },
              { emoji: "❌", content: "<b>Drohungen & illegale Inhalte:</b> Gewalt oder gefährliche Inhalte werden nicht toleriert." },
            ]}
          />

          <GuidelineSection
            title="So kommunizieren wir wertschätzend"
            icon="💬"
            color="text-green-600"
            items={[
              { emoji: "💡", content: "<b>Bleib höflich & klar:</b> Formuliere deine Nachrichten verständlich." },
              { emoji: "💡", content: "<b>Nutze eine positive Sprache:</b> Worte können Kraft geben oder verletzen – wähle sie weise." },
              { emoji: "💡", content: "<b>Denke an den Ton:</b> Emojis 😊 oder freundliche Formulierungen helfen Missverständnisse zu vermeiden." },
              { emoji: "💡", content: "<b>Gib anderen eine Chance:</b> Jeder macht mal Fehler – sei nachsichtig." },
            ]}
          />

          <GuidelineSection
            title="Was tun bei Verstößen?"
            icon="🛠"
            items={[
              { emoji: "🔹", content: "<b>Unangemessenes Verhalten melden:</b> Nutze die Meldefunktion." },
              { emoji: "🔹", content: "<b>Wir kümmern uns darum:</b> Unser Team prüft die Meldungen sorgfältig." },
              { emoji: "🔹", content: "<b>Konsequenzen:</b> Wiederholte oder schwere Verstöße können zur Sperrung führen." },
            ]}
          />

          {/* Abschlussabschnitt */}
          <div className="mt-12 text-center">
            <p className="text-lg font-semibold text-gray-700">Danke, dass du unsere Werte respektierst! 💙</p>
            <p className="text-gray-600 mt-2">Gemeinsam können wir eine hilfsbereite und freundliche Community schaffen.</p>
          </div>
        </div>
      </AnimatedElement>
    </section>
  )
}