'use client';
import { useTranslations } from 'next-intl';
import AnimatedElement from '@/components/Animation/AnimatedElement'
import Image from 'next/image'
import CustomImage from '@/components/ui/image'
import GuidelineSection from '@/components/layout/GuidelineSection'

import CasualFriends from '../../../public/images/CasualFriends.png'

export default function CRules() {
  const t = useTranslations('Communication');
  
  // Amber/golden blur placeholder
  const amberBlurDataURL = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
  
  return (
    <section id="cRules" className="flex flex-col items-center justify-center relative mt-20">
      <div className="md:h-8 sm:h-6 lg:h-4" />

      <AnimatedElement className="z-10 rounded-xl shadow-lg p-10 w-full mx-auto backdrop-blur-xl">
        <div className="h-[125px] w-full" aria-hidden="true" />
        <div className="relative flex flex-col w-full max-w-xl mx-auto">
          {/* Background image with proper aspect ratio container */}
          <div className="absolute inset-0" style={{ top: '-180px' }}>
            <div className="relative w-full h-[320px]">
              
              <CustomImage 
                src={CasualFriends} 
                alt="CasualFriends" 
                fill={true}
                className="object-contain rounded-full" 
                priority 
                sizes="(max-width: 768px) 100vw, 320px"
                placeholder="blur"
                blurDataURL={amberBlurDataURL}
                isSvg={true}
              />
            </div>
          </div>

          {/* Reserve space for the background image to prevent layout shift */}
   

          {/* Überschrift */}
          <div className="p-4 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-200 rounded-2xl shadow-lg backdrop-blur-xl relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="300">
            <h4 className="text-2xl p-4 pt-0 rounded-full text-center">{t('header.title')}</h4>
            <p className="text-lg text-gray-500 text-center">
              {t('header.subtitle')}
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center max-w-xl mx-auto w-full">
          <GuidelineSection
            title={t('sections.values.title')}
            icon="🧡"
            color="text-amber-600"
            items={t.raw('sections.values.items')}
          />

          <GuidelineSection
            title={t('sections.noGos.title')}
            icon="🚫"
            color="text-red-600"
            items={t.raw('sections.noGos.items')}
          />

          <GuidelineSection
            title={t('sections.communication.title')}
            icon="💬"
            color="text-green-600"
            items={t.raw('sections.communication.items')}
          />

          <GuidelineSection
            title={t('sections.violations.title')}
            icon="🛠"
            items={t.raw('sections.violations.items')}
          />

          {/* Abschlussabschnitt */}
          <div className="mt-12 text-center">
            <p className="text-lg font-semibold text-gray-700">{t('footer.title')}</p>
            <p className="text-gray-600 mt-2">{t('footer.subtitle')}</p>
          </div>
        </div>
      </AnimatedElement>
    </section>
  )
}