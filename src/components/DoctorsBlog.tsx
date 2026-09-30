import { useState } from 'react';
import { BLOG_POSTS } from '../data/medicalData';
import type { BlogPost } from '../types';
import { BlogModal } from './BlogModal';
import { ArrowRight, Clock, User, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

interface DoctorsBlogProps {
  onOpenEnquiry: (treatment?: string) => void;
}

export const DoctorsBlog = ({ onOpenEnquiry }: DoctorsBlogProps) => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [filterSpecialty, setFilterSpecialty] = useState<string>('all');

  const filteredPosts = filterSpecialty === 'all'
    ? BLOG_POSTS
    : BLOG_POSTS.filter((p) => p.specialty === filterSpecialty);

  const categories = [
    { id: 'all', label: 'All Articles' },
    { id: 'ortho', label: 'Orthopedics' },
    { id: 'dental', label: 'Dental Implants' },
    { id: 'ayurveda', label: 'Ayurveda & Detox' },
    { id: 'eyes', label: 'Ophthalmology' },
  ];

  return (
    <section id="blog" className="py-14 sm:py-16 md:py-24 bg-white text-[#132520] relative overflow-hidden font-jakarta border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#183f34] bg-[#eef6f2] px-3.5 py-1 rounded-full inline-block mb-3">
            Medical Knowledge Hub
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#132520] tracking-tight leading-tight">
            Clinical Insights &amp; Articles
          </h2>
          <p className="text-xs sm:text-base text-[#536863] mt-2.5 sm:mt-3 font-normal leading-relaxed">
            Explore trusted clinical advice, recovery expectations, and medical travel guidance authored by senior surgeons and Ayurvedic scholars.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-3 sm:pb-4 mb-8 sm:mb-10 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`cursor-pointer px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 shrink-0 ${
                filterSpecialty === cat.id
                  ? 'bg-[#183f34] text-white shadow-sm'
                  : 'bg-[#fbfcfb] text-gray-700 hover:bg-[#eef6f2] border border-gray-200/80'
              }`}
              onClick={() => setFilterSpecialty(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
          {filteredPosts.map((post, idx) => (
            <motion.article 
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between group hover:-translate-y-1.5"
            >
              <div>
                {/* Image */}
                <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] font-bold text-[#183f34] shadow-sm">
                    {post.specialty.toUpperCase()}
                  </div>
                </div>

                <div className="p-4 sm:p-6">
                  {/* Meta date & read time */}
                  <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
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

                  {/* Title */}
                  <h3 className="text-base sm:text-lg font-bold text-[#132520] group-hover:text-[#183f34] transition-colors leading-snug line-clamp-2 mb-2 font-jakarta">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-xs sm:text-sm text-[#536863] leading-relaxed line-clamp-3 mb-4">
                    {post.excerpt}
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-2 pt-2 border-t border-gray-100 text-xs text-gray-600">
                    <User size={13} className="text-[#183f34]" />
                    <span className="font-semibold text-gray-800">{post.author}</span>
                  </div>
                </div>
              </div>

              {/* Read button */}
              <div className="p-4 sm:p-6 pt-0">
                <button
                  onClick={() => setSelectedPost(post)}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-full border border-gray-200 group-hover:border-[#183f34] group-hover:bg-[#183f34] group-hover:text-white text-xs font-semibold text-[#183f34] transition-all duration-200 cursor-pointer"
                >
                  <span>Read Full Article</span>
                  <ArrowRight size={13} />
                </button>
              </div>
            </motion.article>
          ))}
        </div>

      </div>

      {/* Modal */}
      {selectedPost && (
        <BlogModal 
          post={selectedPost} 
          onClose={() => setSelectedPost(null)}
          onOpenEnquiry={onOpenEnquiry}
        />
      )}
    </section>
  );
};
