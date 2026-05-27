import React, { useState } from 'react';
import { Send, Loader2, CheckCircle2, AlertCircle, Building2 } from 'lucide-react';
import api from '../../hooks/useAxios';

export default function InquiryForm() {
  const [formData, setFormData] = useState({
    name: '',
    companyName: '',
    phone: '',
    email: '',
    requirement: '',
    message: ''
  });

  const [status, setStatus] = useState({ loading: false, success: false, error: null });

  const services = [
    'Zinc Plating', 'Nickel Plating', 'Copper Plating', 
    'Chrome Plating', 'Surface Finishing', 'Corrosion Protection'
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: null });

    try {
      const response = await api.post('/inquiries', formData);
      if (response.data.success) {
        setStatus({ loading: false, success: true, error: null });
        setFormData({ name: '', companyName: '', phone: '', email: '', requirement: '', message: '' });
      }
    } catch (err) {
      const errorMsg = err.response?.data?.message || 'Failed to route your inquiry. Please verify your connection entries.';
      setStatus({ loading: false, success: false, error: errorMsg });
    }
  };

  return (
    <section id="inquiry" className="py-20 bg-slate-50 border-y border-industrial-metallic">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs uppercase font-bold text-industrial-accent tracking-widest bg-blue-50 border border-blue-200/60 px-3 py-1 rounded-full">Procurement Gateway</span>
          <h2 className="text-3xl font-black text-industrial-dark tracking-tight mt-3">Submit Industrial RFQ / Inquiry</h2>
          <p className="text-sm text-slate-500 font-medium max-w-lg mx-auto mt-2">
            Send your design blueprints or coating specifications. Our engineering desk will evaluate your parameters within 24 hours.
          </p>
        </div>

        <div className="bg-white border border-industrial-metallic rounded-2xl shadow-xl p-8 md:p-10">
          {status.success ? (
            <div className="text-center py-12 animate-fadeIn">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-emerald-50 text-emerald-600 rounded-full border border-emerald-200">
                  <CheckCircle2 size={48} />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-industrial-dark tracking-tight">Inquiry Routed Successfully</h3>
              <p className="text-sm text-slate-500 font-medium max-w-md mx-auto mt-2">
                A copy of your parameters has been stored in our enterprise network database. A dual notification prompt was forwarded to <strong>vienterprises101@gmail.com</strong> and your inbox.
              </p>
              <button 
                onClick={() => setStatus({ ...status, success: false })}
                className="mt-6 text-xs font-bold uppercase tracking-wider text-industrial-blue border border-industrial-blue/30 px-5 py-2.5 rounded-lg hover:bg-slate-50 transition-all"
              >
                Submit Another Request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {status.error && (
                <div className="p-4 bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold rounded-xl flex items-center gap-3">
                  <AlertCircle size={18} className="shrink-0" />
                  <span>{status.error}</span>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">Full Contact Name *</label>
                  <input type="text" name="name" required value={formData.name} onChange={handleChange} placeholder="e.g., Rajesh Sharma" className="w-full text-sm font-medium border border-industrial-metallic rounded-xl px-4 py-3 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-industrial-blue focus:outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">Registered Company Name *</label>
                  <div className="relative">
                    <input type="text" name="companyName" required value={formData.companyName} onChange={handleChange} placeholder="e.g., Tata Engineering Ltd" className="w-full text-sm font-medium border border-industrial-metallic rounded-xl pl-4 pr-10 py-3 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-industrial-blue focus:outline-none transition-all" />
                    <Building2 size={16} className="absolute right-3.5 top-3.5 text-slate-400" />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">Phone Number *</label>
                  <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} placeholder="e.g., +91 98765 43210" className="w-full text-sm font-medium border border-industrial-metallic rounded-xl px-4 py-3 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-industrial-blue focus:outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">Email Address *</label>
                  <input type="email" name="email" required value={formData.email} onChange={handleChange} placeholder="e.g., procurement@company.com" className="w-full text-sm font-medium border border-industrial-metallic rounded-xl px-4 py-3 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-industrial-blue focus:outline-none transition-all" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">Primary Plating Requirement *</label>
                <select name="requirement" required value={formData.requirement} onChange={handleChange} className="w-full text-sm font-bold text-slate-700 border border-industrial-metallic rounded-xl px-4 py-3 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-industrial-blue focus:outline-none transition-all appearance-none cursor-pointer">
                  <option value="" disabled>-- Choose Process Variant --</option>
                  {services.map((srv) => <option key={srv} value={srv}>{srv}</option>)}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">Technical Specifications / Message *</label>
                <textarea name="message" required rows={4} value={formData.message} onChange={handleChange} placeholder="Provide dimensions, micron thickness specs, batch quantity scale metrics or base material profile components..." className="w-full text-sm font-medium border border-industrial-metallic rounded-xl px-4 py-3 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-industrial-blue focus:outline-none transition-all resize-none"></textarea>
              </div>

              <button type="submit" disabled={status.loading} className="w-full bg-industrial-blue hover:bg-blue-800 text-white font-bold uppercase tracking-wider text-xs py-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed">
                {status.loading ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    <span>Processing RFQ Data...</span>
                  </>
                ) : (
                  <>
                    <Send size={14} />
                    <span>Dispatch Secure Inquiry</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}