import { useState, useEffect } from 'react';
import { X, CheckCircle2, Shield, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { BRAND } from '../../config/brand';

interface QuickInquiryDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  initialEmail?: string;
  initialTreatment?: string;
  brandName?: string;
}

export const QuickInquiryDrawer = ({
  isOpen,
  onClose,
  initialEmail = '',
  initialTreatment = '',
  brandName = BRAND.name,
}: QuickInquiryDrawerProps) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState(initialEmail);
  const [countryCode, setCountryCode] = useState('+971');
  const [phone, setPhone] = useState('');
  const [treatment, setTreatment] = useState(initialTreatment || 'General Consultation');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (initialEmail) {
      setEmail(initialEmail);
    }
  }, [initialEmail]);

  useEffect(() => {
    if (initialTreatment) {
      setTreatment(initialTreatment);
    }
  }, [initialTreatment]);

  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const countries = [
    { code: '+971', name: 'UAE (+971)', flag: '🇦🇪' },
    { code: '+1', name: 'USA/Canada (+1)', flag: '🇺🇸' },
    { code: '+44', name: 'UK (+44)', flag: '🇬🇧' },
    { code: '+968', name: 'Oman (+968)', flag: '🇴🇲' },
    { code: '+966', name: 'Saudi Arabia (+966)', flag: '🇸🇦' },
    { code: '+965', name: 'Kuwait (+965)', flag: '🇰🇼' },
    { code: '+974', name: 'Qatar (+974)', flag: '🇶🇦' },
    { code: '+973', name: 'Bahrain (+973)', flag: '🇧🇭' },
    { code: '+61', name: 'Australia (+61)', flag: '🇦🇺' },
    { code: '+91', name: 'India (+91)', flag: '🇮🇳' },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
      if (accessKey) {
        await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({
            access_key: accessKey,
            subject: `New Treatment Quotation Request - ${treatment} - IndiaCareTrip`,
            from_name: fullName,
            email: email,
            phone: `${countryCode} ${phone}`,
            treatment: treatment,
            message: message,
            to_email: 'farazashraf210@gmail.com',
          }),
        });
      }
    } catch (err) {
      console.log('Quotation form note:', err);
    } finally {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFullName('');
    setEmail('');
    setPhone('');
    setMessage('');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
          />

          {/* Slide-out Drawer from Right */}
          <div className="fixed inset-y-0 right-0 max-w-full flex pl-6 sm:pl-10">
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 300 }}
              className="w-screen max-w-md sm:max-w-lg bg-white shadow-2xl flex flex-col justify-between overflow-y-auto"
            >
              {/* Header */}
              <div className="p-6 sm:p-7 border-b border-gray-100 flex items-center justify-between sticky top-0 bg-white/95 backdrop-blur-md z-10">
                <div>
                  <span className="text-[11px] font-bold tracking-widest uppercase text-[#0d766e]">
                    INSTANT INQUIRY
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#113830]">
                    Get Treatment Quotation
                  </h3>
                </div>
                <button
                  onClick={onClose}
                  className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-gray-800 flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Close drawer"
                >
                  <X className="size-5" />
                </button>
              </div>

              {/* Drawer Content */}
              <div className="p-6 sm:p-7 flex-grow">
                {isSubmitted ? (
                  <div className="py-12 text-center">
                    <div className="w-16 h-16 rounded-full bg-teal-50 text-[#0d766e] flex items-center justify-center mx-auto mb-5">
                      <CheckCircle2 className="size-10" />
                    </div>
                    <h4 className="text-2xl font-bold text-[#113830] mb-2">
                      Inquiry Received
                    </h4>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8">
                      Thank you! Our dedicated clinical travel case manager at {brandName} will review your details and contact you within 24 hours.
                    </p>
                    <button
                      onClick={handleReset}
                      className="bg-[#0d766e] hover:bg-[#0b635c] text-white px-7 py-3 rounded-full text-sm font-semibold transition-all shadow-md"
                    >
                      Done
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <p className="text-sm text-gray-600">
                      Enter your details below and a senior care coordinator will reach out with a personalized treatment roadmap.
                    </p>

                    {/* Email (auto prefilled) */}
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-500 mb-1.5">
                        EMAIL ADDRESS *
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="john@example.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#0d766e] focus:bg-white transition-all"
                      />
                    </div>

                    {/* Full Name */}
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-500 mb-1.5">
                        FULL NAME *
                      </label>
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="John Doe"
                        className="w-full px-4 py-2.5 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#0d766e] focus:bg-white transition-all"
                      />
                    </div>

                    {/* Country Code & Phone */}
                    <div className="grid grid-cols-12 gap-3">
                      <div className="col-span-5">
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-500 mb-1.5">
                          CODE
                        </label>
                        <select
                          value={countryCode}
                          onChange={(e) => setCountryCode(e.target.value)}
                          className="w-full px-3 py-2.5 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0d766e] focus:bg-white transition-all"
                        >
                          {countries.map((c) => (
                            <option key={c.code} value={c.code}>
                              {c.flag} {c.code}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="col-span-7">
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-500 mb-1.5">
                          PHONE NUMBER *
                        </label>
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="123 456 7890"
                          className="w-full px-4 py-2.5 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#0d766e] focus:bg-white transition-all"
                        >
                        </input>
                      </div>
                    </div>

                    {/* Preferred Treatment */}
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-500 mb-1.5">
                        TREATMENT OF INTEREST
                      </label>
                      <select
                        value={treatment}
                        onChange={(e) => setTreatment(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#0d766e] focus:bg-white transition-all"
                      >
                        <option value="General Consultation">General Medical Consultation</option>
                        <option value="Dental">Dental (Implants, Makeovers, 3D Imaging)</option>
                        <option value="Wellness">Wellness (Executive Health, Detox, Retreat)</option>
                        <option value="Ayurveda">Ayurveda (Panchakarma & Traditional Therapies)</option>
                        <option value="Orthopedics">Orthopedics (Robotic Knee & Joint Replacement)</option>
                        <option value="Eye Care">Eye Care (LASIK, SMILE Pro, Cataracts)</option>
                        <option value="Cardiac & Cardiology">Cardiology & Cardiac Surgery</option>
                        <option value="Other">Other Procedure</option>
                      </select>
                    </div>

                    {/* Message / Treatment Needs */}
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-500 mb-1.5">
                        TREATMENT DETAILS / QUESTIONS
                      </label>
                      <textarea
                        rows={3}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Briefly describe your medical concerns, preferred travel dates, or current diagnosis..."
                        className="w-full px-4 py-2.5 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#0d766e] focus:bg-white transition-all resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-[#0d766e] hover:bg-[#0b635c] text-white py-3.5 px-6 rounded-full font-semibold text-sm sm:text-base transition-all shadow-md hover:shadow-lg disabled:opacity-70 flex items-center justify-center gap-2 cursor-pointer"
                      >
                        {isSubmitting ? (
                          'Submitting...'
                        ) : (
                          <>
                            <span>Send Quotation Request</span>
                            <ArrowRight className="size-4" />
                          </>
                        )}
                      </button>
                      <p className="text-[11px] text-gray-400 text-center mt-2.5">
                        No commitment. Free second opinion and hospital cost estimate.
                      </p>
                    </div>
                  </form>
                )}
              </div>

              {/* Drawer Footer Contact Bar */}
              <div className="p-5 bg-gray-50 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                <div className="flex items-center gap-2 text-emerald-800 font-medium">
                  <Shield className="size-4 text-[#0d766e]" />
                  <span>Confidential & NABH Certified</span>
                </div>
                <a
                  href={`tel:${BRAND.phone}`}
                  className="hover:text-[#0d766e] font-semibold text-gray-700"
                >
                  {BRAND.phoneDisplay}
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};
