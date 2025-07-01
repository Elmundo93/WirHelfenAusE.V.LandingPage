'use client'

import { useRouter } from 'next/navigation'
import { useLocale } from 'next-intl'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export type ButtonAction =
  | { type: 'scroll'; target: string; offset?: number }
  | { type: 'open'; url: string; target?: string }
  | { type: 'navigate'; target: string }

export interface StepButtonProps {
  buttonLabel: string
  buttonAction: ButtonAction
  variant?: 'cta' | 'next'
  extraClasses?: string
  buttonActionOffset?: number
}

export default function StepButton({
  buttonLabel,
  buttonAction,
  variant = 'cta',
  extraClasses = '',
  buttonActionOffset = 0,
}: StepButtonProps) {
  const router = useRouter()
  const locale = useLocale()

  const handleClick = () => {
    if (buttonAction.type === 'scroll') {
      setTimeout(() => {
        const el = document.querySelector(buttonAction.target)
        if (el) {
          const y = el.getBoundingClientRect().top + window.scrollY - (buttonActionOffset || 0)
          window.scrollTo({ top: y, behavior: 'smooth' })
        }
      }, 200)
    } else if (buttonAction.type === 'open') {
      window.open(buttonAction.url, buttonAction.target || '_blank')
    } else if (buttonAction.type === 'navigate') {
      router.replace(`/${locale}${buttonAction.target}`)
    }
  }

  return (
    <Button
      onClick={handleClick}
      variant={variant === 'cta' ? 'default' : 'ghost'}
      className={cn(
        'text-3lg md:text-2xl rounded-full shadow-lg px-6 py-4 transition-all group p-6',
        variant === 'cta'
          ? 'bg-gradient-to-r from-amber-400 to-amber-500 text-white hover:from-amber-500 hover:to-amber-600 shadow-amber-200/50 hover:shadow-amber-300/50 border border-amber-300/30'
          : 'text-gray-700 hover:text-amber-500 hover:bg-amber-50/50 border border-amber-200/30',
        extraClasses
      )}
    >
      <span className="relative z-10">{buttonLabel}</span>
    </Button>
  )
}