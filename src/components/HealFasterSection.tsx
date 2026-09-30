import { motion } from 'framer-motion';
import { Palmtree, Sparkles, HeartPulse, ArrowRight } from 'lucide-react';

interface HealFasterSectionProps {
  onOpenEnquiry: () => void;
}

export const HealFasterSection = ({ onOpenEnquiry }: HealFasterSectionProps) => {
  return (
    <section className="bg-[#183f34] relative overflow-hidden py-16 lg:py-24 text-white font-jakarta">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#287a55]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#88c343]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* Left Text Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-5 sm:gap-6"
          >
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#88c343] bg-white/10 px-3.5 py-1 rounded-full inline-block mb-3">
                Holistic Recuperation
              </span>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
                Heal Faster in <span className="text-[#88c343]">Nature&apos;s Lap.</span>
              </h2>
            </div>

            <p className="text-xs sm:text-base text-white/85 leading-relaxed font-normal">
              Medical recovery is dramatically enhanced when body and mind are at peace. Following your hospital procedure, transition to our private backwaters sanctuary surrounded by lush tropical greenery, pure air, and therapeutic waterways.
            </p>

            <div className="space-y-3.5 sm:space-y-4 pt-1 sm:pt-2">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center shrink-0 text-[#88c343]">
                  <Palmtree size={18} />
                </div>
                <div>
                  <div className="font-semibold text-white text-sm sm:text-base">Serene Backwaters Convalescence</div>
                  <div className="text-xs sm:text-sm text-white/75 mt-0.5">Private lakeside villas in Kumarakom and Alleppey designed for restful healing.</div>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center shrink-0 text-[#88c343]">
                  <Sparkles size={18} />
                </div>
                <div>
                  <div className="font-semibold text-white text-sm sm:text-base">Gentle Post-Op Ayurvedic Therapies</div>
                  <div className="text-xs sm:text-sm text-white/75 mt-0.5">Warm medicated herbal oils and personalized lymphatic drainage to speed recovery.</div>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center shrink-0 text-[#88c343]">
                  <HeartPulse size={18} />
                </div>
                <div>
                  <div className="font-semibold text-white text-sm sm:text-base">Continuous Clinical Monitoring</div>
                  <div className="text-xs sm:text-sm text-white/75 mt-0.5">Dedicated physiotherapists and visiting nurses monitor vital signs and wound healing.</div>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenEnquiry}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white text-[#183f34] hover:bg-gray-100 font-semibold text-xs sm:text-base px-6 sm:px-7 py-3 sm:py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer"
              >
                <span>Explore Recovery Sanctuaries</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </motion.div>

          {/* Right Image Container */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 aspect-[4/3]">
              <img
                src="/assets/home/heal-faster.png"
                alt="Kerala Ayurvedic Sanctuary"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-6 sm:left-6 sm:right-6 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 text-white">
                <div className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#88c343]">Nature&apos;s Medicine</div>
                <div className="text-xs sm:text-sm font-semibold mt-0.5">Where clean air, gentle backwaters, and medical expertise converge.</div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
