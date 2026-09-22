'use client';

import React from 'react';
import { CORE_PILLARS, BRAND_VALUES } from '@/lib/data';
import { ShieldCheck, Award, Users, CheckCircle2, TrendingUp, Sparkles, Scale, Database, FileText, Eye } from 'lucide-react';

export function PhilosophyPillars() {
  const pillarIcons = [
    Award,
    Users,
    CheckCircle2,
    ShieldCheck,
    TrendingUp,
    Sparkles,
  ];

  const valueIcons = [
    Scale,
    Database,
    FileText,
    Eye,
  ];

  return (
    <div className="bg-[#FFFFFF]">
      {/* SECTION 2: WHY US - 6 CORE PILLARS */}
      <section className="py-16 md:py-24 border-b border-[#CDAB7D]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F8F5EF] border border-[#CDAB7D]/50 rounded-sm mb-3">
              <span className="text-xs uppercase tracking-widest text-[#B3742D] font-bold">
                PROVEN FOUNDATION
              </span>
            </div>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-[#252525] tracking-tight">
              Why Anand Rathi Wealth UK
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#5F5F5F] leading-relaxed">
              Six foundational commitments that distinguish our London wealth stewardship and open-architecture access.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {CORE_PILLARS.map((pillar, index) => {
              const IconComponent = pillarIcons[index % pillarIcons.length];
              return (
                <div
                  key={pillar.id}
                  id={`core-pillar-${pillar.id}`}
                  className="bg-[#FFFFFF] border border-[#CDAB7D]/40 rounded-sm p-6 sm:p-8 shadow-xs hover:border-[#B3742D] hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#CDAB7D]/20">
                      <div className="w-12 h-12 rounded-sm bg-[#F8F5EF] flex items-center justify-center border border-[#CDAB7D]/40 group-hover:bg-[#B3742D] transition-colors">
                        <IconComponent className="w-6 h-6 text-[#B3742D] group-hover:text-[#FFFFFF] transition-colors" />
                      </div>
                      <span className="font-mono font-bold text-xs tracking-widest text-[#B3742D]">
                        0{index + 1}
                      </span>
                    </div>

                    <h3 className="font-serif font-bold text-xl text-[#252525] mb-3">
                      {pillar.title}
                    </h3>

                    <p className="text-sm text-[#5F5F5F] leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#CDAB7D]/20 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#B3742D]" />
                    <span className="text-[11px] uppercase tracking-wider text-[#5F5F5F] font-semibold">
                      FCA-Regulated Standard
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 3: BRAND VALUES - WHAT WE STAND FOR */}
      <section className="py-16 md:py-24 bg-[#F8F5EF] border-b border-[#CDAB7D]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FFFFFF] border border-[#CDAB7D]/50 rounded-sm mb-3">
              <span className="text-xs uppercase tracking-widest text-[#B3742D] font-bold">
                CORE ETHOS
              </span>
            </div>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-[#252525] tracking-tight">
              What We Stand For
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#5F5F5F] leading-relaxed">
              Uncompromising values that shape our advisory relationships and portfolio execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {BRAND_VALUES.map((val, idx) => {
              const ValIcon = valueIcons[idx % valueIcons.length];
              return (
                <div
                  key={val.id}
                  id={`brand-val-${val.id}`}
                  className="bg-[#FFFFFF] border border-[#CDAB7D]/40 rounded-sm p-6 sm:p-7 shadow-xs flex flex-col justify-between hover:border-[#B3742D] transition-colors"
                >
                  <div>
                    <div className="w-10 h-10 rounded-sm bg-[#F8F5EF] border border-[#CDAB7D]/40 flex items-center justify-center mb-5">
                      <ValIcon className="w-5 h-5 text-[#B3742D]" />
                    </div>

                    <h3 className="font-serif font-bold text-2xl text-[#252525] mb-2">
                      {val.title}
                    </h3>

                    <p className="text-xs font-semibold text-[#B3742D] mb-3 leading-snug">
                      {val.tagline}
                    </p>

                    <p className="text-xs text-[#5F5F5F] leading-relaxed">
                      {val.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#CDAB7D]/20 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#B3742D]" />
                    <span className="text-[10px] uppercase font-mono tracking-widest text-[#5F5F5F]">
                      Institutional Principle
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
