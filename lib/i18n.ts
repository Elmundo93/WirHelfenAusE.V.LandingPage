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