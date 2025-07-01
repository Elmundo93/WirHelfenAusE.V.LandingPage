'use client';
import { useTranslations } from 'next-intl';
import PreviewLayout from "@/components/layout/Preview"
import IdeaCrafting from "@/public/images/IdeaCrafting.png"

export default function PreviewAboutScreen() {
  const t = useTranslations('About.preview');
  const steps = [0, 1, 2, 3, 4, 5].map((idx) => ({
    label: t(`steps.${idx}.label`),
    text: t(`steps.${idx}.text`),
    step: String(idx + 1)
  }));

  return (
    <section id="preview" className="py-16">
      <PreviewLayout
        imageSrc={IdeaCrafting}
        heading={t('heading')}
        subheading={
          <>
            <span>{t('subheading.line1')}</span><br /><br />
            <span>{t('subheading.line2')}</span><br /><br />
            <span>{t('subheading.line3')}</span>
          </>
        }
        buttonText={t('buttonText')}
        canvasText={t('canvasText')}
        buttonAction={{
          offset  : Number(t('buttonAction.offset')),
          target: t('buttonAction.target')
        }}
        steps={steps}
      />
    </section>
  )
}