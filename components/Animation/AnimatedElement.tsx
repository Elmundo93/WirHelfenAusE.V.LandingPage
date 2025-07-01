// src/components/Animation/AnimatedElement.tsx

'use client'
import { motion } from 'framer-motion';
import { ReactNode, useEffect, useState } from 'react';

interface AnimatedElementProps {
  children: ReactNode;
  className?: string;
  id?: string;
  delay?: number;
  disableAnimation?: boolean;
  isExternalVisit?: boolean;
}

export default function AnimatedElement({ children, className, id, delay = 0, disableAnimation = false, isExternalVisit = false }: AnimatedElementProps) {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Only apply delay for external visits (not internal navigation)
    const baseDelay = isExternalVisit ? 800 : 100; // 0.8s for external, 0.1s for internal
    
    const timer = setTimeout(() => {
      setIsReady(true);
    }, baseDelay);

    return () => clearTimeout(timer);
  }, [isExternalVisit]);

  if (disableAnimation) {
    return (
      <div id={id} className={className}>
        {children}
      </div>
    );
  }

  return (
    <div className={className} style={{ minHeight: 'fit-content' }}>
      <motion.div
        id={id}
        initial={{ opacity: 0, y: 30 }}
        animate={isReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ 
          duration: 1, 
          delay: delay + (isExternalVisit ? 0.2 : 0), // Only add cascading delay for external visits
          ease: "easeOut"
        }}
        className="transform-gpu"
        style={{ 
          willChange: 'transform, opacity',
          backfaceVisibility: 'hidden'
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}