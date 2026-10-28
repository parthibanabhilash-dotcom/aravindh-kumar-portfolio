import React, { useState } from 'react';
import {
  ExternalLink,
  Smartphone,
  Utensils,
  Building2,
  GraduationCap,
  Sparkles,
  ArrowRight,
  Star,
  BookOpen
} from 'lucide-react';
import { featuredProjects } from '../data/portfolioData';

export default function Projects() {
  const [filter, setFilter] = useState('all');

  const filteredProjects =
    filter === 'all'
      ? featuredProjects
      : featuredProjects.filter((p) => p.tag.toLowerCase().includes(filter.toLowerCase()));

  // Bespoke CSS Mockup Renderer for each project type
  const renderMockup = (project) => {
    switch (project.previewType) {
      case 'mobile-shop':
        return (
          <div className="w-full h-56 sm:h-64 bg-gradient-to-br from-[#0c1328] via-[#081024] to-[#040816] p-4 flex flex-col justify-between overflow-hidden relative group-hover:scale-[1.02] transition-transform duration-500 text-white">
            {/* Top Store Bar */}
            <div className="flex items-center justify-between text-xs border-b border-white/10 pb-2.5">
              <div className="flex items-center gap-2">
                <Smartphone className="w-4 h-4 text-blue-400" />
                <span className="font-bold tracking-wide">TECHMOBILE HUB</span>
              </div>
              <div className="flex items-center gap-2 text-[10px]">
                <span className="px-1.5 py-0.5 rounded bg-orange-500/20 text-orange-300 border border-orange-500/30 font-semibold">Special Offer</span>
                <span className="font-mono text-blue-400 font-bold">Cart (2)</span>
              </div>
            </div>

            {/* Simulated Hero & Product Showcase */}
            <div className="grid grid-cols-12 gap-3 items-center my-auto">
              <div className="col-span-7 space-y-1.5">
                <span className="text-[10px] uppercase font-mono text-orange-400 font-bold tracking-wider">Flagship Series</span>
                <h4 className="text-sm sm:text-base font-extrabold leading-tight">Nova Pro Ultra 5G</h4>
                <p className="text-[11px] text-slate-300 line-clamp-1">120Hz OLED • 200MP Camera • 5000mAh</p>
                <div className="flex items-center gap-2 pt-1">
                  <span className="text-xs font-bold text-orange-400 font-mono">$799.00</span>
                  <span className="text-[10px] text-slate-400 line-through font-mono">$899.00</span>
                </div>
              </div>

              {/* Phone Mockup Graphic */}
              <div className="col-span-5 flex justify-center">
                <div className="w-20 sm:w-24 h-32 rounded-2xl bg-slate-900 border-2 border-orange-500/60 p-1.5 shadow-lg shadow-orange-950/40 relative">
                  <div className="w-full h-full rounded-xl bg-gradient-to-b from-blue-950 to-black p-1 flex flex-col items-center justify-between text-center">
                    <div className="w-6 h-1 rounded-full bg-slate-700 mx-auto" />
                    <div className="space-y-0.5">
                      <div className="text-[9px] font-bold text-white">4K OLED</div>
                      <div className="text-[8px] text-orange-300">Fast 65W</div>
                    </div>
                    <div className="w-full py-0.5 rounded bg-orange-500 text-slate-950 font-extrabold text-[8px]">
                      Buy Now
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Specs Bar */}
            <div className="flex items-center justify-between text-[10px] text-slate-400 pt-2 border-t border-white/10">
              <span>Catalog: 120+ Devices</span>
              <span className="text-emerald-400 font-medium">● In Stock & Ready</span>
            </div>
          </div>
        );

      case 'restaurant':
        return (
          <div className="w-full h-56 sm:h-64 bg-gradient-to-br from-[#1a0e04] via-[#261304] to-[#0c0602] p-4 flex flex-col justify-between overflow-hidden relative group-hover:scale-[1.02] transition-transform duration-500 text-white">
            {/* Top Restaurant Bar */}
            <div className="flex items-center justify-between text-xs border-b border-orange-500/20 pb-2.5">
              <div className="flex items-center gap-2">
                <Utensils className="w-4 h-4 text-orange-400" />
                <span className="font-bold tracking-wide">MADURAI EXPRESS</span>
              </div>
              <div className="flex items-center gap-1.5 text-[10px] text-orange-300 bg-orange-500/15 px-2 py-0.5 rounded-full border border-orange-500/30">
                <Star className="w-3 h-3 fill-orange-400 text-orange-400" />
                <span>Authentic Culinary</span>
              </div>
            </div>

            {/* Simulated Menu & Atmosphere */}
            <div className="my-auto space-y-2.5">
              <div className="text-center space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-widest text-orange-400 font-bold">Heritage Taste</span>
                <h4 className="text-base sm:text-lg font-bold text-orange-100">Traditional Chettinad & South Indian Delicacies</h4>
                <p className="text-[11px] text-orange-200/80 max-w-sm mx-auto">Fresh spices, traditional clay pot cooking, and timeless recipes.</p>
              </div>

              {/* Sample Dish Card row */}
              <div className="grid grid-cols-2 gap-2 pt-1">
                <div className="p-2 rounded-lg bg-black/50 border border-orange-500/20 flex items-center justify-between">
                  <div>
                    <div className="text-[11px] font-semibold text-orange-100">Special Biryani</div>
                    <div className="text-[9px] text-orange-300/80">Aromatic Spices</div>
                  </div>
                  <span className="text-xs font-mono font-bold text-orange-400">₹280</span>
                </div>
                <div className="p-2 rounded-lg bg-black/50 border border-orange-500/20 flex items-center justify-between">
                  <div>
                    <div className="text-[11px] font-semibold text-orange-100">Filter Coffee</div>
                    <div className="text-[9px] text-orange-300/80">Signature Brew</div>
                  </div>
                  <span className="text-xs font-mono font-bold text-orange-400">₹40</span>
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="flex items-center justify-between text-[10px] text-orange-200/80 pt-2 border-t border-orange-500/20">
              <span>Dine-In • Takeaway • Online Order</span>
              <span className="text-orange-400 font-semibold">Table Booking Available</span>
            </div>
          </div>
        );

      case 'corporate':
        return (
          <div className="w-full h-56 sm:h-64 bg-gradient-to-br from-[#0c1228] via-[#101b38] to-[#080d1e] p-4 flex flex-col justify-between overflow-hidden relative group-hover:scale-[1.02] transition-transform duration-500 text-white">
            {/* Top Corporate Bar */}
            <div className="flex items-center justify-between text-xs border-b border-blue-500/20 pb-2.5">
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4 text-blue-400" />
                <span className="font-bold tracking-wide">EASYORA DIGITAL</span>
              </div>
              <div className="text-[10px] text-blue-300 bg-blue-500/15 px-2 py-0.5 rounded border border-blue-500/30 font-semibold">
                Enterprise Solutions
              </div>
            </div>

            {/* Main Corporate Pitch */}
            <div className="my-auto space-y-2.5">
              <span className="text-[10px] font-mono uppercase text-orange-400 font-bold">Digital Transformation</span>
              <h4 className="text-sm sm:text-base font-bold text-white">Scale Your Digital Footprint with Ease</h4>
              
              <div className="grid grid-cols-3 gap-2 pt-1 text-center">
                <div className="p-2 rounded-lg bg-blue-950/50 border border-blue-500/20">
                  <div className="text-xs font-bold text-blue-300">Web Dev</div>
                  <div className="text-[9px] text-slate-300">High Speed</div>
                </div>
                <div className="p-2 rounded-lg bg-blue-950/50 border border-blue-500/20">
                  <div className="text-xs font-bold text-orange-300">Branding</div>
                  <div className="text-[9px] text-slate-300">Identity</div>
                </div>
                <div className="p-2 rounded-lg bg-blue-950/50 border border-blue-500/20">
                  <div className="text-xs font-bold text-blue-300">Cloud Ops</div>
                  <div className="text-[9px] text-slate-300">Managed</div>
                </div>
              </div>
            </div>

            {/* Bottom Status */}
            <div className="flex items-center justify-between text-[10px] text-slate-300 pt-2 border-t border-white/10">
              <span>B2B & Digital Consulting</span>
              <span className="text-orange-400 font-mono">easyora.vercel.app</span>
            </div>
          </div>
        );

      case 'lms':
        return (
          <div className="w-full h-56 sm:h-64 bg-gradient-to-br from-[#06141e] via-[#091c2b] to-[#040e16] p-4 flex flex-col justify-between overflow-hidden relative group-hover:scale-[1.02] transition-transform duration-500 text-white">
            {/* Top LMS Bar */}
            <div className="flex items-center justify-between text-xs border-b border-blue-500/20 pb-2.5">
              <div className="flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-blue-400" />
                <span className="font-bold tracking-wide">FGM LEARNING PORTAL</span>
              </div>
              <span className="text-[10px] text-emerald-400 bg-emerald-500/15 px-2 py-0.5 rounded border border-emerald-500/30 font-semibold">
                LMS Platform
              </span>
            </div>

            {/* Dashboard / Learning modules preview */}
            <div className="my-auto space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-200">Employee Training Path</span>
                <span className="text-[10px] font-mono text-orange-400 font-bold">85% Complete</span>
              </div>

              {/* Progress bar */}
              <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                <div className="bg-gradient-to-r from-blue-500 to-orange-500 h-1.5 rounded-full w-[85%]"></div>
              </div>

              {/* Course modules */}
              <div className="space-y-1.5 pt-1">
                <div className="flex items-center justify-between p-2 rounded-lg bg-black/50 border border-blue-500/20 text-xs">
                  <div className="flex items-center gap-2 text-slate-200">
                    <BookOpen className="w-3.5 h-3.5 text-blue-400" />
                    <span className="text-[11px] font-medium">Corporate Governance & Security</span>
                  </div>
                  <span className="text-[10px] text-emerald-400 font-bold">Passed</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded-lg bg-black/50 border border-blue-500/20 text-xs">
                  <div className="flex items-center gap-2 text-slate-200">
                    <BookOpen className="w-3.5 h-3.5 text-orange-400" />
                    <span className="text-[11px] font-medium">Digital Operations & Workflows</span>
                  </div>
                  <span className="text-[10px] text-orange-400 font-bold">In Progress</span>
                </div>
              </div>
            </div>

            {/* Bottom LMS Info */}
            <div className="flex items-center justify-between text-[10px] text-slate-400 pt-2 border-t border-blue-500/20">
              <span>Interactive Quizzes & Modules</span>
              <span className="text-blue-400 font-mono">fgm-portal.vercel.app</span>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="projects" className="py-24 relative bg-slate-50/75 border-y border-slate-200/80">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-blue-500/5 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-orange-500/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>PORTFOLIO SHOWCASE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight">
            Selected Projects
          </h2>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto">
            A selection of websites and digital projects I've worked on, deployed and accessible online.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 via-orange-500 to-orange-400 mx-auto rounded-full"></div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {['all', 'E-commerce', 'Hospitality', 'Corporate', 'Web Application'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat === 'all' ? 'all' : cat)}
              className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                filter.toLowerCase() === cat.toLowerCase()
                  ? 'bg-slate-950 text-white shadow-md shadow-slate-950/20'
                  : 'bg-white text-slate-700 hover:text-slate-950 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat === 'all' ? 'All Projects' : cat}
            </button>
          ))}
        </div>

        {/* 4 Premium Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, idx) => {
            const isOrangeBadge = idx % 2 === 0;
            return (
              <div
                key={project.id}
                className="group rounded-2xl bg-white border border-slate-200 hover:border-orange-500/50 overflow-hidden shadow-sm hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Browser-style Window Header Bar */}
                  <div className="flex items-center justify-between px-4 py-2.5 bg-slate-100/90 border-b border-slate-200">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                      <span className="ml-2 text-[11px] font-mono text-slate-500 truncate max-w-[200px] font-medium">
                        {project.liveUrl.replace('https://', '')}
                      </span>
                    </div>
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded border ${
                        isOrangeBadge
                          ? 'bg-orange-50 text-orange-700 border-orange-200'
                          : 'bg-blue-50 text-blue-700 border-blue-200'
                      }`}
                    >
                      {project.tag}
                    </span>
                  </div>

                  {/* Interactive Simulated Preview */}
                  <div className="border-b border-slate-200">
                    {renderMockup(project)}
                  </div>

                  {/* Project Details */}
                  <div className="p-6 sm:p-7 space-y-4">
                    <div className="space-y-1">
                      <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">
                        {project.category}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-extrabold text-slate-950 group-hover:text-orange-600 transition-colors">
                        {project.title}
                      </h3>
                    </div>

                    <p className="text-slate-600 text-sm leading-relaxed">
                      {project.description}
                    </p>

                    {/* Highlights */}
                    <div className="pt-2 flex flex-wrap gap-1.5">
                      {project.highlights.map((item, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 text-xs font-medium rounded-md bg-slate-50 text-slate-700 border border-slate-200/80"
                        >
                          ✓ {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer: Live Link Button */}
                <div className="p-6 sm:p-7 pt-0 border-t border-slate-100 mt-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2.5 px-5 py-3 rounded-xl bg-slate-950 hover:bg-orange-600 text-white font-semibold text-sm transition-all duration-200 shadow-md shadow-slate-950/15 hover:shadow-orange-500/25"
                  >
                    <span>View Live Project</span>
                    <ExternalLink className="w-4 h-4 text-orange-300 group-hover:text-white" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Projects / Expand Notice */}
        <div className="mt-14 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-4 rounded-2xl bg-white border border-slate-200 shadow-sm max-w-xl mx-auto">
            <div className="text-left text-xs sm:text-sm text-slate-600">
              <span className="font-bold text-slate-950">More live projects & client builds</span> are added as new websites and web applications go live.
            </div>
            <a
              href="#contact"
              className="shrink-0 px-4 py-2 rounded-xl bg-slate-950 hover:bg-orange-600 text-white font-semibold text-xs sm:text-sm transition-colors flex items-center gap-1.5"
            >
              <span>Request a Demo</span>
              <ArrowRight className="w-3.5 h-3.5 text-orange-400" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
