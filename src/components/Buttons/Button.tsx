'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

export type ButtonAction =
  | { type: 'scroll'; target: string; offset?: number }
  | { type: 'open'; url: string; target?: string }
  | { type: 'navigate'; target: string };

export interface StepButtonProps {
  buttonLabel: string;
  buttonAction: ButtonAction;
  variant?: 'cta' | 'next';
  extraClasses?: string;
}

const StepButton: React.FC<StepButtonProps> = ({
  buttonLabel,
  buttonAction,
  variant,
  extraClasses = '',
}) => {
  const router = useRouter();

  const handleClick = () => {
    if (buttonAction.type === 'scroll') {
      setTimeout(() => {
        const targetEl = document.querySelector(buttonAction.target);
        if (targetEl) {
          const elementPosition = targetEl.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({ top: elementPosition - (buttonAction.offset || 0), behavior: 'smooth' });
        }
      }, 200);
    } else if (buttonAction.type === 'open') {
      window.open(buttonAction.url, buttonAction.target || '_blank');
    } else if (buttonAction.type === 'navigate') {
      router.replace(buttonAction.target);
    }
  };

  let baseClasses = '';
  let innerSpanClasses = 'relative z-10';
  let backgroundElement = null;

  if (variant === 'cta') {
    baseClasses =
      'overflow-hidden inline-block px-4 py-3 border border-gray-600 rounded-full transition-colors duration-200 hover:text-white hover:border-amber-400 text-2xl text-gray-700 shadow-lg mobile-pulse mx-2';
    backgroundElement = (
      <span className="absolute inset-0 bg-amber-400 transform translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0 z-0" />
    );
  } else if (variant === 'next') {
    baseClasses = 'cursor-pointer inline-block whitespace-nowrap px-4 py-2';
    innerSpanClasses = 'relative font-semibold text-gray-500 text-2xl';
    backgroundElement = (
      <span className=" absolute left-0 bottom-[-20px] w-full h-1 
                        bg-amber-400 origin-center transform scale-x-0 
                        transition-transform duration-300 ease-out 
                        group-hover:scale-x-100 rounded-full  " />
    );
  }

  return (
    <button
      onClick={handleClick}
      className={`relative group  w-fit self-center ${baseClasses} ${extraClasses}`}
    >
      <span className={innerSpanClasses}>{buttonLabel}</span>
      {backgroundElement}
    </button>
  );
};

export default StepButton;