# I18n Implementation - Next.js 15 mit next-intl v4

## 📋 **Übersicht**

Diese Dokumentation beschreibt die vollständige Implementation von next-intl v4 für eine mehrsprachige Next.js 15 Website mit App Router. Die Implementation unterstützt Deutsch (Standard) und Englisch.

## 🏗️ **Projektstruktur**

```
app/
├── i18n/
│   └── messages/
│       ├── de.json          # Deutsche Übersetzungen (34KB, 10 Namespaces)
│       └── en.json          # Englische Übersetzungen (33KB, 10 Namespaces)
├── [locale]/
│   ├── layout.tsx           # Locale-spezifisches Layout mit i18n Provider
│   ├── page.tsx             # Hauptseite (Index)
│   ├── about/
│   │   └── page.tsx         # Über uns Seite
│   ├── anmeldung/
│   │   └── page.tsx         # Anmeldung Seite
│   ├── communication/
│   │   └── page.tsx         # Kommunikation Seite
│   ├── contact-us/
│   │   └── page.tsx         # Kontakt Seite
│   └── satzung/
│       └── page.tsx         # Satzung Seite
└── layout.tsx               # Root Layout

i18n/
└── request.ts               # i18n Konfiguration mit erweitertem Logging

lib/
├── i18n.ts                  # Locale-Konfiguration (de, en)
└── i18n-utils.ts           # Utility-Funktionen für i18n

middleware.ts                # Next-intl Middleware für Locale-Routing

components/
├── layout/
│   ├── Header.tsx           # Header mit Sprachauswahl
│   └── Footer.tsx           # Footer
├── Screens/
│   ├── Main/
│   │   ├── HeroMain.tsx     # Hauptseite Hero
│   │   ├── FeaturesMain.tsx # Hauptseite Features
│   │   └── ZigZagMain.tsx   # Hauptseite ZigZag
│   ├── About/
│   │   ├── HeroAbout.tsx    # About Hero
│   │   ├── PreviewAbout.tsx # About Preview
│   │   └── ZigZagAbout.tsx  # About ZigZag
│   ├── Anmelden/
│   │   ├── HeroAnmelden.tsx # Anmeldung Hero
│   │   ├── PreviewAnmelden.tsx # Anmeldung Preview
│   │   └── ZigZagAnmelden.tsx # Anmeldung ZigZag
│   ├── Communication/
│   │   └── CRules.tsx       # Kommunikationsregeln
│   ├── ContactUs/
│   │   └── ContactUs.tsx    # Kontaktformular
│   └── Satzung/
│       └── Satzung.tsx      # Satzung Komponente
└── ui/
    └── TranslatedText.tsx   # UI Komponente für Übersetzungen
```

## 🔧 **Konfigurationsdateien**

### **1. lib/i18n.ts - Locale-Konfiguration**
```typescript
export const locales = ['de', 'en'] as const;
export const defaultLocale = 'de';

export type Locale = typeof locales[number];

export const localeNames: Record<Locale, string> = {
  de: 'Deutsch',
  en: 'English',
};

export const localeFlags: Record<Locale, string> = {
  de: '🇩🇪',
  en: '🇬🇧',
};
```

### **2. middleware.ts - Locale-Routing**
```typescript
import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from '@/lib/i18n';

export default createMiddleware({
  locales: locales,
  defaultLocale: defaultLocale,
  localePrefix: 'always'
});

export const config = {
  matcher: ['/', '/(de|en)/:path*']
};
```

### **3. next.config.ts - Next-intl Plugin**
```typescript
import createNextIntlPlugin from 'next-intl/plugin';
import type { NextConfig } from "next";

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

const nextConfig: NextConfig = {
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  experimental: {
    optimizePackageImports: ['framer-motion', 'lucide-react'],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  poweredByHeader: false,
  compress: true,
  generateEtags: false,
};

export default withNextIntl(nextConfig);
```

