'use client';

import React, { useState } from 'react';
import { FAQS } from '@/lib/data';
import { ChevronDown, HelpCircle, ShieldCheck } from 'lucide-react';

export function FaqSection() {
  const [openId, setOpenId] = useState<string | null>(FAQS[0]?.id || 'investments-held');

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faqs" className="py-16 md:py-24 bg-[#FFFFFF] border-b border-[#CDAB7D]/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F8F5EF] border border-[#CDAB7D]/50 rounded-sm mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-[#B3742D]" />
            <span className="text-xs uppercase tracking-widest text-[#B3742D] font-bold">
              PRACTICAL CLARITY
            </span>
          </div>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-[#252525] tracking-tight">
            Frequently Addressed Questions
          </h2>
          <p className="mt-3 text-base text-[#5F5F5F] leading-relaxed">
            Essential clarity regarding custody arrangements, UK regulation, ISA eligibility, and cross-border mechanics.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-4">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                id={`faq-item-${faq.id}`}
                className="bg-[#FFFFFF] border border-[#CDAB7D]/40 rounded-sm transition-all duration-200 shadow-2xs"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif font-bold text-base sm:text-lg text-[#252525]">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-sm flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? 'bg-[#B3742D] text-[#FFFFFF] rotate-180'
                        : 'bg-[#F8F5EF] text-[#B3742D] border border-[#CDAB7D]/30'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 text-sm text-[#5F5F5F] leading-relaxed border-t border-[#CDAB7D]/20 pt-4">
                    <p>{faq.answer}</p>
                    <div className="mt-3 flex items-center gap-1.5 text-xs text-[#B3742D] font-medium">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>FCA Regulated & Verified Standard</span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
