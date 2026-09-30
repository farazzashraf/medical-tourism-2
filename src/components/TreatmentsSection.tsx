import { useState } from 'react';
import { TREATMENTS_DATA } from '../data/medicalData';
import type { Specialty } from '../types';
import { Check, Clock, TrendingDown, Calendar, ChevronRight, Activity, Sparkles, Eye, HeartPulse, Flower2 } from 'lucide-react';

interface TreatmentsSectionProps {
  onOpenEnquiry: (treatment: Specialty) => void;
}

export const TreatmentsSection = ({ onOpenEnquiry }: TreatmentsSectionProps) => {
  const [activeSpecialty, setActiveSpecialty] = useState<Specialty>('ortho');

  const specialties: { id: Specialty; title: string; subtitle: string; icon: React.ReactNode; tag: string; stat: string; image: string }[] = [
    { 
      id: 'ortho', 
      title: 'Orthopaedics', 
      subtitle: 'Robotic Knee & Hip Replacements', 
      icon: <Activity size={32} />,
      tag: 'Save 74%',
      stat: 'Mako Robotic Alignment',
      image: '/images/hero.jpg'
    },
    { 
      id: 'dental', 
      title: 'Dental Care', 
      subtitle: 'All-on-4 Implants & Smile Makeovers', 
      icon: <Sparkles size={32} />,
      tag: 'Save 76%',
      stat: 'Swiss Titanium Implants',
      image: '/images/hero.jpg'
    },
    { 
      id: 'eyes', 
      title: 'Eyes (Ophthalmology)', 
      subtitle: 'Contoura Vision LASIK & Cataracts', 
      icon: <Eye size={32} />,
      tag: 'Save 75%',
      stat: 'Zeiss Laser Precision',
      image: '/images/hero.jpg'
    },
    { 
      id: 'wellness', 
      title: 'Wellness 360', 
      subtitle: 'Preventive Diagnostic & Cardiac Check', 
      icon: <HeartPulse size={32} />,
      tag: 'Save 78%',
      stat: '110+ Diagnostic Biomarkers',
      image: '/images/hero.jpg'
    },
    { 
      id: 'ayurveda', 
      title: 'Authentic Ayurveda', 
      subtitle: 'Classical Panchakarma & Detox', 
      icon: <Flower2 size={32} />,
      tag: 'Kerala Cradle',
      stat: 'Ashtavaidya Lineage',
      image: '/images/ayurveda.jpg'
    },
  ];

  const current = TREATMENTS_DATA[activeSpecialty];

  return (
    <section id="services" className="py-24 bg-white font-['Mulish']">
      <div className="container mx-auto px-6 lg:px-12">
        
        {/* Modern Section Header (No Eyebrow) */}
        <div className="max-w-3xl mb-16 text-left">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0b383e] mb-6 leading-tight">
            The treatments we offer, with no wait time.
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-normal">
            World-class medical specialties in Kerala with zero UAE Public Health waiting lists, transparent package pricing, and dedicated UAE clinical oversight.
          </p>
        </div>

        {/* 5 Sleek Architectural Cards with Image Backgrounds */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-16">
          {specialties.map((item) => {
            const isSelected = activeSpecialty === item.id;
            return (
              <div 
                key={item.id} 
                className={`relative h-[400px] rounded-2xl overflow-hidden cursor-pointer group transition-all duration-300 ${isSelected ? 'ring-4 ring-[#afd23f] shadow-xl transform -translate-y-2' : 'hover:-translate-y-2 hover:shadow-xl'}`}
                onClick={() => setActiveSpecialty(item.id)}
              >
                {/* Background Image & Overlay */}
                <div 
                  className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${item.image})` }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b383e]/95 via-[#0b383e]/40 to-[#0b383e]/10"></div>

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-between p-6">
                  {/* Top Tag */}
                  <div className="flex justify-start">
                    <span className="bg-[#afd23f] text-[#0b383e] text-xs font-black uppercase tracking-wider px-3 py-1.5 rounded-full shadow-md">
                      {item.tag}
                    </span>
                  </div>

                  {/* Icon & Details */}
                  <div className="flex flex-col">
                    <div className="w-14 h-14 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white mb-6 group-hover:bg-[#afd23f] group-hover:text-[#0b383e] group-hover:border-[#afd23f] transition-all duration-300">
                      {item.icon}
                    </div>

                    <span className="text-[#b9dcd5] text-xs font-bold uppercase tracking-wider mb-2 flex items-center gap-1">
                      <Clock size={12} /> 0 Days Wait
                    </span>
                    <h3 className="text-2xl font-extrabold text-white mb-2 leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-white/80 text-sm font-medium mb-4 line-clamp-2">
                      {item.subtitle}
                    </p>
                    
                    <div className="inline-block bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-md text-[#b9dcd5] text-xs font-semibold mb-6 w-fit border border-white/5">
                      {item.stat}
                    </div>

                    <div className="flex items-center gap-2 text-[#afd23f] text-sm font-bold group-hover:gap-4 transition-all duration-300">
                      <span>View Pricing</span>
                      <ChevronRight size={16} />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Specialty Deep Dive Panel */}
        {current && (
          <div className="bg-[#f8fafa] border border-gray-200 rounded-3xl p-8 lg:p-12 shadow-sm">
            
            {/* Panel Header */}
            <div className="flex flex-col lg:flex-row justify-between gap-10 mb-12">
              <div className="flex-1">
                <h3 className="text-3xl font-extrabold text-[#0b383e] mb-4">
                  {current.name}: <span className="font-medium text-gray-500">{current.tagline}</span>
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">
                  {current.description}
                </p>
              </div>

              <div className="flex flex-col gap-4 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm min-w-[300px]">
                <div className="flex justify-between items-center pb-4 border-b border-gray-100">
                  <span className="text-gray-500 font-semibold">UAE UAE Public Health Wait:</span>
                  <span className="text-red-500 font-bold">{current.ukAvgWait}</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-gray-100">
                  <span className="text-[#0b383e] font-bold">HealKerala Wait:</span>
                  <span className="text-[#0b383e] font-black text-lg">⚡ {current.keralaWait}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 font-semibold">Average Savings:</span>
                  <span className="text-[#24a147] font-bold flex items-center gap-1 bg-[#24a147]/10 px-2 py-1 rounded-md">
                    <TrendingDown size={16} />
                    ~{current.savingsPercent}%
                  </span>
                </div>
              </div>
            </div>

            {/* Procedures Table */}
            <div className="overflow-x-auto mb-10 bg-white rounded-2xl border border-gray-100 shadow-sm">
              <table className="w-full text-left border-collapse min-w-[800px]">
                <thead>
                  <tr className="bg-gray-50 text-[#0b383e] text-sm uppercase tracking-wider font-extrabold border-b border-gray-100">
                    <th className="p-6">Procedure & Technology</th>
                    <th className="p-6">UAE Private Rate</th>
                    <th className="p-6 text-[#24a147]">HealKerala Rate</th>
                    <th className="p-6">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {current.procedures.map((proc, idx) => (
                    <tr key={idx} className="hover:bg-gray-50 transition-colors group">
                      <td className="p-6">
                        <div className="font-bold text-[#0b383e] text-lg mb-1">{proc.title}</div>
                        <div className="text-gray-500 text-sm font-medium">{proc.details}</div>
                      </td>
                      <td className="p-6 text-gray-500 font-semibold line-through decoration-gray-300">
                        {proc.ukCost}
                      </td>
                      <td className="p-6">
                        <div className="text-2xl font-black text-[#0b383e]">{proc.keralaCost}</div>
                        <div className="text-xs font-bold text-[#24a147] bg-[#24a147]/10 inline-block px-2 py-1 rounded-md mt-1">
                          Save ~75%
                        </div>
                      </td>
                      <td className="p-6">
                        <button 
                          className="bg-white border-2 border-[#0b383e] text-[#0b383e] hover:bg-[#0b383e] hover:text-white font-bold px-6 py-2 rounded-full transition-colors w-full md:w-auto"
                          onClick={() => onOpenEnquiry(activeSpecialty)}
                        >
                          Enquire
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Panel Footer */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-gray-200">
              <div className="flex flex-col sm:flex-row items-center gap-6 text-sm font-semibold text-gray-600">
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-100">
                  <Clock size={18} className="text-[#afd23f]" />
                  <span><span className="text-[#0b383e]">Convalescence Stay:</span> {current.recoveryDays}</span>
                </div>
                
                <div className="flex flex-wrap items-center gap-4">
                  {current.highlights.slice(0, 2).map((h, i) => (
                    <span key={i} className="flex items-center gap-2">
                      <Check size={16} className="text-[#afd23f]" /> {h}
                    </span>
                  ))}
                </div>
              </div>

              <button 
                className="bg-[#0b383e] hover:bg-[#072b2e] text-white font-bold px-8 py-4 rounded-full flex items-center justify-center gap-2 transition-colors w-full md:w-auto shadow-md"
                onClick={() => onOpenEnquiry(activeSpecialty)}
              >
                <Calendar size={18} />
                <span>Book Free Consultation</span>
              </button>
            </div>

          </div>
        )}

      </div>
    </section>
  );
};
