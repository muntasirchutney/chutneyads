'use client';

import { Eye, MousePointerClick, Smartphone } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const StatisticsSection = () => {
  const [animatedValues, setAnimatedValues] = useState<number[]>([0, 0, 0]);
  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  useEffect(() => {
    if (!isInView) return;

    const targets = [50, 54, 64];
    const durations = [2000, 2200, 2400];

    const intervals = targets.map((target, index) => {
      const startTime = Date.now() + index * 200;

      const id = window.setInterval(() => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / (durations[index] ?? 1), 1);
        const easeOut = 1 - (1 - progress) ** 3;

        setAnimatedValues((prev) => {
          const next = [...prev];
          next[index] = Math.floor(target * easeOut);
          return next;
        });

        if (progress === 1) {
          window.clearInterval(id);
        }
      }, 16);

      return id;
    });

    return () => {
      intervals.forEach((id) => window.clearInterval(id));
    };
  }, [isInView]);

  const stats = [
    {
      percentage: 50,
      title: 'Billboard Viewers',
      description: 'of digital billboard viewers will take notice',
      icon: Eye,
      color: 'from-orange-400 to-orange-600',
      badge: 'Awareness',
      gradientStops: ['#fb923c', '#f97316'],
    },
    {
      percentage: 54,
      title: 'Mobile Engagement',
      description: 'of viewers on mobile will scan QR or download app',
      icon: Smartphone,
      color: 'from-red-500 to-rose-600',
      badge: 'Mobile',
      gradientStops: ['#fb7185', '#e11d48'],
    },
    {
      percentage: 64,
      title: 'Action Taken',
      description: 'of viewers engaged in actions after noticing',
      icon: MousePointerClick,
      color: 'from-rose-600 to-red-700',
      badge: 'Conversion',
      gradientStops: ['#f43f5e', '#be123c'],
    },
  ];

  const highlightStat = stats[2];
  const actionValue = animatedValues[2] || 0;

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#fff8f5] via-white to-[#fff5f7]" />

      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 20%, rgba(251,146,60,0.25), transparent 40%), radial-gradient(circle at 80% 10%, rgba(244,63,94,0.25), transparent 42%), radial-gradient(circle at 50% 80%, rgba(248,113,113,0.2), transparent 45%)',
        }}
      />
      <div className="absolute inset-x-0 top-1/3 h-64 bg-gradient-to-r from-orange-200/50 via-transparent to-rose-100/40 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl space-y-10">
        <motion.div
          className="rounded-[28px] border border-white/80 bg-white/80 p-10 shadow-lg shadow-orange-100/70 backdrop-blur"
          initial={{ opacity: 0, y: -24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -24 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="mb-6 flex flex-wrap items-center gap-4">
            <span className="rounded-full bg-gradient-to-r from-orange-500/10 to-rose-500/20 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-rose-500">
              Live Performance Snapshot
            </span>
            <div className="h-px flex-1 bg-gradient-to-r from-orange-200 to-transparent" />
          </div>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-4xl font-semibold leading-tight text-slate-900 md:text-5xl">
                DOOH Impact Statistics
              </h2>
              <p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-600">
                Real-time attention data from our premium Bangladeshi screens
                shows that more than half of the audience takes the next
                step—whether that&apos;s a QR scan, a site visit, or a direct
                purchase.
              </p>
            </div>
            <div className="rounded-2xl bg-gradient-to-br from-orange-50 to-rose-50 p-6 text-sm text-slate-600 shadow-inner">
              <p className="font-semibold text-slate-900">What&apos;s new</p>
              <p className="mt-2">
                Creative is now adaptive per district feed, letting us react to
                weather, promos, and events in less than 15 minutes.
              </p>
              <p className="mt-2">
                Media and mobile paths are stitched through a single reporting
                dashboard, so the metrics below reflect your living funnel.
              </p>
            </div>
          </div>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            const animatedValue = animatedValues[index] || 0;
            const gradientId = `stat-gradient-${index}`;

            return (
              <motion.article
                key={stat.title}
                className="relative overflow-hidden rounded-3xl border border-white/70 bg-white/90 p-6 shadow-lg shadow-orange-100/60 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl"
                initial={{ opacity: 0, y: 24 }}
                animate={
                  isInView
                    ? {
                        opacity: 1,
                        y: 0,
                        transition: { delay: 0.15 * index },
                      }
                    : { opacity: 0, y: 24 }
                }
              >
                <div className="flex items-center justify-between gap-4">
                  <div
                    className={`rounded-2xl bg-gradient-to-br ${stat.color} p-3 text-white shadow-lg`}
                  >
                    <Icon className="h-6 w-6" strokeWidth={2} />
                  </div>
                  <span className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-500">
                    {stat.badge}
                  </span>
                </div>

                <h3 className="mt-4 text-xl font-semibold text-slate-900">
                  {stat.title}
                </h3>
                <p className="mt-1 text-sm text-slate-600">
                  {stat.description}
                </p>

                <div className="mt-6 flex items-end justify-between gap-6">
                  <div>
                    <p className="text-5xl font-bold text-slate-900">
                      {animatedValue}
                      <span className="ml-1 text-2xl font-semibold text-slate-500">
                        %
                      </span>
                    </p>
                    <p className="text-xs uppercase tracking-wide text-slate-500">
                      Current reading
                    </p>
                  </div>
                  <div className="relative h-20 w-20">
                    <svg className="h-full w-full -rotate-90 transform">
                      <circle
                        cx="40"
                        cy="40"
                        r="34"
                        fill="none"
                        stroke="#e2e8f0"
                        strokeWidth="5"
                      />
                      <circle
                        cx="40"
                        cy="40"
                        r="34"
                        fill="none"
                        stroke={`url(#${gradientId})`}
                        strokeWidth="5"
                        strokeLinecap="round"
                        strokeDasharray={`${
                          (animatedValue / 100) * 213.6
                        } 213.6`}
                        className="transition-all duration-150"
                      />
                      <defs>
                        <linearGradient
                          id={gradientId}
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="100%"
                        >
                          <stop
                            offset="0%"
                            stopColor={stat.gradientStops[0]}
                          />
                          <stop
                            offset="100%"
                            stopColor={stat.gradientStops[1]}
                          />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-900">
                      <span className="text-lg font-semibold">
                        {animatedValue}%
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  <div className="relative h-2 overflow-hidden rounded-full bg-slate-100">
                    <div
                      className={`h-full rounded-full bg-gradient-to-r ${stat.color} transition-all duration-150 ease-out`}
                      style={{
                        width: isInView ? `${animatedValue}%` : '0%',
                      }}
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                      style={{ animation: 'shimmer 2s infinite' }}
                    />
                  </div>
                </div>

                <div
                  className={`pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-b ${stat.color} opacity-10 blur-3xl`}
                />
              </motion.article>
            );
          })}

          <motion.div
            className="relative overflow-hidden rounded-[32px] border border-white/40 bg-gradient-to-br from-[#ff784a] via-[#f43f5e] to-[#be123c] p-8 text-white shadow-2xl"
            initial={{ opacity: 0, y: 32 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          >
            <div className="flex items-center justify-between gap-4">
              <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em]">
                Conversion Pulse
              </span>
              <span className="text-sm text-white/80">
                Every 15 min refresh
              </span>
            </div>
            <div className="mt-8 text-[68px] font-black leading-none">
              {actionValue}
              <span className="text-3xl font-semibold">%</span>
            </div>
            <p className="mt-3 max-w-sm text-lg text-white/90">
              {highlightStat?.description}
            </p>

            <div className="mt-8 flex items-center gap-4 text-sm text-white/85">
              <span className="flex h-3 w-3 items-center justify-center rounded-full bg-white/50">
                <span className="h-1.5 w-1.5 rounded-full bg-white" />
              </span>
              Always-on monitoring fused with POS + GA4 to validate downstream
              lift.
            </div>

            <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -left-10 h-60 w-60 rounded-full bg-white/10 blur-3xl" />
          </motion.div>
        </div>
      </div>

      <style>
        {`
          @keyframes shimmer {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
        `}
      </style>
    </section>
  );
};

export default StatisticsSection;
