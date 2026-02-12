import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { Phone, UserCheck, Radio, HeartPulse, Thermometer, Truck, HandshakeIcon, Clock, Globe, Award } from 'lucide-react';
import { AnimatedSection } from '@/app/components/AnimatedSection';
import { InquiryDialog } from '@/app/components/InquiryDialog';
import { Link } from 'react-router-dom';
import { useDocumentMeta } from '@/app/hooks/useDocumentMeta';

const steps = [
  {
    icon: Phone,
    title: 'Initial Contact & Planning',
    description:
      'The process begins when a client reaches out to ICE — via our secure intake form, by phone, or by email. Our case coordinator reviews the full scope of the situation: the patient\'s geographic location, current health status, the client\'s chosen cryopreservation service organization (CSO), and the logistical requirements that the case will demand. We assess whether the case is domestic or international, identify the nearest qualified funeral directors and mortuary partners, and determine which service tier is appropriate. Once the plan is agreed upon, a service agreement is signed and the case enters our active management pipeline. For members with pre-arranged contracts, much of this groundwork is already in place — allowing us to move directly to coordination.',
  },
  {
    icon: UserCheck,
    title: 'Pre-Deployment Preparation',
    description:
      'With the case plan established, ICE begins coordinating with every party in the chain. We contact local funeral directors to arrange mortuary access and ensure they understand cryopreservation requirements — many have never handled such a case, and our guidance is critical. For international cases, we engage customs brokers, consulates, and regulatory authorities to pre-clear documentation and shipping permits. We coordinate directly with the receiving CSO — whether that is Cryonics Institute, Alcor, Southern Cryonics, Yinfeng, or another organization — to confirm their intake requirements and scheduling. Equipment and medications are staged: portable ice baths, mechanical cardiopulmonary support devices, medication kits, surgical instruments (for SST+SP cases), and transport containers. Legal documents including death certificates, transit permits, and export authorizations are reviewed and prepared in advance. This preparation phase is what separates a controlled, high-quality case from a chaotic one.',
  },
  {
    icon: Radio,
    title: 'Standby Deployment',
    description:
      'For patients who are critically ill or actively declining, the ICE Standby, Stabilization & Transport (SST) team deploys to the patient\'s location days or even weeks in advance. The team travels with a full complement of medical-grade equipment and positions themselves within rapid reach of the patient — often in the same city, sometimes in the same facility. Being present at the bedside at the moment of legal death pronouncement is the single most important factor in preservation quality. Every minute that passes between cardiac arrest and the start of stabilization is a minute of warm ischemia — irreversible biological degradation that no downstream intervention can undo. Pre-positioning eliminates transit delays entirely, giving the patient the best possible outcome. For cases where death is imminent, the standby team maintains a continuous watch, rotating personnel around the clock to ensure readiness at all times.',
  },
  {
    icon: HeartPulse,
    title: 'Stabilization',
    description:
      'The moment legal death is pronounced, the ICE team initiates a rapid, rehearsed stabilization protocol. Mechanical cardiopulmonary support begins immediately — a Lucas chest compression device restores blood circulation while a mechanical ventilator re-establishes oxygenation. This is not resuscitation; the goal is to maintain blood flow and oxygen delivery to the brain and vital organs while neuroprotective medications take effect. A carefully sequenced medication protocol is administered: anticoagulants to prevent blood clotting, vasopressors to maintain blood pressure, free-radical scavengers to reduce reperfusion injury, pH buffers to counteract acidosis, and neuroprotective agents to slow cellular degradation. The refrain that defines this phase — and indeed the entire ICE philosophy — is "time is tissue." Every minute of warm ischemia degrades the ultrastructure of the brain. Our stabilization protocols are designed to compress this interval to the absolute minimum, delivering ICU-level intervention in the field within minutes of pronouncement.',
  },
  {
    icon: Thermometer,
    title: 'Cooling',
    description:
      'With circulation and medication delivery established, controlled cooling begins. The patient is placed in a portable ice bath and core body temperature is systematically lowered using a computer-monitored protocol. The objective is to reduce metabolic rate as rapidly as safely possible — for every 10 degrees Celsius of cooling, metabolic demand roughly halves. Temperature descent is tracked continuously via rectal or esophageal probes, and the rate of cooling is managed to avoid thermal shock. For clients who have selected the SST + Surgical Perfusion (SST+SP) tier, this phase includes additional critical interventions: field surgery is performed to establish vascular access through surgical cannulation, a perfusion circuit is connected, and cryoprotectant solution is perfused through the patient\'s vasculature. Cryoprotectant replaces water in the tissues and dramatically reduces ice crystal formation during subsequent deep cooling — a process that is essential for preserving cellular structure at cryogenic temperatures. This surgical perfusion is typically performed at a local mortuary or hospital facility that ICE has pre-arranged.',
  },
  {
    icon: Truck,
    title: 'Transport',
    description:
      'Once the patient is stabilized and cooled, they are prepared for transport to the receiving cryopreservation organization. The patient is securely packaged in specialized insulated shipping containers, surrounded by dry ice to maintain sub-zero temperatures throughout transit. For domestic US cases, this may involve ground transport directly to the CSO facility. For international cases — which represent a significant portion of ICE\'s caseload — the logistics are considerably more complex. ICE coordinates with airlines for cargo booking, manages customs clearance documentation in both the origin and destination countries, arranges ground transport on each end, and ensures compliance with international regulations governing the transport of human remains. Temperature is monitored and dry ice is replenished at each transit point. Our team has navigated this process in over 40 countries on six continents, and our relationships with freight handlers, customs brokers, and mortuary partners worldwide are a core part of what makes ICE effective. Every case includes a detailed chain-of-custody log documenting temperature, timing, and handling throughout the journey.',
  },
  {
    icon: HandshakeIcon,
    title: 'Handoff to CSO',
    description:
      'The final phase is the documented transfer of the patient to their chosen cryopreservation service organization for long-term care. ICE delivers patients to Cryonics Institute (CI), Alcor Life Extension Foundation, Southern Cryonics, Yinfeng Life Science (China), or any other organization the client has selected. At the point of handoff, ICE provides the receiving CSO with a complete case file: stabilization protocols executed, medications administered with dosages and timing, temperature logs from pronouncement through delivery, chain-of-custody documentation, and any relevant medical records. This documentation allows the CSO to make informed decisions about their subsequent cryopreservation procedures. ICE\'s responsibility ends at the point of delivery — we do not provide long-term cryopreservation storage. We are the bridge between legal death and the organization that will care for the patient for the long term. Following the handoff, ICE prepares a comprehensive case report for the client\'s family or designated contacts, and conducts an internal after-action review to identify any process improvements for future cases.',
  },
];

