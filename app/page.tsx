import HeroMain from "@/components/Screens/Main/HeroMain"
import Features from "@/components/Screens/Main/FeaturesMain"
import ZigZagMain from "@/components/Screens/Main/ZigZagMain"
import CoolKids from '@/public/images/CoolKids.svg'
import animationData from '@/public/animation/RightArrow.json'





export const metadata = {
  title: "Wir helfen aus e.V. – Hilfe, die ankommt",
  description: "Die AushilfApp vermittelt Hilfe zwischen Menschen. Kostenlos, einfach & direkt in deiner Nachbarschaft.",
  openGraph: {
    title: "Wir helfen aus e.V.",
    description: "Finde Hilfe oder biete Unterstützung – mit der AushilfApp verbinden wir Menschen in der Nachbarschaft.",
    images: [
      {
        url: CoolKids.src,
        width: 1200,
        height: 630,
        alt: "Illustration: Junge Menschen helfen Senioren",
      },
    ],
    animationData: animationData,
  },
  twitter: {
    card: "summary_large_image",
    title: "Wir helfen aus e.V.",
    description: "Mit der AushilfApp findest du helfende Hände in deiner Nähe.",
    images: [CoolKids.src],
  },
}

export default function Home() {
  return (
    <main className="overflow-x-hidden relative z-10">
      <HeroMain />
      <Features />
      <ZigZagMain />
    </main>
  )
}