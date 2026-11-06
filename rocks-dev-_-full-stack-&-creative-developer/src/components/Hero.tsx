import React from 'react';
import { ArrowDown, MessageSquare, Briefcase, Sparkles, Terminal, Code2, Layers, Cpu, ShieldCheck } from 'lucide-react';
import { Logo } from './Logo.tsx';
import { getAssetUrl } from '../utils/assets.ts';

const TECH_STRIP = [
  'HTML5',
  'CSS3',
  'JavaScript',
  'React',
  'Python',
  'PHP',
  'MySQL',
  'Git',
  'GitHub',
  'Node.js',
];

const HERO_TECH_ICONS: Record<string, string> = {
  JavaScript: 'images/technologies/javascript.svg',
  React: 'images/technologies/react.svg',
  Python: 'images/technologies/python.svg',
  PHP: 'images/technologies/php.svg',
  MySQL: 'images/technologies/mysql.svg',
  Git: 'images/technologies/git.svg',
  GitHub: 'images/technologies/git.svg',
  'Node.js': 'images/technologies/nodejs.svg',
};

export const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-[92vh] pt-28 pb-16 flex flex-col justify-center overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-[#8B5CF6]/15 via-[#A855F7]/10 to-transparent rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        {/* Editorial Split-Layout: Left side typography, Right side brand showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Typographic Hierarchy & Primary Focus */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6 text-left order-1">
            
            {/* Professional Role Label & Availability */}
            <div className="flex flex-wrap items-center gap-3 text-xs tracking-wider">
              <span className="font-mono text-[#A855F7] font-semibold uppercase tracking-widest px-3 py-1 bg-[#8B5CF6]/10 border border-[#8B5CF6]/25 rounded-md">
                Full-Stack Developer
              </span>
              <span className="text-[#9696A5]">·</span>
              <span className="font-mono text-[#9696A5] uppercase tracking-wider">
                Creative Developer
              </span>
              <span className="text-[#9696A5]">·</span>
              <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Available for Select Projects</span>
              </div>
            </div>

            {/* Main Name & High-Impact Typography */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-[#F5F5F7] leading-none font-heading">
                ROCKS <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5F5F7] via-[#D8B4FE] to-[#8B5CF6]">DEV</span>
              </h1>
              <p className="text-xl sm:text-2xl lg:text-3xl font-medium text-[#D1D1DB] tracking-tight leading-snug">
                Building Digital Experiences Through Code.
              </p>
            </div>

            {/* Supporting Bio Paragraph */}
            <p className="text-sm sm:text-base text-[#9696A5] leading-relaxed max-w-2xl">
              I transform ideas into modern, intelligent, and high-performance digital experiences.
              From creative interfaces to powerful web applications, I build solutions that combine
              technology, design, and continuous innovation.
            </p>

            {/* Editorial Spec Callouts (Crystal Glass Style) */}
            <div className="grid grid-cols-3 gap-3 pt-2 pb-1 max-w-lg">
              <div className="p-3.5 rounded-xl crystal-glass-card">
                <div className="text-[10px] font-mono uppercase tracking-wider text-[#9696A5]">Architecture</div>
                <div className="text-xs sm:text-sm font-semibold text-[#F5F5F7] mt-0.5">End-to-End</div>
              </div>
              <div className="p-3.5 rounded-xl crystal-glass-card">
                <div className="text-[10px] font-mono uppercase tracking-wider text-[#9696A5]">Focus</div>
                <div className="text-xs sm:text-sm font-semibold text-[#8B5CF6] mt-0.5">Speed & Craft</div>
              </div>
              <div className="p-3.5 rounded-xl crystal-glass-card">
                <div className="text-[10px] font-mono uppercase tracking-wider text-[#9696A5]">Evolution</div>
                <div className="text-xs sm:text-sm font-semibold text-emerald-400 mt-0.5">AI Enhanced</div>
              </div>
            </div>

            {/* Dual Working CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                type="button"
                onClick={() => scrollTo('projects')}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-[#8B5CF6] via-[#7C3AED] to-[#6D28D9] rounded-xl shadow-lg shadow-[#8B5CF6]/30 hover:shadow-[#8B5CF6]/50 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
              >
                <Briefcase className="w-4 h-4" />
                <span>Explore My Work</span>
              </button>

              <button
                type="button"
                onClick={() => scrollTo('contact')}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-[#F5F5F7] crystal-glass hover:bg-white/10 border border-white/10 hover:border-[#8B5CF6]/50 rounded-xl transition-all duration-200 shadow-md hover:-translate-y-0.5 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 text-[#8B5CF6]" />
                <span>Let's Talk</span>
              </button>
            </div>
          </div>

          {/* Right Column: Premium ROCKS DEV Brand Logo Showcase (Translucent Crystal Glass & Subtle Diffused Illumination) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center order-2">
            <div className="relative w-full max-w-[420px]">
              
              {/* Diffused Soft Purple Illumination (Subtle ambient glow, not an aggressive neon circle) */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-tr from-[#8B5CF6]/20 via-[#A855F7]/12 to-transparent rounded-full blur-3xl pointer-events-none" />

              {/* Crystal Frosted Glass Container */}
              <div className="relative rounded-3xl p-7 sm:p-8 crystal-glass-card border border-white/10 shadow-2xl shadow-black/60 overflow-hidden flex flex-col items-center text-center">
                
                {/* Subtle top crystal sheen highlight */}
                <div className="absolute top-0 inset-x-8 h-px bg-gradient-to-r from-transparent via-[#8B5CF6]/40 to-transparent pointer-events-none" />

                {/* Top Status Bar */}
                <div className="w-full flex items-center justify-between text-[11px] font-mono text-[#9696A5] pb-5 mb-5 border-b border-white/5">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="uppercase tracking-wider text-[#D1D1DB]">ROCKS DEV</span>
                  </div>
                  <span className="px-2 py-0.5 rounded crystal-glass-subtle text-[#A855F7] border border-white/5 text-[10px]">
                    EST. 2026
                  </span>
                </div>

                {/* Original Geometric Logo Emblem (Small, proportioned, subtle diffused purple backlight) */}
                <div className="py-2 flex flex-col items-center">
                  <Logo size="hero" showText={false} withGlow={true} animated={true} />

                  <div className="mt-4 space-y-1">
                    <h2 className="font-heading font-extrabold text-xl sm:text-2xl tracking-wider text-[#F5F5F7]">
                      ROCKS <span className="text-[#8B5CF6]">DEV</span>
                    </h2>
                    <p className="text-xs font-mono text-[#9696A5] tracking-widest uppercase">
                      Full-Stack & Creative Developer
                    </p>
                  </div>
                </div>

                {/* Interactive Developer Manifest Snippet (Frosted Crystal Glass) */}
                <div className="w-full mt-6 p-4 rounded-xl crystal-glass-subtle border border-white/5 font-mono text-xs text-left space-y-1.5">
                  <div className="flex items-center justify-between text-[11px] text-[#8B5CF6] pb-1.5 border-b border-white/5">
                    <span className="flex items-center gap-1.5">
                      <Terminal className="w-3.5 h-3.5 text-[#8B5CF6]" />
                      rocks-dev.config.ts
                    </span>
                    <span className="text-emerald-400 text-[10px] flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3 text-emerald-400" />
                      VERIFIED
                    </span>
                  </div>
                  <div className="text-[#D1D1DB] pt-1 text-[11px] leading-relaxed">
                    <p><span className="text-[#A855F7]">const</span> <span className="text-[#F5F5F7]">brand</span> = &#123;</p>
                    <p className="pl-4 text-[#9696A5]">name: <span className="text-emerald-300">"ROCKS DEV"</span>,</p>
                    <p className="pl-4 text-[#9696A5]">stack: [<span className="text-purple-300">"React"</span>, <span className="text-purple-300">"Node"</span>, <span className="text-purple-300">"Python"</span>, <span className="text-purple-300">"SQL"</span>],</p>
                    <p className="pl-4 text-[#9696A5]">creed: <span className="text-amber-200">"Code. Create. Evolve."</span></p>
                    <p>&#125;;</p>
                  </div>
                </div>

                {/* Bottom Micro Feature Strip */}
                <div className="w-full mt-5 pt-4 border-t border-white/5 grid grid-cols-3 gap-2 text-center">
                  <div className="p-1.5 rounded-lg crystal-glass-subtle">
                    <span className="block text-[10px] font-mono text-[#9696A5]">CODE</span>
                    <span className="block text-[11px] font-semibold text-[#F5F5F7]">Bespoke</span>
                  </div>
                  <div className="p-1.5 rounded-lg crystal-glass-subtle">
                    <span className="block text-[10px] font-mono text-[#9696A5]">STYLE</span>
                    <span className="block text-[11px] font-semibold text-[#8B5CF6]">Crystal</span>
                  </div>
                  <div className="p-1.5 rounded-lg crystal-glass-subtle">
                    <span className="block text-[10px] font-mono text-[#9696A5]">STATUS</span>
                    <span className="block text-[11px] font-semibold text-emerald-400">Available</span>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* Technology Strip — Horizontal Animated Scrolling Technologies */}
        <div className="mt-16 pt-8 border-t border-[#8B5CF6]/15">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#9696A5] flex items-center gap-2">
              <Terminal className="w-3.5 h-3.5 text-[#8B5CF6]" />
              Core Programming Stack & Technologies
            </span>
            <span className="text-[11px] font-mono text-[#9696A5]/70 hidden sm:inline-block">
              Hover to pause strip
            </span>
          </div>

          <div className="relative overflow-hidden w-full marquee-container py-2">
            {/* Edge fades */}
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#08080D] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#08080D] to-transparent z-10 pointer-events-none" />

            <div className="animate-marquee-left flex items-center gap-6">
              {[...TECH_STRIP, ...TECH_STRIP, ...TECH_STRIP].map((tech, idx) => (
                <div
                  key={`${tech}-${idx}`}
                  className="flex items-center gap-2.5 px-4 py-2 rounded-xl crystal-glass-card border border-white/10 hover:border-[#8B5CF6]/60 transition-colors whitespace-nowrap shrink-0 group"
                >
                  {HERO_TECH_ICONS[tech] ? (
                    <img
                      src={getAssetUrl(HERO_TECH_ICONS[tech])}
                      alt=""
                      width={16}
                      height={16}
                      className="w-3.5 h-3.5 object-contain shrink-0 group-hover:scale-110 transition-transform"
                      loading="lazy"
                      decoding="async"
                    />
                  ) : (
                    <Code2 className="w-3.5 h-3.5 text-[#8B5CF6] group-hover:text-[#A855F7] transition-colors" />
                  )}
                  <span className="text-xs sm:text-sm font-semibold tracking-wide text-[#F5F5F7] font-mono">
                    {tech}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
