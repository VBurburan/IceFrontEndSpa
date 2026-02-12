import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Stethoscope, Globe, Award, Shield, Clock, Users, HeartPulse, Thermometer } from 'lucide-react';
import { AnimatedCounter } from '@/app/components/AnimatedCounter';
import { AnimatedSection } from '@/app/components/AnimatedSection';
import { Link } from 'react-router-dom';
import { useDocumentMeta } from '@/app/hooks/useDocumentMeta';

const credentials = [
  { icon: Stethoscope, label: '10+ Years as Medical Response Director at Alcor Life Extension Foundation' },
  { icon: Globe, label: 'More International Cryopreservation Cases Than Any Other Specialist in History' },
  { icon: Award, label: 'Pioneered the Industry Standard for Field Stabilization Protocols' },
  { icon: Shield, label: 'HIPAA-Aligned Practices with Full Chain-of-Custody Documentation' },
];

const teamMembers = [
  {
    name: 'Aaron Drake',
    role: 'Managing Partner',
    location: 'Scottsdale, AZ',
    image: 'https://i.imgur.com/VXbNScc.jpg',
    bio: 'Former Medical Response Director at Alcor Life Extension Foundation, where he spent over a decade managing and personally overseeing more international cryopreservation cases than any other specialist in the field\'s history. Aaron\'s protocols defined the industry standard for field stabilization, mechanical cardiopulmonary support, and international patient transport. After leaving Alcor, he founded ICE to build a dedicated team focused exclusively on delivering ICU-level standby, stabilization, and transport services worldwide.',
    featured: true,
  },
  {
    name: 'Eric Vogt',
    role: 'Team Member',
    location: 'Arizona',
    bio: 'Based in Arizona, Eric works closely with Aaron on case coordination, logistics planning, and field deployments across domestic and international operations.',
    featured: false,
  },
];

const coverageRegions = [
  { state: 'California', detail: 'Paramedic team coverage across major metro areas' },
  { state: 'Texas', detail: 'Paramedic team coverage with rapid deployment capability' },
  { state: 'Florida', detail: 'Paramedic team coverage for the Southeast corridor' },
  { state: 'North Carolina', detail: 'Paramedic team coverage for the East Coast' },
  { state: 'Alaska', detail: 'Paramedic team coverage for remote deployment scenarios' },
  { state: 'Hawaii', detail: 'Paramedic team coverage for Pacific region operations' },
];

const clinicalCapabilities = [
  {
    icon: HeartPulse,
    title: 'ICU-Level Field Protocols',
    description: 'Our procedures mirror intensive care unit standards, adapted for field deployment anywhere in the world. Every team member is trained in advanced cardiac life support and emergency stabilization techniques. These are not simplified approximations — they are the same clinical standards you would expect inside a hospital, executed in the field.',
  },
  {
    icon: Stethoscope,
    title: 'Mechanical Cardiopulmonary Support',
    description: 'We deploy the Lucas mechanical chest compression device to deliver consistent, high-quality cardiopulmonary support immediately after legal death. Mechanical compression ensures uninterrupted blood circulation to maintain cellular oxygenation and facilitate medication distribution during the critical early minutes of the stabilization protocol.',
  },
  {
    icon: Shield,
    title: 'Neuroprotective Medication Protocols',
    description: 'Our medication protocol includes a carefully sequenced array of neuroprotective agents administered immediately after legal death. These medications are designed to slow metabolic deterioration, reduce ischemic injury, prevent blood clotting, and protect neural structures during the transition from biological function to cryogenic temperatures.',
  },
  {
    icon: Thermometer,
    title: 'Computer-Controlled Cooling Systems',
    description: 'Temperature management is the backbone of effective cryopreservation logistics. Our proprietary cooling systems use computer-controlled feedback loops to achieve target temperatures with precision and consistency. Controlled cooling minimizes thermal shock and ice crystal formation, preserving cellular ultrastructure during the descent to transport temperature.',
  },
  {
    icon: Award,
    title: 'Field Surgical Capabilities',
    description: 'At the SST + Perfusion tier, our team performs field surgery to establish vascular access, set up perfusion circuits, and administer cryoprotectant solution on-site. This capability is critical for patients located far from their chosen cryopreservation organization, as it allows perfusion to begin in the field rather than waiting hours or days for transport to a facility.',
  },
  {
    icon: Clock,
    title: 'Rapid Global Response',
    description: 'Our distributed team model — with paramedics positioned across six U.S. states and international coordination capabilities — means we can have trained personnel on the ground within hours, not days. Pre-positioned equipment caches and established relationships with local medical providers and mortuaries enable fast deployment anywhere.',
  },
];

