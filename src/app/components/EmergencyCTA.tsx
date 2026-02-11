import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone } from 'lucide-react';

export function EmergencyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.8);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href="tel:844-468-5279"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          aria-label="Call 24/7 emergency standby line"
          className="fixed z-50 flex items-center gap-3
            max-md:bottom-0 max-md:left-0 max-md:right-0 max-md:rounded-none max-md:justify-center max-md:py-4 max-md:px-6 max-md:pb-[calc(1rem+env(safe-area-inset-bottom))]
            md:bottom-8 md:left-8 md:rounded-full md:px-5 md:py-3
            bg-ice-navy text-white shadow-2xl shadow-ice-navy/30
            hover:bg-ice-teal transition-colors duration-300"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500" />
          </span>
          <Phone size={15} strokeWidth={2} />
          <span className="text-xs font-bold tracking-widest uppercase">844-INTL-CRYO</span>
          <span className="hidden md:inline text-[10px] font-medium text-white/60 tracking-wide ml-1">24/7</span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
