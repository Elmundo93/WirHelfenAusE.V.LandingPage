import React from 'react';
import ZigZagLayout, { ZigZagStep } from './ZigZagLayout';
import StepButton from '../Buttons/Button';
import Arbeitsvertrag from '../../../public/images/vecteezy_business-friendship-agreement-idea-with-successful-vector_2914732.png';
import PaperPlane from '../../../public/images/PaperPlane.png';
import Suchen from '../../../public/images/Curious analyst investigating question mark with magnifier.png';
import MarBusiness from '../../../public/images/Mar-Business_6.png';
import CheckList1 from '../../../public/images/Checklist1.png';
import Calculation1 from '../../../public/images/13286.png';
import ShortTime from '../../../public/images/3664288.png';
import OptionenKennen from '../../../public/images/OptionenKennen.png';

const ZigZagAnmeldung: React.FC = () => {
  const steps: ZigZagStep[] = [
    {
      id: 'guideStep1',
      image: Suchen,
      imageAlt: 'Suchen',
      heading: 'Schritt 1: Finde eine helfende Hand mit der AushilfApp!',
      text: (
        <>
          Unser intuitives Kategoriesystem lässt dich schnell und einfach definieren, wie dir geholfen werden kann – oder wie du helfen kannst!
          <br /><br />
          <StepButton
            buttonLabel="Direkt zur AushilfApp! 📲"
            buttonAction={{ type: 'scroll', target: '#guideStep1' }}
            variant="cta"
          />
          <br /><br />
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
      image: OptionenKennen,
      imageAlt: 'OptionenKennen',
      heading: 'Schritt 2: Optionen kennenlernen!',
      text: (
        <>
          Das Beschäftigungsverhältnis variiert je nach Szenario – daher ist es wichtig, vorab zu klären, in welchem Ausmaß die Unterstützung erfolgen soll.
          <br /><br />
          So kann z. B. bei einer kurzzeitigen Beschäftigung (weniger als 70 Tage im Kalenderjahr) der Rentenversicherungsbeitrag entfallen.
          <br /><br />
          Nähere Infos zu den Abgaben kannst du&nbsp;
          <StepButton
            buttonLabel="hier"
            buttonAction={{
              type: 'open',
              url: 'https://www.minijob-zentrale.de/SharedDocs/Downloads/DE/Formulare/privat/muster-arbeitsvertrag-privathaushalt.html'
            }}
            variant="cta"
          />
          &nbsp;nachlesen.
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
      image: Arbeitsvertrag,
      imageAlt: 'Arbeitsvertrag',
      heading: 'Schritt 3: Bereite einen Arbeitsvertrag vor!',
      text: (
        <>
          Nachdem alle Eckdaten besprochen wurden, kann der Arbeitsvertrag aufgesetzt werden.
          <br /><br />
          Wichtig sind alle persönlichen Daten, der Beginn des Arbeitsverhältnisses, die Arbeitszeit und die Vergütung.
          <br /><br />
          Einen Mustervertrag der Minijobzentrale findest du&nbsp;
          <StepButton
            buttonLabel="hier"
            buttonAction={{
              type: 'open',
              url: 'https://www.minijob-zentrale.de/SharedDocs/Downloads/DE/Formulare/privat/muster-arbeitsvertrag-privathaushalt.html'
            }}
            variant="cta"
          />
          !
          <br /><br />
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
      image: PaperPlane,
      imageAlt: 'PaperPlane',
      heading: 'Schritt 4: Melde deine helfende Hand bei der Minijobzentrale an!',
      text: (
        <>
          Du kannst deine helfende Hand bei der Minijobzentrale auf unterschiedlichen Wegen anmelden.
          <br /><br />
          Per Telefon, um eventuelle Fragen zu klären, unter <strong>0355 2902-70799</strong> (Montag bis Freitag zwischen 07.00 und 17.00 Uhr).
          <br /><br />
          Per Post an: <strong>Minijob-Zentrale, 45115 Essen</strong>.
          <br /><br />
          Oder einfach in 2 Schritten online bei der
          <StepButton
            buttonLabel="Minijobzentrale"
            buttonAction={{
              type: 'open',
              url: 'https://www.minijob-zentrale.de/DE/service/formulare/haushaltshilfe-anmelden/_node.html'
            }}
            variant="cta"
          />
          .
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
      image: CheckList1,
      imageAlt: 'CheckList1',
      heading: 'Schritt 4, Teil 2: Details zur Anmeldung!',
      text: (
        <>
          Grundsätzlich brauchst du für die Anmeldung mit dem Haushaltcheck-Verfahren:
          <br /><br />
          <ul className="list-disc text-xl text-gray-500 pl-6">
            <li>Die persönlichen Daten der Parteien</li>
            <li>Die Steuernummer des Arbeitgebers</li>
            <li>Die Rentenversicherungsnummer der helfenden Hand (falls nicht vorhanden, wird diese über das Geburtsdatum und den Namen ermittelt)</li>
          </ul>
          <br />
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
      image: MarBusiness,
      imageAlt: 'MarBusiness',
      heading: 'Schritt 5: Kalkulation der Abgaben!',
      text: (
        <>
          Grundsätzlich gilt: Der Arbeitgeber ist für die Abgaben verantwortlich.
          <br /><br />
          Falls sich die helfende Hand nicht vorher von der Rentenversicherungspflicht befreien ließ, behält der Arbeitgeber 13,6% vom Bruttolohn ein, um diese der Minijobzentrale weiterzuleiten.
          <br /><br />
          Die Abgaben des Arbeitgebers betragen 14,92% vom Bruttolohn (Stand: 01.01.2025).
          <br /><br />
          Weitere Details folgen in den nächsten Schritten! Alle Informationen sind auch auf der Website der&nbsp;
          <StepButton
            buttonLabel="Minijobzentrale"
            buttonAction={{
              type: 'open',
              url: 'https://www.minijob-zentrale.de/DE/fuer-haushalte/vorteile-fuer-haushalte/vorteile-fuer-haushalte_node.html'
            }}
            variant="cta"
          />
          .
          <br /><br />
          <StepButton
            buttonLabel="Nächster Schritt"
            buttonAction={{ type: 'scroll', target: '#guideStep7' }}
            variant="next"
          />
        </>
      ),
      reverse: true,
    },
    {
      id: 'guideStep7',
      image: Calculation1,
      imageAlt: 'Calculation1',
      heading: 'Schritt 5, Teil 2: Abgabedetails für helfende Hände!',
      text: (
        <>
          Als helfende Hand hast du die Möglichkeit, dich von der Rentenversicherungspflicht befreien zu lassen, sodass keine weiteren Abgaben von deinem Lohn abgezogen werden.
          <br /><br />
          Dadurch bleibt zwar mehr Geld in der Tasche, du verzichtest aber auf die Chance, frühzeitig in deine Rentenversicherung einzuzahlen.
          <br /><br />
          Die Befreiung wird per Post mit diesem&nbsp;
          <StepButton
            buttonLabel="Schreiben"
            buttonAction={{
              type: 'open',
              url: 'https://www.minijob-zentrale.de/SharedDocs/Downloads/DE/Formulare/gewerblich/Befreiungsantrag-fuer-Arbeitnehmer-im-Gewerbe.html'
            }}
            variant="cta"
          />
          &nbsp;eingegeben.
          <br /><br />
          Die Einzahlung kann jedoch sinnvoll sein, da die Rentenversicherung nicht nur die Anmeldung einer staatlich geförderten Riesterrente ermöglicht, sondern auch vollständig auf die Wartezeit angerechnet wird.
          <br /><br />
          Zudem werden Reha-Leistungen übernommen, sofern in den letzten 2 Jahren mindestens 6 Monate Beiträge gezahlt wurden.
          <br /><br />
          Bei einem Totalausfall des Versicherten besteht auch die Möglichkeit, eine Erwerbsminderungsrente zu beantragen.
          <br /><br />
          Für ausführlichere Details lies dir diesen&nbsp;
          <StepButton
            buttonLabel="Artikel"
            buttonAction={{
              type: 'open',
              url: 'https://magazin.minijob-zentrale.de/minijob-rentenversicher/'
            }}
            variant="cta"
          />
          &nbsp;der Minijobzentrale.
          <br /><br />
          <StepButton
            buttonLabel="Nächster Schritt"
            buttonAction={{ type: 'scroll', target: '#guideStep8' }}
            variant="next"
          />
        </>
      ),
      reverse: false,
    },
    {
      id: 'guideStep8',
      image: ShortTime,
      imageAlt: 'ShortTime',
      heading: 'Schritt 5, Teil 3: Abgabedetails für Arbeitgeber!',
      text: (
        <>
          Die Abgaben werden halbjährlich bequem von der Minijobzentrale per SEPA-Lastschrift eingezogen.
          <br /><br />
          Das zu erwartende Entgelt, der Beschäftigungszeitraum und weitere wichtige Informationen werden vorab per&nbsp;
          <StepButton 
            buttonLabel="Schreiben"
            buttonAction={{
              type: 'open',
              url: 'https://www.minijob-zentrale.de/DE/minijob-anmelden/haushaltshilfe-anmelden/haushaltshilfe-anmelden_node.html'
            }}
            variant="cta"
          />
          &nbsp;mitgeteilt.
          <br /><br />
          Sollte sich das Einkommen unerwartet ändern, können die Angaben halbjährlich per&nbsp;
          <StepButton
            buttonLabel="Halbjahrescheck"
            buttonAction={{
              type: 'open',
              url: 'https://www.minijob-zentrale.de/DE/fuer-haushalte/halbjahresscheck/detailseite.html'
            }}
            variant="cta"
          />
          &nbsp;angepasst werden.
          <br /><br />
          Wie bereits erwähnt, behalten Sie als Arbeitgeber 13,6% des Lohns der helfenden Hand ein, um diese der Minijobzentrale bereitzustellen.
          <br /><br />
          Zudem müssen im Normalfall (bei regelmäßiger Beschäftigung) 14,92% des Lohns als Abgabe gezahlt werden.
          <br /><br />
          Wie sich die Abgaben zusammensetzen, können Sie&nbsp;
          <StepButton
            buttonLabel="hier"
            buttonAction={{
              type: 'open',
              url: 'https://www.minijob-zentrale.de/DE/fuer-haushalte/abgaben-und-fristen/detailseite.html'
            }}
            variant="cta"
          />
          &nbsp;nachlesen.
          <br /><br />
          <StepButton
            buttonLabel="Zurück zur Übersicht"
            buttonAction={{ type: 'scroll', target: '#preview' }}
            variant="next"
          />
        </>
      ),
      reverse: true,
    },
  ];

  return <ZigZagLayout steps={steps} />;
};

export default ZigZagAnmeldung;