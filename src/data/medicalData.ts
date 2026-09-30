import type { TreatmentInfo, Doctor, Hospital, Testimonial, BlogPost } from '../types';

export const TREATMENTS_DATA: Record<string, TreatmentInfo> = {
  dental: {
    id: 'dental',
    name: 'Dental Care & Implants',
    tagline: 'World-Class Cosmetic & Restorative Dentistry with Digital Precision',
    ukAvgWait: '14 - 24 Weeks',
    keralaWait: '0 Days (Immediate)',
    ukAvgCost: 'AED 8,500 - AED 16,000',
    keralaCost: 'AED 1,850 - AED 3,900',
    savingsPercent: 76,
    description: 'Transform your smile with digital smile design, Swiss/German titanium implants, zirconia crowns, and full mouth rehabilitations performed by internationally certified implantologists in Kerala’s state-of-the-art dental suites.',
    procedures: [
      {
        title: 'All-on-4 / All-on-6 Dental Implants',
        details: 'Full arch immediate-load Nobel Biocare / Straumann titanium implants with permanent fixed hybrid bridge.',
        ukCost: 'AED 14,000',
        keralaCost: 'AED 3,200',
      },
      {
        title: 'Single Dental Implant + Porcelain Crown',
        details: 'Guided keyhole surgery with 3D CBCT digital precision, lifetime warranty implant screw and custom abutment.',
        ukCost: 'AED 2,800',
        keralaCost: 'AED 550',
      },
      {
        title: 'Full Smile Makeover (16-20 Veneers)',
        details: 'Ultra-thin handcrafted E-max ceramic veneers, computerised digital smile preview and bite alignment.',
        ukCost: 'AED 11,000',
        keralaCost: 'AED 2,700',
      },
      {
        title: 'Painless Single-Sitting Root Canal + Zirconia Crown',
        details: 'Rotary endodontics under dental microscope with monolithic high-strength aesthetic zirconia crown.',
        ukCost: 'AED 1,100',
        keralaCost: 'AED 220',
      }
    ],
    recoveryDays: '5 - 7 Days (Includes sightseeing in Fort Kochi)',
    highlights: [
      'Swiss & German Titanium Implants with Lifetime Warranty',
      'In-house CAD/CAM 3D Milling Labs for Same-Week Crowns',
      'Sedation Dentistry Available for Anxious Patients',
      'Full Digital Smile Design & 3D Intraoral Scanning'
    ],
    bannerImage: '/assets/specialties/dental.jpg'
  },
  eyes: {
    id: 'eyes',
    name: 'Eyes (Ophthalmology)',
    tagline: 'Advanced Robotic Laser Vision Correction & Super-Specialty Eye Care',
    ukAvgWait: '20 - 48 Weeks (UAE Public Health)',
    keralaWait: '0 Days (Next-Day Scheduling)',
    ukAvgCost: 'AED 3,400 - AED 7,500',
    keralaCost: 'AED 750 - AED 1,900',
    savingsPercent: 75,
    description: 'Say goodbye to glasses and cataracts with world-renowned ophthalmic surgeons utilizing German Zeiss VisuMax femtosecond lasers, robotic cataract phacoemulsification, and premium multifocal lens implants.',
    procedures: [
      {
        title: 'Contoura Vision / SMILE Pro Laser Eye Surgery',
        details: 'Flapless, bladeless refractive laser precision measuring 22,000 elevation points for ultra-crisp 20/20 HD vision.',
        ukCost: 'AED 3,800 (Both)',
        keralaCost: 'AED 850 (Both)',
      },
      {
        title: 'Robotic Femto-Cataract + Trifocal IOL',
        details: 'Zero-blade robotic precision with premium Zeiss / Alcon PanOptix multifocal lens for near, intermediate & distant sight.',
        ukCost: 'AED 4,500 per eye',
        keralaCost: 'AED 950 per eye',
      },
      {
        title: 'ICL (Implantable Collamer Lens)',
        details: 'Permanent internal contact lens solution for high prescription myopia/astigmatism unsuitable for LASIK.',
        ukCost: 'AED 5,500',
        keralaCost: 'AED 1,400',
      },
      {
        title: 'Advanced Glaucoma & Retinal Vitrectomy',
        details: 'Micro-invasive surgical management of retinal detachment, diabetic retinopathy, and high intraocular pressure.',
        ukCost: 'AED 6,200',
        keralaCost: 'AED 1,650',
      }
    ],
    recoveryDays: '2 - 4 Days (Gentle backwater stay)',
    highlights: [
      'Carl Zeiss VisuMax 800 & Alcon WaveLight Technologies',
      'Painless 15-Minute Outpatient Procedure',
      'Over 99.4% Patient Visual Satisfaction',
      'Post-op Eye Care Kit & UAE GP Documentation'
    ],
    bannerImage: '/assets/specialties/eyes.jpg'
  },
  ortho: {
    id: 'ortho',
    name: 'Orthopaedics & Joint Surgery',
    tagline: 'Pioneering Robotic Knee & Hip Replacements with Fast-Track Rehabilitation',
    ukAvgWait: '38 - 65 Weeks (UAE Public Health Waitlist)',
    keralaWait: '0 Days (Immediate Priority Booking)',
    ukAvgCost: 'AED 14,500 - AED 22,000',
    keralaCost: 'AED 3,800 - AED 5,800',
    savingsPercent: 74,
    description: 'Regain pain-free mobility with sub-millimeter robotic knee and hip replacements. Performed in JCI-accredited laminar airflow operating theatres by surgeons with FRCS and fellowship training in the UAE and USA.',
    procedures: [
      {
        title: 'Mako / Cuvis Robotic Total Knee Replacement',
        details: '3D CT-guided robotic bone-sparing joint replacement with Stryker/Smith&Nephew titanium implants and sub-millimeter alignment.',
        ukCost: 'AED 15,000',
        keralaCost: 'AED 3,900',
      },
      {
        title: 'Minimally Invasive Direct Anterior Hip Replacement',
        details: 'Muscle-sparing technique allowing walking on day 1 with ceramic-on-crosslinked polyethylene joint.',
        ukCost: 'AED 14,200',
        keralaCost: 'AED 4,100',
      },
      {
        title: 'Bilateral (Both Knees) Simultaneous Replacement',
        details: 'Single anaesthesia dual robotic replacement with personalized intensive backwater physiotherapy.',
        ukCost: 'AED 26,000',
        keralaCost: 'AED 6,500',
      },
      {
        title: 'Arthroscopic Shoulder / ACL Ligament Reconstruction',
        details: 'Keyhole tendon reconstruction with bio-absorbable anchors and sports physiotherapy protocol.',
        ukCost: 'AED 7,800',
        keralaCost: 'AED 2,100',
      }
    ],
    recoveryDays: '10 - 14 Days (Includes Hospital + Luxury Resort Recovery)',
    highlights: [
      'Walk Within 4 to 6 Hours Post-Surgery',
      'Sub-0.2% Infection Rate in HEPA Ultra-Clean Theatres',
      'Customized Daily Physiotherapist & Hydrotherapy',
      'Personal Dedicated Care Nurse Throughout Stay'
    ],
    bannerImage: '/assets/specialties/orthopedics.webp'
  },
  wellness: {
    id: 'wellness',
    name: 'Wellness & Health 360',
    tagline: 'Comprehensive Preventive Diagnostics, Cardiac Profiling & Executive Health',
    ukAvgWait: '6 - 12 Weeks',
    keralaWait: '0 Days (Same-Day Screening)',
    ukAvgCost: 'AED 2,500 - AED 5,000',
    keralaCost: 'AED 450 - AED 950',
    savingsPercent: 78,
    description: 'A complete 360° health reset. Combines high-resolution 128-slice CT scans, whole-body MRI, comprehensive biomarker blood screens, and cardiac stress tests with personalized nutrition and lifestyle longevity coaching.',
    procedures: [
      {
        title: 'Executive 360° Comprehensive Full-Body Screening',
        details: '110+ diagnostic tests including Whole-Body MRI, 3D Echo, Carotid Doppler, Cancer tumor markers, and Liver/Kidney profiling.',
        ukCost: 'AED 2,800',
        keralaCost: 'AED 550',
      },
      {
        title: 'Advanced Cardiac Longevity Assessment',
        details: 'CT Coronary Angiogram, Treadmill ECG, ApoB lipid panel, Calcium score, and Senior Cardiologist 1-on-1 consultation.',
        ukCost: 'AED 1,950',
        keralaCost: 'AED 420',
      },
      {
        title: 'Metabolic & Hormone Reset Package',
        details: 'Insulin resistance testing, thyroid panel, vitamin/mineral deficiencies, and customized functional medicine diet plan.',
        ukCost: 'AED 1,600',
        keralaCost: 'AED 380',
      },
      {
        title: 'Post-Recovery Longevity & Vitality Retreat (7 Days)',
        details: 'Integrated medical checkup paired with tailored backwater relaxation, organic farm-to-table cuisine, and detox therapy.',
        ukCost: 'AED 4,200',
        keralaCost: 'AED 1,100',
      }
    ],
    recoveryDays: '3 - 7 Days',
    highlights: [
      'Same-Day Comprehensive Diagnostic Reports & Digital Dossier',
      'Multidisciplinary Review by 5+ Senior Consultants',
      'Zero Radiation Ultra-Sensitive MRI Screening',
      'Personalized 12-Month Preventative Health Roadmap'
    ],
    bannerImage: '/images/hero.jpg'
  },
  ayurveda: {
    id: 'ayurveda',
    name: 'Authentic Kerala Ayurveda',
    tagline: '5,000-Year-Old Natural Healing, Classical Panchakarma & Chronic Pain Relief',
    ukAvgWait: 'Unavailable in UAE Public Health / High Private Cost',
    keralaWait: '0 Days (Seasonal Booking Open)',
    ukAvgCost: 'AED 4,800 - AED 9,000',
    keralaCost: 'AED 1,250 - AED 2,400',
    savingsPercent: 73,
    description: 'Kerala is the world’s undisputed cradle of Ayurveda. Experience genuine Vaidya-supervised medicinal therapies, herbal decoctions, Abhyanga, and Shirodhara at NABH-accredited heritage retreats, treating chronic arthritis, stress, neurological disorders, and gut health.',
    procedures: [
      {
        title: '14-Day Classical Panchakarma Detox & Cleanse',
        details: 'The ultimate 5-action cellular purification with Vamana, Virechana, Vasti, Nasya, and Rakta Moksha under Chief Vaidya supervision.',
        ukCost: 'AED 4,900',
        keralaCost: 'AED 1,350 (All-Inclusive)',
      },
      {
        title: 'Rheumatoid Arthritis & Spine Rejuvenation (Kativasthi / Kizhi)',
        details: 'Medicated herbal warm bolus compresses (Podikizhi, Elakizhi) and warm herbal oil reservoir treatments for spinal discs & joint pain.',
        ukCost: 'AED 3,800',
        keralaCost: 'AED 1,100 (All-Inclusive)',
      },
      {
        title: 'Stress Relief, Insomnia & Mental Renewal (Shirodhara / Takradhara)',
        details: 'Continuous rhythmic pouring of medicated herbal oils or medicinal buttermilk on the third eye to soothe the nervous system.',
        ukCost: 'AED 3,200',
        keralaCost: 'AED 850 (All-Inclusive)',
      },
      {
        title: '21-Day Complete Rasayana (Longevity & Anti-Ageing) Retreat',
        details: 'Comprehensive cellular rejuvenation, personalized herbal diet, daily yoga/pranayama, and luxury heritage backwater sanctuary accommodation.',
        ukCost: 'AED 7,500',
        keralaCost: 'AED 2,200 (All-Inclusive)',
      }
    ],
    recoveryDays: '7 - 21 Days (Includes luxury beachfront or backwater resort stay)',
    highlights: [
      'NABH Accredited & Govt-Certified Ayurvedic Sanctuaries',
      'Medicinal Herbal Formulations from 120-Year-Old Pharmacies',
      'Includes Private Villa Stay, Custom Organic Meals & Daily Yoga',
      'Prescriptions from Senior Hereditary Ayurvedic Physicians'
    ],
    bannerImage: '/images/ayurveda.jpg'
  }
};

