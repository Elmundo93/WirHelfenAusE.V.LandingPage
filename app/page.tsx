import HeroMain from "@/components/Screens/Main/HeroMain"
import Features from "@/components/Screens/Main/FeaturesMain"
import ZigZagMain from "@/components/Screens/Main/ZigZagMain"


export default function Home() {
  return (
    <main className="overflow-x-hidden relative z-10">
      <HeroMain />
      <Features />
      <ZigZagMain />
    </main>
  )
}