const differentiators = [
  {
    icon: Globe,
    title: 'More International Cases Than Any Other Provider',
    description:
      'The majority of cryopreservation standby teams are US-centric. ICE has performed more international cryopreservation cases than any other organization in history — across Europe, Asia, South America, Africa, and Oceania. We have navigated the regulatory, cultural, logistical, and bureaucratic complexities of transporting human remains across borders in over 40 countries. This experience cannot be replicated by reading a manual. It comes from doing the work, case after case, in countries with vastly different legal frameworks and infrastructure.',
  },
  {
    icon: Award,
    title: 'ICU-Level Field Protocols',
    description:
      'Many standby services provide basic stabilization — chest compressions and ice. ICE operates at a fundamentally different level. Our field protocols include mechanical cardiopulmonary support via Lucas devices, mechanical ventilation, a multi-drug neuroprotective medication regimen, surgical cannulation, and cryoprotectant perfusion. These are ICU-level interventions executed in the field, in funeral homes, in hospitals, and in private residences around the world. The quality of the first sixty minutes after legal death defines the quality of the entire preservation.',
  },
  {
    icon: Clock,
    title: 'We Are the Bridge — Not the Destination',
    description:
      'ICE does not provide long-term cryopreservation storage. We are not a cryonics organization. We are the specialized logistics and medical team that bridges the gap between legal death and the client\'s chosen CSO. This singular focus means we are not distracted by the operational demands of running a storage facility, conducting research, or managing membership programs. Every resource, every dollar of investment, and every hour of training is directed at one thing: executing the highest-quality standby, stabilization, and transport possible. We work with every major CSO in the world as a neutral, independent service provider.',
  },
];

