
"use client"
import { useEffect, useState } from 'react';
import DistrictMap from './Map';

interface DistrictData {
  name: string;
  area: number;
  population: string;
  density: string;
}

const districts: DistrictData[] = [
  { name: 'Uttara', area: 69, population: '2.1M', density: '30.5K' },
  { name: 'Mirpur', area: 96, population: '1.2M', density: '12.3K' },
  { name: 'Mohammadpur', area: 10, population: '743K', density: '78.1K' },
  { name: 'Dhanmondi', area: 11, population: '470K', density: '42K' },
];

const ImpactCoverage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const totalArea = districts.reduce((sum, d) => sum + d.area, 0);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-amber-500 via-orange-500 to-amber-600 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.05)_0%,transparent_50%)]" />

      <div className="relative max-w-7xl mx-auto  sm:px-6 lg:px-8 py-16 lg:py-24">
        <div
          className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
            }`}
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
            IMPACT & COVERAGE
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Serving the bustling neighborhoods of Uttara, Mirpur, Mohammadpur, and Dhanmondi, we
            are positioned to deliver over 1 Billion impressions monthly.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-start">
          <div
            className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/20 shadow-2xl">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                OUR CURRENT COVERAGE
              </h2>

              <div className="flex flex-wrap gap-3 mb-8">
                {districts.map((district, index) => (
                  <div
                    key={district.name}
                    className="group"
                    style={{
                      animation: `fadeInScale 0.6s ease-out ${0.5 + index * 0.1}s both`,
                    }}
                  >
                    <div className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-lg border border-white/30 hover:bg-white/30 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                      <span className="text-white font-medium">{district.name}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="overflow-hidden rounded-xl border border-white/20 shadow-xl">
                <table className="w-full">
                  <thead>
                    <tr className="bg-white/20 backdrop-blur-md">
                      <th className="text-left py-4 px-4 text-white font-bold text-sm md:text-base">
                        DISTRICT
                      </th>
                      <th className="text-center py-4 px-2 text-white font-bold text-sm md:text-base">
                        AREA (KM²)
                      </th>
                      <th className="text-center py-4 px-2 text-white font-bold text-sm md:text-base">
                        POPULATION
                      </th>
                      <th className="text-center py-4 px-2 text-white font-bold text-sm md:text-base">
                        DENSITY (SQ KM)
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {districts.map((district, index) => (
                      <tr
                        key={district.name}
                        className="border-t border-white/10 hover:bg-white/10 transition-all duration-300 group"
                        style={{
                          animation: `slideInRight 0.5s ease-out ${0.8 + index * 0.1}s both`,
                        }}
                      >
                        <td className="py-4 px-4 text-white font-medium text-sm md:text-base">
                          {district.name}
                        </td>
                        <td className="py-4 px-2 text-white text-center text-sm md:text-base">
                          {district.area}
                        </td>
                        <td className="py-4 px-2 text-white text-center text-sm md:text-base">
                          {district.population}
                        </td>
                        <td className="py-4 px-2 text-white text-center text-sm md:text-base">
                          {district.density}
                        </td>
                      </tr>
                    ))}
                    <tr className="border-t-2 border-white/30 bg-white/20 font-bold">
                      <td className="py-4 px-4 text-white text-sm md:text-base">Total</td>
                      <td className="py-4 px-2 text-white text-center text-sm md:text-base">
                        {totalArea}
                      </td>
                      <td className="py-4 px-2 text-white text-center text-sm md:text-base">
                        4.5M
                      </td>
                      <td className="py-4 px-2 text-white text-center text-sm md:text-base">
                        24.2K
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div
            className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}
          >
            <DistrictMap />
          </div>
        </div>

        <div
          className={`mt-12 text-center transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/20 shadow-2xl max-w-4xl mx-auto">
            <p className="text-white/95 text-base md:text-lg leading-relaxed">
              Reach close to 70% of target residents with an effective ad frequency, ensuring high recall
              and brand safety within a trusted and transparent platform.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
};

export default ImpactCoverage;
