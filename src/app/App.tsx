import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Navbar } from "@/app/components/Navbar";
import { Hero } from "@/app/components/Hero";
import { WhatWeDo } from "@/app/components/WhatWeDo";
import { International } from "@/app/components/International";
import { Leadership } from "@/app/components/Leadership";
import { Services } from "@/app/components/Services";
import { Contact } from "@/app/components/Contact";
import { Footer } from "@/app/components/Footer";
import { LogisticsPage } from "@/app/pages/LogisticsPage";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
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
      <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-cyan-100 selection:text-cyan-900">
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Outfit:wght@200;300;400;500;600&display=swap');
          
          :root {
            --font-sans: 'Inter', sans-serif;
            --font-display: 'Outfit', sans-serif;
          }

          html { 
            scroll-behavior: smooth; 
          }

          body {
            font-family: var(--font-sans);
          }

          h1, h2, h3, h4, h5, h6 {
            font-family: var(--font-display);
          }

          /* Custom Scrollbar */
          ::-webkit-scrollbar {
            width: 10px;
          }
          ::-webkit-scrollbar-track {
            background: #f1f5f9;
          }
          ::-webkit-scrollbar-thumb {
            background: #cbd5e1;
            border-radius: 5px;
          }
          ::-webkit-scrollbar-thumb:hover {
            background: #94a3b8;
          }
        `}</style>
        
        <ScrollToTop />
        <Navbar />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/logistics" element={<LogisticsPage />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
