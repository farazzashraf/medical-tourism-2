import { useState, useEffect } from 'react';
import { 
  ChevronDown, 
  Menu, 
  X, 
  Activity, 
  Sparkles, 
  Eye, 
  Leaf, 
  Smile, 
  ArrowRight,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  onOpenEnquiry: (treatment?: string) => void;
  onNavigate?: (path: string) => void;
  currentRoute?: string;
}

export const Navbar = ({ onOpenEnquiry, onNavigate, currentRoute = '/' }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isTreatmentsOpen, setIsTreatmentsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ONLY 5 treatments required: dental, ortho, ayurvedic, cosmetic, eyes
  // Icons inherit color dynamically so they turn crisp white on hover
  const treatmentItems = [
    { name: 'Dental', desc: 'Implants, smile makeovers & prosthodontics', slug: 'dental', icon: <Smile className="size-4" /> },
    { name: 'Ortho', desc: 'Robotic knee, hip replacement & joint care', slug: 'ortho', icon: <Activity className="size-4" /> },
    { name: 'Ayurvedic', desc: 'Authentic Panchakarma, detox & herbal healing', slug: 'ayurvedic', icon: <Leaf className="size-4" /> },
    { name: 'Cosmetic', desc: 'Aesthetic facial & body reconstructive surgery', slug: 'cosmetic', icon: <Sparkles className="size-4" /> },
    { name: 'Eyes', desc: 'Contoura Vision LASIK, SMILE Pro & cataracts', slug: 'eyes', icon: <Eye className="size-4" /> },
  ];

  const handleGoHome = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    if (onNavigate) {
      onNavigate('/');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const handleSelectTreatment = (slug: string) => {
    setIsTreatmentsOpen(false);
    setIsMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(`/specialties/${slug}`);
    }
  };

  const scrollTo = (id: string) => {
    if (currentRoute !== '/' && onNavigate) {
      onNavigate('/');
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    } else {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMobileMenuOpen(false);
    setIsTreatmentsOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 py-3.5' 
          : 'bg-white/80 md:bg-white/70 backdrop-blur-sm border-b border-gray-100/50 py-4.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo matching the screenshot: lotus icon + KeralaCare */}
          <a 
            href="/" 
            onClick={handleGoHome}
            className="flex items-center gap-2 sm:gap-2.5 group cursor-pointer shrink-0"
          >
            <div className="relative w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center shrink-0">
              <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 sm:w-9 sm:h-9 transition-transform duration-300 group-hover:scale-105">
                <path d="M20 5C17 12 17 23 20 28C23 23 23 12 20 5Z" fill="#183f34" />
                <path d="M19 12C14 15 11 22 15 28C17 24 18 19 19 12Z" fill="#2d7a56" />
                <path d="M21 12C26 15 29 22 25 28C23 24 22 19 21 12Z" fill="#2d7a56" />
                <path d="M14 18C8 20 7 26 12 30C15 28 15 24 14 18Z" fill="#88c343" />
                <path d="M26 18C32 20 33 26 28 30C25 28 25 24 26 18Z" fill="#88c343" />
                <path d="M11 31C16 34 24 34 29 31C26 31 14 31 11 31Z" fill="#183f34" />
              </svg>
            </div>
            <div className="flex items-baseline">
              <span className="text-lg sm:text-2xl font-bold tracking-tight text-[#132520] font-jakarta">Kerala</span>
              <span className="text-lg sm:text-2xl font-bold tracking-tight text-[#183f34] font-jakarta">Care</span>
            </div>
          </a>

          {/* Desktop Navigation Links (Roomy and balanced on 1024px to 1920px) */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-7 font-jakarta text-sm xl:text-[15px] font-medium text-[#4a5e57]">
            {/* Treatments with Dropdown */}
            <div 
              className="relative py-2"
              onMouseEnter={() => setIsTreatmentsOpen(true)}
              onMouseLeave={() => setIsTreatmentsOpen(false)}
            >
              <button 
                onClick={() => {
                  if (currentRoute === '/') scrollTo('popular-treatments');
                  else setIsTreatmentsOpen(!isTreatmentsOpen);
                }}
                className={`flex items-center gap-1 transition-colors hover:text-[#183f34] cursor-pointer ${
                  currentRoute.startsWith('/specialties/') ? 'text-[#183f34] font-semibold' : ''
                }`}
              >
                <span>Treatments</span>
                <ChevronDown size={14} className={`transition-transform duration-200 ${isTreatmentsOpen ? 'rotate-180 text-[#183f34]' : ''}`} />
              </button>

              <AnimatePresence>
                {isTreatmentsOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    transition={{ duration: 0.18 }}
                    className="absolute top-full left-0 w-80 bg-white rounded-2xl shadow-xl border border-gray-100 p-2.5 z-50 mt-1"
                  >
                    <div className="grid gap-1">
                      {treatmentItems.map((item) => (
                        <button
                          key={item.slug}
                          onClick={() => handleSelectTreatment(item.slug)}
                          className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-[#eef6f2] transition-colors text-left group w-full cursor-pointer"
                        >
                          <div className="w-8 h-8 rounded-lg bg-[#eef6f2] text-[#183f34] flex items-center justify-center shrink-0 group-hover:bg-[#183f34] group-hover:text-white transition-colors">
                            {item.icon}
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-[#132520] group-hover:text-[#183f34]">
                              {item.name}
                            </div>
                            <div className="text-xs text-gray-500 line-clamp-1">
                              {item.desc}
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a 
              href="#hospitals" 
              onClick={(e) => { e.preventDefault(); scrollTo('hospitals'); }}
              className="hover:text-[#183f34] transition-colors cursor-pointer"
            >
              Hospitals
            </a>

            <a 
              href="#doctors" 
              onClick={(e) => { 
                e.preventDefault(); 
                scrollTo('doctors'); 
              }}
              className="hover:text-[#183f34] transition-colors cursor-pointer"
            >
              Doctors
            </a>

            <a 
              href="/specialties/ayurvedic" 
              onClick={(e) => { 
                e.preventDefault(); 
                if (onNavigate) onNavigate('/specialties/ayurvedic'); 
              }}
              className="hover:text-[#183f34] transition-colors cursor-pointer"
            >
              Wellness
            </a>

            <a 
              href="#about" 
              onClick={(e) => { e.preventDefault(); scrollTo('about'); }}
              className="hover:text-[#183f34] transition-colors cursor-pointer"
            >
              About
            </a>
          </nav>

          {/* Right Header Actions (Desktop 1024px+) */}
          <div className="hidden lg:flex items-center gap-2.5 xl:gap-3.5">
            {/* Plan Your Care CTA Button */}
            <button
              onClick={() => onOpenEnquiry()}
              className="inline-flex items-center gap-2 bg-[#183f34] hover:bg-[#12332a] text-white font-medium text-sm px-5 py-2.5 rounded-full shadow-sm hover:shadow-md transition-all duration-200 group cursor-pointer shrink-0"
            >
              <span>Plan Your Care</span>
              <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-0.5" />
            </button>
          </div>

          {/* Mobile & Tablet Actions (<1024px: iPad Mini, Tablet, Mobile, Folded Phones) */}
          <div className="flex lg:hidden items-center gap-2 sm:gap-3">
            {/* Quick CTA on Tablet and wider mobile screens */}
            <button
              onClick={() => onOpenEnquiry()}
              className="hidden sm:inline-flex items-center gap-1.5 bg-[#183f34] hover:bg-[#12332a] text-white font-semibold text-xs sm:text-sm px-4 py-2 rounded-full shadow-sm transition-all cursor-pointer shrink-0"
            >
              <span>Plan Care</span>
              <ArrowRight size={13} />
            </button>

            {/* Mobile / Tablet Menu Hamburger Button */}
            <button 
              className="p-2 text-gray-800 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={23} /> : <Menu size={23} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile & Tablet Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-white border-t border-gray-100 shadow-2xl overflow-y-auto max-h-[calc(100vh-68px)] font-jakarta"
          >
            <div className="px-4 py-4 sm:px-6 sm:py-5 space-y-3">
              <a 
                href="/" 
                onClick={handleGoHome}
                className="block py-2 text-base font-bold text-[#132520] hover:text-[#183f34]"
              >
                Home
              </a>

              {/* Treatments list - strictly the 5 treatments */}
              <div className="border-t border-b border-gray-100 py-3 space-y-2">
                <div className="text-xs uppercase font-bold tracking-wider text-gray-400">
                  Explore Treatments
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                  {treatmentItems.map((item) => (
                    <button
                      key={item.slug}
                      onClick={() => handleSelectTreatment(item.slug)}
                      className="flex items-center gap-2.5 p-2 rounded-xl text-left hover:bg-[#eef6f2] transition-colors group cursor-pointer"
                    >
                      <div className="w-7 h-7 rounded-lg bg-[#eef6f2] text-[#183f34] flex items-center justify-center shrink-0 group-hover:bg-[#183f34] group-hover:text-white transition-colors">
                        {item.icon}
                      </div>
                      <div className="min-w-0">
                        <div className="text-sm font-semibold text-gray-800 group-hover:text-[#183f34] truncate">
                          {item.name}
                        </div>
                        <div className="text-[11px] text-gray-500 line-clamp-1">
                          {item.desc}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Navigation links */}
              <div className="space-y-1">
                <a 
                  href="#hospitals" 
                  onClick={(e) => { e.preventDefault(); scrollTo('hospitals'); }}
                  className="block py-2 text-base font-semibold text-[#132520] hover:text-[#183f34]"
                >
                  Hospitals &amp; Medical Centers
                </a>
                <a 
                  href="#doctors" 
                  onClick={(e) => { e.preventDefault(); scrollTo('doctors'); }}
                  className="block py-2 text-base font-semibold text-[#132520] hover:text-[#183f34]"
                >
                  Specialist Doctors
                </a>
                <a 
                  href="/specialties/ayurvedic" 
                  onClick={(e) => { 
                    e.preventDefault(); 
                    setIsMobileMenuOpen(false);
                    if (onNavigate) onNavigate('/specialties/ayurvedic'); 
                  }}
                  className="block py-2 text-base font-semibold text-[#132520] hover:text-[#183f34]"
                >
                  Ayurvedic &amp; Wellness Retreats
                </a>
                <a 
                  href="#about" 
                  onClick={(e) => { e.preventDefault(); scrollTo('about'); }}
                  className="block py-2 text-base font-semibold text-[#132520] hover:text-[#183f34]"
                >
                  Why Kerala (Our Heritage)
                </a>
              </div>

              {/* CTA Button */}
              <div className="pt-3">
                <button 
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenEnquiry();
                  }}
                  className="w-full flex items-center justify-center gap-2 bg-[#183f34] text-white font-semibold py-3.5 px-6 rounded-full shadow-md hover:bg-[#12332a] transition-all cursor-pointer"
                >
                  <span>Plan Your Care in Kerala</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
