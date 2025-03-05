import HeroLayout from "./HeroLayout";
import ScribbleAnimation from "../Animation/ScribbleAnimation";

export default function HeroMain() {
  return (
    <HeroLayout
      title={
        <>
          Wir helfen Ihnen, eine{" "}
          <span className="text-amber-500 relative">
            helfende Hand
            <ScribbleAnimation  />
          </span>
          <div className="h-3" />
          zu finden!
        </>
      }
      subtitle="- oder eine zu werden!"
      buttonText="Schnell und einfach mit der AushilfApp! 📲"
      main={true}
      buttonAction={{ type: 'navigate', target: '/about' }}
      MehrErfahrenButtonLabel="Mehr Erfahren!"
      MehrErfahrenTarget="#ÜberUns"

    />
  );
}