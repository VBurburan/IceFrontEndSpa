import { motion } from 'motion/react';
import { Phone, ArrowRight } from 'lucide-react';

export function Hero() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    // Changed items-center to items-start to allow fixed top positioning
    <div className="relative w-full min-h-[95vh] flex items-start overflow-hidden bg-slate-50">
      
      {/* Background Image - Full Coverage */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://imgur.com/1PLU9xV.png" 
          alt="ICE Medical Transport"
          className="w-full h-full object-cover object-[75%_center] lg:object-center brightness-110 contrast-105 saturate-[1.1]" 
        />
        {/* Gradient left-to-right */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/40 via-white/10 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-40" />
      </div>

      {/* Content */}
      {/* Reduced lg:px-20 to lg:px-6 to move content more to the left */}
      {/* Changed lg:pt-0 to lg:pt-48 to fix the headline position vertically */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-12 lg:px-6 pt-28 lg:pt-48 flex justify-start">
        <div className="max-w-2xl w-full">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Logo removed (duplicate) - kept removed but increased padding to pt-28 to avoid cutoff */}
            
            {/* Glass Container for Headline */}
            {/* Increased margin bottom from mb-32 to mb-64 for much more separation */}
            <div className="bg-white/75 backdrop-blur-md rounded-2xl p-6 sm:p-8 shadow-xl border border-white/50 mb-48 lg:mb-64 inline-block w-full sm:w-auto">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-light text-slate-900 tracking-tight leading-[1.1] m-0">
                Global Excellence <br />
                in <span className="font-semibold text-cyan-700">Biostasis Care</span>
              </h1>
            </div>
            
            <p className="text-lg sm:text-xl text-slate-900 font-normal leading-relaxed mb-10 max-w-xl border-l-4 border-cyan-500 pl-6 bg-white/75 backdrop-blur-md py-4 pr-4 rounded-r-lg shadow-lg">
              Providing ICU-level standby, stabilization, and transport services. We bridge the critical gap between legal death and future medicine with uncompromising clinical standards.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={scrollToContact}
                className="px-8 py-4 bg-slate-900 text-white font-bold text-sm uppercase tracking-widest rounded-md hover:bg-cyan-700 transition-colors duration-200 flex items-center justify-center gap-2 group shadow-xl border border-slate-700/50"
              >
                Start Inquiry
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
              
              <a href="tel:844-468-5279" className="px-8 py-4 bg-white/95 backdrop-blur-sm border border-slate-300 text-slate-900 font-bold text-sm uppercase tracking-widest rounded-md hover:bg-white hover:text-cyan-700 transition-colors duration-200 flex items-center justify-center gap-3 shadow-xl">
                <Phone size={16} />
                24/7 Standby Activation
              </a>
            </div>
          </motion.div>
        </div>
      </div>

    </div>
  );
}
