'use client';
import { useTranslations } from 'next-intl';

import ZigZagLayout from "@/components/layout/ZigZag"

export default function ZigZagMain() {
  const t = useTranslations('Main.zigzag');
  
  const items = ['0', '1', '2'].map((key) => ({
    id: t(`${key}.id`),
    title: t(`${key}.title`),
    text: t(`${key}.text`),
    imageSrc: t(`${key}.imageSrc`),
    imageAlt: t(`${key}.imageAlt`),
    reverse: t.raw(`${key}.reverse`),
    buttonLabel: t(`${key}.buttonLabel`),
    buttonActionOffset: Number(t(`${key}.buttonActionOffset`)),
    buttonAction: {
      type: t.raw(`${key}.buttonAction.type`) as 'scroll' | 'navigate',
      target: t.raw(`${key}.buttonAction.target`) as string
    }
  }));
  
  return (
    <ZigZagLayout items={items} />
  )
}