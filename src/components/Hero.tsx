import { 
  ArrowRight, 
  Play, 
  ShieldCheck, 
  Globe2, 
  CheckCircle2,
} from 'lucide-react';
import { motion } from 'framer-motion';

interface HeroProps {
  onOpenEnquiry: (treatment?: string) => void;
  onOpenVideo?: () => void;
  onNavigate?: (path: string) => void;
}

export const Hero = ({ onOpenEnquiry: _onOpenEnquiry, onOpenVideo, onNavigate: _onNavigate }: HeroProps) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#fbfdfb] via-white to-[#f7faf8] pt-28 pb-14 md:pt-36 md:pb-20 lg:pb-24">
      {/* Background soft ambient glow */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-[#eef6f2] rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-40 right-10 w-96 h-96 bg-[#e8f3ed]/60 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        
        {/* Main Hero Split Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 xl:gap-8 items-center">
          
          {/* Left Column: Heading, Subtitle, CTA Buttons, Trust Metrics */}
          <div className="lg:col-span-6 xl:col-span-7 space-y-5 sm:space-y-6 xl:space-y-7 text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="space-y-3.5 sm:space-y-5"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[40px] xl:text-[52px] 2xl:text-[58px] font-extrabold text-[#132520] tracking-tight leading-[1.14] font-jakarta">
                World-Class <br />
                Healthcare in{' '}
                <span className="text-[#183f34] inline-block relative">
                  Kerala
                  <svg 
                    className="absolute -bottom-2 left-0 w-full text-[#88c343]/50" 
                    height="8" 
                    viewBox="0 0 100 8" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1 5.5C25 1.5 75 1.5 99 5.5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                  </svg>
                </span>
              </h1>

              <p className="text-sm sm:text-base lg:text-[15px] xl:text-lg text-[#536863] leading-relaxed max-w-xl font-normal">
                Trusted hospitals, expert doctors and seamless support for your treatment journey — 
                from your first consultation to a healthy return home.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
              className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-2.5 sm:gap-4 pt-1"
            >
              <button
                onClick={() => scrollTo('popular-treatments')}
                className="inline-flex items-center justify-center gap-2.5 bg-[#183f34] hover:bg-[#12332a] text-white font-semibold text-xs sm:text-sm xl:text-base px-5 sm:px-7 py-3 sm:py-3.5 rounded-full shadow-md hover:shadow-lg transition-all duration-200 group cursor-pointer text-center"
              >
                <span>Find Your Treatment</span>
                <ArrowRight size={17} className="transition-transform duration-200 group-hover:translate-x-1 shrink-0" />
              </button>

              <button
                onClick={() => {
                  if (onOpenVideo) onOpenVideo();
                  else scrollTo('journey');
                }}
                className="inline-flex items-center justify-center gap-2.5 bg-white hover:bg-gray-50 text-[#132520] border border-gray-200/90 font-medium text-xs sm:text-sm xl:text-base px-4.5 sm:px-6 py-3 sm:py-3.5 rounded-full shadow-sm hover:shadow transition-all duration-200 group cursor-pointer text-center"
              >
                <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-[#183f34] group-hover:bg-[#183f34] group-hover:text-white transition-colors shrink-0">
                  <Play size={11} className="fill-current ml-0.5" />
                </div>
                <span>How it works</span>
              </button>
            </motion.div>

            {/* Trust Badges matching screenshot: NABH, International Patient Support, Transparent */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.28, ease: "easeOut" }}
              className="pt-3 sm:pt-4 grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-4 border-t border-gray-100/90"
            >
              <div className="flex items-center gap-2.5 sm:gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#eef6f2] flex items-center justify-center text-[#183f34] shrink-0">
                  <Globe2 size={17} />
                </div>
                <div className="text-xs sm:text-[13px] leading-snug font-medium text-[#132520]">
                  <span className="font-bold block text-[#183f34]">NABH</span>
                  Accredited Hospitals
                </div>
              </div>

              <div className="flex items-center gap-2.5 sm:gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#eef6f2] flex items-center justify-center text-[#183f34] shrink-0">
                  <ShieldCheck size={17} />
                </div>
                <div className="text-xs sm:text-[13px] leading-snug font-medium text-[#132520]">
                  <span className="font-bold block text-[#183f34]">International</span>
                  Patient Support
                </div>
              </div>

              <div className="flex items-center gap-2.5 sm:gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#eef6f2] flex items-center justify-center text-[#183f34] shrink-0">
                  <CheckCircle2 size={17} />
                </div>
                <div className="text-xs sm:text-[13px] leading-snug font-medium text-[#132520]">
                  <span className="font-bold block text-[#183f34]">Transparent</span>
                  &amp; Reliable Care
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Organic Cutout Kerala Image + "Healing Beyond Boundaries" script + Video Trigger */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-6 xl:col-span-5 relative flex justify-center items-center mt-6 lg:mt-0"
          >
            {/* The Script flourish text matching the screenshot */}
            <div className="absolute -top-5 sm:-top-6 left-1 sm:-left-4 z-20 pointer-events-none select-none">
              <motion.div
                initial={{ opacity: 0, rotate: -8, y: -10 }}
                animate={{ opacity: 1, rotate: -6, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-[#183f34] font-script text-2xl sm:text-3xl lg:text-3xl xl:text-4xl 2xl:text-[44px] font-bold leading-tight drop-shadow-sm flex flex-col items-center"
              >
                <span>Healing</span>
                <span className="ml-3 sm:ml-6">Beyond</span>
                <span className="ml-6 sm:ml-12 text-[#287a55]">Boundaries</span>
                <svg className="w-20 sm:w-28 lg:w-28 xl:w-36 h-4 sm:h-5 text-[#88c343] mt-1 -rotate-3" viewBox="0 0 120 20" fill="none">
                  <path d="M5 12C35 3 85 18 115 5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="3 3" />
                  <path d="M105 3L115 5L108 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </motion.div>
            </div>

            {/* Organic Curved Mask Container matching the screenshot */}
            <div className="relative w-full max-w-[290px] sm:max-w-[380px] lg:max-w-[350px] xl:max-w-[430px] 2xl:max-w-[480px] aspect-[4/3.7] sm:aspect-[4/3.5]">
              {/* Outer soft shadow aura */}
              <div className="absolute inset-0 bg-[#183f34]/10 rounded-[45%_55%_65%_35%/35%_45%_55%_65%] blur-xl transform scale-105" />

              {/* The Organic Masked Image */}
              <div className="organic-hero-mask animate-morph relative w-full h-full shadow-2xl overflow-hidden border-4 border-white/80 bg-white">
                <img
                  src="/assets/home/kerala_backwaters_houseboat.jpg"
                  alt="Serene Kerala Backwaters Houseboat and Palms"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                />

                {/* Gentle sunlight vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floating Pill Badge: "Discover Care in Kerala / Watch video" */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute bottom-2 right-1 sm:bottom-6 sm:right-0 z-30 scale-90 sm:scale-100 origin-bottom-right"
              >
                <button
                  onClick={() => {
                    if (onOpenVideo) onOpenVideo();
                    else scrollTo('journey');
                  }}
                  className="flex items-center gap-2.5 sm:gap-3 bg-white/95 backdrop-blur-md px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-full shadow-lg border border-gray-100 hover:bg-white hover:scale-105 transition-all duration-200 cursor-pointer group"
                >
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#183f34] text-white flex items-center justify-center shrink-0 group-hover:bg-[#12332a] transition-colors">
                    <Play size={13} className="fill-current ml-0.5" />
                  </div>
                  <div className="text-left pr-1.5 sm:pr-2">
                    <div className="text-[11px] sm:text-xs font-bold text-[#132520] font-jakarta leading-tight">
                      Discover
                    </div>
                    <div className="text-[10px] sm:text-[11px] text-gray-500 font-medium">
                      Care in Kerala <span className="text-[#183f34] font-semibold">• Video</span>
                    </div>
                  </div>
                </button>
              </motion.div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
