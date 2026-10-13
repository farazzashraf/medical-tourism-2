import { useState } from 'react';
import { X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { getRegionMeta } from '../../config/regions';

interface GeoConfirmBannerProps {
  detectedRegion: string;
  currentRegion: string;
  detectedCountryName?: string;
  detectedCountryCode?: string;
  onSwitch: (region: string) => void;
}

/**
 * Subtle banner shown only when user navigates to a region differing from their detected country.
 * Displays only clean country names without any icons or flags.
 */
export const GeoConfirmBanner = ({ 
  detectedRegion, 
  currentRegion, 
  detectedCountryName,
  detectedCountryCode,
  onSwitch 
}: GeoConfirmBannerProps) => {
  const [dismissed, setDismissed] = useState(false);

  // Don't show if dismissed
  if (dismissed) return null;

  // Don't show if user is on their detected region
  if (currentRegion === detectedRegion) return null;

  // Don't show if on default page and detected is default
  if (currentRegion === 'default' && (detectedRegion === 'default' || !detectedRegion)) return null;

  const currentMeta = getRegionMeta(currentRegion, detectedCountryName, detectedCountryCode);
  const detectedDisplayName = detectedCountryName || 'India';

  return (
    <AnimatePresence>
      {!dismissed && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3, delay: 0.8 }}
          className="fixed top-[72px] left-0 right-0 z-40 flex justify-center px-4 pointer-events-none"
        >
          <div className="bg-white/95 backdrop-blur-md border border-gray-200/80 rounded-2xl shadow-xl px-5 py-2.5 flex items-center gap-3 text-sm max-w-lg pointer-events-auto">
            <span className="text-gray-700 font-normal text-xs sm:text-sm">
              Viewing <strong className="font-semibold text-[#113830]">{currentMeta.name}</strong> content. 
              We detected you are visiting from <strong className="font-semibold text-[#113830]">{detectedDisplayName}</strong>.
            </span>

            <button
              onClick={() => onSwitch(detectedRegion)}
              className="flex items-center gap-1 text-[#0d766e] hover:text-[#0b635c] font-semibold text-xs whitespace-nowrap transition-colors cursor-pointer shrink-0 ml-1"
            >
              Switch <ArrowRight className="size-3" />
            </button>

            <button
              onClick={() => setDismissed(true)}
              className="ml-auto text-gray-400 hover:text-gray-600 transition-colors cursor-pointer shrink-0 p-1"
              aria-label="Dismiss banner"
            >
              <X className="size-3.5" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
