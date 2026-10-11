import { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeroV2Props {
  onQuickConsultation?: (email: string) => void;
}

export const HeroV2 = ({ onQuickConsultation }: HeroV2Props) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onQuickConsultation) {
      onQuickConsultation(email);
    }
  };

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

        {/* Quick Inquiry Widget matching UX Pilot screenshot */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-9 sm:mt-10 max-w-lg mx-auto w-full px-2"
        >
          <form 
            onSubmit={handleSubmit}
            className="relative flex flex-col sm:flex-row items-stretch sm:items-center bg-white rounded-2xl sm:rounded-full p-1.5 sm:p-2 shadow-xl shadow-teal-900/5 border border-gray-100/90 hover:border-teal-300 transition-all duration-300 focus-within:border-[#0d766e] focus-within:ring-2 focus-within:ring-teal-100"
          >
            <input 
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="w-full bg-transparent pl-4 sm:pl-6 pr-3 py-3 text-sm sm:text-base text-gray-800 placeholder-gray-400 focus:outline-none"
            />
            <button
              type="submit"
              className="mt-2 sm:mt-0 shrink-0 bg-[#0d766e] hover:bg-[#0b635c] text-white px-6 sm:px-7 py-3 rounded-xl sm:rounded-full text-sm font-semibold transition-all inline-flex items-center justify-center gap-1.5 shadow-sm hover:shadow-md cursor-pointer whitespace-nowrap"
            >
              <span>Quick Consultation</span>
              <ChevronRight className="size-4" />
            </button>
          </form>

          {/* Micro-copy below widget matching screenshot */}
          <p className="mt-3 text-xs sm:text-[13px] text-gray-400 text-center font-normal">
            No commitment. Just expert guidance.
          </p>
        </motion.div>

      </div>
    </section>
  );
};
