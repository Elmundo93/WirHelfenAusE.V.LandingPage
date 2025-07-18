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

// Mobile Menu Components
interface MobileMenuHeaderProps {
  sheetFullyOpen: boolean;
}

const MobileMenuHeader = ({ sheetFullyOpen }: MobileMenuHeaderProps) => (
  <div className="flex items-center justify-center mb-8 mt-10">
    <motion.div 
      className="w-20 h-20 md:w-28 md:h-28 rounded-full bg-gradient-to-br from-amber-100 to-amber-200 dark:from-amber-900/30 dark:to-amber-800/30 flex items-center justify-center shadow-lg border border-amber-200/50 dark:border-amber-700/50"
      initial={{ opacity: 0, scale: 0.6, y: -20 }}
      animate={sheetFullyOpen ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.6, y: -20 }}
      transition={{ 
        duration: 0.6, 
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: sheetFullyOpen ? 0.1 : 0 
      }}
    >
      <motion.span 
        className="text-amber-600 dark:text-amber-400 text-3xl md:text-5xl transform scale-125"
        initial={{ scale: 0.8 }}
        animate={sheetFullyOpen ? { scale: 1 } : { scale: 0.8 }}
        transition={{ 
          duration: 0.4, 
          ease: "easeOut",
          delay: sheetFullyOpen ? 0.3 : 0 
        }}
      >
        🍯
      </motion.span>
    </motion.div>
    
    {/* Decorative elements for medium screens */}
    <motion.div
      className="hidden md:flex absolute inset-0 pointer-events-none"
      initial={{ opacity: 0 }}
      animate={sheetFullyOpen ? { opacity: 1 } : { opacity: 0 }}
      transition={{ delay: 0.5, duration: 0.6 }}
    >
      <div className="absolute top-4 left-4 w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
      <div className="absolute top-8 right-8 w-1.5 h-1.5 bg-amber-300 rounded-full animate-pulse delay-300" />
      <div className="absolute bottom-6 left-8 w-1 h-1 bg-amber-500 rounded-full animate-pulse delay-500" />
    </motion.div>
  </div>
);

interface MobileNavigationItemProps {
  label: string;
  icon: React.ComponentType<{ size?: number; className?: string; style?: React.CSSProperties }>;
  isActive: boolean;
  index: number;
  sheetFullyOpen: boolean;
  onClick: () => void;
}

const MobileNavigationItem = ({ 
  label, 
  icon: Icon, 
  isActive, 
  index, 
  sheetFullyOpen, 
  onClick 
}: MobileNavigationItemProps) => (
  <motion.div
    initial={{ opacity: 0, x: 30, scale: 0.95 }}
    animate={sheetFullyOpen ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: 30, scale: 0.95 }}
    transition={{ 
      delay: sheetFullyOpen ? index * 0.08 : 0, 
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94]
    }}
  >
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
    >
      <Button
        variant="ghost"
        className={`justify-start text-lg md:text-xl w-full h-14 md:h-16 rounded-xl md:rounded-2xl transition-all duration-300 group ${
          isActive 
            ? 'bg-gradient-to-r from-amber-400 to-amber-500 text-white shadow-lg md:shadow-xl' 
            : 'hover:bg-amber-50 dark:hover:bg-amber-900/20 text-foreground hover:shadow-md'
        }`}
        onClick={onClick}
      >
        <motion.div
          initial={{ scale: 0.8, rotate: -10 }}
          animate={sheetFullyOpen ? { scale: 1, rotate: 0 } : { scale: 0.8, rotate: -10 }}
          transition={{ 
            delay: sheetFullyOpen ? index * 0.08 + 0.1 : 0,
            duration: 0.4,
            ease: "easeOut"
          }}
        >
          <Icon 
            size={30} 
            className={`mr-4 md:mr-6 transition-all duration-300 ${
              isActive ? 'text-white' : 'text-amber-500 group-hover:scale-110'
            }`}
            style={{ width: '30px', height: '30px', minWidth: '30px', minHeight: '30px' }}
          />
        </motion.div>
        <motion.span 
          className="font-medium text-white md:text-black text-2xl md:text-3xl"
          initial={{ opacity: 0, x: 10 }}
          animate={sheetFullyOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: 10 }}
          transition={{ 
            delay: sheetFullyOpen ? index * 0.08 + 0.2 : 0,
            duration: 0.3,
            ease: "easeOut"
          }}
        >
          {label}
        </motion.span>
        {isActive && (
          <motion.div 
            className="ml-auto w-2 h-2 bg-white rounded-full animate-pulse"
            initial={{ scale: 0, opacity: 0 }}
            animate={sheetFullyOpen ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
            transition={{ 
              delay: sheetFullyOpen ? index * 0.08 + 0.3 : 0,
              duration: 0.3,
              ease: "easeOut"
            }}
          />
        )}
      </Button>
    </motion.div>
  </motion.div>
);

