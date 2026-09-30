import { motion } from 'framer-motion';

export const StatsStrip = () => {
  const stats = [
    { value: '50+', label: 'Accredited Hospitals', desc: 'JCI & NABH Certified quaternary hubs' },
    { value: '500+', label: 'Specialist Surgeons', desc: 'Internationally trained faculty' },
    { value: '15,000+', label: 'Patients Treated', desc: 'From UAE, GCC, UK & Worldwide' },
    { value: '70%', label: 'Average Savings', desc: 'Compared to Western private rates' },
  ];

  return (
    <section className="bg-[#183f34] relative overflow-hidden py-12 md:py-16 text-white font-jakarta">
      {/* Background ambient light */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-[#287a55]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-[#88c343]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 md:gap-10">
          {stats.map((s, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              className="text-center flex flex-col items-center justify-center group p-1"
            >
              <div className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#88c343] mb-1.5 sm:mb-2 tracking-tight group-hover:scale-105 transition-transform duration-300">
                {s.value}
              </div>
              <div className="text-xs sm:text-base font-bold text-white mb-0.5 sm:mb-1">
                {s.label}
              </div>
              <div className="text-[11px] sm:text-xs text-white/70 max-w-[180px]">
                {s.desc}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
