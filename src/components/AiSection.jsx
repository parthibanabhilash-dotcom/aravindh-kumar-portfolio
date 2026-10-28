import React from 'react';
import {
  Sparkles,
  Bot,
  Zap,
  Cpu,
  CheckCircle2
} from 'lucide-react';
import { aiWorkflowDetails } from '../data/portfolioData';

export default function AiSection() {
  const toolIcons = {
    Cpu: Cpu,
    Bot: Bot,
    Zap: Zap,
  };

  return (
    <section id="ai-workflow" className="py-16 sm:py-24 relative bg-white overflow-hidden bg-grid-pattern-light">
      {/* Background radial highlights */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-50 border border-orange-200 text-orange-700 text-xs font-bold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-orange-600" />
            <span>MODERN DEVELOPMENT PARADIGM</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight">
            {aiWorkflowDetails.title}
          </h2>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            {aiWorkflowDetails.subtitle}
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 via-orange-500 to-orange-400 mx-auto rounded-full"></div>
        </div>

        {/* 3 Core AI Tools Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 mb-16">
          {aiWorkflowDetails.tools.map((tool, idx) => {
            const IconComp = toolIcons[tool.icon] || Cpu;
            const isOrange = idx === 1;
            return (
              <div
                key={tool.name}
                className="group relative rounded-2xl bg-white border border-slate-200 p-7 hover:border-orange-500/40 hover:shadow-xl hover:shadow-orange-500/10 transition-colors duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Tool Header */}
                  <div className="flex flex-wrap gap-3 items-center justify-between mb-5">
                    <div
                      className={`w-12 h-12 rounded-xl border flex items-center justify-center transition-colors ${
                        isOrange
                          ? 'bg-orange-50 text-orange-600 border-orange-200 group-hover:bg-orange-500 group-hover:text-white'
                          : 'bg-blue-50 text-blue-600 border-blue-200 group-hover:bg-blue-600 group-hover:text-white'
                      }`}
                    >
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono font-bold text-slate-700 bg-slate-100 border border-slate-200 px-2.5 py-1 rounded-full">
                      {tool.tag}
                    </span>
                  </div>

                  {/* Tool Name */}
                  <h3 className="text-xl font-bold text-slate-950 mb-2 group-hover:text-orange-600 transition-colors">
                    {tool.name}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {tool.description}
                  </p>
                </div>

                {/* Workflow Benefit Footer */}
                <div className="pt-4 border-t border-slate-100">
                  <div className="text-[11px] uppercase tracking-wider text-slate-400 font-mono font-semibold mb-1">
                    Workflow Impact
                  </div>
                  <div className="text-xs font-semibold text-slate-900 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                    <span>{tool.workflowBenefit}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* AI Philosophy & Workflow Architecture Card */}
        <div className="rounded-2xl bg-slate-950 text-white border border-slate-900 p-6 sm:p-10 shadow-xl shadow-slate-950/20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-mono uppercase text-orange-400 font-bold tracking-wider">
                How It Works in Practice
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                AI As a High-Leverage Co-Pilot, Not an Autopilot
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                By integrating AI assistants into the development environment, I save hours on repetitive scaffolding, syntax lookups, and initial test matrices.
              </p>
              <p className="text-slate-400 text-sm leading-relaxed">
                This enables faster project turnarounds and provides more time to concentrate on fine-tuning client aesthetics, responsive responsiveness, accessibility, and real user experience.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {aiWorkflowDetails.principles.map((p, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2 hover:border-slate-700 transition-colors"
                >
                  <div className="text-orange-400 font-mono text-xs font-extrabold">0{idx + 1}.</div>
                  <h4 className="text-sm font-bold text-white">{p.label}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
