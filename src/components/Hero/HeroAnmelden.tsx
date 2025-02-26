
import HeroLayout from "./HeroLayout";


import ScribbleAnimation from "../Animation/ScribbleAnimation";

export default function HeroAnmelden() {


  return (
    <HeroLayout
      preTitle="Alles auf einem Blick!"
      title={
        <> 
        Sie möchten ihre {''} <br/>
                <span className="text-amber-500 relative">
                
                  helfende Hand
                  <ScribbleAnimation  /></span> 
                  <div className="h-5" />
                  anmelden?
                  <br/>


        </>
      }
      subtitle="dann finden Sie hier nützliche Informationen rund um die Anmeldung eines Minijobbs!"
      buttonText="Schritt für Schritt Guide anschauen! 📔"
      buttonAction={{ type: 'scroll', target: '#guideStep1' }}
      MehrErfahrenButtonLabel="Mehr Erfahren!"
      MehrErfahrenTarget="#preview"
    />
  );
}