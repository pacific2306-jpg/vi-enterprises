import React from 'react';
import { Users, Cpu, Clock, HardHat, CheckSquare, Award } from 'lucide-react';

export default function WhyChooseUs() {
  const list = [
    { label: 'Skilled Workforce', icon: Users, text: 'Experienced plating chemical engineers monitoring solution balance parameters daily.' },
    { label: 'Industrial Standards', icon: Award, text: 'Full alignment with ASTM and industrial process metrics to pass rigorous client testing checks.' },
    { label: 'Fast Delivery', icon: Clock, text: 'Optimized production line flow patterns ensuring reliable lead times for continuous assembly setups.' },
    { label: 'Advanced Machinery', icon: Cpu, text: 'Precision tanks and computerized testing tools ensuring uniform layer density profiles.' },
    { label: 'Quality Assurance', icon: CheckSquare, text: 'Strict batch verification using electronic thickness testers on processed metal lots.' },
    { label: 'Customer Satisfaction', icon: HardHat, text: 'Trusted by top engineering businesses for 19 years across heavy industrial sectors.' }
  ];

  return (
    <section id="why-choose-us" className="py-20 bg-white border-t border-industrial-metallic">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-black text-industrial-dark tracking-tight">Why Corporate Chains Choose Us</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {list.map((item, idx) => (
            <div key={idx} className="flex gap-4 p-4 border border-transparent hover:border-industrial-metallic rounded-xl transition-all">
              <div className="p-3 bg-slate-50 text-industrial-blue rounded-xl border border-slate-100 shrink-0 h-12 w-12 flex items-center justify-center shadow-sm">
                <item.icon size={22} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-industrial-dark uppercase tracking-wider mb-1">{item.label}</h4>
                <p className="text-xs text-slate-500 font-medium leading-relaxed">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}