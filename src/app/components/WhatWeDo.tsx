import { Timer, Snowflake, HeartPulse } from 'lucide-react';

export function WhatWeDo() {
  return (
    <section id="expertise" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-sm font-bold text-cyan-600 uppercase tracking-widest mb-3">Our Expertise</h2>
          <h3 className="text-3xl md:text-4xl font-light text-slate-900 mb-6">
            Bridging the gap between <br />
            <span className="font-serif italic text-slate-400">today's end and tomorrow's beginning.</span>
          </h3>
          <p className="text-slate-600 font-light leading-relaxed">
            We specialize in the critical phase immediately following legal death. Our SST (Standby, Stabilization, and Transport) teams intervene to stop biological decay and prepare the patient for long-term cryopreservation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
           
           <div className="group">
              <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-cyan-600 mb-6 group-hover:bg-cyan-500 group-hover:text-white transition-colors duration-300 shadow-sm">
                 <Timer size={28} strokeWidth={1.5} />
              </div>
              <h4 className="text-xl font-medium text-slate-900 mb-3">Rapid Standby</h4>
              <p className="text-sm text-slate-500 leading-relaxed font-light">
                We deploy weeks in advance for critical patients. Being at the bedside at the moment of pronouncement is the single most important factor in preservation quality.
              </p>
           </div>

           <div className="group">
              <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-cyan-600 mb-6 group-hover:bg-cyan-500 group-hover:text-white transition-colors duration-300 shadow-sm">
                 <HeartPulse size={28} strokeWidth={1.5} />
              </div>
              <h4 className="text-xl font-medium text-slate-900 mb-3">Field Stabilization</h4>
              <p className="text-sm text-slate-500 leading-relaxed font-light">
                Immediate application of mechanical cardiopulmonary support and administration of neuroprotective medications to maintain oxygenation and prevent clotting.
              </p>
           </div>

           <div className="group">
              <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-cyan-600 mb-6 group-hover:bg-cyan-500 group-hover:text-white transition-colors duration-300 shadow-sm">
                 <Snowflake size={28} strokeWidth={1.5} />
              </div>
              <h4 className="text-xl font-medium text-slate-900 mb-3">Deep Cooling</h4>
              <p className="text-sm text-slate-500 leading-relaxed font-light">
                Computer-controlled cooling using portable ice baths and eventual dry ice transfer lowers the patient's temperature to stop metabolic activity during transport.
              </p>
           </div>

        </div>
      </div>
    </section>
  );
}
