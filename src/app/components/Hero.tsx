import { motion, useScroll, useTransform } from 'motion/react';
import { Phone, ArrowRight, ChevronDown } from 'lucide-react';
import { useRef } from 'react';
import { InquiryDialog } from './InquiryDialog';
import { MagneticButton } from './MagneticButton';
import { CursorGlow } from './CursorGlow';

const headlineWords = ['Global', 'Excellence', 'in', 'Biostasis', 'Care'];

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
          alt="ICE cryopreservation team performing field stabilization procedures"
          width={1920}
          height={1080}
          className="w-full h-[120%] object-cover object-[75%_center] lg:object-center"
        />
        {/* Overlay: dark from left for text legibility, letting the image breathe on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-ice-navy/95 via-ice-navy/55 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-ice-navy/60 via-transparent to-ice-navy/15" />
      </motion.div>

      {/* Cursor-following glow */}
      <CursorGlow />

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

          {/* Headline — staggered word reveal */}
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-extralight text-white tracking-tight leading-[1.05] mb-8">
            {headlineWords.map((word, i) => (
              <motion.span
                key={word}
                initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{
                  duration: 0.7,
                  delay: 0.2 + i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`inline-block mr-[0.28em] ${word === 'Biostasis' ? 'text-ice-teal-light' : ''}`}
              >
                {word}
                {/* Line break after "Excellence" */}
                {word === 'Excellence' && <br />}
              </motion.span>
            ))}
          </h1>

          {/* Divider */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="h-px w-20 bg-ice-gold mb-8 origin-left"
          />

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
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
              transition={{ duration: 0.5, delay: 1.15 }}
            >
              <MagneticButton>
                <InquiryDialog>
                  <button className="px-8 py-4 bg-ice-teal text-white font-bold text-xs uppercase tracking-widest rounded hover:bg-ice-teal-light transition-colors duration-300 flex items-center justify-center gap-2 group w-full sm:w-auto">
                    Start Inquiry
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </InquiryDialog>
              </MagneticButton>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.3 }}
            >
              <MagneticButton>
                <a
                  href="tel:844-468-5279"
                  className="px-8 py-4 border border-white/20 text-white font-bold text-xs uppercase tracking-widest rounded hover:border-white/40 hover:bg-white/5 transition-all duration-300 flex items-center justify-center gap-3"
                >
                  <Phone size={14} />
                  24/7 Standby Line
                </a>
              </MagneticButton>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <span className="text-[10px] font-medium tracking-widest uppercase text-white/60">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={16} className="text-white/60" />
        </motion.div>
      </motion.div>
    </div>
  );
}
