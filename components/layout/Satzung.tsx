// components/layout/SatzungLayout.tsx
import { ReactNode } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import AnimatedElement from "@/components/Animation/AnimatedElement"
import BackButton from "@/components/layout/BackButton"
import ScribbleAnimation from "@/components/Animation/ScribbleAnimation"

export default function SatzungLayout({ children }: { children: ReactNode }) {
  return (
    <section className="min-h-screen bg-muted/50 relative">
      {/* Dekorativer Hintergrund */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <ScribbleAnimation />
      </div>

      {/* Inhalt */}
      <AnimatedElement>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 pt-32 pb-24">
          <BackButton />

          <Card className="bg-background/90 backdrop-blur-md border border-muted-foreground/10 rounded-2xl shadow-xl">
            <CardContent className="prose prose-lg max-w-none px-6 py-10 md:px-10 md:py-12">
              {children}
              <Separator className="my-10" />
              <p className="text-center text-sm text-muted-foreground">
                Dieser Ausschnitt enthält nur öffentlich relevante Passagen.<br />
                Für die vollständige Satzung kontaktieren Sie uns bitte.
              </p>
            </CardContent>
          </Card>
        </div>
      </AnimatedElement>
    </section>
  )
}