'use client';
import { useTranslations } from 'next-intl';
import PreviewLayout from '@/components/layout/Preview';

import HelpingPeople from '@/public/images/Help and support to climbing employee from mentor or leader hand.png';


export default function PreviewAnmelden() {
  const t = useTranslations('Anmeldung.preview');
  const steps = [0, 1, 2, 3, 4, 5, 6, 7].map((idx) => ({
    label: t(`steps.${idx}.label`),
    text: t(`steps.${idx}.text`),
    step: String(idx + 1)
  }));

  return (
    <section id="preview" className="relative z-20">
      <PreviewLayout 
        steps={steps}
        imageSrc={HelpingPeople}
        heading={t('heading')}
        subheading={t('subheading')}
        buttonText={t('buttonText')}
        buttonAction={{
          offset  : Number(t('buttonAction.offset')),
          target: t('buttonAction.target')
        }}
        canvasText={t('canvasText')}
      />
    </section>
  );
}