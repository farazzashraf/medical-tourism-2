import { useState } from 'react';
import { MessageCircle, Lock, CheckCircle2, Clock, ShieldCheck, HeartHandshake } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { BRAND } from '../../config/brand';

interface ContactSectionProps {
  initialTreatment?: string;
  brandName?: string;
}

export const ContactSection = ({ 
  initialTreatment = 'General Medical Consultation',
  brandName = BRAND.name 
}: ContactSectionProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    countryCode: '+971',
    phone: '',
    message: initialTreatment ? `I am interested in ${initialTreatment} treatment.` : '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const countries = [
    { code: '+971', name: 'United Arab Emirates (+971)' },
    { code: '+966', name: 'Saudi Arabia (+966)' },
    { code: '+968', name: 'Oman (+968)' },
    { code: '+974', name: 'Qatar (+974)' },
    { code: '+965', name: 'Kuwait (+965)' },
    { code: '+973', name: 'Bahrain (+973)' },
    { code: '+44', name: 'United Kingdom (+44)' },
    { code: '+1', name: 'United States (+1)' },
    { code: '+1-CA', name: 'Canada (+1)' },
    { code: '+61', name: 'Australia (+61)' },
    { code: '+91', name: 'India (+91)' },
  ];

  const whatsappPhone = BRAND.whatsapp.replace(/[^0-9]/g, '');

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
            subject: `New Medical Quotation Inquiry - ${formData.name} - IndiaCareTrip`,
            from_name: formData.name,
            email: formData.email,
            phone: `${formData.countryCode} ${formData.phone}`,
            message: formData.message,
            to_email: 'farazashraf210@gmail.com',
          }),
        });
      }
    } catch (err) {
      console.log('Submission note:', err);
    } finally {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#f8faf9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Split Container */}
        <div className="rounded-3xl shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 border border-gray-100">
          
          {/* Left Column: Dark Emerald Card */}
          <div className="lg:col-span-5 bg-[#113830] text-white p-8 sm:p-12 md:p-14 flex flex-col justify-between relative overflow-hidden">
            
            {/* Background luxury gradient overlay */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-60 h-60 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10">
              <span className="text-[11px] font-bold tracking-[0.25em] text-emerald-300 uppercase block mb-3">
                GET STARTED
              </span>

              <h2 className="text-3xl sm:text-4xl md:text-[42px] font-bold text-white tracking-tight leading-tight">
                Start Your
                <span className="block mt-1">Journey.</span>
              </h2>

              <p className="mt-4 text-emerald-100/80 text-sm sm:text-base leading-relaxed font-normal">
                Fill out the form and a dedicated medical coordinator will prepare your confidential treatment quotation within 24 hours.
              </p>

              {/* WhatsApp direct chat card */}
              <div className="mt-8">
                <a 
                  href={`https://wa.me/${whatsappPhone}?text=Hello%20${encodeURIComponent(brandName)},%20I%20would%20like%20to%20inquire%20about%20medical%20travel%20treatments.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 bg-[#165649] hover:bg-[#1b6b5b] p-4 rounded-2xl transition-all border border-emerald-700/40 group cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#25D366] flex items-center justify-center text-white shrink-0 shadow-xs group-hover:scale-105 transition-transform">
                    <MessageCircle className="size-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-emerald-300 uppercase tracking-wider">
                      Instant WhatsApp
                    </div>
                    <div className="text-sm sm:text-base font-semibold text-white">
                      Chat on WhatsApp
                    </div>
                  </div>
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3 text-xs sm:text-sm text-emerald-100/85">
                  <Clock className="size-4 text-emerald-300 shrink-0" />
                  <span>Response and roadmap review within 24 hours</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm text-emerald-100/85">
                  <ShieldCheck className="size-4 text-emerald-300 shrink-0" />
                  <span>JCI & NABH accredited partner hospitals</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm text-emerald-100/85">
                  <HeartHandshake className="size-4 text-emerald-300 shrink-0" />
                  <span>Transparent all-inclusive pricing with zero surprises</span>
                </div>
              </div>
            </div>

            {/* Bottom Security Note */}
            <div className="mt-10 pt-6 border-t border-[#1a5548] flex items-start gap-2.5 text-xs text-emerald-200/70 font-normal relative z-10">
              <Lock className="size-4 shrink-0 text-emerald-400 mt-0.5" />
              <span>
                Secure & Confidential. Your medical data is strictly protected under international healthcare privacy standards.
              </span>
            </div>
          </div>

          {/* Right Column: Clean Form Container */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-12 md:p-14 flex flex-col justify-center">
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="py-12 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-teal-50 text-[#0d766e] flex items-center justify-center mx-auto mb-5">
                    <CheckCircle2 className="size-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#113830] mb-2">
                    Inquiry Received
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-md mx-auto mb-8 font-normal">
                    Thank you, {formData.name}. Our patient care coordinator will review your requirements and reach out within 24 hours with your customized quotation.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        countryCode: '+971',
                        phone: '',
                        message: '',
                      });
                    }}
                    className="bg-[#0d766e] hover:bg-[#0b635c] text-white px-8 py-3.5 rounded-full text-sm font-semibold transition-all shadow-md cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </motion.div>
              ) : (
                <form key="form" onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Full Name & Email Address */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-500 mb-2">
                        FULL NAME
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
                            {c.name}
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

                  {/* Submit Button */}
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#0d766e] hover:bg-[#0b635c] text-white py-4 rounded-xl text-base font-semibold transition-all shadow-md hover:shadow-lg disabled:opacity-50 cursor-pointer"
                    >
                      {isSubmitting ? 'Sending Request...' : 'Get Your Quotation'}
                    </button>
                  </div>

                  <p className="text-center text-xs text-gray-400 font-normal">
                    By submitting, you agree to receive medical travel guidance from {brandName}.
                  </p>

                </form>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
};
