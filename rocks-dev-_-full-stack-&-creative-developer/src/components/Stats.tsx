import React, { useState, useEffect } from 'react';
import { Calendar, Layers, Terminal, Sparkles } from 'lucide-react';

interface StatItem {
  id: string;
  label: string;
  sublabel: string;
  targetValue: number;
  suffix: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
}

const STATS_DATA: StatItem[] = [
  {
    id: 'years',
    label: 'Learning & Dev',
    sublabel: 'Continuous Craft',
    targetValue: 4,
    suffix: '+',
    icon: Calendar,
    description: 'Years dedicated to coding, system building & technical growth',
  },
  {
    id: 'projects',
    label: 'Projects Built',
    sublabel: 'Full-Stack Solutions',
    targetValue: 24,
    suffix: '+',
    icon: Layers,
    description: 'Web applications, APIs, responsive interfaces & database engines',
  },
  {
    id: 'tech',
    label: 'Tech Stack',
    sublabel: 'Tools & Languages',
    targetValue: 18,
    suffix: '+',
    icon: Terminal,
    description: 'Programming languages, frameworks, databases & developer utilities',
  },
  {
    id: 'learning',
    label: 'Code Hours',
    sublabel: 'Deliberate Practice',
    targetValue: 2400,
    suffix: '+',
    icon: Sparkles,
    description: 'Hours committed to deep learning, algorithmic problem solving & AI',
  },
];

export const Stats: React.FC = () => {
  const [counts, setCounts] = useState<{ [key: string]: number }>({
    years: 0,
    projects: 0,
    tech: 0,
    learning: 0,
  });

  useEffect(() => {
    const duration = 1600; // ms
    const steps = 40;
    const intervalTime = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step += 1;
      const progress = step / steps;
      // Smooth ease-out curve
      const easeProgress = 1 - Math.pow(1 - progress, 3);

      setCounts({
        years: Math.round(4 * easeProgress),
        projects: Math.round(24 * easeProgress),
        tech: Math.round(18 * easeProgress),
        learning: Math.round(2400 * easeProgress),
      });

      if (step >= steps) {
        clearInterval(timer);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative py-12 border-y border-[#8B5CF6]/15 bg-[#0C0C14]/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section title & context kicker */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-[#8B5CF6] mb-1">
              Developer Metrics & Growth
            </div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#F5F5F7] font-heading">
              Foundation Built on Continuous Evolution
            </h2>
          </div>
          <p className="text-xs text-[#9696A5] max-w-md font-mono">
            Realistic developer milestones and persistent technical practice across full-stack systems.
          </p>
        </div>

        {/* 4-Column Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {STATS_DATA.map((stat) => {
            const Icon = stat.icon;
            const currentVal = counts[stat.id] ?? 0;
            return (
              <div
                key={stat.id}
                className="relative p-6 rounded-2xl crystal-glass-card border border-white/10 hover:border-[#8B5CF6]/50 transition-all duration-300 group hover:-translate-y-1 shadow-xl shadow-black/40"
              >
                {/* Glow accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#8B5CF6]/5 rounded-full blur-2xl group-hover:bg-[#8B5CF6]/15 transition-all" />

                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl crystal-glass-subtle border border-white/10 text-[#8B5CF6] group-hover:text-[#A855F7] transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono uppercase tracking-widest text-[#9696A5]">
                    {stat.sublabel}
                  </span>
                </div>

                <div className="space-y-1">
                  <div className="text-3xl sm:text-4xl font-extrabold text-[#F5F5F7] font-heading tabular-nums tracking-tight">
                    {stat.id === 'learning'
                      ? currentVal.toLocaleString()
                      : currentVal}
                    <span className="text-[#8B5CF6] ml-1">{stat.suffix}</span>
                  </div>
                  <div className="text-sm font-semibold text-[#D1D1DB]">
                    {stat.label}
                  </div>
                  <p className="text-xs text-[#9696A5] leading-relaxed pt-1">
                    {stat.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