const csoPartners = [
  {
    name: 'Cryonics Institute',
    abbreviation: 'CI',
    location: 'Clinton Township, Michigan, USA',
    description: 'One of the original cryopreservation organizations, offering whole-body cryopreservation and long-term storage at liquid nitrogen temperature.',
  },
  {
    name: 'Alcor Life Extension Foundation',
    abbreviation: 'Alcor',
    location: 'Scottsdale, Arizona, USA',
    description: 'The world\'s largest cryopreservation organization, offering both whole-body and neuro cryopreservation with long-term maintenance.',
  },
  {
    name: 'Southern Cryonics',
    abbreviation: 'Southern Cryonics',
    location: 'Holbrook, New South Wales, Australia',
    description: 'Australia\'s cryopreservation facility, providing long-term storage for patients in the Southern Hemisphere and Asia-Pacific region.',
  },
  {
    name: 'Yinfeng Life Science Research Institute',
    abbreviation: 'Yinfeng',
    location: 'Jinan, Shandong, China',
    description: 'China\'s cryopreservation and cryobiology research facility, offering cryopreservation services and advancing low-temperature medicine research.',
  },
];

const milestones = [
  { year: '2005', event: 'Aaron Drake begins his career at Alcor Life Extension Foundation, quickly advancing to manage medical response operations and international cryopreservation case logistics.' },
  { year: '2008', event: 'Drake completes his 25th international cryopreservation case at Alcor, establishing himself as the most experienced field operative in the industry.' },
  { year: '2012', event: 'After personally overseeing cases across four continents, Drake begins developing the standardized field stabilization protocols that would later define ICE\'s clinical approach.' },
  { year: '2015', event: 'Aaron Drake departs Alcor after more than a decade of service and founds International Cryomedicine Experts (ICE), headquartered in the Phoenix/Scottsdale metropolitan area.' },
  { year: '2016', event: 'ICE completes its first international deployment as an independent organization — a successful multi-country case requiring coordination across three jurisdictions.' },
  { year: '2018', event: 'ICE surpasses 50 collective cryopreservation cases, establishing the most experienced independent SST team operating outside of any single cryopreservation organization.' },
  { year: '2020', event: 'Global coverage expanded to 40+ countries with a pre-positioned equipment network and paramedic teams established across California, Texas, Florida, North Carolina, Alaska, and Hawaii.' },
  { year: '2022', event: 'ICE introduces advanced field perfusion capabilities as an add-on service tier (SST + Perfusion), enabling cryoprotectant perfusion to be performed on-site anywhere in the world.' },
  { year: '2024', event: 'The ICE team collectively surpasses 150 successful cryopreservation cases — more international cases managed by a single team than any other organization in the history of cryonics.' },
];

