import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { Phone, UserCheck, Radio, HeartPulse, Thermometer, Truck, HandshakeIcon, Clock, Globe, Award } from 'lucide-react';
import { AnimatedSection } from '@/app/components/AnimatedSection';
import { InquiryDialog } from '@/app/components/InquiryDialog';
import { Link } from 'react-router-dom';

const steps = [
  {
    icon: Phone,
    title: 'Initial Contact',
    description: 'You or your designated contact reaches ICE via our 24/7 standby line or secure intake form. Our case coordinator assesses the situation and begins protocol development immediately.',
  },
  {
    icon: UserCheck,
    title: 'Assessment & Planning',
    description: 'We evaluate your geographic location, medical situation, local regulations, and coordinate with your chosen cryopreservation organization. A detailed deployment plan is developed and shared with all parties.',
  },
  {
    icon: Radio,
    title: 'Standby Deployment',
    description: 'When activation is called, our team mobilizes with full medical-grade equipment. For pre-arranged cases, we may already have team members and equipment pre-positioned near your location.',
  },
  {
    icon: HeartPulse,
    title: 'Stabilization Protocol',
    description: 'Upon legal pronouncement, our team initiates ICU-level stabilization: mechanical cardiopulmonary support, medication administration, and airway management. Every second counts — our protocols are designed for speed without compromising quality.',
  },
  {
    icon: Thermometer,
    title: 'Cooling & Preservation',
    description: 'Controlled cooling begins immediately using our proprietary protocol. We manage temperature descent through ice bath immersion, monitoring core temperature continuously to ensure optimal preservation of biological structures.',
  },
  {
    icon: Truck,
    title: 'Transport Coordination',
    description: 'We coordinate ground and air transport, managing all logistics including permits, customs documentation, and regulatory compliance. Our team maintains care and cooling throughout the entire journey.',
  },
  {
    icon: HandshakeIcon,
    title: 'Handoff to Receiving Organization',
    description: 'At the destination facility, we perform a documented handoff to your chosen cryopreservation organization. Complete case records, temperature logs, and medical documentation are transferred.',
  },
];

const differentiators = [
  {
    icon: Award,
    title: 'Unmatched Experience',
    description: '150+ successful cases. More international cryopreservations than any team in history. There is no substitute for the judgment that comes from doing this work for over a decade.',
  },
  {
    icon: Clock,
    title: 'Rapid Response',
    description: 'Our distributed team model and pre-positioned equipment mean we can deploy within hours, not days. In cryopreservation, the difference between hours and days can be the difference between a good outcome and a compromised one.',
  },
  {
    icon: Globe,
    title: 'Global Capability',
    description: '40+ countries served. We have navigated the regulatory complexities of transporting human remains across borders on six continents. No logistics challenge is unfamiliar to our team.',
  },
];

