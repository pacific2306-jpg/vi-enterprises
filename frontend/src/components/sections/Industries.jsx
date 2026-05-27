import React from 'react';
import { Car, Wrench, Factory, Cpu, Settings, Drill } from 'lucide-react';

export default function Industries() {
  const sectors = [
    { name: 'Automotive', icon: Car }, { name: 'Engineering', icon: Wrench }, 
    { name: 'Manufacturing', icon: Factory }, { name: 'Electrical', icon: Cpu }, 
    { name: 'Machinery', icon: Settings }, { name: 'Heavy Tooling', icon: Drill }
  ];

  return (
    <section id="industries" className="py-20 bg-slate-50 border-t border-industrial-metallic">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-black text-industrial-dark tracking-tight">Sectors We Supply</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {sectors.map((sec, i) => (
            <div key={i} className="bg-white border border-industrial-metallic rounded-xl p-6 text-center hover:shadow-md transition-shadow group cursor-default">
              <div className="text-slate-400 group-hover:text-industrial-accent transition-colors flex justify-center mb-3">
                <sec.icon size={32} strokeWidth={1.5} />
              </div>
              <div className="text-xs font-bold text-industrial-dark uppercase tracking-wider">{sec.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}