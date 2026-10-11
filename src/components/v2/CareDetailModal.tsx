import { X, CheckCircle, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export interface CareCategory {
  id: string;
  title: string;
  badge: 'MEDICAL' | 'HOLISTIC' | 'TRADITIONAL';
  description: string;
  image: string;
  details?: {
    overview: string;
    highlights: string[];
    typicalStay: string;
    savings: string;
  };
}

interface CareDetailModalProps {
  category: CareCategory | null;
  onClose: () => void;
  onBookEnquiry: (categoryTitle: string) => void;
}

export const CareDetailModal = ({ category, onClose, onBookEnquiry }: CareDetailModalProps) => {
  if (!category) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25 }}
          className="relative bg-white rounded-3xl shadow-2xl max-w-2xl w-full overflow-hidden z-10 border border-gray-100"
        >
          {/* Top Image Banner */}
          <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-gray-100">
            <img 
              src={category.image} 
              alt={category.title}
              className="w-full h-full object-cover" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="size-5" />
            </button>

            <div className="absolute bottom-4 left-6 right-6">
              <span className="inline-block text-[11px] font-bold tracking-wider uppercase px-2.5 py-0.5 rounded-full bg-white/90 text-[#0d766e] mb-2">
                {category.badge}
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                {category.title}
              </h3>
            </div>
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-8">
            <p className="text-gray-700 text-base leading-relaxed mb-6 font-normal">
              {category.description}
            </p>

            <div className="bg-teal-50/70 border border-teal-100 rounded-2xl p-4 sm:p-5 mb-6">
              <h4 className="text-sm font-bold uppercase tracking-wider text-[#0d766e] mb-3">
                Key Highlights
              </h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-center gap-2.5">
                  <CheckCircle className="size-4 text-[#0d766e] shrink-0" />
                  <span>JCI & NABH accredited partner surgical centers</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle className="size-4 text-[#0d766e] shrink-0" />
                  <span>Up to 70% cost savings compared to Western & GCC facilities</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle className="size-4 text-[#0d766e] shrink-0" />
                  <span>Dedicated medical concierge & airport transfer included</span>
                </li>
              </ul>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-center gap-3 justify-end pt-2">
              <button
                onClick={onClose}
                className="w-full sm:w-auto px-5 py-2.5 rounded-full text-sm font-medium text-gray-600 hover:bg-gray-100 transition-colors"
              >
                Close
              </button>
              <button
                onClick={() => {
                  onClose();
                  onBookEnquiry(category.title);
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0d766e] hover:bg-[#0b635c] text-white px-7 py-3 rounded-full text-sm font-semibold transition-all shadow-md hover:shadow-lg"
              >
                <span>Inquire About {category.title}</span>
                <ArrowRight className="size-4" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
