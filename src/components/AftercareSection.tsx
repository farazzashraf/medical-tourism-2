import { Palmtree, Utensils, HeartPulse, ShieldCheck, Sparkles, Quote, Calendar } from 'lucide-react';

interface AftercareSectionProps {
  onOpenEnquiry: () => void;
}

export const AftercareSection = ({ onOpenEnquiry }: AftercareSectionProps) => {
  const perks = [
    {
      icon: <Palmtree size={22} className="text-secondary" />,
      title: 'Waterfront Recovery Suites',
      desc: 'Private panoramic villas overlooking the tranquil Alleppey backwaters, away from hospital noise and traffic.'
    },
    {
      icon: <HeartPulse size={22} className="text-secondary" />,
      title: '24/7 Dedicated Nursing Care',
      desc: 'English-speaking personal registered nurses on-site for vitals monitoring, wound care, and medication schedules.'
    },
    {
      icon: <Utensils size={22} className="text-secondary" />,
      title: 'Chef-Curated Organic Nutrition',
      desc: 'Wholesome, restorative farm-to-table meals tailored to your clinical recovery and dietary preferences.'
    },
    {
      icon: <Sparkles size={22} className="text-secondary" />,
      title: 'Ayurvedic Physiotherapy & Spa',
      desc: 'Gentle mobility exercises, medicated herbal oils, and hydrotherapy designed to accelerate bone & tissue healing.'
    }
  ];

  return (
    <section className="tmtc-aftercare-section">
      <div className="container">
        <div className="aftercare-grid">
          <div className="aftercare-content-left">

            <h2 className="tmtc-heading text-white">Step inside our premium backwaters aftercare retreat</h2>
            <div className="heading-accent-line"></div>
            <p className="tmtc-subheading text-white-80">
              Healing doesn’t stop when you leave the hospital operating theatre. Convalesce in luxury amidst Kerala’s palm-fringed lagoons with personalized medical attention and 5-star hospitality.
            </p>

            <div className="aftercare-perks-grid">
              {perks.map((p, idx) => (
                <div key={idx} className="aftercare-perk-item">
                  <div className="perk-icon-circle">{p.icon}</div>
                  <div>
                    <h4 className="perk-title">{p.title}</h4>
                    <p className="perk-desc">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="aftercare-cta-row">
              <button className="btn-tmtc-hero" onClick={onOpenEnquiry}>
                <Calendar size={16} />
                <span>Explore Aftercare Inclusions</span>
              </button>
              <div className="aftercare-trust-note">
                <ShieldCheck size={18} className="text-secondary" />
                <span>Included in all surgical packages</span>
              </div>
            </div>
          </div>

          <div className="aftercare-visual-right">
            <div className="aftercare-quote-card">
              <Quote size={40} className="text-secondary mb-4 opacity-50" />
              <p className="aftercare-quote-body">
                “Waking up to gentle birdsong on the backwaters while receiving daily physiotherapy made all the difference in my knee recovery. I was walking pain-free within a week.”
              </p>
              <div className="aftercare-quote-author">
                <span className="author-name">David Robertson</span>
                <span className="author-meta">Manchester, UAE • Bilateral Knee Replacement</span>
              </div>

              <div className="aftercare-amenities-strip">
                <div className="amenity-chip">✓ Private Pool & Lagoon Deck</div>
                <div className="amenity-chip">✓ Daily Doctor Convalescence Check</div>
                <div className="amenity-chip">✓ Organic Ayurvedic Nutrition</div>
                <div className="amenity-chip">✓ Chauffeur & Companion Stay</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
