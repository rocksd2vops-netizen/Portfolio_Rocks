import React, { useState } from 'react';
import { Terminal, Code, Server, Database, Layers, Sparkles, Infinity, ChevronRight, CheckCircle2 } from 'lucide-react';

interface Milestone {
  id: string;
  stage: string;
  title: string;
  focus: string;
  description: string;
  technologies: string[];
  keyTakeaway: string;
  icon: React.ComponentType<{ className?: string }>;
}

const MILESTONES: Milestone[] = [
  {
    id: 'fundamentals',
    stage: 'Milestone 01',
    title: 'Programming Fundamentals & Algorithmic Logic',
    focus: 'Variables, loops, memory discipline, algorithms & problem solving',
    description:
      'Gained deep appreciation for code execution, algorithmic efficiency, conditional branching, and deterministic logic through hands-on practice in C and core programming paradigms.',
    technologies: ['C', 'Logic Structures', 'Algorithms', 'Data Structures'],
    keyTakeaway: 'Mastering the bare metal fundamentals makes high-level abstractions intuitive and transparent.',
    icon: Terminal,
  },
  {
    id: 'frontend',
    stage: 'Milestone 02',
    title: 'Frontend Development & Interface Craft',
    focus: 'Semantic markup, styling precision, and fluid responsive design',
    description:
      'Mastered the triad of web interfaces: HTML5 semantic structure, CSS3 responsive grid systems, and core JavaScript DOM manipulation, creating layouts that adapt across devices.',
    technologies: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'Responsive Design', 'Sass'],
    keyTakeaway: 'An interface is only as good as its responsiveness, accessibility, and ergonomic clarity.',
    icon: Code,
  },
  {
    id: 'backend',
    stage: 'Milestone 03',
    title: 'Backend Development & Server Architectures',
    focus: 'Server-side routing, request lifecycles, and API design',
    description:
      'Delved into server runtimes with PHP, Node.js, and Python. Engineered RESTful endpoints, handled asynchronous events, managed HTTP request-response cycles, and enforced authentication.',
    technologies: ['Node.js', 'PHP', 'Python', 'REST APIs', 'Express'],
    keyTakeaway: 'Resilient server code expects failure, validates strictly, and provides predictable error responses.',
    icon: Server,
  },
  {
    id: 'database',
    stage: 'Milestone 04',
    title: 'Database Architecture & Relational Persistence',
    focus: 'Schema design, normalization, SQL optimization, and CRUD',
    description:
      'Architected structured database systems using MySQL and SQL. Implemented normalized relational schemas, managed primary and foreign key constraints, and wrote performant CRUD queries.',
    technologies: ['MySQL', 'SQL', 'Schema Normalization', 'CRUD Operations', 'Indexing'],
    keyTakeaway: 'Thoughtful schema design at the start prevents architectural bottlenecks in production.',
    icon: Database,
  },
  {
    id: 'react',
    stage: 'Milestone 05',
    title: 'React Ecosystem & Modern Component Architecture',
    focus: 'Declarative UI, custom hooks, reactive state, and SPAs',
    description:
      'Adopted React for state-driven, modular user interfaces. Mastered hooks, component lifecycle management, side effects, and build pipelines with Vite for instant developer feedback.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Hooks'],
    keyTakeaway: 'Declarative component hierarchies create maintainable, self-documenting codebases.',
    icon: Layers,
  },
  {
    id: 'fullstack',
    stage: 'Milestone 06',
    title: 'Full-Stack Synthesis & End-to-End Solutions',
    focus: 'Bridging client interfaces with server pipelines and persistent data',
    description:
      'Consolidated frontend and backend proficiencies into end-to-end full-stack applications. Harmonized client-side state with relational database records and secure cloud deployments.',
    technologies: ['Full-Stack Systems', 'API Integration', 'Git / GitHub', 'Cloudflare', 'Netlify'],
    keyTakeaway: 'The full-stack developer sees the complete journey: from database row to user click.',
    icon: Layers,
  },
  {
    id: 'ai-prompt',
    stage: 'Milestone 07',
    title: 'AI Integration & Advanced Prompt Engineering',
    focus: 'Deterministic system prompts, reasoning chains, and Google AI Studio',
    description:
      'Explored generative AI frontiers using Google AI Studio and Gemini models. Formulated rigorous prompt engineering methodologies, few-shot conditioning, and structured JSON parsing for production workflows.',
    technologies: ['Google AI Studio', 'Prompt Engineering', 'Gemini Models', 'AI Workflows', 'JSON Schema'],
    keyTakeaway: 'Prompt engineering is precision specification: clear constraints yield transformative results.',
    icon: Sparkles,
  },
  {
    id: 'evolution',
    stage: 'Milestone 08',
    title: 'Continuous Learning & Experimental Frontiers',
    focus: 'Emerging architectures, creative code, and perpetual self-reinvention',
    description:
      'Active commitment to exploring new frameworks, refining creative developer portfolios, contributing to open repositories, and solving real-world challenges through code.',
    technologies: ['Creative Development', 'Performance Tuning', 'Open Source', 'Perpetual Growth'],
    keyTakeaway: 'Technology moves relentlessly; true developers cultivate insatiable curiosity.',
    icon: Infinity,
  },
];

