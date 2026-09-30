import React, { useEffect } from 'react';
import type { BlogPost } from '../types';
import { X, Calendar, Clock, User, ArrowRight, ShieldCheck, Stethoscope } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface BlogModalProps {
  post: BlogPost | null;
  onClose: () => void;
  onOpenEnquiry: (treatment?: string) => void;
}

export const BlogModal: React.FC<BlogModalProps> = ({ post, onClose, onOpenEnquiry }) => {
  // Lock body scroll and handle Escape key
  useEffect(() => {
    if (!post) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [post, onClose]);

  if (!post) return null;

  return (
    <AnimatePresence>
      <div 
        className="fixed inset-0 z-[100] overflow-y-auto bg-black/60 backdrop-blur-sm p-2 sm:p-4 md:p-6 flex items-center justify-center"
        onClick={onClose}
        aria-modal="true"
        role="dialog"
      >
        <motion.div 
          className="relative w-full max-w-3xl bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden border border-gray-100 my-auto text-left font-jakarta"
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Top Emerald Gradient Line */}
          <div className="h-1.5 w-full bg-gradient-to-r from-[#183f34] via-[#287a55] to-[#88c343]" />

          {/* Header */}
          <div className="p-4 sm:p-6 md:p-8 pb-3 sm:pb-4 bg-white border-b border-gray-100">
            <div className="flex items-center justify-between gap-3 mb-2.5 sm:mb-3">
              <span className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-wider bg-[#eef6f2] text-[#183f34]">
                <Stethoscope size={13} />
                {post.specialty.toUpperCase()} CLINICAL INSIGHT
              </span>

              <button 
                type="button"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-gray-900 transition-colors cursor-pointer shrink-0" 
                onClick={onClose} 
                aria-label="Close modal"
              >
                <X size={18} />
              </button>
            </div>

            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#132520] tracking-tight leading-snug">
              {post.title}
            </h2>
            
            {/* Author and Metadata Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 mt-5 p-3.5 bg-[#fbfdfb] rounded-2xl border border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#183f34] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  <User size={18} />
                </div>
                <div>
                  <div className="font-bold text-sm text-[#132520] leading-tight">
                    {post.author}
                  </div>
                  <div className="text-xs text-gray-500 mt-0.5">
                    {post.authorRole}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 text-xs text-gray-500 font-medium">
                <span className="flex items-center gap-1">
                  <Calendar size={13} className="text-[#183f34]" />
                  {post.date}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Clock size={13} className="text-[#183f34]" />
                  {post.readTime}
                </span>
              </div>
            </div>
          </div>

          {/* Modal Body */}
          <div className="p-4 sm:p-6 md:p-8 space-y-4 sm:space-y-5 max-h-[55vh] sm:max-h-[60vh] overflow-y-auto">
            {/* Lead Excerpt */}
            <div className="text-xs sm:text-base font-medium text-[#183f34] leading-relaxed p-3.5 sm:p-4 bg-[#eef6f2]/60 rounded-xl sm:rounded-2xl border border-[#183f34]/15">
              {post.excerpt}
            </div>

            {/* Article Content */}
            <div className="space-y-3 sm:space-y-4 text-xs sm:text-base text-[#4a5e57] leading-relaxed">
              <p>{post.content}</p>
              
              <p>
                Our international medical coordination team works directly in concert with international patient guidelines and local general practitioners to ensure that your pre-travel diagnostics, surgical parameters, and postoperative recovery maintain complete clinical continuity.
              </p>

              {/* Callout box */}
              <div className="flex items-start gap-3 sm:gap-3.5 p-3.5 sm:p-5 bg-[#fbfdfb] rounded-xl sm:rounded-2xl border border-gray-200 mt-4">
                <ShieldCheck size={22} className="text-[#183f34] shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <strong className="block text-xs sm:text-sm font-bold text-[#132520]">
                    Clinical Note from {post.author}:
                  </strong>
                  <p className="text-[11px] sm:text-sm text-[#536863] italic">
                    &ldquo;Patients often suffer for months needlessly on public waiting lists. In accredited centres in Kerala, robotic equipment and experienced surgical faculty deliver outcomes comparable or superior to European private centres.&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Modal Footer with Actions */}
          <div className="p-4 sm:p-6 bg-[#fbfdfb] border-t border-gray-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4">
            <div className="text-center sm:text-left">
              <h4 className="font-bold text-xs sm:text-sm text-[#132520]">Have questions about this clinical procedure?</h4>
              <p className="text-[11px] sm:text-xs text-gray-500">Connect with our care team for an itemized estimate.</p>
            </div>

            <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 sm:flex-none px-4 sm:px-5 py-2.5 rounded-full border border-gray-200 text-xs font-semibold text-gray-700 hover:bg-gray-100 transition-colors"
              >
                Close
              </button>

              <button 
                type="button"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 sm:gap-2 bg-[#183f34] hover:bg-[#12332a] text-white px-4 sm:px-6 py-2.5 rounded-full text-xs font-semibold shadow-md transition-all cursor-pointer whitespace-nowrap"
                onClick={() => {
                  onClose();
                  onOpenEnquiry(post.specialty);
                }}
              >
                <span>Consult Care Team</span>
                <ArrowRight size={13} />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
