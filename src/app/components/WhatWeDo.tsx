import { Timer, Snowflake, HeartPulse } from 'lucide-react';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

const capabilities = [
  {
    icon: Timer,
    title: 'Rapid Standby',
    description: 'We deploy weeks in advance for critical patients. Being at the bedside at the moment of pronouncement is the single most important factor in preservation quality.',
  },
  {
    icon: HeartPulse,
    title: 'Field Stabilization',
    description: 'Immediate application of mechanical cardiopulmonary support and administration of neuroprotective medications to maintain oxygenation and prevent clotting.',
  },
  {
    icon: Snowflake,
    title: 'Deep Cooling',
    description: 'Computer-controlled cooling using portable ice baths and eventual dry ice transfer lowers the patient\'s temperature to stop metabolic activity during transport.',
  },
];

export function WhatWeDo() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="expertise" className="py-32 bg-ice-warm-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <p className="text-xs font-bold text-ice-teal uppercase tracking-[0.25em] mb-4">Our Expertise</p>
          <h2 className="text-3xl md:text-4xl font-extralight text-ice-text-primary tracking-tight mb-6">
            Bridging the gap between <br />
            <span className="text-ice-text-tertiary italic">today's end and tomorrow's beginning</span>
          </h2>
          <p className="text-ice-text-secondary font-light leading-relaxed">
            We specialize in the critical phase immediately following legal death. Our SST (Standby, Stabilization, and Transport) teams intervene to stop biological decay and prepare the patient for long-term cryopreservation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 relative">
          {/* Connecting line (desktop only) — draws itself on scroll */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="hidden md:block absolute top-7 left-[16.67%] right-[16.67%] h-px bg-gradient-to-r from-transparent via-ice-teal/30 to-transparent origin-left"
          />

          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
              className="group relative premium-card"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-ice-warm-gray border border-ice-border-subtle flex items-center justify-center text-ice-teal group-hover:bg-ice-teal group-hover:text-white transition-colors duration-300 relative z-10">
                  <cap.icon size={28} strokeWidth={1.5} />
                </div>
                <span className="text-5xl font-extralight text-ice-border-subtle group-hover:text-ice-teal-muted transition-colors duration-300 select-none">
                  0{i + 1}
                </span>
              </div>
              <h4 className="text-xl font-medium text-ice-text-primary mb-3">{cap.title}</h4>
              <p className="text-sm text-ice-text-secondary leading-relaxed font-light">
                {cap.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