### **4. i18n/request.ts - Übersetzungsloader**
```typescript
import { getRequestConfig } from 'next-intl/server';
import { defaultLocale } from '@/lib/i18n';
import { getFallbackLocale } from '@/lib/i18n-utils';
import fs from 'fs';
import path from 'path';

export default getRequestConfig(async ({ locale }) => {
  console.log('=== I18N REQUEST CONFIG START ===');
  console.log('🔍 i18n request config - Received locale:', locale);
  console.log('🔍 i18n request config - Default locale:', defaultLocale);
  console.log('🔍 i18n request config - Process cwd:', process.cwd());
  console.log('🔍 i18n request config - Node env:', process.env.NODE_ENV);
  
  const validLocale = getFallbackLocale(locale || defaultLocale);
  console.log('🔍 i18n loader - Loading for locale:', validLocale);

  try {
    const filePath = path.join(process.cwd(), 'app', 'i18n', 'messages', `${validLocale}.json`);
    console.log(`📁 Loading translations: ${filePath}`);
    console.log(`📁 File exists check: ${fs.existsSync(filePath)}`);
    
    if (!fs.existsSync(filePath)) {
      console.error(`❌ Translation file does not exist: ${filePath}`);
      
      // Check directory and available files
      const messagesDir = path.join(process.cwd(), 'app', 'i18n', 'messages');
      console.log(`📁 Messages directory exists: ${fs.existsSync(messagesDir)}`);
      if (fs.existsSync(messagesDir)) {
        const files = fs.readdirSync(messagesDir);
        console.log(`📁 Available files in messages directory:`, files);
      }
      
      // Fallback logic
      const fallbackPath = path.join(process.cwd(), 'app', 'i18n', 'messages', `${defaultLocale}.json`);
      console.log(`🔄 Trying fallback path: ${fallbackPath}`);
      console.log(`🔄 Fallback file exists: ${fs.existsSync(fallbackPath)}`);
      
      if (fs.existsSync(fallbackPath)) {
        console.log(`🔄 Falling back to default locale: ${defaultLocale}`);
        const fallbackContent = fs.readFileSync(fallbackPath, 'utf8');
        const messages = JSON.parse(fallbackContent);
        console.log(`✅ Loaded fallback translations:`, Object.keys(messages));
        console.log(`✅ Fallback file size: ${fallbackContent.length} characters`);
        
        return {
          locale: defaultLocale,
          messages,
          timeZone: 'Europe/Berlin',
          now: new Date()
        };
      } else {
        throw new Error(`No translation files found for locale: ${validLocale} or fallback: ${defaultLocale}`);
      }
    }
    
    const fileContent = fs.readFileSync(filePath, 'utf8');
    console.log(`📁 File content length: ${fileContent.length} characters`);
    
    const messages = JSON.parse(fileContent);
    console.log(`✅ Loaded translations for ${validLocale}:`, Object.keys(messages));
    console.log(`✅ Total translation keys: ${Object.keys(messages).length}`);
    
    // Log sample translations for verification
    const sampleKeys = Object.keys(messages).slice(0, 3);
    sampleKeys.forEach(key => {
      console.log(`✅ Sample translation [${key}]:`, typeof messages[key]);
    });

    console.log('=== I18N REQUEST CONFIG SUCCESS ===');

    return {
      locale: validLocale,
      messages,
      timeZone: 'Europe/Berlin',
      now: new Date()
    };
  } catch (error) {
    console.error('=== I18N REQUEST CONFIG ERROR ===');
    console.error(`❌ Failed to load translations for locale: ${validLocale}`, error);
    console.error(`❌ Error stack:`, error instanceof Error ? error.stack : 'No stack trace');
    
    console.log(`⚠️ Returning empty messages for locale: ${validLocale}`);
    
    return {
      locale: validLocale,
      messages: {},
      timeZone: 'Europe/Berlin',
      now: new Date()
    };
  }
});
```

