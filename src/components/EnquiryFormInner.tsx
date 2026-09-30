import React, { useState } from 'react';
import type { Specialty, EnquiryFormData } from '../types';
import { 
  UploadCloud, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  FileText, 
  AlertCircle,
  X,
  ArrowRight,
  MessageCircle,
  ChevronDown
} from 'lucide-react';

interface EnquiryFormInnerProps {
  initialTreatment?: string;
  onSuccessClose?: () => void;
}

export const EnquiryFormInner: React.FC<EnquiryFormInnerProps> = ({ 
  initialTreatment = 'ortho',
  onSuccessClose
}) => {
  const [formData, setFormData] = useState<EnquiryFormData>({
    fullName: '',
    email: '',
    phone: '',
    country: '+971 (UAE)',
    city: '',
    treatment: (initialTreatment as Specialty) || 'ortho',
    preferredHospital: 'any',
    travelTimeline: 'within-1-month',
    medicalDetails: '',
    hasMedicalReports: false,
    uploadedFiles: []
  });

  const [simulatedFiles, setSimulatedFiles] = useState<{ name: string; size: string }[]>([]);
  const [agreedToPolicy, setAgreedToPolicy] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSimulatedFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const newFiles = Array.from(e.target.files).map(f => ({
        name: f.name,
        size: (f.size / (1024 * 1024)).toFixed(1) + ' MB'
      }));
      setSimulatedFiles(prev => [...prev, ...newFiles]);
      setFormData(prev => ({
        ...prev,
        hasMedicalReports: true,
        uploadedFiles: [...(prev.uploadedFiles || []), ...newFiles.map(nf => nf.name)]
      }));
    }
  };

  const handleRemoveFile = (index: number) => {
    setSimulatedFiles(prev => prev.filter((_, i) => i !== index));
    setFormData(prev => ({
      ...prev,
      uploadedFiles: prev.uploadedFiles?.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!formData.fullName.trim()) {
      setErrorMsg('Please enter your full name.');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }
    if (!formData.phone.trim()) {
      setErrorMsg('Please enter your contact phone or WhatsApp number.');
      return;
    }
    if (!agreedToPolicy) {
      setErrorMsg('Please agree to the privacy policy to proceed.');
      return;
    }

    setIsSubmitting(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 900));
      const generatedRef = 'HK-' + Math.floor(100000 + Math.random() * 900000);
      setReferenceId(generatedRef);
      setIsSubmitted(true);
      console.log('Enquiry captured for HealKerala Concierge:', formData);
    } catch {
      setErrorMsg('Submission error. Please try again or reach our WhatsApp desk directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      country: '+971 (UAE)',
      city: '',
      treatment: 'ortho',
      preferredHospital: 'any',
      travelTimeline: 'within-1-month',
      medicalDetails: '',
      hasMedicalReports: false,
      uploadedFiles: []
    });
    setSimulatedFiles([]);
    if (onSuccessClose) onSuccessClose();
  };

  // SUCCESS STATE
  if (isSubmitted) {
    return (
      <div className="text-center py-6 px-2 font-montserrat">
        <div className="w-16 h-16 rounded-full bg-[#eef7e6] border border-[#d6edc3] flex items-center justify-center mx-auto mb-4 text-[#7ec142] shadow-sm">
          <CheckCircle2 size={36} />
        </div>
        
        <span className="inline-block bg-[#eef7e6] text-[#427b1c] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-2">
          Assessment Requested
        </span>

        <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You, {formData.fullName}!</h3>
        <p className="text-sm text-gray-600 max-w-md mx-auto mb-6">
          Your case details have been routed directly to our UAE Clinical Coordination Team and Kerala Hospital Medical Directors.
        </p>

        {/* Reference summary box */}
        <div className="max-w-md mx-auto p-4 mb-6 rounded-2xl bg-gray-50 border border-gray-200 text-left text-sm space-y-2">
          <div className="flex justify-between py-1 border-b border-gray-200/80">
            <span className="text-gray-500">Case Reference ID:</span>
            <span className="font-mono font-bold text-[#304E48]">{referenceId}</span>
          </div>
          <div className="flex justify-between py-1 border-b border-gray-200/80">
            <span className="text-gray-500">Selected Specialty:</span>
            <span className="font-semibold text-gray-900 capitalize">{String(formData.treatment)}</span>
          </div>
          <div className="flex justify-between py-1">
            <span className="text-gray-500">Contact Number:</span>
            <span className="font-semibold text-gray-900">{formData.country} {formData.phone}</span>
          </div>
        </div>

        {/* Timeline reassurance steps */}
        <div className="max-w-md mx-auto bg-[#f8faf9] rounded-2xl p-4 mb-6 text-left text-xs space-y-2.5 border border-gray-100">
          <div className="flex items-center gap-2.5 text-gray-700">
            <Clock size={16} className="text-[#7ec142] shrink-0" />
            <span>A UAE Liaison Doctor will contact you within <strong>4 hours</strong>.</span>
          </div>
          <div className="flex items-center gap-2.5 text-gray-700">
            <FileText size={16} className="text-[#7ec142] shrink-0" />
            <span>You will receive an itemised, transparent treatment quote with zero hidden charges.</span>
          </div>
          <div className="flex items-center gap-2.5 text-gray-700">
            <ShieldCheck size={16} className="text-[#7ec142] shrink-0" />
            <span>All medical documents are encrypted and held in strict doctor-patient confidentiality.</span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
          <a
            href={`https://wa.me/971501234567?text=Hi%20HealKerala%2C%20I%20just%20submitted%20my%20assessment%20request%20with%20Ref%20${referenceId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold text-sm shadow-md transition-all cursor-pointer"
          >
            <MessageCircle size={16} />
            <span>Chat on WhatsApp Now</span>
          </a>

          {onSuccessClose ? (
            <button
              type="button"
              onClick={onSuccessClose}
              className="px-6 py-3.5 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold text-sm transition-all cursor-pointer"
            >
              Done
            </button>
          ) : (
            <button
              type="button"
              onClick={handleReset}
              className="px-6 py-3.5 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold text-sm transition-all cursor-pointer"
            >
              Submit Another
            </button>
          )}
        </div>
      </div>
    );
  }

  // ACTIVE FORM
  return (
    <form className="space-y-4 text-left font-montserrat" onSubmit={handleSubmit}>
      {errorMsg && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-xs sm:text-sm flex items-center gap-2 font-medium">
          <AlertCircle size={16} className="shrink-0" />
          <span>{errorMsg}</span>
        </div>
      )}

      {/* Row 1: Full Name & Email */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="fullName" className="block text-xs sm:text-sm font-semibold text-gray-800 mb-1.5">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            required
            placeholder="e.g. Arthur Pendelton"
            value={formData.fullName}
            onChange={handleInputChange}
            className="h-12 w-full rounded-xl border border-gray-200 bg-[#f8fafc] px-4 text-sm text-gray-900 placeholder:text-gray-400 focus:bg-white focus:border-[#7ec142] focus:ring-4 focus:ring-[#7ec142]/20 outline-none transition-all duration-200"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-xs sm:text-sm font-semibold text-gray-800 mb-1.5">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="you@example.com"
            value={formData.email}
            onChange={handleInputChange}
            className="h-12 w-full rounded-xl border border-gray-200 bg-[#f8fafc] px-4 text-sm text-gray-900 placeholder:text-gray-400 focus:bg-white focus:border-[#7ec142] focus:ring-4 focus:ring-[#7ec142]/20 outline-none transition-all duration-200"
          />
        </div>
      </div>

      {/* Row 2: Country (+971 UAE default) & WhatsApp Phone */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="country" className="block text-xs sm:text-sm font-semibold text-gray-800 mb-1.5">
            Country / Region <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <select
              id="country"
              name="country"
              value={formData.country}
              onChange={handleInputChange}
              className="h-12 w-full rounded-xl border border-gray-200 bg-[#f8fafc] px-4 pr-10 text-sm text-gray-900 focus:bg-white focus:border-[#7ec142] focus:ring-4 focus:ring-[#7ec142]/20 outline-none transition-all duration-200 appearance-none cursor-pointer"
            >
              <option value="+971 (UAE)">🇦🇪 United Arab Emirates (+971)</option>
              <option value="+966 (KSA)">🇸🇦 Saudi Arabia (+966)</option>
              <option value="+974 (QA)">🇶🇦 Qatar (+974)</option>
              <option value="+965 (KW)">🇰🇼 Kuwait (+965)</option>
              <option value="+968 (OM)">🇴🇲 Oman (+968)</option>
              <option value="+973 (BH)">🇧🇭 Bahrain (+973)</option>
              <option value="+44 (UK)">🇬🇧 United Kingdom (+44)</option>
              <option value="+1 (US/CA)">🇺🇸 USA / Canada (+1)</option>
              <option value="+91 (IN)">🇮🇳 India (+91)</option>
            </select>
            <ChevronDown size={16} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
          </div>
        </div>

        <div>
          <label htmlFor="phone" className="block text-xs sm:text-sm font-semibold text-gray-800 mb-1.5">
            WhatsApp / Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            placeholder="e.g. 50 123 4567"
            value={formData.phone}
            onChange={handleInputChange}
            className="h-12 w-full rounded-xl border border-gray-200 bg-[#f8fafc] px-4 text-sm text-gray-900 placeholder:text-gray-400 focus:bg-white focus:border-[#7ec142] focus:ring-4 focus:ring-[#7ec142]/20 outline-none transition-all duration-200"
          />
        </div>
      </div>

      {/* Row 3: Specialty & Travel Timeline */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="treatment" className="block text-xs sm:text-sm font-semibold text-gray-800 mb-1.5">
            Required Specialty <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <select
              id="treatment"
              name="treatment"
              value={formData.treatment}
              onChange={handleInputChange}
              className="h-12 w-full rounded-xl border border-gray-200 bg-[#f8fafc] px-4 pr-10 text-sm text-gray-900 focus:bg-white focus:border-[#183f34] focus:ring-4 focus:ring-[#183f34]/20 outline-none transition-all duration-200 appearance-none cursor-pointer"
            >
              <option value="dental">Dental (Implants, Makeovers &amp; Restorations)</option>
              <option value="ortho">Ortho (Robotic Knee &amp; Hip Surgery)</option>
              <option value="ayurvedic">Ayurvedic (Classical Panchakarma &amp; Detox)</option>
              <option value="cosmetic">Cosmetic (Aesthetic &amp; Plastic Surgery)</option>
              <option value="eyes">Eyes (LASIK, SMILE &amp; Cataract Surgery)</option>
            </select>
            <ChevronDown size={16} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
          </div>
        </div>

        <div>
          <label htmlFor="travelTimeline" className="block text-xs sm:text-sm font-semibold text-gray-800 mb-1.5">
            Desired Travel Timeframe
          </label>
          <div className="relative">
            <select
              id="travelTimeline"
              name="travelTimeline"
              value={formData.travelTimeline}
              onChange={handleInputChange}
              className="h-12 w-full rounded-xl border border-gray-200 bg-[#f8fafc] px-4 pr-10 text-sm text-gray-900 focus:bg-white focus:border-[#7ec142] focus:ring-4 focus:ring-[#7ec142]/20 outline-none transition-all duration-200 appearance-none cursor-pointer"
            >
              <option value="immediate">Immediate / Urgent (Next 2-3 Weeks)</option>
              <option value="within-1-month">Within 1 Month</option>
              <option value="1-3-months">1 to 3 Months</option>
              <option value="flexible">Flexible / Exploring Options</option>
            </select>
            <ChevronDown size={16} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Row 4: Medical Notes / Symptoms */}
      <div>
        <label htmlFor="medicalDetails" className="block text-xs sm:text-sm font-semibold text-gray-800 mb-1.5 flex justify-between items-center">
          <span>Medical Notes or Symptoms</span>
          <span className="text-xs text-gray-400 font-normal">Optional</span>
        </label>
        <textarea
          id="medicalDetails"
          name="medicalDetails"
          rows={3}
          placeholder="Briefly describe your symptoms, current diagnosis, or treatment requirements..."
          value={formData.medicalDetails}
          onChange={handleInputChange}
          className="w-full rounded-xl border border-gray-200 bg-[#f8fafc] p-3.5 text-sm text-gray-900 placeholder:text-gray-400 focus:bg-white focus:border-[#183f34] focus:ring-4 focus:ring-[#183f34]/15 outline-none transition-all duration-200 resize-y"
        />
      </div>

      {/* Row 5: Reports / Scans Upload Zone */}
      <div>
        <label className="block text-xs sm:text-sm font-semibold text-gray-800 mb-1.5 flex justify-between items-center">
          <span>Upload X-rays, MRI or Medical Reports</span>
          <span className="text-xs text-gray-400 font-normal">Optional</span>
        </label>
        <div className="border-2 border-dashed border-gray-200 hover:border-[#183f34] bg-[#f8fafc] hover:bg-[#eef6f2] rounded-xl p-3.5 sm:p-4 text-center cursor-pointer transition-all duration-200 group">
          <input
            type="file"
            id="medicalReports"
            multiple
            onChange={handleSimulatedFileUpload}
            className="hidden"
            accept=".jpg,.jpeg,.png,.pdf,.dcm"
          />
          <label htmlFor="medicalReports" className="flex flex-col items-center gap-1 cursor-pointer">
            <UploadCloud size={24} className="text-[#183f34] group-hover:text-[#287a55] transition-colors" />
            <span className="text-xs sm:text-sm font-semibold text-gray-800">
              Click or drag reports (PDF, X-ray, MRI, Scans) to upload
            </span>
            <span className="text-[11px] text-gray-500">
              Strictly confidential & encrypted • Max 25MB per file
            </span>
          </label>
        </div>

        {simulatedFiles.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-2">
            {simulatedFiles.map((file, idx) => (
              <span key={idx} className="inline-flex items-center gap-1.5 bg-[#eef6f2] border border-[#183f34]/20 text-[#183f34] text-xs px-3 py-1 rounded-full font-medium">
                <FileText size={12} className="text-[#183f34]" />
                <span className="max-w-[160px] truncate">{file.name}</span>
                <span className="text-gray-400 text-[10px]">({file.size})</span>
                <button 
                  type="button" 
                  onClick={() => handleRemoveFile(idx)} 
                  className="text-gray-400 hover:text-red-500 transition-colors cursor-pointer ml-0.5"
                  aria-label="Remove file"
                >
                  <X size={13} />
                </button>
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Row 6: Friendly Privacy Policy Agreement (Exact healinkerala style) */}
      <div className="flex items-start gap-2.5 pt-1">
        <input
          type="checkbox"
          id="privacyAgree"
          checked={agreedToPolicy}
          onChange={(e) => setAgreedToPolicy(e.target.checked)}
          className="mt-0.5 w-4 h-4 rounded border-gray-300 text-[#183f34] focus:ring-[#183f34] cursor-pointer"
        />
        <label htmlFor="privacyAgree" className="text-xs text-gray-600 cursor-pointer select-none leading-relaxed">
          You agree to our friendly privacy policy and consent to confidential clinical case review by our registered doctors.
        </label>
      </div>

      {/* Row 7: Submit Pill Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full inline-flex items-center justify-center cursor-pointer font-jakarta gap-2 rounded-full text-sm sm:text-base font-semibold transition-all duration-300 group bg-[#183f34] text-white hover:bg-[#12332a] shadow-lg hover:shadow-xl py-3.5 sm:py-4 px-4 sm:px-8 mt-2 disabled:opacity-50 disabled:pointer-events-none text-center"
      >
        {isSubmitting ? (
          <span>Securing Consultation...</span>
        ) : (
          <>
            <span>Get Free Consultation & Itemised Quote</span>
            <ArrowRight size={18} className="transition-transform duration-200 group-hover:translate-x-1 shrink-0" />
          </>
        )}
      </button>

      {/* Row 8: Trust Signals Badges */}
      <div className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-2 border-t border-gray-100 text-center text-[11px] text-gray-500 font-medium">
        <div className="flex items-center justify-center gap-1">
          <ShieldCheck size={13} className="text-[#7ec142] shrink-0" />
          <span>100% Confidential</span>
        </div>
        <div className="flex items-center justify-center gap-1">
          <CheckCircle2 size={13} className="text-[#7ec142] shrink-0" />
          <span>JCI & NABH Hospitals</span>
        </div>
        <div className="flex items-center justify-center gap-1">
          <Clock size={13} className="text-[#7ec142] shrink-0" />
          <span>Doctor Call in 4 Hours</span>
        </div>
      </div>
    </form>
  );
};