export const HOSPITALS_DATA: Hospital[] = [
  {
    id: 'aster-medcity',
    name: 'Aster Medcity',
    location: 'Cheranallur, Kochi',
    accreditations: ['JCI Accredited', 'NABH Certified', 'Green OT Certified'],
    specialties: ['Orthopaedics', 'Ophthalmology', 'Cardiology', 'Robotic Surgery'],
    beds: 670,
    image: '/images/doctors.jpg',
    description: 'A 670-bed quaternary care waterfront medical destination in Kochi, Kerala. Aster Medcity features South India’s first Mako Robotic joint replacement system and internationally trained medical faculty.',
    features: ['Robotic Surgery Centre', 'Helipad & Waterfront Access', 'Dedicated International Patient Lounge', 'Private Waterfront Suites']
  },
  {
    id: 'vps-lakeshore',
    name: 'VPS Lakeshore Hospital',
    location: 'Nettoor, Kochi',
    accreditations: ['NABH Accredited', 'ISO 9001:2000', 'JCI Compliant'],
    specialties: ['Joint Replacement', 'Gastroenterology', 'Organ Transplants', 'Dental Surgery'],
    beds: 450,
    image: '/images/doctors.jpg',
    description: 'Renowned throughout the Middle East and Europe for complex joint surgeries, orthopaedic oncology, and minimally invasive treatments with over two decades of international healthcare leadership.',
    features: ['Ultra-Clean Modular Laminar OTs', 'Comprehensive Rehabilitation Wing', '24/7 Multi-lingual Concierge', 'Direct Highway & Airport Access']
  },
  {
    id: 'amrita-hospital',
    name: 'Amrita Institute of Medical Sciences (AIMS)',
    location: 'Edappally, Kochi',
    accreditations: ['NABH Accredited', 'NABL Certified', 'ISO 9001'],
    specialties: ['Ophthalmology', 'Spine & Neuro Care', 'Comprehensive Wellness', 'Dental Implants'],
    beds: 1350,
    image: '/images/doctors.jpg',
    description: 'One of Asia’s largest premier medical research institutions. Amrita provides university-grade clinical care, cutting-edge Zeiss laser eye suites, and world-class dental surgery departments.',
    features: ['Carl Zeiss Laser Ophthalmology Suite', '3D Intraoral Guided Dental Unit', 'Comprehensive Blood Bank & Pathology', 'International Patient Guest Houses']
  },
  {
    id: 'rajagiri-hospital',
    name: 'Rajagiri Hospital',
    location: 'Aluva, Kochi (Near Airport)',
    accreditations: ['JCI Accredited', 'NABH Certified', 'NABL Accredited'],
    specialties: ['Robotic Joint Care', 'Executive Wellness 360', 'Advanced Dental', 'Bariatrics'],
    beds: 550,
    image: '/images/doctors.jpg',
    description: 'Located only 15 minutes from Cochin International Airport (COK), Rajagiri Hospital combines world-class JCI standards with personalized pastoral care and luxury single-patient recovery rooms.',
    features: ['15-Minute Airport Transfer', 'Dual-Source High Resolution CT', 'Private Garden Suites', 'English & European Language Interpreters']
  },
  {
    id: 'somatheeram',
    name: 'Somatheeram Ayurvedic Hospital & Sanctuary',
    location: 'Chowara Beach, Trivandrum',
    accreditations: ['NABH Accredited Ayurveda', 'Govt of Kerala Green Leaf Award', 'EU Ayurvedic Certified'],
    specialties: ['Authentic Ayurveda', 'Panchakarma', 'Arthritis Treatment', 'Wellness Retreat'],
    beds: 120,
    image: '/images/ayurveda.jpg',
    description: 'The world’s first Ayurvedic resort with a licensed hospital wing. Set on tranquil cliffs overlooking the Arabian Sea, providing classical herbal medicine and Panchakarma for European travelers since 1985.',
    features: ['Seafront Cottages & Herbal Gardens', 'In-house Herbal Medicine Dispensary', 'Daily Therapeutic Yoga & Meditation', 'Customized Ayurvedic Nutrition']
  },
  {
    id: 'kottakkal-arya-vaidya-sala',
    name: 'Kottakkal Arya Vaidya Sala',
    location: 'Kottakkal & Kochi',
    accreditations: ['NABH Hospital Accreditation', '120-Year Heritage', 'National Centre of Excellence'],
    specialties: ['Ayurvedic Panchakarma', 'Chronic Pain Management', 'Neurological Rehab', 'Herbal Detox'],
    beds: 300,
    image: '/images/ayurveda.jpg',
    description: 'Founded in 1902, Kottakkal Arya Vaidya Sala is India’s foremost legendary authority in classical Ayurveda, having treated royalty, world leaders, and tens of thousands of international patients.',
    features: ['Direct Heritage Heritage Vaidya Care', 'Authentic Traditional Droni Massage Rooms', 'Pure Herb Medicinal Formulations', 'Holistic Chronic Disease Management']
  }
];

