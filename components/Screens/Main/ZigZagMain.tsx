// components/Screens/ZigZagMain.tsx
import ZigZagLayout from "@/components/layout/ZigZag"

export default function ZigZagMain() {
  return (
    <ZigZagLayout
      items={[
        {
          title: "Hilfe für Eigentümer",
          text: `Im Alltag fallen regelmäßig Arbeiten an, das kennen wir alle.\n\n & vor allem als Eigentümer können diese Alltagspflichten, je nach Art, mehr Arbeitskraft fordern als im Haus vertreten ist. \n\nWenn dann auch noch der Nachbar keine Zeit hat, steht man vor einer eigentlich vergnügsamen Aufgabe, welche zum stressigen Wochen-, oder vielleicht sogar Monatsprojekt wird.`,
          imageSrc: "/images/img_eigentuemer.webp",
          imageAlt: "Hilfe für Eigentümer"
        },
        {
          title: "Hilfe für beeinträchtigte Menschen oder Senioren",
          text: `Kleinere Aufgaben wie Gassie gehen, Einkaufen oder sich um den Garten kümmern, werden für Menschen mit einer Beeinträchtigung oft schon zu einem Problem.\n\n Hier reichen oft schon kleine Hilfestellungen um einen imensen Unterschied in der Lebensqualität zu erzielen.`,
          imageSrc: "/images/img_senioren.webp",
          imageAlt: "Hilfe für Senioren",
          reverse: true
        },
        {
          title: "Hilfe beim Prozess",
          text: ` Bei Fragen jeder Art stehen wir als Verein ihnen zur Seite.\n\n 
      Des weiteren finden Sie einen ausführlichen Schritt für Schritt Guide mit nützlichen Tipps rund um die Minijobanmeldug `,
          imageSrc: "/images/process_img.webp",
          imageAlt: "Hilfe beim Prozess",
          buttonLabel: "hier!",
          buttonAction: {
            type: "navigate",
            target: "/anmeldung"
          }
        }
      ]}
    />
  )
}