export function ProcessPage() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start center', 'end center'],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <div>
      {/* Hero */}
      <section className="relative bg-ice-navy text-white pt-40 pb-24 premium-grain overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-xs font-bold tracking-[0.25em] uppercase text-ice-teal-light mb-6">The Process</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extralight tracking-tight leading-[1.1] mb-8">
              From first call to<br />
              <span className="text-ice-teal-light">final handoff</span>
            </h1>
            <p className="text-lg font-light text-white/70 max-w-2xl leading-relaxed">
              A proven, methodical process refined over 150+ cases. Every step documented,
              every protocol battle-tested, every outcome measured.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Time Is Tissue */}
      <section className="py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <div className="h-px w-16 bg-ice-gold mx-auto mb-12" />
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extralight text-ice-text-primary leading-relaxed tracking-tight mb-6">
              Time is tissue
            </h2>
            <p className="text-ice-text-secondary font-light leading-relaxed max-w-2xl mx-auto">
              In cryopreservation, biological degradation begins immediately after legal death.
              Every minute of delay increases ischemic damage. Our entire process is engineered
              to minimize this interval — because the quality of preservation depends on speed,
              precision, and preparation.
            </p>
            <div className="h-px w-16 bg-ice-gold mx-auto mt-12" />
          </AnimatedSection>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 lg:py-32 bg-ice-warm-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <p className="text-xs font-bold tracking-[0.25em] uppercase text-ice-teal mb-4">Step by Step</p>
            <h2 className="text-3xl lg:text-4xl font-extralight text-ice-text-primary tracking-tight">
              The ICE Protocol
            </h2>
          </AnimatedSection>

          <div ref={timelineRef} className="relative">
            {/* Background line */}
            <div className="absolute left-6 lg:left-1/2 lg:-translate-x-px top-0 bottom-0 w-px bg-ice-border-subtle" />
            {/* Animated fill line */}
            <motion.div
              className="absolute left-6 lg:left-1/2 lg:-translate-x-px top-0 w-px bg-ice-teal origin-top"
              style={{ height: lineHeight }}
            />

            {steps.map((step, i) => {
              const isRight = i % 2 !== 0;
              return (
                <AnimatedSection
                  key={step.title}
                  variant={isRight ? 'fade-right' : 'fade-left'}
                  delay={i * 0.08}
                  className="relative pb-16 last:pb-0"
                >
                  <div className={`pl-16 lg:pl-0 ${isRight ? 'lg:pl-[calc(50%+3rem)]' : 'lg:pr-[calc(50%+3rem)] lg:text-right'}`}>
                    {/* Dot */}
                    <div className={`absolute left-4 lg:left-1/2 lg:-translate-x-1/2 top-0 w-5 h-5 rounded-full bg-white border-2 border-ice-teal flex items-center justify-center`}>
                      <div className="w-2 h-2 rounded-full bg-ice-teal" />
                    </div>

                    {/* Step number */}
                    <p className="text-[10px] font-bold tracking-widest text-ice-teal uppercase mb-2">
                      Step {String(i + 1).padStart(2, '0')}
                    </p>

                    {/* Icon + Title */}
                    <div className={`flex items-center gap-3 mb-3 ${isRight ? '' : 'lg:justify-end'}`}>
                      <div className={`w-10 h-10 rounded-lg bg-ice-teal-muted flex items-center justify-center ${isRight ? '' : 'lg:order-2'}`}>
                        <step.icon size={18} className="text-ice-teal" strokeWidth={1.5} />
                      </div>
                      <h3 className="text-lg font-medium text-ice-text-primary">{step.title}</h3>
                    </div>

                    <p className="text-sm text-ice-text-secondary font-light leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* What Sets ICE Apart */}
      <section className="py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <p className="text-xs font-bold tracking-[0.25em] uppercase text-ice-teal mb-4">Why ICE</p>
            <h2 className="text-3xl lg:text-4xl font-extralight text-ice-text-primary tracking-tight">
              What sets us apart
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {differentiators.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.12}>
                <div className="text-center premium-card bg-white p-8 rounded-xl border border-ice-border-subtle h-full">
                  <div className="w-14 h-14 rounded-xl bg-ice-teal-muted flex items-center justify-center mx-auto mb-6">
                    <item.icon size={24} className="text-ice-teal" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg font-medium text-ice-text-primary mb-3">{item.title}</h3>
                  <p className="text-sm text-ice-text-secondary font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ice-navy text-white py-20 premium-grain">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl lg:text-4xl font-extralight tracking-tight mb-6">
              Every case is unique. Let's discuss yours.
            </h2>
            <p className="text-white/60 font-light mb-10 max-w-xl mx-auto">
              Whether you're planning ahead or facing an urgent situation,
              our experienced team is ready to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <InquiryDialog>
                <button className="px-8 py-3.5 bg-ice-teal text-white text-xs font-bold uppercase tracking-widest rounded hover:bg-ice-teal-light transition-colors">
                  Start an Inquiry
                </button>
              </InquiryDialog>
              <Link
                to="/services"
                className="px-8 py-3.5 border border-white/20 text-white text-xs font-bold uppercase tracking-widest rounded hover:border-white/40 transition-colors text-center"
              >
                View Services & Pricing
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}

export default ProcessPage;
