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
    // Try multiple possible paths for the translation files
    const possiblePaths = [
      path.join(process.cwd(), 'i18n', 'messages', `${validLocale}.json`),
      path.join(process.cwd(), '.next', 'server', 'i18n', 'messages', `${validLocale}.json`),
      path.join(process.cwd(), 'public', 'i18n', 'messages', `${validLocale}.json`),
    ];

    let filePath = null;
    let fileContent = null;

    for (const testPath of possiblePaths) {
      console.log(`📁 Testing path: ${testPath}`);
      if (fs.existsSync(testPath)) {
        filePath = testPath;
        fileContent = fs.readFileSync(testPath, 'utf8');
        console.log(`✅ Found translation file at: ${testPath}`);
        break;
      }
    }

    if (!filePath || !fileContent) {
      console.error(`❌ Translation file not found for locale: ${validLocale}`);
      console.error(`❌ Tried paths:`, possiblePaths);
      
      // Fallback to default locale
      const fallbackPaths = [
        path.join(process.cwd(), 'i18n', 'messages', `${defaultLocale}.json`),
        path.join(process.cwd(), '.next', 'server', 'i18n', 'messages', `${defaultLocale}.json`),
        path.join(process.cwd(), 'public', 'i18n', 'messages', `${defaultLocale}.json`),
      ];

      for (const fallbackPath of fallbackPaths) {
        if (fs.existsSync(fallbackPath)) {
          console.log(`🔄 Falling back to default locale: ${defaultLocale}`);
          fileContent = fs.readFileSync(fallbackPath, 'utf8');
          break;
        }
      }

      if (!fileContent) {
        throw new Error(`No translation files found for locale: ${validLocale} or fallback: ${defaultLocale}`);
      }
    }
    
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