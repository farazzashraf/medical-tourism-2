// Region and country types used across the application

export type CoreRegionSlug = 'uk' | 'eu' | 'gulf' | 'uae' | 'africa' | 'default';

export interface RegionMeta {
  slug: string;
  name: string;
  flag: string;
  hreflang: string;
  metaTitle: string;
  metaDescription: string;
  defaultCountryCode: string;
  isEuropean?: boolean;
}

export interface EuropeanCountryInfo {
  code: string;           // ISO 2-letter e.g. "DE"
  slug: string;           // e.g. "germany"
  shortSlug: string;      // e.g. "de"
  name: string;           // e.g. "Germany"
  nativeName: string;     // e.g. "Deutschland"
  phoneCode: string;      // e.g. "+49"
  waitingContext: string;
}

export interface GulfCountryInfo {
  code: string;           // ISO 2-letter e.g. "AE"
  slug: string;           // e.g. "uae"
  shortSlug: string;      // e.g. "ae"
  name: string;           // e.g. "UAE"
  phoneCode: string;      // e.g. "+971"
}

// ─── ISO Country Code to Full Name Dictionary ─────────────────────
export const ISO_COUNTRY_NAMES: Record<string, string> = {
  IN: 'India',
  GB: 'United Kingdom',
  US: 'United States',
  CA: 'Canada',
  AU: 'Australia',
  AE: 'UAE',
  SA: 'Saudi Arabia',
  OM: 'Oman',
  KW: 'Kuwait',
  QA: 'Qatar',
  BH: 'Bahrain',
  DE: 'Germany',
  FR: 'France',
  IE: 'Ireland',
  NL: 'Netherlands',
  ES: 'Spain',
  IT: 'Italy',
  CH: 'Switzerland',
  SE: 'Sweden',
  NO: 'Norway',
  DK: 'Denmark',
  FI: 'Finland',
  AT: 'Austria',
  BE: 'Belgium',
  PL: 'Poland',
  PT: 'Portugal',
  GR: 'Greece',
  CZ: 'Czech Republic',
  RO: 'Romania',
  HU: 'Hungary',
  HR: 'Croatia',
  NZ: 'New Zealand',
  SG: 'Singapore',
  MY: 'Malaysia',
  ZA: 'South Africa',
  KE: 'Kenya',
  NG: 'Nigeria',
  GH: 'Ghana',
  TZ: 'Tanzania',
  UG: 'Uganda',
  ET: 'Ethiopia',
};

// ─── Unified Waiting Context for all European & UK Countries ──────
export const UNIFIED_WAITING_CONTEXT = 'long waiting periods for elective surgeries and specialist consultations';

// ─── Gulf / GCC Countries Configuration ───────────────────────────
export const GULF_COUNTRIES: Record<string, GulfCountryInfo> = {
  uae: {
    code: 'AE',
    slug: 'uae',
    shortSlug: 'ae',
    name: 'UAE',
    phoneCode: '+971',
  },
  'saudi-arabia': {
    code: 'SA',
    slug: 'saudi-arabia',
    shortSlug: 'sa',
    name: 'Saudi Arabia',
    phoneCode: '+966',
  },
  oman: {
    code: 'OM',
    slug: 'oman',
    shortSlug: 'om',
    name: 'Oman',
    phoneCode: '+968',
  },
  qatar: {
    code: 'QA',
    slug: 'qatar',
    shortSlug: 'qa',
    name: 'Qatar',
    phoneCode: '+974',
  },
  kuwait: {
    code: 'KW',
    slug: 'kuwait',
    shortSlug: 'kw',
    name: 'Kuwait',
    phoneCode: '+965',
  },
  bahrain: {
    code: 'BH',
    slug: 'bahrain',
    shortSlug: 'bh',
    name: 'Bahrain',
    phoneCode: '+973',
  },
};

