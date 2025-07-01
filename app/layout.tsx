// app/layout.tsx
import "./globals.css"
import { Geist, Geist_Mono } from "next/font/google"
import type { Metadata } from "next"
import defaultMetadata from "@/lib/Metadata"

const geistSans = Geist({ 
  variable: "--font-geist-sans", 
  subsets: ["latin"],
  display: 'swap',
  preload: true
})
const geistMono = Geist_Mono({ 
  variable: "--font-geist-mono", 
  subsets: ["latin"],
  display: 'swap',
  preload: true
})

export const metadata: Metadata = defaultMetadata

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative bg-white`}
      >
        {children}
      </body>
    </html>
  )
}