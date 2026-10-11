import { useState } from 'react';
import { Phone, Mail, Lock, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { BRAND } from '../../config/brand';

interface ContactSectionProps {
  initialTreatment?: string;
  brandName?: string;
}

export const ContactSection = ({ 
  initialTreatment = '',
  brandName = BRAND.name 
}: ContactSectionProps) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    countryCode: '+971',
    phone: '',
    message: initialTreatment ? `I am interested in ${initialTreatment} treatment.` : '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const countries = [
    { code: '+971', name: 'United Arab Emirates (+971)', flag: '🇦🇪' },
    { code: '+1', name: 'United States (+1)', flag: '🇺🇸' },
    { code: '+44', name: 'United Kingdom (+44)', flag: '🇬🇧' },
    { code: '+968', name: 'Oman (+968)', flag: '🇴🇲' },
    { code: '+966', name: 'Saudi Arabia (+966)', flag: '🇸🇦' },
    { code: '+965', name: 'Kuwait (+965)', flag: '🇰🇼' },
    { code: '+974', name: 'Qatar (+974)', flag: '🇶🇦' },
    { code: '+973', name: 'Bahrain (+973)', flag: '🇧🇭' },
    { code: '+61', name: 'Australia (+61)', flag: '🇦🇺' },
    { code: '+1-CA', name: 'Canada (+1)', flag: '🇨🇦' },
    { code: '+91', name: 'India (+91)', flag: '🇮🇳' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#fafbf9]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Card Container matching Page 5 */}
        <div className="bg-white rounded-3xl sm:rounded-[32px] overflow-hidden shadow-2xl border border-gray-100 grid grid-cols-1 lg:grid-cols-12">
          
          {/* Left Column: Deep Emerald Container matching Page 5 */}
          <div className="lg:col-span-5 bg-[#0e3e34] text-white p-8 sm:p-12 md:p-14 flex flex-col justify-between">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-[42px] font-bold tracking-tight leading-[1.15] text-white">
                Start Your
                <span className="block mt-1">Journey.</span>
              </h2>

              <p className="mt-4 text-emerald-100/80 text-sm sm:text-base leading-relaxed font-normal">
                Fill out the form and a dedicated case manager will reach out within 24 hours to guide you.
              </p>

              {/* Contact details matching mockup */}
              <div className="mt-10 sm:mt-12 space-y-6">
                
                {/* Phone */}
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#165649] flex items-center justify-center text-teal-200 shrink-0">
                    <Phone className="size-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-semibold text-emerald-300 uppercase tracking-wider">
                      Call Us
                    </div>
                    <a 
                      href={`tel:${BRAND.phone}`}
                      className="text-base sm:text-lg font-bold text-white hover:text-emerald-200 transition-colors"
                    >
                      {BRAND.phoneDisplay}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#165649] flex items-center justify-center text-teal-200 shrink-0">
                    <Mail className="size-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-semibold text-emerald-300 uppercase tracking-wider">
                      Email Us
                    </div>
                    <a 
                      href={`mailto:${BRAND.email}`}
                      className="text-base sm:text-lg font-bold text-white hover:text-emerald-200 transition-colors"
                    >
                      {BRAND.email}
                    </a>
                  </div>
                </div>

              </div>
            </div>

            {/* Bottom Security Note matching mockup */}
            <div className="mt-12 pt-6 border-t border-[#1a5548] flex items-start gap-2.5 text-xs text-emerald-200/70 font-normal">
              <Lock className="size-4 shrink-0 text-emerald-400 mt-0.5" />
              <span>
                Secure & Confidential. Your medical data is protected under international privacy standards.
              </span>
            </div>
          </div>

          {/* Right Column: Clean Form Container matching Page 5 */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-12 md:p-14 flex flex-col justify-center">
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="py-12 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-teal-50 text-[#0d766e] flex items-center justify-center mx-auto mb-5">
                    <CheckCircle2 className="size-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#113830] mb-2">
                    Enquiry Received
                  </h3>
                  <p className="text-gray-600 max-w-md mx-auto mb-6 text-sm sm:text-base">
                    Thank you! A senior medical case coordinator from {brandName} will review your request and get in touch within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        fullName: '',
                        email: '',
                        countryCode: '+971',
                        phone: '',
                        message: '',
                      });
                    }}
                    className="inline-flex items-center gap-2 bg-[#0d766e] hover:bg-[#0b635c] text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all"
                  >
                    Send Another Inquiry
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Full Name & Email Address */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-500 mb-2">
                        FULL NAME
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-gray-50/80 border border-gray-200 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#0d766e] focus:bg-white transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-500 mb-2">
                        EMAIL ADDRESS
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-gray-50/80 border border-gray-200 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#0d766e] focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  {/* Country Code & Phone Number */}
                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-5">
                    <div className="sm:col-span-5">
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-500 mb-2">
                        COUNTRY CODE
                      </label>
                      <select
                        value={formData.countryCode}
                        onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-gray-50/80 border border-gray-200 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#0d766e] focus:bg-white transition-all cursor-pointer"
                      >
                        {countries.map((c) => (
                          <option key={c.code} value={c.code}>
                            {c.flag} {c.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="sm:col-span-7">
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-500 mb-2">
                        PHONE NUMBER
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="123 456 7890"
                        className="w-full px-4 py-3 rounded-xl bg-gray-50/80 border border-gray-200 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#0d766e] focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-500 mb-2">
                      MESSAGE
                    </label>
                    <textarea
                      rows={3}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Briefly describe your treatment needs..."
                      className="w-full px-4 py-3 rounded-xl bg-gray-50/80 border border-gray-200 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#0d766e] focus:bg-white transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button matching mockup */}
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#0d766e] hover:bg-[#0b635c] text-white py-3.5 px-6 rounded-full font-semibold text-base transition-all shadow-md hover:shadow-lg disabled:opacity-70 cursor-pointer"
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit Enquiry'}
                    </button>
                    
                    <p className="text-[12px] text-gray-400 text-center mt-3 font-normal">
                      By submitting, you agree to our privacy policy.
                    </p>
                  </div>

                </form>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
};
