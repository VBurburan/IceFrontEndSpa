import { motion } from 'motion/react';
import { Plane, FileCheck, ThermometerSnowflake, Globe, Clock, ShieldCheck, FileText, Scale } from 'lucide-react';
import { Link } from 'react-router-dom';

export function LogisticsPage() {
  return (
    <div className="pt-24 bg-white min-h-screen">
      
      {/* Header */}
      <section className="bg-slate-50 py-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-light text-slate-900 mb-6 tracking-tight">
              Transport & <span className="font-semibold text-cyan-700">Logistics</span>
            </h1>
            <p className="text-xl text-slate-600 font-light leading-relaxed">
              Navigating permits, packaging, air cargo, and international regulations — so you don't have to.
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Challenge + Image */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-sm font-bold text-cyan-600 uppercase tracking-widest mb-4">The Challenge</h2>
              <h3 className="text-3xl font-light text-slate-900 mb-6">Complexity, Managed.</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                Transporting a cryopreserved patient isn't like shipping anything else. It involves complex human remains regulations, hazardous materials classification, temperature-critical packaging, multi-agency permits, and tight timing windows — all while coordinating across time zones, languages, and legal systems.
              </p>
              <p className="text-slate-600 leading-relaxed border-l-4 border-slate-100 pl-4 font-medium">
                ICE handles this complexity so families and CSOs don't have to.
              </p>
            </div>
            <div className="relative rounded-xl overflow-hidden shadow-xl h-[400px]">
              <img 
                src="https://imgur.com/yhxRp7A.png" 
                alt="ICE Logistics Coordination" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-slate-900/10 mix-blend-multiply" />
            </div>
          </div>
        </div>
      </section>

      {/* Air Cargo Logistics */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-light text-slate-900 mb-12">Air Cargo Logistics</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Commercial Flights */}
            <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-200">
              <div className="w-12 h-12 bg-cyan-50 text-cyan-700 rounded-lg flex items-center justify-center mb-6">
                <Plane size={24} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-4">Commercial Flights</h3>
              <ul className="space-y-3 text-sm text-slate-600">
                <li className="flex gap-2"><div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 shrink-0" />Coordination with airline cargo departments</li>
                <li className="flex gap-2"><div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 shrink-0" />Booking flights with appropriate cargo hold temps</li>
                <li className="flex gap-2"><div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 shrink-0" />Managing layover timing to avoid thaw risk</li>
                <li className="flex gap-2"><div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 shrink-0" />Handling carrier-specific documentation</li>
              </ul>
            </div>

            {/* Charter Aircraft */}
            <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-200">
              <div className="w-12 h-12 bg-slate-100 text-slate-700 rounded-lg flex items-center justify-center mb-6">
                <Plane size={24} className="rotate-45" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-4">Charter Aircraft</h3>
              <ul className="space-y-3 text-sm text-slate-600">
                <li className="flex gap-2"><div className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 shrink-0" />For time-critical cases or remote locations</li>
                <li className="flex gap-2"><div className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 shrink-0" />Direct routing eliminates connection risks</li>
                <li className="flex gap-2"><div className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 shrink-0" />Full coordination of aircraft selection & permits</li>
                <li className="flex gap-2"><div className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 shrink-0" />Priced by quote based on distance/type</li>
              </ul>
            </div>

            {/* Ground Transport */}
            <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-200">
              <div className="w-12 h-12 bg-cyan-50 text-cyan-700 rounded-lg flex items-center justify-center mb-6">
                <Clock size={24} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-4">Ground Transport</h3>
              <ul className="space-y-3 text-sm text-slate-600">
                <li className="flex gap-2"><div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 shrink-0" />Coordination with funeral directors</li>
                <li className="flex gap-2"><div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 shrink-0" />Temperature-controlled vehicles when required</li>
                <li className="flex gap-2"><div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 shrink-0" />Chain of custody documentation throughout</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Permits & Documentation */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-light text-slate-900 mb-8">Permits & Documentation</h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Every jurisdiction has different requirements. ICE maintains relationships with consulates, funeral directors, customs brokers, and regulatory agencies to expedite paperwork that would otherwise take families weeks.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Death Certificate", "Transit Permits", 
                  "Consular Mortuary Certificate", "Export/Import Permits",
                  "Apostille & Translations", "Airline Cargo Declarations",
                  "Customs Documentation"
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 p-3 bg-slate-50 rounded border border-slate-100">
                    <FileCheck size={18} className="text-cyan-600" />
                    <span className="text-sm font-medium text-slate-800">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-900 text-white p-8 rounded-xl">
              <h3 className="text-xl font-light mb-6">Packaging & Cold Chain</h3>
              
              <div className="space-y-8">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <ThermometerSnowflake className="text-cyan-400" size={20} />
                    <h4 className="font-bold uppercase text-xs tracking-widest text-slate-300">Dry Ice (UN1845)</h4>
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    Classified as hazardous material. We handle IATA/PHMSA regulations, quantity limits, and labeling.
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <ShieldCheck className="text-cyan-400" size={20} />
                    <h4 className="font-bold uppercase text-xs tracking-widest text-slate-300">Specialized Containers</h4>
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    Medical-grade shipping containers designed for human remains with insulation rated for extended transit.
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <FileText className="text-cyan-400" size={20} />
                    <h4 className="font-bold uppercase text-xs tracking-widest text-slate-300">Temperature Monitoring</h4>
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    Continuous monitoring during transport with documentation of cold chain integrity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Regulations & Compliance */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-light text-slate-900 mb-12 text-center">Regulations & Compliance</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div className="p-6 border-l-2 border-slate-200 hover:border-cyan-500 transition-colors">
              <h3 className="text-lg font-bold text-slate-900 mb-3">United States</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                State-by-state variation in death certificate timing, transit permits, TSA/FAA air cargo regulations, and OSHA considerations.
              </p>
            </div>
            
            <div className="p-6 border-l-2 border-slate-200 hover:border-cyan-500 transition-colors">
              <h3 className="text-lg font-bold text-slate-900 mb-3">Canada</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Provincial regulations, CBSA clearance procedures, and Transport Canada hazardous goods regulations.
              </p>
            </div>

            <div className="p-6 border-l-2 border-slate-200 hover:border-cyan-500 transition-colors">
              <h3 className="text-lg font-bold text-slate-900 mb-3">International</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Country-specific import reqs, embalming alternatives (when laws conflict with cryonics), serology requirements, and cultural considerations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Coordination Points & Timeline */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 rounded-2xl overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              
              <div className="p-10 lg:p-12 text-white">
                <h3 className="text-2xl font-light mb-6">Coordination Points</h3>
                <p className="text-slate-400 mb-8">
                  A typical international case requires ICE to coordinate with multiple entities. We serve as the single point of contact.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-sm text-slate-300">
                  <div className="flex items-center gap-2"><Globe size={16} className="text-cyan-500"/> Treating physicians</div>
                  <div className="flex items-center gap-2"><Globe size={16} className="text-cyan-500"/> Local funeral directors</div>
                  <div className="flex items-center gap-2"><Globe size={16} className="text-cyan-500"/> Consulates & Embassies</div>
                  <div className="flex items-center gap-2"><Globe size={16} className="text-cyan-500"/> Airline cargo depts</div>
                  <div className="flex items-center gap-2"><Globe size={16} className="text-cyan-500"/> Customs brokers</div>
                  <div className="flex items-center gap-2"><Globe size={16} className="text-cyan-500"/> Receiving CSOs</div>
                </div>
              </div>

              <div className="bg-cyan-900/30 p-10 lg:p-12 border-t lg:border-t-0 lg:border-l border-white/10 text-white">
                <h3 className="text-2xl font-light mb-6">"Time is Tissue"</h3>
                <p className="text-slate-400 mb-6">
                  Every hour matters. Common bottlenecks we plan around:
                </p>
                <ul className="space-y-4 text-sm text-slate-300 list-disc pl-5 marker:text-cyan-500">
                  <li>Death certificate issuance (hours to days)</li>
                  <li>Permit processing (weekends/holidays delays)</li>
                  <li>Flight availability (cargo capacity)</li>
                  <li>Customs clearance vs inspection delays</li>
                  <li>Lab turnaround for required serologies</li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-light text-slate-900 mb-6">Planning an international case?</h2>
          <p className="text-lg text-slate-600 mb-10">
            Questions about a specific country or route? Contact ICE early — logistics planning is included in all service tiers.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a href="tel:844-468-5279" className="px-8 py-4 bg-slate-900 text-white font-bold uppercase tracking-widest rounded hover:bg-cyan-700 transition-colors">
              Urgent: 844-INTL-CRYO
            </a>
            <a href="mailto:info@cryomedics.org" className="px-8 py-4 border border-slate-300 text-slate-700 font-bold uppercase tracking-widest rounded hover:border-slate-900 hover:text-slate-900 transition-colors">
              Email Us
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