## 🏗️ **Layout-Komponenten**

### **app/[locale]/layout.tsx - Locale-spezifisches Layout**
```typescript
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales, type Locale } from '@/lib/i18n';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BackgroundImage from "@/components/layout/BackgroundImage";
import LoadingScreenWrapper from "@/components/layout/LoadingScreenWrapper";

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  
  console.log('=== LAYOUT DEBUG START ===');
  console.log('Layout - Received locale:', locale);
  console.log('Layout - Valid locales:', locales);
  console.log('Layout - Is locale valid:', locales.includes(locale as Locale));
  console.log('Layout - Node env:', process.env.NODE_ENV);
  console.log('=== LAYOUT DEBUG END ===');
  
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as Locale)) {
    console.error(`❌ Invalid locale detected: ${locale}`);
    notFound();
  }

  // Providing all messages to the client
  console.log('=== GETTING MESSAGES ===');
  const messages = await getMessages({ locale });
  console.log('=== MESSAGES RECEIVED ===');
  
  // Enhanced debugging for messages
  console.log('=== MESSAGES VALIDATION ===');
  console.log('Layout - Messages loaded for locale:', locale);
  console.log('Layout - Messages object type:', typeof messages);
  console.log('Layout - Messages is null/undefined:', messages == null);
  console.log('Layout - Messages keys count:', messages ? Object.keys(messages).length : 'N/A');
  console.log('Layout - Available message keys:', messages ? Object.keys(messages) : 'N/A');
  
  // Check for specific namespaces
  if (messages) {
    const expectedNamespaces = ['Main', 'About', 'Header', 'Index', 'Satzung', 'Anmeldung', 'Communication', 'ContactUs'];
    expectedNamespaces.forEach(namespace => {
      const hasNamespace = messages.hasOwnProperty(namespace);
      console.log(`Layout - ${namespace} namespace available:`, hasNamespace);
      if (hasNamespace && messages[namespace]) {
        const namespaceKeys = Object.keys(messages[namespace]);
        console.log(`Layout - ${namespace} has ${namespaceKeys.length} keys:`, namespaceKeys.slice(0, 3));
      }
    });
    
    // Sample translation check
    if (messages.Main?.hero?.mainTitle) {
      console.log('Layout - Sample Main.hero.mainTitle:', messages.Main.hero.mainTitle);
    } else {
      console.log('Layout - Main.hero.mainTitle NOT FOUND');
    }
  }
  
  console.log('=== MESSAGES VALIDATION END ===');

  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      <LoadingScreenWrapper>
        <BackgroundImage />
        <Header key={`header-${locale}`} />
        <main key={`main-${locale}`} className="z-10 relative">{children}</main>
        <Footer key={`footer-${locale}`} />
      </LoadingScreenWrapper>
    </NextIntlClientProvider>
  );
}
```

## 🎨 **Client-Komponenten**

### **components/layout/Header.tsx - Header mit Sprachauswahl**
```typescript
'use client'

import { useTranslations, useLocale } from 'next-intl';
import Link from "next/link"
import { motion } from 'framer-motion'
import CustomImage from "@/components/ui/image"
import { useRouter, usePathname } from "next/navigation"
import { useEffect, useRef, useState } from "react"
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

  // Locale change handler
  const handleLocaleChange = (newLocale: string) => {
    console.log('=== LOCALE CHANGE DEBUG ===');
    console.log('handleLocaleChange called with:', newLocale);
    console.log('Current locale:', currentLocale);
    console.log('Current pathname:', pathname);
    
    // Get the current path without any locale prefix
    const pathWithoutLocale = pathname.replace(/^\/(de|en)/, '') || '/';
    console.log('Path without locale:', pathWithoutLocale);
    
    const newPath = `/${newLocale}${pathWithoutLocale}`;
    console.log('New path:', newPath);
    console.log('=== END LOCALE CHANGE DEBUG ===');
    
    // Navigate to the new locale with the same path
    router.push(newPath);
  };

  // ... Rest der Komponente mit Navigation und Sprachauswahl
}
```