export const GULF_KEY_BY_SLUG: Record<string, string> = {
  uae: 'uae',
  ae: 'uae',
  gulf: 'uae',
  'saudi-arabia': 'saudi-arabia',
  saudi: 'saudi-arabia',
  sa: 'saudi-arabia',
  oman: 'oman',
  om: 'oman',
  qatar: 'qatar',
  qa: 'qatar',
  kuwait: 'kuwait',
  kw: 'kuwait',
  bahrain: 'bahrain',
  bh: 'bahrain',
};

// ─── European Countries Configuration ─────────────────────────────
export const EUROPEAN_COUNTRIES: Record<string, EuropeanCountryInfo> = {
  germany: {
    code: 'DE',
    slug: 'germany',
    shortSlug: 'de',
    name: 'Germany',
    nativeName: 'Deutschland',
    phoneCode: '+49',
    waitingContext: UNIFIED_WAITING_CONTEXT,
  },
  france: {
    code: 'FR',
    slug: 'france',
    shortSlug: 'fr',
    name: 'France',
    nativeName: 'France',
    phoneCode: '+33',
    waitingContext: UNIFIED_WAITING_CONTEXT,
  },
  ireland: {
    code: 'IE',
    slug: 'ireland',
    shortSlug: 'ie',
    name: 'Ireland',
    nativeName: 'Éire',
    phoneCode: '+353',
    waitingContext: UNIFIED_WAITING_CONTEXT,
  },
  netherlands: {
    code: 'NL',
    slug: 'netherlands',
    shortSlug: 'nl',
    name: 'Netherlands',
    nativeName: 'Nederland',
    phoneCode: '+31',
    waitingContext: UNIFIED_WAITING_CONTEXT,
  },
  spain: {
    code: 'ES',
    slug: 'spain',
    shortSlug: 'es',
    name: 'Spain',
    nativeName: 'España',
    phoneCode: '+34',
    waitingContext: UNIFIED_WAITING_CONTEXT,
  },
  italy: {
    code: 'IT',
    slug: 'italy',
    shortSlug: 'it',
    name: 'Italy',
    nativeName: 'Italia',
    phoneCode: '+39',
    waitingContext: UNIFIED_WAITING_CONTEXT,
  },
  switzerland: {
    code: 'CH',
    slug: 'switzerland',
    shortSlug: 'ch',
    name: 'Switzerland',
    nativeName: 'Schweiz / Suisse',
    phoneCode: '+41',
    waitingContext: UNIFIED_WAITING_CONTEXT,
  },
  sweden: {
    code: 'SE',
    slug: 'sweden',
    shortSlug: 'se',
    name: 'Sweden',
    nativeName: 'Sverige',
    phoneCode: '+46',
    waitingContext: UNIFIED_WAITING_CONTEXT,
  },
  norway: {
    code: 'NO',
    slug: 'norway',
    shortSlug: 'no',
    name: 'Norway',
    nativeName: 'Norge',
    phoneCode: '+47',
    waitingContext: UNIFIED_WAITING_CONTEXT,
  },
  denmark: {
    code: 'DK',
    slug: 'denmark',
    shortSlug: 'dk',
    name: 'Denmark',
    nativeName: 'Danmark',
    phoneCode: '+45',
    waitingContext: UNIFIED_WAITING_CONTEXT,
  },
  finland: {
    code: 'FI',
    slug: 'finland',
    shortSlug: 'fi',
    name: 'Finland',
    nativeName: 'Suomi',
    phoneCode: '+358',
    waitingContext: UNIFIED_WAITING_CONTEXT,
  },
  austria: {
    code: 'AT',
    slug: 'austria',
    shortSlug: 'at',
    name: 'Austria',
    nativeName: 'Österreich',
    phoneCode: '+43',
    waitingContext: UNIFIED_WAITING_CONTEXT,
  },
  belgium: {
    code: 'BE',
    slug: 'belgium',
    shortSlug: 'be',
    name: 'Belgium',
    nativeName: 'Belgique / België',
    phoneCode: '+32',
    waitingContext: UNIFIED_WAITING_CONTEXT,
  },
  poland: {
    code: 'PL',
    slug: 'poland',
    shortSlug: 'pl',
    name: 'Poland',
    nativeName: 'Polska',
    phoneCode: '+48',
    waitingContext: UNIFIED_WAITING_CONTEXT,
  },
  portugal: {
    code: 'PT',
    slug: 'portugal',
    shortSlug: 'pt',
    name: 'Portugal',
    nativeName: 'Portugal',
    phoneCode: '+351',
    waitingContext: UNIFIED_WAITING_CONTEXT,
  },
  greece: {
    code: 'GR',
    slug: 'greece',
    shortSlug: 'gr',
    name: 'Greece',
    nativeName: 'Ελλάδα',
    phoneCode: '+30',
    waitingContext: UNIFIED_WAITING_CONTEXT,
  },
  czechia: {
    code: 'CZ',
    slug: 'czechia',
    shortSlug: 'cz',
    name: 'Czech Republic',
    nativeName: 'Česká republika',
    phoneCode: '+420',
    waitingContext: UNIFIED_WAITING_CONTEXT,
  },
  romania: {
    code: 'RO',
    slug: 'romania',
    shortSlug: 'ro',
    name: 'Romania',
    nativeName: 'România',
    phoneCode: '+40',
    waitingContext: UNIFIED_WAITING_CONTEXT,
  },
  hungary: {
    code: 'HU',
    slug: 'hungary',
    shortSlug: 'hu',
    name: 'Hungary',
    nativeName: 'Magyarország',
    phoneCode: '+36',
    waitingContext: UNIFIED_WAITING_CONTEXT,
  },
  croatia: {
    code: 'HR',
    slug: 'croatia',
    shortSlug: 'hr',
    name: 'Croatia',
    nativeName: 'Hrvatska',
    phoneCode: '+385',
    waitingContext: UNIFIED_WAITING_CONTEXT,
  },
};

