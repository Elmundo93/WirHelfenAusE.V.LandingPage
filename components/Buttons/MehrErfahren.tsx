'use client'

import { handleScroll } from '../util/handleScroll'
import { Button } from '@/components/ui/button'
import { ChevronDown } from 'lucide-react'

interface MehrErfahrenProps {
  MehrErfahrenButtonLabel: string
  MehrErfahrenTarget: string
  MehrErfahrenTargetOffset?: number
}

export default function MehrErfahren({
  MehrErfahrenButtonLabel,
  MehrErfahrenTarget,
  MehrErfahrenTargetOffset = 0,
}: MehrErfahrenProps) {
  return (
    <div className="flex flex-col items-center gap-2 group my-4 ">
      <Button
        variant="ghost"
        onClick={() => handleScroll(MehrErfahrenTarget, MehrErfahrenTargetOffset)}
        className="text-2xl text-gray-600 relative px-0 hover:bg-white"
      >
        <span className="relative">
          {MehrErfahrenButtonLabel}
          <span className="absolute left-0 bottom-[-4px] w-full h-0.5 bg-amber-500 origin-center transform scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100" />
        </span>
      </Button>

      <div className="flex justify-center">
        <ChevronDown className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 text-gray-400 animate-bounce" />
      </div>
    </div>
  )
}