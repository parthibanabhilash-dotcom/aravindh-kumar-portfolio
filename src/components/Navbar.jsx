import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, FileDown } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'AI Workflows', href: '#ai-workflow' },
    { name: 'Services', href: '#services' },
    { name: 'Process', href: '#process' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / AK Monogram */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#f59e0b] rounded-lg p-1"
            aria-label="Aravindh Kumar Home"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-slate-950 p-[2px] shadow-md shadow-slate-950/20 group-hover:shadow-[#f59e0b]/30 transition-all">
              <div className="w-full h-full bg-slate-900 rounded-[9px] flex items-center justify-center font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-tr from-[#6366f1] via-[#10b981] to-[#f59e0b] text-base">
                AK
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-sm tracking-wide text-slate-950 group-hover:text-[#6366f1] transition-colors">
                Aravindh Kumar
              </span>
              <span className="text-[11px] text-slate-500 font-mono tracking-wider">
                Digital Portfolio
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-100/90 border border-slate-200/80 px-4 py-1.5 rounded-full backdrop-blur-sm shadow-xs">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 text-xs font-bold text-slate-700 hover:text-[#6366f1] rounded-full hover:bg-white hover:shadow-xs transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA & Actions */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Resume Download Button */}
            <a
              href="/Aravindh_Kumar_Resume.pdf"
              download="Aravindh_Kumar_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-slate-800 bg-white border border-slate-200 hover:border-[#6366f1] hover:text-[#6366f1] rounded-xl shadow-xs transition-all duration-200 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#6366f1]"
              title="Download Aravindh Kumar's Resume in PDF"
            >
              <FileDown className="w-4 h-4 text-[#f59e0b]" />
              <span>Resume PDF</span>
            </a>

            <a
              href="#contact"
              className="relative inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white rounded-xl bg-slate-950 hover:bg-[#6366f1] shadow-md shadow-slate-900/15 hover:shadow-indigo-500/25 transition-all duration-200 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#6366f1]"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-4 h-4 text-amber-400" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-100 border border-slate-200 text-slate-800 hover:text-[#6366f1] focus:outline-none focus:ring-2 focus:ring-[#6366f1]"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-200 bg-white/95 backdrop-blur-xl px-4 pt-4 pb-6 mt-3 space-y-3 shadow-xl">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 text-sm font-bold text-slate-800 hover:text-[#6366f1] hover:bg-indigo-50/50 rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
          
          <div className="pt-3 border-t border-slate-200 flex flex-col gap-2">
            <a
              href="/Aravindh_Kumar_Resume.pdf"
              download="Aravindh_Kumar_Resume.pdf"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 text-sm font-bold text-slate-900 bg-slate-100 hover:bg-slate-200 border border-slate-200 rounded-xl transition-colors"
            >
              <FileDown className="w-4 h-4 text-[#f59e0b]" />
              <span>Download Resume (PDF)</span>
            </a>

            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 px-4 text-sm font-bold text-white rounded-xl bg-slate-950 hover:bg-[#6366f1] shadow-md transition-colors"
            >
              Let's Work Together
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
