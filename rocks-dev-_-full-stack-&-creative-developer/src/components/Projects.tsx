import React, { useState } from 'react';
import { ExternalLink, Github, Layers, ArrowUpRight, X, CheckCircle2, Terminal } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  category: 'Full-Stack' | 'Frontend' | 'Backend' | 'AI & Tools';
  description: string;
  longDescription: string;
  technologies: string[];
  image: string;
  githubUrl: string;
  liveUrl?: string;
  highlights: string[];
  architectureNotes: string;
}

const PROJECTS: Project[] = [
  {
    id: 'analytics-pulse',
    title: 'Analytics Pulse',
    category: 'Full-Stack',
    description: 'High-performance dark SaaS telemetry dashboard with real-time analytics and predictive data curves.',
    longDescription:
      'A comprehensive SaaS analytics engine built to ingest high-frequency user telemetry, render low-latency charts, and provide instant insights. Features optimized data pipelines, responsive UI layouts, and reactive data polling.',
    technologies: ['React', 'TypeScript', 'Node.js', 'Tailwind CSS', 'REST APIs', 'MySQL'],
    image: '/src/assets/images/project_flow_saas_1793827708114.jpg',
    githubUrl: 'https://github.com/rocksd2vops-netizen',
    highlights: [
      'Sub-20ms rendering of complex multi-series timecharts',
      'Normalized relational schema with indexed queries',
      'Responsive dark mode with custom purple neon aesthetics',
    ],
    architectureNotes:
      'Designed with modular functional React components and a lightweight REST backend. State caching minimizes redundant API calls while maintaining fresh metrics.',
  },
  {
    id: 'luna-collective',
    title: 'Luna Collective',
    category: 'Frontend',
    description: 'Minimalist luxury e-commerce platform with dynamic filtering, cart state, and responsive typography.',
    longDescription:
      'An avant-garde digital storefront crafted for high-end retail. Features fluid cart interactions, faceted category filters, high-resolution product showcases, and seamless checkout ergonomics.',
    technologies: ['React', 'JavaScript', 'Tailwind CSS', 'PHP', 'CRUD Operations', 'REST APIs'],
    image: '/src/assets/images/project_ecommerce_api_1793827708732.jpg',
    githubUrl: 'https://github.com/rocksd2vops-netizen',
    highlights: [
      'Frictionless client-side product filtering without page reloads',
      'Persistent local cart with instant inventory validations',
      'Ultra-responsive mobile shopping experience with touch targets >= 44px',
    ],
    architectureNotes:
      'Employs custom hooks for cart management, connected to PHP REST controllers and MySQL database for product catalog persistence.',
  },
  {
    id: 'nebula-deploy',
    title: 'Nebula Deploy',
    category: 'Backend',
    description: 'Developer cloud deployment console with live terminal output, commit diffs, and server telemetry.',
    longDescription:
      'A modern developer operations dashboard simulating continuous deployment pipelines, live server resource usage, git commit tracking, and terminal stream execution logs.',
    technologies: ['Python', 'Node.js', 'React', 'Git Integration', 'Express', 'Cloudflare'],
    image: '/src/assets/images/project_dev_terminal_1793827710754.jpg',
    githubUrl: 'https://github.com/rocksd2vops-netizen',
    highlights: [
      'Interactive terminal streaming simulation with colorized stdout',
      'Server health indicators (CPU, memory, latency tracking)',
      'Automated deployment stage transitions with error rollback',
    ],
    architectureNotes:
      'Event-driven backend architecture with Python workers and Express orchestration endpoints, communicating via lightweight JSON payloads.',
  },
  {
    id: 'synapse-ai-studio',
    title: 'Synapse Prompt Studio',
    category: 'AI & Tools',
    description: 'Intelligent prompt engineering suite and workflow orchestrator for LLM pipelines and reasoning chains.',
    longDescription:
      'An advanced prompt design workspace built to iterate, benchmark, and deploy system instructions using Google AI Studio and Gemini models. Includes structured JSON schema validation and automated prompt chains.',
    technologies: ['Google AI Studio', 'Gemini API', 'Python', 'TypeScript', 'JSON Schema', 'REST APIs'],
    image: '/src/assets/images/project_ai_workflow_1793827708353.jpg',
    githubUrl: 'https://github.com/rocksd2vops-netizen',
    highlights: [
      'Multi-step prompt chaining with variable interpolation',
      'Deterministic output enforcement via JSON schema validation',
      'Latency and token consumption monitoring dashboard',
    ],
    architectureNotes:
      'Direct integration with modern Gemini SDKs, providing robust error handling, fallback model routing, and token optimization.',
  },
];

