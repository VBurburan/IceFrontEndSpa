import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Clock, ArrowRight } from 'lucide-react';
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

      {/* Intake Form — Primary */}
      <section className="py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-16 lg:gap-20 items-start">

            {/* Form Column */}
            <AnimatedSection className="lg:col-span-3 order-2 lg:order-1" id="inquiry-form">
              <div className="mb-8">
                <p className="text-xs font-bold tracking-[0.25em] uppercase text-ice-teal mb-4">Secure Intake Form</p>
                <h2 className="text-3xl lg:text-4xl font-extralight text-ice-text-primary tracking-tight mb-4">
                  Tell us about your case
                </h2>
                <p className="text-sm text-ice-text-secondary font-light leading-relaxed max-w-lg">
                  This form handles both urgent and non-urgent inquiries.
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

              <p className="text-xs text-ice-text-tertiary mt-4">
                Having trouble with the form?{' '}
                <a href="mailto:info@cryomedics.org" className="text-ice-teal hover:underline">
                  Email us directly
                </a>
              </p>
            </AnimatedSection>

            {/* Sidebar — Contact Info */}
            <AnimatedSection delay={0.15} className="lg:col-span-2 order-1 lg:order-2">
              <div className="lg:sticky lg:top-28 space-y-8">

                <div>
                  <p className="text-xs font-bold tracking-[0.25em] uppercase text-ice-teal mb-4">Other Ways to Reach Us</p>
                  <p className="text-sm text-ice-text-secondary font-light leading-relaxed">
                    Our team monitors both this form and direct lines around the clock.
                    Use whichever method is most convenient.
                  </p>
                </div>

                <a
                  href="tel:844-468-5279"
                  className="flex items-start gap-4 p-5 rounded-xl border border-ice-border-subtle hover:border-ice-teal/30 bg-white transition-all duration-300 group premium-card"
                >
                  <div className="w-11 h-11 rounded-lg bg-ice-teal-muted flex items-center justify-center shrink-0">
                    <Phone size={20} className="text-ice-teal" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-ice-text-primary group-hover:text-ice-teal transition-colors">
                      844-INTL-CRYO
                    </p>
                    <p className="text-xs text-ice-text-tertiary mt-0.5">Available 24/7/365</p>
                  </div>
                </a>

                <a
                  href="mailto:info@cryomedics.org"
                  className="flex items-start gap-4 p-5 rounded-xl border border-ice-border-subtle hover:border-ice-teal/30 bg-white transition-all duration-300 group premium-card"
                >
                  <div className="w-11 h-11 rounded-lg bg-ice-gold-light flex items-center justify-center shrink-0">
                    <Mail size={20} className="text-ice-gold" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-ice-text-primary group-hover:text-ice-teal transition-colors">
                      info@cryomedics.org
                    </p>
                    <p className="text-xs text-ice-text-tertiary mt-0.5">General inquiries &amp; partnerships</p>
                  </div>
                </a>

                <div className="p-5 rounded-xl bg-ice-warm-gray border border-ice-border-subtle">
                  <div className="flex items-start gap-4 mb-4">
                    <MapPin size={18} className="text-ice-text-tertiary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-ice-text-primary">Scottsdale, Arizona</p>
                      <p className="text-xs text-ice-text-tertiary mt-0.5">Strategic location for rapid nationwide deployment</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock size={18} className="text-ice-text-tertiary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-ice-text-primary">Emergency: 24/7/365</p>
                      <p className="text-xs text-ice-text-tertiary mt-0.5">General: Mon-Fri 8am-6pm MST</p>
                    </div>
                  </div>
                </div>

              </div>
            </AnimatedSection>

          </div>
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
    </div>
  );
}

export default ContactPage;
