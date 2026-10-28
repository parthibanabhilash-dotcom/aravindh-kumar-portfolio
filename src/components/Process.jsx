import React from 'react';
import { Compass, FileCode, Hammer, Rocket, Check } from 'lucide-react';
import { workingProcess } from '../data/portfolioData';

export default function Process() {
  const iconMap = {
    Compass: Compass,
    FileCode: FileCode,
    Hammer: Hammer,
    Rocket: Rocket,
  };

  const stepStyles = [
    { badge: 'bg-[rgb(var(--accent))] text-white', icon: 'text-[rgb(var(--accent))] bg-indigo-50 border-indigo-200' },
    { badge: 'bg-[rgb(var(--accent-tertiary))] text-white', icon: 'text-[rgb(var(--accent-tertiary))] bg-emerald-50 border-emerald-200' },
    { badge: 'bg-[#a855f7] text-white', icon: 'text-[#a855f7] bg-purple-50 border-purple-200' },
    { badge: 'bg-[rgb(var(--accent-secondary))] text-white', icon: 'text-[rgb(var(--accent-secondary))] bg-amber-50 border-amber-200' },
  ];

  return (
    <section id="process" className="py-16 sm:py-24 relative bg-white overflow-hidden bg-grid-pattern-light">
      {/* Ambient background blur */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold tracking-wider uppercase">
            <span>METHODOLOGY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight">
            My Working Process
          </h2>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto">
            A structured, collaborative approach from initial consultation to production launch.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-[rgb(var(--accent))] via-[rgb(var(--accent-tertiary))] to-[rgb(var(--accent-secondary))] mx-auto rounded-full"></div>
        </div>

        {/* Desktop Horizontal Timeline / Mobile Vertical Timeline */}
        <div className="relative">
          
          {/* Desktop Connection Beam line across steps */}
          <div className="hidden lg:block absolute top-[44px] left-[10%] right-[10%] h-[3px] bg-gradient-to-r from-[rgb(var(--accent))] via-[rgb(var(--accent-tertiary))] to-[rgb(var(--accent-secondary))] z-0 opacity-40 rounded-full"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {workingProcess.map((step, index) => {
              const IconComp = iconMap[step.icon] || Compass;
              const style = stepStyles[index % stepStyles.length];
              return (
                <div
                  key={step.step}
                  className="group relative bg-white border border-slate-200 rounded-2xl p-6 sm:p-7 hover:border-slate-400 hover:shadow-xl hover:shadow-slate-900/5 transition-colors duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Top Step Number Badge & Icon */}
                    <div className="flex items-center justify-between mb-6">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-mono font-bold text-sm shadow-md group-hover:scale-110 transition-transform ${style.badge}`}>
                        {step.step}
                      </div>

                      <div className={`w-10 h-10 rounded-lg border flex items-center justify-center ${style.icon}`}>
                        <IconComp className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Step Title & Tagline */}
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-500 font-bold">
                      Phase {index + 1}
                    </span>
                    <h3 className="text-xl font-extrabold text-slate-950 mt-1 mb-1 group-hover:text-[rgb(var(--accent))] transition-colors">
                      {step.title}
                    </h3>
                    <div className="text-xs text-slate-500 font-semibold mb-3">
                      {step.tagline}
                    </div>

                    {/* Description */}
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Bottom indicator */}
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-mono font-medium">
                    <span>Milestone Verified</span>
                    <Check className="w-4 h-4 text-emerald-600" />
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
