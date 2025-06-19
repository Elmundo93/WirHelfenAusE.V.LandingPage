'use client'

import FeatureLayout from '@/components/layout/Features'
import CoolKids from '@/public/images/CoolKids.svg'
import People from '@/public/images/staff-personnel-structure-management-svgrepo-com.svg'
import SichererRahmen from '@/public/images/safe-and-stable-svgrepo-com.svg'
import InderNähe from '@/public/images/location-svgrepo-com.svg'
import Handshake from '@/public/images/handshake-svgrepo-com.svg'
import Register from '@/public/images/register-svgrepo-com.svg'
import RightOne from '@/public/images/choice-svgrepo-com.svg'
import Image from 'next/image'

export default function FeatureMain() {
  const featureCards = [
    {
      icon: People,
      title: 'Nützliche Organisationsmöglichkeiten',
      description: 'Alle helfenden Hände in deiner Umgebung in einer App!',
      alt: 'Organisationsmöglichkeiten',
    },
    {
      icon: SichererRahmen,
      title: 'Einen sicheren Rahmen schaffen',
      description:
        'Durch die Verifizierung möchten wir ein möglichst sicheres Umfeld schaffen!',
      alt: 'Sicherer Rahmen',
    },
    {
      icon: InderNähe,
      title: 'Bleib auf dem Stand deiner Region!',
      description:
        'Die App zeigt dir regionsspezifische Announcen.\nSieh, was in deiner Umgebung los ist!',
      alt: 'Regionale Nähe',
    },
    {
      icon: Handshake,
      title: 'Respektvoller Umgang',
      description:
        'Klare Richtlinien sorgen für gute Kommunikation.\nRespekt und Anstand stehen an erster Stelle!',
      alt: 'Respektvoller Umgang',
    },
    {
      icon: Register,
      title: 'Aufklärung durch Interaktion',
      description: 'Wir helfen bei den ersten Schritten mit der Minijob-Zentrale!',
      alt: 'Register-Hilfe',
    },
    {
      icon: RightOne,
      title: 'Den richtigen für den Job finden!',
      description:
        'Jeder Helfer beschreibt sein Können – so findest du schnell die passende Hilfe!',
      alt: 'Richtigen finden',
    },
  ]

  return (
    <FeatureLayout
      title="Unser Ziel"
      description={`Wir vom 'Wir helfen aus e.V.' glauben daran, dass wir mit unserem Netzwerk die Helferkultur auf regionaler Ebene fördern.\n\nViele Aufgaben lassen sich mit mehr Händen schneller bewältigen & deshalb verbinden wir Menschen mit unserer App!`}
      image={
        <Image
          src={CoolKids}
          alt="CoolKids"
          width={300}
          height={300}
          className="rounded-full"
        />
      }
      features={featureCards}
    />
  )
}