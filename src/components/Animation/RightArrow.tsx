"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import { useEffect } from "react";

const LottieView = dynamic(() => import("lottie-react").then((mod) => mod.default), { ssr: false });


export default function RightArrow() {
  const [animationData, setAnimationData] = useState(null);

  async function loadAnimation() {
    try {
      const res = await fetch("/animations/RightArrow.json");
      console.log("Fetch Response:", res);
  
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
  
      const data = await res.json();
      console.log("Fetched Animation Data:", data);
  
      if (!data || !data.layers) {
        console.error("Invalid animation data (Missing layers):", data);
        return;
      }
  
      setAnimationData(data);
    } catch (error) {
      console.error("Error loading animation:", error);
    }
  }
  
  useEffect(() => {
    loadAnimation();
  }, []);

  return (
    <span className="absolute left-0 bottom-[-60px] w-full lg:bottom-[-90px] md:bottom-[-90px]">
      {LottieView && (
        <LottieView
          animationData={animationData}
          loop={false}
          autoplay
          style={{ width: "100%", height: "auto" }}
          className="z-[-1]"
          aria-hidden="true"
        />
      )}
    </span>
  );
}