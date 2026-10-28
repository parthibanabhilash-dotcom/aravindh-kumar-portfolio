import React from 'react';
import { Code2, Palette, Sparkles, ShieldCheck, HeartHandshake, FileDown } from 'lucide-react';
import { aboutHighlights } from '../data/portfolioData';

export default function About() {
  const iconMap = {
    Code2: Code2,
    Palette: Palette,
    Sparkles: Sparkles,
  };

  return (
    <section id="about" className="py-24 relative bg-slate-50/75 border-y border-slate-200/80">
      {/* Background ambient accents */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-80 h-80 bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold tracking-wider uppercase">
            <span>GET TO KNOW ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight">
            A Little About Me
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[rgb(var(--accent))] via-[rgb(var(--accent-tertiary))] to-[rgb(var(--accent-secondary))] mx-auto rounded-full"></div>
        </div>

        {/* Narrative Box */}
        <div className="max-w-4xl mx-auto bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-sm mb-16 text-slate-700 space-y-5 leading-relaxed text-base sm:text-lg">
          <p>
            I'm a multidisciplinary digital creator who enjoys combining technology, design, and creativity to build meaningful digital experiences. From developing responsive websites and WordPress platforms to creating graphics and editing videos, I enjoy working across different areas of the digital world.
          </p>
          <p>
            I continuously explore modern development workflows, AI-powered coding assistants, and creative tools to improve the quality and efficiency of my work.
          </p>
          
          <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4 text-sm font-semibold">
            <div className="flex items-center gap-2 text-[rgb(var(--accent))]">
              <ShieldCheck className="w-5 h-5 text-[rgb(var(--accent))]" />
              <span>Honest & Authentic Approach</span>
            </div>
            <div className="flex items-center gap-2 text-[rgb(var(--accent-secondary))]">
              <HeartHandshake className="w-5 h-5 text-[rgb(var(--accent-secondary))]" />
              <span>Collaborative Client Mindset</span>
            </div>
            <div className="flex items-center gap-2 text-slate-900">
              <Sparkles className="w-5 h-5 text-[rgb(var(--accent-tertiary))]" />
              <span>Continuous Tool Adoption</span>
            </div>
          </div>

          {/* Direct Resume Download Action in About */}
          <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 bg-slate-50 -mx-6 sm:-mx-10 -mb-6 sm:-mb-10 p-5 rounded-b-2xl border-t">
            <div className="text-xs sm:text-sm text-slate-600 font-medium">
              Looking for a comprehensive breakdown of my background, tools, and live projects?
            </div>
            <a
              href="/Aravindh_Kumar_Resume.pdf"
              download="Aravindh_Kumar_Resume.pdf"
              className="shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-950 text-white hover:bg-[rgb(var(--accent))] text-xs font-bold transition-all shadow-sm group"
            >
              <FileDown className="w-4 h-4 text-[rgb(var(--accent-secondary))] group-hover:text-white transition-colors" />
              <span>Download Resume (PDF)</span>
            </a>
          </div>
        </div>

        {/* Three Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {aboutHighlights.map((highlight, idx) => {
            const IconComponent = iconMap[highlight.icon] || Code2;
            const isAmber = idx === 1;
            return (
              <div
                key={highlight.id}
                className="group relative p-8 rounded-2xl bg-white border border-slate-200 hover:border-slate-400 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/5 flex flex-col justify-between"
              >
                <div>
                  {/* Icon */}
                  <div
                    className={`w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-200 mb-6 ${
                      isAmber
                        ? 'bg-amber-50 text-[rgb(var(--accent-secondary))] border border-amber-200 group-hover:bg-[rgb(var(--accent-secondary))] group-hover:text-white'
                        : 'bg-indigo-50 text-[rgb(var(--accent))] border border-indigo-200 group-hover:bg-[rgb(var(--accent))] group-hover:text-white'
                    }`}
                  >
                    <IconComponent className="w-7 h-7" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-950 mb-3 group-hover:text-[rgb(var(--accent))] transition-colors">
                    {highlight.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {highlight.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-1.5">
                  {highlight.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs font-medium rounded-md bg-slate-100 text-slate-700 border border-slate-200/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
