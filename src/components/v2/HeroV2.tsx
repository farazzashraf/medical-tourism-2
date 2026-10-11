import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeroV2Props {
  onExploreTreatments?: () => void;
}

export const HeroV2 = ({ onExploreTreatments }: HeroV2Props) => {
  const handleScrollToTreatments = () => {
    if (onExploreTreatments) {
      onExploreTreatments();
    } else {
      const el = document.getElementById('treatments');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center justify-center pt-28 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#fafcfb] via-[#f7faf8] to-white overflow-hidden"
    >
      {/* Background ambient accents for modern luxury depth */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-teal-100/35 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-72 h-72 bg-emerald-100/20 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto text-center z-10">
        
        {/* Subtle pill tag */}
        {/* <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-100/80 text-[#0d766e] text-xs sm:text-sm font-medium mb-8"
        >
          <Sparkles className="size-3.5" />
          <span>India's Premier Medical Value Concierge</span>
        </motion.div> */}

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
          className="mt-7 text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-normal"
        >
          Your seamless journey to health and wellness in India. We coordinate everything so you can focus on healing.
        </motion.p>

        {/* CTA Button matching uploaded mockup */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex items-center justify-center"
        >
          <button
            onClick={handleScrollToTreatments}
            className="group inline-flex items-center gap-2.5 bg-[#0d766e] hover:bg-[#0b635c] text-white px-8 py-4 rounded-full text-base sm:text-lg font-medium transition-all duration-300 shadow-md hover:shadow-xl hover:gap-3.5 cursor-pointer"
          >
            <span>Explore Treatments</span>
            <ArrowRight className="size-5 transition-transform duration-300 group-hover:translate-x-0.5" />
          </button>
        </motion.div>

      </div>
    </section>
  );
};
