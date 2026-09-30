export interface SpecialtyAdvantageCard {
  title: string;
  description: string;
  icon: 'zap' | 'check' | 'award' | 'shield';
}

export interface SpecialtyTechItem {
  title: string;
  description: string;
  image: string;
}

export interface SpecialtyProcedureItem {
  title: string;
  description: string;
  icon: string;
  isDark: boolean;
}

export interface CostComparisonRow {
  procedure: string;
  usCost: string;
  keralaCost: string;
  savings: string;
}

export interface SpecialtyData {
  slug: string;
  treatmentKey: string;
  navName: string;
  tagline: string;
  hero: {
    title: string;
    subtitle: string;
    bgImage: string;
  };
  keralaAdvantage: {
    title: string;
    highlightTitle: string;
    description: string;
    image: string;
    cards: SpecialtyAdvantageCard[];
  };
  technology: {
    title: string;
    highlightTitle: string;
    subtitle: string;
    items: SpecialtyTechItem[];
  };
  procedures: {
    title: string;
    highlightTitle: string;
    tagline: string;
    items: SpecialtyProcedureItem[];
  };
  costComparison: {
    title: string;
    highlightTitle: string;
    subtitle: string;
    table: CostComparisonRow[];
    notice: string;
  };
}

export const SPECIALTIES_DATA: Record<string, SpecialtyData> = {
  'dental': {
    slug: 'dental',
    treatmentKey: 'dental',
    navName: 'Dental Care & Implants',
    tagline: 'World-Class Cosmetic & Restorative Dentistry with Digital Precision.',
    hero: {
      title: 'Dental Care & Implants',
      subtitle: 'Transform your smile with digital smile design, Swiss/German titanium implants, zirconia crowns, and full mouth rehabilitation performed by certified prosthodontists.',
      bgImage: '/assets/specialties/dental.jpg'
    },
    keralaAdvantage: {
      title: 'The Art of',
      highlightTitle: 'Digital Dentistry',
      description: 'Kerala features leading dental super-specialty suites equipped with in-house CAD/CAM milling, 3D CBCT scanners, and European certified implant protocols.',
      image: '/assets/specialties/dental.jpg',
      cards: [
        {
          title: 'Immediate-Load Implants',
          description: 'Swiss Straumann and Nobel Biocare titanium implants with fixed hybrid teeth within 3 to 5 days.',
          icon: 'zap'
        },
        {
          title: 'Global Material Warranty',
          description: 'Authentic serial-numbered implants and zirconia crowns with lifetime international replacement warranty.',
          icon: 'shield'
        }
      ]
    },
    technology: {
      title: 'Digital Imaging &',
      highlightTitle: 'CAD/CAM Precision',
      subtitle: 'State-of-the-art intraoral digital scanners and 3D printing laboratories ensure micron-level bite accuracy.',
      items: [
        {
          title: '3D CBCT Diagnostic Scanning',
          description: 'Ultra-low radiation volumetric tomography for 3D guided bone density and nerve mapping.',
          image: '/assets/specialties/dental_tech.jpg'
        },
        {
          title: 'CAD/CAM In-House Milling',
          description: 'Same-week fabrication of monolithic aesthetic zirconia crowns and ultra-thin ceramic veneers.',
          image: '/assets/specialties/cosmetic.webp'
        },
        {
          title: 'Painless Micro-Endodontics',
          description: 'Carl Zeiss surgical dental microscope technology for single-sitting root canal therapy.',
          image: '/assets/specialties/dental.jpg'
        }
      ]
    },
    procedures: {
      title: 'Core Dental',
      highlightTitle: 'Procedures',
      tagline: 'Comprehensive reconstructive and aesthetic smile solutions.',
      items: [
        {
          title: 'All-on-4 / All-on-6 Implants',
          description: 'Full-arch fixed teeth replacement using 4 to 6 tilted titanium implants with permanent hybrid bridge.',
          icon: '/assets/icons/journey1.svg',
          isDark: true
        },
        {
          title: 'Single Dental Implants',
          description: 'Keyhole guided implant placement with custom titanium abutment and monolithic zirconia crown.',
          icon: '/assets/icons/journey2.svg',
          isDark: false
        },
        {
          title: 'Digital Smile Makeovers',
          description: 'Handcrafted ultra-thin E-max ceramic veneers, computerised shade matching and bite correction.',
          icon: '/assets/icons/journey3.svg',
          isDark: true
        }
      ]
    },
    costComparison: {
      title: 'World-Class Dental Care,',
      highlightTitle: 'Transparent Pricing',
      subtitle: 'Compare UK/UAE private dental clinic fees with Kerala accredited hospital dental suites:',
      table: [
        {
          procedure: 'All-on-4 Full Arch Implants',
          usCost: '$16,000 - $28,000',
          keralaCost: '$3,200 - $4,800',
          savings: '~78%'
        },
        {
          procedure: 'Single Titanium Implant + Zirconia Crown',
          usCost: '$3,500 - $5,500',
          keralaCost: '$650 - $950',
          savings: '~80%'
        },
        {
          procedure: 'Full Smile Makeover (16 Veneers)',
          usCost: '$14,000 - $22,000',
          keralaCost: '$3,000 - $4,500',
          savings: '~76%'
        }
      ],
      notice: 'Prices include 3D CBCT scans, Swiss/German titanium implants, temporary bridges, final zirconia crowns, and local transfers.'
    }
  },

  'ortho': {
    slug: 'ortho',
    treatmentKey: 'ortho',
    navName: 'Orthopedics & Joint Surgery',
    tagline: 'Sub-millimeter Mako robotic precision knee and hip replacements.',
    hero: {
      title: 'Orthopedics & Joint Replacement',
      subtitle: 'Pioneering robotic knee and hip replacements, fast-track rehabilitation, and Swiss titanium implants with zero waiting times.',
      bgImage: '/assets/specialties/orthopedics.webp'
    },
    keralaAdvantage: {
      title: 'The Joint Center',
      highlightTitle: 'Robotic Advantage',
      description: 'Kerala is renowned for Mako robotic surgical suites that preserve bone stock, eliminate human alignment error, and get patients walking within hours.',
      image: '/assets/specialties/orthopedics.webp',
      cards: [
        {
          title: 'Sub-Millimeter Accuracy',
          description: 'Pre-operative 3D CT modeling and real-time haptic robotic arm guidance for implant longevity over 25+ years.',
          icon: 'zap'
        },
        {
          title: 'Walk Within 4 Hours',
          description: 'Enhanced Recovery After Surgery (ERAS) protocols enable rapid weight bearing and minimal post-op pain.',
          icon: 'check'
        }
      ]
    },
    technology: {
      title: 'Advanced Robotic Systems &',
      highlightTitle: 'Surgical Suites',
      subtitle: 'Quaternary care centers equipped with 4th generation robotic joint navigation and laminar airflow theaters.',
      items: [
        {
          title: 'Mako Robotic-Arm Assisted Surgery',
          description: 'Haptic boundary technology that prevents soft tissue damage and preserves healthy cartilage.',
          image: '/assets/specialties/orthopedics.webp'
        },
        {
          title: '3D Pre-Op Virtual Planning',
          description: 'Custom CT bone scans converted into virtual 3D models to determine exact implant sizing.',
          image: '/assets/specialties/orthopedics.webp'
        },
        {
          title: 'Hydrotherapy & Fast-Track Rehab',
          description: 'Early aquatic physiotherapy and robotic gait training to accelerate joint flexion.',
          image: '/assets/specialties/ayurveda-wellness.webp'
        }
      ]
    },
    procedures: {
      title: 'Core Orthopedic',
      highlightTitle: 'Procedures',
      tagline: 'Precision joint reconstruction for active and pain-free living.',
      items: [
        {
          title: 'Robotic Total Knee Replacement',
          description: 'Sub-millimeter precision resurfacing of arthritic knee joints with kinematic alignment.',
          icon: '/assets/icons/journey1.svg',
          isDark: true
        },
        {
          title: 'Minimally Invasive Hip Replacement',
          description: 'Muscle-sparing anterior approach hip arthroplasty with ceramic-on-crosslinked polyethylene.',
          icon: '/assets/icons/journey2.svg',
          isDark: false
        },
        {
          title: 'Arthroscopic Shoulder & ACL Repair',
          description: 'Keyhole sports medicine reconstruction of torn ligaments and rotator cuff tendons.',
          icon: '/assets/icons/journey3.svg',
          isDark: true
        }
      ]
    },
    costComparison: {
      title: 'First-World Robotics,',
      highlightTitle: 'Accessible Costs',
      subtitle: 'Compare UK/USA private orthopaedic hospital costs with Kerala JCI quaternary joint centers:',
      table: [
        {
          procedure: 'Robotic Knee Replacement (Single)',
          usCost: '$30,000 - $48,000',
          keralaCost: '$5,200 - $7,000',
          savings: '~82%'
        },
        {
          procedure: 'Bilateral Knee Replacement (Both)',
          usCost: '$52,000 - $85,000',
          keralaCost: '$8,800 - $11,500',
          savings: '~84%'
        },
        {
          procedure: 'Total Hip Replacement (Ceramic)',
          usCost: '$32,000 - $50,000',
          keralaCost: '$5,800 - $7,600',
          savings: '~82%'
        }
      ],
      notice: 'Includes FDA-approved Stryker/Smith & Nephew implants, Mako robotic console usage, 5 hospital days, and physiotherapy.'
    }
  },

  'ayurvedic': {
    slug: 'ayurvedic',
    treatmentKey: 'ayurveda',
    navName: 'Ayurvedic Healing & Wellness',
    tagline: 'Authentic Panchakarma & classical healing retreats in God’s Own Country.',
    hero: {
      title: 'Authentic Ayurvedic Healing in Kerala',
      subtitle: 'Experience authentic classical Ayurveda at trusted NABH-accredited sanctums. With personalised care rooted in centuries-old Vaidya lineages, our programs restore balance and vitality.',
      bgImage: '/assets/specialties/ayurveda-wellness.webp'
    },
    keralaAdvantage: {
      title: 'What Makes Kerala the',
      highlightTitle: 'Cradle of Ayurveda?',
      description: 'Kerala possesses an unbroken lineage of traditional Vaidyas, tropical biodiversity of rare medicinal herbs, and a climate ideal for cellular rejuvenation.',
      image: '/assets/home/ready-to-embrace.png',
      cards: [
        {
          title: 'Unbroken Lineage of Vaidyas',
          description: 'Consult with 4th and 5th generation classical Ayurvedic physicians practicing authentic Ashtavaidya traditions.',
          icon: 'award'
        },
        {
          title: 'Organic Herbal Formulations',
          description: 'Freshly harvested herbal decoctions and medicated oils prepared directly at classical on-site pharmacies.',
          icon: 'shield'
        }
      ]
    },
    technology: {
      title: 'Holistic Sanctuaries &',
      highlightTitle: 'Clinical Facilities',
      subtitle: 'Modern clinical diagnosis paired with authentic traditional therapies in serene lakefront and backwater retreat settings.',
      items: [
        {
          title: 'Classical Panchakarma Suites',
          description: 'Specialized therapy chambers equipped with traditional single-piece Neem/Mahogany Droni tables and herbal steam cabinets.',
          image: '/assets/specialties/ayurveda-wellness.webp'
        },
        {
          title: 'Integrative Clinical Diagnostics',
          description: 'Modern biochemical blood profiling and pulse diagnosis (Nadi Pariksha) alongside herbal protocols.',
          image: '/assets/home/heal-faster.png'
        },
        {
          title: 'Therapeutic Yoga & Meditation',
          description: 'Custom yoga regimens tailored to your specific Prakriti (body constitution) led by Himalayan certified yoga masters.',
          image: '/assets/home/kerala_backwaters_houseboat.jpg'
        }
      ]
    },
    procedures: {
      title: 'Core Panchakarma &',
      highlightTitle: 'Therapies',
      tagline: 'Five-fold systemic detoxification for complete cellular renewal.',
      items: [
        {
          title: 'Panchakarma Detox Protocol',
          description: 'Vamana, Virechana, Basti, Nasya, and Raktamokshana tailored to reset metabolism and purge accumulated toxins.',
          icon: '/assets/icons/journey1.svg',
          isDark: true
        },
        {
          title: 'Shirodhara & Abhyanga',
          description: 'Continuous stream of warm medicated herbal oil on the third eye combined with synchronized full-body massage.',
          icon: '/assets/icons/journey2.svg',
          isDark: false
        },
        {
          title: 'Kizhi & Pizhichil',
          description: 'Warm herbal poultice compress and royal medicated oil bath for chronic arthritis, joint stiffness, and nerves.',
          icon: '/assets/icons/journey3.svg',
          isDark: true
        }
      ]
    },
    costComparison: {
      title: 'All-Inclusive Retreat,',
      highlightTitle: 'Fraction of European Rates',
      subtitle: 'Compare Swiss and Austrian medical spas with authentic Kerala all-inclusive Ayurvedic clinical retreats:',
      table: [
        {
          procedure: '14-Day Panchakarma Detox & Cleanse',
          usCost: '$12,000 - $18,000',
          keralaCost: '$1,800 - $2,900',
          savings: '~84%'
        },
        {
          procedure: '21-Day Chronic Arthritis Protocol',
          usCost: '$16,000 - $25,000',
          keralaCost: '$2,800 - $4,200',
          savings: '~83%'
        },
        {
          procedure: '7-Day Stress & Rejuvenation Reset',
          usCost: '$7,500 - $11,000',
          keralaCost: '$1,100 - $1,750',
          savings: '~84%'
        }
      ],
      notice: 'Kerala packages include private villa accommodation, doctor consultations, daily prescribed therapies, organic meals, and airport transfers.'
    }
  },

  'cosmetic': {
    slug: 'cosmetic',
    treatmentKey: 'cosmetic',
    navName: 'Cosmetic & Reconstructive',
    tagline: 'Restoring confidence through world-class aesthetic artistry & surgery.',
    hero: {
      title: 'Cosmetic & Reconstructive Surgery',
      subtitle: 'Restoring aesthetic harmony, facial rejuvenation, body contouring, and precision reconstructive surgery performed by Board-certified plastic surgeons.',
      bgImage: '/assets/specialties/cosmetic.webp'
    },
    keralaAdvantage: {
      title: 'The Art of',
      highlightTitle: 'Aesthetic Precision',
      description: 'Kerala blends board-certified plastic surgery with JCI hospital sterile theatre protocols and discreet luxury recovery villas.',
      image: '/assets/specialties/cosmetic.webp',
      cards: [
        {
          title: '3D Digital Simulation',
          description: 'Preview expected facial and body contours before your procedure using advanced imaging software.',
          icon: 'zap'
        },
        {
          title: 'Discreet Private Convalescence',
          description: 'Heal peacefully in lakeside private suites with dedicated nursing care away from public view.',
          icon: 'shield'
        }
      ]
    },
    technology: {
      title: 'Modern Aesthetic Suites &',
      highlightTitle: 'Sculpting Tech',
      subtitle: 'Advanced ultrasound liposuction, endoscopic facial instruments, and sterile hospital theaters.',
      items: [
        {
          title: 'High-Definition VASER Liposuction',
          description: 'Ultrasound-assisted body contouring that preserves delicate nerves and accelerates skin retraction.',
          image: '/assets/specialties/cosmetic.webp'
        },
        {
          title: 'Endoscopic Facial Rejuvenation',
          description: 'Minimal-incision brow and mid-face lifts with hidden scars and natural facial expression preservation.',
          image: '/assets/specialties/cosmetic.webp'
        },
        {
          title: 'Microsurgical Reconstructive Tech',
          description: 'Operating microscopes for precision tissue transfers and post-trauma corrective artistry.',
          image: '/assets/specialties/orthopedics.webp'
        }
      ]
    },
    procedures: {
      title: 'Key Aesthetic',
      highlightTitle: 'Procedures',
      tagline: 'Natural-looking results tailored to your unique anatomical harmony.',
      items: [
        {
          title: 'Rhinoplasty & Facial Contouring',
          description: 'Open and preservation rhinoplasty, blepharoplasty, and mini-facelifts performed under JCI hospital safety.',
          icon: '/assets/icons/journey1.svg',
          isDark: true
        },
        {
          title: 'Mummy Makeover & Tummy Tuck',
          description: 'Combined abdominoplasty, breast lift or augmentation, and targeted waistline refinement in a single stay.',
          icon: '/assets/icons/journey2.svg',
          isDark: false
        },
        {
          title: 'High-Definition Body Sculpting',
          description: 'Precision VASER liposuction targeting abdomen, flanks, arms, and thighs with athletic muscle definition.',
          icon: '/assets/icons/journey3.svg',
          isDark: true
        }
      ]
    },
    costComparison: {
      title: 'Global Excellence,',
      highlightTitle: 'Exceptional Value',
      subtitle: 'Compare Dubai/Western private cosmetic clinic costs with Kerala JCI hospital aesthetic packages:',
      table: [
        {
          procedure: 'Preservation Rhinoplasty',
          usCost: '$12,000 - $20,000',
          keralaCost: '$2,800 - $4,200',
          savings: '~76%'
        },
        {
          procedure: 'Full Abdominoplasty (Tummy Tuck)',
          usCost: '$18,000 - $30,000',
          keralaCost: '$4,200 - $6,500',
          savings: '~77%'
        },
        {
          procedure: 'Mummy Makeover (Combined)',
          usCost: '$25,000 - $45,000',
          keralaCost: '$6,000 - $9,200',
          savings: '~78%'
        }
      ],
      notice: 'All packages include surgeon fees, hospital stay, anesthesia, medical garments, and post-op nursing care.'
    }
  },

  'eyes': {
    slug: 'eyes',
    treatmentKey: 'eyes',
    navName: 'Ophthalmology & Laser Eye Care',
    tagline: 'Contoura Vision LASIK, SMILE Pro, and Robotic Cataract Precision.',
    hero: {
      title: 'Ophthalmology & Laser Eye Surgery',
      subtitle: 'Say goodbye to glasses and cataracts with world-renowned ophthalmic surgeons utilizing German Zeiss VisuMax femtosecond lasers and premium trifocal lens implants.',
      bgImage: '/assets/specialties/eyes.jpg'
    },
    keralaAdvantage: {
      title: 'The Eye Care',
      highlightTitle: 'Advantage',
      description: 'Kerala boasts super-specialty eye institutes equipped with Carl Zeiss VisuMax 800 and Alcon WaveLight systems, treating thousands of international patients every year.',
      image: '/assets/specialties/eyes.jpg',
      cards: [
        {
          title: 'Zero Pain, 15-Min Procedure',
          description: 'Flapless, bladeless refractive laser precision measuring 22,000 corneal elevation points for crisp 20/20 HD vision.',
          icon: 'zap'
        },
        {
          title: 'Over 99.4% Satisfaction',
          description: 'Senior cornea specialists trained at Moorfields Eye Hospital London and premier European institutions.',
          icon: 'check'
        }
      ]
    },
    technology: {
      title: 'Carl Zeiss & Alcon',
      highlightTitle: 'Refractive Suites',
      subtitle: 'Sub-micron corneal mapping and femtosecond laser pulses delivered in under 10 seconds per eye.',
      items: [
        {
          title: 'Carl Zeiss VisuMax SMILE Pro',
          description: 'Keyhole laser extraction of lenticule without corneal flap cut, allowing rapid recovery in 24 hours.',
          image: '/assets/specialties/eyes_laser.jpg'
        },
        {
          title: 'Contoura Vision Topography',
          description: 'Individualized topographic corneal elevation maps correcting higher-order optical aberrations.',
          image: '/assets/specialties/eyes.jpg'
        },
        {
          title: 'Robotic Femto-Cataract Laser',
          description: 'Zero-blade robotic capsulotomy with premium PanOptix trifocal lenses for crystal clear distance, intermediate and near sight.',
          image: '/assets/specialties/eyes_laser.jpg'
        }
      ]
    },
    procedures: {
      title: 'Key Ophthalmic',
      highlightTitle: 'Procedures',
      tagline: 'Permanent freedom from spectacles and advanced corneal restorations.',
      items: [
        {
          title: 'Contoura Vision / SMILE Pro',
          description: 'Bladeless laser refractive treatment correcting myopia, hyperopia, and high astigmatism in minutes.',
          icon: '/assets/icons/journey1.svg',
          isDark: true
        },
        {
          title: 'Robotic Cataract + Trifocal IOL',
          description: 'Robotic laser cataract removal paired with multifocal or toric lenses for spectacle-free vision at all distances.',
          icon: '/assets/icons/journey2.svg',
          isDark: false
        },
        {
          title: 'Implantable Collamer Lens (ICL)',
          description: 'Permanent phakic lens insertion for very high prescriptions where LASIK is anatomically contraindicated.',
          icon: '/assets/icons/journey3.svg',
          isDark: true
        }
      ]
    },
    costComparison: {
      title: 'Crystal Clear Vision,',
      highlightTitle: 'Sensible Investment',
      subtitle: 'Compare European and UAE private laser eye clinic fees with Kerala accredited eye institutes:',
      table: [
        {
          procedure: 'Contoura Vision LASIK (Both Eyes)',
          usCost: '$4,500 - $6,500',
          keralaCost: '$950 - $1,400',
          savings: '~78%'
        },
        {
          procedure: 'Zeiss SMILE Pro (Both Eyes)',
          usCost: '$5,500 - $8,000',
          keralaCost: '$1,300 - $1,900',
          savings: '~76%'
        },
        {
          procedure: 'Robotic Femto-Cataract + Trifocal (Per Eye)',
          usCost: '$5,000 - $7,500',
          keralaCost: '$1,100 - $1,650',
          savings: '~77%'
        }
      ],
      notice: 'Prices include bilateral topography scans, surgeon fees, laser license, post-operative eye drops kit, and follow-up checks.'
    }
  }
};

// Aliases for smooth backwards compatibility
SPECIALTIES_DATA['robotic-surgery'] = SPECIALTIES_DATA['ortho'];
SPECIALTIES_DATA['orthopedics-joint-replacement'] = SPECIALTIES_DATA['ortho'];
SPECIALTIES_DATA['orthopedics'] = SPECIALTIES_DATA['ortho'];
SPECIALTIES_DATA['ayurveda-wellness'] = SPECIALTIES_DATA['ayurvedic'];
SPECIALTIES_DATA['ayurveda'] = SPECIALTIES_DATA['ayurvedic'];
SPECIALTIES_DATA['reconstructive-cosmetic'] = SPECIALTIES_DATA['cosmetic'];
SPECIALTIES_DATA['cardiology'] = SPECIALTIES_DATA['ortho'];
SPECIALTIES_DATA['fertility'] = SPECIALTIES_DATA['cosmetic'];
