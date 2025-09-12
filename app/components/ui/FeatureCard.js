"use client"
import { cn } from '@/app/lib/utils';
import Card, { CardContent } from './Card';
import { motion } from 'framer-motion';

export default function FeatureCard({ 
  icon, 
  title, 
  description, 
  className = '',
  ...props 
}) {
  

  return (
    <motion.div
    className=' h-full'
    initial={{ opacity: 0, y: 50, scale: 0.9 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true, amount: 0.1 }}
    transition={{
      duration: 0.6,
      ease: "easeOut",
    }}
    whileHover={{
      scale: 1.02,
    }}>
    <Card  className="bg-gradient-to-br from-[#f75760] to-[#954ffd] text-white h-full" {...props}>
      <CardContent className="p-6">
        <div className={cn(
          'w-16 h-16 rounded-xl flex items-center justify-center ',
         
        )}>
          {icon}
        </div>
        <h3 className="md:text-2xl text-xl font-bold  mb-4">{title}</h3>
        <p className="">{description}</p>
      </CardContent>
    </Card>
    </motion.div>
  );
}