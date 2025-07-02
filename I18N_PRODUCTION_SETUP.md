# I18n Production Setup - Best Practices

## 🎯 **Übersicht**

Diese Dokumentation beschreibt die korrekte Einrichtung von next-intl v4 für die Produktion mit dem Next.js App Router.

## 📁 **Korrekte Verzeichnisstruktur**

```
app/
├── i18n/
│   └── messages/
│       ├── de.json          # Deutsche Übersetzungen
│       ├── en.json          # Englische Übersetzungen
│       └── fr.json          # Französische Übersetzungen
├── [locale]/
│   ├── layout.tsx
│   ├── page.tsx
│   └── ...
└── layout.tsx

i18n/
└── request.ts               # Konfigurationsdatei

lib/
├── i18n.ts                  # Locale-Konfiguration
└── i18n-utils.ts           # Utility-Funktionen

middleware.ts                # Next-intl Middleware
```

## 🔧 **Wichtige Konfigurationen**

### **1. next.config.ts**
```typescript
import createNextIntlPlugin from 'next-intl/plugin';
import type { NextConfig } from "next";

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

const nextConfig: NextConfig = {
  // ... andere Konfigurationen
};

export default withNextIntl(nextConfig);
```

### **2. i18n/request.ts**
```typescript
import { getRequestConfig } from 'next-intl/server';
import { defaultLocale } from '@/lib/i18n';
import { getFallbackLocale } from '@/lib/i18n-utils';
import fs from 'fs';
import path from 'path';

export default getRequestConfig(async ({ locale }) => {
  const validLocale = getFallbackLocale(locale || defaultLocale);
  
  try {
    // WICHTIG: Dateien aus dem app Verzeichnis laden
    const filePath = path.join(process.cwd(), 'app', 'i18n', 'messages', `${validLocale}.json`);
    
    if (!fs.existsSync(filePath)) {
      // Fallback zur Standardsprache
      const fallbackPath = path.join(process.cwd(), 'app', 'i18n', 'messages', `${defaultLocale}.json`);
      if (fs.existsSync(fallbackPath)) {
        const fallbackContent = fs.readFileSync(fallbackPath, 'utf8');
        const messages = JSON.parse(fallbackContent);
        
        return {
          locale: defaultLocale,
          messages,
          timeZone: 'Europe/Berlin',
          now: new Date()
        };
      } else {
        throw new Error(`No translation files found`);
      }
    }
    
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const messages = JSON.parse(fileContent);

    return {
      locale: validLocale,
      messages,
      timeZone: 'Europe/Berlin',
      now: new Date()
    };
  } catch (error) {
    console.error(`Failed to load translations for locale: ${validLocale}`, error);
    
    return {
      locale: validLocale,
      messages: {},
      timeZone: 'Europe/Berlin',
      now: new Date()
    };
  }
});
```

### **3. middleware.ts**
```typescript
import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from '@/lib/i18n';

export default createMiddleware({
  locales: locales,
  defaultLocale: defaultLocale,
  localePrefix: 'always'
});

export const config = {
  matcher: ['/', '/(de|en|fr)/:path*']
};
```

## 🚀 **Warum app/i18n/messages?**

### **✅ Vorteile:**
- **Automatisches Bundling**: Next.js bündelt automatisch alle Dateien im `app` Verzeichnis
- **Produktionssicher**: Dateien sind immer verfügbar, auch in Serverless-Umgebungen
- **Optimiert**: Next.js optimiert die Dateien für die Produktion
- **Konsistent**: Folgt den Next.js App Router Best Practices

### **❌ Warum nicht public/i18n/messages?**
- **Nicht optimal**: Dateien werden als statische Assets behandelt
- **Zugriffsprobleme**: Serverless-Funktionen können nicht zuverlässig auf public zugreifen
- **Performance**: Zusätzliche HTTP-Requests für Übersetzungen

