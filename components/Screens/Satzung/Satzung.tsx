'use client';
import { useTranslations } from 'next-intl';
import AnimatedElement from "../../Animation/AnimatedElement"
import BackButton from "../../layout/BackButton"

export default function SatzungScreen() {
  const t = useTranslations('Satzung');
  return (
    <section className="min-h-screen">
      <AnimatedElement>
        {/* Content-Bereich – er liegt über dem Hintergrund */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 mt-28 ">
          <BackButton />
          
          <div className="prose prose-lg max-w-none bg-white p-8 rounded-lg shadow-md">
            <h1 className="text-4xl font-bold text-center mb-4">{t('content.title')}</h1>
            <h2 className="text-3xl font-bold text-center mb-8 text-amber-500">{t('content.subtitle')}</h2>
              <p className="text-right mb-8">{t('content.date')}</p>
  
            {/* Sections */}
            {Object.entries(t.raw('content.sections')).map(([key, section]: [string, any], idx: number) => (
              <section className="mb-8" key={key}>
                <h3 className="text-xl font-bold mb-4">{section.title}</h3>
                {section.mainPurpose && (
                  <p className="mb-4">{section.mainPurpose}</p>
                )}
                {section.goals && (
                  <>
                    <p className="mb-2">{section.goals}</p>
                    <ul className="list-disc pl-6 mb-4">
                      {section.goalsList.map((goal: string, i: number) => (
                        <li className="mb-2" key={i}>{goal}</li>
                      ))}
                    </ul>
                  </>
                )}
                {section.implementation && (
                  <>
                    <p className="mb-2">{section.implementation}</p>
                    <ul className="list-disc pl-6 mb-4">
                      {section.implementationList.map((impl: string, i: number) => (
                        <li className="mb-2" key={i}>{impl}</li>
                      ))}
                    </ul>
                  </>
                )}
                {section.items && (
                  <ol className="list-decimal pl-6">
                    {section.items.map((item: any, i: number) => (
                      <li className="mb-2" key={i}>
                        {typeof item === 'string' ? item : (
                          <>
                            {item.text}
                            {item.subitems && (
                              <ul className="list-disc pl-6 mt-2">
                                {item.subitems.map((sub: string, j: number) => (
                                  <li className="mb-2" key={j}>{sub}</li>
                                ))}
                              </ul>
                            )}
                          </>
                        )}
                      </li>
                    ))}   
                  </ol>
                )}
              </section>
            ))}
            <div className="flex justify-center">
              <p className="text-center mb-8">{t('content.footer')}</p>
            </div>
          </div>
          
        </div>
      </AnimatedElement>
    </section>
  )
}