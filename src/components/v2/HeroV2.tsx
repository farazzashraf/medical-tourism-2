import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeroV2Props {
  onGetQuotation?: () => void;
}

export const HeroV2 = ({ onGetQuotation }: HeroV2Props) => {
  return (
    <section 
      id="hero" 
      className="relative min-h-[85vh] sm:min-h-[88vh] flex items-center justify-center pt-28 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#fafcfb] via-[#f7faf8] to-white overflow-hidden"
    >
      {/* Background ambient accents for luxury depth */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-teal-100/35 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-72 h-72 bg-emerald-100/20 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto text-center z-10 w-full">
        
        {/* Headline exactly matching uploaded mockup */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-bold text-[#113830] tracking-tight leading-[1.12]"
        >
          World-Class Care Meets
          <span className="block mt-2 font-serif-accent italic font-normal text-[#0d766e] tracking-normal">
            Ancient Wisdom.
          </span>
        </motion.h1>

        {/* Subtitle matching uploaded mockup */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 sm:mt-7 text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-normal px-2"
        >
          Your seamless journey to health and wellness in India. We coordinate everything so you can focus on healing.
        </motion.p>

        {/* Clean CTA Button: Opens Drawer for Full Quotation Details */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col items-center justify-center gap-3"
        >
          <button
            onClick={() => onGetQuotation && onGetQuotation()}
            className="group inline-flex items-center gap-2.5 bg-[#0d766e] hover:bg-[#0b635c] text-white px-8 py-4 rounded-full text-base sm:text-lg font-medium transition-all duration-300 shadow-md hover:shadow-xl hover:gap-3.5 cursor-pointer"
          >
            <span>Get Quotation</span>
            <ArrowRight className="size-5 transition-transform duration-300 group-hover:translate-x-0.5" />
          </button>

          <p className="text-xs sm:text-[13px] text-gray-400 text-center font-normal">
            No commitment. Just expert guidance & confidential cost breakdown.
          </p>
        </motion.div>

      </div>
    </section>
  );
};
