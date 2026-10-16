import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Mail, Phone, MapPin, Send, CheckCircle2, Copy, Check, ExternalLink } from 'lucide-react';

export const Contact: React.FC = () => {
  const { profile } = portfolioData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please provide your full name.';
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!formData.subject.trim()) errs.subject = 'Please specify a subject.';
    if (!formData.message.trim()) errs.message = 'Please enter your message.';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  };

  const handleLaunchEmailClient = () => {
    const mailtoUrl = `mailto:${profile.email}?subject=${encodeURIComponent(
      formData.subject || 'Inquiry: Software Test Engineer Engagement'
    )}&body=${encodeURIComponent(
      `Hello Zakaria,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n`
    )}`;
    window.location.href = mailtoUrl;
  };

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="text-xs uppercase tracking-wider font-semibold text-blue-600 mb-2">
            Get In Touch
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Connect for Banking QA Engagements
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Reach out regarding software testing opportunities, banking system validation consulting, or core banking (T24/CAS) functional test execution.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Information */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 sm:p-8 space-y-6">
              <h3 className="text-lg font-bold text-slate-900">
                Direct Contact Information
              </h3>
              
              <div className="space-y-4">
                
                {/* Email Item */}
                <div className="flex items-start justify-between gap-3 p-3.5 bg-white border border-slate-200 rounded-lg">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-blue-50 text-blue-600 rounded shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
                        Email Address
                      </span>
                      <a
                        href={`mailto:${profile.email}`}
                        className="text-sm font-semibold text-slate-900 hover:text-blue-600 transition-colors break-all"
                      >
                        {profile.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard(profile.email, 'email')}
                    className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded transition-colors shrink-0 cursor-pointer"
                    title="Copy Email"
                    aria-label="Copy Email"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone Item */}
                <div className="flex items-start justify-between gap-3 p-3.5 bg-white border border-slate-200 rounded-lg">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-blue-50 text-blue-600 rounded shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
                        Contact Number
                      </span>
                      <a
                        href={`tel:${profile.phone}`}
                        className="text-sm font-semibold text-slate-900 hover:text-blue-600 transition-colors"
                      >
                        {profile.displayPhone}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard(profile.phone, 'phone')}
                    className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded transition-colors shrink-0 cursor-pointer"
                    title="Copy Phone"
                    aria-label="Copy Phone"
                  >
                    {copiedPhone ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Location Item */}
                <div className="flex items-start gap-3 p-3.5 bg-white border border-slate-200 rounded-lg">
                  <div className="p-2 bg-blue-50 text-blue-600 rounded shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
                      Location & Mobility
                    </span>
                    <span className="text-sm font-semibold text-slate-900 block">
                      {profile.location}
                    </span>
                    <span className="text-xs text-slate-500">
                      Available for on-site (Mumbai) and hybrid QA engagements
                    </span>
                  </div>
                </div>

              </div>

              {/* Status Note */}
              <div className="p-4 bg-slate-900 text-white rounded-lg text-xs space-y-1">
                <span className="font-semibold text-blue-400 block uppercase tracking-wider text-[11px]">
                  Testing Domain Focus
                </span>
                <p className="text-slate-300 leading-relaxed">
                  5 Years experience delivering functional, regression, and system integration testing for banking platforms.
                </p>
              </div>

            </div>
          </div>

          {/* Right Column: Validated Contact Form with Mailto Fallback */}
          <div className="lg:col-span-7">
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 sm:p-8">
              
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">
                    Send a Direct Message
                  </h3>
                  <p className="text-xs text-slate-600 mb-4">
                    Fill in your details below. You can send directly via your desktop or web email client.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                        Your Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. John Doe"
                        className={`w-full px-3.5 py-2.5 text-sm bg-white border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                          errors.name ? 'border-red-400 bg-red-50/20' : 'border-slate-300'
                        }`}
                      />
                      {errors.name && (
                        <p className="text-xs text-red-600 mt-1">{errors.name}</p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. john@company.com"
                        className={`w-full px-3.5 py-2.5 text-sm bg-white border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                          errors.email ? 'border-red-400 bg-red-50/20' : 'border-slate-300'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-xs text-red-600 mt-1">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                      Subject <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Banking QA Opportunity / Testing Project Consultation"
                      className={`w-full px-3.5 py-2.5 text-sm bg-white border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                        errors.subject ? 'border-red-400 bg-red-50/20' : 'border-slate-300'
                      }`}
                    />
                    {errors.subject && (
                      <p className="text-xs text-red-600 mt-1">{errors.subject}</p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please outline the project requirements, testing scope, or role specifications..."
                      className={`w-full px-3.5 py-2.5 text-sm bg-white border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors resize-none ${
                        errors.message ? 'border-red-400 bg-red-50/20' : 'border-slate-300'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-xs text-red-600 mt-1">{errors.message}</p>
                    )}
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <p className="text-xs text-slate-500">
                      Standard mail client fallback will open upon submission.
                    </p>
                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-md transition-colors cursor-pointer shadow-xs whitespace-nowrap"
                    >
                      <Send className="w-4 h-4" />
                      <span>Prepare Message</span>
                    </button>
                  </div>
                </form>
              ) : (
                /* Clear Success State */
                <div className="text-center py-6 space-y-4">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">
                    Message Prepared Successfully
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong>{formData.name}</strong>. Because this portfolio uses client-side routing, click below to open your preferred mail client and send the pre-filled inquiry directly to <strong>{profile.email}</strong>.
                  </p>

                  <div className="p-4 bg-white border border-slate-200 rounded-lg text-left text-xs max-w-md mx-auto text-slate-700 space-y-1">
                    <div><strong>Subject:</strong> {formData.subject}</div>
                    <div className="line-clamp-2"><strong>Preview:</strong> {formData.message}</div>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      onClick={handleLaunchEmailClient}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-md transition-colors cursor-pointer shadow-xs"
                    >
                      <span>Open Mail Client Now</span>
                      <ExternalLink className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: '', email: '', subject: '', message: '' });
                      }}
                      className="w-full sm:w-auto px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 cursor-pointer"
                    >
                      Write Another Note
                    </button>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
