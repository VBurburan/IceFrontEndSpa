import { Quote } from 'lucide-react';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

export function Leadership() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="leadership" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className="flex flex-col lg:flex-row gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-1/2"
          >
             <div className="relative rounded-2xl overflow-hidden shadow-2xl">
               <img
                 src="https://i.imgur.com/VXbNScc.jpg"
                 alt="Aaron Drake, Senior Medical Response Consultant at ICE"
                 className="w-full h-auto object-cover"
               />
               <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-900/90 to-transparent p-8">
                  <h3 className="text-white text-2xl font-light">Aaron Drake</h3>
                  <p className="text-cyan-400 text-sm font-bold uppercase tracking-widest mt-1">Senior Medical Response Consultant</p>
               </div>
             </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="w-full lg:w-1/2"
          >
             <h2 className="text-sm font-bold text-cyan-600 uppercase tracking-widest mb-3">Leadership</h2>
             <h3 className="text-3xl md:text-4xl font-light text-slate-900 mb-8">
               Setting the clinical standard for <br />
               <span className="font-serif italic text-slate-400">human cryopreservation.</span>
             </h3>

             <div className="space-y-6 text-slate-600 font-light leading-relaxed mb-10 text-lg">
               <p>
                 Aaron Drake served as the Medical Response Director for the Alcor Life Extension Foundation for over a decade, personally overseeing more international cases than any other specialist in history.
               </p>
               <p>
                 His protocols have defined the industry standard for field stabilization, bringing ICU-level care to the patient's bedside immediately after legal death pronouncement.
               </p>
             </div>

             <div className="bg-white p-8 rounded-xl border border-slate-100 shadow-sm relative">
                <Quote className="text-cyan-100 absolute top-4 left-4 w-10 h-10 -z-10" />
                <p className="text-slate-700 italic font-medium relative z-10">
                  "Our mission is to maintain biological viability through surgical precision and rapid cooling. We don't just transport; we preserve potential."
                </p>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
