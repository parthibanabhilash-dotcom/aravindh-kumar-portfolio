import React from 'react';
import { ArrowUp, Mail, Phone } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-white border-t border-slate-900 pt-16 pb-12 relative overflow-hidden">
      {/* Background ambient accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-[rgb(var(--accent))]/10 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-900">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[rgb(var(--accent))] via-[rgb(var(--accent-tertiary))] to-[rgb(var(--accent-secondary))] p-[2px] shadow-md">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center font-extrabold text-transparent bg-clip-text bg-gradient-to-tr from-[rgb(var(--accent))] via-[rgb(var(--accent-tertiary))] to-[rgb(var(--accent-secondary))] text-base">
                  AK
                </div>
              </div>
              <div>
                <span className="font-extrabold text-base text-white tracking-wide">
                  {personalInfo.name}
                </span>
                <p className="text-xs text-slate-400 font-mono">
                  {personalInfo.title}
                </p>
              </div>
            </div>

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              "Building Digital Experiences That Make an Impact."
            </p>

            <div className="inline-block px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs text-amber-400 font-mono font-semibold">
              Tagline: Building. Designing. Creating.
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 font-bold">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-slate-400 font-medium">
              <li>
                <a href="#about" className="hover:text-[rgb(var(--accent))] transition-colors">
                  About Me
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-[rgb(var(--accent-tertiary))] transition-colors">
                  Skills & Tools
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-[rgb(var(--accent-secondary))] transition-colors">
                  Selected Projects
                </a>
              </li>
              <li>
                <a href="#ai-workflow" className="hover:text-[#a855f7] transition-colors">
                  AI Workflows
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#f43f5e] transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-[rgb(var(--accent))] transition-colors">
                  Working Process
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Direct */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 font-bold">
              Get in Touch
            </h4>
            <div className="space-y-2 text-sm text-slate-400 font-medium">
              <a
                href={`mailto:${personalInfo.contact.email}`}
                className="flex items-center gap-2 hover:text-[rgb(var(--accent))] transition-colors"
              >
                <Mail className="w-4 h-4 text-[rgb(var(--accent))] shrink-0" />
                <span>{personalInfo.contact.email}</span>
              </a>
              <a
                href={`tel:${personalInfo.contact.phone.replace(/\s+/g, '')}`}
                className="flex items-center gap-2 hover:text-[rgb(var(--accent-tertiary))] transition-colors"
              >
                <Phone className="w-4 h-4 text-[rgb(var(--accent-tertiary))] shrink-0" />
                <span>{personalInfo.contact.phone}</span>
              </a>
            </div>
            <p className="text-xs text-slate-400 pt-2">
              Open for freelance projects, digital consultation, and technical opportunities.
            </p>
          </div>

        </div>

        {/* Bottom bar: Copyright & Back-to-top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {currentYear} {personalInfo.name}. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-amber-400/50 hover:bg-slate-800 transition-all text-xs font-semibold cursor-pointer"
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-amber-400" />
          </button>
        </div>
      </div>
    </footer>
  );
}
