'use client';
import { useTranslations, useLocale } from 'next-intl';
import { useState, useEffect } from 'react';
import HeroLayout from "@/components/layout/Hero";

export default function HeroMain() {
  const t = useTranslations('Main.hero');
  const locale = useLocale();
  
  // Debug logging
  console.log('=== HERO MAIN DEBUG ===');
  console.log('HeroMain - Current locale:', locale);
  console.log('HeroMain - mainTitle:', t('mainTitle'));
  console.log('HeroMain - highlightedWord:', t('highlightedWord'));
  console.log('HeroMain - subtitle:', t('subtitle'));
  console.log('HeroMain - buttonText:', t('buttonText'));
  console.log('=== END HERO MAIN DEBUG ===');
  
  // Force re-render when locale changes
  const [, setCurrentLocale] = useState(locale);
  
  useEffect(() => {
    setCurrentLocale(locale);
  }, [locale]);
  
  return (
    <HeroLayout
      mainTitle={t('mainTitle')}
      highlightedWord={t('highlightedWord')}
      subtitle={t('subtitle')}
      buttonText={t('buttonText')}
      buttonAction={{
        type: t('buttonActionType') as 'navigate' | 'scroll',
        target: t('buttonActionTarget')
      }}
      MehrErfahrenButtonLabel={t('mehrErfahren')}
      MehrErfahrenTarget="#ÜberUns"
      main
      finalWords={t('finalWords')}
      scribbleBottomOffset={t('scribbleBottomOffset')}
      MehrErfahrenTargetOffset={Number(t('mehrErfahrenTargetOffset'))}
    />
  )
}