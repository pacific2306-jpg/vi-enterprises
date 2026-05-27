import React from 'react';
import { motion } from 'framer-motion';

export default function StatItem({ value, label, subtext }) {
  return (
    <div className="p-6 bg-white border border-industrial-metallic rounded-xl text-center shadow-sm hover:shadow-md transition-shadow">
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, type: 'spring' }}
        className="text-4xl font-extrabold text-industrial-blue tracking-tight mb-1"
      >
        {value}
      </motion.div>
      <div className="text-sm font-bold text-industrial-dark uppercase tracking-wider mb-1">{label}</div>
      <div className="text-xs text-slate-500 font-medium">{subtext}</div>
    </div>
  );
}