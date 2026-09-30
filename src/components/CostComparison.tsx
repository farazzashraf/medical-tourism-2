import { useState } from 'react';
import { COST_COMPARISON_MATRIX } from '../data/medicalData';
import { TrendingDown, Check, Clock, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface CostComparisonProps {
  onOpenEnquiry: (treatment?: string) => void;
}

export const CostComparison = ({ onOpenEnquiry }: CostComparisonProps) => {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const active = COST_COMPARISON_MATRIX[selectedIdx];

  return (
    <section id="cost-comparison" className="py-16 lg:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl font-montserrat">
        
        {/* Section Heading */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-montserrat text-[#1a202c] mb-4">
            Transparent Pricing &amp; <span className="text-[#7ec142]">Real Savings</span>
          </h2>
          <p className="text-base md:text-lg text-black/70 max-w-2xl mx-auto font-poppins">
            Compare UAE private clinic charges and wait times against HealKerala&apos;s all-inclusive medical travel packages in guaranteed AED.
          </p>
        </motion.div>

        {/* Procedures Tabs Row */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {COST_COMPARISON_MATRIX.map((item, idx) => {
            const isSelected = selectedIdx === idx;
            return (
              <button
                key={idx}
                onClick={() => setSelectedIdx(idx)}
                className={`cursor-pointer px-5 py-3 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 ${
                  isSelected
                    ? 'bg-[#304e48] text-white shadow-lg scale-105'
                    : 'bg-[#f8f9fa] text-gray-700 hover:bg-[#f3feea] hover:text-[#304e48] border border-gray-200'
                }`}
              >
                {item.treatment}
              </button>
            );
          })}
        </div>

        {/* 3-Column Comparative Board */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-gray-200 bg-[#f8f9fa] p-6 lg:p-10 shadow-xl"
        >
          {/* Board Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-8 border-b border-gray-200 gap-4">
            <div>
              <div className="text-xs uppercase tracking-wider text-gray-500 font-poppins font-medium mb-1">
                Selected Clinical Procedure
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#1a202c]">
                {active.treatment}
              </h3>
            </div>

            <div className="inline-flex items-center gap-2 bg-[#f3feea] border border-[#7ec142]/40 text-[#304e48] font-bold px-4 py-2.5 rounded-full text-sm sm:text-base shadow-sm self-start sm:self-auto font-poppins">
              <TrendingDown size={18} className="text-[#7ec142]" />
              <span>Save up to {active.savings} with HealKerala</span>
            </div>
          </div>

          {/* 3 Comparative Columns */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Column 1: UAE Public Health */}
            <div className="rounded-2xl bg-white p-6 border border-gray-200 flex flex-col justify-between shadow-sm">
              <div>
                <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 font-poppins">Option 01</div>
                <h4 className="text-lg font-bold text-[#1a202c] mb-4">UAE Public System</h4>
                
                <div className="mb-4">
                  <div className="text-2xl sm:text-3xl font-extrabold text-gray-800">Co-Pay / Variable</div>
                  <div className="text-xs text-gray-500 font-poppins mt-1">Government Insurance / Subsidised</div>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-700 mb-6 font-poppins">
                  <Clock size={14} />
                  <span>Wait Time: {active.ukWait}</span>
                </div>

                <ul className="space-y-3 text-xs sm:text-sm text-gray-600 font-poppins">
                  <li className="flex items-start gap-2">
                    <span className="text-gray-400 font-bold">•</span>
                    <span>Significant queue times for non-emergency surgeries</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-400 font-bold">•</span>
                    <span>No personal choice of surgeon or implant manufacturer</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-400 font-bold">•</span>
                    <span>Standard shared recovery rooms without retreat options</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Column 2: UAE Private Hospital */}
            <div className="rounded-2xl bg-white p-6 border border-gray-200 flex flex-col justify-between shadow-sm">
              <div>
                <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 font-poppins">Option 02</div>
                <h4 className="text-lg font-bold text-[#1a202c] mb-4">UAE Private Hospitals</h4>
                
                <div className="mb-4">
                  <div className="text-2xl sm:text-3xl font-extrabold text-gray-900">{active.ukPrivateCost}</div>
                  <div className="text-xs text-gray-500 font-poppins mt-1">Average Private Out-of-Pocket Rate</div>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 mb-6 font-poppins">
                  <Clock size={14} />
                  <span>Wait Time: 2 to 4 Weeks</span>
                </div>

                <ul className="space-y-3 text-xs sm:text-sm text-gray-600 font-poppins">
                  <li className="flex items-start gap-2 text-emerald-700 font-medium">
                    <Check size={16} className="shrink-0 mt-0.5" />
                    <span>Fast diagnostic scheduling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 font-bold">✕</span>
                    <span>High hospital room, anaesthetist & surgical markups</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 font-bold">✕</span>
                    <span>Extra bills for MRI scans, post-op physiotherapy</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 font-bold">✕</span>
                    <span>No relaxing convalescence or tropical retreat included</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Column 3: HealKerala All-Inclusive (RECOMMENDED) */}
            <div className="rounded-2xl bg-[#304e48] text-white p-6 md:p-8 border-2 border-[#7ec142] flex flex-col justify-between shadow-2xl relative">
              <div className="absolute -top-3.5 right-6 bg-[#7ec142] text-white font-bold text-xs px-3.5 py-1 rounded-full shadow font-poppins">
                Recommended Choice
              </div>

              <div>
                <div className="text-xs font-bold text-[#d2db2d] uppercase tracking-wider mb-2 font-poppins">Option 03</div>
                <h4 className="text-xl font-bold text-white mb-4">HealKerala All-Inclusive</h4>
                
                <div className="mb-4">
                  <div className="text-3xl sm:text-4xl font-extrabold text-[#d2db2d]">{active.healkeralaCost}</div>
                  <div className="text-xs text-white/80 font-poppins mt-1">Guaranteed Fixed Package in AED</div>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/20 text-white mb-6 font-poppins">
                  <Clock size={14} className="text-[#d2db2d]" />
                  <span>Wait Time: ⚡ 0 Days (Immediate Priority)</span>
                </div>

                <ul className="space-y-3 text-xs sm:text-sm text-white/90 font-poppins">
                  <li className="flex items-start gap-2">
                    <Check size={16} className="text-[#d2db2d] shrink-0 mt-0.5" />
                    <span>JCI &amp; NABH accredited hospital &amp; operating theatre</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={16} className="text-[#d2db2d] shrink-0 mt-0.5" />
                    <span>Internationally certified surgical director</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={16} className="text-[#d2db2d] shrink-0 mt-0.5" />
                    <span>Deluxe private suite + luxury backwaters convalescence</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={16} className="text-[#d2db2d] shrink-0 mt-0.5" />
                    <span>Private airport chauffeur &amp; companion stay included</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={16} className="text-[#d2db2d] shrink-0 mt-0.5" />
                    <span>Bilingual UAE GP medical dossier &amp; tele-followup</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6">
                <button
                  onClick={() => onOpenEnquiry(active.category)}
                  className="w-full flex items-center justify-center gap-2 bg-[#7ec142] hover:bg-[#72b039] text-white font-bold py-3.5 px-6 rounded-full shadow-lg transition-all duration-300 cursor-pointer"
                >
                  <span>Book This Package</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>

          </div>

          {/* Inclusions Footer */}
          <div className="mt-8 pt-6 border-t border-gray-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs font-poppins text-gray-600">
            <div>
              <span className="font-bold text-[#304e48]">All-Inclusive Guarantee: </span>
              <span>{active.inclusions}</span>
            </div>
            <div className="text-gray-400">Fixed AED Price Promise • Zero Hidden Extras</div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};
