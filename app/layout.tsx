// app/layout.tsx
import "./globals.css"
import { Geist, Geist_Mono } from "next/font/google"
import type { Metadata } from "next"
import defaultMetadata from "@/lib/Metadata"

import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import BackgroundImage from "@/components/layout/BackgroundImage"

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] })
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] })

export const metadata: Metadata = defaultMetadata

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative bg-white`}
      >
        <BackgroundImage />
        <Header />
        <main className="min-h-screen z-10 relative">{children}</main>
        <Footer />
      </body>
    </html>
  )
}