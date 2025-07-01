'use client';
import React from 'react';
import { useTranslations} from 'next-intl';

import ZigZagLayout from '@/components/layout/ZigZag';

import Registration from '@/public/images/Registration.png'
import FilterSuche from '@/public/images/FilterSucher.png'
import Beitragen from '@/public/images/VerfasseBeitrag.png'
import InKontaktTreten from '@/public/images/InKontaktTretene.png'
import SicherheitAnmeldung from '@/public/images/SicherheitAnmeldung.png'
import DankeSagen from '@/public/images/DankeSagen.png'

const ZigZagAbout: React.FC = () => {
  const t = useTranslations('About.zigzag.guide');
  const images = [Registration, FilterSuche, Beitragen, InKontaktTreten, SicherheitAnmeldung, DankeSagen];
  
  const steps = [0, 1, 2, 3, 4, 5].map((idx) => ({
    title: t(`${idx}.title`),
    imageSrc: images[idx].src,
    imageAlt: t(`${idx}.imageAlt`),
    text: t(`${idx}.text`),
    reverse: t.raw(`${idx}.reverse`),
    buttonLabel: t(`${idx}.buttonLabel`),
    buttonAction: {
      type: t.raw(`${idx}.buttonAction.type`) as 'navigate' | 'scroll',
      target: t.raw(`${idx}.buttonAction.target`) as string
    },
    id: t(`${idx}.id`),
    buttonActionOffset: Number(t(`${idx}.buttonActionOffset`))
  }));

  return <ZigZagLayout items={steps} />;
};

export default ZigZagAbout;