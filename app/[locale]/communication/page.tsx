

import CRules from "@/components/Screens/Communication/CRules";





export const metadata = {
  title: "Kommunikationsregeln – Wir helfen aus e.V.",
  description: "Für ein faires, respektvolles und hilfsbereites Miteinander in der AushilfApp. Hier findest du unsere Kommunikationsrichtlinien im Überblick.",
  openGraph: {
    title: "Respektvoll helfen – Unsere Kommunikationsregeln",
    description: "Erfahre, wie wir in der AushilfApp miteinander sprechen, was erlaubt ist – und was nicht. Gemeinsam schaffen wir eine freundliche Community.",


  },
  twitter: {
    card: "summary_large_image",
    title: "So kommunizieren wir in der AushilfApp",
    description: "Unsere Regeln für Respekt, Hilfsbereitschaft und sichere Kommunikation – für ein starkes Miteinander.",

  },
}

export default function Communication() {
  return (
 




          <CRules />

  );
}