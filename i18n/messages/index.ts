import de from './de.json';
import en from './en.json';
import type { Messages } from './types';

export const messages: Record<string, Messages> = {
  de,
  en
};

export type SupportedLocale = keyof typeof messages;

// Type-safe accessor function
export function getMessages(locale: string): Messages | undefined {
  return messages[locale];
} 