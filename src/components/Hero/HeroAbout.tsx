import HeroLayout from "./HeroLayout";
import ScribbleAnimation from "../Animation/ScribbleAnimation";


export default function HeroAbout() {


  return (
    <HeroLayout
      preTitle="Sicher, Zugänglich & Intuitiv!"
      title={
        <> Die{' '}
                <span className="text-amber-500 relative">
                <ScribbleAnimation  />
                  AushilfApp</span>!
                  <br/>
                  <br/>

        </>
      }
      subtitle="Schnell und einfach eine helfenden Hand in deiner Nähe finden!"
      
      buttonText="App herunterladen ⬇️ "
      buttonAction={{ type: 'navigate', target: '/about' }}
      MehrErfahrenButtonLabel="Mehr Erfahren!"
      MehrErfahrenTarget="#preview"

    />
  );
}
