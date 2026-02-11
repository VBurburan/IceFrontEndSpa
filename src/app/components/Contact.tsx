import { InquiryForm } from './InquiryForm';
import { Phone, Mail, MapPin } from 'lucide-react';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="contact" className="py-24 bg-slate-900 text-white relative overflow-hidden">

      {/* Background Subtle Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 to-slate-900" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-5/12"
          >
            <h2 className="text-sm font-bold text-cyan-400 uppercase tracking-widest mb-3">Initiate Protocol</h2>
            <h3 className="text-3xl md:text-4xl font-light text-white mb-6">Start the conversation.</h3>
            <p className="text-slate-400 font-light leading-relaxed mb-12">
              Our team is available 24/7 for urgent deployment. For non-urgent membership inquiries or consultation requests, please use the secure form.
            </p>

            <div className="space-y-10">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center text-white shrink-0 border border-white/10">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Standby Activation (24/7)</h4>
                  <a href="tel:844-468-5279" className="text-3xl font-light tracking-tight text-white hover:text-cyan-400 transition-colors">844-INTL-CRYO</a>
                  <p className="text-slate-500 text-sm mt-1">For urgent member support only.</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center text-white shrink-0 border border-white/10">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">General Inquiries</h4>
                  <a href="mailto:info@cryomedics.org" className="text-lg font-light text-white hover:text-cyan-400 transition-colors">info@cryomedics.org</a>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center text-white shrink-0 border border-white/10">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Headquarters</h4>
                  <p className="text-lg font-light text-white">Scottsdale, Arizona</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="w-full lg:w-7/12"
          >
            <div className="bg-white rounded-xl overflow-hidden shadow-2xl">
              <div className="bg-slate-50 px-8 py-6 border-b border-slate-200">
                 <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Secure Intake Form</span>
              </div>
              <InquiryForm />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