### **components/Screens/Main/HeroMain.tsx - Hauptseite Hero**
```typescript
'use client';
import { useTranslations, useLocale } from 'next-intl';
import { useState, useEffect } from 'react';
import HeroLayout from "@/components/layout/Hero";

export default function HeroMain() {
  const t = useTranslations('Main.hero');
  const locale = useLocale();
  
  // Debug logging
  console.log('=== HERO MAIN DEBUG ===');
  console.log('HeroMain - Current locale:', locale);
  console.log('HeroMain - mainTitle:', t('mainTitle'));
  console.log('HeroMain - highlightedWord:', t('highlightedWord'));
  console.log('HeroMain - subtitle:', t('subtitle'));
  console.log('HeroMain - buttonText:', t('buttonText'));
  console.log('=== END HERO MAIN DEBUG ===');
  
  // Force re-render when locale changes
  const [, setCurrentLocale] = useState(locale);
  
  useEffect(() => {
    setCurrentLocale(locale);
  }, [locale]);
  
  return (
    <HeroLayout
      mainTitle={t('mainTitle')}
      highlightedWord={t('highlightedWord')}
      subtitle={t('subtitle')}
      buttonText={t('buttonText')}
      buttonAction={{
        type: t('buttonActionType') as 'navigate' | 'scroll',
        target: t('buttonActionTarget')
      }}
      MehrErfahrenButtonLabel={t('mehrErfahren')}
      MehrErfahrenTarget="#ÜberUns"
      main
      finalWords={t('finalWords')}
      scribbleBottomOffset={t('scribbleBottomOffset')}
      MehrErfahrenTargetOffset={Number(t('mehrErfahrenTargetOffset'))}
    />
  )
}
```

### **components/Screens/Main/FeaturesMain.tsx - Hauptseite Features**
```typescript
'use client'

import { useTranslations, useLocale } from 'next-intl';
import { useState, useEffect } from 'react';
import FeatureLayout from '@/components/layout/Features'

export default function FeatureMain() {
  const t = useTranslations('Main.features');
  const locale = useLocale();
  const featureKeys = ['org', 'safe', 'region', 'respect', 'register', 'match'] as const;
  const icons = [People, SichererRahmen, InderNähe, Handshake, Register, RightOne];

  // Debug logging
  console.log('=== FEATURES MAIN DEBUG ===');
  console.log('FeaturesMain - Current locale:', locale);
  console.log('FeaturesMain - sectionTitle:', t('sectionTitle'));
  console.log('FeaturesMain - org.title:', t('org.title'));
  console.log('FeaturesMain - safe.title:', t('safe.title'));
  console.log('=== END FEATURES MAIN DEBUG ===');
  
  // Force re-render when locale changes
  const [, setCurrentLocale] = useState(locale);
  
  useEffect(() => {
    setCurrentLocale(locale);
  }, [locale]);

  const featureCards = featureKeys.map((key, idx) => ({
    icon: icons[idx],
    title: t(`${key}.title`),
    description: t(`${key}.description`),
    alt: t(`${key}.alt`)
  }));

  return <FeatureLayout featureCards={featureCards} />
}
```

## 📄 **Server-Komponenten (Pages)**

