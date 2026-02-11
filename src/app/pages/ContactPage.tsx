import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Clock, ArrowRight, AlertCircle } from 'lucide-react';
import { AnimatedSection } from '@/app/components/AnimatedSection';
import { InquiryForm } from '@/app/components/InquiryForm';
import { Skeleton } from '@/app/components/ui/skeleton';
import { useState } from 'react';

const responseSteps = [
  {
    step: '01',
    title: 'Acknowledgment',
    description: 'We acknowledge your inquiry within 2 hours during business hours, or immediately for emergency cases.',
  },
  {
    step: '02',
    title: 'Case Coordinator',
    description: 'A dedicated case coordinator contacts you to discuss your situation and assess your needs.',
  },
  {
    step: '03',
    title: 'Protocol Development',
    description: 'We develop a personalized protocol plan and share it with you and your cryopreservation provider.',
  },
];

export function ContactPage() {
  const [formLoaded, setFormLoaded] = useState(false);

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
            <p className="text-xs font-bold tracking-[0.25em] uppercase text-ice-teal-light mb-6">Contact</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extralight tracking-tight leading-[1.1] mb-8">
              Start the<br />
              <span className="text-ice-teal-light">conversation</span>
            </h1>
            <p className="text-lg font-light text-white/70 max-w-2xl leading-relaxed">
              Whether you're planning ahead or facing an urgent situation,
              we're here 24 hours a day, 7 days a week.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {/* Emergency */}
            <AnimatedSection>
              <div className="relative bg-white p-8 rounded-xl border-2 border-red-100 h-full premium-card">
                <div className="absolute top-4 right-4">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500" />
                  </span>
                </div>
                <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center mb-6">
                  <AlertCircle size={22} className="text-red-600" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-medium text-ice-text-primary mb-2">Emergency Standby</h3>
                <p className="text-sm text-ice-text-secondary font-light leading-relaxed mb-6">
                  For active cases requiring immediate deployment. Our 24/7 line connects you
                  directly with a deployment coordinator.
                </p>
                <a
                  href="tel:844-468-5279"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white text-xs font-bold uppercase tracking-widest rounded hover:bg-red-700 transition-colors w-full justify-center"
                >
                  <Phone size={14} />
                  844-INTL-CRYO
                </a>
              </div>
            </AnimatedSection>

            {/* General Inquiry */}
            <AnimatedSection delay={0.1}>
              <div className="bg-white p-8 rounded-xl border border-ice-border-subtle h-full premium-card">
                <div className="w-12 h-12 rounded-xl bg-ice-teal-muted flex items-center justify-center mb-6">
                  <Mail size={22} className="text-ice-teal" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-medium text-ice-text-primary mb-2">General Inquiry</h3>
                <p className="text-sm text-ice-text-secondary font-light leading-relaxed mb-6">
                  Planning ahead? Use our secure intake form below to share your situation.
                  A case coordinator will respond within 2 hours.
                </p>
                <a
                  href="#inquiry-form"
                  className="inline-flex items-center gap-2 text-sm font-medium text-ice-teal hover:text-ice-navy transition-colors"
                >
                  Go to intake form
                  <ArrowRight size={14} />
                </a>
              </div>
            </AnimatedSection>

            {/* Email Direct */}
            <AnimatedSection delay={0.2}>
              <div className="bg-white p-8 rounded-xl border border-ice-border-subtle h-full premium-card">
                <div className="w-12 h-12 rounded-xl bg-ice-gold-light flex items-center justify-center mb-6">
                  <Mail size={22} className="text-ice-gold" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-medium text-ice-text-primary mb-2">Email Direct</h3>
                <p className="text-sm text-ice-text-secondary font-light leading-relaxed mb-6">
                  For non-urgent questions, partnership inquiries, or general information about
                  our services.
                </p>
                <a
                  href="mailto:info@cryomedics.org"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-ice-border-medium text-ice-text-secondary text-xs font-bold uppercase tracking-widest rounded hover:border-ice-navy hover:text-ice-text-primary transition-colors w-full justify-center"
                >
                  <Mail size={14} />
                  info@cryomedics.org
                </a>
              </div>
            </AnimatedSection>
          </div>

          {/* Intake Form */}
          <AnimatedSection id="inquiry-form">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-10">
                <p className="text-xs font-bold tracking-[0.25em] uppercase text-ice-teal mb-4">Secure Form</p>
                <h2 className="text-3xl lg:text-4xl font-extralight text-ice-text-primary tracking-tight mb-4">
                  Secure intake form
                </h2>
                <p className="text-sm text-ice-text-tertiary">
                  All information is kept strictly confidential and encrypted in transit.
                </p>
              </div>

              <div className="bg-white rounded-xl border border-ice-border-subtle overflow-hidden shadow-sm">
                <div className="bg-gradient-to-r from-ice-teal/5 to-ice-gold/5 p-1">
                  <div className="bg-white rounded-lg">
                    {!formLoaded && (
                      <div className="p-8 space-y-4">
                        <Skeleton className="h-10 w-full" />
                        <Skeleton className="h-10 w-3/4" />
                        <Skeleton className="h-24 w-full" />
                        <Skeleton className="h-10 w-1/2" />
                      </div>
                    )}
                    <div onLoad={() => setFormLoaded(true)}>
                      <InquiryForm />
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-center text-xs text-ice-text-tertiary mt-4">
                Having trouble with the form?{' '}
                <a href="mailto:info@cryomedics.org" className="text-ice-teal hover:underline">
                  Email us directly
                </a>
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* What Happens Next */}
      <section className="py-24 lg:py-32 bg-ice-warm-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <p className="text-xs font-bold tracking-[0.25em] uppercase text-ice-teal mb-4">Next Steps</p>
            <h2 className="text-3xl lg:text-4xl font-extralight text-ice-text-primary tracking-tight">
              What happens next
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {responseSteps.map((item, i) => (
              <AnimatedSection key={item.step} delay={i * 0.12}>
                <div className="text-center">
                  <div className="text-4xl font-extralight text-ice-teal mb-4">{item.step}</div>
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

      {/* Office Info */}
      <section className="py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <AnimatedSection>
              <p className="text-xs font-bold tracking-[0.25em] uppercase text-ice-teal mb-4">Headquarters</p>
              <h3 className="text-2xl font-extralight text-ice-text-primary mb-6">Scottsdale, Arizona</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin size={18} className="text-ice-text-tertiary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-ice-text-secondary font-light">
                      Scottsdale, AZ, United States
                    </p>
                    <p className="text-xs text-ice-text-tertiary mt-1">
                      Strategic location for rapid nationwide deployment
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock size={18} className="text-ice-text-tertiary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-ice-text-secondary font-light">
                      Emergency line: 24/7/365
                    </p>
                    <p className="text-xs text-ice-text-tertiary mt-1">
                      General inquiries: Mon-Fri 8am-6pm MST
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <p className="text-xs font-bold tracking-[0.25em] uppercase text-ice-teal mb-4">Direct Lines</p>
              <h3 className="text-2xl font-extralight text-ice-text-primary mb-6">Reach us anytime</h3>
              <div className="space-y-4">
                <a
                  href="tel:844-468-5279"
                  className="flex items-center gap-4 p-4 rounded-lg border border-ice-border-subtle hover:border-ice-teal/30 transition-colors group"
                >
                  <Phone size={18} className="text-ice-teal" />
                  <div>
                    <p className="text-sm font-medium text-ice-text-primary group-hover:text-ice-teal transition-colors">
                      844-INTL-CRYO
                    </p>
                    <p className="text-xs text-ice-text-tertiary">24/7 Emergency & General</p>
                  </div>
                </a>
                <a
                  href="mailto:info@cryomedics.org"
                  className="flex items-center gap-4 p-4 rounded-lg border border-ice-border-subtle hover:border-ice-teal/30 transition-colors group"
                >
                  <Mail size={18} className="text-ice-teal" />
                  <div>
                    <p className="text-sm font-medium text-ice-text-primary group-hover:text-ice-teal transition-colors">
                      info@cryomedics.org
                    </p>
                    <p className="text-xs text-ice-text-tertiary">General Inquiries</p>
                  </div>
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactPage;
