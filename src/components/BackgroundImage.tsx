'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import DankeSagen from '../../public/images/DankeSagen.svg'


export default function BackgroundImage() { 

return (

<motion.div
initial={{ opacity: 0 }}
animate={{ opacity: 0.1 }}
transition={{ duration: 2 }}
className="fixed inset-0 z-1 h-full"

>
<Image
  src={DankeSagen}
  alt="Helfende Menschen"
  fill
  style={{ objectFit: 'cover' }}
  priority
/>
</motion.div>
)
}