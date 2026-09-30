import { motion } from 'framer-motion';
import { Check, Star, ArrowRight, Sparkles, Crown, Shield } from 'lucide-react';

interface PackagesSectionProps {
  onOpenEnquiry: (packageTitle?: string) => void;
}

export const PackagesSection = ({ onOpenEnquiry }: PackagesSectionProps) => {
  const packages = [
    {
      id: 'serenity-plus',
      tag: 'Most Popular',
      isPopular: true,
      title: 'The Serenity Plus',
      subtitle: 'Where Healing Feels Like a Holiday',
      description: 'Our signature choice for international patients. Blends advanced medical care with Kerala’s serene backwaters for a tranquil recovery.',
      icon: <Sparkles size={24} className="text-[#183f34]" />,
      rating: '4.9',
      features: [
        {
          title: 'JCI / NABH Quaternary Care',
          desc: 'Minimally invasive procedures in top-tier accredited hospitals with leading consultants.'
        },
        {
          title: '5-Star Lakeside Convalescence',
          desc: 'Private ensuite room followed by recuperation at a 5-star Kumarakom sanctuary.'
        },
        {
          title: 'Seamless Concierge Logistics',
          desc: 'Bilingual host, airport pick-up/drop, and custom dietary preparation.'
        },
        {
          title: 'Comprehensive Rehabilitation',
          desc: 'Daily one-on-one physiotherapy and gentle Ayurvedic soothing therapies.'
        }
      ]
    },
    {
      id: 'royal-wellness',
      tag: 'Pinnacle of Luxury',
      isPopular: false,
      title: 'The Royal Wellness',
      subtitle: 'Pinnacle of Luxury & Precision Medicine',
      description: 'For discerning patients who demand presidential suites, private lakefront villas, and VIP concierge accompaniment.',
      icon: <Crown size={24} className="text-[#183f34]" />,
      rating: '5.0',
      features: [
        {
          title: 'Robotic Precision Surgery',
          desc: 'Priority access to chief surgical directors with sub-millimeter robotic options.'
        },
        {
          title: 'Presidential Convalescence',
          desc: 'Private deluxe hospital suite followed by a private lakeside pool villa.'
        },
        {
          title: 'VIP Chauffeur & Companion',
          desc: 'Private luxury transfers, companion stay, and chef-crafted organic nutrition.'
        },
        {
          title: '12-Month Care Follow-up',
          desc: 'Continuous scheduled virtual follow-up with your surgical director.'
        }
      ]
    },
    {
      id: 'essential-care',
      tag: 'Essential Value',
      isPopular: false,
      title: 'The Essential Care',
      subtitle: 'Targeted Clinical Treatment, Maximum Value',
      description: 'Designed for patients prioritizing surgical excellence and clear cost efficiency without unnecessary extras.',
      icon: <Shield size={24} className="text-[#183f34]" />,
      rating: '4.8',
      features: [
        {
          title: 'NABH Accredited Surgery',
          desc: 'Full surgical care by senior specialists in state-of-the-art sterile theaters.'
        },
        {
          title: 'Standard Private Recovery',
          desc: 'Comfortable private room accommodation with continuous nursing support.'
        },
        {
          title: 'Dedicated Medical Coordinator',
          desc: 'Direct coordinator managing all diagnostic scheduling and documentation.'
        },
        {
          title: 'Transparent Pricing Guarantee',
          desc: 'Guaranteed fixed-cost quotation with zero surprise hospital billing.'
        }
      ]
    }
  ];

  return (
    <section id="packages" className="py-14 sm:py-16 md:py-24 bg-white font-jakarta overflow-hidden">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-[#183f34] bg-[#eef6f2] px-3.5 py-1 rounded-full inline-block mb-3">
            All-Inclusive Care Programs
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#132520] tracking-tight leading-tight">
            Curated Treatment Packages
          </h2>
          <p className="text-xs sm:text-base text-[#536863] mt-2 sm:mt-3 font-normal leading-relaxed">
            Transparent, all-inclusive medical travel experiences designed around your surgical procedure and restorative convalescence.
          </p>
        </div>

        {/* Packages 3-Card Grid: Responsive for Folded, Mobile, Tablet, Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8 items-stretch">
          {packages.map((pkg, idx) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`rounded-2xl sm:rounded-3xl flex flex-col justify-between overflow-hidden transition-all duration-300 relative border ${
                pkg.isPopular
                  ? 'border-[#183f34] shadow-xl bg-gradient-to-b from-[#f8fbf9] to-white ring-1 ring-[#183f34]/30 lg:-translate-y-2'
                  : 'bg-white border-gray-200/90 shadow-sm hover:shadow-lg'
              }`}
            >
              {/* Popular Badge banner */}
              {pkg.isPopular && (
                <div className="bg-[#183f34] text-white text-[11px] sm:text-xs font-bold uppercase tracking-wider py-2 px-3 sm:px-4 text-center flex items-center justify-center gap-1.5">
                  <Sparkles size={13} className="text-[#88c343]" />
                  <span>Most Chosen by International Patients</span>
                </div>
              )}

              {/* Content Body */}
              <div className="p-4 sm:p-7 md:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#eef6f2] flex items-center justify-center">
                      {pkg.icon}
                    </div>
                    <div className="flex items-center gap-1 bg-[#eef6f2] px-2.5 sm:px-3 py-1 rounded-full text-[11px] sm:text-xs font-bold text-[#183f34]">
                      <Star size={12} className="text-amber-500 fill-amber-500" />
                      <span>{pkg.rating} Rating</span>
                    </div>
                  </div>

                  <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#eef6f2] text-[#183f34]">
                    {pkg.tag}
                  </span>

                  <h3 className="text-xl sm:text-2xl font-bold font-jakarta mt-2.5 sm:mt-3 text-[#132520]">
                    {pkg.title}
                  </h3>

                  <p className="text-xs font-medium text-[#183f34] mt-1">
                    {pkg.subtitle}
                  </p>

                  <p className="text-xs sm:text-sm mt-2.5 sm:mt-3 leading-relaxed text-[#536863]">
                    {pkg.description}
                  </p>

                  {/* Features list */}
                  <div className="mt-5 sm:mt-6 space-y-2.5 sm:space-y-3 pt-5 sm:pt-6 border-t border-gray-100">
                    {pkg.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2.5 sm:gap-3">
                        <div className="w-4.5 h-4.5 sm:w-5 sm:h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 bg-[#eef6f2] text-[#183f34]">
                          <Check size={11} strokeWidth={3} />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-[#132520]">
                            {feat.title}
                          </div>
                          <div className="text-[11px] leading-tight text-gray-500 mt-0.5">
                            {feat.desc}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action CTA */}
                <div className="pt-6 sm:pt-8">
                  <button
                    onClick={() => onOpenEnquiry(pkg.title)}
                    className={`w-full flex items-center justify-center gap-2 font-semibold py-3 sm:py-3.5 px-4 sm:px-6 rounded-full text-xs sm:text-sm transition-all duration-200 cursor-pointer shadow-sm ${
                      pkg.isPopular
                        ? 'bg-[#183f34] hover:bg-[#12332a] text-white shadow-md'
                        : 'bg-white hover:bg-[#eef6f2] text-[#183f34] border border-[#183f34]/30'
                    }`}
                  >
                    <span>Inquire About Package</span>
                    <ArrowRight size={15} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
