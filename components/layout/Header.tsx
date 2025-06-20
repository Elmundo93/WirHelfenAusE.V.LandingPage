'use client'

import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useEffect, useRef, useState } from "react"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { 
  IoHelpCircleOutline,
  IoDocumentTextOutline,
  IoChatbubbleOutline,
  IoPersonAddOutline,
  IoBookOutline,
} from "react-icons/io5"
import BienenLogo from "@/public/images/BienenLogoNeat.svg"
import sign from "@/public/images/sign.png"

const menuItems = [
  { label: "Über die App", href: "/about", icon: IoHelpCircleOutline },
  { label: "Minijobsystem & Anmeldung", href: "/anmeldung", icon: IoPersonAddOutline },
  { label: "Unsere Satzung", href: "/satzung", icon: IoDocumentTextOutline },
  { label: "Kontakt", href: "/contact-us", icon: IoChatbubbleOutline },
  { label: "Kommunikationsrichtlinien", href: "/communication", icon: IoBookOutline },
]
export default function Header() {
  const router = useRouter()
  const [sheetOpen, setSheetOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const lastScrollY = useRef(0)

  // Scroll-Logik
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const goingDown = currentScrollY > lastScrollY.current

      setIsVisible(!goingDown || currentScrollY < 10)
      lastScrollY.current = currentScrollY
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])


  const handleNav = (href: string) => {
    setSheetOpen(false)
    router.push(href)
  }

  return (
   <header
  className={`fixed top-4 z-50 w-full px-4 md:px-6 transition-transform duration-300 ${
    isVisible ? 'translate-y-0' : '-translate-y-24'
  }`}
>
      <div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4 bg-white/80 backdrop-blur-xl border border-white/30 shadow-md rounded-full">
        {/* Logo & Name */}
        <Link href="/" className="flex items-center gap-3">
          <Image src={BienenLogo} alt="Logo" width={40} height={50} className="lg:ml-12" priority />
          <Image 
            src={sign} 
            alt="Logo" 
            className="opacity-0 xl:opacity-100 transform transition-all duration-200 ease-in-out max-w-36 absolute lg:left-5 lg:top-20" 
            priority 
          />
          <h1 className="xl:hidden text-2xl font-bold text-amber-400">Wir helfen aus e.V.</h1>
        </Link>

        {/* Spacer */}
        <div className="flex-1"></div>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-4" aria-label="Hauptnavigation">
          {menuItems.map(({ label, href, icon: Icon }) => (
            <Button
              key={href}
              variant="ghost"
              className="text-gray-700 text-lg flex items-center gap-2 px-4 py-2 hover:bg-amber-100 rounded-full transition-all duration-200 hover:scale-105"
              onClick={() => handleNav(href)}
            >
              <Icon size={20} className="text-gray-500" />
              {label}
            </Button>
          ))}
        </nav>

        {/* Mobile Burger */}
        <div className="xl:hidden">
          <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild>
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-12 w-12 rounded-full hover:bg-amber-100 transition-all duration-200 hover:scale-105 relative"
              >
                <div className="flex flex-col gap-1.5 items-center justify-center w-full h-full">
                  <div className={`w-6 h-0.5 bg-gray-700 rounded-full transition-all duration-300 ${sheetOpen ? 'rotate-45 translate-y-2.5' : ''}`}></div>
                  <div className={`w-6 h-0.5 bg-gray-700 rounded-full transition-all duration-300 ${sheetOpen ? 'opacity-0' : ''}`}></div>
                  <div className={`w-6 h-0.5 bg-gray-700 rounded-full transition-all duration-300 ${sheetOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></div>
                </div>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="top"
              className="pt-8 bg-white/95 backdrop-blur-xl border-b border-gray-200 rounded-b-2xl"
            >
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <nav className="flex flex-col gap-2 mt-6" aria-label="Mobile Navigation">
                {menuItems.map(({ label, href, icon: Icon }) => (
                  <Button
                    key={href}
                    variant="ghost"
                    className="justify-start text-lg gap-4 text-gray-700 px-6 py-4 rounded-xl hover:bg-amber-100 transition-all duration-200 hover:scale-102"
                    onClick={() => handleNav(href)}
                  >
                    <Icon size={24} className="text-gray-600" />
                    {label}
                  </Button>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}