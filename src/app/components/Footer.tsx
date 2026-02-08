import { Phone, Mail, MapPin, ArrowRight, Instagram, Linkedin, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-400 py-20 font-light border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* Brand Column */}
          <div className="space-y-8">
            <div className="flex flex-col items-start gap-4">
               <div className="p-2 bg-white/5 rounded-lg inline-block">
                 <img 
                   src="https://i.imgur.com/0uIOCcE.png" 
                   alt="ICE International Cryomedicine Experts" 
                   className="h-20 w-auto" 
                 />
               </div>
               <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">
                 International Cryomedicine Experts
               </p>
            </div>
            <p className="text-sm leading-relaxed max-w-xs text-slate-400">
              The world's most advanced standby, stabilization, and transport team for cryopreservation.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="p-2.5 rounded-full bg-slate-900 border border-slate-800 hover:border-cyan-500 hover:text-cyan-400 transition-all">
                <Twitter size={16} />
              </a>
              <a href="#" className="p-2.5 rounded-full bg-slate-900 border border-slate-800 hover:border-cyan-500 hover:text-cyan-400 transition-all">
                <Linkedin size={16} />
              </a>
              <a href="#" className="p-2.5 rounded-full bg-slate-900 border border-slate-800 hover:border-cyan-500 hover:text-cyan-400 transition-all">
                <Instagram size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-8 flex items-center gap-2">
              <span className="w-8 h-px bg-cyan-600"></span> Protocols
            </h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/#services" className="hover:text-cyan-400 transition-colors flex items-center gap-3 group"><div className="w-1 h-1 bg-slate-700 rounded-full group-hover:bg-cyan-500 transition-colors" /> Membership</Link></li>
              <li><Link to="/#services" className="hover:text-cyan-400 transition-colors flex items-center gap-3 group"><div className="w-1 h-1 bg-slate-700 rounded-full group-hover:bg-cyan-500 transition-colors" /> Standby (SST)</Link></li>
              <li><Link to="/#services" className="hover:text-cyan-400 transition-colors flex items-center gap-3 group"><div className="w-1 h-1 bg-slate-700 rounded-full group-hover:bg-cyan-500 transition-colors" /> Field Cryoprotection</Link></li>
              <li><Link to="/logistics" className="hover:text-cyan-400 transition-colors flex items-center gap-3 group"><div className="w-1 h-1 bg-slate-700 rounded-full group-hover:bg-cyan-500 transition-colors" /> Transport & Logistics</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-8 flex items-center gap-2">
              <span className="w-8 h-px bg-cyan-600"></span> Company
            </h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/#leadership" className="hover:text-cyan-400 transition-colors flex items-center gap-3 group"><div className="w-1 h-1 bg-slate-700 rounded-full group-hover:bg-cyan-500 transition-colors" /> Leadership</Link></li>
              <li><Link to="/#expertise" className="hover:text-cyan-400 transition-colors flex items-center gap-3 group"><div className="w-1 h-1 bg-slate-700 rounded-full group-hover:bg-cyan-500 transition-colors" /> Clinical Standards</Link></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors flex items-center gap-3 group"><div className="w-1 h-1 bg-slate-700 rounded-full group-hover:bg-cyan-500 transition-colors" /> Careers</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors flex items-center gap-3 group"><div className="w-1 h-1 bg-slate-700 rounded-full group-hover:bg-cyan-500 transition-colors" /> Press & Media</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-8 flex items-center gap-2">
              <span className="w-8 h-px bg-cyan-600"></span> Activation
            </h4>
            <ul className="space-y-6 text-sm">
              <li className="flex items-start gap-4 p-4 bg-slate-900/50 border border-slate-800 rounded-lg">
                <Phone size={20} className="text-slate-200 shrink-0 mt-0.5" />
                <div>
                   <span className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Standby (24/7)</span>
                   <span className="text-lg text-white font-medium tracking-wide">844-INTL-CRYO</span>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-cyan-600 shrink-0" />
                <span className="hover:text-white transition-colors cursor-pointer">info@cryomedics.org</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-cyan-600 shrink-0 mt-1" />
                <span>Scottsdale, Arizona<br/>United States</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-slate-600">
          <p>&copy; {currentYear} International Cryomedicine Experts. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-cyan-500 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-cyan-500 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-cyan-500 transition-colors">Medical Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
