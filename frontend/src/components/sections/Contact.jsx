import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white border-t border-industrial-metallic">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          
          <div className="space-y-6 flex flex-col justify-between">
            <div>
              <span className="text-xs uppercase font-bold text-industrial-accent tracking-widest bg-blue-50 border border-blue-200/50 px-3 py-1 rounded-full">Plant Logistics</span>
              <h2 className="text-3xl font-black text-industrial-dark tracking-tight mt-3">Visit Our Production Site</h2>
              <p className="text-sm text-slate-500 font-medium leading-relaxed mt-2">
                Our facilities welcome auditing requests from enterprise quality management teams by appointment.
              </p>
            </div>

            <div className="bg-slate-50 border border-industrial-metallic rounded-xl p-6 space-y-4">
              <div className="flex gap-4">
                <MapPin className="text-industrial-blue shrink-0 mt-0.5" size={20} />
                <div>
                  <h5 className="text-xs uppercase font-black tracking-wider text-slate-700">Factory Address</h5>
                  <p className="text-xs font-semibold text-slate-500 mt-1">W-101, M.I.D.C Industrial Area, Hingna Rd, Hingna, Nildoh ct, Maharashtra 441110</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Phone className="text-industrial-blue shrink-0" size={18} />
                <div>
                  <h5 className="text-xs uppercase font-black tracking-wider text-slate-700">Telephone Lines</h5>
                  <p className="text-xs font-bold text-slate-600 mt-1">+91 8408022773</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Mail className="text-industrial-blue shrink-0" size={18} />
                <div>
                  <h5 className="text-xs uppercase font-black tracking-wider text-slate-700">Digital Service Desk</h5>
                  <p className="text-xs font-bold text-slate-600 mt-1">vienterprises101@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-industrial-metallic overflow-hidden shadow-lg h-[350px] bg-slate-100">
            <iframe 
              title="VI Enterprises Plant Location Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3722.1448825700877!2d78.9664537!3d21.1068212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4950e932906df%3A0x67396a58bcad42e4!2sW-101%2C%20Hingna%20Rd%2C%20MIDC%20Industrial%20Area%2C%20Nagpur%2C%20Maharashtra%20441110!5e0!3m2!1sen!2sin!4v1716812345678!5m2!1sen!2sin" 
              className="w-full h-full border-0 filter grayscale-[20%]"
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
}