### **app/[locale]/page.tsx - Hauptseite**
```typescript
import { getTranslations } from 'next-intl/server';
import HeroMain from "@/components/Screens/Main/HeroMain"
import Features from "@/components/Screens/Main/FeaturesMain"
import ZigZagMain from "@/components/Screens/Main/ZigZagMain"
import CoolKids from '@/public/images/CoolKids.png'
import animationData from '@/public/animation/RightArrow.json'

export async function generateMetadata() {
  const t = await getTranslations('Index');
  
  return {
    title: t('meta.title'),
    description: t('meta.description'),
    openGraph: {
      title: t('meta.title'),
      description: t('meta.description'),
      images: [
        {
          url: CoolKids.src,
          width: 1200,
          height: 630,
          alt: "Illustration: Junge Menschen helfen Senioren",
        },
      ],
      animationData: animationData,
    },
    twitter: {
      card: "summary_large_image",
      title: t('meta.title'),
      description: t('meta.description'),
      images: [CoolKids.src],
    },
  };
}

export default function HomePage() {
  return (
    <>
      <HeroMain />
      <Features />
      <ZigZagMain />
    </>
  )
}
```

### **app/[locale]/about/page.tsx - Über uns Seite**
```typescript
import { getTranslations } from 'next-intl/server';
import HeroAbout from "@/components/Screens/About/HeroAbout"
import PreviewAbout from "@/components/Screens/About/PreviewAbout"
import ZigZagAbout from "@/components/Screens/About/ZigZagAbout"

export async function generateMetadata() {
  const t = await getTranslations('About');
  
  return {
    title: t('meta.title'),
    description: t('meta.description'),
    openGraph: {
      title: t('openGraph.title') + ' – ' + t('meta.title'),
      description: t('openGraph.description'),
    },
    twitter: {
      card: "summary_large_image",
      title: t('twitter.title'),
      description: t('twitter.description'),
    },
  };
}

export default function AboutPage() {
  return (
    <>
      <HeroAbout />
      <PreviewAbout />
      <ZigZagAbout />
    </>
  )
}
```

## 📝 **Übersetzungsdateien-Struktur**

### **de.json (Beispiel-Ausschnitt)**
```json
{
  "Index": {
    "meta": {
      "title": "Wir helfen aus e.V. - Helfende Hände finden und werden",
      "description": "Finden Sie schnell und einfach helfende Hände in Ihrer Region oder werden Sie selbst zu einer. Unsere App verbindet Menschen und fördert die Helferkultur."
    }
  },
  "Main": {
    "hero": {
      "mainTitle": "Wir helfen Ihnen, eine",
      "highlightedWord": "helfende Hand",
      "subtitle": "- oder eine zu werden!",
      "buttonText": "Schnell und einfach mit der AushilfApp! 📲",
      "mehrErfahren": "Mehr Erfahren!",
      "finalWords": "zu finden!",
      "buttonActionType": "navigate",
      "buttonActionTarget": "/about",
      "scribbleBottomOffset": "0.7em",
      "mehrErfahrenTargetOffset": "100"
    },
    "zigzag": {
      "0": {
        "id": "eigentuemer",
        "title": "Hilfe für Eigentümer",
        "text": "Im Alltag fallen regelmäßig Arbeiten an...",
        "imageSrc": "/images/PeopleGardening2.png",
        "imageAlt": "Hilfe für Eigentümer",
        "buttonLabel": "Weiter geht's!",
        "buttonActionOffset": "100",
        "reverse": "false",
        "buttonAction": {
          "type": "scroll",
          "target": "#senioren"
        }
      }
    },
    "features": {
      "sectionTitle": "Unser Ziel",
      "sectionDescription": "Wir vom 'Wir helfen aus e.V.' glauben daran...",
      "org": {
        "title": "Nützliche Organisationsmöglichkeiten",
        "description": "Alle helfenden Hände in deiner Umgebung in einer App!",
        "alt": "Organisationsmöglichkeiten"
      },
      "safe": {
        "title": "Einen sicheren Rahmen schaffen",
        "description": "Durch die Verifizierung möchten wir ein möglichst sicheres Umfeld schaffen!",
        "alt": "Sicherer Rahmen"
      }
    }
  },
  "Header": {
    "menuItems": {
      "about": "Über die App",
      "registration": "Anmeldung",
      "statutes": "Satzung",
      "communication": "Kommunikation",
      "contact": "Kontakt"
    }
  },
  "About": {
    "meta": {
      "title": "Wir helfen aus e.V. – Hilfe, die ankommt",
      "description": "Die AushilfApp vermittelt Hilfe zwischen Menschen. Kostenlos, einfach & direkt in deiner Nachbarschaft."
    },
    "hero": {
      "mainTitle": "Die",
      "highlightedWord": "AushilfApp",
      "subtitle": "Schnell und einfach eine helfenden Hand in deiner Nähe finden!",
      "buttonText": "App herunterladen ⬇️",
      "buttonActionType": "navigate",
      "buttonActionTarget": "/about",
      "mehrErfahrenButtonLabel": "Mehr Erfahren!",
      "mehrErfahrenTarget": "#preview",
      "scribbleBottomOffset": "0.7em",
      "subtitleMarginTop": "mt-8 sm:mt-10"
    }
  }
}
```

