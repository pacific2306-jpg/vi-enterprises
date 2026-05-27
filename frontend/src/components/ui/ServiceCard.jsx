import React from 'react';
import { Check } from 'lucide-react';

export default function ServiceCard({ title, icon: Icon, features, description }) {
  return (
    <div className="bg-white border border-industrial-metallic rounded-xl p-6 shadow-sm hover:shadow-lg hover:border-industrial-accent transition-all duration-300 flex flex-col justify-between group">
      <div>
        <div className="w-12 h-12 bg-slate-50 border border-slate-200 text-industrial-blue rounded-xl flex items-center justify-center mb-5 group-hover:bg-industrial-blue group-hover:text-white group-hover:border-industrial-blue transition-all duration-300 shadow-sm">
          <Icon size={24} />
        </div>
        <h3 className="text-xl font-bold text-industrial-dark mb-3 tracking-tight">{title}</h3>
        <p className="text-sm text-slate-600 font-medium leading-relaxed mb-6">{description}</p>
      </div>
      
      <div className="border-t border-slate-100 pt-4 mt-auto">
        <ul className="space-y-2">
          {features.map((feature, i) => (
            <li key={i} className="flex items-center gap-2.5 text-xs text-slate-700 font-semibold">
              <span className="p-0.5 bg-blue-50 text-industrial-blue rounded-md shrink-0">
                <Check size={12} strokeWidth={3} />
              </span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}