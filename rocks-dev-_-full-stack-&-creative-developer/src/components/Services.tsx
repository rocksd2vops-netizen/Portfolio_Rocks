import React from 'react';
import { ArrowUpRight, Monitor, Server, Layers, Palette, Database, Sparkles, Gauge } from 'lucide-react';
import { getAssetUrl } from '../utils/assets.ts';

interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  detailedDesc: string;
  deliverables: string[];
  icon: React.ComponentType<{ className?: string }>;
  image: string;
}

const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'frontend',
    number: '01',
    title: 'Frontend Development',
    shortDesc: 'Modern, responsive, interactive user interfaces.',
    detailedDesc:
      'Engineered with React, TypeScript, and modern CSS frameworks. High-performance, pixel-precise web interfaces that deliver fluid animations, zero-lag interactions, and optimal responsiveness across all viewports.',
    deliverables: ['Custom React Applications', 'State Management & Hooks', 'Responsive Mobile-First UI', 'Tailwind & Modern CSS'],
    icon: Monitor,
    image: getAssetUrl('images/services/service-frontend.webp'),
  },
  {
    id: 'backend',
    number: '02',
    title: 'Backend Development',
    shortDesc: 'Powerful server-side applications and database integration.',
    detailedDesc:
      'Robust server architectures built with Node.js, Express, PHP, and Python. Engineered for high concurrency, secure authentication workflows, robust error handling, and clean RESTful API standards.',
    deliverables: ['REST API Endpoints', 'Authentication & JWT', 'Server Controllers & Middlewares', 'Microservice Pipelines'],
    icon: Server,
    image: getAssetUrl('images/services/service-backend.webp'),
  },
  {
    id: 'fullstack',
    number: '03',
    title: 'Full-Stack Web Development',
    shortDesc: 'Complete web solutions from frontend to backend.',
    detailedDesc:
      'End-to-end digital solutions uniting client-side dynamics with powerful server and persistence layers. From architecture definition to final cloud deployment, delivering unified, maintainable software systems.',
    deliverables: ['End-to-End Web Apps', 'Unified Monolith or SPA + API', 'Third-Party Webhooks & Auth', 'Production Cloud Deployments'],
    icon: Layers,
    image: getAssetUrl('images/services/service-fullstack.webp'),
  },
  {
    id: 'design',
    number: '04',
    title: 'Web Design & UI/UX',
    shortDesc: 'Beautiful, intuitive, user-focused interfaces.',
    detailedDesc:
      'Design systems grounded in visual hierarchy, human ergonomics, and modern aesthetic restraint. Crafting dark-mode experiences, intentional typography pairings, and intuitive user journeys that elevate brand authority.',
    deliverables: ['Interactive Prototyping', 'Design Systems & Tokens', 'Ergonomic Flow & Wireframes', 'Dark Mode Architecture'],
    icon: Palette,
    image: getAssetUrl('images/services/service-design.webp'),
  },
  {
    id: 'database',
    number: '05',
    title: 'Database Development',
    shortDesc: 'MySQL, database architecture, and CRUD systems.',
    detailedDesc:
      'Structured relational database schemas with MySQL and SQL. Optimized queries, normalized table designs, indexed foreign keys, and secure transactional CRUD operations tailored for data integrity.',
    deliverables: ['Relational Schema Design', 'Complex SQL Query Optimization', 'Secure CRUD Systems', 'Data Migration & Indexing'],
    icon: Database,
    image: getAssetUrl('images/services/service-database.webp'),
  },
  {
    id: 'ai',
    number: '06',
    title: 'AI Integration & Prompt Engineering',
    shortDesc: 'AI-assisted solutions, intelligent workflows, and advanced prompt design.',
    detailedDesc:
      'Advanced prompt design and generative AI integration leveraging Google AI Studio and Gemini models. Designing deterministic system instructions, structured output schemas, and automated agent pipelines.',
    deliverables: ['Advanced System Prompt Engineering', 'Google AI Studio Integrations', 'Automated Content & Code Pipelines', 'Structured Output Parsing'],
    icon: Sparkles,
    image: getAssetUrl('images/services/service-ai.webp'),
  },
  {
    id: 'optimization',
    number: '07',
    title: 'Website Optimization',
    shortDesc: 'Performance, responsiveness, and technical improvements.',
    detailedDesc:
      'Comprehensive performance tuning: Core Web Vitals optimization, bundle size minimization, asset compression, lazy loading, SEO enhancements, and edge caching via Cloudflare.',
    deliverables: ['Lighthouse 95+ Scores', 'Bundle & CSS Minimization', 'Core Web Vitals Tuning', 'SEO & OpenGraph Architecture'],
    icon: Gauge,
    image: getAssetUrl('images/services/service-optimization.webp'),
  },
];

