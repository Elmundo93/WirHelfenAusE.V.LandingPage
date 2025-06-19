import Satzung from "@/components/Screens/Satzung/Satzung"


export const metadata = {
  title: "Satzung – Wir helfen aus e.V.",
  description: "Hier findest du die wichtigsten Inhalte unserer Vereinssatzung. Erfahre mehr über Zweck, Mitgliedschaft und Gemeinnützigkeit von 'Wir helfen aus e.V.'.",
  openGraph: {
    title: "Vereinssatzung – Wir helfen aus e.V.",
    description: "Transparenz ist uns wichtig: In unserer Satzung findest du alle Informationen zu Zielen, Struktur und rechtlicher Grundlage unseres gemeinnützigen Vereins.",



  },
  twitter: {
    card: "summary_large_image",
    title: "Die Satzung von 'Wir helfen aus e.V.'",
    description: "Was macht unseren Verein aus? Erfahre alles über Mitgliedschaft, Struktur und unsere gemeinnützige Ausrichtung.",

  },
}

export default function SatzungPage() {
  return (





    <Satzung />




  );
}