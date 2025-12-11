'use client';

import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

import DistrictMap from './Map';

type DistrictData = {
  name: string;
  area: number;
  population: string;
  density: string;
};

const districts: DistrictData[] = [
  { name: 'Uttara', area: 69, population: '2.1M', density: '30.5K' },
  { name: 'Mirpur', area: 96, population: '1.2M', density: '12.3K' },
  { name: 'Mohammadpur', area: 10, population: '743K', density: '78.1K' },
  { name: 'Dhanmondi', area: 11, population: '470K', density: '42K' },
];

const ImpactCoverage = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  const totalArea = districts.reduce((sum, d) => sum + d.area, 0);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-amber-500 via-orange-500 to-amber-600"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.05)_0%,transparent_50%)]" />

      <div className="relative mx-auto max-w-7xl py-16 sm:px-6 lg:px-8 lg:py-24">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h1 className="mb-6 text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">IMPACT & COVERAGE</h1>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-white/90 md:text-xl">
            Serving the bustling neighborhoods of Uttara, Mirpur, Mohammadpur, and Dhanmondi, we are positioned to deliver over 1
            Billion impressions monthly.
          </p>
        </motion.div>

        <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-10">
          <motion.div
            className="rounded-2xl border border-white/20 bg-white/10 p-6 shadow-2xl backdrop-blur-sm md:p-8"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
          >
            <h2 className="mb-6 text-2xl font-bold text-white md:text-3xl">OUR CURRENT COVERAGE</h2>

            <div className="mb-8 flex flex-wrap gap-3">
              {districts.map((district, index) => (
                <motion.div
                  key={district.name}
                  className="group"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={
                    isInView
                      ? { opacity: 1, scale: 1, transition: { delay: 0.2 + index * 0.08, duration: 0.4 } }
                      : { opacity: 0, scale: 0.8 }
                  }
                >
                  <div className="rounded-lg border border-white/30 bg-white/20 px-4 py-2 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-white/30 hover:shadow-lg">
                    <span className="font-medium text-white">{district.name}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="overflow-hidden rounded-xl border border-white/20 shadow-xl">
              <table className="w-full">
                <thead>
                  <tr className="bg-white/20 backdrop-blur-md">
                    <th className="px-4 py-4 text-left text-sm font-bold text-white md:text-base">DISTRICT</th>
                    <th className="px-2 py-4 text-center text-sm font-bold text-white md:text-base">AREA (KM^2)</th>
                    <th className="px-2 py-4 text-center text-sm font-bold text-white md:text-base">POPULATION</th>
                    <th className="px-2 py-4 text-center text-sm font-bold text-white md:text-base">DENSITY (SQ KM)</th>
                  </tr>
                </thead>
                <tbody>
                  {districts.map((district, index) => (
                    <motion.tr
                      key={district.name}
                      className="border-t border-white/10 text-sm text-white transition-all duration-300 hover:bg-white/10 md:text-base"
                      initial={{ opacity: 0, x: -25 }}
                      animate={
                        isInView
                          ? { opacity: 1, x: 0, transition: { delay: 0.4 + index * 0.08, duration: 0.4 } }
                          : { opacity: 0, x: -25 }
                      }
                    >
                      <td className="px-4 py-4 font-medium">{district.name}</td>
                      <td className="px-2 py-4 text-center">{district.area}</td>
                      <td className="px-2 py-4 text-center">{district.population}</td>
                      <td className="px-2 py-4 text-center">{district.density}</td>
                    </motion.tr>
                  ))}
                  <tr className="border-t-2 border-white/30 bg-white/20 text-sm font-bold text-white md:text-base">
                    <td className="px-4 py-4">Total</td>
                    <td className="px-2 py-4 text-center">{totalArea}</td>
                    <td className="px-2 py-4 text-center">4.5M</td>
                    <td className="px-2 py-4 text-center">24.2K</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          >
            <DistrictMap />
          </motion.div>
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
        >
          <div className="mx-auto max-w-4xl rounded-2xl border border-white/20 bg-white/10 p-6 text-base text-white/95 shadow-2xl backdrop-blur-sm md:p-8 md:text-lg">
            Reach close to 70% of target residents with an effective ad frequency, ensuring high recall and brand safety within a
            trusted and transparent platform.
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ImpactCoverage;
