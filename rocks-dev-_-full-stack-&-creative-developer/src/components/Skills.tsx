import React, { useState } from 'react';
import { Terminal, Code, Database, Cpu, Wrench, Layers, Sparkles } from 'lucide-react';
import { getAssetUrl } from '../utils/assets.ts';

const TECH_ICONS: Record<string, string> = {
  JavaScript: 'images/technologies/javascript.svg',
  TypeScript: 'images/technologies/typescript.svg',
  Python: 'images/technologies/python.svg',
  PHP: 'images/technologies/php.svg',
  React: 'images/technologies/react.svg',
  'Node.js': 'images/technologies/nodejs.svg',
  MySQL: 'images/technologies/mysql.svg',
  'Tailwind CSS': 'images/technologies/tailwind.svg',
  Git: 'images/technologies/git.svg',
  GitHub: 'images/technologies/git.svg',
  'Google AI Studio': 'images/technologies/gemini-ai.svg',
  'AI Prompt Engineering': 'images/technologies/gemini-ai.svg',
};

interface SkillRow {
  category: string;
  speedClass: string;
  direction: 'left' | 'right';
  skills: Array<{ name: string; tag: string }>;
}

const MARQUEE_ROWS: SkillRow[] = [
  {
    category: 'Programming Languages & Systems',
    speedClass: 'animate-marquee-left',
    direction: 'left',
    skills: [
      { name: 'JavaScript', tag: 'ESNext / Async' },
      { name: 'Python', tag: 'Core / Automation' },
      { name: 'PHP', tag: 'Modern Server-Side' },
      { name: 'C', tag: 'Systems & Algorithms' },
      { name: 'TypeScript', tag: 'Strict Typing' },
      { name: 'SQL', tag: 'Relational Queries' },
    ],
  },
  {
    category: 'Frontend & Interactive Web',
    speedClass: 'animate-marquee-right-fast',
    direction: 'right',
    skills: [
      { name: 'React', tag: 'Hooks / State / SPAs' },
      { name: 'HTML5', tag: 'Semantic & Accessible' },
      { name: 'CSS3', tag: 'Modern Layouts & Grid' },
      { name: 'Responsive Design', tag: 'Fluid Architecture' },
      { name: 'Sass', tag: 'Preprocessors' },
      { name: 'AJAX', tag: 'Asynchronous Data' },
      { name: 'jQuery', tag: 'DOM Manipulation' },
      { name: 'JSON', tag: 'Data Serialization' },
    ],
  },
  {
    category: 'Backend & Data Architecture',
    speedClass: 'animate-marquee-left-fast',
    direction: 'left',
    skills: [
      { name: 'Node.js', tag: 'Runtime Environment' },
      { name: 'PHP', tag: 'OOP Architecture' },
      { name: 'Python', tag: 'Backend Pipelines' },
      { name: 'MySQL', tag: 'Relational DBMS' },
      { name: 'REST APIs', tag: 'Endpoints & Auth' },
      { name: 'CRUD Operations', tag: 'Data Lifecycle' },
      { name: 'Database Design', tag: 'Schema Normalization' },
      { name: 'API Integration', tag: '3rd Party Services' },
    ],
  },
  {
    category: 'AI & Developer Ecosystem',
    speedClass: 'animate-marquee-right',
    direction: 'right',
    skills: [
      { name: 'AI Prompt Engineering', tag: 'Advanced Chains' },
      { name: 'Advanced Prompt Design', tag: 'System Instructions' },
      { name: 'Google AI Studio', tag: 'Gemini Models' },
      { name: 'AI Workflow Optimization', tag: 'Automation' },
      { name: 'Git', tag: 'Version Control' },
      { name: 'GitHub', tag: 'CI/CD & Collaboration' },
      { name: 'VS Code', tag: 'Optimized Tooling' },
      { name: 'npm', tag: 'Package Management' },
      { name: 'Postman', tag: 'API Testing' },
      { name: 'Netlify', tag: 'Jamstack Hosting' },
      { name: 'Cloudflare', tag: 'Edge & DNS' },
    ],
  },
];

