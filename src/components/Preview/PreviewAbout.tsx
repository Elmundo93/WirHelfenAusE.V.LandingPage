

import React from 'react'
import PreviewLayout from './PreviewLayout'


import IdeaCrafting from '../../../public/images/IdeaCrafting.svg'


const PreviewAbout: React.FC = () => {


  // Closes the modal then scrolls to the target


 
  const imageSource = IdeaCrafting
  const heading = "Die Idee:"
  const subheading = (
    <>
      <span>Finde Möglichkeiten, dort zu helfen wo du kannst</span>
      <br />
      <br />
      <span>- oder jemanden, der es kann!</span>
      <br />
      <br />
      <span>Klingt einfach? Ist es auch!</span>
    </>
  )
  const buttonText = "Direkt zur Anleitung!"
  const canvasText = "Übersicht aller Schritte"

  // Create an array of steps
  const steps = [
    { label: "Schritt 1:", text: "App herunterladen & ein Konto erstellen!", step: "1" },
    { label: "Schritt 2:", text: "Umschauen & Erkunden!", step: "2" },
    { label: "Schritt 3:", text: "Beitrag verfassen!", step: "3" },
    { label: "Schritt 4:", text: "In Kontakt treten!", step: "4" },
    { label: "Schritt 5:", text: "Schlau machen!", step: "5" },
    { label: "Schritt 6:", text: "Danke sagen!", step: "6" },
  ]

  return (
    <section id="preview" className="relative z-20">
      <PreviewLayout 
        imageSource={imageSource}
        heading={heading}
        subheading={subheading}
        buttonText={buttonText}
        canvasText={canvasText}
        buttonAction={{ target: '#guideStep1', offset: 100 }}
        steps={steps}
      />

    </section>
  )
}

export default PreviewAbout