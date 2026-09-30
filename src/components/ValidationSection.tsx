import { useState } from 'react';
import { VALIDATION_STANDARDS } from '../data/medicalData';
import { ShieldCheck, Building2, Check, Lock, Stethoscope, FileText, Plane, Award, UserCheck, Activity, CheckCircle2 } from 'lucide-react';

export const ValidationSection = () => {
  const [activeTab, setActiveTab] = useState<'patients' | 'hospitals'>('patients');

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Stethoscope': return <Stethoscope size={20} className="text-secondary" />;
      case 'ShieldCheck': return <ShieldCheck size={20} className="text-secondary" />;
      case 'Plane': return <Plane size={20} className="text-secondary" />;
      case 'FileText': return <FileText size={20} className="text-secondary" />;
      case 'Award': return <Award size={20} className="text-secondary" />;
      case 'UserCheck': return <UserCheck size={20} className="text-secondary" />;
      case 'Activity': return <Activity size={20} className="text-secondary" />;
      default: return <CheckCircle2 size={20} className="text-secondary" />;
    }
  };

  return (
    <section id="validation" className="tmtc-validation-section">
      <div className="container">
        {/* Section Header */}
        <div className="tmtc-section-header text-center">

          <h2 className="tmtc-heading">Rigorous two-way validation</h2>
          <div className="heading-accent-line mx-auto"></div>
          <p className="tmtc-subheading mx-auto">
            Cross-border healthcare requires uncompromising standards. Our clinical protocols protect patients before boarding the plane, while holding partner hospitals to the highest international benchmarks.
          </p>
        </div>

        {/* Minimalist Switcher */}
        <div className="validation-switch-wrap">
          <div className="validation-segmented-control">
            <button
              className={`segment-btn ${activeTab === 'patients' ? 'active' : ''}`}
              onClick={() => setActiveTab('patients')}
            >
              <ShieldCheck size={18} />
              <span>Validation for Patients</span>
            </button>
            <button
              className={`segment-btn ${activeTab === 'hospitals' ? 'active' : ''}`}
              onClick={() => setActiveTab('hospitals')}
            >
              <Building2 size={18} />
              <span>Validation for Doctors & Hospitals</span>
            </button>
          </div>
        </div>

        {/* Validation Points Grid */}
        <div className="validation-matrix-grid">
          {activeTab === 'patients' ? (
            VALIDATION_STANDARDS.patients.map((item, idx) => (
              <div key={idx} className="val-matrix-card">
                <div className="val-matrix-top">
                  <div className="val-matrix-icon-box">{getIcon(item.icon)}</div>
                  <span className="val-matrix-num">0{idx + 1}</span>
                </div>
                <h4 className="val-matrix-title">{item.title}</h4>
                <p className="val-matrix-body">{item.description}</p>
                <div className="val-matrix-footer">
                  <Check size={14} className="text-secondary" />
                  <span>Verified Clinical Standard</span>
                </div>
              </div>
            ))
          ) : (
            VALIDATION_STANDARDS.doctorsHospitals.map((item, idx) => (
              <div key={idx} className="val-matrix-card">
                <div className="val-matrix-top">
                  <div className="val-matrix-icon-box">{getIcon(item.icon)}</div>
                  <span className="val-matrix-num">0{idx + 1}</span>
                </div>
                <h4 className="val-matrix-title">{item.title}</h4>
                <p className="val-matrix-body">{item.description}</p>
                <div className="val-matrix-footer">
                  <Check size={14} className="text-secondary" />
                  <span>JCI / NABH Compliance Audited</span>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Regulatory & Standards Bar */}
        <div className="accreditation-trust-strip">
          <div className="trust-strip-left">
            <Lock size={16} className="text-secondary" />
            <span>International Hospital & Clinical Quality Accreditations:</span>
          </div>
          <div className="trust-strip-badges">
            <span className="accred-tag"><strong>JCI</strong> Joint Commission (USA)</span>
            <span className="accred-tag"><strong>NABH</strong> Hospital Board India</span>
            <span className="accred-tag"><strong>GMC</strong> UAE General Medical Council</span>
            <span className="accred-tag"><strong>ISO 9001</strong> Quality Management</span>
          </div>
        </div>
      </div>
    </section>
  );
};
