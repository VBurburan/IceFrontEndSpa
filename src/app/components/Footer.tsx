import { Phone, Mail, MapPin, Instagram, Linkedin, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-ice-navy text-white/60 py-20 font-light border-t border-white/5 premium-grain relative overflow-hidden" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">

          {/* Brand Column */}
          <div className="space-y-8">
            <div className="flex flex-col items-start gap-4">
              <Link to="/" className="p-2 bg-white/5 rounded-lg inline-block hover:bg-white/10 transition-colors">
                <img
                  src="https://i.imgur.com/0uIOCcE.png"
                  alt="ICE International Cryomedicine Experts"
                  className="h-16 w-auto"
                />
              </Link>
              <p className="text-[10px] text-white/50 uppercase tracking-widest font-bold">
                International Cryomedicine Experts
              </p>
            </div>
            <p className="text-sm leading-relaxed max-w-xs text-white/50">
              The world's most experienced standby, stabilization, and transport team for cryopreservation.
            </p>
            <nav aria-label="Social media links" className="flex gap-3 pt-2">
              <a href="https://x.com" target="_blank" rel="noopener noreferrer" aria-label="Follow us on X (Twitter)" className="p-2.5 rounded-lg bg-white/5 border border-white/10 hover:border-ice-teal/50 hover:text-ice-teal-light transition-all">
                <Twitter size={14} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="Follow us on LinkedIn" className="p-2.5 rounded-lg bg-white/5 border border-white/10 hover:border-ice-teal/50 hover:text-ice-teal-light transition-all">
                <Linkedin size={14} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Instagram" className="p-2.5 rounded-lg bg-white/5 border border-white/10 hover:border-ice-teal/50 hover:text-ice-teal-light transition-all">
                <Instagram size={14} />
              </a>
            </nav>
          </div>

          {/* Services */}
          <nav aria-label="Services navigation">
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-8 flex items-center gap-2">
              <span className="w-8 h-px bg-ice-teal"></span> Services
            </h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/services" className="hover:text-ice-teal-light transition-colors flex items-center gap-3 group"><div className="w-1 h-1 bg-white/30 rounded-full group-hover:bg-ice-teal transition-colors" /> Overview & Pricing</Link></li>
              <li><Link to="/process" className="hover:text-ice-teal-light transition-colors flex items-center gap-3 group"><div className="w-1 h-1 bg-white/30 rounded-full group-hover:bg-ice-teal transition-colors" /> The Process</Link></li>
              <li><Link to="/logistics" className="hover:text-ice-teal-light transition-colors flex items-center gap-3 group"><div className="w-1 h-1 bg-white/30 rounded-full group-hover:bg-ice-teal transition-colors" /> Transport & Logistics</Link></li>
            </ul>
          </nav>

          {/* Company */}
          <nav aria-label="Company navigation">
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-8 flex items-center gap-2">
              <span className="w-8 h-px bg-ice-teal"></span> Company
            </h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/about" className="hover:text-ice-teal-light transition-colors flex items-center gap-3 group"><div className="w-1 h-1 bg-white/30 rounded-full group-hover:bg-ice-teal transition-colors" /> About ICE</Link></li>
              <li><Link to="/about#leadership" className="hover:text-ice-teal-light transition-colors flex items-center gap-3 group"><div className="w-1 h-1 bg-white/30 rounded-full group-hover:bg-ice-teal transition-colors" /> Leadership</Link></li>
              <li><Link to="/contact" className="hover:text-ice-teal-light transition-colors flex items-center gap-3 group"><div className="w-1 h-1 bg-white/30 rounded-full group-hover:bg-ice-teal transition-colors" /> Contact Us</Link></li>
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-8 flex items-center gap-2">
              <span className="w-8 h-px bg-ice-teal"></span> Activation
            </h4>
            <ul className="space-y-6 text-sm">
              <li className="flex items-start gap-4 p-4 bg-white/5 border border-white/10 rounded-lg">
                <Phone size={18} className="text-white/70 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-[10px] font-bold text-white/50 uppercase tracking-wider mb-1">Standby (24/7)</span>
                  <a href="tel:844-468-5279" className="text-base text-white font-medium tracking-wide hover:text-ice-teal-light transition-colors">844-INTL-CRYO</a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={14} className="text-ice-teal shrink-0" />
                <a href="mailto:info@cryomedics.org" className="hover:text-white transition-colors">info@cryomedics.org</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={14} className="text-ice-teal shrink-0 mt-1" />
                <span>Scottsdale, Arizona<br/>United States</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Trust signals */}
        <div className="flex flex-wrap justify-center gap-8 py-8 border-t border-white/5 mb-8">
          {['HIPAA Aligned Practices', '24/7 Global Deployment', '150+ Cryopreservations', 'Est. 2015'].map((signal) => (
            <span key={signal} className="text-[10px] font-bold tracking-widest uppercase text-white/40">
              {signal}
            </span>
          ))}
        </div>

        {/* Gold accent line */}
        <div className="h-px bg-gradient-to-r from-transparent via-ice-gold/30 to-transparent mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-white/50">
          <p>&copy; {currentYear} International Cryomedicine Experts. All rights reserved.</p>
          <nav aria-label="Legal links" className="flex flex-wrap justify-center gap-x-8 gap-y-2">
            <Link to="/legal/privacy-policy" className="hover:text-ice-teal-light transition-colors">Privacy Policy</Link>
            <Link to="/legal/terms-of-service" className="hover:text-ice-teal-light transition-colors">Terms of Service</Link>
            <Link to="/legal/medical-disclaimer" className="hover:text-ice-teal-light transition-colors">Medical Disclaimer</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
