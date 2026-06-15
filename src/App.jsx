import { useState, useCallback } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/globals.css';
import './styles/app.css';

import LoadingScreen          from './components/LoadingScreen/LoadingScreen';
import Navbar                 from './components/Navbar/Navbar';
import Hero                   from './components/Hero/Hero';
import TrustStrip             from './components/TrustStrip/TrustStrip';
import Services               from './components/Services/Services';
import About                  from './components/About/About';
import WhyRelowings           from './components/WhyRelowings/WhyRelowings';
import Process                from './components/Process/Process';
import Stats                  from './components/Stats/Stats';
import Testimonials           from './components/Testimonials/Testimonials';
import Blog                   from './components/Blog/Blog';
import CTA                    from './components/CTA/CTA';
import Contact                from './components/Contact/Contact';
import Footer                 from './components/Footer/Footer';
import FloatingButtons        from './components/FloatingButtons/FloatingButtons';
import Terms                  from './components/Terms/Terms';
import FloatingCTA            from './components/FloatingCTA/FloatingCTA';

import InternationalRelocation from './pages/services/InternationalRelocation';
import DomesticRelocation      from './pages/services/DomesticRelocation';
import VetConsultation         from './pages/services/VetConsultation';
import PetBoarding             from './pages/services/PetBoarding';
import PackersMovers           from './pages/services/PackersMovers';
import StorageFacility         from './pages/services/StorageFacility';
import BlogDetails             from './pages/BlogDetails';
function HomePage({ onOpenTerms }) {
  return (
    <div className="app">
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <TrustStrip />
        <Services />
        <About />
        <WhyRelowings />
        <Process />
        <Stats />
        <Testimonials />
        <Blog />
        <CTA />
        <Contact />
      </main>
      <Footer onOpenTerms={onOpenTerms} />
      <FloatingButtons />
      <FloatingCTA />
    </div>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);
  const [showTerms, setShowTerms] = useState(false);

  const handleLoadDone = useCallback(() => {
    setLoading(false);
  }, []);

  const openTerms  = () => setShowTerms(true);
  const closeTerms = () => setShowTerms(false);

  return (
    <BrowserRouter>
      {loading && <LoadingScreen onDone={handleLoadDone} />}

      <div style={{
        visibility: loading ? 'hidden' : 'visible',
        opacity:    loading ? 0 : 1,
        transition: 'opacity 0.4s ease',
      }}>
        <Routes>
          <Route path="/"                                  element={<HomePage onOpenTerms={openTerms} />} />
          <Route path="/services/international-relocation" element={<InternationalRelocation onOpenTerms={openTerms} />} />
          <Route path="/services/domestic-relocation"      element={<DomesticRelocation onOpenTerms={openTerms} />} />
          <Route path="/services/vet-consultation"         element={<VetConsultation onOpenTerms={openTerms} />} />
          <Route path="/services/pet-boarding"             element={<PetBoarding onOpenTerms={openTerms} />} />
          <Route path="/services/packers-movers"           element={<PackersMovers onOpenTerms={openTerms} />} />
          <Route path="/services/storage-facility"         element={<StorageFacility onOpenTerms={openTerms} />} />
          <Route path="/blog/:slug"                        element={<BlogDetails />} />
        </Routes>
      </div>

      {showTerms && <Terms onClose={closeTerms} />}
    </BrowserRouter>
  );
}