import { getRequestConfig } from 'next-intl/server';
import {  defaultLocale } from '@/lib/i18n';
import { getFallbackLocale } from '@/lib/i18n-utils';
import fs from 'fs';
import path from 'path';

export default getRequestConfig(async ({ locale }) => {
  console.log('🔍 i18n request config - Received locale:', locale);
  console.log('🔍 i18n request config - Default locale:', defaultLocale);
  
  // Validate and fallback to default locale if needed
  const validLocale = getFallbackLocale(locale || defaultLocale);
  
  console.log('🔍 i18n loader - Loading for locale:', validLocale);

  try {
    // Load the single JSON file for the locale
    const filePath = path.join(process.cwd(), 'i18n', 'messages', `${validLocale}.json`);
    console.log(`📁 Loading translations: ${filePath}`);
    
    if (!fs.existsSync(filePath)) {
      console.error(`❌ Translation file does not exist: ${filePath}`);
      // Fallback to default locale if current locale file doesn't exist
      const fallbackPath = path.join(process.cwd(), 'i18n', 'messages', `${defaultLocale}.json`);
      if (fs.existsSync(fallbackPath)) {
        console.log(`🔄 Falling back to default locale: ${defaultLocale}`);
        const fallbackContent = fs.readFileSync(fallbackPath, 'utf8');
        const messages = JSON.parse(fallbackContent);
        console.log(`✅ Loaded fallback translations:`, Object.keys(messages));
        
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
    const messages = JSON.parse(fileContent);
    console.log(`✅ Loaded translations for ${validLocale}:`, Object.keys(messages));

    return {
      locale: validLocale,
      messages,
      timeZone: 'Europe/Berlin',
      now: new Date()
    };
  } catch (error) {
    console.error(`❌ Failed to load translations for locale: ${validLocale}`, error);
    
    // Return empty messages as last resort
    return {
      locale: validLocale,
      messages: {},
      timeZone: 'Europe/Berlin',
      now: new Date()
    };
  }
}); 