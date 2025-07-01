export const locales = ['de', 'en', 'fr'] as const;
export const defaultLocale = 'de';
export type Locale = (typeof locales)[number];

export const localeNames: Record<Locale, string> = {
  de: 'Deutsch',
  en: 'English',
  fr: 'Français',
};

export const localeFlags: Record<Locale, string> = {
  de: '🇩🇪',
  en: '🇬🇧',
  fr: '🇫🇷',
}; 