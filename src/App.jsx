import React, { useEffect, useState } from 'react';
import useEntranceMotion from './hooks/useEntranceMotion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import AiSection from './components/AiSection';
import Services from './components/Services';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PalettePill from './components/PalettePill';

const accents = {
  indigo: { primary: '99 102 241', secondary: '245 158 11', tertiary: '16 185 129' },
  emerald: { primary: '5 150 105', secondary: '99 102 241', tertiary: '20 184 166' },
  purple: { primary: '168 85 247', secondary: '236 72 153', tertiary: '99 102 241' },
  rose: { primary: '244 63 94', secondary: '168 85 247', tertiary: '245 158 11' },
  amber: { primary: '217 119 6', secondary: '99 102 241', tertiary: '16 185 129' },
};

export default function App() {
  useEntranceMotion();
  const [selectedService, setSelectedService] = useState('');
  const [activeAccent, setActiveAccent] = useState(() => {
    try {
      const saved = localStorage.getItem('portfolio-accent');
      return Object.hasOwn(accents, saved) ? saved : 'indigo';
    } catch {
      return 'indigo';
    }
  });

  useEffect(() => {
    try { localStorage.setItem('portfolio-accent', activeAccent); } catch { /* Storage may be unavailable. */ }
  }, [activeAccent]);

  const theme = accents[activeAccent];

  const handleSelectService = (serviceTitle) => {
    setSelectedService(serviceTitle);
  };

  return (
    <div style={{ '--accent': theme.primary, '--accent-secondary': theme.secondary, '--accent-tertiary': theme.tertiary }} className="relative min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-amber-500/20 selection:text-amber-950">
      <Navbar />
      
      <main className="flex-1">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <AiSection />
        <Services onSelectService={handleSelectService} />
        <Process />
        <Contact prefilledService={selectedService} />
      </main>

      <Footer />
      <PalettePill activeAccent={activeAccent} onSelectAccent={setActiveAccent} />
    </div>
  );
}
