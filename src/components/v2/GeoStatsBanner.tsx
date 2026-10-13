import { motion } from 'framer-motion';
import type { GeoStatItem } from '../../data/geoContent';

interface GeoStatsBannerProps {
  stats: GeoStatItem[];
}

export const GeoStatsBanner = ({ stats }: GeoStatsBannerProps) => {
  return (
    <section className="py-6 sm:py-8 bg-[#0e3e34] relative overflow-hidden">
      {/* Subtle ambient glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0d766e]/10 via-transparent to-[#0d766e]/10 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-none">
                {stat.value}
              </div>
              <div className="mt-1.5 text-xs sm:text-sm font-medium text-emerald-200/70 uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
