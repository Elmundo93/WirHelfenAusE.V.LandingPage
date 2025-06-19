'use client'

import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

import AnimatedElement from "../Animation/AnimatedElement"
import MehrErfahren from "../Buttons/MehrErfahren"
import StepButton, { ButtonAction } from "../Buttons/StepButton"
import ScribbleAnimation from "../Animation/ScribbleAnimation"

interface HeroLayoutProps {
  mainTitle: string
  highlightedWord: string
  subtitle: string
  preTitle?: string
  buttonText: string
  buttonAction: ButtonAction
  MehrErfahrenButtonLabel: string
  MehrErfahrenTarget: string
  highlightColor?: string
  main?: boolean
  finalWords?: string
  scribbleBottomOffset?: string
  subtitleMarginTop?: string
}

export default function HeroLayout({
  mainTitle,
  highlightedWord,
  subtitle,
  preTitle,
  buttonText,
  buttonAction,
  MehrErfahrenButtonLabel,
  MehrErfahrenTarget,
  highlightColor,
  finalWords,
  scribbleBottomOffset,
  subtitleMarginTop,
}: HeroLayoutProps) {
  return (
    <section className="relative px-4 sm:px-6 lg:px-8 flex flex-col overflow-hidden min-h-[calc(100vh-50px)]">

<div className="flex flex-col justify-center items-center flex-1  pb-8 ">
        <div className="relative max-w-5xl w-full">

          <div className="absolute inset-0 z-0 rounded-3xl bg-white/60 dark:bg-zinc-900 border border-white/30 dark:border-zinc-800/40 shadow-lg ring-1 ring-white/20 dark:ring-zinc-800/20 animate-in fade-in duration-1000 ease-out" />

          {/* Inhalt */}
          <div className="relative z-10 text-center px-6 sm:px-10 py-8">
            {preTitle && (
              <AnimatedElement delay={0.1}>
                <Badge variant="secondary" className="text-sm sm:text-base md:text-xl px-3 sm:px-2 py-4 ">
                  {preTitle}
                </Badge>
              </AnimatedElement>
            )}

            <AnimatedElement delay={0.2}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl 2xl:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                {mainTitle}{" "}
                <span
                  className={cn(
                    "relative inline-block whitespace-nowrap",
                    highlightColor ?? "text-amber-400"
                  )}
                >
                  <span className="relative z-10">{highlightedWord}</span>
                  <span
                    className={`absolute left-0 lg:bottom-[${scribbleBottomOffset || '.5em'}] sm:bottom-[-0.1em] bottom-[0.2em] w-full z-0 pointer-events-none`}
                    aria-hidden
                  >
                    <ScribbleAnimation />
                  </span>
                </span>
                {finalWords && (
                  <>
                    <div className="h-2 sm:h-3 md:h-4" />
                    <span className="block">{finalWords}</span>
                  </>
                )}
              </h1>
            </AnimatedElement>

            <AnimatedElement delay={0.3}>
              <p className={`sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl text-muted-foreground max-w-4xl mx-auto leading-relaxed ${subtitleMarginTop || 'mt-4 sm:mt-6'}`}>
                {subtitle}
              </p>
            </AnimatedElement>
          </div>
        </div>
      </div>

      {/* CTA section - positioned at bottom but within viewport */}
      <div className="flex items-center justify-center pb-4 sm:pb-6 lg:pb-8 mt-auto">
        <AnimatedElement delay={0.5}>
          <div className="flex flex-col gap-3 sm:gap-4 items-center">
       


                  <StepButton
                    buttonLabel={buttonText}
                    buttonAction={buttonAction}
                    variant="cta"
                  />
                
     
            <MehrErfahren
              MehrErfahrenButtonLabel={MehrErfahrenButtonLabel}
              MehrErfahrenTarget={MehrErfahrenTarget}
            />
          </div>
        </AnimatedElement>
      </div>
    </section>
  )
}