import { ArrowRight, ShieldCheck } from 'lucide-react';

interface HospitalPartnersProps {
  onViewAll?: () => void;
}

export const AccreditationMarquee = ({ onViewAll }: HospitalPartnersProps) => {
  const partners = [
    {
      name: 'Aster HOSPITALS',
      type: 'Quaternary Healthcare',
      logoText: 'Aster',
      logoSub: 'HOSPITALS',
      symbol: '✦',
    },
    {
      name: 'vps HealthCare',
      type: 'Lakeshore Quaternary Care',
      logoText: 'vps',
      logoSub: 'HealthCare',
      symbol: '❖',
    },
    {
      name: 'KIMSHEALTH',
      type: 'Multi-Speciality Centre',
      logoText: 'KIMSHEALTH',
      logoSub: 'Hospital',
      symbol: '✪',
    },
    {
      name: 'Rajagiri Hospital',
      type: 'Tertiary Care & Transplants',
      logoText: 'Rajagiri',
      logoSub: 'Hospital',
      symbol: '✚',
    },
    {
      name: 'Amrita Hospitals',
      type: 'Institute of Medical Sciences',
      logoText: 'Amrita',
      logoSub: 'Hospitals',
      symbol: '⚜',
    },
    {
      name: 'SUT PATTOM',
      type: 'Super Speciality Hospital',
      logoText: 'SUT PATTOM',
      logoSub: 'Super Speciality Hospital',
      symbol: '◈',
    },
  ];

  const handleScrollToHospitals = () => {
    if (onViewAll) {
      onViewAll();
    } else {
      const el = document.getElementById('hospitals');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-12 md:py-16 bg-white border-t border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* Section Header matching screenshot: Title on left, View all partners on right */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 sm:mb-8 gap-3 sm:gap-4">
          <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
            <h3 className="text-lg sm:text-2xl font-extrabold text-[#132520] tracking-tight font-jakarta">
              Our Hospital Partners
            </h3>
            <span className="inline-flex items-center gap-1 text-[11px] sm:text-xs font-semibold px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full bg-[#eef6f2] text-[#183f34]">
              <ShieldCheck size={12} />
              JCI & NABH Accredited
            </span>
          </div>

          <button
            onClick={handleScrollToHospitals}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#183f34] hover:text-[#12332a] group cursor-pointer self-start sm:self-auto"
          >
            <span>View all partners</span>
            <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
          </button>
        </div>

        {/* Partners Row matching the screenshot */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-6 lg:gap-8 items-center pt-2">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex items-center justify-center p-2.5 sm:p-4 rounded-xl border border-transparent hover:border-gray-100 hover:bg-[#fbfdfb] transition-all duration-200 group cursor-default"
            >
              <div className="flex items-center gap-2 sm:gap-2.5 text-gray-500 group-hover:text-[#183f34] transition-colors">
                <span className="text-base sm:text-lg opacity-70 group-hover:opacity-100 transition-opacity">
                  {partner.symbol}
                </span>
                <div className="text-left font-jakarta">
                  <div className="text-xs sm:text-sm font-bold tracking-tight text-gray-700 group-hover:text-[#132520] leading-tight">
                    {partner.logoText}
                  </div>
                  <div className="text-[9px] sm:text-[10px] uppercase tracking-wider text-gray-400 group-hover:text-[#183f34] font-medium leading-none mt-0.5">
                    {partner.logoSub}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
