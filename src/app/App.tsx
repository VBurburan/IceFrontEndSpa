import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, lazy, Suspense } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Navbar } from "@/app/components/Navbar";
import { Hero } from "@/app/components/Hero";
import { WhatWeDo } from "@/app/components/WhatWeDo";
import { International } from "@/app/components/International";
import { Leadership } from "@/app/components/Leadership";
import { Services } from "@/app/components/Services";
import { Contact } from "@/app/components/Contact";
import { Footer } from "@/app/components/Footer";
import { BackToTop } from "@/app/components/BackToTop";
import { EmergencyCTA } from "@/app/components/EmergencyCTA";
import { ReadingProgress } from "@/app/components/ReadingProgress";
import { PageLoader } from "@/app/components/PageLoader";

const LogisticsPage = lazy(() => import('@/app/pages/LogisticsPage'));
const LegalPage = lazy(() => import('@/app/pages/LegalPage'));
const NotFoundPage = lazy(() => import('@/app/pages/NotFoundPage'));
const AboutPage = lazy(() => import('@/app/pages/AboutPage'));
const ServicesPage = lazy(() => import('@/app/pages/ServicesPage'));
const ProcessPage = lazy(() => import('@/app/pages/ProcessPage'));
const ContactPage = lazy(() => import('@/app/pages/ContactPage'));

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2, ease: 'easeInOut' }}
      >
        <Suspense fallback={<PageLoader />}>
          <Routes location={location}>
            <Route path="/" element={<HomePage />} />
            <Route path="/logistics" element={<LogisticsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/process" element={<ProcessPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/legal/:slug" element={<LegalPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </motion.div>
    </AnimatePresence>
  );
}

function HomePage() {
  return (
    <>
      <Hero />
      <WhatWeDo />
      <International />
      <Leadership />
      <Services />
      <Contact />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-ice-warm-white font-sans text-ice-text-primary">
        <a href="#main-content" className="skip-to-content">Skip to main content</a>
        <ReadingProgress />
        <ScrollToTop />
        <Navbar />

        <main id="main-content">
          <AnimatedRoutes />
        </main>

        <Footer />
        <BackToTop />
        <EmergencyCTA />
      </div>
    </BrowserRouter>
  );
}
