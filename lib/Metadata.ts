import { Metadata } from "next"

const defaultMetadata: Metadata = {
  title: {
    default: "Wir helfen aus e.V. – Hilfe organisieren. Menschen verbinden.",
    template: "%s | Wir helfen aus e.V.",
  },
  description:
    "Die AushilfApp vom gemeinnützigen Verein Wir helfen aus e.V. verbindet hilfesuchende und hilfsbereite Menschen. Jetzt kostenlos entdecken.",
    keywords: [
        "Wir helfen aus",
        "AushilfApp",
        "Nachbarschaftshilfe",
        "Minijob Hilfe",
        "Hilfe finden",
        "Hilfe anbieten",
        "gemeinnütziger Verein",
        "soziale Unterstützung",
        "ehrenamtlich helfen",
        "Seniorenhilfe",
        "Pflegehilfe",
        "Gartenhilfe",
        "Nachhilfe",
        "Aushilfe",
        "Betreuung",
        "Alltagshilfe",
        "Haushaltshilfe",
        "Begleitung",
        "Hilfe für Senioren",
        "Unterstützung im Alltag",
        "barrierearme Hilfe",
        "Menschen verbinden",
        "Gutes tun",
        "Nachbarschaft vernetzen",
        "lokale Hilfe",
        "soziale Projekte Deutschland"
      ],
  authors: [{ name: "Wir helfen aus e.V.", url: "https://www.wir-helfen-aus.de" }],
  creator: "Wir helfen aus e.V.",
  publisher: "Wir helfen aus e.V.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || "https://www.wir-helfen-aus.de"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://www.wir-helfen-aus.de",
    title: "Wir helfen aus e.V. – Hilfe organisieren. Menschen verbinden.",
    description:
      "Wir helfen aus e.V. ist ein gemeinnütziger Verein mit der AushilfApp für moderne Nachbarschaftshilfe. Finde Hilfe oder biete welche an.",
    siteName: "Wir helfen aus e.V.",
    images: [
      {
        url: "/images/BienenLogoNeat.png",
        width: 1200,
        height: 630,
        alt: "Logo von Wir helfen aus e.V. mit Menschen, die sich gegenseitig unterstützen",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wir helfen aus e.V. – Hilfe organisieren. Menschen verbinden.",
    description:
      "Die AushilfApp für moderne Nachbarschaftshilfe. Verbinde dich mit Menschen in deiner Umgebung.",
    images: ["/images/BienenLogoNeat.png"],
    creator: "@wirhelfenaus", // optional, falls Twitter-Handle vorhanden
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/images/BienenLogoNeat.png",
    shortcut: "/favicon.ico",
  },
  category: "Nonprofit",
  applicationName: "AushilfApp",
  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },
}

export default defaultMetadata