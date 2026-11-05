/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { CodeBackground } from './components/CodeBackground.tsx';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { Stats } from './components/Stats.tsx';
import { About } from './components/About.tsx';
import { Skills } from './components/Skills.tsx';
import { Services } from './components/Services.tsx';
import { Projects } from './components/Projects.tsx';
import { Journey } from './components/Journey.tsx';
import { Contact } from './components/Contact.tsx';
import { Footer } from './components/Footer.tsx';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [selectedService, setSelectedService] = useState<string>('');

  useEffect(() => {
    const sectionIds = ['home', 'about', 'skills', 'services', 'projects', 'journey', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSelectService = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
  };

  return (
    <div className="relative min-h-screen bg-[#08080D] text-[#F5F5F7] font-sans selection:bg-[#8B5CF6]/30 selection:text-white">
      {/* Animated programming code background (decorative, subtle character typing/erasing) */}
      <CodeBackground />

      {/* Fixed Navigation Bar */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Sections */}
      <main className="relative z-10 flex flex-col">
        {/* Hero Section */}
        <Hero />

        {/* Developer Statistics */}
        <Stats />

        {/* About Me */}
        <About />

        {/* Technical Skills - Moving Technology Strips */}
        <Skills />

        {/* Services */}
        <Services onSelectService={handleSelectService} />

        {/* Projects / Portfolio Showcase */}
        <Projects />

        {/* Development Journey Timeline */}
        <Journey />

        {/* Contact Form with WhatsApp Integration */}
        <Contact initialProjectType={selectedService} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
