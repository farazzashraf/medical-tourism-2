import { useState } from 'react';
import { HOSPITALS_DATA, DOCTORS_DATA } from '../data/medicalData';
import { 
  Building2, 
  UserCheck, 
  MapPin, 
  Award, 
  Bed, 
  Check, 
  ShieldCheck,
  Stethoscope,
  ArrowRight,
  ExternalLink
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface HospitalsDoctorsProps {
  onOpenEnquiry: (treatment?: string) => void;
  onNavigate?: (path: string) => void;
}

export const HospitalsDoctors = ({ onOpenEnquiry, onNavigate }: HospitalsDoctorsProps) => {
  const [viewMode, setViewMode] = useState<'hospitals' | 'doctors'>('hospitals');
  const [filterSpecialty, setFilterSpecialty] = useState<string>('all');

  const filteredDoctors = filterSpecialty === 'all'
    ? DOCTORS_DATA
    : DOCTORS_DATA.filter((d) => {
        if (filterSpecialty === 'ayurvedic') {
          return d.specialty === 'ayurveda' || d.specialty === 'ayurvedic';
        }
        return d.specialty === filterSpecialty;
      });

  // STRICTLY 5 treatments: dental, ortho, ayurvedic, cosmetic, eyes
  const specialtiesList = [
    { id: 'all', label: 'All Specialties' },
    { id: 'dental', label: 'Dental' },
    { id: 'ortho', label: 'Ortho' },
    { id: 'ayurvedic', label: 'Ayurvedic' },
    { id: 'cosmetic', label: 'Cosmetic' },
    { id: 'eyes', label: 'Eyes' }
  ];

  const handleDoctorConsult = (docSpecialty: string) => {
    const slug = docSpecialty === 'ayurveda' ? 'ayurvedic' : docSpecialty;
    if (onNavigate) {
      onNavigate(`/specialties/${slug}`);
    } else {
      onOpenEnquiry(docSpecialty);
    }
  };

  return (
    <section id="doctors" className="py-16 md:py-24 bg-[#fbfdfb] font-jakarta overflow-hidden border-t border-gray-100">
      <div id="hospitals" className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#183f34] bg-[#eef6f2] px-3.5 py-1 rounded-full inline-block mb-3">
            Accredited Centers of Excellence
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#132520] tracking-tight leading-tight">
            Leading Hospitals &amp; Renowned Doctors
          </h2>
          <p className="text-xs sm:text-base text-[#536863] mt-2 sm:mt-3 font-normal leading-relaxed">
            Partnered with Kerala&apos;s premier JCI and NABH accredited medical institutions and senior surgical faculty with decades of clinical mastery.
          </p>
        </div>

        {/* View Switcher Pill Bar */}
        <div className="flex flex-col items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-10 w-full">
          <div className="w-full max-w-md p-1 sm:p-1.5 bg-white border border-gray-200/80 rounded-full shadow-sm grid grid-cols-2">
            <button
              className={`flex items-center justify-center gap-1.5 sm:gap-2 px-2 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                viewMode === 'hospitals'
                  ? 'bg-[#183f34] text-white shadow-md'
                  : 'text-gray-600 hover:text-[#183f34]'
              }`}
              onClick={() => setViewMode('hospitals')}
            >
              <Building2 size={15} className="shrink-0" />
              <span className="truncate">Hospitals ({HOSPITALS_DATA.length})</span>
            </button>

            <button
              className={`flex items-center justify-center gap-1.5 sm:gap-2 px-2 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                viewMode === 'doctors'
                  ? 'bg-[#183f34] text-white shadow-md'
                  : 'text-gray-600 hover:text-[#183f34]'
              }`}
              onClick={() => setViewMode('doctors')}
            >
              <UserCheck size={15} className="shrink-0" />
              <span className="truncate">Doctors ({DOCTORS_DATA.length})</span>
            </button>
          </div>

          {/* Specialty Filter when viewing doctors - strictly 5 */}
          {viewMode === 'doctors' && (
            <div className="flex items-center gap-1.5 overflow-x-auto max-w-full pb-2 no-scrollbar px-1">
              {specialtiesList.map((spec) => (
                <button
                  key={spec.id}
                  className={`text-xs font-semibold px-3 py-1.5 rounded-full transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                    filterSpecialty === spec.id
                      ? 'bg-[#183f34] text-white shadow-sm'
                      : 'bg-white border border-gray-200 text-gray-600 hover:bg-[#eef6f2]'
                  }`}
                  onClick={() => setFilterSpecialty(spec.id)}
                >
                  {spec.label}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Hospitals View Grid */}
        <AnimatePresence mode="wait">
          {viewMode === 'hospitals' && (
            <motion.div 
              key="hospitals"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7"
            >
              {HOSPITALS_DATA.map((hosp, idx) => (
                <motion.div
                  key={hosp.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:-translate-y-1"
                >
                  <div className="p-4 sm:p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#eef6f2] text-[#183f34] flex items-center justify-center group-hover:bg-[#183f34] group-hover:text-white transition-colors duration-200">
                        <Building2 size={20} />
                      </div>
                      <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-gray-50 border border-gray-100 text-gray-700 text-xs font-semibold">
                        <Bed size={13} className="text-[#183f34]" />
                        <span>{hosp.beds} Beds</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1 text-xs text-gray-500 mb-2">
                      <MapPin size={13} className="text-[#183f34] shrink-0" />
                      <span className="truncate">{hosp.location}</span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-[#132520] mb-2 font-jakarta">
                      {hosp.name}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#536863] mb-4 sm:mb-5 leading-relaxed line-clamp-3">
                      {hosp.description}
                    </p>

                    {/* Accreditations */}
                    <div className="flex flex-wrap gap-1.5 mb-4 sm:mb-5">
                      {hosp.accreditations.map((acc, i) => (
                        <span key={i} className="inline-flex items-center gap-1 text-[11px] font-semibold px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-lg bg-[#eef6f2] text-[#183f34]">
                          <Award size={12} /> {acc}
                        </span>
                      ))}
                    </div>

                    {/* Features list */}
                    <div className="space-y-1.5 text-xs text-gray-600 mb-3 sm:mb-4">
                      {hosp.features.slice(0, 3).map((feat, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <Check size={14} className="text-[#183f34] shrink-0" />
                          <span className="truncate">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-4 sm:p-6 pt-0">
                    <button 
                      onClick={() => setViewMode('doctors')}
                      className="w-full flex items-center justify-center gap-1.5 sm:gap-2 bg-[#183f34] hover:bg-[#12332a] text-white font-medium py-2.5 sm:py-3 px-3 sm:px-4 rounded-full text-xs transition-all cursor-pointer shadow-sm hover:shadow"
                    >
                      <span className="truncate">View Doctors at {hosp.name.split(' ')[0]}</span>
                      <ArrowRight size={13} className="shrink-0" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Doctors View Grid - NO DOCTOR PICTURES */}
          {viewMode === 'doctors' && (
            <motion.div 
              key="doctors-grid"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7"
            >
              {filteredDoctors.map((doc, idx) => (
                <motion.div
                  key={doc.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:-translate-y-1"
                >
                  <div className="p-4 sm:p-6">
                    {/* Clean Doctor Header WITHOUT photo */}
                    <div className="flex items-start gap-3 sm:gap-3.5 mb-3 sm:mb-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#eef6f2] text-[#183f34] flex items-center justify-center shrink-0 border border-[#183f34]/15 group-hover:bg-[#183f34] group-hover:text-white transition-colors duration-200">
                        <Stethoscope size={20} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-bold text-[#183f34] bg-[#eef6f2] px-2 sm:px-2.5 py-0.5 rounded-full mb-1">
                          <ShieldCheck size={12} className="shrink-0" />
                          <span className="truncate">{doc.experienceYears}+ Yrs Leadership</span>
                        </div>
                        <h3 className="text-sm sm:text-base font-bold text-[#132520] font-jakarta leading-tight truncate">
                          {doc.name}
                        </h3>
                        <div className="text-xs text-gray-500 mt-0.5 font-medium truncate">
                          {doc.role}
                        </div>
                      </div>
                    </div>

                    <div className="text-xs text-[#183f34] font-medium flex items-center gap-1.5 mb-3 bg-[#fbfdfb] p-2 rounded-lg border border-gray-100">
                      <Building2 size={13} className="shrink-0" />
                      <span className="truncate">{doc.hospital} • {doc.hospitalLocation}</span>
                    </div>

                    <p className="text-xs sm:text-sm text-[#536863] mb-3 sm:mb-4 leading-relaxed line-clamp-3">
                      {doc.about}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-3 sm:mb-4">
                      {doc.qualifications.map((q, i) => (
                        <span key={i} className="text-[10px] sm:text-[11px] px-2 py-0.5 rounded-md bg-gray-50 text-gray-700 font-medium border border-gray-100">
                          {q}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-4 sm:p-6 pt-0">
                    <button 
                      onClick={() => handleDoctorConsult(doc.specialty)}
                      className="w-full flex items-center justify-center gap-1.5 sm:gap-2 bg-[#183f34] hover:bg-[#12332a] text-white font-medium py-2.5 sm:py-3 px-3 sm:px-4 rounded-full text-xs transition-all cursor-pointer shadow-sm hover:shadow"
                    >
                      <span className="truncate">View {doc.name.split(' ')[1] || doc.name}&apos;s Treatment Plan</span>
                      <ExternalLink size={13} className="shrink-0" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
