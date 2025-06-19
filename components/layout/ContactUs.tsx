// components/layout/ContactUsLayout.tsx

import { ReactNode } from "react"
import { FaHandshake } from "react-icons/fa"

export default function ContactUsLayout({ children }: { children: ReactNode }) {
  return (
    <section className="relative z-20 px-4 md:px-16 lg:px-32 overflow-hidden rounded-3xl shadow-xl mt-20">

      {/* 🧡 Orange Blob Hintergrund */}
      <div className="absolute top-[-60px] left-[-60px] w-[220px] h-[220px] rounded-full blur-3xl opacity-30 -z-10" />
      <div className="absolute bottom-[-40px] right-[-40px] w-[160px] h-[160px]  rounded-full blur-2xl opacity-40 -z-10" />

      {/* 🎨 Grid-Layout */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <span className="inline-block rounded-full bg-amber-400 text-white text-sm px-4 py-1 font-semibold shadow-md">
            Kontaktieren Sie uns
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            <span className="bg-gradient-to-r from-amber-400 to-amber-500 text-transparent bg-clip-text">
              Haben Sie ein Anliegen
            </span>{" "}
            oder eine Idee?
          </h2>

          <p className="text-muted-foreground text-lg leading-relaxed">
            Wir freuen uns auf Ihre Nachricht – ob Lob, Frage oder Unterstützung. Schreiben Sie uns, wir sind für Sie da! 🤝
          </p>

          {/* Optional: illustrative Grafik */}
          <div className="hidden md:block pt-4 flex justify-center items-center w-full">
            <FaHandshake 
              size={120}
              className="text-amber-400 opacity-90"
            />
          </div>
        </div>

        {/* 📬 Formular */}
        <div className="relative z-10">{children}</div>
      </div>
    </section>
  )
}