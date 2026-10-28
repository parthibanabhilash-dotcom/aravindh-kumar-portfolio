import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  Sparkles,
  Mail,
  Phone,
  CheckCircle2,
  Cpu,
  FileDown
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect for roles
  useEffect(() => {
    const currentRole = personalInfo.roles[roleIndex];
    let timer;

    if (!isDeleting) {
      if (displayedText.length < currentRole.length) {
        timer = setTimeout(() => {
          setDisplayedText(currentRole.slice(0, displayedText.length + 1));
        }, 80);
      } else {
        timer = setTimeout(() => setIsDeleting(true), 2000);
      }
    } else {
      if (displayedText.length > 0) {
        timer = setTimeout(() => {
          setDisplayedText(currentRole.slice(0, displayedText.length - 1));
        }, 40);
      } else {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % personalInfo.roles.length);
      }
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, roleIndex]);

  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden bg-white bg-grid-pattern-light">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[650px] h-[380px] bg-gradient-to-tr from-[#6366f1]/10 via-[#f59e0b]/10 to-[#10b981]/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-[#f59e0b]/10 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#6366f1]/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            
            {/* Small introduction badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold tracking-wider uppercase shadow-2xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#f59e0b] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#f59e0b]"></span>
              </span>
              HELLO, I'M ARAVINDH KUMAR
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-950 tracking-tight leading-[1.15]">
              I Build <span className="text-[#6366f1]">Websites</span>.<br />
              I Design <span className="text-[#f59e0b]">Experiences</span>.<br />
              I Create <span className="bg-gradient-to-r from-[#6366f1] via-[#10b981] to-[#f59e0b] bg-clip-text text-transparent">Digital Solutions</span>.
            </h1>

            {/* Rotating Role Pill */}
            <div className="flex items-center gap-2.5 text-base sm:text-lg font-medium text-slate-700">
              <span className="text-slate-500">Specializing as:</span>
              <div className="inline-flex items-center px-3.5 py-1 rounded-lg bg-slate-950 text-[#f59e0b] font-mono text-sm sm:text-base font-bold min-h-[38px] shadow-sm">
                <span>{displayedText}</span>
                <span className="inline-block w-[2px] h-5 ml-1 bg-[#6366f1] animate-pulse"></span>
              </div>
            </div>

            {/* Hero Description */}
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              <strong className="text-slate-900 font-semibold">Building Digital Experiences That Make an Impact.</strong>{' '}
              {personalInfo.description}
            </p>

            {/* CTA Buttons with Resume Option */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2 w-full sm:w-auto">
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-slate-950 text-white hover:bg-[#6366f1] font-bold text-sm sm:text-base shadow-lg shadow-slate-950/20 hover:shadow-indigo-500/25 transition-all duration-200 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#6366f1]"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 text-[#f59e0b]" />
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-white border-2 border-slate-900 text-slate-950 hover:bg-slate-50 hover:border-[#6366f1] hover:text-[#6366f1] font-bold text-sm sm:text-base transition-all duration-200 shadow-xs focus:outline-none focus:ring-2 focus:ring-[#6366f1]"
              >
                <span>Let's Work Together</span>
              </a>

              {/* Direct Download Resume CTA */}
              <a
                href="/Aravindh_Kumar_Resume.pdf"
                download="Aravindh_Kumar_Resume.pdf"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 hover:bg-[#f59e0b] hover:text-white hover:border-[#f59e0b] font-bold text-sm sm:text-base transition-all duration-200 shadow-xs group"
                title="Download Aravindh Kumar's Resume in PDF Format"
              >
                <FileDown className="w-4 h-4 text-[#f59e0b] group-hover:text-white transition-colors" />
                <span>Download Resume (PDF)</span>
              </a>
            </div>

            {/* Quick Contact & Status Badges */}
            <div className="pt-4 border-t border-slate-200 w-full flex flex-wrap items-center gap-6 text-xs sm:text-sm text-slate-600">
              <a
                href={`mailto:${personalInfo.contact.email}`}
                className="flex items-center gap-2 hover:text-[#6366f1] transition-colors font-medium"
                title="Send direct email"
              >
                <div className="p-1.5 rounded-md bg-indigo-50 text-[#6366f1] border border-indigo-200">
                  <Mail className="w-4 h-4" />
                </div>
                <span>{personalInfo.contact.email}</span>
              </a>

              <a
                href={`tel:${personalInfo.contact.phone.replace(/\s+/g, '')}`}
                className="flex items-center gap-2 hover:text-[#f59e0b] transition-colors font-medium"
                title="Call direct"
              >
                <div className="p-1.5 rounded-md bg-amber-50 text-[#f59e0b] border border-amber-200">
                  <Phone className="w-4 h-4" />
                </div>
                <span>{personalInfo.contact.phone}</span>
              </a>

              <div className="flex items-center gap-2 text-slate-700 font-medium">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Available for Projects</span>
              </div>
            </div>

          </div>

          {/* Right Column: High-Contrast Developer & Design Studio Interface */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
              
              {/* Outer decorative border */}
              <div className="relative rounded-2xl bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 p-1 shadow-2xl shadow-slate-900/25">
                <div className="rounded-[14px] bg-[#0c1022] overflow-hidden">
                  
                  {/* Window Chrome Header */}
                  <div className="flex items-center justify-between px-4 py-3 bg-[#080b18] border-b border-white/10">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-rose-500" />
                      <div className="w-3 h-3 rounded-full bg-amber-500" />
                      <div className="w-3 h-3 rounded-full bg-emerald-500" />
                      <span className="ml-2 text-xs font-mono text-slate-400">aravindh-studio.config.ts</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#f59e0b] bg-amber-950/60 border border-amber-700/50 px-2 py-0.5 rounded font-bold">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b] animate-ping"></span>
                      ACTIVE STUDIO
                    </div>
                  </div>

                  {/* Code & Studio Interface Content */}
                  <div className="p-5 font-mono text-xs sm:text-[13px] leading-relaxed text-slate-300 space-y-3">
                    <div className="text-slate-500">// Personal Brand Profile & Stack</div>
                    
                    <div>
                      <span className="text-[#f59e0b] font-bold">const</span>{' '}
                      <span className="text-[#6366f1] font-bold">creator</span> = {'{'}
                    </div>
                    
                    <div className="pl-4 space-y-1">
                      <div>
                        <span className="text-slate-400">name:</span>{' '}
                        <span className="text-[#10b981]">"Aravindh Kumar"</span>,
                      </div>
                      <div>
                        <span className="text-slate-400">focus:</span>{' '}
                        <span className="text-amber-300">["Websites", "WordPress", "Digital Creatives"]</span>,
                      </div>
                      <div>
                        <span className="text-slate-400">aiIntegration:</span>{' '}
                        <span className="text-indigo-300">["Codex", "Claude Code", "Antigravity"]</span>,
                      </div>
                      <div>
                        <span className="text-slate-400">designTools:</span>{' '}
                        <span className="text-purple-300">["Canva", "Photoshop", "Illustrator", "CapCut"]</span>,
                      </div>
                      <div>
                        <span className="text-slate-400">deliverables:</span>{' '}
                        <span className="text-[#10b981]">"Impactful digital experiences"</span>
                      </div>
                    </div>

                    <div>
                      {'}'};
                    </div>

                    <div className="pt-2 text-slate-500">// Execution Pipeline</div>
                    <div className="p-3 rounded-lg bg-black/50 border border-white/10 space-y-2">
                      <div className="flex items-center justify-between text-[11px] text-slate-300">
                        <span className="flex items-center gap-1.5 text-[#6366f1] font-semibold">
                          <Cpu className="w-3.5 h-3.5 text-[#f59e0b]" /> AI-Augmented Stack
                        </span>
                        <span className="text-[#10b981] font-medium">Ready for Deploy</span>
                      </div>
                      <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                        <div className="bg-gradient-to-r from-[#6366f1] via-[#10b981] to-[#f59e0b] h-1.5 rounded-full w-full"></div>
                      </div>
                    </div>

                  </div>

                  {/* Bottom Interactive Tech Badges */}
                  <div className="px-5 py-3.5 bg-[#080b18] border-t border-white/10 flex flex-wrap items-center justify-between gap-2 text-xs">
                    <span className="text-slate-400 text-[11px]">Core Tools:</span>
                    <div className="flex flex-wrap gap-1.5">
                      <span className="px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 text-[11px] font-semibold">
                        HTML / CSS / JS
                      </span>
                      <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30 text-[11px] font-semibold">
                        WordPress
                      </span>
                      <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[11px] font-semibold">
                        Hostinger
                      </span>
                    </div>
                  </div>

                </div>
              </div>

              {/* Floating Highlight Card 1: AI Power */}
              <div className="absolute -bottom-6 -left-6 sm:-left-8 p-3.5 rounded-xl bg-white border border-slate-200 shadow-xl shadow-slate-900/10 flex items-center gap-3 animate-float">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-[#f59e0b] to-[#ea580c] flex items-center justify-center text-white shadow-sm">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">AI-Assisted Efficiency</div>
                  <div className="text-[11px] text-slate-500 font-medium">Codex • Claude Code • Antigravity</div>
                </div>
              </div>

              {/* Floating Highlight Card 2: 4 Live Projects */}
              <div className="absolute -top-6 -right-4 sm:-right-6 p-3 rounded-xl bg-white border border-slate-200 shadow-xl shadow-slate-900/10 flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-indigo-50 border border-indigo-200 flex items-center justify-center text-[#6366f1]">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-slate-900">4 Live Projects</div>
                  <div className="text-[10px] text-slate-500 font-medium">Verified Deployments</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
