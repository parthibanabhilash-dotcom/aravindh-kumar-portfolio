import React from 'react';
import {
  Layout,
  Globe,
  ShoppingBag,
  CloudUpload,
  Sparkles,
  Video,
  Cpu,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { servicesList } from '../data/portfolioData';

export default function Services({ onSelectService }) {
  const iconMap = {
    Layout: Layout,
    Globe: Globe,
    ShoppingBag: ShoppingBag,
    CloudUpload: CloudUpload,
    Sparkles: Sparkles,
    Video: Video,
    Cpu: Cpu,
  };

  // Color assignments matching user palette
  const serviceColors = [
    { bg: 'bg-indigo-50', text: 'text-[#6366f1]', border: 'border-indigo-200', hoverBg: 'group-hover:bg-[#6366f1]', hoverText: 'group-hover:text-white', link: 'text-[#6366f1]' },
    { bg: 'bg-amber-50', text: 'text-[#f59e0b]', border: 'border-amber-200', hoverBg: 'group-hover:bg-[#f59e0b]', hoverText: 'group-hover:text-white', link: 'text-[#f59e0b]' },
    { bg: 'bg-emerald-50', text: 'text-[#10b981]', border: 'border-emerald-200', hoverBg: 'group-hover:bg-[#10b981]', hoverText: 'group-hover:text-white', link: 'text-[#10b981]' },
    { bg: 'bg-indigo-50', text: 'text-[#6366f1]', border: 'border-indigo-200', hoverBg: 'group-hover:bg-[#6366f1]', hoverText: 'group-hover:text-white', link: 'text-[#6366f1]' },
    { bg: 'bg-purple-50', text: 'text-[#a855f7]', border: 'border-purple-200', hoverBg: 'group-hover:bg-[#a855f7]', hoverText: 'group-hover:text-white', link: 'text-[#a855f7]' },
    { bg: 'bg-rose-50', text: 'text-[#f43f5e]', border: 'border-rose-200', hoverBg: 'group-hover:bg-[#f43f5e]', hoverText: 'group-hover:text-white', link: 'text-[#f43f5e]' },
    { bg: 'bg-amber-50', text: 'text-[#ea580c]', border: 'border-amber-200', hoverBg: 'group-hover:bg-[#ea580c]', hoverText: 'group-hover:text-white', link: 'text-[#ea580c]' },
  ];

  return (
    <section id="services" className="py-24 relative bg-slate-50/75 border-y border-slate-200/80">
      {/* Background Glow */}
      <div className="absolute top-1/3 left-10 w-80 h-80 bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold tracking-wider uppercase">
            <span>OFFERINGS & CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight">
            How I Can Help You
          </h2>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto">
            Combining web engineering, WordPress capabilities, and visual media to bring client concepts to life.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-[#6366f1] via-[#10b981] to-[#f59e0b] mx-auto rounded-full"></div>
        </div>

        {/* 7 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {servicesList.map((service, index) => {
            const IconComp = iconMap[service.icon] || Layout;
            const style = serviceColors[index % serviceColors.length];
            return (
              <div
                key={service.id}
                className="group relative rounded-2xl bg-white border border-slate-200 p-6 sm:p-7 hover:border-slate-400 hover:shadow-xl hover:shadow-slate-900/5 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Service Icon */}
                  <div
                    className={`w-12 h-12 rounded-xl border flex items-center justify-center transition-all duration-200 mb-5 ${style.bg} ${style.text} ${style.border} ${style.hoverBg} ${style.hoverText}`}
                  >
                    <IconComp className="w-6 h-6" />
                  </div>

                  {/* Service Title */}
                  <h3 className="text-xl font-bold text-slate-950 mb-2.5 group-hover:text-[#6366f1] transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Deliverables tags */}
                  <div className="space-y-1.5 mb-6">
                    {service.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                        <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 ${style.text}`} />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA Link */}
                <div className="pt-4 border-t border-slate-100">
                  <a
                    href="#contact"
                    onClick={() => onSelectService && onSelectService(service.title)}
                    className={`inline-flex items-center gap-2 text-sm font-bold ${style.link} hover:opacity-80 group-hover:translate-x-1 transition-all`}
                  >
                    <span>Discuss Your Project</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
