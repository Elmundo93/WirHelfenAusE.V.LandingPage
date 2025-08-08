import { getTranslations } from 'next-intl/server';
import HeroMain from "@/components/Screens/Main/HeroMain"
import Features from "@/components/Screens/Main/FeaturesMain"
import ZigZagMain from "@/components/Screens/Main/ZigZagMain"
import CoolKids from '@/public/images/CoolKids.png'

export async function generateMetadata() {
  const t = await getTranslations('Index');
  
  return {
    title: t('meta.title'),
    description: t('meta.description'),
    openGraph: {
      title: t('meta.title'),
      description: t('meta.description'),
      images: [
        {
          url: CoolKids.src,
          width: 1200,
          height: 630,
          alt: "Illustration: Junge Menschen helfen Senioren",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t('meta.title'),
      description: t('meta.description'),
      images: [CoolKids.src],
    },
  };
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