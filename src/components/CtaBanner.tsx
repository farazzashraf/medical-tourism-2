import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface CtaBannerProps {
  onOpenEnquiry: () => void;
}

export const CtaBanner = ({ onOpenEnquiry }: CtaBannerProps) => {
  return (
    <section className="py-10 sm:py-12 md:py-20 px-3 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-gray-100 min-h-[200px] sm:min-h-[220px] flex items-center"
        >
          {/* Panoramic background image */}
          <img
            src="/assets/home/kerala_panoramic_landscape.jpg"
            alt="Kerala Panoramic Waters and Hills"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />

          {/* Soft gradient wash overlay matching screenshot */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#eef6f2]/95 via-[#f0f7f3]/85 to-white/70 backdrop-blur-[2px]" />

          {/* Content container */}
          <div className="relative z-10 w-full px-4 sm:px-8 md:px-12 py-8 sm:py-10 flex flex-col md:flex-row items-center justify-between gap-6">
            
            {/* Left Content */}
            <div className="max-w-2xl text-center md:text-left">
              <h2 className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-[#132520] tracking-tight font-jakarta">
                Plan Your Treatment <br className="hidden sm:inline" />
                in Kerala Today
              </h2>
              <p className="text-xs sm:text-base text-[#4a5e57] mt-2 font-normal leading-relaxed">
                Get a personalized treatment plan, estimated cost and travel guidance from our patient care team.
              </p>
            </div>

            {/* Right Action Button & Subtext */}
            <div className="flex flex-col items-center md:items-end shrink-0 w-full md:w-auto">
              <button
                onClick={onOpenEnquiry}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#183f34] hover:bg-[#12332a] text-white font-semibold text-xs sm:text-base px-5 sm:px-7 py-3 sm:py-3.5 rounded-full shadow-md hover:shadow-xl transition-all duration-200 group cursor-pointer"
              >
                <span>Get a Personalized Plan</span>
                <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
              </button>
              <span className="text-[11px] sm:text-xs text-[#536863] mt-2 sm:mt-2.5 font-medium">
                Free consultation <span className="mx-1">•</span> No obligation
              </span>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};
