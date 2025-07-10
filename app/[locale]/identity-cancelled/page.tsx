'use client'

import { useEffect } from 'react'
import { AlertTriangle } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function IdentityCancelledPage() {
  useEffect(() => {
    const timeout = setTimeout(() => {
      window.location.href = 'aushilfapp://onboarding/verify-identity-cancelled'
    }, 4000)

    return () => clearTimeout(timeout)
  }, [])

  const handleManualRedirect = () => {
    window.location.href = 'aushilfapp://onboarding/verify-identity-cancelled'
  }

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-amber-50 via-white to-amber-100 px-6 py-12 text-center font-sans">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[60%] top-[10%] w-[500px] h-[500px] bg-red-200 opacity-30 rounded-full blur-[80px] animate-pulse" />
        <div className="absolute right-[65%] bottom-[15%] w-[400px] h-[400px] bg-yellow-100 opacity-20 rounded-full blur-[100px] animate-pulse" />
      </div>

      <section className="bg-white/80 backdrop-blur-sm border border-red-100 rounded-3xl shadow-xl p-10 max-w-md space-y-6 animate-fade-in-up">
        <div className="flex justify-center">
          <AlertTriangle className="h-16 w-16 text-red-500 drop-shadow-md" />
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">
          Verifikation abgebrochen
        </h1>
        <p className="text-lg text-gray-600">
          Du kannst den Vorgang in der App erneut starten.
        </p>

        <div className="mt-4">
          <div className="h-2 w-full bg-red-200 rounded-full overflow-hidden">
            <div className="h-full bg-red-400 animate-progress w-1/3" />
          </div>
        </div>

        <div className="pt-4">
          <Button
            onClick={handleManualRedirect}
            className="bg-red-500 hover:bg-red-600 text-white shadow-md"
          >
            Zur App zurückkehren
          </Button>
        </div>
      </section>
    </main>
  )
}