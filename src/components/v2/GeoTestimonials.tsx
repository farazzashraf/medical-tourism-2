import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import type { GeoTestimonial } from '../../data/geoContent';

interface GeoTestimonialsProps {
  testimonials: GeoTestimonial[];
  regionName: string;
}

export const GeoTestimonials = ({ testimonials, regionName }: GeoTestimonialsProps) => {
  return (
    <section className="py-20 sm:py-28 bg-[#fafbf9]">
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
            PATIENT STORIES
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#113830] tracking-tight leading-tight">
            Trusted by Patients
            <span className="block mt-1 font-serif-accent italic font-normal text-[#0d766e]">
              from {regionName}.
            </span>
          </h2>
        </motion.div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="bg-white rounded-3xl p-7 sm:p-8 border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between"
            >
              {/* Quote Icon */}
              <div>
                <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center text-[#0d766e] mb-5">
                  <Quote className="size-5" />
                </div>

                {/* Quote Text */}
                <p className="text-sm sm:text-[15px] text-gray-700 leading-relaxed font-normal italic">
                  "{testimonial.quote}"
                </p>
              </div>

              {/* Author */}
              <div className="mt-6 pt-5 border-t border-gray-100 flex items-center gap-3">
                {/* Avatar circle with flag */}
                <div className="w-11 h-11 rounded-full bg-[#e6f4f1] flex items-center justify-center text-lg shrink-0">
                  {testimonial.flag}
                </div>
                <div>
                  <div className="text-sm font-bold text-[#113830]">
                    {testimonial.name}
                  </div>
                  <div className="text-xs text-gray-500">
                    {testimonial.country} · {testimonial.procedure}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
