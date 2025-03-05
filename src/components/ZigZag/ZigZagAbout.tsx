import React from 'react';
import ZigZagLayout, { ZigZagStep } from './ZigZagLayout';
import StepButton from '../Buttons/Button';
import Registration from '../../../public/images/Registration.svg'
import FilterSuche from '../../../public/images/FilterSucher.svg'
import BeitragVerfassen from '../../../public/images/VerfasseBeitrag.svg'
import InKontaktTreten from '../../../public/images/InKontaktTretene.svg'
import SicherheitAnmeldung from '../../../public/images/SicherheitAnmeldung.svg'
import DankeSagen from '../../../public/images/DankeSagen.svg'







const ZigZagAnmeldung: React.FC = () => {
  const steps: ZigZagStep[] = [
    {
      id: 'guideStep1',
      image: Registration,
      imageAlt: 'Registration',
      heading: 'Schritt 1: App herunterladen & ein Konto erstellen!',
      text: (
        <>
            Du findest die App schnell und zugänglich im App- & Playstore!
            <br /><br />
          <StepButton
            buttonLabel="Direkt zur AushilfApp!"
            buttonAction={{ type: 'scroll', target: '#guideStep1' }}
            variant="cta"
          />
          <br /><br />
          Nachdem die App auf deinem Gerät installiert wurde, kannst du ein Konto erstellen. <br/><br/>Die App führt dich durch alle relevanten Verifiktationsschritte!
          <br/><br/>
          <StepButton 
            buttonLabel="Nächster Schritt"
            buttonAction={{ type: 'scroll', target: '#guideStep2' }}
            variant="next"
          />
        </>
      ),
      reverse: false,
    },
    {
      id: 'guideStep2',
      image: FilterSuche,
      imageClass: 'rounded-full',
      imageAlt: 'FilterSuche',
      heading: 'Schritt 2: Umschauen & Erkunden!',
      text: (
        <>
          Du hast ein Konto erstellt?
          <br/><br/>
          Dann herzlich willkommen in der AushilfApp!
          <br/><br/>
          Schaue dich auf der Pinnwand um und nutze den Filter um zu finden was du suchst!
          <br /><br />
       
        <StepButton
            buttonLabel="Nächster Schritt"
            buttonAction={{ type: 'scroll', target: '#guideStep3' }}
            variant="next"
          />
        </> 
      ),
      reverse: true,
    },
    {
      id: 'guideStep3',
      image: BeitragVerfassen,
      imageAlt: 'BeitragVerfassen',
      heading: 'Schritt 3: Beitrag verfassen!',
      text: (
        <>
       Wenn du nach dem Ersten Blick auf die Pinnwand nicht das gefunden hast, was du suchst, dann wird es Zeit einen Beitrag zu verfassen!<br/><br/>
Definiere mit den vorgegebenen Kategorien wobei man dir helfen kann, oder in welchem Bereich du helfen möchtest!<br/><br/>
Dann nur noch eine kurze Beschreibung hinzufügen und der Post ist fertig!
          <br/><br/>
          <StepButton
            buttonLabel="Nächster Schritt"
            buttonAction={{ type: 'scroll', target: '#guideStep4' }}
            variant="next"
          />
        </>
      ),
      reverse: false,
    },
    {
      id: 'guideStep4',
      image: InKontaktTreten,
      imageAlt: 'InKontaktTreten',
      heading: 'Schritt 4: In Kontakt treten!',
      text: (
        <>
              Es braucht manchmal seine Zeit, doch wenn sich dann die richtige Möglichkeit gefunden hat, schicke eine freundliche Nachricht um sich über das Szenario zu unterhalten und auszutauschen.<br/><br/>
Hierbei können auch schon wichtige Eckdaten mitgeteilt werden um zu schauen, ob man einander helfen kann.<br/><br/>
Achte dabei bitte immer darauf, den Kommunikationrichtilinien zu folgen.<br/><br/>
Wir als Verein behalten uns dabei das Recht ein, die Kommunikation in der AushilfApp zu moderieren und bei verstößen Konsequenzen zu ziehen.<br/><br/> 
Neben der Moderation durch den Verein, ermutigt die AushilfApp seine User auch dazu, eine Selbstregulierung durch ein effektives Meldesystem zu betreiben.
        
          <br /><br />
          <StepButton
            buttonLabel="Nächster Schritt"
            buttonAction={{ type: 'scroll', target: '#guideStep5' }}
            variant="next"
          />
        </>
      ),
      reverse: true,
    },
    {
      id: 'guideStep5',
      image: SicherheitAnmeldung,
      imageAlt: 'SicherheitAnmeldung',
      heading: 'Schritt 5: Schlau machen!',
      text: (
        <>
       Es hat sich eine Möglichkeit ergeben, einander zu helfen?<br/><br/>
          Dann ist es Zeit, sich darüber gedanken zu machen, in welchem Rahmen man zusammen kommen möchte!<br/><br/>
          Ist die Unterstützung nur kurzfristig, oder absehbar langfristig?<br/><br/>
          So oder so, gibt es für jedes Szenario eine Lösung! <br/>
          Denn auch bei einer kurzzeitigen Beschäftigung, kann man die Vorteile einer Rechtskomformen Anmeldung genießen! <br/><br/>
          So ist man zum Beispiel in nur wenigen Schritten im Rahmen der Tätigkeit versichert, und kann sich auf das eigentliche Helfen konzentrieren!<br/><br/>
          Für ausführlichere Informationen, les&apos; dich weiter bei der Minijobzentrale ein, oder schau einfach mal in unseren Schritt für Schritt Guide!
              
              <br/><br/>
          <StepButton
            buttonLabel="Nächster Schritt"
            buttonAction={{ type: 'scroll', target: '#guideStep6' }}
            variant="next"
          />
        </>
      ),
      reverse: false,
    },
    {
      id: 'guideStep6',
      image: DankeSagen,
      imageAlt: 'DankeSagen',
      heading: 'Schritt 6: Danke sagen!',
      text: (
        <>
          Wenn am Ende des Tages alles erledigt ist und geklappt hat, vergessen sie nicht danke zu sagen!<br/><br/>
            In der AushilfApp finden sie auf jedem Profil eine Pinnwand für Danksagungen!<br/><br/>
            Geben sie dort einfach ihr Feedback ab und zeigen sie auch anderen Usern, dass das Zusammenarbeiten reibungslos funktioniert hat!
          
          
          <br /><br />
          <StepButton
            buttonLabel="Zurück zur Übersicht"
            buttonAction={{ type: 'scroll', target: '#preview' }}
            variant="next"
          />
        </>
      ),
      reverse: true,
    }
   
  ];

  return <ZigZagLayout steps={steps} />;
};

export default ZigZagAnmeldung;