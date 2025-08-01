// src/components/Animation/AnimatedElement.tsx

'use client'
import { motion } from 'framer-motion';
import { ReactNode, useEffect, useState } from 'react';

interface AnimatedMainHeroProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export default function AnimatedMainHero({ children, className, id }: AnimatedMainHeroProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // No delay - start animation immediately
    setIsLoaded(true);
  }, []);

  return (
    <motion.div
      id={id}
      initial={{ opacity: 0 }}
      animate={isLoaded ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 2.5, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}