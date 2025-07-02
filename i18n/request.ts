import { getRequestConfig } from 'next-intl/server';
import {  defaultLocale } from '@/lib/i18n';
import { getFallbackLocale } from '@/lib/i18n-utils';
import fs from 'fs';
import path from 'path';

export default getRequestConfig(async ({ locale }) => {
  console.log('=== I18N REQUEST CONFIG START ===');
  console.log('🔍 i18n request config - Received locale:', locale);
  console.log('🔍 i18n request config - Default locale:', defaultLocale);
  console.log('🔍 i18n request config - Process cwd:', process.cwd());
  console.log('🔍 i18n request config - Node env:', process.env.NODE_ENV);
  
  // Validate and fallback to default locale if needed
  const validLocale = getFallbackLocale(locale || defaultLocale);
  
  console.log('🔍 i18n loader - Loading for locale:', validLocale);

  try {
    // Load the single JSON file for the locale from app directory
    const filePath = path.resolve('./public/messages', `${validLocale}.json`);    console.log(`📁 Loading translations: ${filePath}`);
    console.log(`📁 File exists check: ${fs.existsSync(filePath)}`);
    
    if (!fs.existsSync(filePath)) {
      console.error(`❌ Translation file does not exist: ${filePath}`);
      
      // Check if public/messages directory exists
      const messagesDir = path.join(process.cwd(), 'public', 'messages');
      console.log(`📁 Messages directory exists: ${fs.existsSync(messagesDir)}`);
      if (fs.existsSync(messagesDir)) {
        const files = fs.readdirSync(messagesDir);
        console.log(`📁 Available files in messages directory:`, files);
      }
      
      // Fallback to default locale if current locale file doesn't exist
      const fallbackPath = path.resolve('./public/messages', `${defaultLocale}.json`);
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
    
    // Log some sample translations for verification
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
    
    // Return empty messages as last resort
    console.log(`⚠️ Returning empty messages for locale: ${validLocale}`);
    
    return {
      locale: validLocale,
      messages: {},
      timeZone: 'Europe/Berlin',
      now: new Date()
    };
  }
}); 