export const DOCTORS_DATA: Doctor[] = [
  {
    id: 'dr-anand-kurian',
    name: 'Dr. Anand Kurian',
    role: 'Chief Robotic Joint Replacement Surgeon',
    specialty: 'ortho',
    experienceYears: 24,
    qualifications: ['MBBS', 'MS (Ortho)', 'FRCS (Orth) Edinburgh', 'Mako Robotic Certified'],
    hospital: 'Aster Medcity',
    hospitalLocation: 'Kochi, Kerala',
    avatar: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=400&q=80',
    surgeriesCount: '6,200+ Surgeries',
    about: 'UAE trained senior orthopaedic consultant with over two decades of surgical leadership. Specialises in sub-millimeter robotic knee replacements and rapid-recovery anterior hip replacements.'
  },
  {
    id: 'dr-meera-nair',
    name: 'Dr. Meera Nair',
    role: 'Senior Dental Surgeon & Implantologist',
    specialty: 'dental',
    experienceYears: 18,
    qualifications: ['BDS', 'MDS (Prosthodontics)', 'Diplomate ICOI (USA)', 'Fellow ITI (Switzerland)'],
    hospital: 'Amrita Dental Institute',
    hospitalLocation: 'Kochi, Kerala',
    avatar: 'https://images.unsplash.com/photo-1594824813586-4e5cb009c958?auto=format&fit=crop&w=400&q=80',
    surgeriesCount: '4,500+ Implants',
    about: 'Pioneered digital immediate-load All-on-4 implants in Kerala. Trained at Bern University, Switzerland, providing painless aesthetic restorations and Hollywood smile makeovers.'
  },
  {
    id: 'dr-rajesh-menon',
    name: 'Dr. Rajesh Menon',
    role: 'Director of Cornea & Refractive Eye Surgery',
    specialty: 'eyes',
    experienceYears: 21,
    qualifications: ['MBBS', 'MS (Ophthalmology)', 'FRCS (Glasgow)', 'Fellow Cornea & Refractive'],
    hospital: 'Rajagiri Eye Centre',
    hospitalLocation: 'Kochi, Kerala',
    avatar: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=400&q=80',
    surgeriesCount: '11,000+ Laser Surgeries',
    about: 'Former fellow at Moorfields Eye Hospital London. A pioneer in Contoura Vision and SMILE Pro laser vision correction with thousands of successful UAE patient cases.'
  },
  {
    id: 'vaidya-keshavan-namboothiri',
    name: 'Vaidya Keshavan Namboothiri',
    role: 'Chief Ayurvedic Physician (Senior Vaidya)',
    specialty: 'ayurveda',
    experienceYears: 32,
    qualifications: ['BAMS', 'MD (Ayurveda)', 'Ashtavaidya Lineage', 'Govt Green Leaf Advisor'],
    hospital: 'Somatheeram Ayurvedic Hospital',
    hospitalLocation: 'Trivandrum, Kerala',
    avatar: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=400&q=80',
    surgeriesCount: '15,000+ Treated Patients',
    about: 'Hailing from a 300-year-old traditional Kerala healing lineage, Vaidya Keshavan integrates classical diagnostic pulse reading (Nadi Pariksha) with modern lifestyle management for lasting rejuvenation.'
  },
  {
    id: 'dr-priya-sundaram',
    name: 'Dr. Priya Sundaram',
    role: 'Senior Consultant Plastic & Aesthetic Surgeon',
    specialty: 'cosmetic',
    experienceYears: 19,
    qualifications: ['MBBS', 'MS (Gen Surgery)', 'MCh (Plastic Surgery)', 'Fellow ISAPS'],
    hospital: 'VPS Lakeshore Hospital',
    hospitalLocation: 'Kochi, Kerala',
    avatar: '',
    surgeriesCount: '4,200+ Aesthetic Surgeries',
    about: 'Pioneered high-definition body contouring and preservation rhinoplasty in Kerala. Specialises in natural smile & facial makeovers, reconstructive plastic surgery, and discreet recovery.'
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 't-1',
    patientName: 'David & Linda Robertson',
    origin: 'Manchester, UAE',
    treatment: 'Bilateral Robotic Knee Replacement',
    specialty: 'ortho',
    rating: 5,
    headline: '“Waited 18 months on UAE Public Health without hope. In Kerala, I was walking pain-free within 48 hours.”',
    story: 'I was in severe pain with bone-on-bone arthritis in both knees and was told the UAE Public Health wait was at least 18 more months. HealKerala took care of everything from my flight from Manchester to the luxury lakehouse recovery. Dr. Anand Kurian’s robotic surgery was miraculous. I saved AED 17,500 compared to private treatment in London, and my wife Linda loved the backwaters!',
    savedAmount: 'Saved AED 17,500',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    date: 'February 2026',
    verified: true
  },
  {
    id: 't-2',
    patientName: 'Sarah Jenkins',
    origin: 'Surrey, London, UAE',
    treatment: 'Full Mouth All-on-4 Dental Makeover',
    specialty: 'dental',
    rating: 5,
    headline: '“London clinics quoted me AED 24,000. In Kerala, I got Swiss implants and 5-star care for AED 5,800.”',
    story: 'I was so ashamed of my teeth and could barely chew. The quote in Harley Street was astronomical. HealKerala arranged my digital smile scan, hotel booking, and private chauffeur. Dr. Meera was gentler than any dentist I’ve ever visited. I spent 8 relaxing days in Kochi and went back to the UAE with the most radiant, natural smile.',
    savedAmount: 'Saved AED 18,200',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
    date: 'January 2026',
    verified: true
  },
  {
    id: 't-3',
    patientName: 'Michael & Claire Henderson',
    origin: 'Edinburgh, Scotland',
    treatment: 'Contoura Vision Laser Surgery',
    specialty: 'eyes',
    rating: 5,
    headline: '“Went from heavy spectacles to 20/15 crystal clarity in a 10-minute laser procedure.”',
    story: 'The precision at Rajagiri Eye Centre was mind-blowing. The Carl Zeiss suite was more modern than clinics I visited in Glasgow. Zero pain, zero hassle. We turned the trip into a 10-day holiday exploring Munnar tea plantations and Alleppey houseboats.',
    savedAmount: 'Saved AED 2,900',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    date: 'March 2026',
    verified: true
  },
  {
    id: 't-4',
    patientName: 'Eleanor Vance',
    origin: 'Bristol, UAE',
    treatment: '14-Day Classical Panchakarma & Arthritis Rejuvenation',
    specialty: 'ayurveda',
    rating: 5,
    headline: '“Chronic inflammation and joint swelling dropped dramatically after 14 days of authentic herbs.”',
    story: 'I was taking immunosuppressants and painkillers for rheumatoid arthritis for 6 years. Somatheeram was like heaven on earth. The daily medicated oil therapies, herbal kashayams, and organic cuisine restored my energy and mobility. I feel 15 years younger.',
    savedAmount: 'Saved AED 4,500',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    date: 'November 2025',
    verified: true
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'b-1',
    title: 'Why UAE Patients are Bypassing UAE Public Health Waiting Lists for Knee Surgery in Kerala in 2026',
    excerpt: 'With UAE Public Health orthopaedic backlogs hovering over 12 months, discover how robotic Mako technology and tropical aftercare are transforming recovery outcomes for British retirees.',
    content: 'Waiting over a year in debilitating knee pain takes a toll on physical and mental health. In Kerala, patients receive next-day diagnostic imaging, robotic sub-millimeter joint alignment, and 24/7 one-on-one physiotherapy at a 74% savings compared to UAE private hospitals. Learn about the complete patient pathway and UAE GP coordination...',
    author: 'Dr. Anand Kurian',
    authorRole: 'FRCS Edinburgh, Chief Orthopaedic Consultant',
    date: 'September 18, 2026',
    readTime: '5 min read',
    specialty: 'ortho',
    image: '/images/doctors.jpg'
  },
  {
    id: 'b-2',
    title: 'The Truth About Dental Tourism: What British Patients Must Check Before Getting Implants Abroad',
    excerpt: 'Not all overseas dental clinics are equal. Here is our clinical checklist for titanium implant warranties, 3D CBCT scans, and cross-border aftercare guarantees.',
    content: 'Dental medical travel is booming, but quality standards vary widely between countries like Turkey and India. Kerala has become the gold standard due to its English-speaking specialist prosthodontists, Swiss Straumann and Nobel Biocare materials with universal serial numbers, and strict sterile guidelines...',
    author: 'Dr. Meera Nair',
    authorRole: 'Diplomate ICOI, Specialist Implantologist',
    date: 'August 24, 2026',
    readTime: '6 min read',
    specialty: 'dental',
    image: '/assets/specialties/dental.jpg'
  },
  {
    id: 'b-3',
    title: 'Panchakarma Demystified: The Science Behind Kerala’s 5-Stage Cellular Cleansing',
    excerpt: 'How ancient Ayurvedic bio-purification works with modern gut microbiome physiology to combat chronic fatigue, autoimmune inflammation, and metabolic syndrome.',
    content: 'Classical Panchakarma is far more than a massage. It is a systematic 5-stage medical detoxification protocol tailored to an individual’s Prakriti (constitutional type) and Dosha imbalances. We examine the scientific literature on lipid detoxification, cortisol reduction, and neuro-endocrine regulation...',
    author: 'Vaidya Keshavan Namboothiri',
    authorRole: 'Chief Ayurvedic Physician & Ashtavaidya',
    date: 'July 30, 2026',
    readTime: '7 min read',
    specialty: 'ayurveda',
    image: '/images/ayurveda.jpg'
  },
  {
    id: 'b-4',
    title: 'Contoura Vision vs Traditional LASIK: Achieving 20/15 Super-Vision with Topography-Guided Lasers',
    excerpt: 'How mapping 22,000 individual corneal elevation points eliminates night glares, halos, and astigmatism for patients who were previously told they were unsuitable for laser eye surgery.',
    content: 'Traditional LASIK reshapes the cornea using your spectacle prescription. Contoura Vision, however, treats microscopic irregularities on the corneal surface itself using proprietary topographic algorithms. This results in sharper night contrast sensitivity and faster healing...',
    author: 'Dr. Rajesh Menon',
    authorRole: 'FRCS Glasgow, Director of Refractive Surgery',
    date: 'June 14, 2026',
    readTime: '4 min read',
    specialty: 'eyes',
    image: '/images/doctors.jpg'
  }
];

