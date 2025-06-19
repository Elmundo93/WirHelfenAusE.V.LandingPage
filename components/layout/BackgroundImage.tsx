'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import DankeSagen from '@/public/images/DankeSagen.svg'

export default function BackgroundImage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.08 }}
      transition={{ duration: 1.8, ease: 'easeOut' }}
      className="fixed inset-0 -z-10 pointer-events-none select-none"
      aria-hidden="true"
    >
      <Image
        src={DankeSagen}
        alt="Dekoratives Hintergrundbild: Helfende Menschen"
        fill
        priority
        className="object-cover"
      />
    </motion.div>
  )
}