import React, { useState, useEffect } from 'react';
import { Logo } from './Logo.tsx';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'Journey', href: '#journey' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'crystal-glass-nav py-3.5 shadow-xl shadow-black/50'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark & Original Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2 group whitespace-nowrap shrink-0 transition-opacity hover:opacity-90"
            aria-label="ROCKS DEV Home"
          >
            <Logo size="sm" showText={true} />
          </a>

          {/* Zone 2: Clean 4–6 nav links with single-line labels */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#9696A5]">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative py-1 whitespace-nowrap shrink-0 transition-colors duration-200 hover:text-[#F5F5F7] ${
                    isActive ? 'text-[#F5F5F7] font-semibold' : ''
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#8B5CF6] to-[#A855F7] rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Zone 3: 1 Primary Action (Let's Talk) & Mobile Hamburger */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] hover:from-[#9061F9] hover:to-[#8B5CF6] rounded-lg transition-all duration-200 shadow-md shadow-[#8B5CF6]/25 hover:shadow-[#8B5CF6]/40 hover:-translate-y-0.5 whitespace-nowrap shrink-0"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile menu trigger button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#9696A5] hover:text-[#F5F5F7] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6] md:hidden rounded-lg crystal-glass border border-white/10"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile slide-down navigation panel */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 p-4 rounded-xl crystal-glass-card shadow-2xl space-y-2 animate-in fade-in slide-in-from-top-2 duration-200">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`block px-3 py-2 rounded-lg text-sm transition-colors ${
                    isActive
                      ? 'bg-[#8B5CF6]/15 text-[#F5F5F7] font-semibold'
                      : 'text-[#9696A5] hover:bg-white/5 hover:text-[#F5F5F7]'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
            <div className="pt-2 border-t border-white/5">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="flex items-center justify-center gap-2 w-full py-2.5 text-xs font-semibold text-white bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] rounded-lg shadow-md"
              >
                <span>Let's Talk on WhatsApp</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