export const Journey: React.FC = () => {
  const [activeMilestone, setActiveMilestone] = useState<string | null>('evolution');

  return (
    <section id="journey" className="relative py-24 overflow-hidden border-t border-[#8B5CF6]/15 bg-[#0A0A12]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/3 w-[650px] h-[650px] bg-[#8B5CF6]/6 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-mono uppercase tracking-widest text-[#8B5CF6] mb-2 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6]" />
            Development Timeline
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#F5F5F7] font-heading">
            My Development Journey
          </h2>
          <p className="mt-4 text-base text-[#9696A5] leading-relaxed">
            A chronological timeline documenting continuous learning, deliberate practice, and technical progression from core fundamentals to full-stack and AI engineering.
          </p>
        </div>

        {/* Vertical Timeline with Glowing Connecting Line */}
        <div className="relative pl-6 sm:pl-10 border-l border-[#8B5CF6]/30 space-y-12 max-w-4xl">
          {MILESTONES.map((item, idx) => {
            const Icon = item.icon;
            const isSelected = activeMilestone === item.id;
            const isLast = idx === MILESTONES.length - 1;

            return (
              <div
                key={item.id}
                className="relative group transition-all duration-300"
              >
                {/* Glowing Node Dot on Timeline Line */}
                <div
                  className={`absolute -left-[31px] sm:-left-[47px] top-1.5 w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isSelected || isLast
                      ? 'bg-[#8B5CF6] text-white shadow-lg shadow-[#8B5CF6]/50 ring-4 ring-[#8B5CF6]/20'
                      : 'bg-[#11111A] border border-[#8B5CF6]/40 text-[#9696A5] group-hover:border-[#8B5CF6]'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>

                {/* Milestone Content Card */}
                <div
                  onClick={() => setActiveMilestone(isSelected ? null : item.id)}
                  className={`p-6 sm:p-7 rounded-2xl transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? 'crystal-glass border border-[#8B5CF6]/60 shadow-2xl shadow-[#8B5CF6]/20'
                      : 'crystal-glass-card border border-white/10 hover:border-[#8B5CF6]/40'
                  }`}
                >
                  {/* Top metadata */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-mono uppercase tracking-wider text-[#8B5CF6]">
                      {item.stage}
                    </span>
                    <span className="text-xs font-mono text-[#9696A5]">
                      {item.focus}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-[#F5F5F7] font-heading group-hover:text-[#D8B4FE] transition-colors">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm text-[#9696A5] leading-relaxed">
                    {item.description}
                  </p>

                  {/* Technologies row */}
                  <div className="flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-white/5">
                    {item.technologies.map((t) => (
                      <span
                        key={t}
                        className="text-[11px] font-mono text-[#D1D1DB] px-2.5 py-1 rounded bg-[#08080D] border border-white/5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Key Takeaway box */}
                  <div className="mt-4 p-3.5 rounded-xl bg-[#08080D]/70 border border-[#8B5CF6]/20 flex items-start gap-2.5 text-xs text-[#D8B4FE]">
                    <CheckCircle2 className="w-4 h-4 text-[#8B5CF6] shrink-0 mt-0.5" />
                    <span><strong>Key Insight:</strong> {item.keyTakeaway}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
