import React, { useState, useEffect } from 'react';
import { ArrowUpRight, FileDown, Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'AI Workflows', href: '#ai-workflow' },
  { name: 'Services', href: '#services' },
  { name: 'Process', href: '#process' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    const desktop = window.matchMedia('(min-width: 1024px)');
    const closeOnDesktop = () => { if (desktop.matches) setMenuOpen(false); };
    document.addEventListener('keydown', closeOnEscape);
    desktop.addEventListener('change', closeOnDesktop);
    return () => {
      document.removeEventListener('keydown', closeOnEscape);
      desktop.removeEventListener('change', closeOnDesktop);
    };
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3 py-3">
          <a href="#" className="flex items-center gap-2 sm:gap-3 rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4" aria-label="Aravindh Kumar Home">
            <span className="flex items-center justify-center w-10 h-10 shrink-0 rounded-xl bg-slate-950 font-extrabold text-white">AK</span>
            <span className="flex flex-col">
              <span className="font-extrabold text-sm text-slate-950">Aravindh Kumar</span>
              <span className="text-[11px] text-slate-500 font-mono">Digital Portfolio</span>
            </span>
          </a>
          <div className="flex items-center gap-2">
            <a href="/Aravindh_Kumar_Resume.pdf" download="Aravindh_Kumar_Resume.pdf" className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-bold border border-slate-200 rounded-xl hover:text-[rgb(var(--accent))]" title="Download resume PDF">
              <FileDown className="w-4 h-4" /> Resume PDF
            </a>
            <a href="#contact" className="hidden sm:inline-flex items-center gap-1 px-3 py-2 text-xs font-bold text-white rounded-xl bg-slate-950 hover:bg-[rgb(var(--accent))]">
              Let's Talk <ArrowUpRight className="w-4 h-4" />
            </a>
            <button type="button" onClick={() => setMenuOpen((open) => !open)} aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={menuOpen} aria-controls="section-navigation" className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-xl border border-slate-200 text-slate-900 focus-visible:outline focus-visible:outline-2">
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
        <nav id="section-navigation" aria-label="Main navigation" className={`${menuOpen ? 'flex' : 'hidden'} lg:flex flex-col lg:flex-row lg:items-center gap-1 pb-3 pt-1 max-h-[calc(100dvh-5rem)] overflow-y-auto`}>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)} className="shrink-0 whitespace-nowrap px-3 sm:px-4 py-3 lg:py-2 text-xs sm:text-sm font-semibold text-slate-700 bg-slate-50 rounded-full hover:bg-slate-100 hover:text-[rgb(var(--accent))] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px]">
              {link.name}
            </a>
          ))}
          <a href="/Aravindh_Kumar_Resume.pdf" download className="sm:hidden px-3 py-3 text-sm font-semibold text-slate-700" onClick={() => setMenuOpen(false)}>Download Resume (PDF)</a>
        </nav>
      </div>
    </header>
  );
}