export const VALIDATION_STANDARDS = {
  patients: [
    {
      title: 'UAE Doctor 1-on-1 Pre-Departure Review',
      description: 'Your medical records, X-rays, and MRI scans are reviewed by our UAE-liaison physicians before you book tickets, ensuring complete clinical suitability.',
      icon: 'Stethoscope'
    },
    {
      title: '100% Transparent Fixed-Cost Guarantee',
      description: 'Zero hidden hospital fees, no surprise medication add-ons. You receive a guaranteed itemized quote covering surgery, implants, accommodation, and chauffeur.',
      icon: 'ShieldCheck'
    },
    {
      title: 'Full Medical Travel & Concierge Protection',
      description: 'Dedicated English-speaking personal health concierge stationed with you in Kerala. Fast-track Indian e-Medical Visa support within 48 to 72 hours.',
      icon: 'Plane'
    },
    {
      title: 'Seamless UAE GP Handover & Aftercare',
      description: 'Comprehensive digital discharge summaries formatted for UAE Public Health and UAE GP integration, complete with 12 months of teleconsultation check-ins.',
      icon: 'FileText'
    }
  ],
  doctorsHospitals: [
    {
      title: 'JCI & NABH Accreditation Only',
      description: 'We exclusively partner with hospitals audited by Joint Commission International (USA) and the National Accreditation Board for Hospitals (NABH).',
      icon: 'Award'
    },
    {
      title: 'UAE GMC / FRCS & International Fellowship Specialists',
      description: 'Every lead surgeon holds international qualifications (FRCS, MRCP, American Board) with a minimum of 15 years experience and 1,000+ completed procedures.',
      icon: 'UserCheck'
    },
    {
      title: 'Ultra-Clean Laminar Theatres & <0.3% Infection Rate',
      description: 'State-of-the-art modular operating rooms with HEPA filtration and strict infection containment protocols that outperform UAE and US national averages.',
      icon: 'Activity'
    },
    {
      title: 'Bi-Annual Clinical Audit & Outcome Transparency',
      description: 'Hospital outcomes, patient satisfaction scores, and surgical safety metrics are continuously independently audited and made transparent to patients.',
      icon: 'CheckCircle2'
    }
  ]
};