## 🛠️ **Utility-Funktionen**

### **lib/i18n-utils.ts**
```typescript
import { locales, defaultLocale, type Locale } from './i18n';

/**
 * Validates if a locale is supported
 */
export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}

/**
 * Gets a fallback locale if the provided one is invalid
 */
export function getFallbackLocale(locale: string): Locale {
  return isValidLocale(locale) ? locale : defaultLocale;
}

/**
 * Validates translation key and returns fallback if not found
 */
export function validateTranslationKey(
  messages: Record<string, unknown>,
  key: string,
  fallback: string = key
): string {
  const keys = key.split('.');
  let current: unknown = messages;
  
  for (const k of keys) {
    if (current && typeof current === 'object' && k in current) {
      current = (current as Record<string, unknown>)[k];
    } else {
      console.warn(`Translation key not found: ${key}`);
      return fallback;
    }
  }
  
  return typeof current === 'string' ? current : fallback;
}

/**
 * Creates a safe translation function with fallbacks
 */
export function createSafeTranslator(
  messages: Record<string, unknown>,
  namespace: string
) {
  return (key: string, fallback?: string) => {
    const fullKey = `${namespace}.${key}`;
    return validateTranslationKey(messages, fullKey, fallback || key);
  };
}
```

## 🧪 **Verifikations-Script**

