import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Plane, FileCheck, ThermometerSnowflake, Globe, Clock, ShieldCheck, FileText, Users, MapPin, AlertTriangle } from 'lucide-react';
import { useDocumentMeta } from '@/app/hooks/useDocumentMeta';

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

const airCargoCards = [
  {
    icon: <Plane size={24} />,
    iconBg: 'bg-ice-teal/10 text-ice-teal',
    title: 'Commercial Flights',
    dotColor: 'bg-ice-teal',
    description: 'The most common transport method for cryopreserved patients. ICE coordinates directly with airline cargo departments to ensure proper handling from tarmac to tarmac.',
    items: [
      'Coordination with airline cargo departments for human remains acceptance',
      'Booking flights with appropriate cargo hold temperatures',
      'Managing layover timing to avoid thaw risk during connections',
      'Carrier-specific documentation and hazmat declarations',
      'Pre-clearance with destination airport cargo handling',
    ],
  },
  {
    icon: <Plane size={24} className="rotate-45" />,
    iconBg: 'bg-ice-warm-gray text-ice-text-secondary',
    title: 'Charter Aircraft',
    dotColor: 'bg-ice-text-tertiary',
    description: 'When commercial routing introduces unacceptable risk or when the patient is in a remote location without reliable cargo service.',
    items: [
      'For time-critical cases or remote locations without cargo service',
      'Direct routing eliminates connection risks and layover exposure',
      'Full coordination of aircraft selection, permits, and ground handling',
      'Custom flight plans accounting for refueling and border requirements',
      'Priced by quote based on distance, aircraft type, and routing',
    ],
  },
  {
    icon: <Clock size={24} />,
    iconBg: 'bg-ice-teal/10 text-ice-teal',
    title: 'Ground Transport',
    dotColor: 'bg-ice-teal',
    description: 'Used for domestic transfers and airport-to-facility legs. ICE coordinates with licensed funeral directors and transport companies.',
    items: [
      'Coordination with funeral directors for legal custody and transit',
      'Temperature-controlled vehicles when required for extended drives',
      'Chain of custody documentation maintained throughout',
      'Airport pickup and delivery coordination with cargo facilities',
      'Dry ice replenishment scheduled for long-distance ground legs',
    ],
  },
];

const documentationItems = [
  { label: 'Death Certificates', detail: 'Certified copies in required quantities, expedited when possible' },
  { label: 'Transit Permits', detail: 'State or provincial authorization to move human remains across jurisdictions' },
  { label: 'Consular Mortuary Certificates', detail: 'Required by many countries for international repatriation of remains' },
  { label: 'Export / Import Permits', detail: 'Country-specific permits authorizing cross-border movement of remains' },
  { label: 'Apostille & Translations', detail: 'Hague Convention apostille stamps and certified translations of documents' },
  { label: 'Airline Cargo Declarations', detail: 'Hazmat declarations for dry ice (UN1845) and human remains manifests' },
  { label: 'Customs Documentation', detail: 'Pre-clearance filings, broker coordination, and HS code classification' },
];

const regionalCompliance = [
  {
    name: 'United States',
    icon: <MapPin size={20} className="text-ice-teal" />,
    items: [
      'State-by-state variation in death certificate issuance timing (hours to days)',
      'Transit permits required for cross-state transport of human remains',
      'TSA and FAA air cargo regulations for human remains and hazardous materials',
      'OSHA considerations for personnel handling dry ice and remains',
      'PHMSA regulations governing dry ice quantity and packaging for air transport',
      'Funeral director licensing requirements vary by state',
    ],
  },
  {
    name: 'Canada',
    icon: <MapPin size={20} className="text-ice-teal" />,
    items: [
      'Provincial regulations governing funeral services and transport of remains',
      'CBSA (Canada Border Services Agency) clearance procedures for remains',
      'Transport Canada hazardous goods regulations for dry ice shipments',
      'Provincial coroner or medical examiner release requirements',
      'Bilateral agreements with U.S. simplify cross-border cases',
      'Quebec requires French-language documentation for transit permits',
    ],
  },
  {
    name: 'International',
    icon: <Globe size={20} className="text-ice-teal" />,
    items: [
      'Country-specific import requirements for human remains (zinc-lined coffins, sealed containers)',
      'Embalming mandates that may conflict with cryonics protocols — ICE navigates alternatives',
      'Serology requirements: HIV, Hepatitis B/C, and other infectious disease testing',
      'Cultural and religious considerations affecting timing and handling',
      'Consular involvement requirements and embassy business-hour constraints',
      'IATA Dangerous Goods Regulations for international dry ice shipments',
    ],
  },
];