// Quick lookup mapping for country code or short slug to European Country key
export const EUROPEAN_KEY_BY_CODE: Record<string, string> = {};
export const EUROPEAN_KEY_BY_SLUG: Record<string, string> = {};

Object.entries(EUROPEAN_COUNTRIES).forEach(([key, info]) => {
  EUROPEAN_KEY_BY_CODE[info.code] = key;
  EUROPEAN_KEY_BY_SLUG[info.slug] = key;
  EUROPEAN_KEY_BY_SLUG[info.shortSlug] = key;
});

// ─── Base Regions Metadata ─────────────────────────────────────────
export const BASE_REGIONS: Record<string, RegionMeta> = {
  uk: {
    slug: 'uk',
    name: 'United Kingdom',
    flag: '',
    hreflang: 'en-GB',
    metaTitle: 'Medical Tourism India for UK Patients | IndiaCareTrip',
    metaDescription: `Avoid ${UNIFIED_WAITING_CONTEXT}. World-class specialist treatment in India within weeks at JCI-accredited hospitals.`,
    defaultCountryCode: '+44',
  },
  eu: {
    slug: 'eu',
    name: 'Europe',
    flag: '',
    hreflang: 'en',
    metaTitle: 'Medical Tourism India for European Patients | IndiaCareTrip',
    metaDescription: `Avoid ${UNIFIED_WAITING_CONTEXT}. Immediate specialist access and world-class care in India within weeks at JCI-accredited hospitals.`,
    defaultCountryCode: '+49',
  },
  uae: {
    slug: 'uae',
    name: 'UAE',
    flag: '',
    hreflang: 'en',
    metaTitle: 'Medical Tourism India for UAE Patients | IndiaCareTrip',
    metaDescription: 'Advanced quaternary care, Halal meals, Arabic-speaking coordinators, and direct 3-4 hour flights for UAE patients.',
    defaultCountryCode: '+971',
  },
  gulf: {
    slug: 'gulf',
    name: 'Gulf',
    flag: '',
    hreflang: 'en',
    metaTitle: 'Medical Tourism India for Gulf Patients | IndiaCareTrip',
    metaDescription: 'Advanced quaternary care, Halal meals, Arabic-speaking coordinators, and direct 3-4 hour flights for Gulf patients.',
    defaultCountryCode: '+971',
  },
  africa: {
    slug: 'africa',
    name: 'Africa',
    flag: '',
    hreflang: 'en',
    metaTitle: 'Medical Tourism India for African Patients | IndiaCareTrip',
    metaDescription: 'Access super-specialist surgeons, advanced robotic surgical technology, and world-class hospital infrastructure in India.',
    defaultCountryCode: '+254',
  },
  default: {
    slug: 'default',
    name: 'India',
    flag: '',
    hreflang: 'en',
    metaTitle: 'IndiaCareTrip | World-Class Medical Tourism in India',
    metaDescription: 'Your seamless journey to health and wellness in India. We coordinate everything from hospital appointments to recovery.',
    defaultCountryCode: '+91',
  },
};

