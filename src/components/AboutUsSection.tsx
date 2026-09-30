import React from 'react';
import { HeartHandshake, Award, Users, MapPin, Sparkles, ArrowRight } from 'lucide-react';

interface AboutUsSectionProps {
  onOpenEnquiry: () => void;
}

export const AboutUsSection: React.FC<AboutUsSectionProps> = ({ onOpenEnquiry }) => {
  const pillars = [
    {
      icon: <Award size={24} className="text-secondary" />,
      title: 'Highest Health Index in India',
      description: 'Kerala consistently ranks #1 in India for health indices, infant survival, and life expectancy — matching European healthcare benchmarks with 96%+ state literacy.'
    },
    {
      icon: <HeartHandshake size={24} className="text-secondary" />,
      title: 'UAE GMC & International Faculty',
      description: 'Our lead surgical partners hold FRCS (Edinburgh/Glasgow), MRCP (UAE), and American Board fellowships, having practiced in UAE Public Health and global teaching hospitals.'
    },
    {
      icon: <Sparkles size={24} className="text-secondary" />,
      title: 'Global Cradle of Authentic Ayurveda',
      description: 'Kerala is the world’s only continuous living sanctuary of traditional Ashtavaidya Ayurveda, offering medical-grade Panchakarma certified by the state government.'
    },
    {
      icon: <Users size={24} className="text-secondary" />,
      title: 'Dual UAE & Kerala Care Team',
      description: 'From your initial Harley Street / UAE GP coordination to your private backwaters recovery villa, our dedicated concierges walk beside you every single step.'
    }
  ];

  return (
    <section id="about" className="section about-us-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="badge-lime">About HealKerala</span>
          <h2 className="section-title">Bridging the UAE UAE Public Health waiting crisis with world-class care in God’s Own Country</h2>
          <p className="section-subtitle">
            Founded by UAE-trained doctors and healthcare pioneers, HealKerala empowers patients to bypass agonizing waiting lists and receive world-class surgical care and restorative Ayurvedic healing in India’s most progressive state.
          </p>
        </div>

        {/* 2-Column Story Showcase */}
        <div className="about-story-grid">
          <div className="about-story-left">
            <div className="about-narrative-card">
              <span className="about-label">Our Purpose & Mission</span>
              <h3 className="about-heading">
                Healthcare should be timely, dignified, and accessible — not an endless queue.
              </h3>
              <p className="about-text">
                In the UAE today, over 7.6 million patients remain trapped on waiting lists for joint replacements, cataract procedures, and dental restorations. Many endure debilitating pain, losing work and independence while waiting months or years.
              </p>
              <p className="about-text">
                HealKerala was created to provide a safe, transparent, and luxurious alternative. We connect UAE and international patients with Kerala’s accredited quaternary hospitals and authentic Ayurvedic sanctuaries. With zero waiting time, sub-0.3% infection rates, and up to 70% cost savings, you receive private medical excellence combined with a peaceful recuperation holiday.
              </p>

              <div className="about-stats-row">
                <div className="about-stat">
                  <span className="stat-number">2,500+</span>
                  <span className="stat-desc">International Patients Restored</span>
                </div>
                <div className="about-stat">
                  <span className="stat-number">50+</span>
                  <span className="stat-desc">Accredited Hospital Network</span>
                </div>
                <div className="about-stat">
                  <span className="stat-number">0 Days</span>
                  <span className="stat-desc">Average Admission Delay</span>
                </div>
              </div>

              <div className="about-action-row">
                <button className="btn-primary" onClick={onOpenEnquiry}>
                  <span>Speak with our UAE Medical Team</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>

          <div className="about-story-right">
            <div className="about-pillars-container">
              {pillars.map((p, idx) => (
                <div key={idx} className="about-pillar-card">
                  <div className="pillar-icon-box">{p.icon}</div>
                  <div>
                    <h4 className="pillar-title">{p.title}</h4>
                    <p className="pillar-desc">{p.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Kerala Geographic / Climate Highlight Banner */}
            <div className="kerala-climate-card">
              <div className="kerala-map-icon">
                <MapPin size={22} className="text-secondary" />
              </div>
              <div>
                <strong>Why Convalesce in Kerala?</strong>
                <p>Gentle maritime tropical climate, lush palm greenery, fresh organic coconut and herbal diets, and tranquil backwaters create the world’s most soothing environment for post-surgical wound healing and mental well-being.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
