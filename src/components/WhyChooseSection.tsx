import { useState } from 'react';
import { 
  Building2, 
  UserCheck, 
  Banknote, 
  Users, 
  Plane, 
  Flower2, 
  ArrowRight,
  X,
  CheckCircle2
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const WhyChooseSection = () => {
  const [isStoryOpen, setIsStoryOpen] = useState(false);

  const features = [
    {
      icon: <Building2 className="size-6 text-[#183f34]" />,
      title: 'Top-Rated Hospitals',
      desc: 'Accredited quaternary medical centers with cutting-edge surgical robotics.',
    },
    {
      icon: <UserCheck className="size-6 text-[#183f34]" />,
      title: 'Experienced Specialists',
      desc: 'Western-board certified physicians and pioneering super-specialists.',
    },
    {
      icon: <Banknote className="size-6 text-[#183f34]" />,
      title: 'Cost-Effective Care',
      desc: 'Save up to 70% compared to Western and UAE private healthcare fees.',
    },
    {
      icon: <Users className="size-6 text-[#183f34]" />,
      title: 'Personalized Patient Support',
      desc: 'Dedicated multilingual care managers by your side 24/7.',
    },
    {
      icon: <Plane className="size-6 text-[#183f34]" />,
      title: 'Easy Travel & Stay Arrangements',
      desc: 'Seamless visa guidance, direct flights, airport pick-ups and luxury stays.',
    },
    {
      icon: <Flower2 className="size-6 text-[#183f34]" />,
      title: 'Peaceful Recovery Environment',
      desc: 'Rest and recuperate amidst tranquil backwaters, palm groves, and fresh air.',
    },
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-[#fbfdfb] relative overflow-hidden">
      {/* Background illustration / photo on the right half */}
      <div className="absolute right-0 top-0 bottom-0 w-full lg:w-1/2 opacity-35 lg:opacity-60 pointer-events-none overflow-hidden flex items-center justify-end">
        <div className="relative w-full h-full">
          <img
            src="/assets/home/kerala_panoramic_landscape.jpg"
            alt="Kerala Backwaters Landscape"
            className="w-full h-full object-cover object-left mask-radial"
            style={{
              maskImage: 'linear-gradient(to right, transparent, black 40%)',
              WebkitMaskImage: 'linear-gradient(to right, transparent, black 40%)'
            }}
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Title, Subtitle, Our Story Button */}
          <div className="lg:col-span-5 space-y-5 sm:space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-3 sm:space-y-4"
            >
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#132520] tracking-tight leading-[1.15] font-jakarta">
                Why Choose Kerala for Your Treatment?
              </h2>

              <p className="text-sm sm:text-base text-[#536863] leading-relaxed max-w-md font-normal">
                A perfect blend of advanced medical care, natural healing environment and warm hospitality.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <button
                onClick={() => setIsStoryOpen(true)}
                className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full border border-gray-300 hover:border-[#183f34] text-[#132520] hover:text-[#183f34] bg-white/80 hover:bg-white text-xs sm:text-sm font-semibold transition-all duration-200 shadow-sm hover:shadow group cursor-pointer"
              >
                <span>Our Story</span>
                <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </motion.div>
          </div>

          {/* Right Column: 6 Features Grid matching the screenshot */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5 xl:gap-6">
              {features.map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: idx * 0.08 }}
                  className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 sm:p-5 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col group hover:-translate-y-1"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#eef6f2] flex items-center justify-center shrink-0 mb-3 sm:mb-4 group-hover:bg-[#183f34] transition-colors duration-200">
                    <div className="transition-colors duration-200 group-hover:text-white [&>svg]:group-hover:text-white">
                      {item.icon}
                    </div>
                  </div>

                  <h3 className="text-sm sm:text-base font-bold text-[#132520] font-jakarta leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs text-[#536863] mt-1.5 sm:mt-2 leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Our Story Modal */}
      <AnimatePresence>
        {isStoryOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsStoryOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-2xl z-10 border border-gray-100 font-jakarta max-h-[90vh] overflow-y-auto"
            >
              <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-gray-100">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#183f34]" />
                  <h3 className="text-xl font-bold text-[#132520]">Our Mission & Heritage</h3>
                </div>
                <button
                  onClick={() => setIsStoryOpen(false)}
                  className="p-1.5 text-gray-400 hover:text-gray-700 rounded-full hover:bg-gray-100 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="mt-5 space-y-4 text-sm text-[#536863] leading-relaxed">
                <p>
                  KeralaCare was founded with a singular purpose: to bridge the gap between patients in the UAE, GCC, and West seeking high-precision healthcare without crippling waitlists or exorbitant private costs.
                </p>
                <p>
                  Kerala is known globally as &quot;God&apos;s Own Country&quot; — home to the highest health indicators in South Asia, JCI-accredited tertiary hospitals, Da Vinci robotic surgical theaters, and the authentic 5,000-year lineage of Ayurveda.
                </p>
                <div className="p-4 bg-[#eef6f2] rounded-2xl border border-[#183f34]/15 space-y-2 text-[#132520]">
                  <div className="flex items-center gap-2 font-semibold text-sm text-[#183f34]">
                    <CheckCircle2 size={16} />
                    <span>Transparent Pricing Guarantee</span>
                  </div>
                  <div className="flex items-center gap-2 font-semibold text-sm text-[#183f34]">
                    <CheckCircle2 size={16} />
                    <span>Dedicated VIP Airport & Translation Concierge</span>
                  </div>
                  <div className="flex items-center gap-2 font-semibold text-sm text-[#183f34]">
                    <CheckCircle2 size={16} />
                    <span>Direct Medical Follow-up Post-Return</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex justify-end">
                <button
                  onClick={() => setIsStoryOpen(false)}
                  className="px-6 py-2.5 bg-[#183f34] text-white rounded-full text-sm font-semibold hover:bg-[#12332a] transition-all"
                >
                  Close Story
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
