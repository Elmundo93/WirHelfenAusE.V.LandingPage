'use client'

import { useTranslations, useLocale } from 'next-intl';
import Link from "next/link"
import { motion } from 'framer-motion'

import CustomImage from "@/components/ui/image"
import { useRouter, usePathname } from "next/navigation"
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
import BienenLogo from "@/public/images/BienenLogoNeat.png"
import sign from "@/public/images/sign.png"
import { locales, localeFlags, localeNames } from '@/lib/i18n';

export default function Header() {
  const t = useTranslations('Header');
  const router = useRouter()
  const pathname = usePathname()
  const [sheetOpen, setSheetOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [mounted, setMounted] = useState(false)
  const lastScrollY = useRef(0)
  const locale = useLocale();

  // Force re-render when locale changes
  const [currentLocale, setCurrentLocale] = useState(locale);
  
  useEffect(() => {
    setCurrentLocale(locale);
  }, [locale]);

  // Debug logging
  console.log('=== HEADER RENDER DEBUG ===');
  console.log('Header component - useLocale() result:', locale);
  console.log('Header component - currentLocale state:', currentLocale);
  console.log('Header component - Current pathname:', pathname);
  console.log('Header component - Mounted state:', mounted);
  console.log('Header component - Translation function available:', !!t);
  console.log('Header component - About translation:', t('menuItems.about'));
  console.log('Header component - All menu translations:', {
    about: t('menuItems.about'),
    anmeldung: t('menuItems.anmeldung'),
    satzung: t('menuItems.satzung'),
    communication: t('menuItems.communication'),
    contact: t('menuItems.contact')
  });
  console.log('=== END HEADER RENDER DEBUG ===');

  const menuItems = [
    { label: t('menuItems.about'), href: "/about", icon: IoHelpCircleOutline },
    { label: t('menuItems.anmeldung'), href: "/anmeldung", icon: IoPersonAddOutline },
    { label: t('menuItems.satzung'), href: "/satzung", icon: IoDocumentTextOutline },
    { label: t('menuItems.communication'), href: "/communication", icon: IoBookOutline },
    { label: t('menuItems.contact'), href: "/contact-us", icon: IoChatbubbleOutline },
  ];

  // Debug menu items
  console.log('=== MENU ITEMS DEBUG ===');
  console.log('Current locale for translations:', locale);
  console.log('Menu items:', menuItems.map(item => ({ href: item.href, label: item.label })));
  console.log('=== END MENU ITEMS DEBUG ===');

  useEffect(() => {
    setMounted(true)
  }, [])

  // Track locale changes
  useEffect(() => {
    console.log('=== LOCALE CHANGE EFFECT ===');
    console.log('useLocale() changed to:', locale);
    console.log('currentLocale state is:', currentLocale);
    console.log('Pathname is now:', pathname);
    console.log('=== END LOCALE CHANGE EFFECT ===');
  }, [locale, currentLocale, pathname])

  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const currentScrollY = window.scrollY
          const goingDown = currentScrollY > lastScrollY.current
          setIsVisible(!goingDown || currentScrollY < 10)
          lastScrollY.current = currentScrollY
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNav = (href: string) => {
    setSheetOpen(false)
    router.push(`/${currentLocale}${href}`)
  }

  const handleLocaleChange = (newLocale: string) => {
    console.log('=== LOCALE CHANGE DEBUG ===');
    console.log('handleLocaleChange called with:', newLocale);
    console.log('Current locale:', currentLocale);
    console.log('Current pathname:', pathname);
    
    // Get the current path without any locale prefix
    // Use regex to remove any locale prefix at the beginning of the path
    const pathWithoutLocale = pathname.replace(/^\/(de|en|fr)/, '') || '/';
    console.log('Path without locale:', pathWithoutLocale);
    
    const newPath = `/${newLocale}${pathWithoutLocale}`;
    console.log('New path:', newPath);
    console.log('=== END LOCALE CHANGE DEBUG ===');
    
    // Navigate to the new locale with the same path
    router.push(newPath);
  };



  return (
   <header
  key={locale} // Force re-render when locale changes
  className={`fixed top-4 z-50 w-full px-4 md:px-6 transition-transform duration-300 ${
    isVisible ? 'translate-y-0' : '-translate-y-24'
  }`}
>
      <div className="mx-auto max-w-7xl flex items-center justify-between px-4 md:px-6 py-3 md:py-4 bg-white/30 backdrop-blur-xl border border-white/30 shadow-md rounded-full">
        {/* Logo & Name */}
        <Link href={`/${currentLocale}/`} className="flex items-center gap-2 md:gap-3 group">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative"
          >
            <CustomImage 
              src={BienenLogo} 
              alt="Logo" 
              width={50} 
              height={50} 
              className="lg:ml-12" 
              priority 
              isSvg={true}
              style={{ 
                width: '36px', 
                height: '36px',
                maxWidth: '36px',
                maxHeight: '36px'
              }}
            />
          </motion.div>
          <CustomImage 
            src={sign} 
            alt="Logo" 
            className="opacity-0 xl:opacity-100 transform transition-all duration-200 ease-in-out max-w-36 absolute lg:left-5 lg:top-20" 
            priority 
            isSvg={false}
            style={{ 
              maxWidth: '144px',
              maxHeight: 'auto'
            }}
          />
          <h1 className="xl:hidden text-lg md:text-2xl font-bold text-amber-400 group-hover:text-amber-500 transition-colors duration-300">Wir helfen aus e.V.</h1>
        </Link>
        {/* Desktop Navigation */}
        {mounted && (
          <nav className="hidden xl:flex items-center gap-4 relative" 
            aria-label="Hauptnavigation"
          >
            {menuItems.map(({ label, href, icon: Icon }) => {
              const isActive = pathname === `/${currentLocale}${href}`
              return (
                <Button
                  key={href}
                  variant="ghost"
                  className={`text-lg flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-200 hover:scale-105 relative z-10 ${
                    isActive 
                      ? 'text-amber-600' 
                      : 'text-gray-700 hover:bg-amber-100'
                  }`}
                  onClick={() => handleNav(href)}
                >
                  <Icon 
                    size={20} 
                    className={isActive ? 'text-amber-400' : 'text-gray-500'} 
                    style={{ width: '20px', height: '20px', minWidth: '30px', minHeight: '30px' }} 
                  />
                  {label}
                  {isActive && (
                    <div className="absolute bottom-[-2] left-1/2 transform -translate-x-1/2 w-7 h-0.5 bg-amber-400 rounded-full w-32 "></div>
                  )}
                </Button>
              )
            })}
          </nav>
        )}

        {/* Language Switcher positioned absolutely on the right */}
        {mounted && (
          <div className="absolute right-5 bottom-[-50px]  flex items-center gap-2 ml-4">
            {(() => {
              console.log('=== LANGUAGE SWITCHER DEBUG ===');
              console.log('Available locales:', locales);
              console.log('Current locale:', currentLocale);
              console.log('Locale names:', localeNames);
              console.log('=== END LANGUAGE SWITCHER DEBUG ===');
              
              return locales.map((loc) => (
                <button
                  key={loc}
                  onClick={() => handleLocaleChange(loc)}
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-200 hover:scale-110 ${
                    currentLocale === loc
                      ? 'bg-amber-400 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-600 hover:bg-amber-100'
                  }`}
                  aria-label={`Switch to ${localeNames[loc]}`}
                >
                  {localeFlags[loc]}
                </button>
              ));
            })()}
          </div>
        )}

        {/* Mobile Menu Button */}
        <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
          <SheetTrigger asChild>
            <Button 
              variant="ghost" 
              size="icon" 
              className="xl:hidden relative group hover:bg-amber-100/50 transition-all duration-300"
            >
              <div className="relative w-6 h-6">
                <span 
                  className={`absolute left-0 top-1 w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
                    sheetOpen ? 'rotate-45 translate-y-2' : ''
                  }`}
                />
                <span 
                  className={`absolute left-0 top-3 w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
                    sheetOpen ? 'opacity-0' : ''
                  }`}
                />
                <span 
                  className={`absolute left-0 top-5 w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
                    sheetOpen ? '-rotate-45 -translate-y-2' : ''
                  }`}
                />
              </div>
            </Button>
          </SheetTrigger>
          <SheetContent 
            side="top" 
            className="w-full sm:w-[400px] bg-transparent backdrop-blur-xl border-l border-amber-200/30"
          >
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-center mb-8 mt-10">
                <div className="w-24 h-24 rounded-full bg-amber-100 flex items-center justify-center">
                  <span className="text-amber-600 text-4xl transform scale-125">🍯</span>
                </div>
              </div>
              
              {/* Navigation Items */}
              <div className="flex flex-col gap-2 flex-1">
                {menuItems.map(({ label, href, icon: Icon }, index) => {
                  const isActive = mounted && pathname === `/${currentLocale}${href}`
                  return (
                    <motion.div
                      key={href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                    >
                      <Button
                        variant="ghost"
                        className={`justify-start text-lg w-full h-14 rounded-xl transition-all duration-300 group ${
                          isActive 
                            ? 'bg-gradient-to-r from-amber-400 to-amber-500 text-white shadow-lg' 
                            : 'hover:bg-amber-50 text-gray-700'
                        }`}
                        onClick={() => handleNav(href)}
                      >
                        <Icon 
                          size={30} 
                          className={`mr-4 transition-all duration-300 ${
                            isActive ? 'text-white' : 'text-amber-500 group-hover:scale-110'
                          }`}
                          style={{ width: '30px', height: '30px', minWidth: '30px', minHeight: '30px' }}
                        />
                        <span className="font-medium text-white text-2xl">{label}</span>
                        {isActive && (
                          <div className="ml-auto w-2 h-2 bg-white rounded-full animate-pulse" />
                        )}
                      </Button>
                    </motion.div>
                  )
                })}
              </div>
              
              {/* Mobile Language Switcher */}
              <div className="mt-8 pt-6 border-t border-amber-200/30">
                <h3 className="text-sm font-medium text-gray-600 mb-4">Sprache / Language</h3>
                <div className="flex gap-3">
                  {(() => {
                    console.log('=== MOBILE LANGUAGE SWITCHER DEBUG ===');
                    console.log('Mobile switcher - Current locale:', currentLocale);
                    console.log('=== END MOBILE LANGUAGE SWITCHER DEBUG ===');
                    
                    return locales.map((loc) => (
                      <motion.button
                        key={loc}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleLocaleChange(loc)}
                        className={`flex-1 h-12 rounded-xl flex items-center justify-center text-sm font-medium transition-all duration-300 ${
                          currentLocale === loc
                            ? 'bg-gradient-to-r from-amber-400 to-amber-500 text-white shadow-lg'
                            : 'bg-gray-100 text-gray-600 hover:bg-amber-100'
                        }`}
                        aria-label={`Switch to ${localeNames[loc]}`}
                      >
                        <span className="mr-2 text-lg">{localeFlags[loc]}</span>
                        <span className="text-xs">{localeNames[loc]}</span>
                      </motion.button>
                    ));
                  })()}
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}