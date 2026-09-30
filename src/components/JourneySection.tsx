import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle2, Calendar, FileText, Plane, ShieldCheck, HeartHandshake } from 'lucide-react';

interface JourneySectionProps {
  onOpenEnquiry: () => void;
}

export const JourneySection = ({ onOpenEnquiry }: JourneySectionProps) => {
  const [activePhase, setActivePhase] = useState<number>(1);

  const phases = [
    { 
      id: 1, 
      phaseNum: 'Phase 1', 
      title: 'Pre-Departure (Consult & Plan)' 
    },
    { 
      id: 2, 
      phaseNum: 'Phase 2', 
      title: 'In-Country (Treatment & Recovery)' 
    },
    { 
      id: 3, 
      phaseNum: 'Phase 3', 
      title: 'Post-Trip (Follow-up & Wellness)' 
    }
  ];

  interface StepItem {
    title: string;
    description: string;
    icon: React.ReactNode;
    color: string;
    side: 'left' | 'right';
  }

  const phaseSteps: Record<number, StepItem[]> = {
    1: [
      {
        title: 'Initial Inquiry & Medical Review',
        description: 'Submit your recent scans and medical history through our secure HIPAA/GDPR-compliant portal for instant preliminary review.',
        icon: <FileText size={22} className="text-white" />,
        color: '#183f34',
        side: 'left'
      },
      {
        title: 'Virtual Specialist Consultation',
        description: 'Meet face-to-face via video call with Kerala’s chief surgical or medical director to design your individualized care roadmap.',
        icon: <Calendar size={22} className="text-white" />,
        color: '#287a55',
        side: 'right'
      },
      {
        title: 'Guaranteed Transparent Quote',
        description: 'Receive an itemized all-inclusive quotation covering surgeon fees, hospital stay, medications, and concierge accommodation.',
        icon: <CheckCircle2 size={22} className="text-white" />,
        color: '#183f34',
        side: 'left'
      },
      {
        title: 'Travel & Medical Visa Logistics',
        description: 'Our travel desk coordinates fast-track e-medical visas, priority flight bookings, and complimentary companion arrangements.',
        icon: <Plane size={22} className="text-white" />,
        color: '#287a55',
        side: 'right'
      }
    ],
    2: [
      {
        title: 'VIP Chauffeur & Personal Host',
        description: 'Warm welcome at Cochin (COK) or Trivandrum (TRV) International Airport with private transfers to your hospital or retreat.',
        icon: <Plane size={22} className="text-white" />,
        color: '#183f34',
        side: 'left'
      },
      {
        title: 'Comprehensive Pre-Op Diagnostics',
        description: 'Immediate diagnostic imaging (3T MRI, 3D CT, cardiac clearance) completed in dedicated international patient suites.',
        icon: <ShieldCheck size={22} className="text-white" />,
        color: '#287a55',
        side: 'right'
      },
      {
        title: 'World-Class Surgical Procedure',
        description: 'Minimally invasive or robotic-assisted surgery performed in ISO Class 100 laminar-airflow operating theaters.',
        icon: <CheckCircle2 size={22} className="text-white" />,
        color: '#183f34',
        side: 'left'
      },
      {
        title: 'Serene Convalescence & Wellness',
        description: 'Transition from hospital to a lakeside restorative sanctuary for gentle physiotherapy, fresh organic nutrition, and peaceful recovery.',
        icon: <HeartHandshake size={22} className="text-white" />,
        color: '#287a55',
        side: 'right'
      }
    ],
    3: [
      {
        title: 'Fit-to-Fly Certification & Discharge',
        description: 'Full multidisciplinary discharge summary, prescription medications, and flight clearance certificates provided in English.',
        icon: <ShieldCheck size={22} className="text-white" />,
        color: '#183f34',
        side: 'left'
      },
      {
        title: 'Continuous Virtual Follow-Up',
        description: 'Scheduled tele-consultations at 30, 90, and 180 days with your primary specialist to monitor ongoing clinical outcomes.',
        icon: <Calendar size={22} className="text-white" />,
        color: '#287a55',
        side: 'right'
      },
      {
        title: 'Long-Term Lifestyle & Ayurvedic Health',
        description: 'Personalized dietary guidelines, herbal supplement supply, and coordinated handover with your home GP.',
        icon: <HeartHandshake size={22} className="text-white" />,
        color: '#183f34',
        side: 'left'
      }
    ]
  };

  const currentSteps = phaseSteps[activePhase] || phaseSteps[1];

  return (
    <section id="journey" className="py-14 sm:py-16 md:py-24 bg-white relative overflow-hidden font-jakarta">
      <div className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-8 sm:mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#183f34] bg-[#eef6f2] px-3.5 py-1 rounded-full inline-block mb-3">
            Patient Pathway
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#132520] tracking-tight leading-tight">
            Your Journey to Wellness
          </h2>
          <p className="text-xs sm:text-base text-[#536863] mt-2 sm:mt-3 max-w-2xl mx-auto leading-relaxed">
            A seamless, guided experience from your first consultation to restorative recovery, combining world-class healthcare with serene backwaters hospitality.
          </p>
        </div>

        {/* 3 Phase Switcher Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 mb-10 sm:mb-16">
          {phases.map((p) => {
            const isActive = activePhase === p.id;
            return (
              <button
                key={p.id}
                onClick={() => setActivePhase(p.id)}
                className={`p-3.5 sm:p-5 rounded-2xl border transition-all duration-300 text-left cursor-pointer ${
                  isActive
                    ? 'bg-[#183f34] text-white border-[#183f34] shadow-lg scale-[1.01] sm:scale-[1.02]'
                    : 'bg-white text-[#132520] border-gray-200 hover:border-[#183f34]/50 hover:bg-[#fbfdfb]'
                }`}
              >
                <div className={`text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-1 ${
                  isActive ? 'text-[#88c343]' : 'text-gray-400'
                }`}>
                  {p.phaseNum}
                </div>
                <div className="font-bold text-sm sm:text-lg leading-tight">
                  {p.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Dynamic Timeline Layout */}
        <div className="relative">
          {/* Vertical Timeline Track */}
          <div className="absolute left-4 sm:left-6 md:left-1/2 top-4 bottom-4 -translate-x-1/2 w-1 bg-[#183f34]/15 rounded-full" />

          <AnimatePresence mode="wait">
            <motion.div 
              key={activePhase}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="space-y-6 sm:space-y-10 md:space-y-12"
            >
              {currentSteps.map((step, idx) => {
                const isLeft = step.side === 'left';

                return (
                  <div
                    key={idx}
                    className={`flex flex-col-reverse md:flex-row items-center relative ${
                      isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    {/* Content Card Side */}
                    <div className="flex-1 w-full pl-10 sm:pl-14 md:pl-0 z-10">
                      <div 
                        className={`relative rounded-2xl bg-white border border-gray-100 shadow-sm sm:shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden ${
                          isLeft ? 'md:mr-12' : 'md:ml-12'
                        }`}
                      >
                        {/* Top Header Banner */}
                        <div 
                          className="px-3.5 sm:px-5 py-2.5 sm:py-3.5 text-white flex items-center justify-between"
                          style={{ backgroundColor: step.color }}
                        >
                          <h3 className="font-bold text-xs sm:text-base font-jakarta">
                            {step.title}
                          </h3>
                        </div>

                        {/* Card Body */}
                        <div className="p-3.5 sm:p-5">
                          <p className="text-[#536863] text-xs sm:text-sm leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Center Icon Node */}
                    <div 
                      className="absolute left-4 sm:left-6 md:left-1/2 -translate-x-1/2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full border-2 sm:border-4 border-white shadow-md sm:shadow-lg flex items-center justify-center z-20"
                      style={{ backgroundColor: step.color }}
                    >
                      <div className="scale-75 sm:scale-90 md:scale-100">
                        {step.icon}
                      </div>
                    </div>

                    {/* Empty Opposite Side for Grid Balance */}
                    <div className="hidden md:block flex-1"></div>
                  </div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 sm:mt-16">
          <button
            onClick={onOpenEnquiry}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#183f34] hover:bg-[#12332a] text-white font-semibold text-xs sm:text-base px-6 sm:px-8 py-3 sm:py-3.5 rounded-full shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
          >
            <span>Start Phase 1 Consultation</span>
            <ArrowRight size={16} />
          </button>
        </div>

      </div>
    </section>
  );
};
