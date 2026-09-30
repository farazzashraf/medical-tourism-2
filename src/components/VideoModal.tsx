import { X, Play } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
}

export const VideoModal = ({ isOpen, onClose, title = "Discover World-Class Care in Kerala" }: VideoModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/75 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25 }}
            className="relative w-full max-w-4xl bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl z-10 border border-gray-100"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-3.5 sm:px-6 py-3 sm:py-4 border-b border-gray-100 bg-[#fbfdfb]">
              <div className="flex items-center gap-2 sm:gap-2.5">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#183f34] text-white flex items-center justify-center shrink-0">
                  <Play size={13} className="fill-current ml-0.5" />
                </div>
                <h3 className="font-bold text-gray-900 font-jakarta text-sm sm:text-lg line-clamp-1">
                  {title}
                </h3>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 sm:p-2 text-gray-400 hover:text-gray-700 rounded-full hover:bg-gray-100 transition-colors shrink-0"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>
            </div>

            {/* Video content */}
            <div className="relative aspect-video w-full bg-black">
              <video
                className="w-full h-full object-cover"
                controls
                autoPlay
                playsInline
                poster="/assets/home/kerala_backwaters_houseboat.jpg"
              >
                <source src="/assets/home/hero-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Footer notes */}
            <div className="px-3.5 sm:px-6 py-2.5 sm:py-4 bg-gray-50 flex flex-wrap items-center justify-between text-[11px] sm:text-xs text-gray-600 gap-2 sm:gap-3">
              <div className="flex flex-wrap items-center gap-2 sm:gap-4">
                <span>✓ JCI &amp; NABH Hospitals</span>
                <span>✓ English Faculty</span>
                <span>✓ Concierge</span>
              </div>
              <button
                onClick={onClose}
                className="font-semibold text-[#183f34] hover:underline cursor-pointer"
              >
                Close preview
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