### **❌ Warum nicht i18n/messages (außerhalb von app)?**
- **Nicht gebündelt**: Dateien werden nicht automatisch in den Build einbezogen
- **Produktionsprobleme**: Dateien sind in der Produktion nicht verfügbar
- **Deployment-Issues**: Verschiedene Hosting-Provider behandeln externe Dateien unterschiedlich

## 🔄 **Migration von alter Struktur**

### **Schritt 1: Dateien verschieben**
```bash
# Erstelle das neue Verzeichnis
mkdir -p app/i18n/messages

# Kopiere die Übersetzungsdateien
cp i18n/messages/*.json app/i18n/messages/

# Entferne alte Dateien (optional)
rm -rf public/i18n
```

### **Schritt 2: Konfiguration aktualisieren**
- Aktualisiere `i18n/request.ts` um Dateien aus `app/i18n/messages` zu laden
- Stelle sicher, dass `next.config.ts` den korrekten Pfad zur request.ts hat

### **Schritt 3: Testen**
```bash
# Development testen
yarn dev

# Production build testen
yarn build
yarn start
```

## 🧪 **Testing**

### **Development Testing**
```bash
yarn dev
# Besuche: http://localhost:3000/de, /en, /fr
```

### **Production Testing**
```bash
yarn build
yarn start
# Besuche: http://localhost:3000/de, /en, /fr
```

### **Überprüfung der Logs**
Suche nach diesen Log-Nachrichten:
```
🔍 i18n loader - Loading for locale: de
📁 Loading translations: /path/to/app/i18n/messages/de.json
✅ Loaded translations for de: [Main, About, Header, ...]
```

## 🚨 **Häufige Probleme**

### **Problem: "Main.hero.finalWords" wird angezeigt**
**Ursache**: Übersetzungsdateien werden nicht geladen
**Lösung**: 
1. Überprüfe, ob Dateien in `app/i18n/messages/` existieren
2. Überprüfe die Pfade in `i18n/request.ts`
3. Stelle sicher, dass `next.config.ts` korrekt konfiguriert ist

### **Problem: Übersetzungen funktionieren in Development, aber nicht in Production**
**Ursache**: Dateien sind nicht im Build enthalten
**Lösung**: 
1. Verwende `app/i18n/messages/` statt externer Verzeichnisse
2. Überprüfe, ob Dateien im `.next` Build vorhanden sind

### **Problem: Locale-Wechsel funktioniert nicht**
**Ursache**: Middleware-Konfiguration
**Lösung**: 
1. Überprüfe `middleware.ts` Konfiguration
2. Stelle sicher, dass `matcher` korrekt ist

## 📊 **Performance-Optimierungen**

### **Bundle-Größe**
- Übersetzungsdateien werden automatisch optimiert
- Nur die aktuelle Locale wird geladen
- Tree-shaking entfernt ungenutzte Übersetzungen

### **Caching**
- Next.js cached Übersetzungen automatisch
- Server-side rendering für bessere Performance
- Client-side hydration für schnelle Navigation

## 🔧 **Deployment-Checkliste**

- [ ] Übersetzungsdateien sind in `app/i18n/messages/`
- [ ] `next.config.ts` ist korrekt konfiguriert
- [ ] `i18n/request.ts` lädt aus dem richtigen Pfad
- [ ] `middleware.ts` ist konfiguriert
- [ ] Build funktioniert ohne Fehler
- [ ] Alle Locales sind getestet

## 🎯 **Best Practices**

1. **Struktur konsistent halten**: Verwende immer `app/i18n/messages/`
2. **Fallback-Strategie**: Implementiere immer Fallbacks zur Standardsprache
3. **Error Handling**: Logge Fehler für Debugging
4. **Testing**: Teste alle Locales in Development und Production
5. **Dokumentation**: Halte die Übersetzungsstruktur dokumentiert

---

*Diese Setup stellt sicher, dass deine i18n-Implementierung in allen Umgebungen zuverlässig funktioniert! 🌍✨* 