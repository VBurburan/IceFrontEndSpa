import { Quote, Award, Globe, Stethoscope } from 'lucide-react';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

const credentials = [
  { icon: Stethoscope, label: '10+ Years at Alcor' },
  { icon: Globe, label: 'Most Intl. Cases in History' },
  { icon: Award, label: 'ICU-Level Field Protocols' },
];

export function Leadership() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="leadership" className="py-24 bg-ice-warm-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className="flex flex-col lg:flex-row gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-1/2"
          >
             <div className="relative rounded-2xl overflow-hidden shadow-2xl group ring-1 ring-ice-gold/20">
               <img
                 src="https://i.imgur.com/VXbNScc.jpg"
                 alt="Aaron Drake, Senior Medical Response Consultant at ICE"
                 className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-700"
               />
               <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-ice-navy/90 via-ice-navy/50 to-transparent p-8">
                  <h3 className="text-white text-2xl font-light">Aaron Drake</h3>
                  <p className="text-ice-teal-light text-sm font-bold uppercase tracking-widest mt-1">Senior Medical Response Consultant</p>
               </div>
             </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="w-full lg:w-1/2"
          >
             <h2 className="text-xs font-bold text-ice-teal uppercase tracking-[0.25em] mb-3">Leadership</h2>
             <h3 className="text-3xl md:text-4xl font-extralight text-ice-text-primary tracking-tight mb-8">
               Setting the clinical standard for <br />
               <span className="font-serif italic text-ice-text-tertiary">human cryopreservation.</span>
             </h3>

             <div className="space-y-6 text-ice-text-secondary font-light leading-relaxed mb-8 text-lg">
               <p>
                 Aaron Drake served as the Medical Response Director for the Alcor Life Extension Foundation for over a decade, personally overseeing more international cases than any other specialist in history.
               </p>
               <p>
                 His protocols have defined the industry standard for field stabilization, bringing ICU-level care to the patient's bedside immediately after legal death pronouncement.
               </p>
             </div>

             {/* Credential Badges */}
             <motion.div
               initial={{ opacity: 0, y: 15 }}
               animate={isInView ? { opacity: 1, y: 0 } : {}}
               transition={{ duration: 0.5, delay: 0.4 }}
               className="flex flex-wrap gap-3 mb-8"
             >
               {credentials.map((cred) => (
                 <div key={cred.label} className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-ice-border-subtle shadow-sm text-sm text-ice-text-primary">
                   <cred.icon size={14} className="text-ice-teal" />
                   <span className="font-medium">{cred.label}</span>
                 </div>
               ))}
             </motion.div>

             <motion.div
               initial={{ opacity: 0, y: 15 }}
               animate={isInView ? { opacity: 1, y: 0 } : {}}
               transition={{ duration: 0.5, delay: 0.55 }}
               className="bg-white p-8 rounded-xl border border-ice-border-subtle shadow-sm relative overflow-hidden"
             >
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-ice-teal to-ice-gold" />
                <Quote className="text-ice-teal/10 absolute top-4 right-4 w-8 h-8" />
                <p className="text-ice-text-primary italic font-medium relative z-10 pl-4">
                  "Our mission is to maintain biological viability through surgical precision and rapid cooling. We don't just transport; we preserve potential."
                </p>
             </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
