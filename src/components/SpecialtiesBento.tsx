import { Activity, Sparkles, Eye, Leaf, Smile, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface PopularTreatmentsProps {
  onOpenEnquiry?: (treatment?: string) => void;
  onNavigate?: (path: string) => void;
}

export const SpecialtiesBento = ({ onNavigate }: PopularTreatmentsProps) => {
  // STRICTLY 5 treatments: dental, ortho, ayurvedic, cosmetic, eyes
  const treatments = [
    {
      id: 'dental',
      slug: 'dental',
      title: 'Dental',
      subtitle: 'Implants, smile makeovers & digital prosthodontics',
      image: '/assets/specialties/dental.jpg',
      icon: <Smile size={20} className="text-[#183f34]" />,
    },
    {
      id: 'ortho',
      slug: 'ortho',
      title: 'Ortho',
      subtitle: 'Robotic knee, hip replacement & joint surgery',
      image: '/assets/specialties/orthopedics.webp',
      icon: <Activity size={20} className="text-[#183f34]" />,
    },
    {
      id: 'ayurvedic',
      slug: 'ayurvedic',
      title: 'Ayurvedic',
      subtitle: 'Authentic classical Panchakarma & healing retreats',
      image: '/assets/specialties/ayurveda-wellness.webp',
      icon: <Leaf size={20} className="text-[#183f34]" />,
    },
    {
      id: 'cosmetic',
      slug: 'cosmetic',
      title: 'Cosmetic',
      subtitle: 'Aesthetic facial harmony & body reconstructive surgery',
      image: '/assets/specialties/cosmetic.webp',
      icon: <Sparkles size={20} className="text-[#183f34]" />,
    },
    {
      id: 'eyes',
      slug: 'eyes',
      title: 'Eyes',
      subtitle: 'Contoura Vision LASIK, SMILE Pro & robotic cataracts',
      image: '/assets/specialties/eyes.jpg',
      icon: <Eye size={20} className="text-[#183f34]" />,
    },
  ];

  const handleCardClick = (slug: string) => {
    if (onNavigate) {
      onNavigate(`/specialties/${slug}`);
    } else {
      window.location.href = `/specialties/${slug}`;
    }
  };

  return (
    <section id="popular-treatments" className="py-14 sm:py-16 md:py-20 bg-white font-jakarta">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* Section Header matching screenshot */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-10 gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#132520] tracking-tight">
              Popular Treatments
            </h2>
            <p className="text-xs sm:text-base text-[#536863] mt-2 max-w-2xl font-normal">
              Explore world-class medical care across specialties, supported by leading hospitals in Kerala.
            </p>
          </div>

          <button
            onClick={() => handleCardClick('dental')}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#183f34] hover:text-[#12332a] group cursor-pointer shrink-0 self-start sm:self-auto"
          >
            <span>View all treatments</span>
            <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-1" />
          </button>
        </div>

        {/* 5 Specialty Cards Grid: 1 col on mobile, 2 col on small tablets, 3 col on tablets & laptops, 5 col on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-5 xl:gap-6">
          {treatments.map((treatment, idx) => (
            <motion.div
              key={treatment.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              onClick={() => handleCardClick(treatment.slug)}
              className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden cursor-pointer hover:-translate-y-1.5"
            >
              {/* Image Container */}
              <div className="relative h-36 sm:h-44 w-full overflow-hidden bg-gray-100">
                <img
                  src={treatment.image}
                  alt={treatment.title}
                  className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
              </div>

              {/* Floating Round Icon Badge */}
              <div className="relative px-3.5 sm:px-4 pt-0">
                <div className="-mt-5 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white shadow-md border border-gray-100 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  {treatment.icon}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-3.5 sm:p-4 pt-2.5 sm:pt-3 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold text-[#132520] group-hover:text-[#183f34] transition-colors">
                    {treatment.title}
                  </h3>
                  <p className="text-xs text-[#536863] mt-1.5 leading-relaxed">
                    {treatment.subtitle}
                  </p>
                </div>

                {/* Bottom Circular Arrow Button */}
                <div className="pt-3 sm:pt-4 flex justify-end">
                  <div className="w-8 h-8 rounded-full border border-gray-200 group-hover:border-[#183f34] flex items-center justify-center text-gray-500 group-hover:bg-[#183f34] group-hover:text-white transition-all duration-300">
                    <ArrowRight size={13} className="transition-transform duration-200 group-hover:translate-x-0.5" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
