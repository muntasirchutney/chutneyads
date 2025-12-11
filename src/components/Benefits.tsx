'use client';

import { motion } from 'motion/react';

import { Title } from './Title';

const targetingPoints = [
  {
    title: 'Targeting & Personalization',
    description:
      'Utilize advanced targeting based on location data, demographics, and time to reach hyper-specific customer profiles.',
  },
  {
    title: 'Consumer Interaction',
    description:
      'Leverage QR codes, AR, and touch-ready displays to convert passive viewers into engaged participants and customers.',
  },
  {
    title: 'Cost-Effectiveness',
    description:
      'Invest in flexible digital canvases that deliver higher ROI and can be redeployed or updated without production waste.',
  },
];

const visibilityHighlights = [
  {
    title: 'Engagement & Visibility',
    description:
      'High-resolution, dynamic displays capture up to 400% more views than static placements while blending into the urban journey.',
  },
  {
    title: 'Content Flexibility',
    description:
      'Update messaging instantly in response to events or dayparts so you always deliver the most relevant creative.',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

export const Benefits = () => {
  return (
    <motion.section
      className="relative overflow-hidden bg-white pb-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.15 } },
      }}
    >
      <div className="pointer-events-none absolute top-0 -right-16 hidden h-64 w-64 rounded-full bg-[#ffe1d7] blur-3xl lg:block" />
      <div className="pointer-events-none absolute bottom-4 -left-10 hidden h-52 w-52 rounded-full bg-[#fff5e8] blur-3xl lg:block" />
      <div className="absolute -left-8  bottom-0 hidden  lg:block opacity-40">

        <img src="/shape-1.svg" className='h-screen' alt="" />
      </div>
      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 md:px-10">
        <Title subtitle="The DOOH canvas lets you mix storytelling, technology, and precision reach in real time.">Benefits</Title>

        <div className="mt-16 flex flex-col gap-20 relative">
          <motion.div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]" variants={fadeUp}>
            <div className="space-y-8 text-lg text-[#444444]">
              <div>
                <p className="text-xs font-semibold tracking-[0.4em] text-[#ff5f2f] uppercase">Precision DOOH</p>
                <h3 className="mt-4 text-[32px] font-semibold text-[#1c1c1c]">Targeting & Personalization</h3>
                <p className="mt-2 text-base leading-relaxed text-[#5a5a5a]">
                  Blend geo-context, dayparting, and device-level insights to serve the right story on the right panel exactly when
                  your audience is most receptive.
                </p>
              </div>
              <ul className="space-y-6">
                {targetingPoints.map(point => (
                  <motion.li key={point.title} className="leading-relaxed" variants={fadeUp}>
                    <span className="font-semibold text-[#111111]">
                      {point.title}
                      :
                    </span>
                    {' '}
                    {point.description}
                  </motion.li>
                ))}
              </ul>
            </div>
            <motion.div className="relative flex justify-end" variants={fadeUp} transition={{ delay: 0.1 }}>
              <div className="relative w-full overflow-hidden max-w-[420px] h-[500px] overflow-hidden rounded-[36px] border border-[#f3f3f3] bg-[#fafafa] p-4 shadow-[0_25px_60px_rgba(0,0,0,0.08)]">
                <img
                  src="/im1.png"
                  alt="Digital display engaging an outdoor audience"
                  className="h-full w-full rounded-[28px] object-cover"
                />
              </div>
              {/* <PixelAccent className="absolute -bottom-6 left-6" /> */}
             
            </motion.div>
          </motion.div>

          <motion.div className="grid items-center gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]" variants={fadeUp}>
            <motion.div className="relative order-2 lg:order-1" variants={fadeUp} transition={{ delay: 0.1 }}>
              <div className="relative w-full max-w-[420px] h-[500px] overflow-hidden rounded-[36px] border border-[#f3f3f3] bg-[#fafafa] p-4 shadow-[0_25px_60px_rgba(0,0,0,0.08)]">
                <img
                  src="/im2.png"
                  alt="Interactive signage experience inside a retail location"
                  className="h-full w-full rounded-[28px] object-fit"
                />
              </div>
              
            </motion.div>
            <motion.div className="order-1 space-y-7 text-lg text-[#444444] lg:order-2" variants={fadeUp}>
              <p className="text-sm font-semibold tracking-[0.35em] text-[#f2542d] uppercase">
                Benefits of Digital Out-of-Home (DOOH) Advertising
              </p>
              <h3 className="text-[32px] leading-snug font-semibold text-[#1c1c1c]">
                Blend immersive visuals with dynamic scheduling to stay relevant at every moment.
              </h3>
              <ul className="space-y-6">
                {visibilityHighlights.map(point => (
                  <motion.li key={point.title} className="leading-relaxed" variants={fadeUp}>
                    <span className="font-semibold text-[#111111]">
                      {point.title}
                      :
                    </span>
                    {' '}
                    {point.description}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
          
        </div>
      </div>
    </motion.section>
  );
};

function PixelAccent({ className = '' }: { className?: string }) {
  const palette = ['#ff5f2f', '#ff8a3c', '#ffb85c', '#ffe6a3'];
  const cells: Array<{ id: string; color: string; opacity: number }> = [];

  for (let row = 0; row < 4; row += 1) {
    for (let col = 0; col < 4; col += 1) {
      cells.push({
        id: `${row}-${col}`,
        color: palette[row],
        opacity: 1 - col * 0.15,
      });
    }
  }

  return (
    <div className={`grid grid-cols-4 gap-[3px] ${className}`}>
      {cells.map((cell, index) => (
        <span
          key={cell.id}
          className="block h-3 w-3 rounded-[4px]"
          style={{
            backgroundColor: cell.color,
            opacity: cell.opacity,
            transitionDelay: `${index * 10}ms`,
          }}
        />
      ))}
    </div>
  );
}
