'use client';

import React, { useState } from 'react';
import { Mail, Landmark, Clock, CheckCircle2, ShieldCheck, ArrowRight, Building2, MapPin } from 'lucide-react';

export function CallbackAndOffice() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    country: 'United Kingdom',
    assetRange: '£1,000,000 – £2,500,000',
    primaryInterest: 'India-Focused Allocation via UK Platforms',
    preferredContactMethod: 'Email',
    preferredTime: 'Morning (09:00 - 12:00 GMT)',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-[#F8F5EF] border-b border-[#CDAB7D]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HERO BANNER */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FFFFFF] border border-[#CDAB7D]/50 rounded-sm">
            <Mail className="w-3.5 h-3.5 text-[#B3742D]" />
            <span className="text-xs uppercase tracking-widest text-[#B3742D] font-bold">
              PRIVATE INTRODUCTION
            </span>
          </div>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-[#252525] tracking-tight">
            Begin with a conversation. Nothing more is required.
          </h2>
          <p className="text-base sm:text-lg text-[#5F5F5F] leading-relaxed">
            Confidential first discussion with a named member of our London team to evaluate relevance to your circumstances.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left: Private Introduction Form (7 cols) */}
          <div className="lg:col-span-7 bg-[#FFFFFF] border-2 border-[#CDAB7D]/60 rounded-sm p-6 sm:p-10 shadow-xs">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-14 h-14 bg-[#F8F5EF] border border-[#B3742D] text-[#B3742D] rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif font-bold text-2xl text-[#252525]">
                  Private Introduction Requested
                </h3>
                <p className="text-sm text-[#5F5F5F] max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="font-semibold text-[#252525]">{formData.fullName}</span>. An Executive Director from our City of London office will reach out via {formData.preferredContactMethod.toLowerCase()} during {formData.preferredTime.toLowerCase()} to coordinate a confidential introduction.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        fullName: '',
                        email: '',
                        country: 'United Kingdom',
                        assetRange: '£1,000,000 – £2,500,000',
                        primaryInterest: 'India-Focused Allocation via UK Platforms',
                        preferredContactMethod: 'Email',
                        preferredTime: 'Morning (09:00 - 12:00 GMT)',
                        message: '',
                      });
                    }}
                    className="px-6 py-2.5 bg-[#F8F5EF] hover:bg-[#FFFFFF] border border-[#CDAB7D] text-[#252525] text-xs font-bold rounded-sm transition-colors cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" id="private-intro-form">
                <div className="border-b border-[#CDAB7D]/30 pb-4 mb-2">
                  <h3 className="font-serif font-bold text-xl text-[#252525]">
                    Request Private Introduction
                  </h3>
                  <p className="text-xs text-[#5F5F5F] mt-1">
                    Direct communication without unsolicited sales outreach.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* 1. Full Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-[#252525]" htmlFor="form-fullName">
                      Full Name *
                    </label>
                    <input
                      id="form-fullName"
                      required
                      type="text"
                      placeholder="e.g. Alistair Ross / Rajiv Mehta"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full bg-[#FFFFFF] border border-[#CDAB7D]/60 rounded-sm px-3.5 py-2.5 text-xs text-[#252525] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#B3742D]"
                    />
                  </div>

                  {/* 2. Email Address */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-[#252525]" htmlFor="form-email">
                      Email Address *
                    </label>
                    <input
                      id="form-email"
                      required
                      type="email"
                      placeholder="e.g. name@domain.co.uk"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#FFFFFF] border border-[#CDAB7D]/60 rounded-sm px-3.5 py-2.5 text-xs text-[#252525] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#B3742D]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* 3. Country of Residence */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-[#252525]" htmlFor="form-country">
                      Country of Residence
                    </label>
                    <input
                      id="form-country"
                      type="text"
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      className="w-full bg-[#FFFFFF] border border-[#CDAB7D]/60 rounded-sm px-3.5 py-2.5 text-xs text-[#252525] focus:outline-none focus:border-[#B3742D]"
                    />
                  </div>

                  {/* 4. Approximate Investible Asset Range */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-[#252525]" htmlFor="form-assetRange">
                      Investible Asset Range
                    </label>
                    <select
                      id="form-assetRange"
                      value={formData.assetRange}
                      onChange={(e) => setFormData({ ...formData, assetRange: e.target.value })}
                      className="w-full bg-[#FFFFFF] border border-[#CDAB7D]/60 rounded-sm px-3.5 py-2.5 text-xs text-[#252525] focus:outline-none focus:border-[#B3742D]"
                    >
                      <option value="£500,000 – £1,000,000">£500,000 – £1,000,000</option>
                      <option value="£1,000,000 – £2,500,000">£1,000,000 – £2,500,000</option>
                      <option value="£2,500,000 – £5,000,000">£2,500,000 – £5,000,000</option>
                      <option value="£5,000,000 – £10,000,000+">£5,000,000 – £10,000,000+</option>
                      <option value="Family Office / Institutional">Family Office / Institutional</option>
                    </select>
                  </div>
                </div>

                {/* 5. Primary Area of Interest */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#252525]" htmlFor="form-primaryInterest">
                    Primary Area of Interest
                  </label>
                  <select
                    id="form-primaryInterest"
                    value={formData.primaryInterest}
                    onChange={(e) => setFormData({ ...formData, primaryInterest: e.target.value })}
                    className="w-full bg-[#FFFFFF] border border-[#CDAB7D]/60 rounded-sm px-3.5 py-2.5 text-xs text-[#252525] focus:outline-none focus:border-[#B3742D]"
                  >
                    <option value="India-Focused Allocation via UK Platforms">India-Focused Allocation via UK Platforms</option>
                    <option value="Consolidated UK Private Wealth Management">Consolidated UK Private Wealth Management</option>
                    <option value="Cross-Border UK / India Asset Structuring">Cross-Border UK / India Asset Structuring</option>
                    <option value="Entrepreneur Liquidity & Cash Treasury">Entrepreneur Liquidity & Cash Treasury</option>
                    <option value="Inter-Generational Wealth & IHT Strategy">Inter-Generational Wealth & IHT Strategy</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* 6. Preferred Contact Method */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-[#252525]" htmlFor="form-contactMethod">
                      Preferred Contact Method
                    </label>
                    <select
                      id="form-contactMethod"
                      value={formData.preferredContactMethod}
                      onChange={(e) => setFormData({ ...formData, preferredContactMethod: e.target.value })}
                      className="w-full bg-[#FFFFFF] border border-[#CDAB7D]/60 rounded-sm px-3.5 py-2.5 text-xs text-[#252525] focus:outline-none focus:border-[#B3742D]"
                    >
                      <option value="Email">Email Communication</option>
                      <option value="Virtual Video Introduction">Virtual Video Introduction</option>
                      <option value="In-Person at Octagon Point London">In-Person at Octagon Point London</option>
                    </select>
                  </div>

                  {/* 7. Preferred Contact Time */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-[#252525]" htmlFor="form-preferredTime">
                      Preferred Time Window
                    </label>
                    <select
                      id="form-preferredTime"
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                      className="w-full bg-[#FFFFFF] border border-[#CDAB7D]/60 rounded-sm px-3.5 py-2.5 text-xs text-[#252525] focus:outline-none focus:border-[#B3742D]"
                    >
                      <option value="Morning (09:00 - 12:00 GMT)">Morning (09:00 - 12:00 GMT)</option>
                      <option value="Afternoon (12:00 - 15:00 GMT)">Afternoon (12:00 - 15:00 GMT)</option>
                      <option value="Late Afternoon (15:00 - 18:00 GMT)">Late Afternoon (15:00 - 18:00 GMT)</option>
                    </select>
                  </div>
                </div>

                {/* 8. Message */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#252525]" htmlFor="form-message">
                    Message / Specific Focus (Optional)
                  </label>
                  <textarea
                    id="form-message"
                    rows={3}
                    placeholder="Share any specific portfolio objectives or timeframes..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#FFFFFF] border border-[#CDAB7D]/60 rounded-sm px-3.5 py-2.5 text-xs text-[#252525] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#B3742D]"
                  />
                </div>

                {/* Privacy and Submit */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-[11px] text-[#5F5F5F]">
                    <ShieldCheck className="w-4 h-4 text-[#B3742D] shrink-0" />
                    <span>FCA Privacy & GDPR Protected. No unsolicited marketing.</span>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto bg-[#B3742D] hover:bg-[#7C4C21] text-[#FFFFFF] text-xs font-bold px-7 py-3 rounded-sm transition-colors shadow-xs flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    <span>{isSubmitting ? 'Transmitting...' : 'Request Introduction'}</span>
                    <ArrowRight className="w-4 h-4 text-[#FFFFFF]" />
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right: Direct London Office & Details (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#FFFFFF] border border-[#CDAB7D]/40 rounded-sm p-6 sm:p-8 space-y-6 shadow-xs">
              <div className="border-b border-[#CDAB7D]/30 pb-4">
                <span className="text-[10px] uppercase font-mono tracking-widest text-[#B3742D] font-bold block mb-1">
                  DIRECT LONDON HEADQUARTERS
                </span>
                <h3 className="font-serif font-bold text-2xl text-[#252525]">
                  Anand Rathi Wealth UK Limited
                </h3>
                <p className="text-xs text-[#5F5F5F] mt-1">
                  Authorised & Regulated by the Financial Conduct Authority (FCA Ref: 1033886)
                </p>
              </div>

              <div className="space-y-4 text-xs text-[#5F5F5F]">
                <div className="flex items-start gap-3">
                  <Building2 className="w-4 h-4 text-[#B3742D] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#252525] block">Office Location:</span>
                    <span>Octagon Point, 5 Cheapside, City of London, London, England, EC2V 6AA</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#B3742D] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#252525] block">Direct Executive Email:</span>
                    <a href="mailto:anandrathiwealth@rathi.com" className="text-[#B3742D] hover:underline font-medium">
                      anandrathiwealth@rathi.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#B3742D] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#252525] block">Operating Hours:</span>
                    <span>Monday – Friday: 08:30 – 18:00 GMT</span>
                  </div>
                </div>
              </div>

              {/* Transit Note */}
              <div className="p-4 bg-[#F8F5EF] border border-[#CDAB7D]/30 rounded-sm text-xs text-[#5F5F5F] leading-relaxed">
                <span className="font-semibold text-[#252525] block mb-1">City Access:</span>
                Located immediately adjacent to St Paul&apos;s Underground Station (Central Line) and a short walk from Bank and Mansion House.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
