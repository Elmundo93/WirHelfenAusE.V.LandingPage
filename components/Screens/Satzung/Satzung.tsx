// components/Screens/SatzungScreen.tsx
import AnimatedElement from "../../Animation/AnimatedElement"
import BackButton from "../../layout/BackButton"

export default function SatzungScreen() {
  return (
    <section className="min-h-screen">
      <AnimatedElement>
        {/* Content-Bereich – er liegt über dem Hintergrund */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 ">
          <BackButton />
          
          <div className="prose prose-lg max-w-none bg-white p-8 rounded-lg shadow-md">
            <h1 className="text-4xl font-bold text-center mb-4">Vereinssatzung des</h1>
            <h2 className="text-3xl font-bold text-center mb-8 text-amber-500">Wir helfen aus e.V.</h2>
            <p className="text-right mb-8">Stand: 24.01.2024</p>
  
            <section className="mb-8">
              <h3 className="text-xl font-bold mb-4">§ 1 Name, Sitz, Geschäftsjahr</h3>
              <ol className="list-decimal pl-6">
                <li className="mb-2">Der Verein trägt den Namen &quot;Wir helfen aus e.V.&quot;</li>
                <li className="mb-2">Der Verein hat seinen Sitz in Witzenhausen.</li>
                <li className="mb-2">Das Geschäftsjahr läuft vom 1.8. eines jeden Jahres bis zum 31.7. des Folgejahres.</li>
              </ol>
            </section>
  
            <section className="mb-8">
              <h3 className="text-xl font-bold mb-4">§ 2 Zweck</h3>
              <ol className="list-decimal pl-6">
                <li className="mb-4">Der Hauptzweck des Vereins ist die Förderung der Kommunikation zwischen hilfsbedürftigen Bürgern & hilfsbereiten Menschen.</li>
                <li className="mb-4">
                  Im Einzelnen verfolgt der Verein folgende Ziele:
                  <ul className="list-disc pl-6 mt-2">
                    <li className="mb-2">Der Verein möchte hilfsbedürftigen Bürgern dabei helfen den Kontakt zu hilfsbereiten Menschen aufzunehmen um die kontinuierlich anfallenden Aufgaben im Alltag zu bewältigen.</li>
                    <li className="mb-2">Der Verein möchte durch seine Dienste die Sicherung eines würdevollen Lebens im Alter, oder mit Beeinträchtigung, auch mit Eigenheim oder anderen Pflichten ermöglichen.</li>
                    <li className="mb-2">Der Verein möchte die Helferkultur in den Einflussregionen fördern.</li>
                    <li className="mb-2">Neben der Kommunikationsförderung möchte der Verein Bürgern das Minijob System näher bringen um über die Vorteile einer Rechtskonformen Anmeldung aufzuklären.</li>
                  </ul>
                </li>
                <li className="mb-4">
                  Diese Ziele werden durch den Verein insbesondere verwirklicht durch:
                  <ul className="list-disc pl-6 mt-2">
                    <li className="mb-2">Kommunikationsförderung durch das Bereitstellen von Digitalen Plattformen wie zum Beispiel einer Internetseite, Gruppen in bekannten Messengerdiensten oder einer mobilen Applikation.</li>
                    <li className="mb-2">Öffentlichkeitsarbeit durch Werbeaktionen für den Verein & seinen Zweck in allen verfügbaren Medien.</li>
                    <li className="mb-2">Präsentation an der Uni-Kassel (Standort Witzenhausen) & anderen geeigneten Standorten & Zusammenkünften.</li>
                  </ul>
                </li>
                </ol>
            </section>
  
            <section className="mb-8">
              <h3 className="text-xl font-bold mb-4">§ 3 Gemeinnützigkeit und Mittelverwendung</h3>
              <ol className="list-decimal pl-6">
                <li className="mb-2">Der Verein verfolgt ausschließlich und unmittelbar gemeinnützige Zwecke im Sinne des Abschnitts &quot;Steuerbegünstigte Zwecke&quot; der Abgabeordnung und ist selbstlos tätig. Er verfolgt nicht in erster Linie eigenwirtschaftliche Zwecke.</li>
                <li className="mb-2">Mittel des Vereins dürfen nur für satzungsmäßige Zwecke verwendet werden. Die Mitglieder erhalten in ihrer Eigenschaft als Mitglieder keine Zuwendungen aus Mitteln des Vereins. Dies gilt auch für den Fall ihres Ausscheidens oder bei der Auflösung oder Aufhebung des Vereins.</li>
                <li className="mb-2">Es darf keine Person durch Ausgaben, die dem Zweck des Vereins fremd sind oder durch unverhältnismäßig hohe Vergütungen begünstigt werden.</li>
                <li className="mb-2">Der Verein darf zweckgebundene Rücklagen für die Erfüllung seiner satzungsmäßigen Zwecke bilden.</li>
                <li className="mb-2">Der Verein haftet ausschließlich mit seinem Vereinsvermögen.</li>
                <li className="mb-2">Der Verein darf besonders aktiven Mitgliedern eine Ehrenamtspauschale und eine Übungsleiterpauschale auszahlen. Über Anstellung und Vergütung entscheidet der Vereinsvorstand. Bei Zahlungen von Ehrenamtspauschalen und Übungsleiterpauschalen ist die finanzielle Handlungsfähigkeit des Vereins zu berücksichtigen.</li>
              </ol>
            </section>
  
            <section className="mb-8">
              <h3 className="text-xl font-bold mb-4">§ 4 Mitgliedschaft</h3>
              <ol className="list-decimal pl-6">
                <li className="mb-2">Der Verein nimmt als Mitglieder natürliche Personen auf, die die Ziele des Vereins unterstützen. Jede juristische Person, deren Satzung oder Verfassung nicht im Widerspruch zu dem Zweck des Vereins steht, kann ebenfalls Mitglied werden.</li>
                <li className="mb-2">Der Verein kann auch fördernde Mitglieder aufnehmen. Diese Mitglieder werden regelmäßig über die Vereinstätigkeiten informiert, sind jedoch nicht wahl- und stimmberechtigt.</li>
                <li className="mb-2">Die Mitgliedschaft in dem Verein wird nach schriftlichem Antrag durch Beschluss des Vorstandes erworben.</li>
                <li className="mb-2">Die Ablehnung der Aufnahme in den Verein, die keiner Begründung bedarf.</li>
              </ol>
            </section>
            <div className="flex justify-center">
            <p className="text-center mb-8">Dieser Ausschnitt beihnhaltet nur relevanten Informationen für außenstehende Personen, für die vollständige Satzung kontaktieren Sie uns gerne!</p>
          </div>
          </div>
          
        </div>
      </AnimatedElement>
    </section>
  )
}