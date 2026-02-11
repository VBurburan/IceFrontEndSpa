import { useState, useEffect, useCallback } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useLocation, useNavigate } from 'react-router-dom';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigation = (id: string) => {
    setIsOpen(false);

    if (location.pathname === '/') {
      const element = document.getElementById(id);
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    } else {
      navigate(`/#${id}`);
    }
  };

  useEffect(() => {
    if (location.hash && location.pathname === '/') {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          const headerOffset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.scrollY - headerOffset;
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 50);

    if (location.pathname !== '/') return;

    const sections = ['contact', 'services', 'leadership', 'international', 'expertise'];
    for (const id of sections) {
      const el = document.getElementById(id);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom > 120) {
          setActiveSection(id);
          return;
        }
      }
    }
    if (window.scrollY < 300) setActiveSection('');
  }, [location.pathname]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const navItems = [
    { label: 'Expertise', id: 'expertise' },
    { label: 'Logistics', id: 'logistics' },
    { label: 'Leadership', id: 'leadership' },
    { label: 'Services', id: 'services' },
  ];

  const isActive = (item: { label: string; id: string }) => {
    if (item.label === 'Logistics') return location.pathname === '/logistics';
    return activeSection === item.id;
  };

  return (
    <>
      <nav
        aria-label="Main navigation"
        className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-b transition-all duration-300 ${
          scrolled
            ? 'bg-white/98 border-slate-200 py-1 shadow-md'
            : 'bg-white/95 border-slate-200 py-3 shadow-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex justify-between items-center transition-all duration-300 ${scrolled ? 'h-14' : 'h-16'}`}>

            {/* Logo */}
            <div className="flex items-center cursor-pointer group gap-3" onClick={() => navigate('/')}>
              <img
                src="https://i.imgur.com/0uIOCcE.png"
                alt="ICE International Cryomedicine Experts"
                className={`w-auto object-contain drop-shadow-sm filter contrast-125 transition-all duration-300 ${scrolled ? 'h-10' : 'h-14'}`}
              />
              <div className="hidden min-[420px]:block border-l border-slate-300 pl-3">
                 <span className="block text-sm font-extrabold text-slate-900 leading-none tracking-tight">ICE</span>
                 <span className="block text-[0.65rem] font-semibold text-slate-500 uppercase tracking-wider leading-tight mt-0.5">International Cryomedicine Experts</span>
              </div>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => {
                    if (item.label === 'Logistics') {
                      navigate('/logistics');
                    } else {
                      handleNavigation(item.id);
                    }
                  }}
                  className={`relative px-4 lg:px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-widest transition-all duration-200 ${
                    isActive(item)
                      ? 'text-cyan-700 bg-cyan-50'
                      : 'text-slate-600 hover:text-cyan-600 hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                  {isActive(item) && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-cyan-600 rounded-full"
                      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    />
                  )}
                </button>
              ))}

              <div className="pl-6 ml-2 border-l border-slate-200">
                <button
                  onClick={() => handleNavigation('contact')}
                  className={`px-6 py-2.5 text-xs font-bold uppercase tracking-widest rounded-full transition-all duration-200 shadow-sm ${
                    activeSection === 'contact'
                      ? 'bg-cyan-600 text-white'
                      : 'bg-slate-900 text-white hover:bg-cyan-600'
                  }`}
                >
                  Contact
                </button>
              </div>
            </div>

            {/* Mobile Toggle */}
            <div className="md:hidden flex items-center gap-4">
              <a href="tel:844-468-5279" aria-label="Call 24/7 standby line" className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-50 text-slate-600 border border-slate-200 hover:bg-slate-100 transition-colors">
                <Phone size={18} />
              </a>
              <button
                onClick={() => setIsOpen(!isOpen)}
                aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={isOpen}
                className="p-2 text-slate-900 hover:bg-slate-50 rounded-lg transition-colors"
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-4 pb-8 md:hidden overflow-y-auto"
          >
            <div className="space-y-1">
              {['Expertise', 'Logistics', 'Leadership', 'Services', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    if (item === 'Logistics') {
                      navigate('/logistics');
                      setIsOpen(false);
                    } else {
                      handleNavigation(item.toLowerCase());
                    }
                  }}
                  className="block w-full text-left px-4 py-5 text-lg font-medium text-slate-900 border-b border-slate-100 active:bg-slate-50"
                >
                  {item}
                </button>
              ))}
            </div>

            <div className="mt-12 p-6 bg-slate-50 rounded-xl border border-slate-100">
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">24/7 Standby Line</p>
              <a href="tel:844-468-5279" className="text-xl font-medium text-slate-900 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center shadow-sm">
                  <Phone size={18} className="text-slate-900" />
                </div>
                844-INTL-CRYO
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
