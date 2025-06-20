import React from 'react';
import ZigZagLayout from '@/components/layout/ZigZag';

import Registration from '@/public/images/Registration.svg'
import FilterSuche from '@/public/images/FilterSucher.svg'
import BeitragVerfassen from '@/public/images/VerfasseBeitrag.svg'
import InKontaktTreten from '@/public/images/InKontaktTretene.svg'
import SicherheitAnmeldung from '@/public/images/SicherheitAnmeldung.svg'
import DankeSagen from '@/public/images/DankeSagen.svg'


const ZigZagAbout: React.FC = () => {
  const steps = [
    {
      title: 'Schritt 1: App herunterladen & ein Konto erstellen!',
      imageSrc: Registration,
      imageAlt: 'Registration',
      text: `Du findest die App schnell und zugänglich im App- & Playstore!\n\nNachdem die App auf deinem Gerät installiert wurde, kannst du ein Konto erstellen. Die App führt dich durch alle relevanten Verifiktationsschritte!`,
      reverse: false,
      buttonLabel: "Nächster Schritt",
      buttonAction: { type: 'scroll' as const, target: '#guideStep2' },
      id: 'guideStep1',
      buttonActionOffset: 100
    },
    {
      title: 'Schritt 2: Umschauen & Erkunden!',
      imageSrc: FilterSuche,
      imageAlt: 'FilterSuche',
      text: `Du hast ein Konto erstellt?\n\nDann herzlich willkommen in der AushilfApp!\n\nSchaue dich auf der Pinnwand um und nutze den Filter um zu finden was du suchst!`,
      reverse: true,
      buttonLabel: "Nächster Schritt",
      buttonAction: { type: 'scroll' as const, target: '#guideStep3' },
      id: 'guideStep2',
      buttonActionOffset: 100
    },
    {
      title: 'Schritt 3: Beitrag verfassen!',
      imageSrc: BeitragVerfassen,
      imageAlt: 'BeitragVerfassen',
      text: `Wenn du nach dem Ersten Blick auf die Pinnwand nicht das gefunden hast, was du suchst, dann wird es Zeit einen Beitrag zu verfassen!\n\nDefiniere mit den vorgegebenen Kategorien wobei man dir helfen kann, oder in welchem Bereich du helfen möchtest!\n\nDann nur noch eine kurze Beschreibung hinzufügen und der Post ist fertig!`,
      reverse: false,
      buttonLabel: "Nächster Schritt",
      buttonAction: { type: 'scroll' as const, target: '#guideStep4' },
      id: 'guideStep3',
      buttonActionOffset: 100
    },
    {
      title: 'Schritt 4: In Kontakt treten!',
      imageSrc: InKontaktTreten,
      imageAlt: 'InKontaktTreten',
      text: `Es braucht manchmal seine Zeit, doch wenn sich dann die richtige Möglichkeit gefunden hat, schicke eine freundliche Nachricht um sich über das Szenario zu unterhalten und auszutauschen.\n\nHierbei können auch schon wichtige Eckdaten mitgeteilt werden um zu schauen, ob man einander helfen kann.\n\nAchte dabei bitte immer darauf, den Kommunikationrichtilinien zu folgen.\n\nWir als Verein behalten uns dabei das Recht ein, die Kommunikation in der AushilfApp zu moderieren und bei verstößen Konsequenzen zu ziehen.\n\nNeben der Moderation durch den Verein, ermutigt die AushilfApp seine User auch dazu, eine Selbstregulierung durch ein effektives Meldesystem zu betreiben.`,
      reverse: true,
      buttonLabel: "Nächster Schritt",
      buttonAction: { type: 'scroll' as const, target: '#guideStep5' },
      id: 'guideStep4',
      buttonActionOffset: 100
    },
    {
      title: 'Schritt 5: Schlau machen!',
      imageSrc: SicherheitAnmeldung,
      imageAlt: 'SicherheitAnmeldung',
      text: `Es hat sich eine Möglichkeit ergeben, einander zu helfen?\n\nDann ist es Zeit, sich darüber gedanken zu machen, in welchem Rahmen man zusammen kommen möchte!\n\nIst die Unterstützung nur kurzfristig, oder absehbar langfristig?\n\nSo oder so, gibt es für jedes Szenario eine Lösung!\n\nDenn auch bei einer kurzzeitigen Beschäftigung, kann man die Vorteile einer Rechtskomformen Anmeldung genießen!\n\nSo ist man zum Beispiel in nur wenigen Schritten im Rahmen der Tätigkeit versichert, und kann sich auf das eigentliche Helfen konzentrieren!\n\nFür ausführlichere Informationen, les' dich weiter bei der Minijobzentrale ein, oder schau einfach mal in unseren Schritt für Schritt Guide!`,
      reverse: false,
      buttonLabel: "Nächster Schritt",
      buttonAction: { type: 'scroll' as const, target: '#guideStep6' },
      id: 'guideStep5',
      buttonActionOffset: 100
    },
    {
      title: 'Schritt 6: Danke sagen!',
      imageSrc: DankeSagen,
      imageAlt: 'DankeSagen',
      text: `Wenn am Ende des Tages alles erledigt ist und geklappt hat, vergessen sie nicht danke zu sagen!\n\nIn der AushilfApp finden sie auf jedem Profil eine Pinnwand für Danksagungen!\n\nGeben sie dort einfach ihr Feedback ab und zeigen sie auch anderen Usern, dass das Zusammenarbeiten reibungslos funktioniert hat!`,
      reverse: true,
      buttonLabel: "Zurück zur Übersicht",
      buttonAction: { type: 'scroll' as const, target: '#preview' },
      id: 'guideStep6',
      buttonActionOffset: 100
    }
  ];

  return <ZigZagLayout items={steps} />;
};

export default ZigZagAbout;