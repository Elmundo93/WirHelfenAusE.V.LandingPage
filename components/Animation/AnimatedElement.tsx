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

export default function AnimatedElement({ children, className, id, delay = 0, disableAnimation = false }: AnimatedElementProps) {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // No delay - start animation immediately
    setIsReady(true);
  }, []);

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
          delay: delay, // Only use the delay prop if provided
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