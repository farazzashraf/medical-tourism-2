import { FileText, Plane, Building2, HeartHandshake } from 'lucide-react';

export const ServicesSection = () => {
  const services = [
    {
      id: 'visa',
      icon: <FileText className="size-6 text-[#0d766e]" />,
      title: 'Easier Visa Processing',
      description: 'Navigating international medical visas can be complex. Our experts provide complete documentation support, invitation letters from hospitals, and liaison with embassies to ensure a hassle-free entry into India.',
      bullets: [
        'Priority invitation letters',
        'Documentation assistance',
        'Extension support if required',
      ],
      image: '/images/visa-passport.jpg',
      imageAlt: 'Medical Travel Visa and Documentation Support',
      reverse: false,
    },
    {
      id: 'travel',
      icon: <Plane className="size-6 text-[#0d766e]" />,
      title: 'Travel Arrangements',
      description: 'From the moment you land, we take over. Private airport transfers, specialized medical transport, and premium hotel stays curated for post-operative comfort are all part of our concierge service.',
      bullets: [
        'Airport pick-up & drop',
        '5-star & Boutique accommodations',
        'Local travel for companions',
      ],
      image: '/images/travel-suite.jpg',
      imageAlt: 'Luxury Recovery Accommodations and Private Transport',
      reverse: true,
    },
    {
      id: 'hospital',
      icon: <Building2 className="size-6 text-[#0d766e]" />,
      title: 'Hospital Coordination',
      description: 'We act as your local medical advocate. We coordinate appointments with top surgeons, manage hospital billing, and ensure that your medical history is properly communicated to the Indian clinical teams.',
      bullets: [
        'Appointment scheduling',
        'Second opinion consultation',
        'Medical records translation',
      ],
      image: '/images/doctors.jpg',
      imageAlt: 'Expert Doctor Consultation and Hospital Coordination',
      reverse: false,
    },
    {
      id: 'support',
      icon: <HeartHandshake className="size-6 text-[#0d766e]" />,
      title: 'Pre & Post Treatment Support',
      description: "Care doesn't end at discharge. We provide virtual consultations before you fly and dedicated recovery support, rehabilitation sessions, and follow-up care after you return home.",
      bullets: [
        'Virtual pre-trip briefing',
        'Specialized diet & rehab',
        'Post-return telemedicine',
      ],
      image: '/assets/home/heal-faster.png',
      imageAlt: 'Holistic Convalescence and Post-Return Telemedicine',
      reverse: true,
    },
  ];

  return (
    <section id="services" className="py-20 sm:py-28 bg-[#fafbf9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading matching Page 3 */}
        <div className="text-center max-w-3xl mx-auto mb-20 sm:mb-24">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#113830] tracking-tight leading-tight">
            Seamless Support,
            <span className="block mt-1 font-serif-accent italic font-normal text-[#0d766e]">
              Every Step of the Way.
            </span>
          </h2>
          <p className="mt-5 text-base sm:text-lg text-gray-600 leading-relaxed font-normal">
            We handle the logistics so you can focus on what matters most: your health and recovery.
          </p>
        </div>

        {/* 4 Feature Rows (Z-Pattern) */}
        <div className="space-y-20 sm:space-y-28">
          {services.map((item) => (
            <div 
              key={item.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center ${
                item.reverse ? 'lg:flex-row-reverse' : ''
              }`}
            >
              
              {/* Text Side */}
              <div className={`lg:col-span-6 ${item.reverse ? 'lg:order-2' : 'lg:order-1'}`}>
                <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center mb-6 shadow-xs border border-teal-100/60">
                  {item.icon}
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-[#113830] mb-4 tracking-tight">
                  {item.title}
                </h3>

                <p className="text-base text-gray-600 leading-relaxed mb-6 font-normal">
                  {item.description}
                </p>

                {/* Bullets with checkmarks matching mockup */}
                <ul className="space-y-3">
                  {item.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm sm:text-base text-gray-700">
                      <span className="text-[#0d766e] font-bold text-base shrink-0">✓</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Image Side */}
              <div className={`lg:col-span-6 ${item.reverse ? 'lg:order-1' : 'lg:order-2'}`}>
                <div className="rounded-3xl overflow-hidden shadow-lg border border-gray-100 aspect-[4/3] bg-gray-100 group">
                  <img 
                    src={item.image} 
                    alt={item.imageAlt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                    loading="lazy"
                  />
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
