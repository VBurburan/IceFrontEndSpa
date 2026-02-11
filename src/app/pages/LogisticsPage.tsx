import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Plane, FileCheck, ThermometerSnowflake, Globe, Clock, ShieldCheck, FileText } from 'lucide-react';

function AnimatedSection({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function LogisticsPage() {
  return (
    <div className="pt-24 bg-ice-warm-white min-h-screen">

      {/* Header */}
      <section className="bg-ice-navy py-20 border-b border-white/10 premium-grain relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-extralight text-white mb-6 tracking-tight">
              Transport & <span className="font-semibold text-ice-teal-light">Logistics</span>
            </h1>
            <p className="text-xl text-white/60 font-light leading-relaxed">
              Navigating permits, packaging, air cargo, and international regulations — so you don't have to.
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Challenge + Image */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-sm font-bold text-ice-teal uppercase tracking-widest mb-4">The Challenge</h2>
                <h3 className="text-3xl font-extralight text-ice-text-primary mb-6">Complexity, Managed.</h3>
                <p className="text-ice-text-secondary leading-relaxed mb-6">
                  Transporting a cryopreserved patient isn't like shipping anything else. It involves complex human remains regulations, hazardous materials classification, temperature-critical packaging, multi-agency permits, and tight timing windows — all while coordinating across time zones, languages, and legal systems.
                </p>
                <p className="text-ice-text-secondary leading-relaxed border-l-4 border-ice-teal/30 pl-4 font-medium">
                  ICE handles this complexity so families and CSOs don't have to.
                </p>
              </div>
              <div className="relative rounded-xl overflow-hidden shadow-xl h-[400px] group">
                <img
                  src="https://imgur.com/yhxRp7A.png"
                  alt="ICE Logistics Coordination"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-ice-navy/10 mix-blend-multiply" />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Air Cargo Logistics */}
      <section className="py-20 bg-ice-warm-gray border-y border-ice-border-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-3xl font-extralight text-ice-text-primary mb-12">Air Cargo Logistics</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Plane size={24} />,
                iconBg: 'bg-ice-teal/10 text-ice-teal',
                title: 'Commercial Flights',
                dotColor: 'bg-ice-teal',
                items: [
                  'Coordination with airline cargo departments',
                  'Booking flights with appropriate cargo hold temps',
                  'Managing layover timing to avoid thaw risk',
                  'Handling carrier-specific documentation',
                ],
              },
              {
                icon: <Plane size={24} className="rotate-45" />,
                iconBg: 'bg-ice-warm-gray text-ice-text-secondary',
                title: 'Charter Aircraft',
                dotColor: 'bg-ice-text-tertiary',
                items: [
                  'For time-critical cases or remote locations',
                  'Direct routing eliminates connection risks',
                  'Full coordination of aircraft selection & permits',
                  'Priced by quote based on distance/type',
                ],
              },
              {
                icon: <Clock size={24} />,
                iconBg: 'bg-ice-teal/10 text-ice-teal',
                title: 'Ground Transport',
                dotColor: 'bg-ice-teal',
                items: [
                  'Coordination with funeral directors',
                  'Temperature-controlled vehicles when required',
                  'Chain of custody documentation throughout',
                ],
              },
            ].map((card, i) => (
              <AnimatedSection key={card.title}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white p-8 rounded-lg shadow-sm border border-ice-border-subtle h-full hover:shadow-md transition-shadow duration-300"
                >
                  <div className={`w-12 h-12 ${card.iconBg} rounded-lg flex items-center justify-center mb-6`}>
                    {card.icon}
                  </div>
                  <h3 className="text-lg font-bold text-ice-text-primary mb-4">{card.title}</h3>
                  <ul className="space-y-3 text-sm text-ice-text-secondary">
                    {card.items.map((item) => (
                      <li key={item} className="flex gap-2">
                        <div className={`w-1.5 h-1.5 ${card.dotColor} rounded-full mt-2 shrink-0`} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Permits & Documentation */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <h2 className="text-3xl font-extralight text-ice-text-primary mb-8">Permits & Documentation</h2>
                <p className="text-ice-text-secondary mb-8 leading-relaxed">
                  Every jurisdiction has different requirements. ICE maintains relationships with consulates, funeral directors, customs brokers, and regulatory agencies to expedite paperwork that would otherwise take families weeks.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "Death Certificate", "Transit Permits",
                    "Consular Mortuary Certificate", "Export/Import Permits",
                    "Apostille & Translations", "Airline Cargo Declarations",
                    "Customs Documentation"
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3 p-3 bg-ice-warm-gray rounded border border-ice-border-subtle hover:border-ice-teal/40 hover:bg-ice-teal/5 transition-colors duration-200">
                      <FileCheck size={18} className="text-ice-teal" />
                      <span className="text-sm font-medium text-ice-text-primary">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-ice-navy text-white p-8 rounded-xl">
                <h3 className="text-xl font-extralight mb-6">Packaging & Cold Chain</h3>

                <div className="space-y-8">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <ThermometerSnowflake className="text-ice-teal-light" size={20} />
                      <h4 className="font-bold uppercase text-xs tracking-widest text-white/60">Dry Ice (UN1845)</h4>
                    </div>
                    <p className="text-sm text-white/40 leading-relaxed">
                      Classified as hazardous material. We handle IATA/PHMSA regulations, quantity limits, and labeling.
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <ShieldCheck className="text-ice-teal-light" size={20} />
                      <h4 className="font-bold uppercase text-xs tracking-widest text-white/60">Specialized Containers</h4>
                    </div>
                    <p className="text-sm text-white/40 leading-relaxed">
                      Medical-grade shipping containers designed for human remains with insulation rated for extended transit.
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <FileText className="text-ice-teal-light" size={20} />
                      <h4 className="font-bold uppercase text-xs tracking-widest text-white/60">Temperature Monitoring</h4>
                    </div>
                    <p className="text-sm text-white/40 leading-relaxed">
                      Continuous monitoring during transport with documentation of cold chain integrity.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Regulations & Compliance */}
      <section className="py-20 bg-ice-warm-gray border-t border-ice-border-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-3xl font-extralight text-ice-text-primary mb-12 text-center">Regulations & Compliance</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
              {[
                { name: 'United States', desc: 'State-by-state variation in death certificate timing, transit permits, TSA/FAA air cargo regulations, and OSHA considerations.' },
                { name: 'Canada', desc: 'Provincial regulations, CBSA clearance procedures, and Transport Canada hazardous goods regulations.' },
                { name: 'International', desc: 'Country-specific import reqs, embalming alternatives (when laws conflict with cryonics), serology requirements, and cultural considerations.' },
              ].map((reg) => (
                <div key={reg.name} className="p-6 border-l-2 border-ice-border-subtle hover:border-ice-teal transition-colors">
                  <h3 className="text-lg font-bold text-ice-text-primary mb-3">{reg.name}</h3>
                  <p className="text-sm text-ice-text-secondary leading-relaxed">{reg.desc}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Coordination Points & Timeline */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="bg-ice-navy rounded-2xl overflow-hidden shadow-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-2">

                <div className="p-10 lg:p-12 text-white">
                  <h3 className="text-2xl font-extralight mb-6">Coordination Points</h3>
                  <p className="text-white/40 mb-8">
                    A typical international case requires ICE to coordinate with multiple entities. We serve as the single point of contact.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-sm text-white/60">
                    {['Treating physicians', 'Local funeral directors', 'Consulates & Embassies', 'Airline cargo depts', 'Customs brokers', 'Receiving CSOs'].map((item) => (
                      <div key={item} className="flex items-center gap-2"><Globe size={16} className="text-ice-teal-light"/> {item}</div>
                    ))}
                  </div>
                </div>

                <div className="bg-ice-teal/10 p-10 lg:p-12 border-t lg:border-t-0 lg:border-l border-white/10 text-white">
                  <h3 className="text-2xl font-extralight mb-6">"Time is Tissue"</h3>
                  <p className="text-white/40 mb-6">
                    Every hour matters. Common bottlenecks we plan around:
                  </p>
                  <ul className="space-y-4 text-sm text-white/60 list-disc pl-5 marker:text-ice-teal-light">
                    <li>Death certificate issuance (hours to days)</li>
                    <li>Permit processing (weekends/holidays delays)</li>
                    <li>Flight availability (cargo capacity)</li>
                    <li>Customs clearance vs inspection delays</li>
                    <li>Lab turnaround for required serologies</li>
                  </ul>
                </div>

              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-ice-warm-white text-center">
        <AnimatedSection>
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-extralight text-ice-text-primary mb-6">Planning an international case?</h2>
            <p className="text-lg text-ice-text-secondary mb-10">
              Questions about a specific country or route? Contact ICE early — logistics planning is included in all service tiers.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <a href="tel:844-468-5279" className="px-8 py-4 bg-ice-navy text-white font-bold uppercase tracking-widest rounded hover:bg-ice-teal transition-colors text-sm">
                Urgent: 844-INTL-CRYO
              </a>
              <a href="mailto:info@cryomedics.org" className="px-8 py-4 border border-ice-border-subtle text-ice-text-primary font-bold uppercase tracking-widest rounded hover:border-ice-navy hover:text-ice-navy transition-colors text-sm">
                Email Us
              </a>
            </div>
          </div>
        </AnimatedSection>
      </section>

    </div>
  );
}

export default LogisticsPage;
