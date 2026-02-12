import { motion } from 'motion/react';
import { Check, Phone, Mail, ChevronRight } from 'lucide-react';
import { AnimatedSection } from '@/app/components/AnimatedSection';
import { AnimatedCounter } from '@/app/components/AnimatedCounter';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/app/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/app/components/ui/accordion';
import { InquiryDialog } from '@/app/components/InquiryDialog';
import { Link } from 'react-router-dom';
import { useDocumentMeta } from '@/app/hooks/useDocumentMeta';

const tiers = [
  {
    id: 'consultation',
    name: 'Consultation',
    price: 15000,
    tagline: 'Comprehensive logistics planning & clinical direction',
    description:
      'A full-scope consultation covering every aspect of standby logistics. Our team provides remote clinical direction, coordinates directly with your chosen cryopreservation organization (CI, Alcor, or others), manages family communication relay, reviews legal directives, and delivers ongoing status updates throughout the planning process. This service does not include mortuary or funeral home fees.',
    features: [
      'Complete logistics planning and assessment',
      'Remote clinical direction from experienced team',
      'Direct coordination with CI, Alcor, or your chosen CSO',
      'Family communication relay and liaison services',
      'Legal directive review and compliance check',
      'Ongoing status updates throughout the process',
      'Written protocol document for your records',
      'Emergency contact protocols established',
    ],
    timeline: 'Typically completed within 2-4 weeks',
    note: 'Does not include mortuary or funeral home fees',
  },
  {
    id: 'sst',
    name: 'SST Protocol',
    price: 50000,
    tagline: 'Full standby, stabilization & transport deployment',
    description:
      'Our core deployment service. When the time comes, a trained standby team deploys to your location with medical-grade equipment. We administer stabilization medications, provide mechanical cardiopulmonary support and ventilation, execute controlled cool-down procedures, and handle all packaging and transport logistics to your designated cryopreservation organization. This service does not include mortuary or funeral home fees.',
    features: [
      'Deployed standby team at your location',
      'Stabilization medications administered on-site',
      'Mechanical cardiopulmonary support (Lucas device)',
      'Mechanical ventilation support',
      'Controlled cool-down procedures',
      'Packaging for transport to CSO',
      'Full ground and air transport coordination',
      'Real-time case documentation',
      'Handoff coordination with receiving CSO',
    ],
    timeline: 'Team deploys within hours of activation',
    note: 'Does not include mortuary or funeral home fees',
  },
  {
    id: 'perfusion',
    name: 'SST + Perfusion',
    price: 80000,
    tagline: 'Complete protocol with field surgery & cryoprotectant perfusion',
    recommended: true,
    description:
      'Our most comprehensive service adds field surgical capabilities and cryoprotectant perfusion to the full SST protocol. This includes vascular access, perfusion circuit setup, and administration of cryoprotectant solution — all performed in the field. The patient is then prepared with specialized dry ice shipping and transported to the receiving CSO. Recommended when the patient is geographically distant from their CSO or when time-sensitivity is critical. This service does not include mortuary or funeral home fees.',
    features: [
      'Everything in SST Protocol',
      'Field surgery for vascular access',
      'Perfusion circuit setup and operation',
      'Cryoprotectant perfusion protocol',
      'Advanced temperature monitoring throughout',
      'Specialized dry ice shipping preparation',
      'Extended cooling management',
      'Comprehensive case documentation with full medical records',
      'Transport to CSO with specialized packaging',
    ],
    timeline: 'Full protocol typically 8-16 hours from deployment',
    note: 'Does not include mortuary or funeral home fees',
  },
];

const standbyDurationFees = [
  {
    label: 'Critical risk — first 96 hours',
    value: 'Included',
    detail: 'Included in your base service price',
  },
  {
    label: 'Critical risk — beyond 96 hours',
    value: '$2,750/day',
    detail: 'Each additional day beyond the initial window',
  },
  {
    label: 'Less than critical risk — first 72 hours',
    value: '$7,500',
    detail: 'Per deployment for the initial standby period',
  },
  {
    label: 'Extensions beyond initial period',
    value: '$2,750/day',
    detail: 'Available upon request for continued standby',
  },
];

