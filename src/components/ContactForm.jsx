import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Phone, Mail, MessageSquare, Info } from 'lucide-react';
import { companyData } from '../data/companyData';

const serviceOptions = [
  "Feature Film Production",
  "Web Series & Episodic OTT",
  "Corporate Brand Film",
  "Television Commercial (TVC)",
  "Music Video Production (Zingal Music)",
  "Documentary Production",
  "Post-Production & DI Color Grading",
  "Sound Design, Dubbing & Audio Mixing",
  "Drone Aerial Cinematography",
  "Full End-to-End Production Package"
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    brief: '',
  });

  const [errors, setErrors] = useState({});
  const [submittedData, setSubmittedData] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errs.name = "Please enter your full name (minimum 2 characters).";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      errs.email = "Please enter a valid email address.";
    }

    const phoneRegex = /^[+]?[\d\s-]{8,15}$/;
    if (!formData.phone.trim() || !phoneRegex.test(formData.phone.trim())) {
      errs.phone = "Please enter a valid phone number (e.g. +91 9503736430).";
    }

    if (!formData.service) {
      errs.service = "Please select the service required for your project.";
    }

    if (!formData.brief.trim() || formData.brief.trim().length < 10) {
      errs.brief = "Please provide project details or a brief summary (minimum 10 characters).";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedData({ ...formData });
    }, 400);
  };

  // Generate mailto link
  const getMailtoLink = () => {
    if (!submittedData) return '';
    const subject = encodeURIComponent(`Project Enquiry: ${submittedData.service} - ${submittedData.name}`);
    const body = encodeURIComponent(
      `Dear Zingal Films & Music Production Team,\n\n` +
      `I would like to discuss a project with details below:\n\n` +
      `Name: ${submittedData.name}\n` +
      `Email: ${submittedData.email}\n` +
      `Phone: ${submittedData.phone}\n` +
      `Service Required: ${submittedData.service}\n\n` +
      `Project Brief / Details:\n${submittedData.brief}\n\n` +
      `Best regards,\n${submittedData.name}`
    );
    return `mailto:${companyData.email}?subject=${subject}&body=${body}`;
  };

  const getWhatsAppLink = () => {
    if (!submittedData) return '';
    const cleanPhone = companyData.phone.replace(/[^\d]/g, '');
    const text = encodeURIComponent(
      `Hello Zingal Films & Music Team,\nMy name is ${submittedData.name}. I am inquiring regarding *${submittedData.service}*.\nPhone: ${submittedData.phone}\nEmail: ${submittedData.email}\n\nProject Brief: ${submittedData.brief}`
    );
    return `https://wa.me/${cleanPhone}?text=${text}`;
  };

  return (
    <div className="bg-[#0c0c0c] border border-gold/30 rounded-lg p-6 sm:p-8 md:p-10 shadow-2xl relative overflow-hidden">
      {/* Decorative Golden Corner Accents */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-gold/10 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-gold/10 to-transparent pointer-events-none" />

      <h3 className="font-cinzel text-xl sm:text-2xl text-white font-bold tracking-wider uppercase mb-2">
        Initiate a Production Enquiry
      </h3>
      <p className="text-xs sm:text-sm text-gray-400 font-sans mb-8">
        Collaborate with Zingal Films & Music India. Fill out the brief below to discuss your script, campaign, or music release.
      </p>

      {!submittedData ? (
        <form onSubmit={handleSubmit} noValidate className="space-y-6">
          {/* Row 1: Name & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-xs uppercase tracking-widest text-gold font-medium mb-2">
                Full Name <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Rahul Sharma"
                className={`w-full px-4 py-3 bg-black/60 border rounded text-sm text-white placeholder-gray-600 focus:outline-none transition-colors ${
                  errors.name ? 'border-red-500/80 focus:border-red-400' : 'border-white/10 focus:border-gold'
                }`}
                required
              />
              {errors.name && (
                <p className="text-xs text-red-400 mt-1.5 flex items-center gap-1 font-sans">
                  <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                  {errors.name}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="phone" className="block text-xs uppercase tracking-widest text-gold font-medium mb-2">
                Phone Number <span className="text-red-400">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 9503736430"
                className={`w-full px-4 py-3 bg-black/60 border rounded text-sm text-white placeholder-gray-600 focus:outline-none transition-colors ${
                  errors.phone ? 'border-red-500/80 focus:border-red-400' : 'border-white/10 focus:border-gold'
                }`}
                required
              />
              {errors.phone && (
                <p className="text-xs text-red-400 mt-1.5 flex items-center gap-1 font-sans">
                  <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                  {errors.phone}
                </p>
              )}
            </div>
          </div>

          {/* Row 2: Email & Service */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="email" className="block text-xs uppercase tracking-widest text-gold font-medium mb-2">
                Email Address <span className="text-red-400">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="name@organization.com"
                className={`w-full px-4 py-3 bg-black/60 border rounded text-sm text-white placeholder-gray-600 focus:outline-none transition-colors ${
                  errors.email ? 'border-red-500/80 focus:border-red-400' : 'border-white/10 focus:border-gold'
                }`}
                required
              />
              {errors.email && (
                <p className="text-xs text-red-400 mt-1.5 flex items-center gap-1 font-sans">
                  <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                  {errors.email}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="service" className="block text-xs uppercase tracking-widest text-gold font-medium mb-2">
                Service Required <span className="text-red-400">*</span>
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-black border rounded text-sm text-white focus:outline-none transition-colors ${
                  errors.service ? 'border-red-500/80 focus:border-red-400' : 'border-white/10 focus:border-gold'
                }`}
                required
              >
                <option value="" disabled className="text-gray-500">Select a Production Service</option>
                {serviceOptions.map((opt) => (
                  <option key={opt} value={opt} className="bg-black text-white py-1">
                    {opt}
                  </option>
                ))}
              </select>
              {errors.service && (
                <p className="text-xs text-red-400 mt-1.5 flex items-center gap-1 font-sans">
                  <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                  {errors.service}
                </p>
              )}
            </div>
          </div>

          {/* Row 3: Project Brief */}
          <div>
            <label htmlFor="brief" className="block text-xs uppercase tracking-widest text-gold font-medium mb-2">
              Project Brief & Requirements <span className="text-red-400">*</span>
            </label>
            <textarea
              id="brief"
              name="brief"
              rows={5}
              value={formData.brief}
              onChange={handleChange}
              placeholder="Tell us about the project story, timeline, tentative locations, target audience, and scale..."
              className={`w-full px-4 py-3 bg-black/60 border rounded text-sm text-white placeholder-gray-600 focus:outline-none transition-colors ${
                errors.brief ? 'border-red-500/80 focus:border-red-400' : 'border-white/10 focus:border-gold'
              }`}
              required
            />
            {errors.brief && (
              <p className="text-xs text-red-400 mt-1.5 flex items-center gap-1 font-sans">
                <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                {errors.brief}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-xs uppercase tracking-widest font-bold text-black bg-gradient-to-r from-[#dfba4f] via-[#fff2b2] to-[#c59d2a] rounded shadow-lg hover:shadow-gold/30 hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 disabled:opacity-50"
            >
              <Send className="w-4 h-4" />
              <span>{isSubmitting ? "Validating Brief..." : "Submit Project Brief"}</span>
            </button>

            <span className="text-[11px] text-gray-500 font-sans">
              * Verified response from our Nagpur production desk.
            </span>
          </div>
        </form>
      ) : (
        /* Transparent Submission Review - STRICTLY NO FALSE SUCCESS MESSAGE */
        <div className="space-y-6 animate-fade-in">
          <div className="p-4 bg-gold/10 border border-gold/40 rounded flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm">
              <h4 className="font-cinzel text-white font-bold uppercase tracking-wider mb-1">
                Project Enquiry Validated Successfully
              </h4>
              <p className="text-gray-300 font-sans leading-relaxed">
                Your project details have been formatted and validated according to production intake specifications.
              </p>
            </div>
          </div>

          {/* Summary of Packaged Information */}
          <div className="bg-black/80 border border-white/10 rounded p-4 sm:p-6 space-y-3 text-xs font-sans">
            <div className="flex justify-between py-1 border-b border-white/5">
              <span className="text-gray-400">Client Name:</span>
              <span className="text-white font-medium">{submittedData.name}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-white/5">
              <span className="text-gray-400">Direct Email:</span>
              <span className="text-white font-medium">{submittedData.email}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-white/5">
              <span className="text-gray-400">Contact Number:</span>
              <span className="text-white font-medium">{submittedData.phone}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-white/5">
              <span className="text-gray-400">Service Required:</span>
              <span className="text-gold font-medium">{submittedData.service}</span>
            </div>
            <div className="pt-2">
              <span className="text-gray-400 block mb-1">Project Brief Summary:</span>
              <p className="text-gray-200 bg-black/40 p-3 rounded border border-white/5 italic">
                "{submittedData.brief}"
              </p>
            </div>
          </div>

          {/* Transparent Dispatch Instructions - Requirements Adherence */}
          <div className="bg-amber-950/20 border border-amber-600/30 rounded p-4 text-xs font-sans space-y-2">
            <div className="flex items-center gap-2 text-amber-300 font-semibold">
              <Info className="w-4 h-4 flex-shrink-0" />
              <span>Direct Transmission & Configuration Setup</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Automated SMTP/API backend delivery is not connected to this static frontend build. 
              To dispatch your validated enquiry immediately, choose an instant direct transmission option below, 
              or copy the generated brief to reach the production desk directly at <strong className="text-white">{companyData.email}</strong>.
            </p>
          </div>

          {/* Instant Dispatch Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <a
              href={getMailtoLink()}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gold text-black font-semibold text-xs uppercase tracking-widest rounded hover:bg-gold-light transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>Send via Default Email App</span>
            </a>

            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#25D366] text-black font-semibold text-xs uppercase tracking-widest rounded hover:bg-[#20ba5a] transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Connect on WhatsApp</span>
            </a>

            <button
              onClick={() => setSubmittedData(null)}
              className="inline-flex items-center justify-center px-4 py-3 border border-white/20 text-gray-400 hover:text-white rounded text-xs uppercase tracking-widest font-sans transition-colors"
            >
              Edit Form
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
