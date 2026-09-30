import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const TestimonialsSection = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const testimonials = [
    {
      id: 1,
      quote: "The coordination and support throughout my treatment was excellent. The team made everything so easy for us.",
      rating: 5,
      name: "Sarah J.",
      country: "United Kingdom",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
    },
    {
      id: 2,
      quote: "World-class treatment and a beautiful place to recover. I highly recommend CareKerala to anyone seeking quality healthcare.",
      rating: 5,
      name: "Ahmed R.",
      country: "UAE",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    },
    {
      id: 3,
      quote: "Professional, caring and very well organized. From hospital appointments to travel, everything was handled seamlessly.",
      rating: 5,
      name: "Priya M.",
      country: "India",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
    },
    {
      id: 4,
      quote: "Saved over 70% on my robotic knee replacement compared to private London rates. The recovery by the backwaters was pure bliss.",
      rating: 5,
      name: "David & Linda R.",
      country: "Manchester, UK",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    },
    {
      id: 5,
      quote: "The 14-day Ayurvedic Panchakarma program in Kovalam brought my mobility back completely. Truly life-transforming care.",
      rating: 5,
      name: "Fatima Al-Mansoor",
      country: "Dubai, UAE",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    },
    {
      id: 6,
      quote: "Outstanding ophthalmic laser surgery. In under 15 minutes, my vision was restored to 20/20 with German Zeiss technology.",
      rating: 5,
      name: "Marcus Weber",
      country: "Germany",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80",
    },
  ];

  const cardsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / cardsPerPage);

  const prev = () => {
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const next = () => {
    setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  const displayedReviews = testimonials.slice(
    currentPage * cardsPerPage,
    currentPage * cardsPerPage + cardsPerPage
  );

  return (
    <section id="testimonials" className="py-14 sm:py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* Header row with Title and Left/Right Circular Navigation Arrows matching screenshot */}
        <div className="flex items-center justify-between mb-8 sm:mb-10 gap-3">
          <div>
            <h2 className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-[#132520] tracking-tight font-jakarta">
              Hear from Our Patients
            </h2>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={prev}
              aria-label="Previous testimonials"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-gray-200 hover:border-[#183f34] flex items-center justify-center text-gray-600 hover:text-[#183f34] hover:bg-[#eef6f2] transition-colors cursor-pointer"
            >
              <ChevronLeft size={17} />
            </button>
            <button
              onClick={next}
              aria-label="Next testimonials"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-gray-200 hover:border-[#183f34] flex items-center justify-center text-gray-600 hover:text-[#183f34] hover:bg-[#eef6f2] transition-colors cursor-pointer"
            >
              <ChevronRight size={17} />
            </button>
          </div>
        </div>

        {/* Testimonials 3-Card Grid */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6"
            >
              {displayedReviews.map((review) => (
                <div
                  key={review.id}
                  className="bg-[#fbfcfb] rounded-2xl p-4 sm:p-6 sm:p-7 border border-gray-100/90 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
                >
                  <div>
                    {/* Double Quote Symbol in soft mint */}
                    <div className="text-3xl sm:text-5xl font-serif text-[#183f34]/20 leading-none select-none -mt-1 sm:-mt-2 mb-2">
                      ““
                    </div>

                    {/* Review text */}
                    <p className="text-xs sm:text-sm text-[#4a5e57] leading-relaxed min-h-[60px] sm:min-h-[72px]">
                      {review.quote}
                    </p>

                    {/* 5 Golden Stars */}
                    <div className="flex text-amber-400 mt-3 sm:mt-4 mb-4 sm:mb-5 gap-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} size={14} fill="currentColor" stroke="none" />
                      ))}
                    </div>
                  </div>

                  {/* Patient Info Row */}
                  <div className="flex items-center gap-3 sm:gap-3.5 pt-3 sm:pt-4 border-t border-gray-100">
                    <img
                      src={review.avatar}
                      alt={review.name}
                      className="w-10 h-10 sm:w-11 sm:h-11 rounded-full object-cover border-2 border-white shadow-sm shrink-0"
                    />
                    <div>
                      <div className="text-xs sm:text-sm font-bold text-[#132520] font-jakarta">
                        {review.name}
                      </div>
                      <div className="text-[11px] sm:text-xs text-gray-500">
                        {review.country}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
