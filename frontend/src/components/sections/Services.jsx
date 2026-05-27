import React from 'react';
import { Layers, Disc, CircleDot, Activity, Hammer, Shield } from 'lucide-react';
import ServiceCard from '../ui/ServiceCard';

export default function Services() {
  const items = [
    { title: 'Zinc Plating', icon: Layers, desc: 'Acid or alkaline zinc processes providing sacrificial protection against early layer degradation.', features: ['Bright blue/yellow passivations', 'ASTM salt spray compliance', 'High auto-bracket coverage'] },
    { title: 'Nickel Plating', icon: Disc, desc: 'High-uniformity chemical layers offering massive chemical wear resistance and premium bright styling.', features: ['Excellent thickness profiles', 'High hardness ratings', 'Ideal electronic baselining'] },
    { title: 'Copper Plating', icon: CircleDot, desc: 'High-conductivity copper baselayers designed specifically to enhance tracking and underlying properties.', features: ['Elite atomic conductivity', 'Excellent adhesion margins', 'Thermal heat sink shields'] },
    { title: 'Chrome Plating', icon: Activity, desc: 'High-end hard chrome variants engineered to reduce mechanical friction values across heavy engine bars.', features: ['Ultra-low friction variables', 'Heavy scratch dampeners', 'Hydraulic rod optimization'] },
    { title: 'Surface Finishing', icon: Hammer, desc: 'Advanced chemical sand blasters, polishing wheels, and de-burring options to optimize raw structural surfaces.', features: ['Scale and rust elimination', 'Controlled raw smoothing', 'Paint grip enhancements'] },
    { title: 'Corrosion Protection', icon: Shield, desc: 'Strategic customized chemical dip sealing arrays to safeguard components against humid manufacturing plant floors.', features: ['Anti-oxidation oil coatings', 'Long-distance freight seals', 'Deep chemical neutralizers'] }
  ];

  return (
    <section id="services" className="py-20 bg-slate-50 border-t border-industrial-metallic">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs uppercase font-bold text-industrial-blue tracking-widest bg-blue-50 border border-blue-200 px-3 py-1 rounded-full">Process Capabilities</span>
          <h2 className="text-3xl font-black text-industrial-dark tracking-tight mt-3">Industrial Plating Solutions</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((srv, idx) => <ServiceCard key={idx} {...srv} description={srv.desc} />)}
        </div>
      </div>
    </section>
  );
}