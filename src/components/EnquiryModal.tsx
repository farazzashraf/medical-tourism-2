import React, { useEffect } from 'react';
import { EnquiryFormInner } from './EnquiryFormInner';
import { X, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedTreatment?: string;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({
  isOpen,
  onClose,
  selectedTreatment = 'ortho'
}) => {
  // Lock body scroll and handle Escape key
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div 
          className="fixed inset-0 z-[100] overflow-y-auto bg-black/60 backdrop-blur-sm p-2 sm:p-4 md:p-8"
          onClick={onClose}
          aria-modal="true"
          role="dialog"
        >
          {/* Centering wrapper */}
          <div className="min-h-full flex items-center justify-center py-2 sm:py-6">
            <motion.div 
              className="relative w-full max-w-2xl bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden border border-gray-100 my-auto text-left font-jakarta"
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Top luxury green gradient accent bar */}
              <div className="h-1.5 w-full bg-gradient-to-r from-[#183f34] via-[#287a55] to-[#88c343]" />

              {/* Clean, bright modern header */}
              <div className="px-4 pt-5 sm:px-8 sm:pt-7 pb-3 sm:pb-4 bg-white">
                <div className="flex items-center justify-between gap-3">
                  <span className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full text-[11px] sm:text-xs font-semibold bg-[#eef6f2] text-[#183f34]">
                    <Sparkles size={13} className="text-[#183f34]" />
                    Priority Care Assessment
                  </span>

                  <button 
                    type="button"
                    className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-gray-900 transition-colors cursor-pointer shrink-0" 
                    onClick={onClose} 
                    aria-label="Close modal"
                  >
                    <X size={18} />
                  </button>
                </div>

                <h2 className="text-xl sm:text-3xl font-extrabold text-[#132520] tracking-tight mt-2.5 sm:mt-3">
                  Start Your <span className="text-[#183f34]">Care in Kerala</span>
                </h2>
                <p className="text-gray-500 text-xs sm:text-sm mt-1 sm:mt-1.5 leading-relaxed">
                  Connect directly with accredited Kerala hospital directors, receive itemized cost estimates, and plan your treatment journey.
                </p>
              </div>

              {/* Form Content */}
              <div className="px-4 pb-5 pt-1 sm:px-8 sm:pb-8 bg-white">
                <EnquiryFormInner 
                  initialTreatment={selectedTreatment} 
                  onSuccessClose={onClose}
                />
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};
