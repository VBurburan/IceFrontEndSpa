import { motion, useScroll, useTransform } from 'motion/react';
import { Phone, ArrowRight, ChevronDown } from 'lucide-react';
import { useRef } from 'react';
import { InquiryDialog } from './InquiryDialog';

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 600], [0, 200]);
  const textOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const textY = useTransform(scrollY, [0, 400], [0, -40]);

  return (
    <div ref={containerRef} className="relative w-full min-h-screen flex items-center overflow-hidden bg-ice-navy">

      {/* Background Image with Parallax */}
      <motion.div className="absolute inset-0 z-0" style={{ y: bgY }}>
        <img
          src="https://imgur.com/1PLU9xV.png"
          alt="ICE Medical Transport"
          className="w-full h-[120%] object-cover object-[75%_center] lg:object-center"
        />
        {/* Sophisticated overlay: dark from left for text legibility, fade to image on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-ice-navy via-ice-navy/80 to-ice-navy/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-ice-navy via-transparent to-ice-navy/30" />
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 pt-32 pb-24"
        style={{ opacity: textOpacity, y: textY }}
      >
        <div className="max-w-2xl">

          {/* Label */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-xs font-bold tracking-[0.3em] uppercase text-ice-teal-light mb-8"
          >
            International Cryomedicine Experts
          </motion.p>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl sm:text-6xl lg:text-8xl font-extralight text-white tracking-tight leading-[1.05] mb-8"
          >
            Global Excellence
            <br />
            in <span className="text-ice-teal-light">Biostasis</span> Care
          </motion.h1>

          {/* Divider */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="h-px w-20 bg-ice-gold mb-8 origin-left"
          />

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg sm:text-xl text-white/70 font-light leading-relaxed mb-12 max-w-xl"
          >
            ICU-level standby, stabilization, and transport services.
            Bridging the critical gap between legal death and future medicine
            with uncompromising clinical standards.
          </motion.p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.65 }}
            >
              <InquiryDialog>
                <button className="px-8 py-4 bg-ice-teal text-white font-bold text-xs uppercase tracking-widest rounded hover:bg-ice-teal-light transition-colors duration-300 flex items-center justify-center gap-2 group w-full sm:w-auto">
                  Start Inquiry
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </InquiryDialog>
            </motion.div>

            <motion.a
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              href="tel:844-468-5279"
              className="px-8 py-4 border border-white/20 text-white font-bold text-xs uppercase tracking-widest rounded hover:border-white/40 hover:bg-white/5 transition-all duration-300 flex items-center justify-center gap-3"
            >
              <Phone size={14} />
              24/7 Standby Line
            </motion.a>
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] font-medium tracking-widest uppercase text-white/40">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={16} className="text-white/40" />
        </motion.div>
      </motion.div>
    </div>
  );
}
