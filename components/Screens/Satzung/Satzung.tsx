'use client';
import { useTranslations } from 'next-intl';
import AnimatedElement from "../../Animation/AnimatedElement"
import BackButton from "../../layout/BackButton"

// Type definitions for the Satzung content structure
interface SatzungSection {
  title: string;
  mainPurpose?: string;
  goals?: string;
  goalsList?: string[];
  implementation?: string;
  implementationList?: string[];
  items?: (string | { text: string; subitems?: string[] })[];
}

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
            {Object.entries(t.raw('content.sections')).map(([key, section]) => {
              const sectionData = section as SatzungSection;
              return (
                <section className="mb-8" key={key}>
                  <h3 className="text-xl font-bold mb-4">{sectionData.title}</h3>
                  {sectionData.mainPurpose && (
                    <p className="mb-4">{sectionData.mainPurpose}</p>
                  )}
                  {sectionData.goals && sectionData.goalsList && (
                    <>
                      <p className="mb-2">{sectionData.goals}</p>
                      <ul className="list-disc pl-6 mb-4">
                        {sectionData.goalsList.map((goal: string, i: number) => (
                          <li className="mb-2" key={i}>{goal}</li>
                        ))}
                      </ul>
                    </>
                  )}
                  {sectionData.implementation && sectionData.implementationList && (
                    <>
                      <p className="mb-2">{sectionData.implementation}</p>
                      <ul className="list-disc pl-6 mb-4">
                        {sectionData.implementationList.map((impl: string, i: number) => (
                          <li className="mb-2" key={i}>{impl}</li>
                        ))}
                      </ul>
                    </>
                  )}
                  {sectionData.items && (
                    <ol className="list-decimal pl-6">
                      {sectionData.items.map((item: string | { text: string; subitems?: string[] }, i: number) => (
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
              );
            })}
            <div className="flex justify-center">
              <p className="text-center mb-8">{t('content.footer')}</p>
            </div>
          </div>
          
        </div>
      </AnimatedElement>
    </section>
  )
}