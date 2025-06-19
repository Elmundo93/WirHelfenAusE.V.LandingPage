import HeroLayout from "@/components/layout/Hero";

export default function HeroMain() {
  return (
    <HeroLayout
      mainTitle="Wir helfen Ihnen, eine"
      highlightedWord="helfende Hand"
      subtitle="- oder eine zu werden!"
      buttonText="Schnell und einfach mit der AushilfApp! 📲"
      buttonAction={{ type: 'navigate', target: '/about' }}
      MehrErfahrenButtonLabel="Mehr Erfahren!"
      MehrErfahrenTarget="#ÜberUns"
      main
      finalWords="zu finden!"
      scribbleBottomOffset="0.7em"
    />
  )
}