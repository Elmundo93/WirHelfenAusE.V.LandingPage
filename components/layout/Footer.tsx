'use client'

import Link from "next/link"
import { useLocale } from 'next-intl'
import { Separator } from "@/components/ui/separator"
import { SiX, SiGithub, SiFacebook, SiInstagram, SiLinkedin } from 'react-icons/si'

export default function Footer() {
  const locale = useLocale()
  
  return (
    <footer className="bg-white border-t border-gray-200 mt-16">
      <div className="container py-12 px-4 md:px-8 grid gap-12 md:grid-cols-3 text-sm text-gray-700">
        {/* Verein */}
        <div>
          <h6 className="text-gray-800 font-semibold mb-4">Wir helfen aus e.V.</h6>
          <ul className="space-y-2">
            <li>37213 Witzenhausen</li>
            <li>Ermschwerder Straße 6, z.H. Mrutschock</li>
            <li>Gemeinnütziger Verein seit 2024</li>
          </ul>
        </div>

        {/* Nützliche Links */}
        <div>
          <h6 className="text-gray-800 font-semibold mb-4">Nützliche Links</h6>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:underline">Vector Design: vecteezy.com</Link></li>
            <li><Link href="/" className="hover:underline">www.Minijobzentrale.de</Link></li>
            <li><Link href="/" className="hover:underline">www.Wir-helfen-aus.de/anmeldung</Link></li>


          </ul>
        </div>

        {/* Datenschutz */}
        <div>
          <h6 className="text-gray-800 font-semibold mb-4">Richtlinien & Datenschutz</h6>
          <ul className="space-y-2">
            <li><Link href={`/${locale}/satzung`} className="hover:underline">Unsere Vereinssatzung</Link></li>
            <li><Link href={`/${locale}/anmeldung`} className="hover:underline">Personalausweis-Verifizierung</Link></li>
            <li><Link href={`/${locale}/communication`} className="hover:underline">Kommunikationsrichtlinien</Link></li>
            <li><Link href={`/${locale}/datenschutz`} className="hover:underline">Datenschutz</Link></li>
          </ul>
        </div>
      </div>

      <Separator className="my-6" />

      <div className="container pb-8 flex flex-col md:flex-row justify-between items-center gap-4 px-4 md:px-8">
        <div className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} Wir helfen aus e.V.</div>
        <div className="flex gap-5 text-gray-600">
          <Link href="/" aria-label="Twitter"><SiX className="w-5 h-5 hover:text-blue-500" /></Link>
          <Link href="/" aria-label="GitHub"><SiGithub className="w-5 h-5 hover:text-gray-800" /></Link>
          <Link href="/" aria-label="Facebook"><SiFacebook className="w-5 h-5 hover:text-blue-600" /></Link>
          <Link href="/" aria-label="Instagram"><SiInstagram className="w-5 h-5 hover:text-pink-500" /></Link>
          <Link href="/" aria-label="LinkedIn"><SiLinkedin className="w-5 h-5 hover:text-blue-700" /></Link>
        </div>
      </div>
    </footer>
  )
}