import { useState, useRef, useEffect } from 'react';
import { ChevronDown, Check } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { getRegionMeta, SELECTABLE_COUNTRIES } from '../../config/regions';

interface GeoRegionSwitcherProps {
  currentRegion: string;
  detectedCountryName?: string;
  detectedCountryCode?: string;
  onRegionChange: (region: string) => void;
}

export const GeoRegionSwitcher = ({ 
  currentRegion, 
  detectedCountryName,
  detectedCountryCode,
  onRegionChange 
}: GeoRegionSwitcherProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentMeta = getRegionMeta(currentRegion, detectedCountryName, detectedCountryCode);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Build the list of countries:
  // If user has a detected country not in standard list, customize the 'default' item name to match their country
  const homeCountryName = detectedCountryName && detectedCountryName.trim().length > 0 
    ? detectedCountryName 
    : 'India';

  const countryList = SELECTABLE_COUNTRIES.map((c) => {
    if (c.slug === 'default') {
      return { ...c, name: homeCountryName };
    }
    return c;
  });

  return (
    <div ref={dropdownRef} className="relative">
      {/* Trigger button: Clean country name with chevron, no icons */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 text-sm font-medium text-gray-700 hover:text-[#0d766e] transition-colors py-1.5 px-3 rounded-lg hover:bg-teal-50/50 cursor-pointer border border-gray-200/70"
        aria-label="Select country"
      >
        <span className="text-[13px] font-medium text-[#113830]">{currentMeta.name}</span>
        <ChevronDown className={`size-3.5 transition-transform duration-200 text-gray-500 ${isOpen ? 'rotate-180 text-[#0d766e]' : ''}`} />
      </button>

      {/* Dropdown: Clean list of countries, no icons, no section headers */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.97 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 top-full mt-2 w-52 max-h-80 overflow-y-auto bg-white rounded-2xl shadow-xl border border-gray-100 z-50 py-1.5 divide-y divide-gray-50"
          >
            {countryList.map((country) => {
              const isActive = 
                currentRegion === country.slug || 
                (currentRegion === 'default' && country.slug === 'default') ||
                currentMeta.name.toLowerCase() === country.name.toLowerCase();

              return (
                <button
                  key={country.slug}
                  onClick={() => {
                    onRegionChange(country.slug);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-3.5 py-2 text-xs sm:text-[13px] transition-colors cursor-pointer text-left ${
                    isActive
                      ? 'bg-teal-50 text-[#0d766e] font-semibold'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <span className="truncate">{country.name}</span>
                  {isActive && (
                    <Check className="size-3.5 text-[#0d766e] shrink-0 ml-2" />
                  )}
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
