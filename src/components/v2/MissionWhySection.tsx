import { ShieldCheck, HeartHandshake, Award } from 'lucide-react';
import { BRAND } from '../../config/brand';
import type { WhyIndiaItem } from '../../data/geoContent';

interface MissionWhySectionProps {
  brandName?: string;
  whyIndiaTitle?: string;
  whyIndiaReasons?: WhyIndiaItem[];
}

const DEFAULT_REASONS: WhyIndiaItem[] = [
  {
    title: 'Clinical Excellence',
    description: 'Access JCI and NABH accredited hospitals equipped with the latest surgical technology and robotic systems.',
  },
  {
    title: 'Significant Cost Savings',
    description: 'Experience world-class treatment at significant cost savings compared to Western private healthcare without compromising clinical safety.',
  },
  {
    title: 'Holistic Recovery',
    description: 'Complement modern medicine with traditional wellness practices like Ayurveda and Yoga for a faster, deeper recovery.',
  },
];

export const MissionWhySection = ({ 
  brandName = BRAND.name,
  whyIndiaTitle = 'Why India?',
  whyIndiaReasons = DEFAULT_REASONS,
}: MissionWhySectionProps) => {
  return (
    <section id="about" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header: Badge, Title & Mission Statement */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="inline-block text-xs sm:text-[13px] font-bold tracking-[0.25em] text-[#0d766e] uppercase mb-4">
            OUR MISSION
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#113830] tracking-tight leading-tight">
            Pioneering the Future of
            <span className="block mt-1">Healthcare Travel in India.</span>
          </h2>
          <p className="mt-6 text-base sm:text-lg text-gray-600 leading-relaxed font-normal">
            {brandName} was founded on a simple belief: healthcare should be accessible, seamless, and deeply personal. We bridge the gap between premier Indian medical facilities and patients seeking specialized care.
          </p>
        </div>

        {/* Main Content Split: Image on Left + Why India on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Hospital Atrium Photo + JCI & NABH Floating Badge */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-gray-100 aspect-[4/5] sm:aspect-[4/4.5] max-h-[580px] w-full bg-gray-100">
              <img 
                src="/images/hospital-atrium.jpg" 
                alt="Modern Hospital Atrium" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
              
              {/* Subtle inner dark gradient for contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />

              {/* Floating Badge matching uploaded mockup */}
              <div className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 bg-white/95 backdrop-blur-md px-6 py-4 rounded-2xl shadow-xl border border-gray-100/80 flex flex-col items-start min-w-[170px]">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#0d766e] tracking-tight">
                  JCI & NABH
                </div>
                <div className="text-xs sm:text-sm font-medium text-gray-600 mt-0.5">
                  Accredited Network
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Why India? — Dynamic content */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-[#113830] mb-8 tracking-tight">
              {whyIndiaTitle}
            </h3>

            <div className="space-y-8">
              {whyIndiaReasons.map((reason) => (
                <div key={reason.title}>
                  <h4 className="text-lg sm:text-xl font-bold text-[#113830] mb-2">
                    {reason.title}
                  </h4>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
                    {reason.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Section: Our Core Values matching Page 2 */}
        <div className="mt-28 pt-12 border-t border-gray-100">
          <h3 className="text-2xl sm:text-3xl font-bold text-[#113830] text-center mb-14 tracking-tight">
            Our Core Values
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 text-center">
            
            {/* Value 1: Transparency */}
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 rounded-2xl bg-teal-50 flex items-center justify-center text-[#0d766e] mb-5 shadow-xs border border-teal-100/60">
                <ShieldCheck className="size-7" />
              </div>
              <h4 className="text-lg sm:text-xl font-bold text-[#113830] mb-2">
                Transparency
              </h4>
              <p className="text-sm sm:text-base text-gray-600 max-w-xs leading-relaxed font-normal">
                Clear cost breakdowns and honest medical advice at every stage.
              </p>
            </div>

            {/* Value 2: Patient First */}
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 rounded-2xl bg-teal-50 flex items-center justify-center text-[#0d766e] mb-5 shadow-xs border border-teal-100/60">
                <HeartHandshake className="size-7" />
              </div>
              <h4 className="text-lg sm:text-xl font-bold text-[#113830] mb-2">
                Patient First
              </h4>
              <p className="text-sm sm:text-base text-gray-600 max-w-xs leading-relaxed font-normal">
                Your comfort and recovery are the only metrics we measure success by.
              </p>
            </div>

            {/* Value 3: Clinical Integrity */}
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 rounded-2xl bg-teal-50 flex items-center justify-center text-[#0d766e] mb-5 shadow-xs border border-teal-100/60">
                <Award className="size-7" />
              </div>
              <h4 className="text-lg sm:text-xl font-bold text-[#113830] mb-2">
                Clinical Integrity
              </h4>
              <p className="text-sm sm:text-base text-gray-600 max-w-xs leading-relaxed font-normal">
                Ethical practices meeting rigorous clinical healthcare standards.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