interface MobileLanguageSwitcherProps {
  sheetFullyOpen: boolean;
  currentLocale: string;
  locales: readonly string[];
  localeFlags: Record<string, string>;
  localeNames: Record<string, string>;
  onLocaleChange: (locale: string) => void;
}

const MobileLanguageSwitcher = ({ 
  sheetFullyOpen, 
  currentLocale, 
  locales, 
  localeFlags, 
  localeNames, 
  onLocaleChange 
}: MobileLanguageSwitcherProps) => (
  <motion.div 
    className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-amber-200/30"
    initial={{ opacity: 0, scale: 0.95 }}
    animate={sheetFullyOpen ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
    transition={{ 
      delay: sheetFullyOpen ? 0.5 : 0, 
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94]
    }}
  >
    <motion.h3 
      className="text-sm md:text-base font-medium text-muted-foreground mb-4 md:mb-6"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={sheetFullyOpen ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
      transition={{ 
        delay: sheetFullyOpen ? 0.6 : 0, 
        duration: 0.3,
        ease: "easeOut"
      }}
    >
      Sprache / Language
    </motion.h3>
    <div className="flex gap-3 md:gap-4">
      {locales.map((loc, index) => (
        <motion.button
          key={loc}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={sheetFullyOpen ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ 
            delay: sheetFullyOpen ? 0.7 + index * 0.08 : 0, 
            duration: 0.5,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onLocaleChange(loc)}
          className={`flex-1 h-12 md:h-14 rounded-xl md:rounded-2xl flex items-center justify-center text-sm md:text-base font-medium transition-all duration-300 ${
            currentLocale === loc
              ? 'bg-gradient-to-r from-amber-400 to-amber-500 text-white shadow-lg md:shadow-xl'
              : 'bg-gray-100 text-gray-600 hover:bg-amber-100 hover:shadow-md'
          }`}
          aria-label={`Switch to ${localeNames[loc]}`}
        >
          <span className="mr-2 text-lg md:text-xl">{localeFlags[loc]}</span>
          <span className="text-xs md:text-sm">{localeNames[loc]}</span>
        </motion.button>
      ))}
    </div>
  </motion.div>
);

export default function Header() {
  const t = useTranslations('Header');
  const router = useRouter()
  const pathname = usePathname()
  const [sheetOpen, setSheetOpen] = useState(false)
  const [sheetFullyOpen, setSheetFullyOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [mounted, setMounted] = useState(false)
  const lastScrollY = useRef(0)
  const locale = useLocale();

  // Force re-render when locale changes
  const [currentLocale, setCurrentLocale] = useState(locale);
  
  useEffect(() => {
    setCurrentLocale(locale);
  }, [locale]);

  // Handle sheet open/close with proper timing
  useEffect(() => {
    if (sheetOpen) {
      // Reset content visibility when opening
      setSheetFullyOpen(false)
      // Wait for sheet animation to complete (500ms based on sheet animation duration)
      const timer = setTimeout(() => {
        setSheetFullyOpen(true)
      }, 400) // Reduced from 500ms for smoother feel
      return () => clearTimeout(timer)
    } else {
      // Immediately hide content when closing
      setSheetFullyOpen(false)
    }
  }, [sheetOpen])


  const menuItems = [
    { label: t('menuItems.about'), href: "/about", icon: IoHelpCircleOutline },
    { label: t('menuItems.anmeldung'), href: "/anmeldung", icon: IoPersonAddOutline },
    { label: t('menuItems.satzung'), href: "/satzung", icon: IoDocumentTextOutline },
    { label: t('menuItems.communication'), href: "/communication", icon: IoBookOutline },
    { label: t('menuItems.contact'), href: "/contact-us", icon: IoChatbubbleOutline },
  ];

  // Debug menu items


  useEffect(() => {
    setMounted(true)
  }, [])

  // Track locale changes

  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      // Don't handle scroll animations when mobile menu is open
      if (sheetOpen) return
      
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
  }, [sheetOpen]) // Add sheetOpen as dependency

  // Ensure header is visible when mobile menu opens
  useEffect(() => {
    if (sheetOpen) {
      setIsVisible(true)
    }
  }, [sheetOpen])

  const handleNav = (href: string) => {
    setSheetOpen(false)
    router.push(`/${currentLocale}${href}`)
  }

  const handleLocaleChange = (newLocale: string) => {
 
    
    // Get the current path without any locale prefix
    // Use regex to remove any locale prefix at the beginning of the path
    const pathWithoutLocale = pathname.replace(/^\/(de|en|fr)/, '') || '/';
  
    
    const newPath = `/${newLocale}${pathWithoutLocale}`;
  
    
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
      <div className="mx-auto max-w-7xl flex items-center justify-between px-4 md:px-6 py-3 md:py-4 bg-background/30 backdrop-blur-xl border border-border/30 shadow-md rounded-full">
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
              maxWidth: '190px',
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
                      : 'text-foreground hover:bg-amber-100 dark:hover:bg-amber-900/20'
                  }`}
                  onClick={() => handleNav(href)}
                >
                  <Icon 
                    size={20} 
                    className={isActive ? 'text-amber-400' : 'text-muted-foreground'} 
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
          <div className="absolute right-5 bottom-[-50px] flex items-center gap-2 ml-4">
            {locales.map((loc) => (
              <button
                key={loc}
                onClick={() => handleLocaleChange(loc)}
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-200 hover:scale-110 ${
                  currentLocale === loc
                    ? 'bg-amber-400 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-amber-100 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-amber-900/20'
                }`}
                aria-label={`Switch to ${localeNames[loc]}`}
              >
                {localeFlags[loc]}
              </button>
            ))}
          </div>
        )}

        {/* Mobile Menu Button */}
        <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
          <SheetTrigger asChild>
            <Button 
              variant="ghost" 
              size="icon" 
              className="xl:hidden relative group hover:bg-amber-100/50 dark:hover:bg-amber-900/20 transition-all duration-300"
            >
              <div className="relative w-6 h-6">
                <span 
                  className={`absolute left-0 top-1 w-6 h-0.5 bg-foreground transition-all duration-300 ${
                    sheetOpen ? 'rotate-45 translate-y-2' : ''
                  }`}
                />
                <span 
                  className={`absolute left-0 top-3 w-6 h-0.5 bg-foreground transition-all duration-300 ${
                    sheetOpen ? 'opacity-0' : ''
                  }`}
                />
                <span 
                  className={`absolute left-0 top-5 w-6 h-0.5 bg-foreground transition-all duration-300 ${
                    sheetOpen ? '-rotate-45 -translate-y-2' : ''
                  }`}
                />
              </div>
            </Button>
          </SheetTrigger>
          <SheetContent 
            side="right" 
            className="w-full sm:w-[400px] md:w-[500px] lg:w-[600px] bg-background/80 backdrop-blur-xl border-l border-border/30"
            showCloseButton={true}
            isAnimating={sheetFullyOpen}
          >
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            <div className="flex flex-col h-full">
              {/* Header */}
              <MobileMenuHeader sheetFullyOpen={sheetFullyOpen} />
              
              {/* Navigation Items */}
              <div className="flex flex-col gap-2 flex-1">
                {menuItems.map(({ label, href, icon: Icon }, index) => {
                  const isActive = mounted && pathname === `/${currentLocale}${href}`
                  return (
                    <MobileNavigationItem
                      key={href}
                      label={label}
                      icon={Icon}
                      isActive={isActive}
                      index={index}
                      sheetFullyOpen={sheetFullyOpen}
                      onClick={() => handleNav(href)}
                    />
                  )
                })}
              </div>
              
              {/* Mobile Language Switcher */}
              <MobileLanguageSwitcher
                sheetFullyOpen={sheetFullyOpen}
                currentLocale={currentLocale}
                locales={locales}
                localeFlags={localeFlags}
                localeNames={localeNames}
                onLocaleChange={handleLocaleChange}
              />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}