import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SpecialtiesBento } from './components/SpecialtiesBento';
import { WhyChooseSection } from './components/WhyChooseSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { AccreditationMarquee } from './components/AccreditationMarquee';
import { CtaBanner } from './components/CtaBanner';
import { StatsStrip } from './components/StatsStrip';
import { JourneySection } from './components/JourneySection';
import { PackagesSection } from './components/PackagesSection';
import { HospitalsDoctors } from './components/HospitalsDoctors';
import { HealFasterSection } from './components/HealFasterSection';
import { FaqSection } from './components/FaqSection';
import { DoctorsBlog } from './components/DoctorsBlog';
import { EnquirySection } from './components/EnquirySection';
import { EnquiryModal } from './components/EnquiryModal';
import { VideoModal } from './components/VideoModal';
import { WhatsAppFloating } from './components/WhatsAppFloating';
import { Footer } from './components/Footer';
import { SpecialtyPage } from './components/SpecialtyPage';

export function App() {
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [selectedTreatment, setSelectedTreatment] = useState<string>('ortho');
  const [currentPath, setCurrentPath] = useState<string>(() => window.location.pathname || '/');

  // Handle browser back and forward button events
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (path: string) => {
    window.history.pushState(null, '', path);
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenEnquiry = (treatment?: string) => {
    if (treatment && treatment !== 'all') {
      setSelectedTreatment(treatment);
    }
    // If on homepage and the enquiry section exists, smoothly scroll to it
    if (currentPath === '/' && document.getElementById('enquiry')) {
      document.getElementById('enquiry')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      setIsEnquiryModalOpen(true);
    }
  };

  const handleCloseEnquiry = () => {
    setIsEnquiryModalOpen(false);
  };

  // Check if current route is a specialty page
  const isSpecialtyPage = currentPath.startsWith('/specialties/');
  const specialtySlug = isSpecialtyPage 
    ? currentPath.replace('/specialties/', '').replace(/\/$/, '') 
    : '';

  return (
    <div className="min-h-screen bg-white text-[#132520] font-jakarta selection:bg-[#183f34] selection:text-white">
      {/* Sticky Header matching CareKerala design */}
      <Navbar 
        onOpenEnquiry={handleOpenEnquiry} 
        onNavigate={navigateTo}
        currentRoute={currentPath}
      />

      <main>
        {isSpecialtyPage ? (
          /* Dedicated Specialty Page */
          <SpecialtyPage
            slug={specialtySlug}
            onOpenEnquiry={handleOpenEnquiry}
            onNavigateSpecialty={(slug) => navigateTo(`/specialties/${slug}`)}
            onGoHome={() => navigateTo('/')}
          />
        ) : (
          /* Full Homepage with CareKerala hierarchy */
          <>
            {/* Section 1: Hero with Organic Backwaters Mask, Script flourish & Search Bar */}
            <Hero 
              onOpenEnquiry={handleOpenEnquiry} 
              onOpenVideo={() => setIsVideoModalOpen(true)}
              onNavigate={navigateTo}
            />

            {/* Section 2: Popular Treatments (Dental, Ortho, Ayurvedic, Cosmetic, Eyes) */}
            <SpecialtiesBento 
              onOpenEnquiry={handleOpenEnquiry} 
              onNavigate={navigateTo}
            />

            {/* Section 3: Why Choose Kerala for Your Treatment? (6 Feature Badges & Backwaters View) */}
            <WhyChooseSection />

            {/* Section 4: Hear from Our Patients (Verified Testimonials with Controls) */}
            <TestimonialsSection />

            {/* Section 5: Our Hospital Partners (Aster, VPS, KIMS, Rajagiri, Amrita, SUT) */}
            <AccreditationMarquee />

            {/* Section 6: Plan Your Treatment in Kerala Today (Signature Panoramic CTA Banner) */}
            <CtaBanner onOpenEnquiry={() => handleOpenEnquiry()} />

            {/* Section 7: Stats Counter Strip with Deep Emerald Background */}
            <StatsStrip />

            {/* Section 8: Your Journey to Wellness (3-Phase Interactive Patient Pathway) */}
            <JourneySection onOpenEnquiry={() => handleOpenEnquiry()} />

            {/* Section 9: Curated Treatment Packages */}
            <PackagesSection onOpenEnquiry={handleOpenEnquiry} />

            {/* Section 10: Hospitals & Doctors Directory */}
            <HospitalsDoctors 
              onOpenEnquiry={handleOpenEnquiry} 
              onNavigate={navigateTo}
            />

            {/* Section 11: Heal Faster in Nature's Lap (Serene Convalescence) */}
            <HealFasterSection onOpenEnquiry={() => handleOpenEnquiry()} />

            {/* Section 12: Frequently Asked Questions (Accordion) */}
            <FaqSection />

            {/* Section 13: Clinical Insights & Articles (Blog) */}
            <DoctorsBlog onOpenEnquiry={handleOpenEnquiry} />

            {/* Section 14: Main Enquiry Form Section */}
            <EnquirySection initialTreatment={selectedTreatment} />
          </>
        )}
      </main>

      {/* Modern Deep Emerald Footer */}
      <Footer 
        onOpenEnquiry={handleOpenEnquiry} 
        onNavigate={navigateTo}
      />

      {/* Floating WhatsApp Action Button */}
      <WhatsAppFloating />

      {/* Interactive Enquiry Modal */}
      <EnquiryModal
        isOpen={isEnquiryModalOpen}
        onClose={handleCloseEnquiry}
        selectedTreatment={selectedTreatment}
      />

      {/* Video Modal Preview */}
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        title="Discover Healthcare & Healing in Kerala"
      />
    </div>
  );
}

export default App;
