'use client'

import { useRouter } from 'next/navigation'
import { useLocale } from 'next-intl'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Home } from 'lucide-react'

import { cn } from '@/lib/utils'

interface BackButtonProps {
  href?: string
  label?: string
  showHome?: boolean
  className?: string
}

export default function BackButton({
  href,
  label = "Zurück",
  showHome = false,
  className
}: BackButtonProps) {
  const router = useRouter()
  const locale = useLocale()

  const handleClick = () => {
    if (href) {
      router.push(`/${locale}${href}`)
    } else {
      router.back()
    }
  }

  return (
    <div className={cn("flex items-center gap-3 mb-6", className)}>
      <Button
        onClick={handleClick}
        variant="ghost"
        size="lg"
        className="group relative overflow-hidden rounded-full bg-background/80 backdrop-blur-sm border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-amber-50 hover:border-amber-200 dark:hover:bg-amber-900/20 dark:hover:border-amber-700/50"
      >
        <div className="flex items-center gap-2 px-4 py-2">
          <ArrowLeft className="w-5 h-5 text-muted-foreground group-hover:text-amber-600 transition-colors duration-300 group-hover:-translate-x-1" />
          <span className="text-foreground group-hover:text-amber-700 font-medium transition-colors duration-300">
            {label}
          </span>
        </div>
        
        {/* Animated background effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-amber-400/0 via-amber-400/10 to-amber-400/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
      </Button>

      {showHome && (
        <Button
          onClick={() => router.push(`/${locale}/`)}
          variant="ghost"
          size="icon"
          className="group relative overflow-hidden rounded-full bg-background/80 backdrop-blur-sm border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-amber-50 hover:border-amber-200 dark:hover:bg-amber-900/20 dark:hover:border-amber-700/50"
        >
          <Home className="w-5 h-5 text-muted-foreground group-hover:text-amber-600 transition-colors duration-300" />
          
          {/* Animated background effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-amber-400/0 via-amber-400/10 to-amber-400/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
        </Button>
      )}
    </div>
  )
} 