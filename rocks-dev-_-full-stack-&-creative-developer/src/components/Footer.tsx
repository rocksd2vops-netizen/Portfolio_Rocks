import React from 'react';
import { Logo } from './Logo.tsx';
import { MessageCircle, Mail, Instagram, Github, ArrowUp, Code2, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      name: 'WhatsApp',
      href: 'https://wa.me/595986970971',
      icon: MessageCircle,
      label: '+595 986 970971',
      color: 'hover:text-emerald-400 hover:border-emerald-500/40',
    },
    {
      name: 'Gmail',
      href: 'mailto:rocks.d2vops@gmail.com',
      icon: Mail,
      label: 'rocks.d2vops@gmail.com',
      color: 'hover:text-[#8B5CF6] hover:border-[#8B5CF6]/40',
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/reda_1mg?rpxt=MWZzOHNjdmlrOGJ5dQ%3D%3D&utm_source=qr',
      icon: Instagram,
      label: '@reda_1mg',
      color: 'hover:text-pink-400 hover:border-pink-500/40',
    },
    {
      name: 'GitHub',
      href: 'https://github.com/rocksd2vops-netizen',
      icon: Github,
      label: 'rocksd2vops-netizen',
      color: 'hover:text-white hover:border-white/40',
    },
  ];

  return (
    <footer className="relative bg-[#050508] border-t border-[#8B5CF6]/20 pt-16 pb-12 overflow-hidden text-left">
      {/* Subtle bottom ambient purple glow */}
      <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[600px] h-48 bg-[#8B5CF6]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/5 items-start">
          
          {/* Col 1: Brand & Tagline */}
          <div className="md:col-span-5 space-y-4">
            <Logo size="md" showText={true} />
            <p className="text-xl font-medium text-[#F5F5F7] font-heading tracking-tight italic">
              "Code. Create. Evolve."
            </p>
            <p className="text-xs text-[#9696A5] leading-relaxed max-w-sm">
              Crafting high-impact web applications, robust server architectures, and creative digital solutions for forward-thinking ideas.
            </p>
            <div className="pt-2 text-xs font-mono text-[#8B5CF6]">
              Brand: <span className="text-[#F5F5F7] font-semibold">ROCKS DEV</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-[#9696A5]">
              Quick Navigation
            </div>
            <ul className="space-y-2 text-xs text-[#D1D1DB] font-medium">
              {['Home', 'About', 'Skills', 'Services', 'Projects', 'Journey', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="hover:text-[#8B5CF6] transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Real Direct Social Links */}
          <div className="md:col-span-4 space-y-4">
            <div className="text-xs font-mono uppercase tracking-widest text-[#9696A5]">
              Connect & Collaborate
            </div>

            <div className="grid grid-cols-1 gap-2.5">
              {socialLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-between p-3 rounded-xl crystal-glass-card border border-white/5 ${item.color} transition-all duration-200 group`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-1.5 rounded-lg bg-white/5 text-[#9696A5] group-hover:text-inherit transition-colors">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-semibold text-[#F5F5F7]">
                        {item.name}
                      </span>
                    </div>
                    <span className="text-[11px] font-mono text-[#9696A5] group-hover:text-inherit">
                      {item.label}
                    </span>
                  </a>
                );
              })}
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#9696A5]">
          <div>
            © 2026 <span className="text-[#F5F5F7] font-semibold">ROCKS DEV</span>. All Rights Reserved.
          </div>

          <div className="flex items-center gap-6">
            <span className="text-[11px] text-[#9696A5]">
              Designed & Built with React, Tailwind & Pure Code
            </span>

            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg crystal-glass hover:bg-white/10 border border-white/10 text-[#D1D1DB] hover:text-white transition-all cursor-pointer"
              aria-label="Back to top"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-[#8B5CF6]" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
