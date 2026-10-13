import { 
  EUROPEAN_COUNTRIES, 
  EUROPEAN_KEY_BY_SLUG, 
  EUROPEAN_KEY_BY_CODE,
  GULF_COUNTRIES,
  GULF_KEY_BY_SLUG,
  ISO_COUNTRY_NAMES
} from '../config/regions';

// ─── Type Definitions ─────────────────────────────────────────────

export interface WhyIndiaItem {
  title: string;
  description: string;
}

export interface GeoSpecialFeature {
  icon: string; // Lucide icon name
  title: string;
  description: string;
}

export interface GeoRegionContent {
  slug: string;
  regionName: string;
  flag: string;

  // Hero Section
  heroHeadline: string;
  heroHeadlineAccent: string;
  heroSubtitle: string;
  ctaPrimary: string;
  ctaSubtext: string;

  // "Why India?" Section
  whyIndiaTitle: string;
  whyIndiaReasons: WhyIndiaItem[];

  // Region-specific features
  specialFeatures?: GeoSpecialFeature[];
}

// ─── Helper for Unified UK & European Waiting Context Content ────
function createWaitingContextContent(slug: string, regionName: string): GeoRegionContent {
  return {
    slug,
    regionName,
    flag: '',

    heroHeadline: 'Why Wait When You Can',
    heroHeadlineAccent: 'Heal Sooner in India.',
    heroSubtitle: `Long waiting periods for elective surgeries and specialist consultations in ${regionName} shouldn't delay your healing. India offers immediate access to internationally accredited hospitals with zero wait times.`,
    ctaPrimary: 'Get Quotation',
    ctaSubtext: 'No commitment. Speak with a dedicated medical coordinator within 24 hours.',

    whyIndiaTitle: `Why Patients in ${regionName} Choose India`,
    whyIndiaReasons: [
      {
        title: 'Avoid Long Waiting Periods',
        description: `Elective procedures and specialist consultations in ${regionName} often involve months of waiting. In India, specialist consultations happen within days and surgery is scheduled within weeks.`,
      },
      {
        title: 'Significant Cost Savings vs Private Care',
        description: `Private treatment in ${regionName} can be prohibitively expensive. India offers equivalent surgical expertise at JCI and NABH accredited hospitals at a fraction of private European costs.`,
      },
      {
        title: 'Internationally Trained Surgeons',
        description: 'Leading Indian surgical directors hold fellowships from the Royal College of Surgeons (FRCS) and leading institutions in the UK, US, and globally, ensuring the highest standards of clinical care.',
      },
    ],

    specialFeatures: [
      {
        icon: 'Clock',
        title: 'Fast-Track Scheduling',
        description: 'Treatment scheduled within 2 to 3 weeks of reviewing your medical scans. No lengthy referral queues.',
      },
      {
        icon: 'Shield',
        title: 'JCI & NABH Accreditation',
        description: 'Partner hospitals hold Joint Commission International and NABH accreditations — the gold standards for clinical safety and infection control.',
      },
      {
        icon: 'GraduationCap',
        title: 'Globally Trained Surgeons',
        description: 'Access surgical directors holding FRCS and international qualifications with decades of clinical experience.',
      },
    ],
  };
}