const notIncludedItems = [
  {
    title: 'Mortuary & funeral home fees',
    description:
      'Local mortuary or funeral home services required for legal pronouncement and preparation. These fees typically range from $2,000 to $5,000 depending on location and services required.',
  },
  {
    title: 'CSO membership & long-term storage',
    description:
      'Membership and cryopreservation storage fees are paid directly to your chosen organization. Cryonics Institute plans start around $28,000. Alcor plans range from approximately $80,000 to $220,000 depending on the preservation option selected.',
  },
  {
    title: 'ICE provides SST services only',
    description:
      'ICE specializes exclusively in standby, stabilization, and transport. We do not provide long-term cryopreservation storage. Our role ends with the successful handoff to your designated CSO.',
  },
];

const faqs = [
  {
    question: 'What happens after I contact ICE?',
    answer:
      'Within 2 hours, a case coordinator will reach out to discuss your situation. We\'ll assess the urgency, begin developing a preliminary protocol, and outline next steps. For emergency cases, our 24/7 standby line connects you directly with a deployment coordinator.',
  },
  {
    question: 'How far in advance should I arrange standby?',
    answer:
      'The earlier, the better. Pre-arranged cases allow us to position equipment, coordinate with local medical providers, and develop detailed protocols specific to your location. However, we also handle urgent deployments — our team can mobilize within hours when needed.',
  },
  {
    question: 'Which organizations do you work with?',
    answer:
      'ICE works with all major cryopreservation organizations including Alcor Life Extension Foundation, Cryonics Institute, and international organizations. We coordinate the handoff to your chosen provider as part of our standard service.',
  },
  {
    question: 'What are the international surcharges?',
    answer:
      'Cases in Canada incur an additional $12,500 surcharge to cover cross-border logistics and regulatory compliance. All other international cases carry a $25,000+ surcharge, depending on location complexity, local regulations, and transport requirements.',
  },
  {
    question: 'How do standby duration fees work?',
    answer:
      'For patients at critical risk, the first 96 hours of standby are included in the base service price. If the standby extends beyond 96 hours, additional days are billed at $2,750 per day. For patients assessed as less than critical risk, the initial deployment covers the first 72 hours at a flat rate of $7,500 per deployment, with extensions available at $2,750 per day upon request.',
  },
  {
    question: 'Does ICE provide long-term cryopreservation storage?',
    answer:
      'No. ICE specializes exclusively in standby, stabilization, and transport (SST) services. We do not operate any long-term storage facilities. Once our protocol is complete, we coordinate the handoff to your chosen cryopreservation organization — such as Cryonics Institute or Alcor — who handle all long-term storage. You must arrange membership and storage contracts directly with your CSO.',
  },
  {
    question: 'What payment options are available?',
    answer:
      'We accept wire transfers, certified checks, and can work with life insurance assignment arrangements. Payment plans may be available for consultation and pre-arranged cases. Contact us to discuss your specific situation.',
  },
  {
    question: 'What if I\'m not sure which tier I need?',
    answer:
      'Start with a Consultation. Our team will assess your situation and recommend the appropriate service level. The Consultation fee can be applied toward a full SST or SST + Perfusion engagement if you proceed within 12 months.',
  },
  {
    question: 'Why is SST + Perfusion recommended?',
    answer:
      'Field perfusion with cryoprotectant significantly reduces ice crystal formation in tissues, which is one of the primary sources of structural damage during cryopreservation. When a patient is far from their CSO or when time between legal death and the start of cryoprotection is expected to be long, performing perfusion in the field — rather than waiting until the patient reaches the CSO — can meaningfully improve preservation quality.',
  },
];