const coordinationPoints = [
  { label: 'Treating Physicians', detail: 'Death certificate completion, cause of death documentation, medical records release' },
  { label: 'Local Funeral Directors', detail: 'Legal custody of remains, embalming alternatives, preparation for transport' },
  { label: 'Consulates & Embassies', detail: 'Mortuary certificates, legalization of documents, country-specific requirements' },
  { label: 'Airline Cargo Departments', detail: 'Booking, hazmat acceptance, cargo hold conditions, layover management' },
  { label: 'Customs Brokers', detail: 'Import/export clearance, HS code classification, pre-clearance filings' },
  { label: 'Receiving CSOs', detail: 'Handoff logistics, arrival timing, facility readiness confirmation' },
];

export function LogisticsPage() {
  useDocumentMeta({
    title: 'International Cryopreservation Transport | 40+ Countries | ICE Logistics',
    description: 'ICE manages the complexity of international cryopreservation transport: permits, customs, cold chain, air cargo across 40+ countries on every inhabited continent.',
  });

  return (
    <div className="pt-24 bg-ice-warm-white min-h-screen">

      {/* Hero */}
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
              Navigating permits, packaging, air cargo, and international regulations — so families and cryopreservation organizations don't have to.
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
                  Every international cryopreservation case involves permits, documentation, serology requirements, customs regulations, airline cargo rules, and cross-border coordination — often across multiple jurisdictions simultaneously. Each country has unique requirements for the import of human remains, and many of those requirements conflict with standard cryonics protocols.
                </p>
                <p className="text-ice-text-secondary leading-relaxed mb-6">
                  Families are grieving. Cryopreservation organizations are focused on patient care. Neither should have to navigate international freight logistics, consular bureaucracy, or hazardous materials regulations under time pressure.
                </p>
                <p className="text-ice-text-secondary leading-relaxed border-l-4 border-ice-teal/30 pl-4 font-medium">
                  ICE handles this complexity end-to-end — from death certificate to final handoff — so families and CSOs don't have to.
                </p>
              </div>
              <div className="relative rounded-xl overflow-hidden shadow-xl h-[400px] group">
                <img
                  src="https://imgur.com/yhxRp7A.png"
                  alt="ICE Logistics Coordination"
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-ice-navy/10 mix-blend-multiply" />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ICE's Network */}
      <section className="py-20 bg-ice-navy text-white premium-grain relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-sm font-bold text-ice-teal-light uppercase tracking-widest mb-4">ICE's Network</h2>
              <h3 className="text-3xl md:text-4xl font-extralight mb-8">
                40+ Countries. One Point of Contact.
              </h3>
              <p className="text-white/50 leading-relaxed text-lg mb-12">
                Over years of international casework, ICE has built a network of trusted partners in more than 40 countries — funeral directors who understand cryonics, consulates we have established relationships with, customs brokers experienced in human remains shipments, and air cargo providers who know our packaging requirements.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                { icon: <Globe size={28} />, stat: '40+', label: 'Countries Covered' },
                { icon: <Users size={28} />, stat: '150+', label: 'Cases Completed' },
                { icon: <Plane size={28} />, stat: '100+', label: 'International Transports' },
                { icon: <FileCheck size={28} />, stat: '1000+', label: 'Permits Processed' },
              ].map((item) => (
                <div key={item.label} className="text-center p-6">
                  <div className="text-ice-teal-light mb-3 flex justify-center">{item.icon}</div>
                  <div className="text-3xl font-bold text-white mb-1">{item.stat}</div>
                  <div className="text-xs uppercase tracking-widest text-white/40">{item.label}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Air Cargo Logistics */}
      <section className="py-20 bg-ice-warm-gray border-y border-ice-border-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-sm font-bold text-ice-teal uppercase tracking-widest mb-4">Transport Methods</h2>
            <h3 className="text-3xl font-extralight text-ice-text-primary mb-4">Air Cargo Logistics</h3>
            <p className="text-ice-text-secondary mb-12 max-w-3xl leading-relaxed">
              Moving a cryopreserved patient by air requires coordination between cargo departments, ground handlers, customs authorities, and receiving facilities. ICE manages every leg.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {airCargoCards.map((card, i) => (
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
                  <h3 className="text-lg font-bold text-ice-text-primary mb-2">{card.title}</h3>
                  <p className="text-sm text-ice-text-tertiary mb-5 leading-relaxed">{card.description}</p>
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
                <h2 className="text-sm font-bold text-ice-teal uppercase tracking-widest mb-4">Paperwork</h2>
                <h3 className="text-3xl font-extralight text-ice-text-primary mb-6">Permits & Documentation</h3>
                <p className="text-ice-text-secondary mb-4 leading-relaxed">
                  Every jurisdiction has different requirements for transporting human remains. International cases multiply this complexity — documents must satisfy the origin country, transit countries, and the destination country, often in multiple languages with apostille certification.
                </p>
                <p className="text-ice-text-secondary mb-8 leading-relaxed">
                  ICE maintains relationships with consulates, funeral directors, customs brokers, and regulatory agencies to expedite paperwork that would otherwise take families weeks to navigate on their own.
                </p>
                <div className="space-y-3">
                  {documentationItems.map((item) => (
                    <div key={item.label} className="flex items-start gap-3 p-3 bg-ice-warm-gray rounded border border-ice-border-subtle hover:border-ice-teal/40 hover:bg-ice-teal/5 transition-colors duration-200">
                      <FileCheck size={18} className="text-ice-teal mt-0.5 shrink-0" />
                      <div>
                        <span className="text-sm font-medium text-ice-text-primary">{item.label}</span>
                        <p className="text-xs text-ice-text-tertiary mt-0.5">{item.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Packaging & Cold Chain */}
              <div className="bg-ice-navy text-white p-8 lg:p-10 rounded-xl">
                <h2 className="text-sm font-bold text-ice-teal-light uppercase tracking-widest mb-4">Cold Chain Integrity</h2>
                <h3 className="text-xl font-extralight mb-3">Packaging & Cold Chain</h3>
                <p className="text-sm text-white/40 leading-relaxed mb-8">
                  Maintaining temperature during transport is non-negotiable. ICE manages the entire cold chain — from initial dry ice packing through final delivery to the receiving facility.
                </p>

                <div className="space-y-8">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                        <ThermometerSnowflake className="text-ice-teal-light" size={20} />
                      </div>
                      <h4 className="font-bold uppercase text-xs tracking-widest text-white/60">Dry Ice (UN1845)</h4>
                    </div>
                    <p className="text-sm text-white/40 leading-relaxed mb-2">
                      Dry ice is classified as a Class 9 miscellaneous hazardous material under UN number 1845. ICE handles all regulatory requirements:
                    </p>
                    <ul className="text-sm text-white/50 space-y-1.5 pl-4">
                      <li className="flex gap-2"><span className="text-ice-teal-light">--</span>IATA Dangerous Goods Regulations for air transport</li>
                      <li className="flex gap-2"><span className="text-ice-teal-light">--</span>PHMSA regulations for U.S. domestic shipments</li>
                      <li className="flex gap-2"><span className="text-ice-teal-light">--</span>Carrier-specific quantity limits (typically 200kg max)</li>
                      <li className="flex gap-2"><span className="text-ice-teal-light">--</span>Proper labeling, marking, and shipper declarations</li>
                    </ul>
                  </div>

                  <div className="border-t border-white/10 pt-8">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                        <ShieldCheck className="text-ice-teal-light" size={20} />
                      </div>
                      <h4 className="font-bold uppercase text-xs tracking-widest text-white/60">Specialized Containers</h4>
                    </div>
                    <p className="text-sm text-white/40 leading-relaxed">
                      Medical-grade shipping containers designed for human remains transport. Multi-layer insulation rated for extended transit times, sealed against sublimation gas venting, and sized to meet airline cargo door and ULD constraints. Containers are pre-positioned in key regions to minimize preparation time.
                    </p>
                  </div>

                  <div className="border-t border-white/10 pt-8">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                        <FileText className="text-ice-teal-light" size={20} />
                      </div>
                      <h4 className="font-bold uppercase text-xs tracking-widest text-white/60">Temperature Monitoring</h4>
                    </div>
                    <p className="text-sm text-white/40 leading-relaxed">
                      Continuous temperature monitoring during transport with time-stamped logging. Documentation of cold chain integrity is maintained for the complete journey — from initial packing through every transfer point to final delivery at the receiving CSO. This record becomes part of the permanent case file.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Regional Compliance */}
      <section className="py-20 bg-ice-warm-gray border-t border-ice-border-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-sm font-bold text-ice-teal uppercase tracking-widest mb-4">Jurisdiction Knowledge</h2>
              <h3 className="text-3xl font-extralight text-ice-text-primary">Regional Compliance</h3>
              <p className="text-ice-text-secondary mt-4 max-w-2xl mx-auto leading-relaxed">
                Regulations governing the transport of human remains vary dramatically by jurisdiction. ICE maintains current knowledge of requirements in every region we operate.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {regionalCompliance.map((region, i) => (
                <AnimatedSection key={region.name}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-white p-8 rounded-lg shadow-sm border border-ice-border-subtle h-full hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="flex items-center gap-3 mb-6">
                      {region.icon}
                      <h3 className="text-lg font-bold text-ice-text-primary">{region.name}</h3>
                    </div>
                    <ul className="space-y-3 text-sm text-ice-text-secondary">
                      {region.items.map((item) => (
                        <li key={item} className="flex gap-2">
                          <div className="w-1.5 h-1.5 bg-ice-teal rounded-full mt-2 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Coordination Points */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="bg-ice-navy rounded-2xl overflow-hidden shadow-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-2">

                <div className="p-10 lg:p-12 text-white">
                  <h2 className="text-sm font-bold text-ice-teal-light uppercase tracking-widest mb-4">Single Point of Contact</h2>
                  <h3 className="text-2xl font-extralight mb-4">Coordination Points</h3>
                  <p className="text-white/40 mb-8 leading-relaxed">
                    A typical international cryopreservation case requires ICE to coordinate with six or more entities across multiple time zones. We serve as the single point of contact — managing every relationship so the family has one number to call.
                  </p>
                  <div className="space-y-4">
                    {coordinationPoints.map((item) => (
                      <div key={item.label} className="flex items-start gap-3">
                        <Globe size={16} className="text-ice-teal-light mt-1 shrink-0" />
                        <div>
                          <span className="text-sm font-medium text-white/80">{item.label}</span>
                          <p className="text-xs text-white/35 mt-0.5">{item.detail}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-ice-teal/10 p-10 lg:p-12 border-t lg:border-t-0 lg:border-l border-white/10 text-white">
                  <div className="flex items-center gap-3 mb-6">
                    <AlertTriangle size={20} className="text-ice-teal-light" />
                    <h3 className="text-2xl font-extralight">"Time is Tissue"</h3>
                  </div>
                  <p className="text-white/40 mb-6 leading-relaxed">
                    Every hour between legal death and cryoprotection matters. ICE plans around common bottlenecks to minimize total elapsed time:
                  </p>
                  <ul className="space-y-4 text-sm text-white/60">
                    <li className="flex gap-3">
                      <Clock size={16} className="text-ice-teal-light mt-0.5 shrink-0" />
                      <span><strong className="text-white/80">Death certificate issuance</strong> — hours to days depending on jurisdiction, attending physician availability, and cause of death complexity</span>
                    </li>
                    <li className="flex gap-3">
                      <Clock size={16} className="text-ice-teal-light mt-0.5 shrink-0" />
                      <span><strong className="text-white/80">Permit processing</strong> — weekend and holiday closures can add 24-72 hours; ICE pre-stages paperwork when possible</span>
                    </li>
                    <li className="flex gap-3">
                      <Clock size={16} className="text-ice-teal-light mt-0.5 shrink-0" />
                      <span><strong className="text-white/80">Flight availability</strong> — cargo capacity is limited and not all flights accept human remains or hazmat</span>
                    </li>
                    <li className="flex gap-3">
                      <Clock size={16} className="text-ice-teal-light mt-0.5 shrink-0" />
                      <span><strong className="text-white/80">Customs clearance</strong> — inspection delays, missing documents, or after-hours closures at border points</span>
                    </li>
                    <li className="flex gap-3">
                      <Clock size={16} className="text-ice-teal-light mt-0.5 shrink-0" />
                      <span><strong className="text-white/80">Lab turnaround for serologies</strong> — HIV, Hepatitis, and other required tests can take 24-48 hours</span>
                    </li>
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
            <p className="text-lg text-ice-text-secondary mb-4">
              Questions about a specific country or route? Contact ICE early — logistics planning is included in all service tiers.
            </p>
            <p className="text-sm text-ice-text-tertiary mb-10">
              The earlier we are involved, the more time we have to pre-stage permits, confirm airline cargo acceptance, and coordinate with local partners at the destination.
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