// Aliases for REGIONS lookup
export const REGIONS: Record<string, RegionMeta> = { ...BASE_REGIONS };

/**
 * Get comprehensive metadata for any region, European country, or Gulf country
 */
export function getRegionMeta(
  slug: string, 
  detectedCountryName?: string, 
  detectedCountryCode?: string
): RegionMeta {
  const normalized = slug.toLowerCase();

  // 1. Direct match in base regions
  if (normalized === 'uk') return BASE_REGIONS.uk;
  if (normalized === 'africa') return BASE_REGIONS.africa;
  if (normalized === 'eu') return BASE_REGIONS.eu;

  // 2. Gulf Countries match
  const gulfKey = GULF_KEY_BY_SLUG[normalized];
  if (gulfKey && GULF_COUNTRIES[gulfKey]) {
    const gulf = GULF_COUNTRIES[gulfKey];
    return {
      slug: gulf.slug,
      name: gulf.name,
      flag: '',
      hreflang: `en-${gulf.code}`,
      metaTitle: `Medical Tourism India for ${gulf.name} Patients | IndiaCareTrip`,
      metaDescription: `Advanced quaternary care, Halal meals, Arabic-speaking coordinators, and direct 3-4 hour flights for ${gulf.name} patients.`,
      defaultCountryCode: gulf.phoneCode,
    };
  }

  // 3. European country match
  const euKey = EUROPEAN_KEY_BY_SLUG[normalized] || EUROPEAN_KEY_BY_CODE[normalized.toUpperCase()];
  if (euKey && EUROPEAN_COUNTRIES[euKey]) {
    const eu = EUROPEAN_COUNTRIES[euKey];
    return {
      slug: eu.slug,
      name: eu.name,
      flag: '',
      hreflang: `en-${eu.code}`,
      metaTitle: `Medical Tourism India for Patients in ${eu.name} | IndiaCareTrip`,
      metaDescription: `Avoid ${UNIFIED_WAITING_CONTEXT}. Access immediate specialist care and JCI-accredited hospitals in India within weeks.`,
      defaultCountryCode: eu.phoneCode,
      isEuropean: true,
    };
  }

  // 4. Fallback / Default
  let displayName = detectedCountryName && detectedCountryName.trim().length > 0 ? detectedCountryName : '';
  if (!displayName && detectedCountryCode) {
    displayName = ISO_COUNTRY_NAMES[detectedCountryCode.toUpperCase()] || '';
  }
  if (!displayName) {
    displayName = 'India';
  }

  return {
    slug: 'default',
    name: displayName,
    flag: '',
    hreflang: 'en',
    metaTitle: `World-Class Medical Care in India for Patients from ${displayName} | IndiaCareTrip`,
    metaDescription: 'Your seamless journey to health and wellness in India. JCI-accredited hospitals, expert surgeons, and dedicated patient coordinators.',
    defaultCountryCode: detectedCountryCode ? `+${detectedCountryCode}` : '+91',
  };
}

