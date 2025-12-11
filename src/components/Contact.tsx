'use client';

import { motion } from 'motion/react';
import { useEffect, useMemo, useState } from 'react';

import { ConsultationForm } from './ConsultationForm';

const highlights = [
 
  { label: 'Live Panels', value: '100+' },
  { label: 'Coverage', value: '4 Districts' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

export function Contact() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const raf = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section
      id="contact"
      className="relative flex min-h-[50vh] flex-col justify-center overflow-hidden  py-24 lg:min-h-screen"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-100 to-gray-200" />
      <PixelGrid mounted={mounted} />
      {/* <div className="absolute inset-y-0 left-0 hidden w-1/3 bg-gradient-to-b from-[#ff7a45]/30 to-transparent lg:block" /> */}
      {/* <div className="absolute inset-y-0 right-0 hidden w-1/4 bg-gradient-to-t from-[#ffd89c]/30 to-transparent lg:block" /> */}
      {/* <div className="absolute top-0 left-0 hidden lg:block">
        <img src="/shape-1.svg" alt="" />
      </div> */}

      <div className="absolute -left-9 bottom-0 hidden  lg:block">
        {/* <CornerDecoration /> */}
        <img src="/b-s-2.svg" className='h-screen opacity-10' alt="" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
        <motion.div
          className="mb-12 max-w-3xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          <motion.span className="text-xs tracking-[0.35em] text-[#ff5f2f] uppercase" variants={fadeUp}>
            Let&apos;s collaborate
          </motion.span>
          <motion.h2 className="mt-4 text-4xl font-semibold text-[#1c1c1c] md:text-5xl" variants={fadeUp}>
            Ready to orchestrate your next out-of-home moment?
          </motion.h2>
          <motion.p className="mt-4 text-lg text-[#555555]" variants={fadeUp}>
            Tell us about your campaign goals, target audiences, and timelines. We&apos;ll craft a DOOH plan that blends premium
            inventory, contextual storytelling, and measurable outcomes.
          </motion.p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            className="relative overflow-hidden rounded-3xl border border-white/40 bg-white/80 p-8 shadow-2xl backdrop-blur"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <div className="relative z-10 space-y-6">
              <div>
                <h3 className="text-2xl font-semibold text-[#1a1a1a]">Contact Intelligence</h3>
                <p className="mt-2 text-sm tracking-[0.3em] text-[#b35c25] uppercase">Always-on support</p>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                {highlights.map(highlight => (
                  <motion.div
                    key={highlight.label}
                    className="rounded-2xl border border-[#f2d4c2] bg-white/70 p-4 text-center shadow-md"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <p className="text-xs tracking-[0.35em] text-[#b35c25] uppercase">{highlight.label}</p>
                    <p className="mt-2 text-2xl font-semibold text-[#1f1f1f]">{highlight.value}</p>
                  </motion.div>
                ))}
              </div>

              <div className="space-y-4 text-sm text-[#333333]">
                <div>
                  <p className="text-xs tracking-[0.3em] text-[#b35c25] uppercase">Say Hello</p>
                  <a href="mailto:hello@chutneyads.com" className="text-lg font-medium text-[#1f1f1f]">
                    hello@chutneyads.com
                  </a>
                </div>
                <div>
                  <p className="text-xs tracking-[0.3em] text-[#b35c25] uppercase">Call Us</p>
                  <a href="tel:+8801800000000" className="text-lg font-medium text-[#1f1f1f]">
                    +880 18 0000 0000
                  </a>
                </div>
                <div>
                  <p className="text-xs tracking-[0.3em] text-[#b35c25] uppercase">Studio</p>
                  <p className="text-lg font-medium text-[#1f1f1f]">Dhaka, Bangladesh</p>
                </div>
              </div>
            </div>

            <div className="absolute inset-0 opacity-40">
              <div className="absolute inset-0 bg-gradient-to-br from-[#ffecd8] via-transparent to-transparent" />
            </div>
          </motion.div>

          <motion.div
            className="rounded-3xl border border-[#f0f0f0] bg-white/90 p-8 shadow-xl backdrop-blur"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <ConsultationForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function PixelGrid({ mounted }: { mounted: boolean }) {
  const pixels = useMemo(() => {
    const list: Array<{ id: string; delay: number; opacity: number; size: number }> = [];
    for (let index = 0; index < 120; index += 1) {
      const row = Math.floor(index / 12);
      const col = index % 12;
      list.push({
        id: `${row}-${col}`,
        delay: ((row + col) % 6) * 0.15,
        opacity: 0.2 + ((row + col) % 4) * 0.1,
        size: 8 + ((row * 3 + col) % 4) * 6,
      });
    }
    return list;
  }, []);

  return (
    <div className="absolute inset-0 grid grid-cols-12 gap-2 p-8">
      {pixels.map(pixel => (
        <div
          key={pixel.id}
          className={`rounded-sm bg-white transition-all duration-1000 ${mounted ? 'scale-100' : 'scale-0'}`}
          style={{
            opacity: pixel.opacity,
            transitionDelay: `${pixel.delay}s`,
            width: pixel.size,
            height: pixel.size,
          }}
        />
      ))}
    </div>
  );
}

