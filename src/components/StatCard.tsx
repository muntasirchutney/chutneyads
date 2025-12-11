'use client';

import { useState, useEffect } from 'react';
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  percentage: number;
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  delay: number;
  isVisible: boolean;
}

const StatCard = ({
  percentage,
  title,
  description,
  icon: Icon,
  color,
  delay,
  isVisible,
}: StatCardProps) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
// eslint-disable-next-line
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | null = null;
    let counter: ReturnType<typeof setInterval> | null = null;

    if (isVisible && !hasAnimated) {
      timer = setTimeout(() => {
        const duration = 2000;
        const steps = 60;
        const increment = percentage / steps;
        let current = 0;

        counter = setInterval(() => {
          current += increment;
          if (current >= percentage) {
            setCount(percentage);
            if (counter) clearInterval(counter);
            setHasAnimated(true);
          } else {
            setCount(Math.floor(current));
          }
        }, duration / steps);
      }, delay);
    }

    return () => {
      if (timer) clearTimeout(timer);
      if (counter) clearInterval(counter);
    };
  }, [isVisible, percentage, delay, hasAnimated]);

  return (
    <div
      className={`group transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 h-full overflow-hidden group-hover:-translate-y-2">
        <div
          className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${color} rounded-full blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 translate-x-1/2 -translate-y-1/2`}
        ></div>

        <div className="relative z-10">
          <div
            className={`w-16 h-16 bg-gradient-to-br ${color} rounded-2xl flex items-center justify-center mb-6 transform group-hover:rotate-6 group-hover:scale-110 transition-all duration-500 shadow-lg`}
          >
            <Icon className="w-8 h-8 text-white" strokeWidth={2} />
          </div>

          <div className="mb-4">
            <div className="flex items-baseline gap-1">
              <span className="text-6xl font-bold bg-gradient-to-br from-slate-800 to-slate-600 bg-clip-text text-transparent">
                {count}
              </span>
              <span className="text-4xl font-bold bg-gradient-to-br from-slate-800 to-slate-600 bg-clip-text text-transparent">
                %
              </span>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-slate-800 mb-3">
            {title}
          </h3>

          <p className="text-slate-600 leading-relaxed">{description}</p>

          <div className="mt-6 h-1 bg-slate-100 rounded-full overflow-hidden">
            <div
              className={`h-full bg-gradient-to-r ${color} rounded-full transition-all duration-1000 ease-out`}
              style={{
                width: isVisible ? `${count}%` : '0%',
                transitionDelay: `${delay + 200}ms`,
              }}
            ></div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-slate-200 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
      </div>
    </div>
  );
};

export default StatCard;
