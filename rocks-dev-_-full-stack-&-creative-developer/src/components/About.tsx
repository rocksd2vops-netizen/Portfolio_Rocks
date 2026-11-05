import React, { useState } from 'react';
import { Terminal, Cpu, Sparkles, CheckCircle2, Code2, Compass } from 'lucide-react';

export const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'mindset' | 'principles' | 'stack'>('mindset');

  return (
    <section id="about" className="relative py-24 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 -left-48 w-96 h-96 bg-[#8B5CF6]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-mono uppercase tracking-widest text-[#8B5CF6] mb-2 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6]" />
            About The Developer
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#F5F5F7] font-heading leading-tight">
            More Than Code. <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5F5F7] via-[#D8B4FE] to-[#8B5CF6]">
              A Mind Built to Create.
            </span>
          </h2>
        </div>

        {/* 2-Column Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Narrative Prose & Developer DNA */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-4 text-[#D1D1DB] leading-relaxed text-base sm:text-lg">
              <p>
                I'm <strong className="text-white font-semibold">ROCKS DEV</strong>, a developer passionate about technology, programming, and building useful digital products.
              </p>
              <p className="text-[#9696A5] text-base leading-relaxed">
                My journey is driven by curiosity, problem-solving, and continuous improvement. I enjoy exploring new technologies, transforming ideas into functional applications, and developing digital experiences that make a difference.
              </p>
              <p className="text-[#9696A5] text-base leading-relaxed">
                Whether architecting database pipelines with MySQL and PHP, building responsive interactive interfaces with React and Tailwind, or engineering custom prompt chains for cutting-edge AI integrations, I treat every project as an opportunity to refine both technical rigor and creative finesse.
              </p>
            </div>

            {/* Creative DNA Matrix (Crystal Glass Style) */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl crystal-glass-card border border-white/10 space-y-2">
                <div className="flex items-center gap-2 text-[#8B5CF6]">
                  <Compass className="w-4 h-4" />
                  <span className="text-xs font-mono uppercase tracking-wider font-semibold">Curiosity Driven</span>
                </div>
                <p className="text-xs text-[#9696A5]">
                  Eager to unravel complex system architectures and learn emerging technologies from the ground up.
                </p>
              </div>

              <div className="p-4 rounded-xl crystal-glass-card border border-white/10 space-y-2">
                <div className="flex items-center gap-2 text-[#A855F7]">
                  <Cpu className="w-4 h-4" />
                  <span className="text-xs font-mono uppercase tracking-wider font-semibold">Full-Stack Synthesis</span>
                </div>
                <p className="text-xs text-[#9696A5]">
                  Connecting database persistence, backend controllers, and modern frontend dynamics seamlessly.
                </p>
              </div>
            </div>

            {/* Core Commitments List */}
            <div className="pt-2 space-y-2.5">
              {[
                'Pixel-perfect interfaces without bloated UI templates',
                'Clean, maintainable, modular architecture',
                'Performance-first mindset and zero-pill typographic discipline',
                'Pragmatic integration of AI and automated workflows',
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 text-xs sm:text-sm text-[#D1D1DB]">
                  <CheckCircle2 className="w-4 h-4 text-[#8B5CF6] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Code-Inspired Visual Element / Terminal Inspector */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden crystal-glass border border-white/10 shadow-2xl shadow-black/60">
              
              {/* Terminal Window Header */}
              <div className="px-4 py-3 crystal-glass-subtle border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="text-xs font-mono text-[#9696A5] ml-2">rocks_dev.config.ts</span>
                </div>
                
                {/* Mode Selectors */}
                <div className="flex items-center gap-1 text-[11px] font-mono">
                  {(['mindset', 'principles', 'stack'] as const).map((tab) => (
                    <button
                      key={tab}
                      type="button"
                      onClick={() => setActiveTab(tab)}
                      className={`px-2.5 py-1 rounded transition-colors uppercase ${
                        activeTab === tab
                          ? 'bg-[#8B5CF6]/20 text-[#D8B4FE] border border-[#8B5CF6]/40 font-semibold'
                          : 'text-[#9696A5] hover:text-white'
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </div>

              {/* Terminal Code Body */}
              <div className="p-6 font-mono text-xs sm:text-[13px] leading-relaxed text-[#D1D1DB] space-y-3 bg-[#090910]/70 backdrop-blur-md">
                {activeTab === 'mindset' && (
                  <>
                    <div className="text-[#9696A5]">// Mindset & Engineering Philosophy</div>
                    <div>
                      <span className="text-[#8B5CF6]">export const</span>{' '}
                      <span className="text-cyan-400">developerProfile</span> = {'{'}
                    </div>
                    <div className="pl-4">
                      <span className="text-[#9696A5]">name:</span>{' '}
                      <span className="text-emerald-300">"ROCKS DEV"</span>,
                    </div>
                    <div className="pl-4">
                      <span className="text-[#9696A5]">brand:</span>{' '}
                      <span className="text-emerald-300">"ROCKS DEV"</span>,
                    </div>
                    <div className="pl-4">
                      <span className="text-[#9696A5]">creed:</span>{' '}
                      <span className="text-emerald-300">"Code. Create. Evolve."</span>,
                    </div>
                    <div className="pl-4">
                      <span className="text-[#9696A5]">mindset:</span> [
                    </div>
                    <div className="pl-8 text-amber-200">
                      "Perpetual curiosity and active experimentation",
                    </div>
                    <div className="pl-8 text-amber-200">
                      "Clean code architecture over short-term shortcuts",
                    </div>
                    <div className="pl-8 text-amber-200">
                      "User-focused digital utility & aesthetic finesse",
                    </div>
                    <div className="pl-4">],</div>
                    <div className="pl-4">
                      <span className="text-[#9696A5]">status:</span>{' '}
                      <span className="text-cyan-300">"Continuously iterating & evolving"</span>
                    </div>
                    <div>{'};'}</div>
                  </>
                )}

                {activeTab === 'principles' && (
                  <>
                    <div className="text-[#9696A5]">// Core Development Principles</div>
                    <div>
                      <span className="text-[#8B5CF6]">class</span>{' '}
                      <span className="text-cyan-400">EngineeringStandards</span> {'{'}
                    </div>
                    <div className="pl-4">
                      <span className="text-[#8B5CF6]">public readonly</span> principles = [
                    </div>
                    <div className="pl-8 text-emerald-300">
                      "01. Build what actually works in production.",
                    </div>
                    <div className="pl-8 text-emerald-300">
                      "02. Zero bloat: every line of code serves purpose.",
                    </div>
                    <div className="pl-8 text-emerald-300">
                      "03. Master fundamentals before reaching for abstractions.",
                    </div>
                    <div className="pl-8 text-emerald-300">
                      "04. Seamless bridge between design & backend data.",
                    </div>
                    <div className="pl-4">];</div>
                    <div className="pl-4">
                      <span className="text-[#8B5CF6]">execute</span>(): <span className="text-cyan-300">Experience</span> {'{'}
                    </div>
                    <div className="pl-8 text-[#A855F7]">
                      return new DigitalExperience(this.principles);
                    </div>
                    <div className="pl-4">{'}'}</div>
                    <div>{'}'}</div>
                  </>
                )}

                {activeTab === 'stack' && (
                  <>
                    <div className="text-[#9696A5]">// Full-Stack Architecture Spectrum</div>
                    <div>
                      <span className="text-[#8B5CF6]">const</span>{' '}
                      <span className="text-cyan-400">systemCapabilities</span> = {'{'}
                    </div>
                    <div className="pl-4">
                      <span className="text-[#9696A5]">frontend:</span> [
                      <span className="text-amber-200">"React"</span>,{' '}
                      <span className="text-amber-200">"JavaScript"</span>,{' '}
                      <span className="text-amber-200">"Tailwind"</span>,{' '}
                      <span className="text-amber-200">"Responsive UI"</span>],
                    </div>
                    <div className="pl-4">
                      <span className="text-[#9696A5]">backend:</span> [
                      <span className="text-amber-200">"Node.js"</span>,{' '}
                      <span className="text-amber-200">"PHP"</span>,{' '}
                      <span className="text-amber-200">"Python"</span>,{' '}
                      <span className="text-amber-200">"REST APIs"</span>],
                    </div>
                    <div className="pl-4">
                      <span className="text-[#9696A5]">persistence:</span> [
                      <span className="text-amber-200">"MySQL"</span>,{' '}
                      <span className="text-amber-200">"Relational Schema Design"</span>],
                    </div>
                    <div className="pl-4">
                      <span className="text-[#9696A5]">ai_workflows:</span> [
                      <span className="text-amber-200">"Advanced Prompt Engineering"</span>,{' '}
                      <span className="text-amber-200">"Google AI Studio"</span>]
                    </div>
                    <div>{'};'}</div>
                  </>
                )}

                {/* Live execution indicator */}
                <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-[#9696A5]">
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    Runtime Status: Optimal
                  </span>
                  <span className="text-[#8B5CF6] font-mono">ROCKS DEV Core v2.6</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
