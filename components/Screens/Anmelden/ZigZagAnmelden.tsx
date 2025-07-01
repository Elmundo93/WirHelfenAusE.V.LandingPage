'use client';
import React from 'react';
import { useTranslations } from 'next-intl';
import ZigZagLayout from '@/components/layout/ZigZag';
import Arbeitsvertrag from '@/public/images/vecteezy_business-friendship-agreement-idea-with-successful-vector_2914732.png';
import PaperPlane from '@/public/images/PaperPlane.png';
import Suchen from '@/public/images/Curious analyst investigating question mark with magnifier.png';
import MarBusiness from '@/public/images/Mar-Business_6.png';
import CheckList1 from '@/public/images/Checklist1.png';
import Calculation1 from '@/public/images/13286.png';
import ShortTime from '@/public/images/3664288.png';
import OptionenKennen from '@/public/images/OptionenKennen.png';

const ZigZagAnmeldung: React.FC = () => {
  const t = useTranslations('Anmeldung.zigzag');
  const images = [Suchen, OptionenKennen, Arbeitsvertrag, PaperPlane, CheckList1, MarBusiness, Calculation1, ShortTime];
  
  const steps = [0, 1, 2, 3, 4, 5, 6, 7].map((idx) => ({
    id: t(`${idx}.id`),
    imageSrc: images[idx].src,
    imageAlt: t(`${idx}.imageAlt`),
    title: t(`${idx}.title`),
    text: t(`${idx}.text`),
    reverse: t.raw(`${idx}.reverse`),
    buttonAction: {
      type: t.raw(`${idx}.buttonAction.type`) as 'navigate' | 'scroll',
      target: t.raw(`${idx}.buttonAction.target`) as string,

    },
    buttonLabel: t(`${idx}.buttonLabel`),
    buttonActionOffset: Number(t(`${idx}.buttonActionOffset`))
  }));

  return <ZigZagLayout items={steps} />;
};

export default ZigZagAnmeldung;