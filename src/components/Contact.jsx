import React, { useState, useEffect } from 'react';
import {
  Mail,
  Phone,
  MessageSquare,
  Send,
  CheckCircle2,
  AlertCircle,
  Copy,
  ExternalLink,
  MapPin,
  Clock,
  Sparkles
} from 'lucide-react';
import { personalInfo, servicesList } from '../data/portfolioData';
import { sendContactEmail } from '../lib/sendContactEmail';

export default function Contact({ prefilledService }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Website Development',
    details: '',
  });

  const [errors, setErrors] = useState({});
  const [submissionStatus, setSubmissionStatus] = useState(null);
  const [sendError, setSendError] = useState('');
  const [copiedNotification, setCopiedNotification] = useState(false);

  useEffect(() => {
    if (prefilledService) {
      setFormData((prev) => ({ ...prev, projectType: prefilledService }));
    }
  }, [prefilledService]);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = 'Please provide your full name.';
    }
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email format (e.g., name@example.com).';
    }
    if (!formData.details.trim()) {
      errs.details = 'Please describe your project requirements or questions.';
    } else if (formData.details.trim().length < 10) {
      errs.details = 'Please provide at least a short description (10+ characters).';
    }
    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (submissionStatus === 'sending') return;
    const errs = validate();
    setErrors(errs);
    setSendError('');
    if (Object.keys(errs).length) return;
    setSubmissionStatus('sending');
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 20000);
    try {
      await sendContactEmail(formData, controller.signal);
      setSubmissionStatus('submitted');
    } catch {
      setSubmissionStatus('error');
      setSendError('Your message could not be submitted. Please try again, or contact me using WhatsApp or email. Your details are still here.');
    } finally {
      window.clearTimeout(timeout);
    }
  };

  const handleCopyMessage = () => {
    const message = `Name: ${formData.name || 'Client'}\nEmail: ${formData.email || 'N/A'}\nProject: ${formData.projectType}\nDetails: ${formData.details}`;
    navigator.clipboard.writeText(message).then(() => {
      setCopiedNotification(true);
      setTimeout(() => setCopiedNotification(false), 3000);
    });
  };

  return (
    <section id="contact" className="py-16 sm:py-24 relative bg-slate-50/75 border-y border-slate-200/80">
      {/* Background ambient lighting */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold tracking-wider uppercase">
            <Mail className="w-3.5 h-3.5 text-indigo-600" />
            <span>LET'S CONNECT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight">
            Have a Project in Mind?
          </h2>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Let's turn your idea into something valuable. Whether you need a website, WordPress solution, graphic design, or video editing, I'd love to hear about your project.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-[rgb(var(--accent))] via-[rgb(var(--accent-tertiary))] to-[rgb(var(--accent-secondary))] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start max-w-6xl mx-auto">
          
          {/* Left Column: Direct Contact Information */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl bg-white border border-slate-200 p-6 sm:p-8 space-y-6 shadow-sm">
              <div>
                <h3 className="text-xl font-bold text-slate-950 mb-2">Direct Contact</h3>
                <p className="text-sm text-slate-600">
                  Feel free to reach out directly via email, phone call, or WhatsApp for quick project inquiries.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                
                {/* Email Item */}
                <a
                  href={`mailto:${personalInfo.contact.email}`}
                  className="group flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-indigo-400 hover:bg-indigo-50/40 transition-colors"
                >
                  <div className="w-11 h-11 rounded-lg bg-indigo-50 border border-indigo-200 flex items-center justify-center text-[rgb(var(--accent))] group-hover:scale-105 shrink-0 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="space-y-0.5 overflow-hidden">
                    <div className="text-xs font-mono text-slate-500 uppercase tracking-wider font-semibold">Email Address</div>
                    <div className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-[rgb(var(--accent))] transition-colors truncate">
                      {personalInfo.contact.email}
                    </div>
                    <div className="text-xs text-[rgb(var(--accent))] font-semibold flex items-center gap-1">
                      <span>Click to send email</span>
                      <ExternalLink className="w-3 h-3" />
                    </div>
                  </div>
                </a>

                {/* Phone Item */}
                <a
                  href={`tel:${personalInfo.contact.phone.replace(/\s+/g, '')}`}
                  className="group flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-emerald-400 hover:bg-emerald-50/40 transition-colors"
                >
                  <div className="w-11 h-11 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center text-[rgb(var(--accent-tertiary))] group-hover:scale-105 shrink-0 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="space-y-0.5">
                    <div className="text-xs font-mono text-slate-500 uppercase tracking-wider font-semibold">Phone Number</div>
                    <div className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-[rgb(var(--accent-tertiary))] transition-colors">
                      {personalInfo.contact.phone}
                    </div>
                    <div className="text-xs text-[rgb(var(--accent-tertiary))] font-semibold flex items-center gap-1">
                      <span>Click to place call</span>
                      <ExternalLink className="w-3 h-3" />
                    </div>
                  </div>
                </a>

                {/* WhatsApp Quick Link */}
                <a
                  href={`https://wa.me/916383976429?text=${encodeURIComponent("Hi Aravindh, I came across your portfolio and would like to discuss a project!")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-amber-400 hover:bg-amber-50/40 transition-colors"
                >
                  <div className="w-11 h-11 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center text-[rgb(var(--accent-secondary))] group-hover:scale-105 shrink-0 transition-transform">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div className="space-y-0.5">
                    <div className="text-xs font-mono text-slate-500 uppercase tracking-wider font-semibold">Instant Chat</div>
                    <div className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-[rgb(var(--accent-secondary))] transition-colors">
                      WhatsApp Quick Chat
                    </div>
                    <div className="text-xs text-[rgb(var(--accent-secondary))] font-semibold flex items-center gap-1">
                      <span>Available for project messaging</span>
                      <ExternalLink className="w-3 h-3" />
                    </div>
                  </div>
                </a>

              </div>

              {/* Working Hours / Location Notice */}
              <div className="pt-4 border-t border-slate-100 space-y-2 text-xs text-slate-500 font-medium">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-slate-400 shrink-0" />
                  <span>Based in {personalInfo.contact.location} (Open to Remote Work)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                  <span>Response Time: Typically within 24 hours</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-white border border-slate-200 p-6 sm:p-8 shadow-sm relative">
              <h3 className="text-xl font-bold text-slate-950 mb-2">Send a Message</h3>
              <p className="text-sm text-slate-600 mb-6">
                Fill in the details below to send your project inquiry directly. No email app is needed.
              </p>

              {/* Form Element */}
              <form onSubmit={handleSubmit} aria-busy={submissionStatus === 'sending'} noValidate className="space-y-4">
                
                {/* Full Name */}
                <div>
                  <label htmlFor="name" className="block text-xs font-bold text-slate-800 mb-1.5 uppercase font-mono tracking-wider">
                    Full Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: null });
                    }}
                    placeholder="e.g. Alex Morgan"
                    className={`w-full px-4 py-3 rounded-xl bg-slate-50 border text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[rgb(var(--accent))] transition-colors text-sm ${
                      errors.name ? 'border-rose-400' : 'border-slate-200 focus:border-[rgb(var(--accent))]'
                    }`}
                  />
                  {errors.name && (
                    <p className="mt-1.5 text-xs text-rose-500 font-medium flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email Address */}
                <div>
                  <label htmlFor="email" className="block text-xs font-bold text-slate-800 mb-1.5 uppercase font-mono tracking-wider">
                    Email Address <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: null });
                    }}
                    placeholder="e.g. alex@company.com"
                    className={`w-full px-4 py-3 rounded-xl bg-slate-50 border text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[rgb(var(--accent))] transition-colors text-sm ${
                      errors.email ? 'border-rose-400' : 'border-slate-200 focus:border-[rgb(var(--accent))]'
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1.5 text-xs text-rose-500 font-medium flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Project Type */}
                <div>
                  <label htmlFor="projectType" className="block text-xs font-bold text-slate-800 mb-1.5 uppercase font-mono tracking-wider">
                    Project Type <span className="text-rose-500">*</span>
                  </label>
                  <select
                    id="projectType"
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[rgb(var(--accent))] transition-colors text-sm font-medium"
                  >
                    {servicesList.map((s) => (
                      <option key={s.id} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                    <option value="General Digital Consultation">
                      General Digital Consultation / Freelance Inquiry
                    </option>
                    <option value="Full-time Job Opportunity">
                      Full-time Job Opportunity
                    </option>
                  </select>
                </div>

                {/* Project Details */}
                <div>
                  <label htmlFor="details" className="block text-xs font-bold text-slate-800 mb-1.5 uppercase font-mono tracking-wider">
                    Project Details <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    id="details"
                    rows="4"
                    value={formData.details}
                    onChange={(e) => {
                      setFormData({ ...formData, details: e.target.value });
                      if (errors.details) setErrors({ ...errors, details: null });
                    }}
                    placeholder="Briefly describe what you are looking to build, any timeline goals, or key features you require..."
                    className={`w-full px-4 py-3 rounded-xl bg-slate-50 border text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[rgb(var(--accent))] transition-colors text-sm resize-none ${
                      errors.details ? 'border-rose-400' : 'border-slate-200 focus:border-[rgb(var(--accent))]'
                    }`}
                  />
                  {errors.details && (
                    <p className="mt-1.5 text-xs text-rose-500 font-medium flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.details}
                    </p>
                  )}
                </div>

                {/* Actions & Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="submit"
                    disabled={submissionStatus === 'sending'}
                    className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-slate-950 hover:bg-[rgb(var(--accent))] text-white font-bold text-sm shadow-md shadow-slate-950/20 transition-colors duration-200 cursor-pointer"
                  >
                    <Send className="w-4 h-4 text-amber-400" />
                    <span>{submissionStatus === 'sending' ? 'Sending?' : 'Send Message'}</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleCopyMessage}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 text-sm font-semibold transition-colors cursor-pointer"
                    title="Copy details to clipboard"
                  >
                    <Copy className="w-4 h-4 text-slate-600" />
                    <span>{copiedNotification ? 'Copied!' : 'Copy Summary'}</span>
                  </button>
                </div>
              </form>

              {/* Verified Clear Message Feedback */}
              {submissionStatus === 'submitted' && (
                <div role="status" className="mt-6 p-4 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-900 text-xs sm:text-sm space-y-1">
                  <div className="flex items-center gap-2 font-bold text-emerald-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Message Submitted</span>
                  </div>
                  <p>
                    Your inquiry has been submitted. Thank you for getting in touch!
                  </p>
                </div>
              )}

              {sendError && <p role="alert" className="mt-4 text-sm text-rose-700">{sendError}</p>}

              {copiedNotification && (
                <div className="mt-3 p-3 rounded-lg bg-indigo-50 border border-indigo-200 text-indigo-900 text-xs font-semibold flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-[rgb(var(--accent))]" />
                  <span>Message details copied to clipboard. You can paste it into any email or chat app!</span>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
