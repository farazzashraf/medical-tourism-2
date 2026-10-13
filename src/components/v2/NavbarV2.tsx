import { useState, useEffect, type ReactNode } from 'react';
import { Menu, X, ArrowRight, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { BRAND } from '../../config/brand';

interface NavbarV2Props {
  onOpenEnquiry?: (treatment?: string) => void;
  brandName?: string;
  brandMonogram?: string;
  regionSwitcher?: ReactNode;
}

export const NavbarV2 = ({ 
  onOpenEnquiry,
  brandName = BRAND.name,
  brandMonogram = BRAND.monogram,
  regionSwitcher,
}: NavbarV2Props) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { label: 'About', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Treatment', id: 'treatments' },
    { label: 'Contact', id: 'contact' },
  ];

  const whatsappPhone = BRAND.whatsapp.replace(/[^0-9]/g, '');

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-xs py-3.5' 
          : 'bg-white/90 backdrop-blur-sm py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2">
          
          {/* Logo matching uploaded design: Teal square with monogram + Bold Brand Name */}
          <a 
            href="#hero" 
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2.5 sm:gap-3 group cursor-pointer shrink-0"
          >
            <div className="w-8 h-8 rounded-lg bg-[#0d766e] flex items-center justify-center text-white font-bold text-base shadow-sm group-hover:scale-105 transition-transform">
              {brandMonogram}
            </div>
            <span className="text-xl sm:text-2xl font-bold tracking-tight text-[#113830]">
              {brandName}
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-[15px] font-medium text-gray-700">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="hover:text-[#0d766e] transition-colors cursor-pointer py-1"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Desktop Country Switcher + CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            {regionSwitcher}

            <button
              onClick={() => {
                if (onOpenEnquiry) onOpenEnquiry();
                else scrollToSection('contact');
              }}
              className="bg-[#0d766e] hover:bg-[#0b635c] text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-sm hover:shadow-md cursor-pointer"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Actions: Country Switcher + Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            {regionSwitcher}

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-700 hover:text-[#0d766e] rounded-lg transition-colors focus:outline-none cursor-pointer"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-white border-b border-gray-200 shadow-xl overflow-hidden px-4 pt-3 pb-6"
          >
            <div className="flex flex-col space-y-3 font-medium text-gray-800">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="flex items-center justify-between py-2.5 px-3 rounded-lg hover:bg-teal-50 hover:text-[#0d766e] transition-colors text-left"
                >
                  <span>{link.label}</span>
                  <ArrowRight className="size-4 opacity-40" />
                </button>
              ))}

              <div className="pt-3 border-t border-gray-100 flex flex-col gap-2.5">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    if (onOpenEnquiry) onOpenEnquiry();
                    else scrollToSection('contact');
                  }}
                  className="w-full bg-[#0d766e] hover:bg-[#0b635c] text-white py-3 rounded-full text-center font-semibold text-sm shadow-sm cursor-pointer"
                >
                  Send Inquiry Request
                </button>

                <a
                  href={`https://wa.me/${whatsappPhone}?text=Hello%20${encodeURIComponent(brandName)},%20I%20would%20like%20to%20enquire%20about%20medical%20treatments.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white py-2.5 rounded-full text-center font-semibold text-sm shadow-sm cursor-pointer"
                >
                  <MessageCircle className="size-4" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
