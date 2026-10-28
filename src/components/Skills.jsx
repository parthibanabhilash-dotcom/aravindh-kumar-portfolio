import React, { useState } from 'react';
import {
  Code2,
  Globe,
  Server,
  Palette,
  Video,
  FileText,
  CheckCircle2,
  Sparkles,
  Cpu
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

export default function Skills() {
  const [activeTab, setActiveTab] = useState('all');

  const iconMap = {
    Code2: Code2,
    Globe: Globe,
    Server: Server,
    Palette: Palette,
    Video: Video,
    FileText: FileText,
  };

  const filteredCategories =
    activeTab === 'all'
      ? skillCategories
      : skillCategories.filter((cat) => cat.id === activeTab);

  return (
    <section id="skills" className="py-16 sm:py-24 relative bg-white bg-dot-pattern-light">
      {/* Background ambient blurs */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-50 border border-orange-200 text-orange-700 text-xs font-bold tracking-wider uppercase">
            <Cpu className="w-3.5 h-3.5 text-orange-600" />
            <span>TECHNICAL & CREATIVE TOOLKIT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight">
            Skills & Digital Tools
          </h2>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto">
            A practical, verified overview of the platforms, development workflows, and creative applications I work with.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 via-orange-500 to-orange-400 mx-auto rounded-full"></div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-colors duration-200 cursor-pointer ${
              activeTab === 'all'
                ? 'bg-slate-950 text-white shadow-md shadow-slate-950/20'
                : 'bg-slate-100 text-slate-700 hover:text-slate-950 hover:bg-slate-200 border border-slate-200/80'
            }`}
          >
            All Categories
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-colors duration-200 cursor-pointer ${
                activeTab === cat.id
                  ? 'bg-slate-950 text-white shadow-md shadow-slate-950/20'
                  : 'bg-slate-100 text-slate-700 hover:text-slate-950 hover:bg-slate-200 border border-slate-200/80'
              }`}
            >
              {cat.category}
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category, index) => {
            const IconComponent = iconMap[category.icon] || Code2;
            const isOrange = index % 2 === 1;
            return (
              <div
                key={category.id}
                className="group relative rounded-2xl bg-white border border-slate-200 p-6 sm:p-7 hover:border-orange-500/40 hover:shadow-xl hover:shadow-orange-500/10 transition-colors duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Category Title & Icon */}
                  <div className="flex items-center gap-3.5 mb-3">
                    <div
                      className={`w-12 h-12 shrink-0 rounded-xl border flex items-center justify-center transition-colors ${
                        isOrange
                          ? 'bg-orange-50 text-orange-600 border-orange-200 group-hover:bg-orange-500 group-hover:text-white'
                          : 'bg-blue-50 text-blue-600 border-blue-200 group-hover:bg-blue-600 group-hover:text-white'
                      }`}
                    >
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-950 group-hover:text-orange-600 transition-colors">
                        {category.category}
                      </h3>
                      <span className="text-xs text-slate-500 font-medium">
                        {category.skills.length} core tools & skills
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed mb-6">
                    {category.description}
                  </p>

                  {/* Skills List as Clean Cards */}
                  <div className="space-y-2">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="flex flex-wrap items-center justify-between gap-2 p-2.5 rounded-lg bg-slate-50 border border-slate-100 hover:border-slate-200 hover:bg-slate-100/80 transition-colors"
                      >
                        <div className="flex items-center gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0" />
                          <span className="text-sm font-semibold text-slate-800">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-[11px] font-mono text-slate-500 bg-white border border-slate-200/80 px-2 py-0.5 rounded shadow-2xs">
                          {skill.type}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-mono font-medium">
                  <span>Verified Skillset</span>
                  <span className="text-blue-600 font-semibold">Active Workflow</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Honest note banner */}
        <div className="mt-12 p-4 rounded-xl bg-slate-50 border border-slate-200 max-w-2xl mx-auto text-center text-xs text-slate-600 flex items-center justify-center gap-2">
          <Sparkles className="w-4 h-4 text-orange-500 shrink-0" />
          <span>
            Every listed skill reflects genuine hands-on experience and real project workflows without inflated percentages.
          </span>
        </div>

      </div>
    </section>
  );
}
