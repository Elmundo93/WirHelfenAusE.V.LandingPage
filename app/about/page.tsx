import HeroAbout from '@/components/Screens/About/HeroAbout';
import PreviewAbout from '@/components/Screens/About/PreviewAbout';
import ZigZagAbout from '@/components/Screens/About/ZigZagAbout';
import IdeaCrafting from '@/public/images/IdeaCrafting.svg';

export const metadata = {
  title: "Wir helfen aus e.V. – Hilfe, die ankommt",
  description: "Die AushilfApp vermittelt Hilfe zwischen Menschen. Kostenlos, einfach & direkt in deiner Nachbarschaft.",
  openGraph: {
    title: "Wir helfen aus e.V.",
    description: "Finde Hilfe oder biete Unterstützung – mit der AushilfApp verbinden wir Menschen in der Nachbarschaft.",
    images: [
      {
        url: IdeaCrafting.src,
        width: 1200,
        height: 630,
        alt: "Illustration: Gemeinsam helfen",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wir helfen aus e.V.",
    description: "Mit der AushilfApp findest du helfende Hände in deiner Nähe.",
    images: [IdeaCrafting.src],
  },
}






export default function About() {

  
  return (
    <main className='overflow-x-hidden'> 


      <HeroAbout />
      <PreviewAbout/>
      <ZigZagAbout/>




    </main>
  );
}
