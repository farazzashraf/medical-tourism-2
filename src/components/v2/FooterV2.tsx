import { MessageCircle } from 'lucide-react';
import { BRAND } from '../../config/brand';

interface FooterV2Props {
  brandName?: string;
}

export const FooterV2 = ({ brandName = BRAND.name }: FooterV2Props) => {
  const whatsappPhone = BRAND.whatsapp.replace(/[^0-9]/g, '');

  return (
    <footer className="py-8 bg-white border-t border-gray-100 text-gray-500 text-xs sm:text-sm font-normal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* Copyright matching mockup */}
          <div>
            © {BRAND.copyrightYear} {brandName}. All rights reserved.
          </div>

          {/* Quick WhatsApp Support */}
          <div>
            <a 
              href={`https://wa.me/${whatsappPhone}?text=Hello%20${encodeURIComponent(brandName)},%20I%20would%20like%20to%20enquire%20about%20medical%20treatments.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0d766e] hover:text-[#0b635c] transition-colors"
            >
              <MessageCircle className="size-3.5 text-[#25D366]" />
              <span>Chat with us on WhatsApp</span>
            </a>
          </div>

          {/* Links matching mockup */}
          <div className="flex items-center gap-6">
            <a 
              href="#privacy" 
              onClick={(e) => { e.preventDefault(); alert('Privacy Policy: All medical records and inquiries are encrypted under healthcare privacy standards.'); }}
              className="hover:text-[#0d766e] transition-colors"
            >
              Privacy Policy
            </a>
            <a 
              href="#terms" 
              onClick={(e) => { e.preventDefault(); alert('Terms of Service: HealKerala coordinates certified clinical travel and NABH/JCI hospital admissions.'); }}
              className="hover:text-[#0d766e] transition-colors"
            >
              Terms of Service
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
};
