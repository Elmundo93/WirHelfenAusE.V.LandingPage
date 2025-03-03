// src/components/Buttons/MehrErfahren.tsx

"use client";
import dynamic from "next/dynamic";
import { handleScroll } from "../util/handleScroll";
import animationData from "@/public/animation/RightArrow.json"; // ✅ Import JSON directly

const LottieView = dynamic(() => import("lottie-react"), { ssr: false });

interface MehrErfahrenProps {
  MehrErfahrenButtonLabel: string;
  MehrErfahrenTarget: string;
}

export default function MehrErfahren({ MehrErfahrenButtonLabel, MehrErfahrenTarget }: MehrErfahrenProps) {
  return (
    <div className="flex flex-col justify-center items-center group cursor-pointer">
      <a className="justify-center group cursor-pointer" onClick={() => handleScroll(MehrErfahrenTarget)}>
        <div className="flex flex-col pb-4 border-b border-gray-200">
          <p className="text-2xl text-gray-500">
            <span className="relative">
              {MehrErfahrenButtonLabel}
              <span className="absolute left-0 bottom-[-18px] w-full h-0.5 bg-amber-500 origin-center transform scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
            </span>
          </p>
        </div>
        <div className="flex justify-center">
          <LottieView
            animationData={animationData} // ✅ Pass JSON, not a component
            loop
            className="flex justify-center rotate-90 w-32 h-32"
          />
        </div>
      </a>
    </div>
  );
}