export function ProcessPage() {
  useDocumentMeta({
    title: 'How Cryopreservation SST Works | ICE Step-by-Step Process',
    description: 'From first call to final handoff: ICE\'s 7-step standby, stabilization, and transport process. Every minute matters — learn how we minimize ischemic damage.',
  });
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
              Every step is executed with clinical precision — because when it comes to
              biological preservation, minutes matter.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Time Is Tissue Philosophy */}
      <section className="py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <div className="h-px w-16 bg-ice-gold mx-auto mb-12" />
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extralight text-ice-text-primary leading-relaxed tracking-tight mb-6">
                Time is tissue
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            <AnimatedSection delay={0.1}>
              <p className="text-ice-text-secondary font-light leading-relaxed mb-6">
                In cryopreservation, biological degradation begins the moment the heart stops beating.
                Without intervention, warm ischemia — the period during which tissues are deprived of
                oxygenated blood at body temperature — causes irreversible damage to cellular structures,
                particularly in the brain. Neurons begin to depolarize. Calcium floods into cells.
                Enzymatic breakdown accelerates. The ultrastructure that encodes memory, personality,
                and identity degrades with every passing minute.
              </p>
              <p className="text-ice-text-secondary font-light leading-relaxed">
                This is not an abstract concern. It is the central challenge of cryopreservation, and it
                is the reason ICE exists. The quality of a cryopreservation case is determined overwhelmingly
                by what happens in the first sixty minutes after legal death — and often in the first ten.
                A patient who receives immediate mechanical cardiopulmonary support, rapid medication
                administration, and controlled cooling will have a fundamentally different preservation
                outcome than a patient who waits hours or days for intervention.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className="text-ice-text-secondary font-light leading-relaxed mb-6">
                ICE's entire operational model is engineered around this reality. We pre-position teams at
                bedsides before death occurs. We stage equipment and medications in advance. We coordinate
                with funeral directors, hospitals, and CSOs before the case begins — not after. We rehearse
                protocols so that execution is automatic, not improvised. Every decision in our process
                is evaluated against one question: does this reduce the ischemic interval?
              </p>
              <p className="text-ice-text-secondary font-light leading-relaxed mb-6">
                The difference between a well-managed case and a poorly managed one is not abstract.
                It is the difference between minutes and hours of warm ischemia. It is the difference
                between preserved neural architecture and degraded tissue. For clients who believe that
                future medicine may one day be able to restore cryopreserved patients, minimizing this
                damage is not optional — it is the entire point.
              </p>
              <div className="border-l-2 border-ice-teal pl-6 mt-8">
                <p className="text-ice-text-primary font-medium italic leading-relaxed">
                  "The best cryopreservation case is the one where we were already there
                  when it happened. The worst is the one where no one called until it was too late."
                </p>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={0.3}>
            <div className="h-px w-16 bg-ice-gold mx-auto mt-16" />
          </AnimatedSection>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 lg:py-32 bg-ice-warm-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-8">
            <p className="text-xs font-bold tracking-[0.25em] uppercase text-ice-teal mb-4">Step by Step</p>
            <h2 className="text-3xl lg:text-4xl font-extralight text-ice-text-primary tracking-tight">
              The ICE Protocol
            </h2>
          </AnimatedSection>

          <AnimatedSection className="text-center mb-16">
            <p className="text-sm text-ice-text-secondary font-light leading-relaxed max-w-2xl mx-auto">
              A seven-stage process refined over more than a decade and 150+ cases worldwide.
              Each phase is documented, each protocol is rehearsed, and each handoff is verified.
            </p>
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
                  className="relative pb-20 last:pb-0"
                >
                  <div className={`pl-16 lg:pl-0 ${isRight ? 'lg:pl-[calc(50%+3rem)]' : 'lg:pr-[calc(50%+3rem)] lg:text-right'}`}>
                    {/* Dot */}
                    <div className="absolute left-4 lg:left-1/2 lg:-translate-x-1/2 top-0 w-5 h-5 rounded-full bg-white border-2 border-ice-teal flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-ice-teal" />
                    </div>

                    {/* Step number */}
                    <p className="text-[10px] font-bold tracking-widest text-ice-teal uppercase mb-2">
                      Step {String(i + 1).padStart(2, '0')}
                    </p>

                    {/* Icon + Title */}
                    <div className={`flex items-center gap-3 mb-4 ${isRight ? '' : 'lg:justify-end'}`}>
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
          <AnimatedSection className="text-center mb-6">
            <p className="text-xs font-bold tracking-[0.25em] uppercase text-ice-teal mb-4">Why ICE</p>
            <h2 className="text-3xl lg:text-4xl font-extralight text-ice-text-primary tracking-tight">
              What sets us apart
            </h2>
          </AnimatedSection>

          <AnimatedSection className="text-center mb-16">
            <p className="text-sm text-ice-text-secondary font-light leading-relaxed max-w-2xl mx-auto">
              There are a handful of organizations in the world that provide standby and stabilization
              services. Here is why families and cryopreservation organizations trust ICE.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {differentiators.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.12}>
                <div className="premium-card bg-white p-8 rounded-xl border border-ice-border-subtle h-full flex flex-col">
                  <div className="w-14 h-14 rounded-xl bg-ice-teal-muted flex items-center justify-center mb-6">
                    <item.icon size={24} className="text-ice-teal" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg font-medium text-ice-text-primary mb-4">{item.title}</h3>
                  <p className="text-sm text-ice-text-secondary font-light leading-relaxed flex-1">
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
            <p className="text-white/60 font-light mb-6 max-w-xl mx-auto">
              Whether you are planning ahead or facing an urgent situation,
              our experienced team is ready to help. We are available 24 hours
              a day, 365 days a year.
            </p>
            <div className="flex items-center justify-center gap-3 mb-10">
              <a
                href="tel:844-468-5279"
                className="inline-flex items-center gap-2 text-ice-teal-light hover:text-white transition-colors text-sm font-medium"
              >
                <Phone size={16} strokeWidth={1.5} />
                844-INTL-CRYO
              </a>
              <span className="text-white/20">|</span>
              <span className="text-white/40 text-sm font-light">Available 24/7/365</span>
            </div>
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
