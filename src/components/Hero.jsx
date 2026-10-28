import React from 'react';
import RotatingRole from './RotatingRole';
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


  return (
    <section className="relative min-h-[100svh] pt-28 lg:pt-44 pb-20 flex items-center justify-center overflow-hidden bg-white bg-grid-pattern-light">
      {/* Background Ambient Glows */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            
            {/* Small introduction badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold tracking-wider uppercase shadow-2xs">
              <span className="relative flex h-2 w-2">
                <span className=" absolute inline-flex h-full w-full rounded-full bg-[rgb(var(--accent-secondary))] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[rgb(var(--accent-secondary))]"></span>
              </span>
              HELLO, I'M ARAVINDH KUMAR
            </div>

            {/* Main Headline */}
            <h1 className="text-[clamp(1.65rem,4.5vw,3.75rem)] font-extrabold text-slate-950 tracking-tight leading-[1.15]">
              I Build <span className="text-[rgb(var(--accent))]">Websites</span>.<br />
              I Design <span className="text-[rgb(var(--accent-secondary))]">Experiences</span>.<br />
              I Create <span className="bg-gradient-to-r from-[rgb(var(--accent))] via-[rgb(var(--accent-tertiary))] to-[rgb(var(--accent-secondary))] bg-clip-text text-transparent">Digital Solutions</span>.
            </h1>

            {/* Rotating Role Pill */}
            <div className="flex flex-wrap items-center gap-2.5 text-base sm:text-lg font-medium text-slate-700">
              <span className="text-slate-500">Specializing as:</span>
              <RotatingRole />
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
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-slate-950 text-white hover:bg-[rgb(var(--accent))] font-bold text-sm sm:text-base shadow-lg shadow-slate-950/20 hover:shadow-indigo-500/25 transition-colors duration-200 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[rgb(var(--accent))]"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 text-[rgb(var(--accent-secondary))]" />
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-white border-2 border-slate-900 text-slate-950 hover:bg-slate-50 hover:border-[rgb(var(--accent))] hover:text-[rgb(var(--accent))] font-bold text-sm sm:text-base transition-colors duration-200 shadow-xs focus:outline-none focus:ring-2 focus:ring-[rgb(var(--accent))]"
              >
                <span>Let's Work Together</span>
              </a>

              {/* Direct Download Resume CTA */}
              <a
                href="/Aravindh_Kumar_Resume.pdf"
                download="Aravindh_Kumar_Resume.pdf"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 hover:bg-[rgb(var(--accent-secondary))] hover:text-white hover:border-[rgb(var(--accent-secondary))] font-bold text-sm sm:text-base transition-colors duration-200 shadow-xs group"
                title="Download Aravindh Kumar's Resume in PDF Format"
              >
                <FileDown className="w-4 h-4 text-[rgb(var(--accent-secondary))] group-hover:text-white transition-colors" />
                <span>Download Resume (PDF)</span>
              </a>
            </div>

            {/* Quick Contact & Status Badges */}
            <div className="pt-4 border-t border-slate-200 w-full flex flex-wrap items-center gap-6 text-xs sm:text-sm text-slate-600">
              <a
                href={`mailto:${personalInfo.contact.email}`}
                className="flex items-center gap-2 hover:text-[rgb(var(--accent))] transition-colors font-medium"
                title="Send direct email"
              >
                <div className="p-1.5 rounded-md bg-indigo-50 text-[rgb(var(--accent))] border border-indigo-200">
                  <Mail className="w-4 h-4" />
                </div>
                <span>{personalInfo.contact.email}</span>
              </a>

              <a
                href={`tel:${personalInfo.contact.phone.replace(/\s+/g, '')}`}
                className="flex items-center gap-2 hover:text-[rgb(var(--accent-secondary))] transition-colors font-medium"
                title="Call direct"
              >
                <div className="p-1.5 rounded-md bg-amber-50 text-[rgb(var(--accent-secondary))] border border-amber-200">
                  <Phone className="w-4 h-4" />
                </div>
                <span>{personalInfo.contact.phone}</span>
              </a>

              <div className="flex items-center gap-2 text-slate-700 font-medium">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 "></span>
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
                  <div className="flex flex-wrap gap-2 items-center justify-between px-3 sm:px-4 py-3 bg-[#080b18] border-b border-white/10">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-rose-500" />
                      <div className="w-3 h-3 rounded-full bg-amber-500" />
                      <div className="w-3 h-3 rounded-full bg-emerald-500" />
                      <span className="ml-2 text-xs font-mono text-slate-400">aravindh-studio.config.ts</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-[11px] font-mono text-[rgb(var(--accent-secondary))] bg-amber-950/60 border border-amber-700/50 px-2 py-0.5 rounded font-bold">
                      <span className="w-1.5 h-1.5 rounded-full bg-[rgb(var(--accent-secondary))] "></span>
                      ACTIVE STUDIO
                    </div>
                  </div>

                  {/* Code & Studio Interface Content */}
                  <div className="p-3 sm:p-5 break-words font-mono text-xs sm:text-[13px] leading-relaxed text-slate-300 space-y-3">
                    <div className="text-slate-500">// Personal Brand Profile & Stack</div>
                    
                    <div>
                      <span className="text-[rgb(var(--accent-secondary))] font-bold">const</span>{' '}
                      <span className="text-[rgb(var(--accent))] font-bold">creator</span> = {'{'}
                    </div>
                    
                    <div className="pl-4 space-y-1">
                      <div>
                        <span className="text-slate-400">name:</span>{' '}
                        <span className="text-[rgb(var(--accent-tertiary))]">"Aravindh Kumar"</span>,
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
                        <span className="text-[rgb(var(--accent-tertiary))]">"Impactful digital experiences"</span>
                      </div>
                    </div>

                    <div>
                      {'}'};
                    </div>

                    <div className="pt-2 text-slate-500">// Execution Pipeline</div>
                    <div className="p-3 rounded-lg bg-black/50 border border-white/10 space-y-2">
                      <div className="flex items-center justify-between text-[11px] text-slate-300">
                        <span className="flex items-center gap-1.5 text-[rgb(var(--accent))] font-semibold">
                          <Cpu className="w-3.5 h-3.5 text-[rgb(var(--accent-secondary))]" /> AI-Augmented Stack
                        </span>
                        <span className="text-[rgb(var(--accent-tertiary))] font-medium">Ready for Deploy</span>
                      </div>
                      <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                        <div className="bg-gradient-to-r from-[rgb(var(--accent))] via-[rgb(var(--accent-tertiary))] to-[rgb(var(--accent-secondary))] h-1.5 rounded-full w-full"></div>
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
              <div className="hidden sm:flex absolute -bottom-6 left-0 p-3.5 rounded-xl bg-white border border-slate-200 shadow-xl shadow-slate-900/10 flex items-center gap-3 ">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-[rgb(var(--accent-secondary))] to-[#ea580c] flex items-center justify-center text-white shadow-sm">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">AI-Assisted Efficiency</div>
                  <div className="text-[11px] text-slate-500 font-medium">Codex • Claude Code • Antigravity</div>
                </div>
              </div>

              {/* Floating Highlight Card 2: 4 Live Projects */}
              <div className="hidden sm:flex absolute -top-6 right-0 p-3 rounded-xl bg-white border border-slate-200 shadow-xl shadow-slate-900/10 flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-indigo-50 border border-indigo-200 flex items-center justify-center text-[rgb(var(--accent))]">
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
