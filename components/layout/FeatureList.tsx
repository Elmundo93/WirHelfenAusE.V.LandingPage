// components/features/FeatureList.tsx
import Image, { StaticImageData } from 'next/image';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';

export type FeatureItem = {
  title: string;
  description: string;
  icon: StaticImageData;
  delay?: number;
};

type Props = {
  items: FeatureItem[];
  className?: string;
};

export default function FeatureList({ items, className }: Props) {
  return (
    <div
      className={cn(
        'grid max-w-sm mx-auto gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-12 md:max-w-2xl lg:max-w-none',
        className
      )}
    >
      {items.map((item, index) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: item.delay ?? index * 0.1 }}
        >
          <Card className="backdrop-blur-xl bg-white/50 shadow-lg border-none">
            <CardContent className="flex flex-col items-center text-center p-6 space-y-4">
              <Image src={item.icon} alt={item.title} width={64} height={64} className="w-16 h-16" />
              <h4 className="text-xl font-semibold">{item.title}</h4>
              <p className="text-muted-foreground text-sm">{item.description}</p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}