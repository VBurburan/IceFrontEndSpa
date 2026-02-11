import { Check, ShieldCheck } from 'lucide-react';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

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
    <section id="services" className="py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-xs font-bold text-ice-teal uppercase tracking-[0.25em] mb-3">Transparent Pricing</h2>
          <h3 className="text-3xl md:text-4xl font-extralight text-ice-text-primary tracking-tight mb-6">Comprehensive Service Protocols</h3>
          <p className="text-ice-text-secondary font-light leading-relaxed">
            We offer tiered levels of support designed to meet specific clinical and logistical needs.
            All protocols are executed in strict partnership with receiving organizations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
              className={`
                relative bg-white rounded-2xl p-8 flex flex-col h-full transition-all duration-300
                ${tier.recommended 
                  ? 'shadow-2xl shadow-ice-navy/10 ring-1 ring-ice-teal transform md:-translate-y-4' 
                  : 'shadow-lg shadow-ice-border-subtle border border-ice-border-subtle hover:shadow-xl'
                }
              `}
            >
              {tier.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-ice-navy text-ice-gold text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-full shadow-lg">
                  Most Common
                </div>
              )}

              <div className="mb-8 border-b border-ice-border-subtle pb-8">
                <h4 className="text-lg font-semibold text-ice-text-primary mb-2">{tier.name}</h4>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-4xl font-light text-ice-text-primary">{tier.price}</span>
                  <span className="text-sm text-slate-400 font-light">/ case</span>
                </div>
                <p className="text-sm text-ice-text-secondary leading-relaxed">
                  {tier.description}
                </p>
              </div>
              
              <ul className="space-y-4 mb-8 flex-grow">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-ice-text-primary">
                    <div className="mt-0.5 p-0.5 rounded-full bg-ice-teal-muted text-ice-teal shrink-0">
                      <Check size={12} strokeWidth={3} />
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button 
                onClick={scrollToContact}
                className={`
                  w-full py-4 text-xs font-bold uppercase tracking-widest rounded transition-all duration-300
                  ${tier.recommended 
                    ? 'bg-ice-navy text-white hover:bg-ice-teal shadow-lg hover:shadow-ice-teal/25' 
                    : 'bg-slate-50 text-ice-text-primary hover:bg-ice-border-subtle'
                  }
                `}
              >
                Inquire Now
              </button>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl p-8 border border-ice-border-subtle shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
           <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-ice-teal-muted flex items-center justify-center text-ice-teal">
                 <ShieldCheck size={24} />
              </div>
              <div>
                 <h4 className="font-bold text-ice-text-primary text-sm">Additional Considerations</h4>
                 <p className="text-xs text-ice-text-secondary mt-1">International fees apply for cases outside the continental US.</p>
              </div>
           </div>
           <div className="text-right">
              <p className="text-xs text-slate-400">
                Canada Surcharge: <span className="font-semibold text-ice-text-primary">$12,500</span> • 
                Global Surcharge: <span className="font-semibold text-ice-text-primary">$25,000+</span>
              </p>
           </div>
        </div>

        <div className="mt-12 text-center">
          <Link to="/services" className="text-sm font-medium text-ice-teal hover:text-ice-navy transition-colors duration-200">
            View detailed service descriptions &rarr;
          </Link>
        </div>

      </div>
    </section>
  );
}
