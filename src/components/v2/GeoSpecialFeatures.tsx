import { motion } from 'framer-motion';
import {
  Clock, GraduationCap, Shield, Languages, Palmtree,
  Moon, Users, Plane, FileCheck, Video, Home
} from 'lucide-react';
import type { GeoSpecialFeature } from '../../data/geoContent';

// Map icon names to Lucide components
const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Clock, GraduationCap, Shield, Languages, Palmtree,
  Moon, Users, Plane, FileCheck, Video, Home,
};

interface GeoSpecialFeaturesProps {
  features: GeoSpecialFeature[];
  regionName: string;
}

export const GeoSpecialFeatures = ({ features, regionName }: GeoSpecialFeaturesProps) => {
  if (!features || features.length === 0) return null;

  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-14 sm:mb-16"
        >
          <span className="inline-block text-xs sm:text-[13px] font-bold tracking-[0.25em] text-[#0d766e] uppercase mb-4">
            TAILORED FOR YOU
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#113830] tracking-tight leading-tight">
            Why {regionName} Patients
            <span className="block mt-1 font-serif-accent italic font-normal text-[#0d766e]">
              Choose India.
            </span>
          </h2>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
          {features.map((feature, index) => {
            const IconComponent = ICON_MAP[feature.icon] || Shield;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="text-center"
              >
                <div className="w-14 h-14 rounded-2xl bg-teal-50 flex items-center justify-center text-[#0d766e] mx-auto mb-5 shadow-xs border border-teal-100/60">
                  <IconComponent className="size-7" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#113830] mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 max-w-xs mx-auto leading-relaxed font-normal">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
