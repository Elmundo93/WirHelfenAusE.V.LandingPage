import React from 'react';
import ZigZagLayout from '@/components/layout/ZigZag';
import Arbeitsvertrag from '@/public/images/vecteezy_business-friendship-agreement-idea-with-successful-vector_2914732.svg';
import PaperPlane from '@/public/images/PaperPlane.svg';
import Suchen from '@/public/images/Curious analyst investigating question mark with magnifier.svg';
import MarBusiness from '@/public/images/Mar-Business_6.svg';
import CheckList1 from '@/public/images/Checklist1.svg';
import Calculation1 from '@/public/images/13286.svg';
import ShortTime from '@/public/images/3664288.svg';
import OptionenKennen from '@/public/images/OptionenKennen.svg';
import { StaticImageData } from 'next/image';

const ZigZagAnmeldung: React.FC = () => {
  const steps = [
    {
      id: 'guideStep1',
      imageSrc: Suchen,
      imageAlt: 'Suchen',
      title: 'Schritt 1: Finde eine helfende Hand mit der AushilfApp!',
      text: 'Unser intuitives Kategoriesystem lässt dich schnell und einfach definieren, wie dir geholfen werden kann – oder wie du helfen kannst!',
      reverse: false,
      buttonAction: { type: 'scroll' as const, target: '#guideStep2' },
      buttonLabel: 'Nächster Schritt',

    },
    {
      id: 'guideStep2',
      imageSrc: OptionenKennen,
      imageAlt: 'OptionenKennen',
      title: 'Schritt 2: Optionen kennenlernen!',
      text: 'Das Beschäftigungsverhältnis variiert je nach Szenario – daher ist es wichtig, vorab zu klären, in welchem Ausmaß die Unterstützung erfolgen soll.\n\nSo kann z.B. bei einer kurzzeitigen Beschäftigung (weniger als 70 Tage im Kalenderjahr) der Rentenversicherungsbeitrag entfallen.\n\nNähere Infos zu den Abgaben kannst du hier nachlesen.',
      reverse: true,
      buttonAction: { type: 'scroll' as const, target: '#guideStep3' },
      buttonLabel: 'Nächster Schritt',

    },
    {
      id: 'guideStep3',
      imageSrc: Arbeitsvertrag,
      imageAlt: 'Arbeitsvertrag',
      title: 'Schritt 3: Bereite einen Arbeitsvertrag vor!',
      text: 'Nachdem alle Eckdaten besprochen wurden, kann der Arbeitsvertrag aufgesetzt werden.\n\nWichtig sind alle persönlichen Daten, der Beginn des Arbeitsverhältnisses, die Arbeitszeit und die Vergütung.\n\nEinen Mustervertrag der Minijobzentrale findest du hier!',
      reverse: false,
      buttonAction: { type: 'scroll' as const, target: '#guideStep4' },
      buttonLabel: 'Nächster Schritt',

    },
    {
      id: 'guideStep4',
      imageSrc: PaperPlane,
      imageAlt: 'PaperPlane',
      title: 'Schritt 4: Melde deine helfende Hand bei der Minijobzentrale an!',
      text: 'Du kannst deine helfende Hand bei der Minijobzentrale auf unterschiedlichen Wegen anmelden.\n\nPer Telefon, um eventuelle Fragen zu klären, unter 0355 2902-70799 (Montag bis Freitag zwischen 07.00 und 17.00 Uhr).\n\nPer Post an: Minijob-Zentrale, 45115 Essen.\n\nOder einfach in 2 Schritten online bei der Minijobzentrale.',
      reverse: true,
      buttonAction: { type: 'scroll' as const, target: '#guideStep5' },
      buttonLabel: 'Nächster Schritt',

    },
    {
      id: 'guideStep5',
      imageSrc: CheckList1,
      imageAlt: 'CheckList1',
      title: 'Schritt 4, Teil 2: Details zur Anmeldung!',
      text: 'Grundsätzlich brauchst du für die Anmeldung mit dem Haushaltcheck-Verfahren:\n\n• Die persönlichen Daten der Parteien\n• Die Steuernummer des Arbeitgebers\n• Die Rentenversicherungsnummer der helfenden Hand (falls nicht vorhanden, wird diese über das Geburtsdatum und den Namen ermittelt)',
      reverse: false,
      buttonAction: { type: 'scroll' as const, target: '#guideStep6' },
      buttonLabel: 'Nächster Schritt',

    },
    {
      id: 'guideStep6',
      imageSrc: MarBusiness,
      imageAlt: 'MarBusiness',
      title: 'Schritt 5: Kalkulation der Abgaben!',
      text: 'Grundsätzlich gilt: Der Arbeitgeber ist für die Abgaben verantwortlich.\n\nFalls sich die helfende Hand nicht vorher von der Rentenversicherungspflicht befreien ließ, behält der Arbeitgeber 13,6% vom Bruttolohn ein, um diese der Minijobzentrale weiterzuleiten.\n\nDie Abgaben des Arbeitgebers betragen 14,92% vom Bruttolohn (Stand: 01.01.2025).\n\nWeitere Details folgen in den nächsten Schritten! Alle Informationen sind auch auf der Website der Minijobzentrale.',
      reverse: true,
      buttonAction: { type: 'scroll' as const, target: '#guideStep7' },
      buttonLabel: 'Nächster Schritt',

    },
    {
      id: 'guideStep7',
      imageSrc: Calculation1,
      imageAlt: 'Calculation1',
      title: 'Schritt 5, Teil 2: Abgabedetails für helfende Hände!',
      text: 'Als helfende Hand hast du die Möglichkeit, dich von der Rentenversicherungspflicht befreien zu lassen, sodass keine weiteren Abgaben von deinem Lohn abgezogen werden.\n\nDadurch bleibt zwar mehr Geld in der Tasche, du verzichtest aber auf die Chance, frühzeitig in deine Rentenversicherung einzuzahlen.\n\nDie Befreiung wird per Post mit diesem Schreiben eingegeben.\n\nDie Einzahlung kann jedoch sinnvoll sein, da die Rentenversicherung nicht nur die Anmeldung einer staatlich geförderten Riesterrente ermöglicht, sondern auch vollständig auf die Wartezeit angerechnet wird.\n\nZudem werden Reha-Leistungen übernommen, sofern in den letzten 2 Jahren mindestens 6 Monate Beiträge gezahlt wurden.\n\nBei einem Totalausfall des Versicherten besteht auch die Möglichkeit, eine Erwerbsminderungsrente zu beantragen.\n\nFür ausführlichere Details lies dir diesen Artikel der Minijobzentrale.',
      reverse: false,
      buttonAction: { type: 'scroll' as const, target: '#guideStep8' },
      buttonLabel: 'Nächster Schritt',

    },
    {
      id: 'guideStep8',
      imageSrc: ShortTime,
      imageAlt: 'ShortTime',
      title: 'Schritt 5, Teil 3: Abgabedetails für Arbeitgeber!',
      text: 'Die Abgaben werden halbjährlich bequem von der Minijobzentrale per SEPA-Lastschrift eingezogen.\n\nDas zu erwartende Entgelt, der Beschäftigungszeitraum und weitere wichtige Informationen werden vorab per Schreiben mitgeteilt.\n\nSollte sich das Einkommen unerwartet ändern, können die Angaben halbjährlich per Halbjahrescheck angepasst werden.\n\nWie bereits erwähnt, behalten Sie als Arbeitgeber 13,6% des Lohns der helfenden Hand ein, um diese der Minijobzentrale bereitzustellen.\n\nZudem müssen im Normalfall (bei regelmäßiger Beschäftigung) 14,92% des Lohns als Abgabe gezahlt werden.\n\nWie sich die Abgaben zusammensetzen, können Sie hier nachlesen.',
      reverse: true,
      buttonAction: { type: 'scroll' as const, target: '#preview' },
      buttonLabel: 'Zurück auf Anfang',

    },
  ];

  return <ZigZagLayout items={steps} />;
};

export default ZigZagAnmeldung;