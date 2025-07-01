import { Locale } from './i18n';

/**
 * Validates if a locale is supported
 */
export function isValidLocale(locale: string): locale is Locale {
  return ['de', 'en', 'fr'].includes(locale);
}

/**
 * Gets the fallback locale if the provided one is invalid
 */
export function getFallbackLocale(locale: string): Locale {
  return isValidLocale(locale) ? locale : 'de';
}

/**
 * Validates translation keys and provides fallbacks
 */
export function validateTranslationKey(
  messages: Record<string, any>,
  key: string,
  fallback: string = key
): string {
  try {
    const keys = key.split('.');
    let value = messages;
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        console.warn(`Translation key not found: ${key}`);
        return fallback;
      }
    }
    
    return typeof value === 'string' ? value : fallback;
  } catch (error) {
    console.error(`Error accessing translation key ${key}:`, error);
    return fallback;
  }
}

/**
 * Checks if all required translation modules are loaded
 */
export function validateTranslationModules(
  messages: Record<string, any>,
  requiredModules: string[]
): boolean {
  const missingModules = requiredModules.filter(module => !messages[module]);
  
  if (missingModules.length > 0) {
    console.warn('Missing translation modules:', missingModules);
    return false;
  }
  
  return true;
}

/**
 * Creates a safe translation function with fallbacks
 */
export function createSafeTranslator(
  messages: Record<string, any>,
  namespace: string
) {
  return (key: string, fallback?: string) => {
    const fullKey = `${namespace}.${key}`;
    return validateTranslationKey(messages, fullKey, fallback || key);
  };
} 