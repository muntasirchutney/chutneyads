'use client';

import { motion } from 'motion/react';

export const Banner = () => {
  return (
    <section className="mt-[-15px] flex h-[800px] items-center justify-center bg-cover bg-center bg-[url('/bg-2.png')]">
      <motion.h3
        className="max-w-[1100px] p-10 text-center text-4xl leading-[1.5] text-white"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        ChutneyAds pioneers the transformation from traditional Out-of-Home to Digital Out-of-Home advertising, with a
        network of 100+ Digital Display Panels strategically placed across Dhaka.
      </motion.h3>
    </section>
  );
};
