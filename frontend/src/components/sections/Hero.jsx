import React from 'react';
import { ShieldCheck, ArrowUpRight, Award, Zap } from 'lucide-react';
import StatItem from '../ui/StatItem';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden">
      {/* Structural Minimalist Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#1e3a8a_1px,transparent_1px)] [background-size:16px_16px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Framework Description Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 border border-blue-200 rounded-full text-xs font-bold text-industrial-blue">
              <Award size={14} />
              <span>ISO Standard Electroplating & Coating Infrastructure</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-industrial-dark leading-none">
              High-Precision <br />
              <span className="text-industrial-blue">Industrial Plating</span> & Surface Finishing
            </h1>
            
            <p className="text-base text-slate-600 font-medium max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              With 19 years of certified manufacturing excellence, VI Enterprises engineered coatings provide superior high-caliber corrosion protection and elite durability metrics for premium components.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-2">
              <a href="#inquiry" className="inline-flex items-center gap-2 bg-industrial-blue hover:bg-blue-800 text-white font-bold uppercase tracking-wider text-xs px-6 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <span>Request B2B Technical Callback</span>
                <ArrowUpRight size={14} />
              </a>
              <a href="#services" className="inline-flex items-center bg-white border border-industrial-metallic hover:bg-slate-50 text-slate-700 font-bold uppercase tracking-wider text-xs px-6 py-3.5 rounded-xl transition-all">
                Explore Process Variants
              </a>
            </div>
          </div>

          {/* Premium Light High-Resolution Graphic Display Frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl border-4 border-white shadow-2xl overflow-hidden aspect-[4/3] bg-slate-200">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800" 
                alt="Industrial Metal Electroplating Processing Plant Surface Line"
                className="w-full h-full object-cover grayscale-[20%] hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-industrial-blue/20 to-transparent"></div>
            </div>
            {/* High trust floating card detail badge */}
            <div className="absolute -bottom-6 -left-6 bg-white border border-industrial-metallic rounded-xl p-4 shadow-xl flex items-center gap-3 animate-bounce-slow hidden sm:flex">
              <div className="p-2.5 bg-sky-50 text-industrial-accent rounded-lg border border-sky-100">
                <Zap size={20} strokeWidth={2.5} />
              </div>
              <div>
                <div className="text-xs font-black text-industrial-dark uppercase tracking-wider">Zero Delays</div>
                <div className="text-[11px] font-bold text-slate-500">Fast Batch Deliveries</div>
              </div>
            </div>
          </div>

        </div>

        {/* Unified Operational Corporate Stat Grid counters block */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20">
          <StatItem value="19+" label="Years Experience" subtext="Since 2007 Operational Node" />
          <StatItem value="W-101" label="MIDC Hingna" subtext="Advanced Industrial Plant" />
          <StatItem value="100%" label="Quality Assured" subtext="Strict ASTM Testing Protocols" />
          <StatItem value="Dual" label="Mailing Engine" subtext="Instant Automation Lead Matrix" />
        </div>
      </div>
    </section>
  );
}