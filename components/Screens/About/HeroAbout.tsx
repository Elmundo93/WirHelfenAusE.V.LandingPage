'use client';
import { useTranslations} from 'next-intl';

import HeroLayout from "@/components/layout/Hero";

export default function HeroAbout() {
  const t = useTranslations('About.hero');
  return (
    <HeroLayout
      mainTitle={t('mainTitle')}
      highlightedWord={t('highlightedWord')}
      subtitle={t('subtitle')}
      buttonText={t('buttonText')}
      buttonAction={{
        type: t.raw('buttonActionType') as 'navigate' | 'scroll',
        target: t.raw('buttonActionTarget') as string
      }}
      MehrErfahrenButtonLabel={t('mehrErfahrenButtonLabel')}
      MehrErfahrenTarget={t('mehrErfahrenTarget')}
      scribbleBottomOffset={t('scribbleBottomOffset')}
      subtitleMarginTop={t('subtitleMarginTop')}
    />
  );
}
