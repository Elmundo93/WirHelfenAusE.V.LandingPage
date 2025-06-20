'use client'

import dynamic from 'next/dynamic'
import { handleScroll } from '../util/handleScroll'
import animationData from '@/public/animation/RightArrow.json'
import { Button } from '@/components/ui/button'

const LottieView = dynamic(() => import('lottie-react'), { ssr: false })

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
        <LottieView
          animationData={animationData}
          loop
          className="w-18 h-18 sm:w-22 sm:h-22 md:w-24 md:h-24 lg:w-28 lg:h-28 rotate-90"
          aria-hidden="true"
        />
      </div>
    </div>
  )
}