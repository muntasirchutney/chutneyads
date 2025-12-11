'use client';

import { useEffect, useState } from 'react';
import { Eye, Smartphone, MousePointerClick, TrendingUp } from 'lucide-react';

const StatisticsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedValues, setAnimatedValues] = useState([0, 0, 0]);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    if (isVisible) {
      const targets = [50, 54, 64];
      const durations = [2000, 2200, 2400];

      targets.forEach((target, index) => {
        const startTime = Date.now() + (index * 200);
        const interval = setInterval(() => {
          const elapsed = Date.now() - startTime;
          const progress = Math.min(elapsed / durations[index], 1);
          const easeOut = 1 - Math.pow(1 - progress, 3);
          setAnimatedValues((prev) => {
            const newValues = [...prev];
            newValues[index] = Math.floor(target * easeOut);
            return newValues;
          });
        }, 16);

        return () => clearInterval(interval);
      });
    }
  }, [isVisible]);

  const stats = [
    {
      percentage: 50,
      title: 'Billboard Viewers',
      description: 'of digital billboard viewers will take notice',
      icon: Eye,
      color: 'from-orange-400 to-orange-600',
    },
    {
      percentage: 54,
      title: 'Mobile Engagement',
      description: 'of viewers on mobile will scan QR or download app',
      icon: Smartphone,
      color: 'from-red-500 to-rose-600',
    },
    {
      percentage: 64,
      title: 'Action Taken',
      description: 'of viewers engaged in actions after noticing',
      icon: MousePointerClick,
      color: 'from-rose-600 to-red-700',
    },
  ];

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-slate-100"></div>
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-gradient-to-br from-orange-200 to-red-200 rounded-full blur-3xl opacity-20 translate-x-1/3"></div>
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-gradient-to-tr from-red-200 to-orange-200 rounded-full blur-3xl opacity-15 -translate-x-1/3"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div
          className={`mb-20 transition-all duration-1000 ${isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 -translate-y-10'
            }`}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-1 w-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></div>
            <span className="text-sm font-semibold text-red-600 uppercase tracking-wider">
              Performance Metrics
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            DOOH Impact Statistics
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
            Our DOOH solutions have proven incredibly effective, with nearly
            two-thirds of viewers taking a measurable action, such as visiting
            the brand's website or making a purchase.
          </p>
        </div>

        <div className="space-y-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            const animatedValue = animatedValues[index] || 0;

            return (
              <div
                key={index}
                className={`group transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                  }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="relative bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden p-8 lg:p-10">
                  <div
                    className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${stat.color} rounded-full blur-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 translate-x-1/3 -translate-y-1/3`}
                  ></div>

                  <div className="relative z-10">
                    <div className="flex items-start justify-between gap-8">
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-6">
                          <div
                            className={`p-3 bg-gradient-to-br ${stat.color} rounded-lg shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
                          >
                            <Icon className="w-6 h-6 text-white" strokeWidth={2} />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-slate-900">
                              {stat.title}
                            </h3>
                            <p className="text-slate-600 text-sm mt-1">
                              {stat.description}
                            </p>
                          </div>
                        </div>

                        <div className="relative h-3 bg-slate-100 rounded-full overflow-hidden mt-8">
                          <div
                            className={`h-full bg-gradient-to-r ${stat.color} rounded-full transition-all duration-100 ease-out shadow-lg`}
                            style={{
                              width: isVisible ? `${animatedValue}%` : '0%',
                            }}
                          ></div>
                          <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 animate-shimmer"></div>
                        </div>
                      </div>

                      <div className="flex flex-col items-center justify-center min-w-fit">
                        <div className="relative w-24 h-24">
                          <svg className="w-full h-full transform -rotate-90">
                            <circle
                              cx="48"
                              cy="48"
                              r="44"
                              fill="none"
                              stroke="#e2e8f0"
                              strokeWidth="6"
                            />
                            <circle
                              cx="48"
                              cy="48"
                              r="44"
                              fill="none"
                              stroke="url(#gradient)"
                              strokeWidth="6"
                              strokeLinecap="round"
                              strokeDasharray={`${(animatedValue / 100) * 276.4} 276.4`}
                              className="transition-all duration-100"
                            />
                            <defs>
                              <linearGradient
                                id="gradient"
                                x1="0%"
                                y1="0%"
                                x2="100%"
                                y2="100%"
                              >
                                <stop
                                  offset="0%"
                                  stopColor={
                                    stat.color.includes('orange')
                                      ? '#ff9a56'
                                      : '#f43f5e'
                                  }
                                />
                                <stop
                                  offset="100%"
                                  stopColor={
                                    stat.color.includes('red')
                                      ? '#be123c'
                                      : '#dc2626'
                                  }
                                />
                              </linearGradient>
                            </defs>
                          </svg>
                          <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <span className="text-3xl font-bold bg-gradient-to-br from-slate-900 to-slate-700 bg-clip-text text-transparent">
                              {animatedValue}
                            </span>
                            <span className="text-lg font-semibold text-slate-600">
                              %
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-slate-200 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                </div>
              </div>
            );
          })}
        </div>

        
      </div>

      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </section>
  );
};

export default StatisticsSection;
