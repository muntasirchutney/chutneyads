'use client';

import { motion } from 'motion/react';
import Link from 'next/link';

import { ContainerTextFlip } from './ui/container-text-flip';

const heroVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">
      <motion.img
        src="/bg.png"
        alt="hero"
        className="absolute top-0 right-0 h-full max-w-[42.7%]"
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.1, ease: 'easeOut' }}
      />
      <motion.img
        src="/shape-1.svg"
        alt=""
        className="absolute top-0 left-0"
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 0.8, x: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      />
      {/* <motion.img
        src="/shape-3.svg"
        alt=""
        className="absolute bottom-10 -left-14 w-[150px] -rotate-90"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 0.9, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
      /> */}
      <div className="mx-auto h-full w-full content-center align-middle xl:max-w-[1200px] 3xl:max-w-[1400px]">
        <motion.div
          className="max-w-1/2 font-sans"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.15 },
            },
          }}
        >
          <motion.img src="/logo.svg" alt="logo" className="mb-10 h-[70px]" variants={heroVariants} />
          <motion.div className="text-[48px] leading-[1.3]" variants={heroVariants}>
            Amplify Your Brand&apos;s Voice in the Heart of
            {' '}
            <strong>Bangladesh&apos;s</strong>
            <br />
            <ContainerTextFlip words={['Better', 'Modern', 'Awesome']} />
            {' '}
            Marketplaces
          </motion.div>
          <motion.p className="mt-6 text-lg leading-[1.6] text-[#666666]" variants={heroVariants}>
            Engage with Strategic, Real-Time DOOH Advertising
          </motion.p>
          <motion.div variants={heroVariants}>
            <Link href="/contact" className="btn inline-flex items-center justify-center">
              Contact Us
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
