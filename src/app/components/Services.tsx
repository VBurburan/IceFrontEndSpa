import { Check, ShieldCheck } from 'lucide-react';

export function Services() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const tiers = [
    {
      name: "Consultation",
      price: "$15,000",
      description: "Comprehensive planning and logistics support for members of major cryonics organizations.",
      features: [
        "Logistics strategy development",
        "Remote clinical direction",
        "Liaison with C.I. / Alcor",
        "Family communication relay",
        "Legal directive review"
      ]
    },
    {
      name: "SST Protocol",
      price: "$50,000",
      description: "Full-service standby, stabilization, and transport. The industry standard for high-fidelity preservation.",
      recommended: true,
      features: [
        "24/7 Standby Team Deployment",
        "On-site Stabilization Meds",
        "Mechanical CPS & Ventilation",
        "Computerized Ice Bath Cooling",
        "Secure Airline Transport"
      ]
    },
    {
      name: "SST + Perfusion",
      price: "$80,000",
      description: "Advanced field capabilities including cryoprotectant introduction and surgical intervention.",
      features: [
        "All SST Protocol services",
        "Field Cryoprotectant Perfusion",
        "Surgical Cannulation",
        "Dry Ice Temperature Transport",
        "Extended Clinical Capabilities"
      ]
    }
  ];

  return (
    <section id="services" className="py-32 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-sm font-bold text-cyan-600 uppercase tracking-widest mb-3">Transparent Pricing</h2>
          <h3 className="text-3xl md:text-4xl font-light text-slate-900 mb-6">Comprehensive Service Protocols</h3>
          <p className="text-slate-600 font-light leading-relaxed">
            We offer tiered levels of support designed to meet specific clinical and logistical needs. 
            All protocols are executed in strict partnership with receiving organizations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <div 
              key={index} 
              className={`
                relative bg-white rounded-2xl p-8 flex flex-col h-full transition-all duration-300
                ${tier.recommended 
                  ? 'shadow-2xl shadow-cyan-900/10 ring-1 ring-cyan-500 transform md:-translate-y-4' 
                  : 'shadow-lg shadow-slate-200 border border-slate-100 hover:shadow-xl'
                }
              `}
            >
              {tier.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-cyan-500 text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-full shadow-lg">
                  Most Common
                </div>
              )}

              <div className="mb-8 border-b border-slate-100 pb-8">
                <h4 className="text-lg font-semibold text-slate-900 mb-2">{tier.name}</h4>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-4xl font-light text-slate-900">{tier.price}</span>
                  <span className="text-sm text-slate-400 font-light">/ case</span>
                </div>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {tier.description}
                </p>
              </div>
              
              <ul className="space-y-4 mb-8 flex-grow">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-700">
                    <div className="mt-0.5 p-0.5 rounded-full bg-cyan-50 text-cyan-600 shrink-0">
                      <Check size={12} strokeWidth={3} />
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button 
                onClick={scrollToContact}
                className={`
                  w-full py-4 text-xs font-bold uppercase tracking-widest rounded-xl transition-all duration-300
                  ${tier.recommended 
                    ? 'bg-slate-900 text-white hover:bg-cyan-600 shadow-lg hover:shadow-cyan-500/25' 
                    : 'bg-slate-50 text-slate-900 hover:bg-slate-100'
                  }
                `}
              >
                Inquire Now
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl p-8 border border-slate-100 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
           <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-cyan-50 flex items-center justify-center text-cyan-600">
                 <ShieldCheck size={24} />
              </div>
              <div>
                 <h4 className="font-bold text-slate-900 text-sm">Additional Considerations</h4>
                 <p className="text-xs text-slate-500 mt-1">International fees apply for cases outside the continental US.</p>
              </div>
           </div>
           <div className="text-right">
              <p className="text-xs text-slate-400">
                Canada Surcharge: <span className="font-semibold text-slate-700">$12,500</span> • 
                Global Surcharge: <span className="font-semibold text-slate-700">$25,000+</span>
              </p>
           </div>
        </div>

      </div>
    </section>
  );
}