// ─── Helper for Gulf Countries Content ────────────────────────────
function createGulfContent(slug: string, countryName: string): GeoRegionContent {
  return {
    slug,
    regionName: countryName,
    flag: '',

    heroHeadline: 'World-Class Care.',
    heroHeadlineAccent: 'Culturally Understood.',
    heroSubtitle: `Advanced medical specialties, cultural comfort, dedicated Arabic-speaking coordinators, and premium private hospital suites — just a short direct flight away for patients from ${countryName}.`,
    ctaPrimary: 'Get Quotation',
    ctaSubtext: 'Arabic-speaking coordinators available. Direct response within 12 hours.',

    whyIndiaTitle: `Why Patients in ${countryName} Trust India`,
    whyIndiaReasons: [
      {
        title: 'Advanced Quaternary Specialties',
        description: 'Direct access to renowned surgical teams for complex organ transplants, robotic joint replacements, advanced oncology, and pediatric cardiac surgery.',
      },
      {
        title: 'Cultural Comfort at Every Step',
        description: '100% Halal meal options, dedicated prayer rooms, Arabic-speaking patient coordinators, and female medical staff available upon request.',
      },
      {
        title: 'Affordable Relative to Private Gulf Clinics',
        description: 'Receive quaternary-level care at accredited hospital centres with substantial cost advantages compared to private clinics in the Gulf.',
      },
      {
        title: 'Short Flight & Express Medical Visa',
        description: 'Direct flights take only 3 to 4 hours. Indian e-Medical Visas are processed quickly for GCC nationals and residents.',
      },
    ],

    specialFeatures: [
      {
        icon: 'Moon',
        title: 'Cultural & Religious Comfort',
        description: 'Halal-certified hospital dining, prayer room facilities, and culturally trained medical and nursing staff.',
      },
      {
        icon: 'Users',
        title: 'Family Suite Accommodations',
        description: 'Comfortable accommodation arrangements for accompanying family members and private executive recovery suites.',
      },
      {
        icon: 'Plane',
        title: 'Direct Short-Haul Flights',
        description: 'Just 3 to 4 hours flight time with VIP airport pick-up and private transfers to your hospital.',
      },
    ],
  };
}

// ─── Core Region Content Data ─────────────────────────────────────

export const GEO_CONTENT: Record<string, GeoRegionContent> = {

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // UNITED KINGDOM (Theme: Waiting Period)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  uk: createWaitingContextContent('uk', 'the United Kingdom'),

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // EUROPE (Theme: Waiting Period)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  eu: createWaitingContextContent('eu', 'Europe'),

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // UAE & GULF (Theme: All Things — Quaternary Care, Halal, Cultural Comfort, Proximity)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  uae: createGulfContent('uae', 'UAE'),
  gulf: createGulfContent('gulf', 'the Gulf'),

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // AFRICA (Theme: Healthcare Infrastructure & Specialist Access)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  africa: {
    slug: 'africa',
    regionName: 'Africa',
    flag: '',

    heroHeadline: 'Access the Advanced Care',
    heroHeadlineAccent: 'You Deserve.',
    heroSubtitle: 'Access super-specialist doctors, modern surgical technology, and world-class hospital infrastructure in India. We coordinate your medical travel from visa to full recovery.',
    ctaPrimary: 'Get Quotation',
    ctaSubtext: 'Free medical guidance and hospital options within 24 hours.',

    whyIndiaTitle: 'Why African Patients Choose India',
    whyIndiaReasons: [
      {
        title: 'Access to Super-Specialist Surgeons',
        description: 'India boasts experienced surgical faculties across complex oncology, neurosurgery, robotic joint replacement, and organ transplantation that may have limited availability locally.',
      },
      {
        title: 'Modern Hospital Infrastructure',
        description: 'JCI and NABH accredited hospitals equipped with advanced robotic surgical suites, PET-CT diagnostics, and ultra-clean HEPA operating theatres matching the best Western centres.',
      },
      {
        title: 'Dedicated Medical Visa Support',
        description: 'Step-by-step assistance with official hospital invitation letters and visa liaison to ensure smooth, prompt entry for patients and their attendants.',
      },
      {
        title: 'Affordable Alternative to Flying West',
        description: 'Avoid the exorbitant costs of travel and medical care in North America or Western Europe while receiving the same caliber of clinical expertise.',
      },
    ],

    specialFeatures: [
      {
        icon: 'FileCheck',
        title: 'Medical Visa Assistance',
        description: 'Prompt hospital visa invitation letters and comprehensive documentation support for patients and companions.',
      },
      {
        icon: 'Video',
        title: 'Telemedicine Follow-Up',
        description: 'Post-treatment virtual consultations with your operating surgeon after returning home, ensuring long-term healing continuity.',
      },
      {
        icon: 'Home',
        title: 'Companion Accommodations',
        description: 'Clean, secure guest houses and serviced apartments near hospital campuses for family members throughout the stay.',
      },
    ],
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // DEFAULT / DETECTED COUNTRY (Personalized to detected country, e.g. India)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  default: {
    slug: 'default',
    regionName: 'India',
    flag: '',

    heroHeadline: 'World-Class Care Meets',
    heroHeadlineAccent: 'Ancient Wisdom.',
    heroSubtitle: 'Your seamless journey to health and wellness in India. We coordinate hospital appointments, top surgical teams, and restful recuperation so you can focus on healing.',
    ctaPrimary: 'Get Quotation',
    ctaSubtext: 'No commitment. Confidential review and guidance within 24 hours.',

    whyIndiaTitle: 'Why Patients in India Choose IndiaCareTrip',
    whyIndiaReasons: [
      {
        title: 'Clinical Excellence at Accredited Hospitals',
        description: 'Partner hospitals hold JCI and NABH accreditations, featuring cutting-edge robotic surgical suites, advanced diagnostics, and internationally trained clinical faculties.',
      },
      {
        title: 'Transparent Pricing & Priority Scheduling',
        description: 'Transparent treatment packages with zero surprise bills, comprehensive coordination, and priority scheduling at premier quaternary care hospitals.',
      },
      {
        title: 'Integrated Healing & Recuperation',
        description: 'Complement modern surgical procedures with traditional restorative wellness like Ayurveda and Yoga in Kerala’s serene natural sanctuaries.',
      },
    ],
  },
};