export function ServicesPage() {
  useDocumentMeta({
    title: 'ICE Services & Pricing | SST & Perfusion Protocols from $15,000',
    description: 'ICE offers three tiers of cryopreservation standby services: Consultation ($15K), SST Protocol ($50K), and SST + Perfusion ($80K). Transparent pricing with 24/7 deployment.',
  });

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
            <p className="text-xs font-bold tracking-[0.25em] uppercase text-ice-teal-light mb-6">Services</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extralight tracking-tight leading-[1.1] mb-8">
              Clinical precision at<br />
              <span className="text-ice-teal-light">every critical moment</span>
            </h1>
            <p className="text-lg font-light text-white/70 max-w-2xl leading-relaxed">
              Three tiers of service designed to meet you wherever you are — from initial planning
              to full deployment with surgical perfusion capabilities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="h-px w-12 bg-ice-gold mb-8" />
              <blockquote className="text-xl lg:text-2xl font-extralight text-ice-text-primary leading-relaxed italic">
                "Time is tissue. Every minute matters, and our protocols are designed to
                minimize ischemic damage from the moment we arrive."
              </blockquote>
              <p className="text-sm text-ice-text-tertiary mt-4">— Aaron Drake, Managing Partner</p>
            </div>
            <div>
              <p className="text-ice-text-secondary font-light leading-relaxed">
                Our service tiers aren't just pricing levels — they represent different scopes
                of intervention. Each tier builds on the previous, adding capabilities while
                maintaining the same uncompromising clinical standards. Whether you choose
                a Consultation or the full SST + Perfusion protocol, you receive the same
                dedication to excellence.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Service Tiers - Tabs */}
      <section className="py-24 lg:py-32 bg-ice-warm-gray">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <p className="text-xs font-bold tracking-[0.25em] uppercase text-ice-teal mb-4">Pricing</p>
            <h2 className="text-3xl lg:text-4xl font-extralight text-ice-text-primary tracking-tight">
              Choose your level of care
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <Tabs defaultValue="perfusion" className="w-full">
              <TabsList className="w-full bg-white border border-ice-border-subtle rounded-lg p-1 h-auto flex">
                {tiers.map((tier) => (
                  <TabsTrigger
                    key={tier.id}
                    value={tier.id}
                    className="flex-1 py-3 text-sm font-medium data-[state=active]:bg-ice-navy data-[state=active]:text-white rounded-md transition-all"
                  >
                    {tier.name}
                    {tier.recommended && (
                      <span className="hidden sm:inline ml-2 text-[10px] font-bold text-ice-gold">COMPREHENSIVE</span>
                    )}
                  </TabsTrigger>
                ))}
              </TabsList>

              {tiers.map((tier) => (
                <TabsContent key={tier.id} value={tier.id} className="mt-8">
                  <div className="bg-white rounded-xl border border-ice-border-subtle p-8 lg:p-12">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-10">
                      <div>
                        <h3 className="text-2xl font-light text-ice-text-primary mb-2">{tier.name}</h3>
                        <p className="text-sm text-ice-text-tertiary">{tier.tagline}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-4xl font-extralight text-ice-text-primary">
                          $<AnimatedCounter target={tier.price} />
                        </div>
                        <p className="text-xs text-ice-text-tertiary mt-1">
                          {tier.timeline}
                        </p>
                      </div>
                    </div>

                    <p className="text-ice-text-secondary font-light leading-relaxed mb-10">
                      {tier.description}
                    </p>

                    <div className="border-t border-ice-border-subtle pt-8">
                      <h4 className="text-xs font-bold tracking-widest uppercase text-ice-text-tertiary mb-6">
                        What's included
                      </h4>
                      <div className="grid md:grid-cols-2 gap-3">
                        {tier.features.map((feature) => (
                          <div key={feature} className="flex items-start gap-3">
                            <div className="mt-0.5 p-0.5 rounded-full bg-ice-teal-muted text-ice-teal flex-shrink-0">
                              <Check size={12} strokeWidth={3} />
                            </div>
                            <span className="text-sm text-ice-text-secondary">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {tier.note && (
                      <div className="mt-8 px-4 py-3 bg-ice-warm-gray rounded-lg border border-ice-border-subtle">
                        <p className="text-xs text-ice-text-tertiary italic">{tier.note}</p>
                      </div>
                    )}

                    <div className="mt-10 flex flex-col sm:flex-row gap-4">
                      <InquiryDialog>
                        <button className="px-8 py-3.5 bg-ice-navy text-white text-xs font-bold uppercase tracking-widest rounded hover:bg-ice-teal transition-colors">
                          Inquire About {tier.name}
                        </button>
                      </InquiryDialog>
                      <a
                        href="tel:844-468-5279"
                        className="px-8 py-3.5 border border-ice-border-medium text-ice-text-secondary text-xs font-bold uppercase tracking-widest rounded hover:border-ice-navy hover:text-ice-text-primary transition-colors text-center"
                      >
                        Call 844-INTL-CRYO
                      </a>
                    </div>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </AnimatedSection>

          {/* Surcharges */}
          <AnimatedSection delay={0.3} className="mt-12">
            <div className="bg-white rounded-xl border border-ice-border-subtle p-8 flex flex-col sm:flex-row gap-6">
              <div className="flex-1">
                <h4 className="text-sm font-medium text-ice-text-primary mb-1">Canada</h4>
                <p className="text-2xl font-extralight text-ice-text-primary">+$12,500</p>
                <p className="text-xs text-ice-text-tertiary mt-1">Cross-border logistics & compliance</p>
              </div>
              <div className="hidden sm:block w-px bg-ice-border-subtle" />
              <div className="flex-1">
                <h4 className="text-sm font-medium text-ice-text-primary mb-1">International</h4>
                <p className="text-2xl font-extralight text-ice-text-primary">+$25,000<span className="text-base">+</span></p>
                <p className="text-xs text-ice-text-tertiary mt-1">Varies by location & regulatory complexity</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Standby Duration Fees */}
      <section className="py-24 lg:py-32">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <p className="text-xs font-bold tracking-[0.25em] uppercase text-ice-teal mb-4">Duration Pricing</p>
            <h2 className="text-3xl lg:text-4xl font-extralight text-ice-text-primary tracking-tight">
              Standby duration fees
            </h2>
            <p className="text-ice-text-tertiary font-light mt-4 max-w-2xl mx-auto">
              Standby duration varies depending on each patient's clinical timeline.
              Base service prices include an initial standby window, with transparent
              per-day pricing for extensions.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <div className="grid sm:grid-cols-2 gap-4">
              {standbyDurationFees.map((item) => (
                <div
                  key={item.label}
                  className="bg-white rounded-xl border border-ice-border-subtle p-6 lg:p-8"
                >
                  <h4 className="text-sm font-medium text-ice-text-primary mb-2">{item.label}</h4>
                  <p className="text-3xl font-extralight text-ice-text-primary mb-2">{item.value}</p>
                  <p className="text-xs text-ice-text-tertiary">{item.detail}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* What's Not Included */}
      <section className="py-24 lg:py-32 bg-ice-warm-gray">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <p className="text-xs font-bold tracking-[0.25em] uppercase text-ice-teal mb-4">Transparency</p>
            <h2 className="text-3xl lg:text-4xl font-extralight text-ice-text-primary tracking-tight">
              What's not included
            </h2>
            <p className="text-ice-text-tertiary font-light mt-4 max-w-2xl mx-auto">
              ICE is focused exclusively on standby, stabilization, and transport.
              The following costs are separate from ICE service fees and are paid
              directly to the respective providers.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <div className="grid md:grid-cols-3 gap-6">
              {notIncludedItems.map((item) => (
                <div
                  key={item.title}
                  className="bg-white rounded-xl border border-ice-border-subtle p-6 lg:p-8"
                >
                  <div className="h-px w-8 bg-ice-gold mb-6" />
                  <h4 className="text-sm font-medium text-ice-text-primary mb-3">{item.title}</h4>
                  <p className="text-sm text-ice-text-secondary font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 lg:py-32">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <p className="text-xs font-bold tracking-[0.25em] uppercase text-ice-teal mb-4">FAQ</p>
            <h2 className="text-3xl lg:text-4xl font-extralight text-ice-text-primary tracking-tight">
              Common questions
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <Accordion type="single" collapsible className="space-y-2">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="bg-white border border-ice-border-subtle rounded-lg px-6 data-[state=open]:border-ice-teal/30"
                >
                  <AccordionTrigger className="text-left text-sm font-medium text-ice-text-primary hover:no-underline py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-ice-text-secondary font-light leading-relaxed pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ice-navy text-white py-20 premium-grain">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl lg:text-4xl font-extralight tracking-tight mb-6">
              Ready to discuss your case?
            </h2>
            <p className="text-white/70 font-light mb-10 max-w-xl mx-auto">
              Every situation is unique. Let's talk about what ICE can do for you and your family.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:844-468-5279"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-ice-teal text-white text-xs font-bold uppercase tracking-widest rounded hover:bg-ice-teal-light transition-colors"
              >
                <Phone size={14} />
                844-INTL-CRYO
              </a>
              <a
                href="mailto:info@cryomedics.org"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-white/20 text-white text-xs font-bold uppercase tracking-widest rounded hover:border-white/40 transition-colors"
              >
                <Mail size={14} />
                info@cryomedics.org
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}

export default ServicesPage;
