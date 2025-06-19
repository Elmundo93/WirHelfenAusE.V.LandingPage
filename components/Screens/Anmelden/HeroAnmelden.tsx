import HeroLayout from "@/components/layout/Hero";

export default function HeroAnmelden() {


  return (


    <HeroLayout
    mainTitle="Sie möchten ihre"
    highlightedWord="helfende Hand"
    subtitle="dann finden Sie hier nützliche Informationen rund um die Anmeldung eines Minijobbs!"
    buttonText="Schritt für Schritt Guide anschauen! 📔"
    buttonAction={{ type: 'scroll', target: '#guideStep1' }}
    MehrErfahrenButtonLabel="Mehr Erfahren!"
    MehrErfahrenTarget="#preview"
    finalWords="anmelden?"

      scribbleBottomOffset="0.7em"

  />
  );
}