const SKILL_CATEGORIES = [
  {
    title: 'Programming Languages',
    icon: Code,
    skills: ['JavaScript', 'Python', 'PHP', 'C'],
    summary: 'Core language proficiencies providing algorithmic depth, syntax mastery, and versatile execution.',
  },
  {
    title: 'Frontend Development',
    icon: Layers,
    skills: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Responsive Design', 'Sass'],
    summary: 'Building fluid, highly responsive, interactive user experiences with modern reactive frameworks.',
  },
  {
    title: 'Backend Development',
    icon: Terminal,
    skills: ['PHP', 'Python', 'Node.js', 'REST APIs'],
    summary: 'Architecting robust server-side controllers, secure endpoints, and asynchronous business logic.',
  },
  {
    title: 'Databases & Storage',
    icon: Database,
    skills: ['MySQL', 'SQL', 'Database Design', 'CRUD Operations'],
    summary: 'Relational schemas, queries, data integrity, indexing, and scalable storage structures.',
  },
  {
    title: 'Tools & DevOps',
    icon: Wrench,
    skills: ['Git', 'GitHub', 'VS Code', 'npm', 'Postman', 'Netlify', 'Cloudflare'],
    summary: 'Industry-standard developer environments, collaborative workflows, testing, and modern deployment.',
  },
  {
    title: 'AI & Prompt Engineering',
    icon: Sparkles,
    skills: [
      'AI Prompt Engineering',
      'Advanced Prompt Design',
      'AI-Assisted Development',
      'Google AI Studio',
      'Generative AI Tools',
      'AI Workflow Optimization',
    ],
    summary: 'Leveraging cutting-edge generative models, chain-of-thought prompt engineering, and intelligent pipelines.',
  },
];

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

  return (
    <section id="skills" className="relative py-24 overflow-hidden border-t border-[#8B5CF6]/15 bg-[#08080D]">
      {/* Background glow illumination */}
      <div className="absolute top-1/3 right-0 w-[550px] h-[550px] bg-[#8B5CF6]/8 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-[#8B5CF6] mb-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6]" />
              Technical Arsenal
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#F5F5F7] font-heading">
              Moving Technology Streams
            </h2>
          </div>
          <p className="text-sm text-[#9696A5] max-w-lg leading-relaxed">
            Continuously moving horizontal loops displaying programming languages, frameworks, databases, and AI engineering tools. Hover any row to inspect.
          </p>
        </div>
      </div>

      {/* Horizontally Moving Continuous Marquee Strips */}
      <div className="space-y-4 relative w-full overflow-hidden marquee-container py-2">
        {/* Subtle lateral gradient masks */}
        <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-[#08080D] to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-[#08080D] to-transparent z-20 pointer-events-none" />

        {MARQUEE_ROWS.map((row, rIdx) => {
          // Double or triple skills array for continuous loop
          const items = [...row.skills, ...row.skills, ...row.skills, ...row.skills];
          return (
            <div key={rIdx} className="overflow-hidden w-full flex items-center">
              <div className={`${row.speedClass} flex items-center gap-4 py-1`}>
                {items.map((skill, sIdx) => (
                  <div
                    key={`${skill.name}-${rIdx}-${sIdx}`}
                    className="flex items-center gap-3 px-5 py-3 rounded-xl crystal-glass-card border border-white/10 hover:border-[#8B5CF6]/70 transition-all duration-300 shadow-lg shadow-black/40 group shrink-0"
                  >
                    {TECH_ICONS[skill.name] ? (
                      <img
                        src={getAssetUrl(TECH_ICONS[skill.name])}
                        alt=""
                        width={18}
                        height={18}
                        className="w-4 h-4 object-contain shrink-0 group-hover:scale-110 transition-transform"
                        loading="lazy"
                        decoding="async"
                      />
                    ) : (
                      <div className="w-2 h-2 rounded-full bg-[#8B5CF6] group-hover:scale-125 group-hover:bg-[#A855F7] transition-all" />
                    )}
                    <span className="text-sm font-bold text-[#F5F5F7] font-heading tracking-wide">
                      {skill.name}
                    </span>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#9696A5] px-2 py-0.5 rounded crystal-glass-subtle border border-white/10">
                      {skill.tag}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Interactive Category Breakdown Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mt-16 pt-12 border-t border-white/5">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h3 className="text-lg font-bold text-[#F5F5F7] font-heading">
              Curated Category Architecture
            </h3>
            <p className="text-xs text-[#9696A5]">
              Organized technical proficiencies structured across the full development lifecycle.
            </p>
          </div>
          <span className="text-xs font-mono text-[#8B5CF6]">
            {SKILL_CATEGORIES.length} Core Domains
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((cat, idx) => {
            const Icon = cat.icon;
            const isSelected = selectedCategory === idx;
            return (
              <div
                key={cat.title}
                onClick={() => setSelectedCategory(isSelected ? null : idx)}
                className={`p-6 rounded-2xl transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? 'crystal-glass border border-[#8B5CF6] shadow-2xl shadow-[#8B5CF6]/20'
                    : 'crystal-glass-card border border-white/10 hover:border-[#8B5CF6]/40'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl crystal-glass-subtle text-[#8B5CF6] border border-white/10">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono text-[#9696A5]">
                    0{idx + 1}
                  </span>
                </div>

                <h4 className="text-base font-bold text-[#F5F5F7] font-heading mb-2">
                  {cat.title}
                </h4>

                <p className="text-xs text-[#9696A5] leading-relaxed mb-4">
                  {cat.summary}
                </p>

                {/* Skills unboxed tags */}
                <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs font-mono text-[#D1D1DB] px-2.5 py-1 rounded-md crystal-glass-subtle border border-white/5"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
