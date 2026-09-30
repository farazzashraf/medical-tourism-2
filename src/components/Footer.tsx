import { Phone, Mail, MapPin, Shield, Lock, ArrowUp, ArrowRight } from 'lucide-react';

interface FooterProps {
  onOpenEnquiry: (treatment?: string) => void;
  onNavigate?: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenEnquiry, onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavSpecialty = (slug: string) => {
    if (onNavigate) {
      onNavigate(`/specialties/${slug}`);
    } else {
      onOpenEnquiry();
    }
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#11231e] text-white font-jakarta pt-14 sm:pt-16 pb-10 sm:pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        
        {/* 4-Column Directory */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 pb-10 sm:pb-12 border-b border-white/10 text-sm">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              {/* Elegant Lotus Logo */}
              <div className="w-8 h-8 flex items-center justify-center">
                <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
                  <path d="M20 5C17 12 17 23 20 28C23 23 23 12 20 5Z" fill="#88c343" />
                  <path d="M19 12C14 15 11 22 15 28C17 24 18 19 19 12Z" fill="#a2d95b" />
                  <path d="M21 12C26 15 29 22 25 28C23 24 22 19 21 12Z" fill="#a2d95b" />
                  <path d="M14 18C8 20 7 26 12 30C15 28 15 24 14 18Z" fill="#ffffff" />
                  <path d="M26 18C32 20 33 26 28 30C25 28 25 24 26 18Z" fill="#ffffff" />
                  <path d="M11 31C16 34 24 34 29 31C26 31 14 31 11 31Z" fill="#88c343" />
                </svg>
              </div>
              <div className="flex items-baseline">
                <span className="text-xl font-bold tracking-tight text-white font-jakarta">Care</span>
                <span className="text-xl font-bold tracking-tight text-[#88c343] font-jakarta">Kerala</span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              Curated medical travel facilitating world-class quaternary hospital surgical care and authentic Ayurvedic recuperation in Kerala for international patients.
            </p>

            <div className="flex items-center gap-2 pt-2">
              <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2.5 py-1 rounded-full bg-white/10 text-[#88c343]">
                <Shield size={12} /> JCI & NABH Network
              </span>
              <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2.5 py-1 rounded-full bg-white/10 text-white">
                <Lock size={12} /> HIPAA Compliant
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-jakarta">
              Treatments
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-300">
              <li>
                <button 
                  onClick={() => handleNavSpecialty('dental')} 
                  className="hover:text-[#88c343] transition-colors cursor-pointer"
                >
                  Dental Care &amp; Implants
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavSpecialty('ortho')} 
                  className="hover:text-[#88c343] transition-colors cursor-pointer"
                >
                  Ortho &amp; Robotic Joint Surgery
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavSpecialty('ayurvedic')} 
                  className="hover:text-[#88c343] transition-colors cursor-pointer"
                >
                  Ayurvedic Panchakarma &amp; Detox
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavSpecialty('cosmetic')} 
                  className="hover:text-[#88c343] transition-colors cursor-pointer"
                >
                  Cosmetic &amp; Reconstructive Surgery
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavSpecialty('eyes')} 
                  className="hover:text-[#88c343] transition-colors cursor-pointer"
                >
                  Eyes &amp; Laser Vision Correction
                </button>
              </li>
            </ul>
          </div>

          {/* Patient Resources */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-jakarta">
              Patient Care
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-300">
              <li>
                <button onClick={() => scrollTo('hospitals')} className="hover:text-[#88c343] transition-colors cursor-pointer">
                  Accredited Hospital Network
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('doctors')} className="hover:text-[#88c343] transition-colors cursor-pointer">
                  Consult Specialist Doctors
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('packages')} className="hover:text-[#88c343] transition-colors cursor-pointer">
                  Treatment Packages & Pricing
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('journey')} className="hover:text-[#88c343] transition-colors cursor-pointer">
                  How It Works (Patient Journey)
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('faq')} className="hover:text-[#88c343] transition-colors cursor-pointer">
                  Medical Visa & Travel FAQ
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Support */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-jakarta">
              Care Concierge
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm text-gray-300">
              <div className="flex items-start gap-2.5">
                <MapPin size={16} className="text-[#88c343] shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">Kerala Patient Operations:</div>
                  <div>Marine Drive, Kochi, Kerala 682031, India</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone size={16} className="text-[#88c343] shrink-0" />
                <a href="tel:+971501234567" className="hover:text-white transition-colors">
                  UAE Concierge: +971 50 123 4567
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail size={16} className="text-[#88c343] shrink-0" />
                <a href="mailto:care@keralacare.com" className="hover:text-white transition-colors">
                  care@keralacare.com
                </a>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onOpenEnquiry()}
                className="w-full inline-flex items-center justify-center gap-2 bg-[#183f34] hover:bg-[#287a55] border border-white/20 text-white font-medium py-2.5 px-4 rounded-full text-xs transition-colors"
              >
                <span>Plan Your Care</span>
                <ArrowRight size={13} />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright and Back to Top */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400 text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} KeralaCare Medical Travel. All rights reserved.
          </div>

          <div className="flex items-center gap-4 sm:gap-6">
            <span className="text-[11px] sm:text-xs">NABH &amp; JCI Accredited Hospital Partners</span>
            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#88c343] hover:text-[#132520] transition-colors flex items-center justify-center cursor-pointer shrink-0"
              title="Back to top"
            >
              <ArrowUp size={14} />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
