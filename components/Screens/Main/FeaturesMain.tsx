'use client'

import { useTranslations, useLocale } from 'next-intl';
import { useState, useEffect } from 'react';
import FeatureLayout from '@/components/layout/Features'
import CoolKids from '@/public/images/CoolKids.png'
import People from '@/public/images/staff-personnel-structure-management-svgrepo-com.svg'
import SichererRahmen from '@/public/images/safe-and-stable-svgrepo-com.svg'
import InderNähe from '@/public/images/location-svgrepo-com.svg'
import Handshake from '@/public/images/handshake-svgrepo-com.svg'
import Register from '@/public/images/register-svgrepo-com.svg'
import RightOne from '@/public/images/choice-svgrepo-com.svg'

import CustomImage from '@/components/ui/image'

export default function FeatureMain() {
  const t = useTranslations('Main.features');
  const locale = useLocale();
  const featureKeys = ['org', 'safe', 'region', 'respect', 'register', 'match'] as const;
  const icons = [People, SichererRahmen, InderNähe, Handshake, Register, RightOne];

  // Debug logging
  console.log('=== FEATURES MAIN DEBUG ===');
  console.log('FeaturesMain - Current locale:', locale);
  console.log('FeaturesMain - sectionTitle:', t('sectionTitle'));
  console.log('FeaturesMain - org.title:', t('org.title'));
  console.log('FeaturesMain - safe.title:', t('safe.title'));
  console.log('=== END FEATURES MAIN DEBUG ===');
  
  // Force re-render when locale changes
  const [currentLocale, setCurrentLocale] = useState(locale);
  
  useEffect(() => {
    setCurrentLocale(locale);
  }, [locale]);

  const featureCards = featureKeys.map((key, idx) => ({
    icon: icons[idx],
    title: t(`${key}.title`),
    description: t(`${key}.description`),
    alt: t(`${key}.alt`)
  }));

  return (
    <FeatureLayout
      title={t('sectionTitle')}
      description={t('sectionDescription')}
      image={
        <CustomImage
          src={CoolKids}
          alt="CoolKids"
          width={400}
          height={400}
          className="rounded-full"
          isSvg={true}
          priority={true}
        />
      }
      features={featureCards}
    />
  )
}