import { useState } from 'react';
import { X } from 'lucide-react';
import { BRAND } from '../../config/brand';

interface WhatsAppFloatingV2Props {
  brandName?: string;
}

export const WhatsAppFloatingV2 = ({ brandName = BRAND.name }: WhatsAppFloatingV2Props) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const cleanPhone = BRAND.whatsapp.replace(/[^0-9]/g, '');
  const message = `Hello ${brandName}, I would like to inquire about treatment options and medical travel packages.`;
  const whatsappUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-[max(1.5rem,env(safe-area-inset-bottom))] right-[max(1.5rem,env(safe-area-inset-right))] z-50 flex items-end flex-col gap-2">
      {/* Optional Quick Tooltip Bubble */}
      {showTooltip && (
        <div className="bg-white px-4 py-2.5 rounded-2xl shadow-xl border border-gray-100 text-xs text-gray-700 font-medium mb-1 relative animate-in fade-in slide-in-from-bottom-2 duration-200 flex items-center gap-2">
          <span>Need quick advice? Chat with our team</span>
          <button 
            onClick={() => setShowTooltip(false)}
            className="text-gray-400 hover:text-gray-600"
          >
            <X className="size-3.5" />
          </button>
        </div>
      )}

      {/* WhatsApp Circular Button matching uploaded mockup */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        className="w-13 h-13 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-lg hover:shadow-2xl hover:scale-108 transition-all duration-300 cursor-pointer group"
        aria-label="Chat on WhatsApp"
      >
        <svg 
          viewBox="0 0 24 24" 
          width="28" 
          height="28" 
          stroke="currentColor" 
          strokeWidth="2" 
          fill="none" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          className="text-white fill-white stroke-none"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.889-9.885 9.889m0-18.33c-4.66 0-8.45 3.79-8.45 8.449 0 1.488.388 2.94 1.127 4.22l.176.306-.744 2.716 2.783-.73.297.175a8.43 8.43 0 004.811 1.263h.004c4.659 0 8.448-3.79 8.451-8.45-.002-2.259-.88-4.383-2.478-5.981A8.406 8.406 0 0012.051 3.455" />
        </svg>
      </a>
    </div>
  );
};
