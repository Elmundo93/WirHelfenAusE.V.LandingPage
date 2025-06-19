"use client"

import dynamic from 'next/dynamic';
import animationData from "@/public/animation/ScribbleLine.json";

const LottieView = dynamic(() => import("lottie-react").then((mod) => mod.default), { ssr: false });

console.log(animationData);

export default function ScribbleAnimation() {

  return (
    <span className="absolute left-0 bottom-[-50px] w-full lg:bottom-[-80px] mdbottom-[-80px] ">
      <LottieView
        animationData={animationData}
        loop={false}
        autoplay
        style={{ width: '100%', height: 'auto' }}
        className="z-[-1]"
        aria-hidden="true"
      />
    </span>
  );
}