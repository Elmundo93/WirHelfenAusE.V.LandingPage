// PreviewAnmelden.server.tsx
import PreviewLayout from '@/components/layout/Preview';

import HelpingPeople from '@/public/images/Help and support to climbing employee from mentor or leader hand.svg';


export default function PreviewAnmelden() {
  const imageSource = HelpingPeople;
  const heading = "Unser Schritt für Schritt Guide";
  const subheading = "Finde alle nützlichen Informationen um deine helfende Hand bei der Minijobzentrale anzumelden!";
  const buttonText = "Direkt zum Guide!";
  const canvasText = "Übersicht aller Schritte";

  const steps = [
    { label: "Schritt 1:", text: "Finde deine helfende Hand mit der AushilfApp!", step: "1" },
    { label: "Schritt 2:", text: "Optionen kennenlernen!", step: "2" },
    { label: "Schritt 3:", text: "Bereite einen Arbeitsvertrag vor!", step: "3" },
    { label: "Schritt 4", text: "Melde deinen helfende Hand bei der Minijobzentrale an!", step: "4"},
    { label: "Schritt 4, Teil 2:", text: "Details zur Anmeldung", step: "5"},
    { label: "Schritt 5", text: "Kalkulation der Abgaben", step: "6"},
    { label: "Schritt 5, Teil 2:", text: "Abgabedetails für helfende Hände!", step: "7"  },
    { label: "Schritt 5, Teil 3:", text: "Abgabedetails für Arbeitgeber!", step: "8" }
  ];



  return (
    <section id="preview" className="relative z-20">
      <PreviewLayout 

        steps={steps}
        buttonAction={{ target: '#guideStep1', offset: 100 }}
      
        imageSrc={imageSource}
        heading={heading}
        subheading={subheading}
        buttonText={buttonText}
        canvasText={canvasText}
      />


    </section>
  );
}