### **scripts/verify-i18n-setup.js**
```javascript
#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('=== I18N SETUP VERIFICATION ===\n');

// Check if translation files exist in the correct location
const appMessagesDir = path.join(process.cwd(), 'app', 'i18n', 'messages');
const expectedLocales = ['de', 'en'];

console.log('📁 Checking translation files in app/i18n/messages/...');

if (!fs.existsSync(appMessagesDir)) {
  console.error('❌ app/i18n/messages/ directory does not exist!');
  process.exit(1);
}

const files = fs.readdirSync(appMessagesDir);
console.log(`✅ Found ${files.length} files in app/i18n/messages/:`, files);

// Check each expected locale
let allLocalesPresent = true;
expectedLocales.forEach(locale => {
  const filePath = path.join(appMessagesDir, `${locale}.json`);
  if (fs.existsSync(filePath)) {
    const stats = fs.statSync(filePath);
    const content = fs.readFileSync(filePath, 'utf8');
    const parsed = JSON.parse(content);
    console.log(`✅ ${locale}.json: ${stats.size} bytes, ${Object.keys(parsed).length} namespaces`);
  } else {
    console.error(`❌ ${locale}.json missing!`);
    allLocalesPresent = false;
  }
});

// Check for old translation files that should be removed
const oldMessagesDir = path.join(process.cwd(), 'i18n', 'messages');
if (fs.existsSync(oldMessagesDir)) {
  console.warn('⚠️  Old i18n/messages/ directory still exists. Consider removing it.');
}

const publicI18nDir = path.join(process.cwd(), 'public', 'i18n');
if (fs.existsSync(publicI18nDir)) {
  console.warn('⚠️  public/i18n/ directory still exists. Consider removing it.');
}

// Check configuration files
console.log('\n📁 Checking configuration files...');

const configFiles = [
  { path: 'next.config.ts', required: true },
  { path: 'i18n/request.ts', required: true },
  { path: 'middleware.ts', required: true },
  { path: 'lib/i18n.ts', required: true },
  { path: 'lib/i18n-utils.ts', required: true }
];

configFiles.forEach(({ path: filePath, required }) => {
  if (fs.existsSync(filePath)) {
    console.log(`✅ ${filePath} exists`);
  } else if (required) {
    console.error(`❌ ${filePath} missing!`);
    allLocalesPresent = false;
  } else {
    console.log(`⚠️  ${filePath} not found (optional)`);
  }
});

// Check next.config.ts for correct plugin configuration
const nextConfigPath = path.join(process.cwd(), 'next.config.ts');
if (fs.existsSync(nextConfigPath)) {
  const nextConfigContent = fs.readFileSync(nextConfigPath, 'utf8');
  if (nextConfigContent.includes("createNextIntlPlugin('./i18n/request.ts')")) {
    console.log('✅ next.config.ts has correct next-intl plugin configuration');
  } else {
    console.error('❌ next.config.ts missing correct next-intl plugin configuration!');
    allLocalesPresent = false;
  }
}

// Check i18n/request.ts for correct file path
const requestConfigPath = path.join(process.cwd(), 'i18n', 'request.ts');
if (fs.existsSync(requestConfigPath)) {
  const requestConfigContent = fs.readFileSync(requestConfigPath, 'utf8');
  if (requestConfigContent.includes("'app', 'i18n', 'messages'")) {
    console.log('✅ i18n/request.ts loads from app/i18n/messages/');
  } else {
    console.error('❌ i18n/request.ts not configured to load from app/i18n/messages/!');
    allLocalesPresent = false;
  }
}

// Check middleware.ts for correct locale pattern
const middlewarePath = path.join(process.cwd(), 'middleware.ts');
if (fs.existsSync(middlewarePath)) {
  const middlewareContent = fs.readFileSync(middlewarePath, 'utf8');
  if (middlewareContent.includes("'/(de|en)/:path*'")) {
    console.log('✅ middleware.ts has correct locale pattern (de|en)');
  } else {
    console.error('❌ middleware.ts missing correct locale pattern!');
    allLocalesPresent = false;
  }
}

// Summary
console.log('\n=== VERIFICATION SUMMARY ===');
if (allLocalesPresent) {
  console.log('✅ All checks passed! Your i18n setup is correctly configured.');
  console.log('\n🚀 Next steps:');
  console.log('1. Run: yarn dev (for development testing)');
  console.log('2. Run: yarn build && yarn start (for production testing)');
  console.log('3. Check console logs for successful translation loading');
  console.log('4. Test URLs: /de, /en');
} else {
  console.error('❌ Some checks failed. Please fix the issues above.');
  process.exit(1);
}

console.log('\n=== END VERIFICATION ===');
```

## 🎯 **Wichtige Implementierungsdetails**

### **1. Namespace-Struktur**
- **Index**: Meta-Daten für Hauptseite
- **Main**: Hauptseite-Komponenten (hero, features, zigzag)
- **About**: Über uns Seite
- **Header**: Navigation und Header-Elemente
- **Satzung**: Satzung-Seite
- **Anmeldung**: Anmeldung-Seite
- **Communication**: Kommunikations-Seite
- **ContactUs**: Kontakt-Seite

### **2. Client vs Server Components**
- **Client Components**: Verwenden `useTranslations()` und `useLocale()`
- **Server Components**: Verwenden `getTranslations()` für Meta-Daten
- **Layout**: Kombiniert beide Ansätze

### **3. Locale-Wechsel**
- Automatische URL-Umleitung mit `router.push()`
- Beibehaltung der aktuellen Seite beim Sprachwechsel
- Force re-render bei Locale-Änderungen

