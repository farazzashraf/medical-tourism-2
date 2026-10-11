import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { CareDetailModal, type CareCategory } from './CareDetailModal';

interface CareCategoriesSectionProps {
  onOpenEnquiry?: (categoryTitle?: string) => void;
}

export const CareCategoriesSection = ({ onOpenEnquiry }: CareCategoriesSectionProps) => {
  const [selectedCategory, setSelectedCategory] = useState<CareCategory | null>(null);

  const categories: CareCategory[] = [
    {
      id: 'dental',
      title: 'Dental',
      badge: 'MEDICAL',
      description: 'Comprehensive cosmetic dentistry, implants, and oral surgeries using 3D imaging technology.',
      image: '/assets/specialties/dental.jpg',
    },
    {
      id: 'wellness',
      title: 'Wellness',
      badge: 'HOLISTIC',
      description: 'Executive health checkups, detox programs, and stress management in premium retreat settings.',
      image: '/assets/packages/royal-wellness.webp',
    },
    {
      id: 'ayurveda',
      title: 'Ayurveda',
      badge: 'TRADITIONAL',
      description: "Panchakarma and traditional therapies at India's most authentic NABH-accredited centers.",
      image: '/images/ayurveda.jpg',
    },
    {
      id: 'orthopedics',
      title: 'Orthopedics',
      badge: 'MEDICAL',
      description: 'Joint replacements, spinal surgeries, and sports medicine with robotic-assisted precision.',
      image: '/assets/specialties/orthopedics.webp',
    },
    {
      id: 'eyecare',
      title: 'Eye Care',
      badge: 'MEDICAL',
      description: 'LASIK, cataract surgeries, and advanced retinal treatments by world-renowned surgeons.',
      image: '/assets/specialties/eyes_laser.jpg',
    },
  ];

  const handleSendInquiry = () => {
    if (onOpenEnquiry) {
      onOpenEnquiry('General Medical Inquiry');
    } else {
      const el = document.getElementById('contact');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookCategory = (title: string) => {
    if (onOpenEnquiry) {
      onOpenEnquiry(title);
    } else {
      const el = document.getElementById('contact');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="treatments" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header matching Page 4 */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#113830] tracking-tight leading-tight">
            Specialized Care Categories
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed font-normal">
            Combining the latest in medical science with holistic healing traditions.
          </p>
        </div>

        {/* 6-Card Grid (3 Columns on Desktop, 2 on Tablet, 1 on Mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* First 5 Treatment Cards */}
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image Frame with Badge */}
              <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                <img 
                  src={cat.image} 
                  alt={cat.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                
                {/* Category Badge top left matching mockup */}
                <div className="absolute top-4 left-4">
                  <span className="inline-block text-[10px] sm:text-[11px] font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-white/95 text-[#0d766e] shadow-xs">
                    {cat.badge}
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 sm:p-7 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#113830] mb-2.5">
                    {cat.title}
                  </h3>
                  <p className="text-sm sm:text-[15px] text-gray-600 leading-relaxed font-normal mb-6">
                    {cat.description}
                  </p>
                </div>

                {/* View Details Link */}
                <div>
                  <button
                    onClick={() => setSelectedCategory(cat)}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0d766e] hover:text-[#0b635c] group-hover:gap-2 transition-all cursor-pointer"
                  >
                    <span>View Details</span>
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* 6th Card: Don't see what you're looking for? (Mint/Cyan Container) */}
          <div className="bg-[#e6f4f1] border border-[#cbe4dd] rounded-3xl p-8 sm:p-9 flex flex-col justify-center items-start shadow-sm">
            <h3 className="text-2xl sm:text-3xl font-bold text-[#113830] mb-4 leading-snug">
              Don't see what you're looking for?
            </h3>
            
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-8 font-normal">
              We coordinate for all major surgical and medical procedures across India. Reach out for a custom consultation.
            </p>

            <button
              onClick={handleSendInquiry}
              className="inline-flex items-center justify-center bg-[#0d766e] hover:bg-[#0b635c] text-white px-7 py-3 rounded-full text-sm sm:text-base font-semibold transition-all shadow-sm hover:shadow-md cursor-pointer"
            >
              Send Inquiry
            </button>
          </div>

        </div>

      </div>

      {/* Interactive Detail Modal */}
      <CareDetailModal 
        category={selectedCategory} 
        onClose={() => setSelectedCategory(null)}
        onBookEnquiry={handleBookCategory}
      />
    </section>
  );
};
