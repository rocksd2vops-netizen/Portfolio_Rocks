import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'hero';
  showText?: boolean;
  withGlow?: boolean;
  animated?: boolean;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  size = 'md',
  showText = true,
  withGlow = true,
  animated = true,
  className = '',
}) => {
  const sizeMap = {
    sm: { icon: 30, text: 'text-base', subtext: 'text-[9px]', glowSize: 'w-10 h-10 blur-md' },
    md: { icon: 38, text: 'text-lg', subtext: 'text-[10px]', glowSize: 'w-14 h-14 blur-lg' },
    lg: { icon: 48, text: 'text-xl', subtext: 'text-xs', glowSize: 'w-16 h-16 blur-xl' },
    xl: { icon: 64, text: 'text-2xl', subtext: 'text-xs', glowSize: 'w-24 h-24 blur-xl' },
    hero: { icon: 110, text: 'text-3xl', subtext: 'text-sm', glowSize: 'w-36 h-36 blur-2xl' },
  };

  const current = sizeMap[size];

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Original Geometric ROCKS DEV Emblem (R + D + Code Syntax Interlock) */}
      <div className="relative flex items-center justify-center shrink-0 group">
        {/* Subtle, elegant diffused purple ambient illumination behind the logo */}
        {withGlow && (
          <div
            className={`absolute rounded-full bg-gradient-to-tr from-[#8B5CF6]/35 via-[#A855F7]/25 to-transparent pointer-events-none ${
              current.glowSize
            } ${animated ? 'animate-pulse' : ''}`}
            style={{ animationDuration: '4s' }}
          />
        )}

        <svg
          width={current.icon}
          height={current.icon}
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`relative z-10 transition-transform duration-300 group-hover:scale-105 ${
            animated ? 'filter drop-shadow-[0_4px_12px_rgba(139,92,246,0.35)]' : ''
          }`}
        >
          <defs>
            {/* Linear gradients for architectural precision */}
            <linearGradient id="rdStemGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="60%" stopColor="#D8B4FE" />
              <stop offset="100%" stopColor="#8B5CF6" />
            </linearGradient>

            <linearGradient id="rdLoopGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8B5CF6" />
              <stop offset="50%" stopColor="#A855F7" />
              <stop offset="100%" stopColor="#C084FC" />
            </linearGradient>

            <linearGradient id="rdLegGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#A855F7" />
              <stop offset="100%" stopColor="#7C3AED" />
            </linearGradient>

            <linearGradient id="rdRockBorder" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#A855F7" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#6D28D9" stopOpacity="0.5" />
            </linearGradient>
          </defs>

          {/* Hexagonal Crystalline Rock Facet Geometry (Outer Contour) */}
          <polygon
            points="50,6 88,27.5 88,72.5 50,94 12,72.5 12,27.5"
            fill="#11111A"
            fillOpacity="0.65"
            stroke="url(#rdRockBorder)"
            strokeWidth="2"
            strokeLinejoin="round"
          />

          {/* Subtle vertical coordinate tech lines */}
          <line
            x1="50"
            y1="6"
            x2="50"
            y2="17"
            stroke="#8B5CF6"
            strokeOpacity="0.35"
            strokeWidth="1.5"
            strokeDasharray="2 2"
          />
          <line
            x1="50"
            y1="83"
            x2="50"
            y2="94"
            stroke="#8B5CF6"
            strokeOpacity="0.35"
            strokeWidth="1.5"
            strokeDasharray="2 2"
          />

          {/* Code Chevron Accent: Open Bracket '<' on left flank */}
          <path
            d="M 23 44 L 17 50 L 23 56"
            stroke="#8B5CF6"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeOpacity="0.85"
          />

          {/* Code Chevron Accent: Close Bracket '>' on right flank */}
          <path
            d="M 77 44 L 83 50 L 77 56"
            stroke="#A855F7"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeOpacity="0.85"
          />

          {/* The Monogram Geometry: R + D Stem with Binary Node Endpoints */}
          <path
            d="M 34 26 L 34 74"
            stroke="url(#rdStemGrad)"
            strokeWidth="6"
            strokeLinecap="round"
          />
          <circle cx="34" cy="26" r="3" fill="#FFFFFF" />
          <circle cx="34" cy="74" r="3" fill="#8B5CF6" />

          {/* Geometric Upper Loop of 'R' & Curvature of 'D' */}
          <path
            d="M 34 26 H 55 C 67 26 73 33 73 40 C 73 47 67 50 55 50 H 34"
            stroke="url(#rdLoopGrad)"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Inner Code Slash Accent */}
          <line
            x1="43"
            y1="34"
            x2="49"
            y2="42"
            stroke="#F5F5F7"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeOpacity="0.8"
          />

          {/* The Dynamic Angular Kick of 'R' Cutting into Forward Motion '>' */}
          <path
            d="M 49 50 L 68 74"
            stroke="url(#rdLegGrad)"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Terminal Nexus Point */}
          <circle cx="49" cy="50" r="2.5" fill="#C084FC" />
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col leading-tight">
          <div className="flex items-center gap-1.5">
            <span className={`font-extrabold tracking-wider text-[#F5F5F7] ${current.text} font-heading`}>
              ROCKS<span className="text-[#8B5CF6]">DEV</span>
            </span>
          </div>
          <span className={`font-mono text-[#9696A5] tracking-widest uppercase ${current.subtext}`}>
            ROCKS DEV
          </span>
        </div>
      )}
    </div>
  );
};
