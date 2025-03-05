// src/components/Animation/AnimatedElement.tsx

'use client'
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedMainHeroProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export default function AnimatedMainHero({ children, className, id }: AnimatedMainHeroProps) {
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}