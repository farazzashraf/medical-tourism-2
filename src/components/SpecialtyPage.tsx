import React, { useEffect } from 'react';
import { SPECIALTIES_DATA } from '../data/specialtiesData';
import type { SpecialtyData } from '../data/specialtiesData';
import { 
  Zap, 
  CheckCircle2, 
  Award, 
  ShieldCheck, 
  ArrowRight, 
  ArrowLeft,
  Info,
  ChevronRight
} from 'lucide-react';
import { motion } from 'framer-motion';

interface SpecialtyPageProps {
  slug: string;
  onOpenEnquiry: (treatmentKey?: string) => void;
  onNavigateSpecialty: (slug: string) => void;
  onGoHome: () => void;
}

export const SpecialtyPage: React.FC<SpecialtyPageProps> = ({
  slug,
  onOpenEnquiry,
  onNavigateSpecialty,
  onGoHome
}) => {
  // Find current specialty data or default to dental
  const currentData: SpecialtyData = SPECIALTIES_DATA[slug] || SPECIALTIES_DATA['dental'];

  // Scroll to top when slug changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug]);

  const renderIcon = (type: string) => {
    switch (type) {
      case 'zap':
        return <Zap size={18} className="text-[#183f34]" />;
      case 'check':
        return <CheckCircle2 size={18} className="text-[#183f34]" />;
      case 'award':
        return <Award size={18} className="text-[#183f34]" />;
      case 'shield':
      default:
        return <ShieldCheck size={18} className="text-[#183f34]" />;
    }
  };

  // Strictly canonical 5 treatments
  const canonicalSlugs = ['dental', 'ortho', 'ayurvedic', 'cosmetic', 'eyes'];
  const otherSpecialties = canonicalSlugs
    .filter(s => s !== currentData.slug)
    .map(s => SPECIALTIES_DATA[s])
    .filter(Boolean);

  return (
    <div className="bg-white font-jakarta min-h-screen text-[#132520] pt-20 md:pt-24">
      
      {/* SECTION 0: HERO HEADER */}
      <section className="relative min-h-[440px] md:min-h-[540px] py-16 md:py-20 flex items-center justify-center overflow-hidden">
        {/* Full-width hero image with subtle zoom effect */}
        <img 
          src={currentData.hero.bgImage} 
          alt={currentData.hero.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Subtle dark overlay for crisp text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/60 backdrop-blur-[1px]" />

        <div className="relative z-10 text-center text-white px-4 sm:px-8 w-full max-w-4xl mx-auto">
          {/* Breadcrumbs Navigation */}
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-medium text-white/80 mb-6">
            <button 
              onClick={onGoHome}
              className="hover:text-white transition-colors cursor-pointer flex items-center gap-1"
            >
              <ArrowLeft size={14} /> Home
            </button>
            <span>/</span>
            <span className="text-white/60">Specialties</span>
            <span>/</span>
            <span className="text-[#88c343] font-semibold">{currentData.navName}</span>
          </div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-3 sm:mb-4 md:mb-6 font-jakarta"
          >
            {currentData.hero.title}
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xs sm:text-base md:text-lg text-white/90 max-w-3xl mx-auto mb-6 sm:mb-8 leading-relaxed font-normal"
          >
            {currentData.hero.subtitle}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-2.5 sm:gap-4 max-w-lg mx-auto w-full"
          >
            <button
              onClick={() => onOpenEnquiry(currentData.treatmentKey)}
              className="inline-flex items-center justify-center cursor-pointer gap-2 rounded-full font-semibold transition-all group bg-[#183f34] text-white hover:bg-[#12332a] shadow-lg hover:shadow-xl py-3 sm:py-3.5 px-5 sm:px-8 text-xs sm:text-base text-center"
            >
              <span>Begin Your Treatment Plan</span>
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1 shrink-0" />
            </button>

            <a
              href="https://wa.me/971501234567"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center cursor-pointer gap-2 rounded-full font-semibold transition-all bg-white/90 hover:bg-white text-[#132520] shadow-md hover:shadow-lg py-3 sm:py-3.5 px-5 sm:px-7 text-xs sm:text-base text-center"
            >
              <span>Consult Care Coordinator</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* SECTION 1: THE KERALA ADVANTAGE */}
      <section className="py-14 sm:py-16 md:py-24 px-3.5 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#183f34] bg-[#eef6f2] px-3.5 py-1 rounded-full inline-block mb-3">
                Why Kerala
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#132520] mb-4 tracking-tight leading-tight">
                {currentData.keralaAdvantage.title} <span className="text-[#183f34]">{currentData.keralaAdvantage.highlightTitle}</span>
              </h2>
              <p className="text-sm sm:text-base text-[#536863] leading-relaxed">
                {currentData.keralaAdvantage.description}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {currentData.keralaAdvantage.cards.map((card, i) => (
                <div 
                  key={i}
                  className="bg-[#fbfcfb] p-5 sm:p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2 hover:shadow-md transition-shadow"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#eef6f2] flex items-center justify-center shadow-sm">
                    {renderIcon(card.icon)}
                  </div>
                  <h3 className="text-base font-bold text-[#132520]">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#536863] leading-relaxed">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl overflow-hidden shadow-xl h-[340px] sm:h-[440px] lg:h-[480px] relative border border-gray-100 group"
          >
            <img 
              src={currentData.keralaAdvantage.image} 
              alt={currentData.keralaAdvantage.highlightTitle}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white text-xs sm:text-sm font-semibold flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#88c343] animate-pulse" />
              <span>Accredited Centers of Surgical Excellence • Kerala, India</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: ADVANCED TECHNOLOGY & INFRASTRUCTURE */}
      <section className="py-14 sm:py-16 md:py-20 px-3.5 sm:px-6 lg:px-8 bg-[#fbfdfb] border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto space-y-8 sm:space-y-12">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#183f34] bg-[#eef6f2] px-3.5 py-1 rounded-full inline-block mb-3">
              Precision Infrastructure
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#132520] mb-3 tracking-tight">
              {currentData.technology.title} <span className="text-[#183f34]">{currentData.technology.highlightTitle}</span>
            </h2>
            <p className="text-[#536863] text-xs sm:text-base leading-relaxed">
              {currentData.technology.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-7">
            {currentData.technology.items.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col p-4 sm:p-5 group hover:-translate-y-1"
              >
                <div className="relative w-full aspect-[4/3] rounded-xl mb-4 overflow-hidden bg-gray-100">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-bold text-[#132520] mb-2 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#536863] leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <button
                    onClick={() => onOpenEnquiry(currentData.treatmentKey)}
                    className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-semibold text-[#183f34] hover:text-[#12332a] transition-colors cursor-pointer"
                  >
                    <span>Consult Specialists for this Tech</span>
                    <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: KEY PROCEDURES & BENEFITS */}
      <section className="bg-white py-14 sm:py-16 md:py-24 px-3.5 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            
            {/* Left title column */}
            <div className="lg:col-span-4 space-y-3">
              <span className="inline-block text-[11px] sm:text-xs uppercase font-bold tracking-widest text-[#183f34] bg-[#eef6f2] px-3.5 py-1 rounded-full">
                Clinical Precision
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#132520] tracking-tight leading-tight">
                {currentData.procedures.title} <span className="text-[#183f34]">{currentData.procedures.highlightTitle}</span>
              </h2>
              <p className="text-xs sm:text-base font-normal text-[#536863] mt-1">
                {currentData.procedures.tagline}
              </p>
              
              <div className="pt-3 sm:pt-4 border-t border-gray-100 text-xs text-gray-500 space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-[#183f34] shrink-0" />
                  <span>JCI & NABH accredited surgical theaters</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-[#183f34] shrink-0" />
                  <span>Sub-millimeter margin safety protocols</span>
                </div>
              </div>
            </div>

            {/* Right Cards */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
              {currentData.procedures.items.map((proc, i) => (
                <div 
                  key={i}
                  className={`rounded-2xl p-4 sm:p-6 flex flex-col justify-between transition-all duration-300 shadow-sm border ${
                    proc.isDark 
                      ? 'bg-[#183f34] text-white border-[#183f34]' 
                      : 'bg-[#fbfcfb] text-[#132520] border-gray-100'
                  }`}
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center p-2 mb-4 sm:mb-5">
                      <img 
                        src={proc.icon} 
                        alt={proc.title}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <h3 className="text-sm sm:text-base font-bold mb-2">
                      {proc.title}
                    </h3>
                    <p className={`text-xs leading-relaxed ${proc.isDark ? 'text-white/80' : 'text-[#536863]'}`}>
                      {proc.description}
                    </p>
                  </div>

                  <div className="mt-4 sm:mt-5 pt-3 sm:pt-4 border-t border-white/10">
                    <button
                      onClick={() => onOpenEnquiry(currentData.treatmentKey)}
                      className={`text-xs font-semibold flex items-center gap-1 cursor-pointer transition-colors ${
                        proc.isDark ? 'text-[#88c343] hover:text-white' : 'text-[#183f34] hover:text-[#12332a]'
                      }`}
                    >
                      <span>Inquire Procedure</span>
                      <ArrowRight size={13} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: COST COMPARISON */}
      <section className="py-14 sm:py-16 md:py-24 px-3.5 sm:px-6 lg:px-8 bg-[#fbfdfb] border-t border-gray-100">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-[#183f34] bg-[#eef6f2] px-3.5 py-1 rounded-full inline-block mb-3">
              Transparent Economics
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#132520] mb-3 tracking-tight">
              {currentData.costComparison.title} <span className="text-[#183f34]">{currentData.costComparison.highlightTitle}</span>
            </h2>
            <p className="text-[#536863] text-sm sm:text-base leading-relaxed">
              {currentData.costComparison.subtitle}
            </p>
          </div>

          {/* Desktop Comparison Table */}
          <div className="hidden md:block overflow-hidden rounded-2xl shadow-md border border-gray-100 bg-white">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr>
                  <th className="p-5 bg-white text-sm font-bold text-gray-900 border-b border-gray-100">
                    Procedure
                  </th>
                  <th className="p-5 bg-[#183f34] text-sm font-bold text-white border-b border-[#183f34]">
                    Cost in West / USA ($)
                  </th>
                  <th className="p-5 bg-[#12332a] text-sm font-bold text-white border-b border-[#12332a]">
                    Cost in Kerala ($)
                  </th>
                  <th className="p-5 bg-[#287a55] text-sm font-bold text-white border-b border-[#287a55]">
                    Total Savings
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-sm">
                {currentData.costComparison.table.map((row, idx) => (
                  <tr key={idx} className="hover:bg-gray-50/70 transition-colors">
                    <td className="p-5 font-bold text-gray-900 border-r border-gray-100">
                      {row.procedure}
                    </td>
                    <td className="p-5 text-gray-400 line-through font-semibold border-r border-gray-100">
                      {row.usCost}
                    </td>
                    <td className="p-5 font-bold text-[#183f34] text-base border-r border-gray-100">
                      {row.keralaCost}
                    </td>
                    <td className="p-5">
                      <span className="inline-flex items-center px-3 py-0.5 rounded-full text-xs font-extrabold bg-[#eef6f2] text-[#183f34]">
                        {row.savings}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Comparison Cards */}
          <div className="flex flex-col gap-4 md:hidden">
            {currentData.costComparison.table.map((row, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 space-y-3">
                <div className="border-b border-gray-100 pb-2">
                  <h3 className="text-base font-bold text-gray-900">{row.procedure}</h3>
                </div>

                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-400 font-semibold uppercase">Western Cost:</span>
                  <span className="font-bold text-gray-400 line-through">{row.usCost}</span>
                </div>

                <div className="flex items-center justify-between text-xs bg-gray-50 p-2.5 rounded-xl">
                  <span className="font-bold text-[#183f34] uppercase">Kerala Inclusive:</span>
                  <span className="text-sm font-bold text-[#183f34]">{row.keralaCost}</span>
                </div>

                <div className="flex items-center justify-between bg-[#eef6f2] p-2.5 rounded-xl text-xs">
                  <span className="font-bold text-[#183f34] uppercase">Total Savings:</span>
                  <span className="text-base font-bold text-[#183f34]">{row.savings}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Note & Contact Bar */}
          <div className="bg-[#183f34] p-4 sm:p-7 flex flex-col md:flex-row items-stretch sm:items-center justify-between gap-4 sm:gap-6 rounded-2xl sm:rounded-3xl text-white shadow-lg">
            <div className="flex items-start sm:items-center gap-3 sm:gap-3.5">
              <Info size={20} className="text-[#88c343] shrink-0 mt-0.5 sm:mt-0" />
              <p className="text-xs sm:text-sm text-white/90 max-w-2xl leading-relaxed">
                <strong className="text-white">Note:</strong> {currentData.costComparison.notice}
              </p>
            </div>

            <button
              onClick={() => onOpenEnquiry(currentData.treatmentKey)}
              className="inline-flex items-center justify-center cursor-pointer gap-2 rounded-full text-xs sm:text-sm font-semibold transition-all bg-white text-[#183f34] hover:bg-gray-100 shadow-md py-3 px-5 sm:px-6 w-full sm:w-auto shrink-0 text-center"
            >
              <span>Get Itemized Estimate</span>
              <ArrowRight size={14} className="shrink-0" />
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 5: EXPLORE OTHER SPECIALTIES */}
      <section className="py-14 sm:py-16 px-3.5 sm:px-6 lg:px-8 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs uppercase font-bold tracking-widest text-[#183f34] bg-[#eef6f2] px-3.5 py-1 rounded-full">
              Explore Centers of Excellence
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#132520] mt-2">
              Other Medical Specialties
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {otherSpecialties.map((spec) => (
              <div 
                key={spec.slug}
                onClick={() => onNavigateSpecialty(spec.slug)}
                className="bg-[#fbfcfb] hover:bg-white rounded-2xl p-4 border border-gray-100 hover:border-[#183f34]/30 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  <div className="h-32 rounded-xl overflow-hidden mb-3 relative bg-gray-100">
                    <img 
                      src={spec.hero.bgImage} 
                      alt={spec.navName}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20" />
                  </div>
                  <h3 className="font-bold text-sm text-[#132520] group-hover:text-[#183f34] transition-colors">
                    {spec.navName}
                  </h3>
                  <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                    {spec.tagline}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-semibold text-[#183f34]">
                  <span>Explore Specialty</span>
                  <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};
