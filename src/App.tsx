import { useState } from 'react';
import { NavbarV2 } from './components/v2/NavbarV2';
import { HeroV2 } from './components/v2/HeroV2';
import { MissionWhySection } from './components/v2/MissionWhySection';
import { ServicesSection } from './components/v2/ServicesSection';
import { CareCategoriesSection } from './components/v2/CareCategoriesSection';
import { ContactSection } from './components/v2/ContactSection';
import { FooterV2 } from './components/v2/FooterV2';
import { WhatsAppFloatingV2 } from './components/v2/WhatsAppFloatingV2';
import { EnquiryModal } from './components/EnquiryModal';
import { BRAND } from './config/brand';

export function App() {
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const [selectedTreatment, setSelectedTreatment] = useState<string>('General Medical Consultation');

  const handleOpenEnquiry = (treatment?: string) => {
    if (treatment) {
      setSelectedTreatment(treatment);
    }
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      setIsEnquiryModalOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#113830] font-jakarta selection:bg-[#0d766e] selection:text-white overflow-x-hidden">
      {/* 1. Top Navbar matching uploaded design (Logo + About + Services + Treatment + Contact + Get Started) */}
      <NavbarV2 
        brandName={BRAND.name}
        brandMonogram={BRAND.monogram}
        onOpenEnquiry={() => handleOpenEnquiry()} 
      />

      <main>
        {/* 2. Hero Section: World-Class Care Meets Ancient Wisdom */}
        <HeroV2 
          onExploreTreatments={() => {
            const el = document.getElementById('treatments');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }} 
        />

        {/* 3. Page 2: Our Mission, Hospital Atrium Photo + 15+ Partners, Why India?, Our Core Values */}
        <MissionWhySection brandName={BRAND.name} />

        {/* 4. Page 3: Seamless Support, Every Step of the Way (Visa, Travel, Hospital Coordination, Pre & Post Support) */}
        <ServicesSection />

        {/* 5. Page 4: Specialized Care Categories (Dental, Wellness, Ayurveda, Orthopedics, Eye Care, Custom Inquiry) */}
        <CareCategoriesSection onOpenEnquiry={handleOpenEnquiry} />

        {/* 6. Page 5: Start Your Journey (Deep Emerald Info Card + Crisp White Enquiry Form) */}
        <ContactSection 
          initialTreatment={selectedTreatment} 
          brandName={BRAND.name}
        />
      </main>

      {/* 7. Minimalist Clean Footer matching uploaded design */}
      <FooterV2 brandName={BRAND.name} />

      {/* 8. WhatsApp Action Button matching bottom-right of uploaded design */}
      <WhatsAppFloatingV2 brandName={BRAND.name} />

      {/* Secondary Fast Modal for category triggers */}
      <EnquiryModal
        isOpen={isEnquiryModalOpen}
        onClose={() => setIsEnquiryModalOpen(false)}
        selectedTreatment={selectedTreatment}
      />
    </div>
  );
}

export default App;
