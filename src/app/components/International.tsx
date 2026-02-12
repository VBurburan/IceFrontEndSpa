import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Globe, MapPin, Clock, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const regions = [
  {
    name: 'North America',
    description: 'Full SST deployment across the US and Canada with established funeral director networks and regulatory expertise.',
    countries: ['United States', 'Canada', 'Mexico'],
    highlight: true,
  },
  {
    name: 'Europe',
    description: 'Cross-border coordination with consulates, customs brokers, and regional funeral services for seamless international transport.',
    countries: ['United Kingdom', 'Germany', 'Spain', 'Italy', 'Switzerland'],
    highlight: false,
  },
  {
    name: 'Asia-Pacific',
    description: 'Complex multi-jurisdiction logistics including specialized documentation, serology requirements, and extended cold-chain management.',
    countries: ['Australia', 'Japan', 'Thailand', 'Singapore'],
    highlight: false,
  },
  {
    name: 'Rest of World',
    description: 'Case-by-case planning for regions with unique regulatory environments. ICE has completed cases from every inhabited continent.',
    countries: ['South America', 'Middle East', 'Africa'],
    highlight: false,
  },
];

const stats = [
  { value: '40+', label: 'Countries Served', icon: Globe },
  { value: '24/7', label: 'Global Availability', icon: Clock },
  { value: '100+', label: 'International Cases', icon: Users },
  { value: '<24h', label: 'Avg. Deployment Time', icon: MapPin },
];

export function International() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="international" className="py-32 bg-ice-warm-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #0e7490 1px, transparent 0)', backgroundSize: '40px 40px' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <p className="text-xs font-bold text-ice-teal uppercase tracking-[0.25em] mb-3">Global Reach</p>
          <h2 className="text-3xl md:text-4xl font-extralight text-ice-text-primary tracking-tight mb-6">
            Deployed worldwide. <br />
            <span className="italic text-ice-text-tertiary">Wherever the case demands.</span>
          </h2>
          <p className="text-ice-text-secondary font-light leading-relaxed">
            ICE has executed cases on every inhabited continent. Our logistics network spans 40+ countries,
            with established relationships with funeral directors, consulates, customs brokers, and air cargo providers around the world.
          </p>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, i) => (
            <div key={i} className="text-center p-6 bg-ice-warm-gray rounded-2xl border border-ice-border-subtle group hover:bg-ice-teal-muted hover:border-ice-teal-muted transition-all duration-300 premium-card">
              <div className="w-10 h-10 mx-auto mb-3 rounded-xl bg-ice-warm-white border border-ice-border-subtle flex items-center justify-center text-ice-teal group-hover:bg-ice-teal group-hover:text-white transition-colors duration-300">
                <stat.icon size={20} strokeWidth={1.5} />
              </div>
              <div className="text-3xl font-light text-ice-text-primary mb-1">{stat.value}</div>
              <div className="text-xs font-bold text-ice-text-secondary uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Region Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {regions.map((region, i) => (
            <motion.div
              key={region.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              className={`p-8 rounded-2xl border transition-all duration-300 hover:shadow-lg ${
                region.highlight
                  ? 'bg-ice-navy text-white border-ice-navy-light hover:border-ice-teal'
                  : 'bg-ice-warm-white border-ice-border-subtle hover:border-ice-border-medium'
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <h4 className={`text-xl font-medium ${region.highlight ? 'text-white' : 'text-ice-text-primary'}`}>
                  {region.name}
                </h4>
                {region.highlight && (
                  <span className="text-[10px] font-bold uppercase tracking-widest bg-ice-gold/20 text-ice-gold px-3 py-1 rounded-full">
                    Primary
                  </span>
                )}
              </div>
              <p className={`text-sm leading-relaxed mb-6 ${region.highlight ? 'text-ice-text-tertiary' : 'text-ice-text-secondary'}`}>
                {region.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {region.countries.map((country) => (
                  <span
                    key={country}
                    className={`text-xs px-3 py-1 rounded-full font-medium ${
                      region.highlight
                        ? 'bg-white/10 text-white/60'
                        : 'bg-ice-warm-gray text-ice-text-secondary border border-ice-border-subtle'
                    }`}
                  >
                    {country}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-ice-text-secondary text-sm mb-4">Need logistics support for a specific country or route?</p>
          <Link
            to="/logistics"
            className="px-8 py-3 bg-ice-navy text-white text-xs font-bold uppercase tracking-widest rounded hover:bg-ice-teal transition-colors duration-200 shadow-sm inline-block"
          >
            View Logistics Details
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
