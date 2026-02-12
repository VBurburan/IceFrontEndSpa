import { useState, useEffect, useCallback } from 'react';
import { Menu, Phone } from 'lucide-react';
import { motion } from 'motion/react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from '@/app/components/ui/sheet';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigation = (id: string) => {
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

  const isActivePath = (path: string) => location.pathname === path;

  const navLinks = [
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Process', href: '/process' },
    { label: 'Logistics', href: '/logistics' },
  ];

  const sectionLinks = [
    { label: 'Expertise', id: 'expertise' },
    { label: 'Leadership', id: 'leadership' },
  ];

  return (
    <nav
      aria-label="Main navigation"
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 border-ice-border-subtle py-1 shadow-sm'
          : 'bg-white/80 border-transparent py-3'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between items-center transition-all duration-300 ${scrolled ? 'h-14' : 'h-16'}`}>

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src="https://i.imgur.com/0uIOCcE.png"
              alt="ICE International Cryomedicine Experts"
              width={48}
              height={48}
              className={`w-auto object-contain transition-all duration-300 ${scrolled ? 'h-9' : 'h-12'}`}
            />
            <div className="hidden min-[420px]:block border-l border-ice-border-subtle pl-3">
              <span className="block text-sm font-bold text-ice-text-primary leading-none tracking-tight">ICE</span>
              <span className="block text-[0.6rem] font-medium text-ice-text-tertiary uppercase tracking-wider leading-tight mt-0.5">Cryomedicine Experts</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {/* Page links */}
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                aria-current={isActivePath(link.href) ? 'page' : undefined}
                className={`relative px-4 py-2 text-xs font-semibold uppercase tracking-widest transition-all duration-200 rounded-sm ${
                  isActivePath(link.href)
                    ? 'text-ice-teal'
                    : 'text-ice-text-secondary hover:text-ice-text-primary'
                }`}
              >
                {link.label}
                {isActivePath(link.href) && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-2 right-2 h-px bg-ice-teal"
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                )}
              </Link>
            ))}

            {/* Section links (homepage) */}
            {sectionLinks.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavigation(item.id)}
                className={`relative px-4 py-2 text-xs font-semibold uppercase tracking-widest transition-all duration-200 rounded-sm ${
                  activeSection === item.id && location.pathname === '/'
                    ? 'text-ice-teal'
                    : 'text-ice-text-secondary hover:text-ice-text-primary'
                }`}
              >
                {item.label}
                {activeSection === item.id && location.pathname === '/' && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-2 right-2 h-px bg-ice-teal"
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                )}
              </button>
            ))}

            {/* Contact CTA */}
            <div className="pl-4 ml-2 border-l border-ice-border-subtle">
              <Link
                to="/contact"
                className={`px-6 py-2.5 text-xs font-bold uppercase tracking-widest rounded transition-all duration-200 ${
                  isActivePath('/contact')
                    ? 'bg-ice-teal text-white'
                    : 'bg-ice-navy text-white hover:bg-ice-teal'
                }`}
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Mobile */}
          <div className="md:hidden flex items-center gap-3">
            <a
              href="tel:844-468-5279"
              aria-label="Call 24/7 standby line"
              className="flex items-center justify-center w-9 h-9 rounded-lg bg-ice-warm-gray text-ice-text-secondary border border-ice-border-subtle hover:text-ice-teal transition-colors"
            >
              <Phone size={16} />
            </a>

            <Sheet>
              <SheetTrigger asChild>
                <button
                  aria-label="Open navigation menu"
                  className="p-2 text-ice-text-primary hover:bg-ice-warm-gray rounded-lg transition-colors"
                >
                  <Menu size={24} />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 bg-white p-0">
                <SheetHeader className="px-6 pt-6 pb-4 border-b border-ice-border-subtle">
                  <SheetTitle className="text-left text-sm font-bold text-ice-text-primary tracking-tight">
                    Navigation
                  </SheetTitle>
                </SheetHeader>

                <div className="px-2 py-4">
                  {/* Page links */}
                  {navLinks.map((link) => (
                    <SheetClose asChild key={link.label}>
                      <Link
                        to={link.href}
                        className={`block px-4 py-3.5 text-sm font-medium rounded-lg transition-colors ${
                          isActivePath(link.href)
                            ? 'text-ice-teal bg-ice-teal-muted'
                            : 'text-ice-text-primary hover:bg-ice-warm-gray'
                        }`}
                      >
                        {link.label}
                      </Link>
                    </SheetClose>
                  ))}

                  {/* Section links */}
                  <div className="mt-2 pt-2 border-t border-ice-border-subtle">
                    <p className="px-4 py-2 text-[10px] font-bold tracking-widest uppercase text-ice-text-tertiary">
                      On this page
                    </p>
                    {sectionLinks.map((item) => (
                      <SheetClose asChild key={item.label}>
                        <button
                          onClick={() => handleNavigation(item.id)}
                          className="block w-full text-left px-4 py-3 text-sm font-medium text-ice-text-secondary hover:bg-ice-warm-gray rounded-lg transition-colors"
                        >
                          {item.label}
                        </button>
                      </SheetClose>
                    ))}
                  </div>

                  {/* Contact CTA */}
                  <div className="mt-4 pt-4 border-t border-ice-border-subtle px-4">
                    <SheetClose asChild>
                      <Link
                        to="/contact"
                        className="block w-full text-center px-6 py-3 bg-ice-navy text-white text-xs font-bold uppercase tracking-widest rounded hover:bg-ice-teal transition-colors"
                      >
                        Contact Us
                      </Link>
                    </SheetClose>
                  </div>
                </div>

                {/* Emergency footer */}
                <div className="mt-auto p-6 bg-ice-warm-gray border-t border-ice-border-subtle">
                  <p className="text-[10px] font-bold text-ice-text-tertiary uppercase tracking-widest mb-3">
                    24/7 Emergency Line
                  </p>
                  <a href="tel:844-468-5279" className="flex items-center gap-3 text-base font-medium text-ice-text-primary">
                    <div className="w-9 h-9 rounded-lg bg-white border border-ice-border-subtle flex items-center justify-center">
                      <Phone size={16} className="text-ice-teal" />
                    </div>
                    844-INTL-CRYO
                  </a>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
