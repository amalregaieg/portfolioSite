import React, { useState } from 'react';
import { profileData } from '../data/profile';
import { SectionHeader } from '../components/ui/SectionHeader';
import { GithubIcon, LinkedinIcon } from '../components/ui/Icons';
import { Send, Copy, Check, Terminal, AlertCircle, MessageSquare } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [copiedEmail, setCopiedEmail] = useState<boolean>(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject line is required';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message content is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
      setTimeout(() => {
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 3000);
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="py-20 bg-backend-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="GET IN TOUCH"
          title="Looking for a Symfony / PHP backend developer?"
          subtitle="Let's discuss your project, backend architecture needs, or tech lead opportunities."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-10 items-start">
          {/* Left Column: Direct Contact & Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-backend-card border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl">
              <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
                <div className="w-10 h-10 rounded-xl bg-sky-950/80 border border-sky-500/40 flex items-center justify-center text-sky-400">
                  <Terminal className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-mono text-base font-bold text-slate-100">
                    Direct Contact Channels
                  </h3>
                  <p className="text-xs text-sky-400 font-mono">
                    Fast response within 24 hours
                  </p>
                </div>
              </div>

              {/* Email Copy Card */}
              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                  Official Email
                </span>
                <div className="flex items-center justify-between gap-2">
                  <a
                    href={`mailto:${profileData.email}`}
                    className="font-mono text-sm font-bold text-sky-300 hover:underline truncate"
                  >
                    {profileData.email}
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors shrink-0"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
                {copiedEmail && (
                  <span className="text-[11px] font-mono text-emerald-400 block">
                    Copied to clipboard!
                  </span>
                )}
              </div>

              {/* Professional Links */}
              <div className="space-y-3 pt-2 font-mono text-xs">
                <a
                  href={profileData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-sky-500/40 text-slate-300 hover:text-white transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <GithubIcon className="w-4 h-4 text-sky-400" />
                    <span>GitHub Profile</span>
                  </div>
                  <span className="text-slate-400 group-hover:translate-x-0.5 transition-transform">→</span>
                </a>

                <a
                  href={profileData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-sky-500/40 text-slate-300 hover:text-white transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <LinkedinIcon className="w-4 h-4 text-sky-400" />
                    <span>LinkedIn Profile</span>
                  </div>
                  <span className="text-slate-400 group-hover:translate-x-0.5 transition-transform">→</span>
                </a>
              </div>

              {/* Service Integration Developer Note */}
              <div className="p-4 rounded-xl bg-sky-950/20 border border-sky-500/20 text-[11px] font-mono text-sky-300 space-y-1">
                <div className="flex items-center gap-1.5 font-bold">
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Integration Ready</span>
                </div>
                <p className="text-slate-400 text-[10px] leading-relaxed">
                  Form is client-side validated. Can be linked directly to Formspree, EmailJS, or Resend API key in 1 line of code.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-backend-card border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl">
            <h3 className="text-xl font-bold text-slate-100 font-sans mb-1">
              Send a Direct Message
            </h3>
            <p className="text-xs text-slate-400 font-mono mb-6">
              Fill out the form below to start a conversation regarding Symfony projects or mission inquiries.
            </p>

            {submitted ? (
              <div className="p-6 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-emerald-300 space-y-2 text-center font-mono">
                <Check className="w-8 h-8 text-emerald-400 mx-auto" />
                <h4 className="font-bold text-base">Message Received!</h4>
                <p className="text-xs text-slate-300">
                  Thank you for reaching out. I will review your message and reply promptly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 font-sans" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name Input */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
                      Your Name <span className="text-sky-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Jean Dupont"
                      className={`w-full px-4 py-2.5 rounded-lg bg-slate-900 border text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-sky-500 font-sans ${
                        errors.name ? 'border-red-500/80' : 'border-slate-800'
                      }`}
                    />
                    {errors.name && (
                      <span className="text-[11px] font-mono text-red-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.name}
                      </span>
                    )}
                  </div>

                  {/* Email Input */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
                      Your Email <span className="text-sky-400">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. client@company.com"
                      className={`w-full px-4 py-2.5 rounded-lg bg-slate-900 border text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-sky-500 font-sans ${
                        errors.email ? 'border-red-500/80' : 'border-slate-800'
                      }`}
                    />
                    {errors.email && (
                      <span className="text-[11px] font-mono text-red-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.email}
                      </span>
                    )}
                  </div>
                </div>

                {/* Subject Input */}
                <div>
                  <label htmlFor="subject" className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
                    Subject <span className="text-sky-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Symfony Architecture Mission / Freelance Contract"
                    className={`w-full px-4 py-2.5 rounded-lg bg-slate-900 border text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-sky-500 font-sans ${
                      errors.subject ? 'border-red-500/80' : 'border-slate-800'
                    }`}
                  />
                  {errors.subject && (
                    <span className="text-[11px] font-mono text-red-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.subject}
                    </span>
                  )}
                </div>

                {/* Message Input */}
                <div>
                  <label htmlFor="message" className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
                    Message <span className="text-sky-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your backend requirements, tech stack, or mission goals..."
                    className={`w-full px-4 py-2.5 rounded-lg bg-slate-900 border text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-sky-500 font-sans ${
                      errors.message ? 'border-red-500/80' : 'border-slate-800'
                    }`}
                  />
                  {errors.message && (
                    <span className="text-[11px] font-mono text-red-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.message}
                    </span>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-lg bg-sky-600 hover:bg-sky-500 text-white font-mono text-xs font-semibold shadow-glow-cyan transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
