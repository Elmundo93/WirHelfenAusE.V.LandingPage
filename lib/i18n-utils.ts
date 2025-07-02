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
  messages: Record<string, any>,
  key: string,
  fallback: string = key
): string {
  const keys = key.split('.');
  let current = messages;
  
  for (const k of keys) {
    if (current && typeof current === 'object' && k in current) {
      current = current[k];
    } else {
      console.warn(`Translation key not found: ${key}`);
      return fallback;
    }
  }
  
  return typeof current === 'string' ? current : fallback;
}

/**
 * Checks if all required translation modules are loaded
 */
export function validateTranslationModules(
  messages: Record<string, unknown>,
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
  messages: Record<string, unknown>,
  namespace: string
) {
  return (key: string, fallback?: string) => {
    const fullKey = `${namespace}.${key}`;
    return validateTranslationKey(messages, fullKey, fallback || key);
  };
} 