// ─── IP Country Code to Region / Country Slug Mapping ─────────────
export const COUNTRY_TO_REGION: Record<string, string> = {
  // United Kingdom
  GB: 'uk',

  // All Gulf Countries
  AE: 'uae',
  SA: 'saudi-arabia',
  OM: 'oman',
  KW: 'kuwait',
  QA: 'qatar',
  BH: 'bahrain',

  // Europe — Individual countries mapped to their country slugs
  DE: 'germany',
  FR: 'france',
  IE: 'ireland',
  NL: 'netherlands',
  ES: 'spain',
  IT: 'italy',
  CH: 'switzerland',
  SE: 'sweden',
  NO: 'norway',
  DK: 'denmark',
  FI: 'finland',
  AT: 'austria',
  BE: 'belgium',
  PL: 'poland',
  PT: 'portugal',
  GR: 'greece',
  CZ: 'czechia',
  RO: 'romania',
  HU: 'hungary',
  HR: 'croatia',

  // Africa
  NG: 'africa', KE: 'africa', ET: 'africa', TZ: 'africa', UG: 'africa',
  GH: 'africa', ZA: 'africa', EG: 'africa', MA: 'africa', TN: 'africa',
  DZ: 'africa', LY: 'africa', SD: 'africa', CM: 'africa', CI: 'africa',
  SN: 'africa', ZW: 'africa', MZ: 'africa', AO: 'africa', CD: 'africa',
  RW: 'africa', MW: 'africa', ZM: 'africa', BW: 'africa', NA: 'africa',
  MU: 'africa', MG: 'africa', ML: 'africa', BF: 'africa', NE: 'africa',
  TD: 'africa', SO: 'africa', DJ: 'africa', ER: 'africa', GM: 'africa',
  GN: 'africa', SL: 'africa', LR: 'africa', TG: 'africa', BJ: 'africa',
  GA: 'africa', CG: 'africa', GQ: 'africa', CF: 'africa', SS: 'africa',
  BI: 'africa', LS: 'africa', SZ: 'africa', CV: 'africa', ST: 'africa',
  SC: 'africa', KM: 'africa',
};

// All clean selectable countries for the country switcher:
// UK, All Gulf Countries, European Countries, Africa, and Visitor Country
export const SELECTABLE_COUNTRIES: { slug: string; name: string }[] = [
  // United Kingdom
  { slug: 'uk', name: 'United Kingdom' },

  // All Gulf Regions
  { slug: 'uae', name: 'UAE' },
  { slug: 'saudi-arabia', name: 'Saudi Arabia' },
  { slug: 'oman', name: 'Oman' },
  { slug: 'qatar', name: 'Qatar' },
  { slug: 'kuwait', name: 'Kuwait' },
  { slug: 'bahrain', name: 'Bahrain' },

  // European Countries
  { slug: 'germany', name: 'Germany' },
  { slug: 'france', name: 'France' },
  { slug: 'ireland', name: 'Ireland' },
  { slug: 'netherlands', name: 'Netherlands' },
  { slug: 'spain', name: 'Spain' },
  { slug: 'italy', name: 'Italy' },
  { slug: 'switzerland', name: 'Switzerland' },
  { slug: 'sweden', name: 'Sweden' },
  { slug: 'norway', name: 'Norway' },
  { slug: 'denmark', name: 'Denmark' },
  { slug: 'austria', name: 'Austria' },
  { slug: 'belgium', name: 'Belgium' },
  { slug: 'poland', name: 'Poland' },

  // Africa
  { slug: 'africa', name: 'Africa' },

  // Visitor Country
  { slug: 'default', name: 'India' },
];

export const GEO_ROUTES = [
  'uk', 'eu', 'uae', 'gulf', 'africa',
  'saudi-arabia', 'oman', 'qatar', 'kuwait', 'bahrain',
  ...Object.keys(EUROPEAN_COUNTRIES),
  ...Object.values(EUROPEAN_COUNTRIES).map((c) => c.shortSlug),
];
