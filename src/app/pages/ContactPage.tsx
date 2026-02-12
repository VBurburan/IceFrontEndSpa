import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Clock, ArrowRight, AlertTriangle } from 'lucide-react';
import { AnimatedSection } from '@/app/components/AnimatedSection';
import { InquiryForm } from '@/app/components/InquiryForm';
import { Skeleton } from '@/app/components/ui/skeleton';
import { useState } from 'react';
import { useDocumentMeta } from '@/app/hooks/useDocumentMeta';

const responseSteps = [
  {
    step: '01',
    title: 'Acknowledgment',
    description:
      'We acknowledge your inquiry within minutes for urgent cases, or within 24 hours for general inquiries.',
  },
  {
    step: '02',
    title: 'Case Coordinator',
    description:
      'A dedicated case coordinator contacts you to discuss your situation and assess your specific needs.',
  },
  {
    step: '03',
    title: 'Protocol Development',
    description:
      'We develop a personalized protocol plan and coordinate directly with you and your cryopreservation provider.',
  },
];

export function ContactPage() {
  useDocumentMeta({
    title: 'Contact ICE | 24/7 Standby Line | 844-INTL-CRYO',
    description: 'Reach ICE 24/7 at 844-INTL-CRYO (844-468-5279) for urgent standby activation, or use our secure intake form for general inquiries. Scottsdale, AZ headquarters.',
  });

  const [formLoaded, setFormLoaded] = useState(false);

  return (
    <div>
      {/* ── Hero ── */}
      <section className="relative bg-ice-navy text-white pt-40 pb-24 premium-grain overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-xs font-bold tracking-[0.25em] uppercase text-ice-teal-light mb-6">
              Contact
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extralight tracking-tight leading-[1.1] mb-8">
              We're here when
              <br />
              <span className="text-ice-teal-light">you need us</span>
            </h1>
            <p className="text-lg font-light text-white/70 max-w-2xl leading-relaxed">
              Whether you're facing an urgent situation right now or planning ahead for the future,
              our team is available 24 hours a day, 7 days a week.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Urgent / Active Case Card ── */}
      <section className="py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <a
              href="tel:844-468-5279"
              className="block rounded-2xl border-2 border-amber-400/60 bg-gradient-to-br from-amber-50 to-orange-50 p-8 sm:p-10 shadow-sm hover:shadow-md transition-all duration-300 group"
            >
              <div className="flex flex-col sm:flex-row items-start gap-6">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-amber-100 flex items-center justify-center shrink-0">
                  <AlertTriangle size={28} className="text-amber-600" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <p className="text-xs font-bold tracking-[0.25em] uppercase text-amber-700/80 mb-2">
                    Urgent / Active Case
                  </p>
                  <h2 className="text-2xl sm:text-3xl font-light text-ice-text-primary tracking-tight mb-3">
                    Call{' '}
                    <span className="font-semibold text-amber-700 group-hover:text-amber-800 transition-colors">
                      844-INTL-CRYO
                    </span>
                  </h2>
                  <p className="text-sm text-ice-text-secondary font-light leading-relaxed mb-4 max-w-xl">
                    If a patient has passed or time is critical, call us immediately.
                    Our emergency line is answered 24/7/365 by trained coordinators
                    who will guide you through every step.
                  </p>
                  <div className="flex flex-wrap items-center gap-4">
                    <span className="inline-flex items-center gap-2 text-base font-semibold text-amber-700">
                      <Phone size={18} />
                      (844) 468-5279
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-amber-600/80 bg-amber-100 rounded-full px-3 py-1">
                      <Clock size={12} />
                      Answered immediately, 24/7
                    </span>
                  </div>
                </div>

                {/* Arrow */}
                <div className="hidden sm:flex items-center justify-center w-10 h-10 rounded-full bg-amber-100 group-hover:bg-amber-200 transition-colors shrink-0 self-center">
                  <ArrowRight size={18} className="text-amber-700" />
                </div>
              </div>
            </a>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Inquiry Form — Planning Ahead / General ── */}
      <section className="pb-24 lg:pb-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-16 lg:gap-20 items-start">
            {/* Form Column */}
            <AnimatedSection className="lg:col-span-3 order-2 lg:order-1" id="inquiry-form">
              <div className="mb-8">
                <p className="text-xs font-bold tracking-[0.25em] uppercase text-ice-teal mb-4">
                  Planning Ahead or General Inquiry
                </p>
                <h2 className="text-3xl lg:text-4xl font-extralight text-ice-text-primary tracking-tight mb-4">
                  Tell us about your case
                </h2>
                <p className="text-sm text-ice-text-secondary font-light leading-relaxed max-w-lg">
                  Use this form to arrange future services, ask questions, or request information.
                  This form also serves as a backup for emergencies if the phone line is unavailable.
                  All submissions are encrypted and strictly confidential.
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
                    <InquiryForm onLoad={() => setFormLoaded(true)} />
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between mt-4">
                <p className="text-xs text-ice-text-tertiary">
                  <Clock size={12} className="inline mr-1 -mt-0.5" />
                  Form inquiries are responded to within 24 hours
                </p>
                <p className="text-xs text-ice-text-tertiary">
                  Having trouble?{' '}
                  <a
                    href="mailto:info@cryomedics.org"
                    className="text-ice-teal hover:underline"
                  >
                    Email us directly
                  </a>
                </p>
              </div>
            </AnimatedSection>

            {/* Sidebar — Contact Details */}
            <AnimatedSection delay={0.15} className="lg:col-span-2 order-1 lg:order-2">
              <div className="lg:sticky lg:top-28 space-y-8">
                <div>
                  <p className="text-xs font-bold tracking-[0.25em] uppercase text-ice-teal mb-4">
                    Contact Details
                  </p>
                  <p className="text-sm text-ice-text-secondary font-light leading-relaxed">
                    Our team monitors every channel around the clock.
                    Reach out however is most convenient for you.
                  </p>
                </div>

                {/* Phone */}
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
                    <p className="text-xs text-ice-text-secondary mt-0.5">(844) 468-5279</p>
                    <p className="text-xs text-ice-text-tertiary mt-0.5">Available 24/7/365</p>
                  </div>
                </a>

                {/* Email */}
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
                    <p className="text-xs text-ice-text-tertiary mt-0.5">
                      General inquiries &amp; partnerships
                    </p>
                  </div>
                </a>

                {/* Location & Hours */}
                <div className="p-5 rounded-xl bg-ice-warm-gray border border-ice-border-subtle">
                  <div className="flex items-start gap-4 mb-4">
                    <MapPin
                      size={18}
                      className="text-ice-text-tertiary mt-0.5 flex-shrink-0"
                    />
                    <div>
                      <p className="text-sm font-medium text-ice-text-primary">
                        Scottsdale, Arizona
                      </p>
                      <p className="text-xs text-ice-text-tertiary mt-0.5">
                        Headquarters — strategic location for rapid nationwide deployment
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock
                      size={18}
                      className="text-ice-text-tertiary mt-0.5 flex-shrink-0"
                    />
                    <div>
                      <p className="text-sm font-medium text-ice-text-primary">
                        Urgent calls: 24/7/365
                      </p>
                      <p className="text-xs text-ice-text-tertiary mt-0.5">
                        Form inquiries: within 24 hours
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── What Happens Next ── */}
      <section className="py-24 lg:py-32 bg-ice-warm-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <p className="text-xs font-bold tracking-[0.25em] uppercase text-ice-teal mb-4">
              Next Steps
            </p>
            <h2 className="text-3xl lg:text-4xl font-extralight text-ice-text-primary tracking-tight">
              What happens next
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {responseSteps.map((item, i) => (
              <AnimatedSection key={item.step} delay={i * 0.12}>
                <div className="text-center">
                  <div className="text-4xl font-extralight text-ice-teal mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-medium text-ice-text-primary mb-3">
                    {item.title}
                  </h3>
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
