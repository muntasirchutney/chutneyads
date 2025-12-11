import { MapPin } from 'lucide-react';

const DistrictMap = () => {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/20 shadow-2xl h-full flex items-center justify-center">
      <div className="relative w-full max-w-md">
        {/* <svg
          viewBox="0 0 400 500"
          className="w-full h-auto drop-shadow-2xl"
          style={{ filter: 'drop-shadow(0 10px 30px rgba(0,0,0,0.3))' }}
        >
          <defs>
            <linearGradient id="mapGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#ffffff', stopOpacity: 0.95 }} />
              <stop offset="100%" style={{ stopColor: '#f8fafc', stopOpacity: 0.9 }} />
            </linearGradient>
            <filter id="shadow">
              <feDropShadow dx="0" dy="4" stdDeviation="8" floodOpacity="0.2" />
            </filter>
          </defs>

          <g className="map-container" style={{ animation: 'float 3s ease-in-out infinite' }}>
            <path
              d="M 200 50 L 350 150 L 350 400 L 200 480 L 50 400 L 50 150 Z"
              fill="url(#mapGradient)"
              stroke="#e5e7eb"
              strokeWidth="2"
              filter="url(#shadow)"
              className="transition-all duration-500 hover:fill-white"
            />

            <g className="district uttara" style={{ animation: 'pulse 2s ease-in-out infinite' }}>
              <path
                d="M 200 50 L 350 150 L 280 180 L 200 120 L 120 180 L 50 150 Z"
                fill="#ef4444"
                opacity="0.7"
                className="transition-all duration-300 hover:opacity-90 hover:fill-red-500"
              />
              <text
                x="200"
                y="140"
                textAnchor="middle"
                className="text-xs font-bold fill-white"
                style={{ pointerEvents: 'none' }}
              >
                UTTARA
              </text>
            </g>

            <g className="district mirpur" style={{ animation: 'pulse 2s ease-in-out 0.3s infinite' }}>
              <path
                d="M 50 150 L 120 180 L 120 280 L 50 310 Z"
                fill="#f97316"
                opacity="0.7"
                className="transition-all duration-300 hover:opacity-90"
              />
              <text
                x="80"
                y="235"
                textAnchor="middle"
                className="text-xs font-bold fill-white"
                style={{ pointerEvents: 'none' }}
              >
                MIRPUR
              </text>
            </g>

            <g className="district mohammadpur" style={{ animation: 'pulse 2s ease-in-out 0.6s infinite' }}>
              <path
                d="M 120 280 L 50 310 L 50 400 L 120 380 Z"
                fill="#fb923c"
                opacity="0.7"
                className="transition-all duration-300 hover:opacity-90"
              />
              <text
                x="60"
                y="350"
                textAnchor="middle"
                className="text-[10px] font-bold fill-white"
                style={{ pointerEvents: 'none' }}
              >
                MOHAM
              </text>
              <text
                x="60"
                y="362"
                textAnchor="middle"
                className="text-[10px] font-bold fill-white"
                style={{ pointerEvents: 'none' }}
              >
                MADPUR
              </text>
            </g>

            <g className="district dhanmondi" style={{ animation: 'pulse 2s ease-in-out 0.9s infinite' }}>
              <path
                d="M 120 380 L 50 400 L 200 480 L 200 430 Z"
                fill="#fdba74"
                opacity="0.7"
                className="transition-all duration-300 hover:opacity-90"
              />
              <text
                x="140"
                y="440"
                textAnchor="middle"
                className="text-[10px] font-bold fill-white"
                style={{ pointerEvents: 'none' }}
              >
                DHANMONDI
              </text>
            </g>

            <g className="district-center">
              <circle
                cx="200"
                cy="300"
                r="40"
                fill="#ef4444"
                opacity="0.9"
                className="transition-all duration-500 hover:r-45"
                style={{ animation: 'heartbeat 2s ease-in-out infinite' }}
              />
              <text
                x="200"
                y="305"
                textAnchor="middle"
                className="text-lg font-bold fill-white"
                style={{ pointerEvents: 'none' }}
              >
                DHAKA
              </text>
            </g>
          </g>
        </svg> */}

        <div className='h-[480px] '>
          Map
        </div>

        <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-orange-200">
          <MapPin className="w-4 h-4 text-orange-600" />
          <span className="text-sm font-semibold text-gray-700">Coverage Map</span>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 0.7;
          }
          50% {
            opacity: 0.9;
          }
        }

        @keyframes heartbeat {
          0%, 100% {
            transform: scale(1);
          }
          25% {
            transform: scale(1.05);
          }
          50% {
            transform: scale(1);
          }
          75% {
            transform: scale(1.05);
          }
        }

        .district:hover {
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default DistrictMap;
