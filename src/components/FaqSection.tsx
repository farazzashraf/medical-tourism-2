import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MessageCircle, Phone, HelpCircle } from 'lucide-react';

export const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Why should international patients choose Kerala for specialized medical care?',
      a: 'Kerala offers an extraordinary synergy of world-class quaternary hospitals (accredited by JCI and NABH), internationally trained surgical directors, and zero waiting times. Located conveniently with direct international flights, patients receive sub-millimeter robotic surgery and authentic Ayurvedic recuperation at up to 70% lower cost than private Western or GCC clinics.'
    },
    {
      q: 'How much can I save on treatments compared to private hospitals abroad?',
      a: 'Most treatments—including robotic joint replacements, complex dental implants, cardiac procedures, and ophthalmology—save patients between 55% and 75% even after including private hospital suites, airport chauffeur transfers, and luxury lakeside convalescence. All costs are presented upfront with guaranteed transparent pricing.'
    },
    {
      q: 'Are the partner hospitals safe, accredited, and hygienic?',
      a: 'Yes. Every hospital in our network is JCI (Joint Commission International) or NABH accredited, featuring advanced ultra-clean HEPA laminar air operating theatres with surgical infection rates under 0.3% (consistently lower than global averages). They utilize modern diagnostic equipment from GE, Siemens, Zeiss, and Stryker.'
    },
    {
      q: 'Will doctors communicate clearly and provide medical records in English?',
      a: 'All our operating specialists, anaesthesiologists, and care coordinators are fluent in English (with Arabic, Russian, and German interpreters available upon request). Upon discharge, you receive an exhaustive digital clinical file—including surgical notes, high-res scans, and post-op medication regimens—custom formatted for your local GP.'
    },
    {
      q: 'What is authentic Kerala Ayurveda and how does it integrate with surgery?',
      a: 'Kerala is the global birthplace of authentic Ayurveda. For surgical patients, gentle non-invasive Ayurvedic therapies (like external medicated oil applications, herbal steams, and anti-inflammatory diets) promote rapid lymphatic drainage, alleviate post-operative soreness, and accelerate mobility, all coordinated under physician supervision.'
    },
    {
      q: 'How does travel, medical visa, and airport reception work?',
      a: 'Our international patient care desk takes care of everything: we assist with your 48-hour Indian e-Medical Visa, coordinate direct flights to Cochin (COK) or Trivandrum (TRV), arrange a private airport chauffeur, and provide a dedicated 24/7 personal patient concierge throughout your stay.'
    }
  ];

  return (
    <section id="faq" className="py-16 md:py-24 bg-[#fbfdfb] font-jakarta overflow-hidden border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Heading & Concierge Card */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-5 sm:space-y-6"
          >
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#183f34] bg-[#eef6f2] px-3.5 py-1 rounded-full inline-block mb-3">
                Clear Answers
              </span>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#132520] tracking-tight leading-tight">
                Frequently Asked Questions
              </h2>
              <p className="text-xs sm:text-base text-[#536863] mt-2 sm:mt-3 font-normal leading-relaxed">
                Clear all your medical travel questions with complete transparency and peace of mind.
              </p>
            </div>

            {/* Concierge Help Card */}
            <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-7 border border-gray-100 shadow-md space-y-3 sm:space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#eef6f2] text-[#183f34] flex items-center justify-center shrink-0">
                  <HelpCircle size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-xs sm:text-sm text-[#132520]">Have a specific question?</h4>
                  <p className="text-[11px] sm:text-xs text-gray-500">Our patient coordinators reply within 2 hours</p>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-2.5 sm:gap-3">
                <a
                  href="https://wa.me/971501234567"
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-[#183f34] hover:bg-[#12332a] text-white py-2.5 sm:py-3 px-4 rounded-full text-xs font-semibold shadow-sm transition-all"
                >
                  <MessageCircle size={15} />
                  <span>Chat on WhatsApp</span>
                </a>
                <a
                  href="tel:+97141234567"
                  className="inline-flex items-center justify-center gap-2 bg-gray-50 hover:bg-gray-100 text-gray-800 py-2.5 sm:py-3 px-4 rounded-full text-xs font-semibold border border-gray-200 transition-all"
                >
                  <Phone size={14} />
                  <span>Call Us</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Accordion Items */}
          <div className="lg:col-span-7 space-y-2.5 sm:space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="bg-white rounded-2xl border border-gray-100/90 shadow-sm overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full text-left p-4 sm:p-5 md:p-6 flex items-center justify-between gap-3 sm:gap-4 cursor-pointer hover:bg-[#fbfdfb]"
                  >
                    <span className="font-bold text-xs sm:text-base text-[#132520] font-jakarta leading-snug">
                      {faq.q}
                    </span>
                    <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isOpen ? 'bg-[#183f34] text-white rotate-180' : 'bg-gray-100 text-gray-500'
                    }`}>
                      <ChevronDown size={15} />
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                      >
                        <div className="px-4 sm:px-6 pb-4 sm:pb-6 text-xs sm:text-sm text-[#536863] leading-relaxed border-t border-gray-50 pt-2.5 sm:pt-3">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};
