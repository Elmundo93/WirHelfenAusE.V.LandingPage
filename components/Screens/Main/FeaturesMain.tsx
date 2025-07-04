'use client'

import { useTranslations, useLocale } from 'next-intl';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
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
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  const featureKeys = ['org', 'safe', 'region', 'respect', 'register', 'match'] as const;
  
  // Light mode icons
  const lightIcons = [People, SichererRahmen, InderNähe, Handshake, Register, RightOne];
  
  // Dark mode icons (using string paths for .webP files)
  const darkIcons = [
    '/images/staff-personnel-structure-management-svgrepo-com-dark.png',
    SichererRahmen, 
    '/images/location-svgrepo-com-dark.png', 
    '/images/handshake-svgrepo-com.png', 
    '/images/register-svgrepo-com-dark.png',
    '/images/choice-svgrepo-com-dark.png'
  ];

  // Force re-render when locale changes
  const [, setCurrentLocale] = useState(locale);
  
  useEffect(() => {
    setMounted(true);
    setCurrentLocale(locale);
  }, [locale]);

  // Determine which icon set to use based on theme
  const isDarkMode = mounted && (resolvedTheme === 'dark' || theme === 'dark');
  const icons = isDarkMode ? darkIcons : lightIcons;

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