export function AboutPage() {
  useDocumentMeta({
    title: 'About ICE | Aaron Drake & Team | 150+ Cryopreservations',
    description: 'Meet the ICE team led by Aaron Drake, former Alcor Medical Response Director. 150+ cryopreservations, 40+ countries, 24/7 availability.',
  });

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
              We deploy anywhere, anytime — because every minute after legal death
              determines the quality of preservation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission / Philosophy */}
      <section className="py-24 lg:py-32">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-20">
              <div className="h-px w-16 bg-ice-gold mx-auto mb-12" />
              <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-extralight text-ice-text-primary leading-relaxed tracking-tight">
                "We bridge the gap between legal death and future medicine
                with uncompromising clinical standards."
              </blockquote>
              <div className="h-px w-16 bg-ice-gold mx-auto mt-12 mb-6" />
              <p className="text-sm text-ice-text-tertiary font-medium tracking-wide uppercase">
                The ICE Mission
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-16">
            <AnimatedSection variant="fade-left" delay={0.1}>
              <div className="h-px w-12 bg-ice-gold mb-8" />
              <h3 className="text-xl font-medium text-ice-text-primary mb-4">Time Is Tissue</h3>
              <p className="text-ice-text-secondary font-light leading-relaxed mb-6">
                This is the foundational principle behind everything we do. From the moment
                of legal death, cellular degradation begins. Ischemic damage accumulates with
                every passing minute. Our protocols are engineered to intervene as rapidly as
                possible — initiating mechanical cardiopulmonary support, administering
                neuroprotective medications, and beginning controlled cooling within minutes,
                not hours.
              </p>
              <p className="text-ice-text-secondary font-light leading-relaxed">
                The difference between a well-executed case and a delayed one is not abstract.
                It is measured in the structural integrity of neurons, the viability of tissue,
                and the preservation of the biological information that defines a person. Every
                minute matters, and our team treats every minute as if it does.
              </p>
            </AnimatedSection>

            <AnimatedSection variant="fade-right" delay={0.2}>
              <div className="h-px w-12 bg-ice-gold mb-8" />
              <h3 className="text-xl font-medium text-ice-text-primary mb-4">SST Services Only</h3>
              <p className="text-ice-text-secondary font-light leading-relaxed mb-6">
                ICE provides standby, stabilization, and transport (SST) services exclusively.
                We do not operate any long-term cryopreservation storage facilities. Our role
                begins when a patient enters the critical window and ends with the successful
                handoff to the patient's chosen Cryopreservation Service Organization (CSO).
              </p>
              <p className="text-ice-text-secondary font-light leading-relaxed mb-6">
                Patients choose their own CSO for long-term storage. We coordinate directly
                with all major organizations worldwide:
              </p>
              <div className="space-y-2">
                {csoPartners.map((cso) => (
                  <div
                    key={cso.abbreviation}
                    className="flex items-start gap-3 px-4 py-3 bg-ice-warm-white rounded-lg border border-ice-border-subtle"
                  >
                    <Globe size={16} className="text-ice-teal flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-sm font-medium text-ice-text-primary">{cso.name}</span>
                      <span className="text-xs text-ice-text-tertiary ml-2">{cso.location}</span>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Stats Band */}
      <section ref={statsRef} className="bg-ice-navy text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {[
              { value: 150, suffix: '+', label: 'Cryopreservations' },
              { value: 40, suffix: '+', label: 'Countries Served' },
              { value: 24, suffix: '/7', label: 'Global Availability' },
              { value: 4, suffix: '', label: 'CSO Partners' },
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
                  ) : stat.value === 4 ? (
                    <span><AnimatedCounter target={stat.value} />{' '}<span className="text-lg font-light text-white/50">CI, Alcor, SC, Yinfeng</span></span>
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

      {/* Leadership — Aaron Drake */}
      <section className="py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <p className="text-xs font-bold tracking-[0.25em] uppercase text-ice-teal mb-4">Leadership</p>
            <h2 className="text-3xl lg:text-4xl font-extralight text-ice-text-primary tracking-tight">
              The most experienced hand in cryomedicine
            </h2>
          </AnimatedSection>

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
              <h3 className="text-2xl font-light text-ice-text-primary tracking-tight mb-6">
                Aaron Drake
              </h3>
              <p className="text-xs font-bold tracking-[0.25em] uppercase text-ice-teal mb-6">Managing Partner</p>

              <p className="text-ice-text-secondary font-light leading-relaxed mb-6">
                Aaron Drake served as Medical Response Director at the Alcor Life Extension
                Foundation for more than ten years. During his tenure, he personally managed
                and oversaw more international cryopreservation cases than any other specialist
                in the history of cryonics. His work at Alcor spanned four continents,
                requiring coordination across complex international regulatory environments,
                language barriers, unfamiliar medical systems, and extreme logistical constraints.
              </p>
              <p className="text-ice-text-secondary font-light leading-relaxed mb-6">
                The field stabilization protocols Aaron developed at Alcor became the de facto
                industry standard. His innovations in mechanical cardiopulmonary support timing,
                neuroprotective medication sequencing, and controlled-cooling logistics
                transformed what had been an ad hoc process into a reproducible clinical protocol
                with documented outcomes.
              </p>
              <p className="text-ice-text-secondary font-light leading-relaxed mb-8">
                After departing Alcor, Aaron founded ICE to build an organization focused
                exclusively on SST services — unattached to any single CSO, free to serve
                patients regardless of which organization they chose for long-term storage.
                Under his leadership, the ICE team has collectively completed over 150
                cryopreservations across 40+ countries.
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

      {/* Team */}
      <section className="py-24 lg:py-32 bg-ice-warm-gray">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <p className="text-xs font-bold tracking-[0.25em] uppercase text-ice-teal mb-4">Team</p>
            <h2 className="text-3xl lg:text-4xl font-extralight text-ice-text-primary tracking-tight">
              Distributed expertise, unified standards
            </h2>
            <p className="text-ice-text-tertiary font-light mt-4 max-w-2xl mx-auto">
              Our team model places trained professionals in strategic locations across the
              United States, enabling rapid deployment to any domestic or international case.
            </p>
          </AnimatedSection>

          {/* Eric Vogt */}
          <AnimatedSection delay={0.1} className="mb-12">
            <div className="bg-white p-8 rounded-xl border border-ice-border-subtle premium-card">
              <div className="flex flex-col sm:flex-row gap-6 items-start">
                <div className="w-16 h-16 rounded-xl bg-ice-teal-muted flex items-center justify-center flex-shrink-0">
                  <Users size={28} className="text-ice-teal" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-ice-text-primary mb-1">Eric Vogt</h3>
                  <p className="text-xs font-bold tracking-[0.2em] uppercase text-ice-teal mb-3">Team Member — Arizona</p>
                  <p className="text-sm text-ice-text-secondary font-light leading-relaxed">
                    Based in Arizona alongside Aaron Drake, Eric Vogt plays a key role in case
                    coordination, logistics planning, and field deployments. His proximity to ICE
                    headquarters in the Phoenix/Scottsdale area enables rapid mobilization for
                    both domestic and international operations. Eric works closely with the
                    paramedic teams positioned across the country to ensure consistent protocol
                    execution on every case.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Paramedic Coverage */}
          <AnimatedSection delay={0.2}>
            <div className="bg-white p-8 rounded-xl border border-ice-border-subtle premium-card mb-4">
              <h3 className="text-lg font-medium text-ice-text-primary mb-2">Paramedic Teams</h3>
              <p className="text-sm text-ice-text-secondary font-light leading-relaxed mb-6">
                ICE maintains trained paramedic teams positioned across six U.S. states,
                providing broad geographic coverage for rapid domestic deployment. These
                professionals are specifically trained in ICE's cryopreservation stabilization
                protocols and can mobilize within hours of case activation.
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {coverageRegions.map((region) => (
                  <div
                    key={region.state}
                    className="flex items-center gap-3 px-4 py-3 bg-ice-warm-white rounded-lg border border-ice-border-subtle"
                  >
                    <div className="w-2 h-2 rounded-full bg-ice-teal flex-shrink-0" />
                    <div>
                      <span className="text-sm font-medium text-ice-text-primary">{region.state}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Clinical Standards */}
      <section className="py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-6">
            <p className="text-xs font-bold tracking-[0.25em] uppercase text-ice-teal mb-4">Standards</p>
            <h2 className="text-3xl lg:text-4xl font-extralight text-ice-text-primary tracking-tight">
              Clinical excellence, everywhere
            </h2>
          </AnimatedSection>
          <AnimatedSection className="text-center mb-16">
            <p className="text-ice-text-tertiary font-light max-w-3xl mx-auto">
              What separates ICE from basic transport services is the depth of our clinical
              intervention. We don't simply move patients — we stabilize them using ICU-level
              protocols, administer neuroprotective medications, and manage temperature with
              computer-controlled precision. Every deployment is a medical procedure.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clinicalCapabilities.map((capability, i) => (
              <AnimatedSection key={capability.title} delay={i * 0.08}>
                <div className="bg-white p-8 rounded-xl border border-ice-border-subtle premium-card h-full">
                  <div className="w-12 h-12 rounded-xl bg-ice-teal-muted flex items-center justify-center mb-6">
                    <capability.icon size={22} className="text-ice-teal" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg font-medium text-ice-text-primary mb-3">{capability.title}</h3>
                  <p className="text-sm text-ice-text-secondary font-light leading-relaxed">
                    {capability.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CSO Partners Detail */}
      <section className="py-24 lg:py-32 bg-ice-warm-gray">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <p className="text-xs font-bold tracking-[0.25em] uppercase text-ice-teal mb-4">Partners</p>
            <h2 className="text-3xl lg:text-4xl font-extralight text-ice-text-primary tracking-tight">
              Your patient, your chosen organization
            </h2>
            <p className="text-ice-text-tertiary font-light mt-4 max-w-2xl mx-auto">
              ICE is organization-agnostic. We transport patients to whichever CSO they have
              selected for long-term storage. Our established relationships with all major
              organizations ensure seamless handoff coordination.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 gap-6">
            {csoPartners.map((cso, i) => (
              <AnimatedSection key={cso.abbreviation} delay={i * 0.1}>
                <div className="bg-white p-8 rounded-xl border border-ice-border-subtle premium-card h-full">
                  <div className="h-px w-8 bg-ice-gold mb-6" />
                  <h3 className="text-lg font-medium text-ice-text-primary mb-1">{cso.name}</h3>
                  <p className="text-xs text-ice-text-tertiary font-medium tracking-wide mb-4">{cso.location}</p>
                  <p className="text-sm text-ice-text-secondary font-light leading-relaxed">
                    {cso.description}
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
              From Alcor to ICE: a decade of firsts
            </h2>
            <p className="text-ice-text-tertiary font-light mt-4 max-w-2xl mx-auto">
              Aaron Drake's career trajectory from Alcor's Medical Response Director to
              founding the world's most experienced independent SST organization.
            </p>
          </AnimatedSection>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-ice-border-subtle" />

            {milestones.map((milestone, i) => (
              <AnimatedSection key={milestone.year} delay={i * 0.08}>
                <div className={`relative pl-12 md:pl-0 pb-12 last:pb-0 ${i % 2 === 0 ? 'md:pr-[calc(50%+2rem)] md:text-right' : 'md:pl-[calc(50%+2rem)]'}`}>
                  <div className="absolute left-2.5 md:left-1/2 md:-translate-x-1/2 top-1 w-3 h-3 rounded-full bg-ice-teal ring-4 ring-white" />
                  <p className="text-xs font-bold tracking-widest text-ice-teal uppercase mb-1">{milestone.year}</p>
                  <p className="text-sm text-ice-text-secondary font-light leading-relaxed">{milestone.event}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Headquarters */}
      <section className="py-24 lg:py-32 bg-ice-warm-gray">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <AnimatedSection variant="fade-left">
              <p className="text-xs font-bold tracking-[0.25em] uppercase text-ice-teal mb-4">Headquarters</p>
              <h2 className="text-3xl lg:text-4xl font-extralight text-ice-text-primary tracking-tight mb-6">
                Scottsdale, Arizona
              </h2>
              <p className="text-ice-text-secondary font-light leading-relaxed mb-6">
                ICE is headquartered in the Phoenix/Scottsdale metropolitan area of Arizona.
                This strategic location provides direct access to major international airports,
                favorable year-round operating conditions, and proximity to key partners in the
                cryopreservation community.
              </p>
              <p className="text-ice-text-secondary font-light leading-relaxed mb-6">
                While our headquarters anchor our operations, ICE's distributed team model
                means our capabilities extend far beyond Arizona. With paramedic teams
                positioned in California, Texas, Florida, North Carolina, Alaska, and Hawaii,
                and a proven track record of international deployments across 40+ countries,
                we operate wherever our patients need us.
              </p>
              <div className="flex items-center gap-3 px-4 py-3 bg-white rounded-lg border border-ice-border-subtle">
                <Globe size={16} className="text-ice-teal flex-shrink-0" />
                <span className="text-sm text-ice-text-secondary">
                  Phoenix/Scottsdale Metro Area, Arizona, USA
                </span>
              </div>
            </AnimatedSection>

            <AnimatedSection variant="fade-right" delay={0.15}>
              <div className="bg-white p-8 rounded-xl border border-ice-border-subtle premium-card">
                <h3 className="text-lg font-medium text-ice-text-primary mb-6">Why Arizona?</h3>
                <div className="space-y-4">
                  {[
                    { title: 'Airport Access', detail: 'Phoenix Sky Harbor International Airport — direct flights to major domestic and international hubs for rapid deployment.' },
                    { title: 'Climate', detail: 'Year-round operational conditions with minimal weather-related deployment delays.' },
                    { title: 'Industry Proximity', detail: 'Located near Alcor Life Extension Foundation and other key organizations in the cryopreservation community.' },
                    { title: 'Central Time Zone', detail: 'Mountain Standard Time provides favorable overlap with both U.S. coasts and international coordination windows.' },
                  ].map((item) => (
                    <div key={item.title} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-ice-teal flex-shrink-0 mt-2" />
                      <div>
                        <p className="text-sm font-medium text-ice-text-primary">{item.title}</p>
                        <p className="text-xs text-ice-text-tertiary font-light leading-relaxed">{item.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
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
            <p className="text-white/60 font-light mb-4 max-w-xl mx-auto">
              Whether you're planning ahead or facing an urgent situation, our team is
              available 24/7 to discuss your needs and develop a protocol tailored to your
              specific circumstances.
            </p>
            <p className="text-white/40 font-light text-sm mb-10 max-w-xl mx-auto">
              ICE provides standby, stabilization, and transport services only. Long-term
              storage arrangements are made directly with your chosen CSO.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-3.5 bg-ice-teal text-white text-xs font-bold uppercase tracking-widest rounded hover:bg-ice-teal-light transition-colors"
              >
                Start a Conversation
              </Link>
              <Link
                to="/services"
                className="px-8 py-3.5 border border-white/20 text-white text-xs font-bold uppercase tracking-widest rounded hover:border-white/40 transition-colors"
              >
                View Services & Pricing
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
