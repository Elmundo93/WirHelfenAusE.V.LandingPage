// components/Screens/PreviewAboutScreen.tsx
import PreviewLayout from "@/components/layout/Preview"
import IdeaCrafting from "@/public/images/IdeaCrafting.svg"

export default function PreviewAboutScreen() {
  return (
    <section id="preview" className="py-16">
      <PreviewLayout
        imageSrc={IdeaCrafting}
        heading="Die Idee:"
        subheading={
          <>
            <span>Finde Möglichkeiten, dort zu helfen wo du kannst</span><br /><br />
            <span>- oder jemanden, der es kann!</span><br /><br />
            <span>Klingt einfach? Ist es auch!</span>
          </>
        }
        buttonText="Direkt zur Anleitung!"
        canvasText="Übersicht aller Schritte"
        buttonAction={{ target: '#guideStep1', offset: 100 }}
        steps={[
          { label: "Schritt 1:", text: "App herunterladen & ein Konto erstellen!", step: "1" },
          { label: "Schritt 2:", text: "Umschauen & Erkunden!", step: "2" },
          { label: "Schritt 3:", text: "Beitrag verfassen!", step: "3" },
          { label: "Schritt 4:", text: "In Kontakt treten!", step: "4" },
          { label: "Schritt 5:", text: "Schlau machen!", step: "5" },
          { label: "Schritt 6:", text: "Danke sagen!", step: "6" },
        ]}
      />
    </section>
  )
}