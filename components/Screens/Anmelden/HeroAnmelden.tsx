'use client';
import { useTranslations } from 'next-intl';
import HeroLayout from "@/components/layout/Hero";

export default function HeroAnmelden() {
  const t = useTranslations('Anmeldung.hero');
  return (
    <HeroLayout
      mainTitle={t('mainTitle')}
      highlightedWord={t('highlightedWord')}
      subtitle={t('subtitle')}
      buttonText={t('buttonText')}
      buttonAction={{
        type: t.raw('buttonAction.type') as 'navigate' | 'scroll',
        target: t.raw('buttonAction.target') as string,
        offset: Number(t.raw('buttonAction.offset'))
      }}
      MehrErfahrenButtonLabel={t('mehrErfahrenButtonLabel')}
      MehrErfahrenTarget={t('mehrErfahrenTarget')}
      finalWords={t('finalWords')}
      scribbleBottomOffset={t('scribbleBottomOffset')}
    />
  );
}