### **4. Error Handling**
- Fallback zur Standardsprache (Deutsch)
- Umfassende Logging für Debugging
- Graceful degradation bei fehlenden Übersetzungen

### **5. Performance-Optimierungen**
- Nur aktuelle Locale wird geladen
- Server-side rendering für bessere SEO
- Client-side hydration für schnelle Navigation

## 🚀 **Deployment & Testing**

### **Package.json Scripts**
```json
{
  "scripts": {
    "dev": "next dev --turbopack",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "validate-translations": "node scripts/validate-translations.js",
    "verify-i18n": "node scripts/verify-i18n-setup.js"
  }
}
```

### **Testing Commands**
```bash
# Verify setup
yarn verify-i18n

# Development testing
yarn dev

# Production testing
yarn build && yarn start
```

### **Expected Log Output**
```
=== I18N REQUEST CONFIG START ===
🔍 i18n request config - Received locale: de
🔍 i18n request config - Default locale: de
🔍 i18n request config - Process cwd: /path/to/project
🔍 i18n request config - Node env: production
🔍 i18n loader - Loading for locale: de
📁 Loading translations: /path/to/project/app/i18n/messages/de.json
📁 File exists check: true
📁 File content length: 33792 characters
✅ Loaded translations for de: ['Main', 'About', 'Header', 'Index', 'Satzung', 'Anmeldung', 'Communication', 'ContactUs']
✅ Total translation keys: 8
✅ Sample translation [Main]: object
✅ Sample translation [About]: object
✅ Sample translation [Header]: object
=== I18N REQUEST CONFIG SUCCESS ===
```

## 🚨 **Troubleshooting**

### **Häufige Probleme**

1. **"Main.hero.finalWords" wird angezeigt**
   - Ursache: Übersetzungsdateien werden nicht geladen
   - Lösung: Überprüfe `app/i18n/messages/` Verzeichnis und Dateien

2. **Übersetzungen funktionieren in Development, aber nicht in Production**
   - Ursache: Dateien sind nicht im Build enthalten
   - Lösung: Verwende `app/i18n/messages/` Struktur

3. **Locale-Wechsel funktioniert nicht**
   - Ursache: Middleware-Konfiguration
   - Lösung: Überprüfe `matcher` in `middleware.ts`

### **Debugging-Schritte**
1. Führe `yarn verify-i18n` aus
2. Überprüfe Console-Logs für detaillierte Fehlermeldungen
3. Teste alle URLs: `/de`, `/en`
4. Überprüfe Build-Prozess

## 📊 **Performance-Metriken**

- **Bundle-Größe**: Nur aktuelle Locale wird geladen
- **Ladezeit**: Optimiert durch Next.js Bundling
- **SEO**: Server-side rendering für bessere Indexierung
- **Caching**: Next.js automatisches Caching

## 🎉 **Fazit**

Diese Implementation ist vollständig produktionsreif und folgt den Best Practices für next-intl v4 mit dem App Router. Sie bietet:

- ✅ **Vollständige Mehrsprachigkeit** (Deutsch/Englisch)
- ✅ **Produktionssicher** mit korrekter Dateistruktur
- ✅ **Umfassendes Logging** für Debugging
- ✅ **Error Handling** mit Graceful Fallbacks
- ✅ **Performance-optimiert** durch Next.js Bundling
- ✅ **SEO-freundlich** durch Server-side Rendering

---

**Technologie-Stack:**
- Next.js 15 mit App Router
- next-intl v4.3.1
- TypeScript
- Tailwind CSS
- Framer Motion

**Unterstützte Sprachen:**
- 🇩🇪 Deutsch (Standard)
- 🇬🇧 Englisch

---

*Diese Implementation ist bereit für die Produktion und kann als Referenz für andere Next.js Projekte verwendet werden.* 