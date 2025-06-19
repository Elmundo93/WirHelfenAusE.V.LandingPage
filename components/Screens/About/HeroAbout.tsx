import HeroLayout from "@/components/layout/Hero";

export default function HeroAbout() {


return (
  <HeroLayout
  mainTitle="Die"
  highlightedWord="AushilfApp"
  subtitle="Schnell und einfach eine helfenden Hand in deiner Nähe finden!"
  buttonText="App herunterladen ⬇️ "
  buttonAction={{ type: 'navigate', target: '/about' }}
  MehrErfahrenButtonLabel="Mehr Erfahren!"
  MehrErfahrenTarget="#preview"
  scribbleBottomOffset="0.7em"
  subtitleMarginTop="mt-8 sm:mt-10"
  />

  );
}
