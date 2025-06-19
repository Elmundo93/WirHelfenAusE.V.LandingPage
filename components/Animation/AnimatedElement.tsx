// src/components/Animation/AnimatedElement.tsx

'use client'
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedElementProps {
  children: ReactNode;
  className?: string;
  id?: string;
  delay?: number;
}

export default function AnimatedElement({ children, className, id, delay = 0 }: AnimatedElementProps) {
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 1, delay }}
      className={className}
      
    >
      {children}
    </motion.div>
  );
}