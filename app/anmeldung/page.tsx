import HeroAnmelden from "@/components/Screens/Anmelden/HeroAnmelden";
import PreviewAnmelden from "@/components/Screens/Anmelden/PreviewAnmelden";
import ZigZagAnmeldung from "@/components/Screens/Anmelden/ZigZagAnmelden";

import HelpingPeople from '@/public/images/Help and support to climbing employee from mentor or leader hand.svg';

export const metadata = {
  title: "Wir helfen aus e.V. – Hilfe, die ankommt",
  description: "Die AushilfApp vermittelt Hilfe zwischen Menschen. Kostenlos, einfach & direkt in deiner Nachbarschaft. Neben dem App service, möchte der Wir helfen aus e.V. den Bürgern das Minijobsystem näher bringen. Hierfür haben wir einen Schritt für Schritt Guide erstellt, der dir hilft deine helfende Hand bei der Minijobzentrale anzumelden.",
  openGraph: {
    title: "Wir helfen aus e.V.",
    description: "Finde Hilfe oder biete Unterstützung – mit der AushilfApp verbinden wir Menschen in der Nachbarschaft.",
    images: [
      {
        url: HelpingPeople.src,
        width: 1200,
        height: 630,
        alt: "Illustration: Junge Menschen helfen Senioren",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wir helfen aus e.V.",
    description: "Mit der AushilfApp findest du helfende Hände in deiner Nähe.",
    images: [HelpingPeople.src],
  },
}




export default function Anmeldung() {
  return (
    
  <main className='overflow-x-hidden'>    


      <HeroAnmelden />
      <PreviewAnmelden />
      <ZigZagAnmeldung/>

     
    </main>
  );
}