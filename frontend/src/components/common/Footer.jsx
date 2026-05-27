import React from 'react';
import { Mail, Phone, MapPin, ChevronRight, ShieldCheck, Clock } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-900 text-slate-300 border-t-2 border-industrial-blue pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Column 1: Company Profile Meta Description */}
          <div>
            <div className="flex items-center gap-2 text-white mb-5">
              <ShieldCheck className="text-industrial-accent" size={28} />
              <span className="text-lg font-black tracking-tight">VI ENTERPRISES</span>
            </div>
            <p className="text-xs text-slate-400 font-medium leading-relaxed mb-4">
              Providing premium industrial electroplating and modern metal surface finishing solutions for critical automotive, engineering, and electrical components since 2007.
            </p>
            <div className="flex items-center gap-2 text-xs font-bold text-white bg-slate-800/80 border border-slate-700/50 rounded-lg p-2.5 w-fit">
              <Clock size={14} className="text-industrial-accent" />
              <span>19 Years of Engineering Excellence</span>
            </div>
          </div>

          {/* Column 2: Quick Operations Access Channels */}
          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-5 pb-2 border-b border-slate-800">Operational Links</h4>
            <ul className="space-y-2.5 text-xs font-semibold">
              {['#about', '#services', '#why-choose-us', '#industries', '#gallery', '#contact'].map((href) => (
                <li key={href}>
                  <a href={href} className="flex items-center gap-1 hover:text-white transition-colors">
                    <ChevronRight size={14} className="text-industrial-accent" />
                    <span className="capitalize">{href.replace('#', '').replace(/-/g, ' ')}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Complete Technical Engineering Services Grid Links */}
          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-5 pb-2 border-b border-slate-800">Core Services</h4>
            <ul className="space-y-2.5 text-xs font-semibold text-slate-400">
              {['Zinc Plating', 'Nickel Plating', 'Copper Plating', 'Chrome Plating', 'Surface Finishing', 'Corrosion Protection'].map((service) => (
                <li key={service} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-700 shrink-0"></span>
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Explicit Verified Plant Address Specifications */}
          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-5 pb-2 border-b border-slate-800">Plant Location</h4>
            <ul className="space-y-3 text-xs font-medium">
              <li className="flex gap-3 leading-relaxed">
                <MapPin size={18} className="text-industrial-accent shrink-0 mt-0.5" />
                <span className="text-slate-400">W-101, M.I.D.C Industrial Area, Hingna Rd, Hingna, Nildoh ct, Maharashtra 441110</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-industrial-accent shrink-0" />
                <a href="tel:+918408022773" className="hover:text-white font-semibold">+91 8408022773</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-industrial-accent shrink-0" />
                <a href="mailto:vienterprises101@gmail.com" className="hover:text-white font-semibold">vienterprises101@gmail.com</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Outer Legal Line Copyright Bounds */}
        <div className="border-t border-slate-800 pt-8 mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-semibold text-slate-500">
          <p>© {currentYear} VI Enterprises. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="text-slate-600">Premium Light Manufacturing Grade UI</span>
          </div>
        </div>
      </div>
    </footer>
  );
}