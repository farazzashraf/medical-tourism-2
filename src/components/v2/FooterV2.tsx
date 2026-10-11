import { BRAND } from '../../config/brand';

interface FooterV2Props {
  brandName?: string;
}

export const FooterV2 = ({ brandName = BRAND.name }: FooterV2Props) => {
  return (
    <footer className="py-8 bg-white border-t border-gray-100 text-gray-500 text-xs sm:text-sm font-normal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* Copyright matching mockup */}
          <div>
            © {BRAND.copyrightYear} {brandName}. All rights reserved.
          </div>

          {/* Links matching mockup */}
          <div className="flex items-center gap-6">
            <a 
              href="#privacy" 
              onClick={(e) => { e.preventDefault(); alert('Privacy Policy: All medical records and inquiries are encrypted under international healthcare privacy standards.'); }}
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
