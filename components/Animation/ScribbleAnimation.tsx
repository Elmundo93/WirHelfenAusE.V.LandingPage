"use client"

export default function ScribbleAnimation() {
  return (
    <span className="absolute left-0 bottom-[-50px] w-full lg:bottom-[-80px] mdbottom-[-80px] opacity-20">
      {/* Decorative element replacing Lottie animation */}
      <div className="w-full h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent transform -skew-x-12" />
    </span>
  );
}