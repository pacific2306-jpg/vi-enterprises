import React from 'react';

export default function Gallery() {
  const galleryImages = [
    "https://images.unsplash.com/photo-1565451934931-3e4b09cee92f?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1537462715879-360eeb61a0bc?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=400"
  ];

  return (
    <section id="gallery" className="py-20 bg-white border-t border-industrial-metallic">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-black text-industrial-dark tracking-tight">Plant Facilities & Product Processing</h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {galleryImages.map((src, i) => (
            <div key={i} className="aspect-square bg-slate-100 rounded-xl border border-industrial-metallic overflow-hidden relative shadow-sm group">
              <img src={src} alt="Precision Industrial Coating Product Tank Batch" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter grayscale-[15%]" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <span className="text-[10px] text-white font-bold uppercase tracking-wider">Quality Verified Lot</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}