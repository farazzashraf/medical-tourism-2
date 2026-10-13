import { motion } from 'framer-motion';
import type { CostComparisonItem } from '../../data/geoContent';

interface GeoCostComparisonProps {
  title: string;
  localLabel: string;
  indiaLabel: string;
  comparisons: CostComparisonItem[];
}

export const GeoCostComparison = ({
  title,
  localLabel,
  indiaLabel,
  comparisons,
}: GeoCostComparisonProps) => {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14 sm:mb-16"
        >
          <span className="inline-block text-xs sm:text-[13px] font-bold tracking-[0.25em] text-[#0d766e] uppercase mb-4">
            COST COMPARISON
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#113830] tracking-tight leading-tight">
            {title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed font-normal max-w-2xl mx-auto">
            Transparent pricing. No hidden fees. See how India compares.
          </p>
        </motion.div>

        {/* Cost Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="rounded-3xl overflow-hidden border border-gray-100 shadow-xl"
        >
          {/* Table Header */}
          <div className="grid grid-cols-12 bg-[#0e3e34] text-white px-5 sm:px-8 py-4 sm:py-5 text-xs sm:text-sm font-bold uppercase tracking-wider">
            <div className="col-span-4 sm:col-span-5">Procedure</div>
            <div className="col-span-3 sm:col-span-2 text-right">{localLabel}</div>
            <div className="col-span-3 sm:col-span-3 text-right text-emerald-300">{indiaLabel}</div>
            <div className="col-span-2 text-right">Savings</div>
          </div>

          {/* Table Rows */}
          {comparisons.map((item, index) => (
            <div
              key={item.procedure}
              className={`grid grid-cols-12 px-5 sm:px-8 py-4 sm:py-5 items-center text-sm sm:text-base transition-colors ${
                index % 2 === 0 ? 'bg-white' : 'bg-gray-50/60'
              } ${index < comparisons.length - 1 ? 'border-b border-gray-100' : ''}`}
            >
              <div className="col-span-4 sm:col-span-5 font-semibold text-[#113830] text-[13px] sm:text-base">
                {item.procedure}
              </div>
              <div className="col-span-3 sm:col-span-2 text-right text-gray-500 line-through text-[13px] sm:text-base">
                {item.localCost}
              </div>
              <div className="col-span-3 sm:col-span-3 text-right text-[#0d766e] font-bold text-[13px] sm:text-base">
                {item.indiaCost}
              </div>
              <div className="col-span-2 text-right">
                <span className="inline-block bg-emerald-50 text-[#0d766e] text-xs sm:text-sm font-bold px-2.5 py-1 rounded-full">
                  {item.savings}
                </span>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Footnote */}
        <p className="mt-6 text-center text-xs sm:text-sm text-gray-400 font-normal">
          Costs are approximate and vary by hospital, complexity, and individual case. Contact us for a personalized quote.
        </p>

      </div>
    </section>
  );
};
