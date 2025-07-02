# Simplified i18n Setup

## 🎯 **Overview**

This project uses a **single JSON file per language** approach for internationalization, which is simpler and more maintainable for most applications.

## 📁 **File Structure**

```
i18n/
├── messages/
│   ├── de.json          # German translations (32KB, 651 lines)
│   ├── en.json          # English translations (31KB, 697 lines)
│   └── fr.json          # French translations (34KB, 704 lines)
└── request.ts           # Configuration file
```

## 🔧 **Configuration**

### **Supported Languages**
- 🇩🇪 **German (de)** - Default language
- 🇬🇧 **English (en)** - Secondary language
- 🇫🇷 **French (fr)** - Tertiary language

### **request.ts Configuration**
```typescript
export default getRequestConfig(async ({ locale }) => {
  // 1. Validate locale and fallback to German if needed
  const validLocale = getFallbackLocale(locale || defaultLocale);
  
  // 2. Load single JSON file for the locale
  const filePath = path.join(process.cwd(), 'i18n', 'messages', `${validLocale}.json`);
  
  // 3. Handle missing files with fallback
  if (!fs.existsSync(filePath)) {
    // Fallback to German if current locale file doesn't exist
    return loadFallbackTranslations();
  }
  
  // 4. Load and parse translations
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const messages = JSON.parse(fileContent);
  
  return {
    locale: validLocale,
    messages,
    timeZone: 'Europe/Berlin',
    now: new Date()
  };
});
```

## 🎨 **Usage in Components**

### **Basic Usage**
```typescript
import { useTranslations } from 'next-intl';

export default function MyComponent() {
  const t = useTranslations('Main'); // Use 'Main' namespace
  
  return (
    <div>
      <h1>{t('hero.mainTitle')}</h1>
      <p>{t('hero.subtitle')}</p>
    </div>
  );
}
```

### **Multiple Namespaces**
```typescript
import { useTranslations } from 'next-intl';

export default function Header() {
  const t = useTranslations('Header');
  const common = useTranslations('Common');
  
  return (
    <header>
      <nav>
        <a href="/about">{t('menuItems.about')}</a>
        <button>{common('loading')}</button>
      </nav>
    </header>
  );
}
```

## 📊 **Translation Structure**

Each JSON file contains nested objects for different sections:

```json
{
  "Main": {
    "hero": {
      "mainTitle": "Wir helfen Ihnen, eine",
      "highlightedWord": "helfende Hand",
      "subtitle": "- oder eine zu werden!"
    }
  },
  "About": {
    "hero": {
      "mainTitle": "Die",
      "highlightedWord": "AushilfApp"
    }
  },
  "Header": {
    "menuItems": {
      "about": "Über die App",
      "contact": "Kontakt"
    }
  }
}
```

## 🚀 **Benefits of Single File Approach**

### **✅ Advantages**
- **Simpler Structure** - One file per language
- **Easier Maintenance** - All translations in one place
- **Better Overview** - See all translations at once
- **Faster Loading** - Single file read operation
- **Less Complexity** - No module management needed

### **⚠️ Considerations**
- **File Size** - Can get large with many translations
- **Team Conflicts** - Multiple developers editing same file
- **Loading Time** - Loads all translations at once

## 🔄 **Fallback Strategy**

### **Locale Fallback**
1. **Requested locale** (e.g., `/fr/about`)
2. **Default locale** (German) if requested locale doesn't exist
3. **Empty messages** as last resort

### **Translation Key Fallback**
1. **Exact key** (e.g., `Main.hero.title`)
2. **Key name** as fallback if translation missing
3. **Console warning** for missing keys

## 🛠 **Error Handling**

### **File Not Found**
```typescript
if (!fs.existsSync(filePath)) {
  console.error(`❌ Translation file does not exist: ${filePath}`);
  // Fallback to German
  return loadFallbackTranslations();
}
```

### **JSON Parsing Errors**
```typescript
try {
  const messages = JSON.parse(fileContent);
} catch (error) {
  console.error(`❌ Failed to parse translations for locale: ${validLocale}`);
  return { locale: validLocale, messages: {} };
}
```

### **Missing Translation Keys**
```typescript
// In i18n-utils.ts
export function validateTranslationKey(
  messages: Record<string, any>,
  key: string,
  fallback: string = key
): string {
  // Returns fallback if key not found
  console.warn(`Translation key not found: ${key}`);
  return fallback;
}
```

## 📈 **Performance**

### **Loading Strategy**
- **Server-side loading** - Translations loaded at request time
- **Caching** - Next.js caches the results
- **Single file read** - Efficient file system operation
- **Memory usage** - All translations loaded into memory

### **Bundle Size**
- **No client-side translations** - Only current locale loaded
- **Tree-shaking** - Unused translations can be removed
- **Compression** - JSON files are compressed in production

## 🧪 **Testing**

### **Development Testing**
```bash
# Check console logs for loading information
npm run dev
# Look for: 🔍 i18n loader - Loading for locale: de
```

### **Production Testing**
```bash
# Build and test different locales
npm run build
npm run start
# Visit: /de, /en, /fr
```

## 🔧 **Adding New Languages**

1. **Create translation file**
   ```bash
   # Create new JSON file
   touch i18n/messages/es.json
   ```

2. **Add to configuration**
   ```typescript
   // In lib/i18n.ts
   export const locales = ['de', 'en', 'fr', 'es'] as const;
   export const localeNames = {
     de: 'Deutsch',
     en: 'English',
     fr: 'Français',
     es: 'Español',
   };
   ```

3. **Update validation**
   ```typescript
   // In lib/i18n-utils.ts
   export function isValidLocale(locale: string): locale is Locale {
     return ['de', 'en', 'fr', 'es'].includes(locale);
   }
   ```

## 📝 **Best Practices**

1. **Consistent Structure** - Keep same keys across all languages
2. **Meaningful Namespaces** - Use descriptive section names
3. **Fallback Handling** - Always provide fallbacks for missing keys
4. **Error Logging** - Log missing translations for debugging
5. **Type Safety** - Use TypeScript for translation key validation

This simplified approach provides a clean, maintainable solution for your multilingual website! 🌍✨ 