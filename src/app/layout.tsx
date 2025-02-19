import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import BackgroundImage from "../components/BackgroundImage";


import Head from "next/head";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wir helfen aus e.V.",
  description: "Wir helfen aus e.V.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <Head>
        {/* Grundlegende Metadaten */}
        <title>Wir helfen aus e.V. – Nachbarschaftshilfe leicht gemacht</title>
        <meta
          name="description"
          content="Wir helfen aus e.V. fördert die Kommunikation zwischen Helfenden und Hilfesuchenden. Entdecken Sie unsere AushilfApp und treten Sie mit uns in Kontakt."
        />
        <meta name="keywords" content="Nachbarschaftshilfe, Aushilfstation, Hilfe anbieten, Hilfe suchen, Wir helfen aus e.V., gemeinnütziger Verein" />
        <meta name="author" content="Wir helfen aus e.V." />
        <meta name="robots" content="index, follow" />
        
        {/* Social Media / Open Graph */}
        <meta property="og:title" content="Wir helfen aus e.V. – Ihre helfende Hand" />
        <meta
          property="og:description"
          content="Finden Sie eine helfende Hand oder werden Sie selbst eine. Entdecken Sie unseren gemeinnützigen Verein und unsere AushilfApp."
        />
        <meta property="og:url" content="https://www.wirhelfenaus.de" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.wirhelfenaus.de/hero-image.jpg" />

        {/* JSON-LD für strukturierte Daten */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Wir helfen aus e.V.",
              "url": "https://www.wirhelfenaus.de",
              "logo": "https://www.wirhelfenaus.de/logo.png",
              "description": "Ein gemeinnütziger Verein zur Förderung von Nachbarschaftshilfe. Nutzen Sie unsere AushilfApp, um Hilfe anzubieten oder anzufragen.",
              "contactPoint": {
                "@type": "ContactPoint",
                "email": "kontakt@wirhelfenaus.de",
                "telephone": "+49 123 4567890",
                "contactType": "customer service"
              },
              "sameAs": [
                "https://www.facebook.com/wirhelfenaus",
                "https://twitter.com/wirhelfenaus",
                "https://www.instagram.com/wirhelfenaus"
              ]
            })
          }}
        />
      </Head>
      
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >

          {children}
          <BackgroundImage />

      </body>
    </html>
  );
}
