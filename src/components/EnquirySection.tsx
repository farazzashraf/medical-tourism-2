import React from 'react';
import { EnquiryFormInner } from './EnquiryFormInner';
import { Phone, CheckCircle2 } from 'lucide-react';

interface EnquirySectionProps {
  initialTreatment?: string;
}

export const EnquirySection: React.FC<EnquirySectionProps> = ({ initialTreatment = 'ortho' }) => {
  return (
    <section id="enquiry" className="py-14 sm:py-16 md:py-24 bg-[#fbfdfb] font-jakarta border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Reassurance & Direct Contact */}
          <div className="lg:col-span-5 space-y-5 sm:space-y-6">
            <div>
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#183f34] bg-[#eef6f2] px-3.5 py-1 rounded-full inline-block mb-3">
                No Wait • No Obligation
              </span>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#132520] tracking-tight leading-tight">
                Ready to take control of your health?
              </h2>
              <p className="text-xs sm:text-base text-[#536863] mt-2.5 sm:mt-3 font-normal leading-relaxed">
                We are here to answer your clinical questions, discuss treatment options, and guide you towards safe, accredited healthcare in Kerala.
              </p>
            </div>

            <div className="space-y-3 sm:space-y-4 pt-1 sm:pt-2">
              <div className="flex items-start gap-3 bg-white p-3.5 sm:p-4 rounded-xl sm:rounded-2xl border border-gray-100 shadow-sm">
                <CheckCircle2 size={18} className="text-[#183f34] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#132520]">Direct Surgical Director Review</h4>
                  <p className="text-[11px] sm:text-xs text-[#536863] mt-0.5">Meet with senior specialists who review your medical records objectively.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white p-3.5 sm:p-4 rounded-xl sm:rounded-2xl border border-gray-100 shadow-sm">
                <CheckCircle2 size={18} className="text-[#183f34] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#132520]">Guaranteed Fixed-Price Quote in 24 Hours</h4>
                  <p className="text-[11px] sm:text-xs text-[#536863] mt-0.5">All-inclusive pricing covering surgery, premium implants, hospital, and backwaters care.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white p-3.5 sm:p-4 rounded-xl sm:rounded-2xl border border-gray-100 shadow-sm">
                <CheckCircle2 size={18} className="text-[#183f34] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#132520]">Fast-Track Indian Medical e-Visa Support</h4>
                  <p className="text-[11px] sm:text-xs text-[#536863] mt-0.5">Our dedicated visa division handles all paperwork within 48 to 72 hours.</p>
                </div>
              </div>
            </div>

            {/* Direct Phone / Contact Card */}
            <div className="bg-[#183f34] text-white p-4 sm:p-6 rounded-2xl sm:rounded-3xl shadow-lg flex items-center gap-3.5 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-white/10 flex items-center justify-center shrink-0 text-[#88c343]">
                <Phone size={20} />
              </div>
              <div>
                <span className="block text-[11px] sm:text-xs text-white/80 font-medium">Prefer to speak right now?</span>
                <a href="tel:+971501234567" className="text-base sm:text-lg font-bold text-white hover:text-[#88c343] transition-colors">
                  +971 50 123 4567
                </a>
                <span className="block text-[10px] sm:text-[11px] text-white/70">Mon–Sat: 8:00am – 8:00pm GST</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form Card */}
          <div className="lg:col-span-7 w-full">
            <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-8 border border-gray-100 shadow-xl">
              <div className="pb-4 sm:pb-6 mb-4 sm:mb-6 border-b border-gray-100">
                <h3 className="text-lg sm:text-2xl font-bold text-[#132520] font-jakarta">
                  Book Free Consultation &amp; Cost Plan
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 mt-1">
                  Average response time: under 2 hours during international business hours
                </p>
              </div>
              
              <EnquiryFormInner initialTreatment={initialTreatment} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
