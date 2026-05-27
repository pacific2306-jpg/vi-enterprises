import React, { useState, useEffect } from 'react';
import { Menu, X, PhoneCall, ShieldCheck } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Why Choose Us', href: '#why-choose-us' },
    { name: 'Industries', href: '#industries' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-industrial-metallic py-3' : 'bg-white py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Corporate Identity Identity Header */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="p-2 bg-industrial-blue text-white rounded-lg shadow-sm">
              <ShieldCheck size={24} />
            </div>
            <div>
              <span className="text-xl font-black tracking-tight text-industrial-blue block leading-none">VI ENTERPRISES</span>
              <span className="text-[10px] uppercase font-bold tracking-widest text-slate-500 block mt-1">Surface Finishing Experts</span>
            </div>
          </div>

          {/* Large Screen Breakpoints Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-sm font-semibold text-slate-600 hover:text-industrial-blue transition-colors duration-200">
                {link.name}
              </a>
            ))}
            <a href="#inquiry" className="inline-flex items-center gap-2 bg-industrial-blue hover:bg-blue-800 text-white text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-lg shadow-sm hover:shadow transition-all duration-200">
              <PhoneCall size={14} />
              Request Quote
            </a>
          </div>

          {/* Mobile responsive toggle control action wire */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-700 hover:text-industrial-blue focus:outline-none p-1">
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation Menu Layout */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-industrial-metallic shadow-xl animate-fadeIn">
          <div className="px-4 pt-3 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="block px-3 py-2.5 text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-industrial-blue rounded-lg transition-all">
                {link.name}
              </a>
            ))}
            <div className="pt-4 px-3">
              <a href="#inquiry" onClick={() => setIsOpen(false)} className="w-full justify-center inline-flex items-center gap-2 bg-industrial-blue text-white text-sm font-bold uppercase tracking-wider py-3 rounded-xl shadow">
                <PhoneCall size={16} />
                Get Estimate Quote
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}