import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Settings } from 'lucide-react';
import Navbar from './components/common/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Services from './components/sections/Services';
import WhyChooseUs from './components/sections/WhyChooseUs';
import Industries from './components/sections/Industries';
import Gallery from './components/sections/Gallery';
import InquiryForm from './components/sections/InquiryForm';
import Contact from './components/sections/Contact';
import Footer from './components/common/Footer';
import WhatsAppBtn from './components/ui/WhatsAppBtn';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Artificial cooling delay simulating internal asset compilation fetches
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.6, ease: 'easeInOut' } }}
            className="fixed inset-0 z-[9999] bg-[#0F172A] flex flex-col items-center justify-center overflow-hidden"
          >
            {/* Ambient Background Tech Glow */}
            <div className="absolute w-[400px] h-[400px] rounded-full bg-blue-900/10 blur-[120px] pointer-events-none"></div>
            
            <div className="relative flex flex-col items-center">
              {/* Dual Interlocking Gear Set Components */}
              <div className="relative w-24 h-24 mb-8">
                {/* Master Primary Drive Gear */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 4, ease: 'linear' }}
                  className="text-industrial-accent drop-shadow-[0_0_15px_rgba(2,132,199,0.3)]"
                >
                  <Settings size={72} strokeWidth={1} />
                </motion.div>
                
                {/* Secondary Interlocking Planetary Gear */}
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ repeat: Infinity, duration: 2.5, ease: 'linear' }}
                  className="absolute bottom-0 right-0 text-slate-500"
                >
                  <Settings size={36} strokeWidth={1.5} />
                </motion.div>
              </div>

              {/* Minimal Text Reveal Typography */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-center"
              >
                <h2 className="text-xl font-black text-white tracking-[0.25em] uppercase leading-none">
                  VI ENTERPRISES
                </h2>
                <div className="h-[2px] w-12 bg-industrial-accent mx-auto my-3 rounded-full"></div>
                <p className="text-[10px] font-bold tracking-widest text-slate-400 uppercase">
                  Surface Engineering Hub
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="min-h-screen bg-industrial-gray antialiased selection:bg-industrial-blue selection:text-white">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Services />
          <WhyChooseUs />
          <Industries />
          <Gallery />
          <InquiryForm />
          <Contact />
        </main>
        <Footer />
        <WhatsAppBtn />
      </div>
    </>
  );
}

export default App;