/**
 * Universal content getter supporting all regions, European countries, Gulf countries, and detected country
 */
export function getGeoContent(
  slug: string, 
  detectedCountryName?: string, 
  detectedCountryCode?: string
): GeoRegionContent {
  const normalized = (slug || 'default').toLowerCase();

  // 1. Direct core matches
  if (normalized === 'uk') return GEO_CONTENT.uk;
  if (normalized === 'africa') return GEO_CONTENT.africa;
  if (normalized === 'eu') return GEO_CONTENT.eu;

  // 2. Gulf Countries match (UAE, Saudi Arabia, Oman, Qatar, Kuwait, Bahrain)
  const gulfKey = GULF_KEY_BY_SLUG[normalized];
  if (gulfKey && GULF_COUNTRIES[gulfKey]) {
    const gulf = GULF_COUNTRIES[gulfKey];
    return createGulfContent(gulf.slug, gulf.name);
  }

  // 3. European country match — Uses the identical waiting context across all European countries
  const euKey = EUROPEAN_KEY_BY_SLUG[normalized] || EUROPEAN_KEY_BY_CODE[normalized.toUpperCase()];
  if (euKey && EUROPEAN_COUNTRIES[euKey]) {
    const eu = EUROPEAN_COUNTRIES[euKey];
    return createWaitingContextContent(eu.slug, eu.name);
  }

  // 4. Default fallback with IP detected country personalization
  let resolvedCountry = detectedCountryName && detectedCountryName.trim().length > 0 
    ? detectedCountryName 
    : '';
  if (!resolvedCountry && detectedCountryCode) {
    resolvedCountry = ISO_COUNTRY_NAMES[detectedCountryCode.toUpperCase()] || '';
  }
  if (!resolvedCountry || resolvedCountry.toLowerCase() === 'global' || resolvedCountry.toLowerCase() === 'international') {
    resolvedCountry = 'India';
  }

  const baseDefault = GEO_CONTENT.default;
  return {
    ...baseDefault,
    regionName: resolvedCountry,
    flag: '',
    ctaPrimary: 'Get Quotation',
    heroSubtitle: `Your seamless journey to health and wellness in India for patients from ${resolvedCountry}. We coordinate top hospital appointments, specialist surgeons, and restful recovery.`,
    whyIndiaTitle: `Why Patients from ${resolvedCountry} Choose India`,
  };
}