const CATEGORIES = ['All', 'Full-Stack', 'Frontend', 'Backend', 'AI & Tools'] as const;

export const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<typeof CATEGORIES[number]>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects =
    activeCategory === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="relative py-24 overflow-hidden border-t border-[#8B5CF6]/15 bg-[#08080D]">
      {/* Subtle background illumination */}
      <div className="absolute top-1/4 -right-40 w-[600px] h-[600px] bg-[#8B5CF6]/8 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-[#8B5CF6] mb-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6]" />
              Portfolio Showcase
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#F5F5F7] font-heading">
              Featured Case Studies
            </h2>
          </div>

          {/* Interactive Category Filter Tabs (Single-line controls) */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-[#11111A] border border-white/5 overflow-x-auto max-w-full">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#8B5CF6] text-white shadow-md shadow-[#8B5CF6]/30 font-semibold'
                    : 'text-[#9696A5] hover:text-[#F5F5F7] hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 2x2 Bento / Gallery Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-2xl overflow-hidden crystal-glass-card border border-white/10 hover:border-[#8B5CF6]/50 transition-all duration-300 shadow-xl shadow-black/40 flex flex-col justify-between"
            >
              {/* Image Preview Container */}
              <div className="relative aspect-video w-full overflow-hidden bg-[#0A0A10]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />

                {/* Dark gradient overlay for typography readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#08080D] via-transparent to-black/20" />

                {/* Top Badge: Category */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#D8B4FE] px-2.5 py-1 rounded-md crystal-glass border border-white/10">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 sm:p-7 flex flex-col justify-between flex-grow space-y-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#F5F5F7] font-heading group-hover:text-[#D8B4FE] transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-[#9696A5] leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                </div>

                {/* Technologies List (Unboxed clean tags with borders) */}
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-mono text-[#D1D1DB] px-2.5 py-1 rounded-md bg-[#08080D] border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons: View Project & GitHub */}
                <div className="pt-4 border-t border-white/5 flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] hover:from-[#9061F9] hover:to-[#8B5CF6] rounded-lg transition-all shadow-md shadow-[#8B5CF6]/20 cursor-pointer"
                  >
                    <span>View Project</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-[#9696A5] hover:text-[#F5F5F7] hover:bg-white/5 rounded-lg border border-white/10 transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Case Study Modal Detail View */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl crystal-glass border border-white/15 shadow-2xl p-6 sm:p-8 space-y-6 text-left"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#8B5CF6]">
                  {selectedProject.category} Case Study
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#F5F5F7] font-heading mt-1">
                  {selectedProject.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-[#9696A5] hover:text-white transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image */}
            <div className="rounded-xl overflow-hidden border border-white/10 aspect-video bg-[#08080D]">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover object-top"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* In-Depth Overview */}
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-bold text-[#F5F5F7] font-heading uppercase tracking-wider mb-1">
                  Architecture & Overview
                </h4>
                <p className="text-sm text-[#9696A5] leading-relaxed">
                  {selectedProject.longDescription}
                </p>
              </div>

              <div>
                <h4 className="text-sm font-bold text-[#F5F5F7] font-heading uppercase tracking-wider mb-2">
                  Key Technical Highlights
                </h4>
                <div className="space-y-2">
                  {selectedProject.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs text-[#D1D1DB]">
                      <CheckCircle2 className="w-4 h-4 text-[#8B5CF6] shrink-0" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies Stack */}
              <div>
                <h4 className="text-sm font-bold text-[#F5F5F7] font-heading uppercase tracking-wider mb-2">
                  Technologies Utilized
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-mono text-[#D8B4FE] px-3 py-1 rounded-md bg-[#8B5CF6]/10 border border-[#8B5CF6]/30"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Note on codebase */}
              <div className="p-4 rounded-xl bg-[#08080D] border border-white/5 text-xs font-mono text-[#9696A5] space-y-1">
                <div className="text-[#8B5CF6]">// System Engineering Note</div>
                <p>{selectedProject.architectureNotes}</p>
              </div>
            </div>

            {/* Modal Footer Actions */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-4">
              <a
                href={selectedProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] rounded-lg shadow-md hover:opacity-95"
              >
                <Github className="w-4 h-4" />
                <span>View Repository on GitHub</span>
              </a>

              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="px-4 py-2.5 text-xs font-medium text-[#9696A5] hover:text-white rounded-lg border border-white/10"
              >
                Close Case Study
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
