import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { NavbarV2 } from '../components/v2/NavbarV2';
import { HeroV2 } from '../components/v2/HeroV2';
import { MissionWhySection } from '../components/v2/MissionWhySection';
import { GeoSpecialFeatures } from '../components/v2/GeoSpecialFeatures';
import { ServicesSection } from '../components/v2/ServicesSection';
import { CareCategoriesSection } from '../components/v2/CareCategoriesSection';
import { ContactSection } from '../components/v2/ContactSection';
import { FooterV2 } from '../components/v2/FooterV2';
import { WhatsAppFloatingV2 } from '../components/v2/WhatsAppFloatingV2';
import { QuickInquiryDrawer } from '../components/v2/QuickInquiryDrawer';
import { EnquiryModal } from '../components/EnquiryModal';
import { GeoRegionSwitcher } from '../components/v2/GeoRegionSwitcher';
import { useGeoDetection } from '../hooks/useGeoDetection';
import { BRAND } from '../config/brand';
import { getRegionMeta, GEO_ROUTES } from '../config/regions';
import { getGeoContent } from '../data/geoContent';

export const GeoLandingPage = () => {
  const { region, country } = useParams<{ region?: string; country?: string }>();
  const navigate = useNavigate();
  const { 
    detectedRegion, 
    detectedCountry, 
    detectedCountryName, 
    isLoading: geoLoading 
  } = useGeoDetection();

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const [inquiryEmail, setInquiryEmail] = useState('');
  const [selectedTreatment, setSelectedTreatment] = useState<string>('General Medical Consultation');

  // Determine current slug from URL params:
  // /eu/:country -> country slug
  // /:region     -> region or country slug
  // /            -> 'default'
  const targetParam = (country || region || '').toLowerCase();
  const isRecognizedSlug = targetParam && (
    GEO_ROUTES.includes(targetParam) || 
    targetParam === 'default'
  );
  const currentRegion = isRecognizedSlug ? targetParam : (targetParam ? targetParam : 'default');

  const content = getGeoContent(currentRegion, detectedCountryName, detectedCountry);
  const regionMeta = getRegionMeta(currentRegion, detectedCountryName, detectedCountry);

  // Auto-redirect from root `/` based on geo-detection (only if mapped to a specific region/country)
  useEffect(() => {
    const isRoot = !region && !country;
    if (isRoot && !geoLoading && detectedRegion && detectedRegion !== 'default') {
      navigate(`/${detectedRegion}`, { replace: true });
    }
  }, [region, country, geoLoading, detectedRegion, navigate]);

  // Update document title and meta description for SEO
  useEffect(() => {
    document.title = regionMeta.metaTitle;

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', regionMeta.metaDescription);

    // Scroll to top on region change
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentRegion, regionMeta]);

  const handleOpenQuickInquiry = (email = '', treatment?: string) => {
    if (email) setInquiryEmail(email);
    if (treatment) setSelectedTreatment(treatment);
    setIsDrawerOpen(true);
  };

  const handleRegionSwitch = (newRegion: string) => {
    if (newRegion === 'default') {
      navigate('/', { replace: true });
    } else {
      navigate(`/${newRegion}`, { replace: true });
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#113830] font-jakarta selection:bg-[#0d766e] selection:text-white overflow-x-hidden">
      
      {/* Navbar with Clean Country Switcher */}
      <NavbarV2 
        brandName={BRAND.name}
        brandMonogram={BRAND.monogram}
        onOpenEnquiry={() => handleOpenQuickInquiry()}
        regionSwitcher={
          <GeoRegionSwitcher
            currentRegion={currentRegion}
            detectedCountryName={detectedCountryName}
            detectedCountryCode={detectedCountry}
            onRegionChange={handleRegionSwitch}
          />
        }
      />



      <main>
        {/* 1. Hero — Dynamic headline/subtitle/CTA per region & country */}
        <HeroV2 
          onGetQuotation={() => handleOpenQuickInquiry()}
          headline={content.heroHeadline}
          headlineAccent={content.heroHeadlineAccent}
          subtitle={content.heroSubtitle}
          ctaText={content.ctaPrimary}
          ctaSubtext={content.ctaSubtext}
        />

        {/* 2. Mission + "Why India?" — Dynamic reasons per region & country */}
        <MissionWhySection 
          brandName={BRAND.name}
          whyIndiaTitle={content.whyIndiaTitle}
          whyIndiaReasons={content.whyIndiaReasons}
        />

        {/* 3. Special Features — Selling points */}
        {content.specialFeatures && (
          <GeoSpecialFeatures 
            features={content.specialFeatures} 
            regionName={content.regionName} 
          />
        )}

        {/* 4. Services — Universal */}
        <ServicesSection />

        {/* 5. Specialized Care Categories — Universal */}
        <CareCategoriesSection onOpenEnquiry={(treatment) => handleOpenQuickInquiry('', treatment)} />

        {/* 6. Contact Form */}
        <ContactSection 
          initialTreatment={selectedTreatment}
          brandName={BRAND.name}
        />
      </main>

      {/* Footer */}
      <FooterV2 brandName={BRAND.name} />

      {/* WhatsApp Floating */}
      <WhatsAppFloatingV2 brandName={BRAND.name} />

      {/* Quick Inquiry Drawer */}
      <QuickInquiryDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        initialEmail={inquiryEmail}
        initialTreatment={selectedTreatment}
        brandName={BRAND.name}
      />

      {/* Enquiry Modal Fallback */}
      <EnquiryModal
        isOpen={isEnquiryModalOpen}
        onClose={() => setIsEnquiryModalOpen(false)}
        selectedTreatment={selectedTreatment}
      />
    </div>
  );
};
