'use client';

import type { ReactNode } from 'react';
import { motion } from 'motion/react';

import { BackgroundRippleEffect } from './ui/background-ripple-effect';

const containerVariants = {
  hidden: {
    opacity: 0,
    y: 32,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

export function Title({ children, subtitle }: { children: ReactNode; subtitle?: ReactNode }) {
  return (
    <motion.div
      className="relative flex w-full flex-col items-start justify-start overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={containerVariants}
    >
      <BackgroundRippleEffect />
      <div className="mt-20 w-full">
        <motion.h2
          className="relative z-10 mx-auto max-w-4xl text-center text-2xl font-bold text-neutral-800 md:text-4xl lg:text-5xl dark:text-neutral-100"
          variants={containerVariants}
          transition={{ delay: 0.05 }}
        >
          {children}
        </motion.h2>
        <motion.p
          className="relative z-10 mx-auto mt-4 max-w-lg text-center text-[24px] text-neutral-800 dark:text-neutral-500"
          variants={containerVariants}
          transition={{ delay: 0.15 }}
        >
          {subtitle}
        </motion.p>
      </div>
    </motion.div>
  );
}
