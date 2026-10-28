import React, { useState } from 'react';
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

export default function App() {
  const [selectedService, setSelectedService] = useState('');
  const [activeAccent, setActiveAccent] = useState('amber');

  const handleSelectService = (serviceTitle) => {
    setSelectedService(serviceTitle);
  };

  return (
    <div className="relative min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-amber-500/20 selection:text-amber-950">
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
