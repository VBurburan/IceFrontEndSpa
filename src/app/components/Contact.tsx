import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { InquiryDialog } from './InquiryDialog';

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="contact" className="py-24 bg-ice-navy text-white relative overflow-hidden premium-grain">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-5/12"
          >
            <p className="text-xs font-bold text-ice-teal-light uppercase tracking-[0.25em] mb-4">Get in Touch</p>
            <h2 className="text-3xl md:text-4xl font-extralight text-white tracking-tight mb-6">Start the conversation.</h2>
            <p className="text-white/50 font-light leading-relaxed mb-12">
              Our team is available 24/7 for urgent deployment. For non-urgent inquiries or consultation requests, use our secure form or visit our contact page.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-5">
                <div className="w-11 h-11 rounded-lg bg-white/5 flex items-center justify-center text-white shrink-0 border border-white/10">
                  <Phone size={20} />
                </div>
                <div>
                  <h3 className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-1">Standby Activation (24/7)</h3>
                  <a href="tel:844-468-5279" className="text-2xl font-extralight tracking-tight text-white hover:text-ice-teal-light transition-colors">844-INTL-CRYO</a>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-11 h-11 rounded-lg bg-white/5 flex items-center justify-center text-white shrink-0 border border-white/10">
                  <Mail size={20} />
                </div>
                <div>
                  <h3 className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-1">General Inquiries</h3>
                  <a href="mailto:info@cryomedics.org" className="text-lg font-light text-white hover:text-ice-teal-light transition-colors">info@cryomedics.org</a>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-11 h-11 rounded-lg bg-white/5 flex items-center justify-center text-white shrink-0 border border-white/10">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-1">Headquarters</h3>
                  <p className="text-lg font-light text-white">Scottsdale, Arizona</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="w-full lg:w-7/12 flex items-center"
          >
            <div className="w-full bg-white/5 border border-white/10 rounded-xl p-10 lg:p-14 text-center">
              <h3 className="text-2xl lg:text-3xl font-extralight text-white tracking-tight mb-4">
                Ready to discuss your case?
              </h3>
              <p className="text-white/50 font-light text-sm leading-relaxed mb-10 max-w-md mx-auto">
                Whether you're planning ahead or facing an urgent situation, our experienced team
                will guide you through every step of the process.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <InquiryDialog>
                  <button className="px-8 py-3.5 bg-ice-teal text-white text-xs font-bold uppercase tracking-widest rounded hover:bg-ice-teal-light transition-colors flex items-center justify-center gap-2 group">
                    Open Secure Form
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </InquiryDialog>
                <Link
                  to="/contact"
                  className="px-8 py-3.5 border border-white/20 text-white text-xs font-bold uppercase tracking-widest rounded hover:border-white/40 hover:bg-white/5 transition-all text-center"
                >
                  Visit Contact Page
                </Link>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
