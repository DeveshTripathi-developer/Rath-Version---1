'use client';

import React from 'react';
import { ArrowRight, ShieldCheck, Building2, Globe2, Compass, Landmark } from 'lucide-react';

interface HeroSectionProps {
  onOpenConsultation: () => void;
}

export function HeroSection({ onOpenConsultation }: HeroSectionProps) {
  return (
    <div id="our-story" className="relative bg-[#FFFFFF] overflow-hidden">
      {/* 1. HERO BANNER */}
      <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 border-b border-[#CDAB7D]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-sm bg-[#F8F5EF] border border-[#CDAB7D]/50">
                <div className="w-1.5 h-1.5 rounded-full bg-[#B3742D]" />
                <span className="text-xs uppercase tracking-widest text-[#B3742D] font-bold">
                  India Insight. UK Perspective.
                </span>
              </div>

              {/* Headline */}
              <h1 className="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl text-[#252525] leading-[1.12] tracking-tight uppercase">
                PRIVATE WEALTH.{' '}
                <span className="italic font-normal block sm:inline text-[#B3742D] normal-case">
                  Uncomplicated.
                </span>
              </h1>

              {/* Sub-headline */}
              <p className="text-lg sm:text-xl text-[#5F5F5F] leading-relaxed max-w-2xl font-light">
                Over 3 decades of experience and track record, delivering a data-led wealth approach for individuals and families in the United Kingdom, with access to India-focused opportunities through eligible UK investments.
              </p>

              {/* Primary Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  onClick={onOpenConsultation}
                  id="hero-request-intro-btn"
                  className="bg-[#B3742D] hover:bg-[#7C4C21] text-[#FFFFFF] font-semibold text-base px-7 py-3.5 rounded-sm shadow-xs transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#B3742D]"
                >
                  <span>Request a Private Introduction</span>
                  <ArrowRight className="w-4 h-4 text-[#FFFFFF]" />
                </button>

                <a
                  href="#our-approach"
                  id="hero-explore-process-btn"
                  className="border border-[#CDAB7D] hover:border-[#B3742D] hover:bg-[#F8F5EF] text-[#252525] font-semibold text-base px-7 py-3.5 rounded-sm transition-all duration-200 text-center flex items-center justify-center gap-2"
                >
                  <span>Explore Our Wealth Process</span>
                </a>
              </div>

              {/* Micro Trust Proof */}
              <div className="pt-6 border-t border-[#CDAB7D]/30 flex flex-wrap items-center gap-6 text-xs text-[#5F5F5F]">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#B3742D]" />
                  <span>FCA Authorised (Ref: 1033886)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-[#B3742D]" />
                  <span>City of London Headquarters</span>
                </div>
                <div className="flex items-center gap-2">
                  <Compass className="w-4 h-4 text-[#B3742D]" />
                  <span>Eligible UK Platform Access</span>
                </div>
              </div>
            </div>

            {/* Right Architectural Card */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="relative rounded-sm border-2 border-[#CDAB7D]/60 p-4 bg-[#FFFFFF] shadow-sm">
                  <div className="relative bg-[#F8F5EF] border border-[#CDAB7D]/40 p-6 sm:p-8 rounded-sm text-[#252525]">
                    <div className="space-y-6">
                      <div className="flex items-center justify-between border-b border-[#CDAB7D]/40 pb-4">
                        <div className="flex items-center gap-2">
                          <Landmark className="w-5 h-5 text-[#B3742D]" />
                          <span className="font-serif font-bold text-sm tracking-wide text-[#252525]">
                            London Private Wealth Office
                          </span>
                        </div>
                        <span className="text-xs uppercase font-mono font-bold tracking-wider text-[#B3742D]">
                          EC2V 6AA
                        </span>
                      </div>

                      {/* City skyline illustration */}
                      <div className="relative h-44 rounded-sm border border-[#CDAB7D]/40 bg-[#FFFFFF] p-4 flex flex-col justify-between overflow-hidden shadow-xs">
                        <div className="flex items-center justify-between z-10 text-xs">
                          <span className="text-[#252525] font-semibold">Octagon Point • 5 Cheapside</span>
                          <span className="text-[#5F5F5F] font-mono text-[10px]">St Paul’s • City of London</span>
                        </div>

                        <svg
                          className="absolute inset-0 w-full h-full opacity-30 text-[#B3742D]"
                          viewBox="0 0 400 160"
                          fill="none"
                          stroke="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <line x1="0" y1="140" x2="400" y2="140" strokeWidth="1.5" />
                          <path
                            d="M120 140 V100 H140 V75 Q160 50 180 75 V100 H200 V140"
                            strokeWidth="1.5"
                            strokeLinejoin="round"
                          />
                          <path d="M150 75 Q160 40 170 75" strokeWidth="1.5" />
                          <line x1="160" y1="40" x2="160" y2="28" strokeWidth="1.5" />
                          <line x1="156" y1="32" x2="164" y2="32" strokeWidth="1.5" />
                          <path
                            d="M210 140 V60 L260 40 L290 60 V140"
                            strokeWidth="1.5"
                            strokeLinejoin="round"
                          />
                          <line x1="260" y1="40" x2="260" y2="140" strokeWidth="1" strokeDasharray="4 2" />
                          <polygon points="320,120 335,15 350,120" strokeWidth="1.2" />
                        </svg>

                        <div className="flex items-center justify-between text-[11px] border-t border-[#CDAB7D]/30 pt-2 z-10 text-[#5F5F5F]">
                          <span className="font-semibold text-[#252525]">FCA Regulated UK Advisory</span>
                          <span className="text-[#B3742D] font-medium">FCA Ref: 1033886</span>
                        </div>
                      </div>

                      {/* Institutional statement */}
                      <div className="bg-[#FFFFFF] border border-[#CDAB7D]/30 p-3.5 rounded-sm">
                        <p className="text-xs text-[#5F5F5F] italic leading-relaxed">
                          “Delivering an established Indian wealth management pedigree through an onshore, FCA-regulated London establishment.”
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Corner accents */}
                  <div className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-[#B3742D]" />
                  <div className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-[#B3742D]" />
                  <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 bg-[#B3742D]" />
                  <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 bg-[#B3742D]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1: UK BASED WITH ESTABLISHED INDIA EXPERIENCE */}
      <section className="py-14 sm:py-20 bg-[#F8F5EF] border-b border-[#CDAB7D]/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FFFFFF] border border-[#CDAB7D]/50 rounded-sm">
            <span className="text-xs uppercase tracking-widest text-[#B3742D] font-bold">
              ESTABLISHED PEDIGREE
            </span>
          </div>

          <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-[#252525] tracking-tight">
            UK based. Established India experience.
          </h2>

          <p className="text-base sm:text-lg lg:text-xl text-[#5F5F5F] leading-relaxed max-w-4xl mx-auto font-normal">
            Anand Rathi Wealth UK is the UK chapter of Anand Rathi Wealth Limited, a private wealth firm established in 2002. Managing $11 billion USD in AUM for nearly 14,000+ client families globally, Anand Rathi Wealth UK is authorised and regulated by the Financial Conduct Authority with a singular purpose: to make India accessible to UK investors.
          </p>
        </div>
      </section>

      {/* SECTION 4: WHY THE UK BASE MATTERS */}
      <section className="py-16 md:py-20 bg-[#FFFFFF] border-b border-[#CDAB7D]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F8F5EF] border border-[#CDAB7D]/50 rounded-sm mb-3">
              <Globe2 className="w-3.5 h-3.5 text-[#B3742D]" />
              <span className="text-xs uppercase tracking-widest text-[#B3742D] font-semibold">
                REGULATED ACCESS
              </span>
            </div>
            <h2 className="font-serif font-bold text-2xl sm:text-3xl lg:text-4xl text-[#252525] tracking-tight">
              The UK offers a regulated, familiar base from which to access India&apos;s growth, without operational complexity.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* For Global Indian Families */}
            <div className="bg-[#F8F5EF] border border-[#CDAB7D]/40 rounded-sm p-7 sm:p-8 flex flex-col justify-between shadow-2xs hover:border-[#B3742D] transition-colors">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#B3742D] font-bold block mb-2">
                  CLIENT ARCHETYPE 01
                </span>
                <h3 className="font-serif font-bold text-2xl text-[#252525] mb-4">
                  For Global Indian Families
                </h3>
                <p className="text-sm text-[#5F5F5F] leading-relaxed">
                  For the Indian diaspora that has long believed in the potential of Indian markets, access has often come with complexities and an absence of trusted guidance. We remove administrative friction by structuring access through onshore UK frameworks without the need for NRE/NRO operational burden.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#CDAB7D]/30 flex items-center gap-2 text-xs text-[#B3742D] font-medium">
                <span>Direct UK Custody • No Offshore Remittance Friction</span>
              </div>
            </div>

            {/* For UK Investors */}
            <div className="bg-[#F8F5EF] border border-[#CDAB7D]/40 rounded-sm p-7 sm:p-8 flex flex-col justify-between shadow-2xs hover:border-[#B3742D] transition-colors">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#B3742D] font-bold block mb-2">
                  CLIENT ARCHETYPE 02
                </span>
                <h3 className="font-serif font-bold text-2xl text-[#252525] mb-4">
                  For UK Investors
                </h3>
                <p className="text-sm text-[#5F5F5F] leading-relaxed">
                  For UK residents seeking meaningful diversification into one of the world&apos;s fastest-growing economies, we offer a carefully considered entry point. We size risk, evaluate currency factors, and curate eligible UK-listed and platform-hosted solutions.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#CDAB7D]/30 flex items-center gap-2 text-xs text-[#B3742D] font-medium">
                <span>GBP-Denominated Metrics • Active Risk Budgeting</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
