import { getRequestConfig } from 'next-intl/server';
import { defaultLocale } from '@/lib/i18n';
import { getFallbackLocale } from '@/lib/i18n-utils';

// Static imports for better reliability
import deMessages from './messages/de.json';
import enMessages from './messages/en.json';

const messages = {
  de: deMessages,
  en: enMessages
};

export default getRequestConfig(async ({ locale }) => {
  console.log('=== I18N REQUEST CONFIG START ===');
  console.log('🔍 Received locale:', locale);
  console.log('🔍 Default locale:', defaultLocale);
  
  // Validate and fallback to default locale if needed
  const validLocale = getFallbackLocale(locale || defaultLocale);
  console.log('🔍 Valid locale:', validLocale);
  
  try {
    // Get messages from static import
    const localeMessages = messages[validLocale as keyof typeof messages];
    
    if (!localeMessages) {
      console.error(`❌ No messages found for locale: ${validLocale}`);
      console.error(`❌ Available locales:`, Object.keys(messages));
      
      // Fallback to default locale
      const fallbackMessages = messages[defaultLocale as keyof typeof messages];
      if (!fallbackMessages) {
        throw new Error(`No messages available for locale: ${validLocale} or fallback: ${defaultLocale}`);
      }
      
      console.log(`🔄 Falling back to default locale: ${defaultLocale}`);
      
      return {
        locale: defaultLocale,
        messages: fallbackMessages,
        timeZone: 'Europe/Berlin',
        now: new Date()
      };
    }
    
    console.log(`✅ Loaded translations for ${validLocale}`);
    console.log('=== I18N REQUEST CONFIG SUCCESS ===');

    return {
      locale: validLocale,
      messages: localeMessages,
      timeZone: 'Europe/Berlin',
      now: new Date()
    };
  } catch (error) {
    console.error('=== I18N REQUEST CONFIG ERROR ===');
    console.error(`❌ Failed to load translations for locale: ${validLocale}`, error);
    
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