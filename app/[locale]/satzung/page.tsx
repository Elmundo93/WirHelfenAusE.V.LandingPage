import Satzung from "@/components/Screens/Satzung/Satzung"
import { getTranslations } from "next-intl/server"


export async function generateMetadata() {
  const t = await getTranslations('Satzung');

  return {
    title: t('meta.title'),
    description: t('meta.description'),
    openGraph: {
      title: t('openGraph.title') + ' – ' + t('meta.title'),
      description: t('openGraph.description'),
        },
  twitter: {
    card: "summary_large_image",
    title: t('twitter.title'),
    description: t('twitter.description'),

  },
}
}

export default function SatzungPage() {
  return (





    <Satzung />




  );
}
