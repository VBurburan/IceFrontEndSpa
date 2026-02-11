import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Stethoscope, Globe, Award, Shield, Clock, Users, HeartPulse, Thermometer } from 'lucide-react';
import { AnimatedCounter } from '@/app/components/AnimatedCounter';
import { AnimatedSection } from '@/app/components/AnimatedSection';
import { Link } from 'react-router-dom';

const credentials = [
  { icon: Stethoscope, label: '10+ Years at Alcor Life Extension Foundation' },
  { icon: Globe, label: 'Most International Cryopreservation Cases in History' },
  { icon: Award, label: 'ICU-Level Field Protocols Pioneer' },
  { icon: Shield, label: 'HIPAA-Aligned Practices' },
];

const standards = [
  {
    icon: HeartPulse,
    title: 'ICU-Level Field Care',
    description: 'Our protocols mirror intensive care unit standards, adapted for field deployment. Every team member is trained in advanced cardiac life support and emergency stabilization.',
  },
  {
    icon: Thermometer,
    title: 'Precision Cooling',
    description: 'Temperature management is critical. Our proprietary cooling protocols achieve target temperatures faster than any competing method, preserving cellular integrity.',
  },
  {
    icon: Shield,
    title: 'Chain of Custody',
    description: 'From the moment we deploy to final handoff, every step is documented. GPS tracking, time-stamped procedures, and dual-verification at each critical juncture.',
  },
  {
    icon: Clock,
    title: 'Rapid Global Response',
    description: 'Our distributed team model means we can have boots on the ground within hours, not days. Pre-positioned equipment in strategic locations worldwide.',
  },
];

const milestones = [
  { year: '2015', event: 'ICE founded by Aaron Drake after a decade at Alcor Life Extension Foundation' },
  { year: '2016', event: 'First international deployment — successful case coordination across three countries' },
  { year: '2018', event: 'Surpassed 50 cryopreservation cases, establishing the most experienced independent SST team' },
  { year: '2020', event: 'Expanded global coverage to 40+ countries with pre-positioned equipment network' },
  { year: '2022', event: 'Introduced advanced perfusion capabilities as add-on service tier' },
  { year: '2024', event: 'Completed 150+ successful cryopreservations — more international cases than any team in history' },
];

