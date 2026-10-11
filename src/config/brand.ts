export interface BrandConfig {
  name: string;
  shortName: string;
  monogram: string;
  tagline: string;
  missionSubtitle: string;
  email: string;
  phone: string;
  phoneDisplay: string;
  whatsapp: string;
  copyrightYear: number;
}

export const BRAND: BrandConfig = {
  name: 'HealKerala',
  shortName: 'HealKerala',
  monogram: 'H', // In the uploaded design, monogram is inside the teal square logo
  tagline: 'World-Class Care Meets Ancient Wisdom.',
  missionSubtitle: 'HealKerala was founded on a simple belief: healthcare should be global, seamless, and deeply personal. We bridge the gap between world-class Indian medical facilities and international patients.',
  email: 'care@healkerala.com',
  phone: '+919876543210',
  phoneDisplay: '+91 98765 43210',
  whatsapp: '+919876543210',
  copyrightYear: 2026,
};
