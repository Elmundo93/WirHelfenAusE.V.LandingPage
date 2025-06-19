'use client'

import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Logs, MessageCircleQuestion, BookOpen, MessageCircle, UserPlus, BookA, Menu } from "lucide-react"
import BienenLogo from "@/public/images/BienenLogoNeat.svg"

const menuItems = [
  { label: "Über die App", href: "/about", icon: MessageCircleQuestion },
  { label: "Minijobsystem & Anmeldung", href: "/anmeldung", icon: UserPlus },
  { label: "Unsere Satzung", href: "/satzung", icon: BookOpen },
  { label: "Kontakt", href: "/contact-us", icon: MessageCircle },
  { label: "Kommunikationsrichtlinien", href: "/communication", icon: BookA },
]

export default function Header() {
  const router = useRouter()
  const [open, setOpen] = useState(false)

  const handleNav = (href: string) => {
    setOpen(false)
    router.push(href)
  }

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/70 border-b border-white/30 shadow-sm">
      <div className="w-full max-w-7xl mx-auto flex items-center py-4 px-4 sm:px-8">
        {/* Logo & Name */}
        <Link href="/" className="flex items-center gap-3">
          <Image src={BienenLogo} alt="Logo" width={40} height={50} priority/>
          <span className="font-bold text-amber-400 text-2xl sm:text-3xl">Wir helfen aus e.V.</span>
        </Link>

        {/* Spacer */}
        <div className="flex-1"></div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="text-2xl text-gray-700 hover:text-amber-500 gap-2 p-6">
                <Logs size={28} />
                Wissenswertes
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-80 rounded-xl shadow-xl bg-white/90 backdrop-blur-2xl border">
              {menuItems.map(({ label, href, icon: Icon }) => (
                <DropdownMenuItem
                  key={href}
                  onClick={() => handleNav(href)}
                  className=" flex items-center gap-3 px-4 py-3 text-gray-800 hover:bg-amber-100 cursor-pointer rounded-md text-xl"
                >
                  <Icon size={32} className="text-gray-500" />
                  {label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Mobile Burger */}
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-10 w-10" />
              </Button>
            </SheetTrigger>
            <SheetContent side="top" className="pt-6 bg-white/90 backdrop-blur-xl border-b border-gray-200">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <nav className="flex flex-col gap-4">
                {menuItems.map(({ label, href, icon: Icon }) => (
                  <Button
                    key={href}
                    variant="ghost"
                    className="justify-start text-2xl gap-3 text-lg"
                    onClick={() => handleNav(href)}
                  >
                    <Icon size={32} className="text-gray-600" />
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