export const COST_COMPARISON_MATRIX = [
  {
    treatment: 'Robotic Total Knee Replacement',
    category: 'ortho',
    ukWait: '38 - 65 weeks',
    keralaWait: 'Immediate (0 days)',
    ukPrivateCost: 'AED 15,200',
    healkeralaCost: 'AED 3,900',
    savings: 'AED 11,300 (74%)',
    inclusions: 'Robotic Stryker implant, 5-day hospital stay, 7-day luxury backwater aftercare resort, private nurse & daily physiotherapy'
  },
  {
    treatment: 'Full Mouth Dental Implants (All-on-4)',
    category: 'dental',
    ukWait: '14 - 20 weeks',
    keralaWait: 'Immediate (0 days)',
    ukPrivateCost: 'AED 14,000',
    healkeralaCost: 'AED 3,200',
    savings: 'AED 10,800 (77%)',
    inclusions: 'Nobel Biocare/Straumann titanium implants, permanent zirconia bridge, 3D CBCT scans & 7-day hotel stay'
  },
  {
    treatment: 'Contoura Vision Laser (Both Eyes)',
    category: 'eyes',
    ukWait: 'Not covered / Private wait',
    keralaWait: 'Immediate (0 days)',
    ukPrivateCost: 'AED 3,800',
    healkeralaCost: 'AED 850',
    savings: 'AED 2,950 (78%)',
    inclusions: 'Zeiss laser topography, medication kit, 3 post-op checkups & luxury boutique stay'
  },
  {
    treatment: '14-Day Classical Panchakarma Detox',
    category: 'ayurveda',
    ukWait: 'Unavailable in UAE Public Health',
    keralaWait: 'Immediate (0 days)',
    ukPrivateCost: 'AED 4,900',
    healkeralaCost: 'AED 1,350',
    savings: 'AED 3,550 (72%)',
    inclusions: 'Senior Vaidya daily consultation, 2 daily herbal therapies, organic Ayurvedic cuisine & beachfront cottage'
  },
  {
    treatment: 'Total Hip Replacement (Anterior)',
    category: 'ortho',
    ukWait: '36 - 54 weeks',
    keralaWait: 'Immediate (0 days)',
    ukPrivateCost: 'AED 14,500',
    healkeralaCost: 'AED 4,100',
    savings: 'AED 10,400 (72%)',
    inclusions: 'Ceramic-on-poly implant, private ensuite room, daily hydrotherapy, airport chauffeur & UAE GP report'
  },
  {
    treatment: 'Executive 360 Full Body Longevity Check',
    category: 'wellness',
    ukWait: '6 - 10 weeks',
    keralaWait: 'Immediate (0 days)',
    ukPrivateCost: 'AED 2,800',
    healkeralaCost: 'AED 550',
    savings: 'AED 2,250 (80%)',
    inclusions: '110+ lab tests, full body MRI, 128-slice CT heart scan, ultrasound, tumor markers & 5 specialist reviews'
  }
];