export function AboutPage() {
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, margin: '-100px' });

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
            <p className="text-xs font-bold tracking-[0.25em] uppercase text-ice-teal-light mb-6">About ICE</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extralight tracking-tight leading-[1.1] mb-8">
              When time is the<br />
              <span className="text-ice-teal-light">most critical variable</span>
            </h1>
            <p className="text-lg font-light text-white/70 max-w-2xl leading-relaxed">
              International Cryomedicine Experts provides the world's most experienced
              standby, stabilization, and transport team for human cryopreservation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Quote */}
      <section className="py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <div className="h-px w-16 bg-ice-gold mx-auto mb-12" />
            <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-extralight text-ice-text-primary leading-relaxed tracking-tight">
              "We bridge the critical gap between legal death and future medicine
              with uncompromising clinical standards."
            </blockquote>
            <div className="h-px w-16 bg-ice-gold mx-auto mt-12 mb-6" />
            <p className="text-sm text-ice-text-tertiary font-medium tracking-wide uppercase">
              The ICE Mission
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats Band */}
      <section ref={statsRef} className="bg-ice-navy text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {[
              { value: 150, suffix: '+', label: 'Cryopreservations' },
              { value: 40, suffix: '+', label: 'Countries Served' },
              { value: 10, suffix: '+', label: 'Years of Leadership' },
              { value: 24, suffix: '/7', label: 'Global Availability' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl lg:text-5xl font-extralight text-white mb-2">
                  {stat.suffix === '/7' ? (
                    <span>24<span className="text-ice-teal-light">/7</span></span>
                  ) : (
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                  )}
                </div>
                <p className="text-xs font-medium tracking-widest uppercase text-white/50">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <AnimatedSection variant="fade-left">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-ice-gold/20 group">
                <img
                  src="https://i.imgur.com/VXbNScc.jpg"
                  alt="Aaron Drake, Managing Partner at ICE International Cryomedicine Experts"
                  className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-ice-navy/90 via-ice-navy/40 to-transparent p-8">
                  <h3 className="text-xl font-medium text-white">Aaron Drake</h3>
                  <p className="text-sm text-white/70 font-light">Managing Partner</p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection variant="fade-right" delay={0.15}>
              <p className="text-xs font-bold tracking-[0.25em] uppercase text-ice-teal mb-4">Leadership</p>
              <h2 className="text-3xl lg:text-4xl font-extralight text-ice-text-primary tracking-tight mb-8">
                The most experienced hand in cryomedicine
              </h2>
              <p className="text-ice-text-secondary font-light leading-relaxed mb-8">
                Aaron Drake brings over a decade of hands-on experience from the Alcor Life Extension
                Foundation, where he managed more international cryopreservation cases than anyone in
                the field's history. His deep expertise in the complex logistics of international
                stabilization and transport led him to found ICE — creating a dedicated team focused
                solely on delivering ICU-level care in the field.
              </p>
              <p className="text-ice-text-secondary font-light leading-relaxed mb-10">
                Under Aaron's leadership, ICE has completed over 150 cryopreservations across
                40+ countries, developing proprietary protocols that maintain biological viability
                through surgical precision and relentless attention to detail.
              </p>

              {/* Credentials */}
              <div className="space-y-3">
                {credentials.map((cred) => (
                  <div
                    key={cred.label}
                    className="flex items-center gap-3 px-4 py-3 bg-ice-warm-white rounded-lg border border-ice-border-subtle"
                  >
                    <cred.icon size={16} className="text-ice-teal flex-shrink-0" />
                    <span className="text-sm text-ice-text-secondary">{cred.label}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Clinical Standards */}
      <section className="py-24 lg:py-32 bg-ice-warm-gray">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <p className="text-xs font-bold tracking-[0.25em] uppercase text-ice-teal mb-4">Standards</p>
            <h2 className="text-3xl lg:text-4xl font-extralight text-ice-text-primary tracking-tight">
              Clinical excellence, everywhere
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            {standards.map((standard, i) => (
              <AnimatedSection key={standard.title} delay={i * 0.1}>
                <div className="bg-white p-8 rounded-xl border border-ice-border-subtle premium-card h-full">
                  <div className="w-12 h-12 rounded-xl bg-ice-teal-muted flex items-center justify-center mb-6">
                    <standard.icon size={22} className="text-ice-teal" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg font-medium text-ice-text-primary mb-3">{standard.title}</h3>
                  <p className="text-sm text-ice-text-secondary font-light leading-relaxed">
                    {standard.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 lg:py-32">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <p className="text-xs font-bold tracking-[0.25em] uppercase text-ice-teal mb-4">History</p>
            <h2 className="text-3xl lg:text-4xl font-extralight text-ice-text-primary tracking-tight">
              A decade of firsts
            </h2>
          </AnimatedSection>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-ice-border-subtle" />

            {milestones.map((milestone, i) => (
              <AnimatedSection key={milestone.year} delay={i * 0.08}>
                <div className={`relative pl-12 md:pl-0 pb-12 last:pb-0 ${i % 2 === 0 ? 'md:pr-[calc(50%+2rem)] md:text-right' : 'md:pl-[calc(50%+2rem)]'}`}>
                  <div className={`absolute left-2.5 md:left-1/2 md:-translate-x-1/2 top-1 w-3 h-3 rounded-full bg-ice-teal ring-4 ring-white`} />
                  <p className="text-xs font-bold tracking-widest text-ice-teal uppercase mb-1">{milestone.year}</p>
                  <p className="text-sm text-ice-text-secondary font-light leading-relaxed">{milestone.event}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ice-navy text-white py-20 premium-grain">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl lg:text-4xl font-extralight tracking-tight mb-6">
              Ready to learn more?
            </h2>
            <p className="text-white/60 font-light mb-10 max-w-xl mx-auto">
              Whether you're planning ahead or facing an urgent situation, our team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-3.5 bg-ice-teal text-white text-xs font-bold uppercase tracking-widest rounded hover:bg-ice-teal-light transition-colors"
              >
                Start a Conversation
              </Link>
              <Link
                to="/process"
                className="px-8 py-3.5 border border-white/20 text-white text-xs font-bold uppercase tracking-widest rounded hover:border-white/40 transition-colors"
              >
                View Our Process
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
