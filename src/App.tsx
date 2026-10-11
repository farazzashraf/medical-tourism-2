import { useState } from 'react';
import { NavbarV2 } from './components/v2/NavbarV2';
import { HeroV2 } from './components/v2/HeroV2';
import { MissionWhySection } from './components/v2/MissionWhySection';
import { ServicesSection } from './components/v2/ServicesSection';
import { CareCategoriesSection } from './components/v2/CareCategoriesSection';
import { ContactSection } from './components/v2/ContactSection';
import { FooterV2 } from './components/v2/FooterV2';
import { WhatsAppFloatingV2 } from './components/v2/WhatsAppFloatingV2';
import { QuickInquiryDrawer } from './components/v2/QuickInquiryDrawer';
import { EnquiryModal } from './components/EnquiryModal';
import { BRAND } from './config/brand';

export function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const [inquiryEmail, setInquiryEmail] = useState('');
  const [selectedTreatment, setSelectedTreatment] = useState<string>('General Medical Consultation');

  const handleOpenQuickInquiry = (email = '', treatment?: string) => {
    if (email) setInquiryEmail(email);
    if (treatment) setSelectedTreatment(treatment);
    setIsDrawerOpen(true);
  };

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
      {/* 1. Top Navbar (Logo + About + Services + Treatment + Contact + Get Started) */}
      <NavbarV2 
        brandName={BRAND.name}
        brandMonogram={BRAND.monogram}
        onOpenEnquiry={() => handleOpenQuickInquiry()} 
      />

      <main>
        {/* 2. Hero Section: Quick Inquiry Search-Bar Widget & Headline */}
        <HeroV2 
          onQuickConsultation={(email) => handleOpenQuickInquiry(email)} 
        />

        {/* 3. Page 2: Our Mission, Hospital Atrium Photo + 15+ Partners, Why India?, Our Core Values */}
        <MissionWhySection brandName={BRAND.name} />

        {/* 4. Page 3: Seamless Support, Every Step of the Way (Visa, Travel, Hospital Coordination, Pre & Post Support) */}
        <ServicesSection />

        {/* 5. Page 4: Specialized Care Categories (Dental, Wellness, Ayurveda, Orthopedics, Eye Care, Custom Inquiry) */}
        <CareCategoriesSection onOpenEnquiry={(treatment) => handleOpenQuickInquiry('', treatment)} />

        {/* 6. Page 5: Start Your Journey (Deep Emerald Info Card + Crisp White Enquiry Form) */}
        <ContactSection 
          initialTreatment={selectedTreatment} 
          brandName={BRAND.name}
        />
      </main>

      {/* 7. Minimalist Clean Footer */}
      <FooterV2 brandName={BRAND.name} />

      {/* 8. WhatsApp Action Button */}
      <WhatsAppFloatingV2 brandName={BRAND.name} />

      {/* Slide-out Instant Inquiry Drawer from right */}
      <QuickInquiryDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        initialEmail={inquiryEmail}
        initialTreatment={selectedTreatment}
        brandName={BRAND.name}
      />

      {/* Secondary Fast Modal for fallback */}
      <EnquiryModal
        isOpen={isEnquiryModalOpen}
        onClose={() => setIsEnquiryModalOpen(false)}
        selectedTreatment={selectedTreatment}
      />
    </div>
  );
}

export default App;