interface ServicesProps {
  onSelectService?: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const handleInquire = (serviceTitle: string) => {
    if (onSelectService) {
      onSelectService(serviceTitle);
    }
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="relative py-24 overflow-hidden border-t border-[#8B5CF6]/15 bg-[#0A0A12]">
      {/* Ambient background glow */}
      <div className="absolute bottom-10 left-1/4 w-[600px] h-[600px] bg-[#8B5CF6]/6 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-mono uppercase tracking-widest text-[#8B5CF6] mb-2 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6]" />
            Professional Solutions
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#F5F5F7] font-heading">
            Engineering Services & Expertise
          </h2>
          <p className="mt-4 text-base text-[#9696A5] leading-relaxed">
            Delivering clean, scalable, and beautifully engineered digital solutions across the full stack.
          </p>
        </div>

        {/* 7 Services Grid with Distinct Layout Rhythm */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_DATA.map((service, index) => {
            const Icon = service.icon;
            // Highlight the Full-Stack and AI Integration cards with subtle distinct accents
            const isFeatured = service.id === 'fullstack' || service.id === 'ai';

            return (
              <div
                key={service.id}
                className={`group relative p-7 rounded-2xl transition-all duration-300 flex flex-col justify-between ${
                  isFeatured
                    ? 'crystal-glass border border-[#8B5CF6]/50 hover:border-[#8B5CF6] shadow-2xl shadow-[#8B5CF6]/15'
                    : 'crystal-glass-card border border-white/10 hover:border-[#8B5CF6]/50'
                } hover:-translate-y-1`}
              >
                {/* Subtle top corner neon glow on hover */}
                <div className="absolute top-0 right-0 w-28 h-28 bg-[#8B5CF6]/0 group-hover:bg-[#8B5CF6]/10 rounded-tr-2xl blur-xl transition-all duration-300 pointer-events-none" />

                <div>
                  {/* Top Bar with bespoke Icon and Editorial Numbering */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-xl crystal-glass-subtle text-[#8B5CF6] border border-white/10 group-hover:scale-105 group-hover:text-[#A855F7] transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono text-[#9696A5]/60 group-hover:text-[#8B5CF6] transition-colors">
                      {service.number}
                    </span>
                  </div>

                  {/* Service Graphic Preview Banner */}
                  <div className="relative aspect-[21/9] w-full rounded-xl overflow-hidden mb-4 border border-white/5 bg-[#08080D]">
                    <img
                      src={service.image}
                      alt={service.title}
                      width={400}
                      height={170}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover opacity-75 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A12] via-transparent to-transparent pointer-events-none" />
                  </div>

                  <h3 className="text-xl font-bold text-[#F5F5F7] font-heading mb-1.5 group-hover:text-[#D8B4FE] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs font-mono text-[#8B5CF6] mb-3">
                    {service.shortDesc}
                  </p>

                  <p className="text-xs text-[#9696A5] leading-relaxed mb-6">
                    {service.detailedDesc}
                  </p>

                  {/* Key Deliverables Bullet Points */}
                  <div className="space-y-1.5 mb-6 pt-3 border-t border-white/5">
                    {service.deliverables.map((item, dIdx) => (
                      <div key={dIdx} className="flex items-center gap-2 text-[11px] text-[#D1D1DB] font-mono">
                        <span className="w-1 h-1 rounded-full bg-[#8B5CF6]" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Button */}
                <button
                  type="button"
                  onClick={() => handleInquire(service.title)}
                  className="w-full mt-2 pt-3 border-t border-white/5 flex items-center justify-between text-xs font-semibold text-[#8B5CF6] group-hover:text-white transition-colors cursor-pointer"
                >
                  <span>Request This Service</span>
                  <div className="p-1 rounded-md bg-[#8B5CF6]/10 group-hover:bg-[#8B5CF6] text-white transition-colors">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
