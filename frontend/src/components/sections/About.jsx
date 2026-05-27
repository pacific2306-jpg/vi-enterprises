import React from 'react';
import { Target, Eye, ShieldAlert, CheckCircle } from 'lucide-react';

export default function About() {
  const points = [
    'Fully compliant with state industrial environmental pollution standards',
    'Stringent micron thickness checks using localized caliber tools',
    'Custom chemistry compounding to meet technical batch tolerances',
    'Strategic logistics access inside Nagpur’s primary industrial zone'
  ];

  return (
    <section id="about" className="py-20 bg-white border-t border-industrial-metallic">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6">
            <span className="text-xs uppercase font-bold text-industrial-accent tracking-widest bg-slate-100 px-3 py-1 rounded-full">Corporate Summary</span>
            <h2 className="text-3xl font-black text-industrial-dark tracking-tight mt-2">19 Years of Metal Coating Precision</h2>
            <p className="text-sm font-medium text-slate-600 leading-relaxed">
              Established in 2007 at Hingna MIDC, <strong>VI Enterprises</strong> has grown into a leading industrial partner for surface engineering. We provide protective treatments that increase operational lifespans and look highly professional.
            </p>
            
            <ul className="space-y-3 pt-2">
              {points.map((pt, index) => (
                <li key={index} className="flex gap-3 text-xs font-semibold text-slate-700">
                  <CheckCircle size={16} className="text-industrial-blue shrink-0 mt-0.5" />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-6 bg-slate-50 border border-industrial-metallic rounded-xl space-y-3">
              <div className="w-10 h-10 bg-blue-100 text-industrial-blue rounded-lg flex items-center justify-center shadow-sm">
                <Target size={20} />
              </div>
              <h4 className="text-sm font-bold text-industrial-dark uppercase tracking-wider">Our Mission</h4>
              <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                To supply premium corrosion-resistant layers to manufacturing chains on schedule with guaranteed specifications.
              </p>
            </div>

            <div className="p-6 bg-slate-50 border border-industrial-metallic rounded-xl space-y-3">
              <div className="w-10 h-10 bg-sky-100 text-industrial-accent rounded-lg flex items-center justify-center shadow-sm">
                <Eye size={20} />
              </div>
              <h4 className="text-sm font-bold text-industrial-dark uppercase tracking-wider">Our Vision</h4>
              <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                To build high-end technological plating lines, setting the local standard for top-tier surface finish precision.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}