'use client';

import React, { useState } from 'react';
import { CLIENT_ARCHETYPES, ClientArchetype } from '@/lib/data';
import { Users, CheckCircle, ArrowRight, ShieldCheck, HelpCircle } from 'lucide-react';

interface WhoWeHelpProps {
  onOpenConsultation: () => void;
}

export function WhoWeHelp({ onOpenConsultation }: WhoWeHelpProps) {
  const [selectedArchetype, setSelectedArchetype] = useState<ClientArchetype>(
    CLIENT_ARCHETYPES[0]
  );

  return (
    <section id="who-we-help" className="py-16 md:py-24 bg-[#FFFFFF] border-b border-[#CDAB7D]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HERO BANNER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F8F5EF] border border-[#CDAB7D]/50 rounded-sm mb-3">
            <Users className="w-3.5 h-3.5 text-[#B3742D]" />
            <span className="text-xs uppercase tracking-widest text-[#B3742D] font-bold">
              TAILORED PRIVATE MANDATES
            </span>
          </div>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-[#252525] tracking-tight">
            Find the description closest to yours.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#5F5F5F] leading-relaxed">
            Wealth rarely fits one template. These are the situations we see most often among the families and individuals who come to us.
          </p>
        </div>

        {/* 6 Archetype Selection Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {CLIENT_ARCHETYPES.map((arch, idx) => {
            const isSelected = selectedArchetype.id === arch.id;
            return (
              <button
                key={arch.id}
                id={`archetype-btn-${arch.id}`}
                onClick={() => setSelectedArchetype(arch)}
                className={`text-left p-6 sm:p-7 rounded-sm border transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#F8F5EF] border-2 border-[#B3742D] shadow-sm'
                    : 'bg-[#FFFFFF] border-[#CDAB7D]/40 hover:border-[#B3742D]/70 hover:bg-[#F8F5EF]/50 shadow-2xs'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between border-b border-[#CDAB7D]/20 pb-3 mb-4">
                    <span className="font-mono text-xs font-bold text-[#B3742D]">
                      0{idx + 1}
                    </span>
                    <span className="text-[10px] uppercase font-mono tracking-widest text-[#5F5F5F]">
                      Private Focus
                    </span>
                  </div>

                  <h3 className="font-serif font-bold text-xl text-[#252525] mb-2">
                    {arch.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#B3742D] mb-3">
                    {arch.subtitle}
                  </p>
                  <p className="text-xs text-[#5F5F5F] leading-relaxed line-clamp-3">
                    {arch.overview}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-[#CDAB7D]/20 flex items-center justify-between text-xs font-semibold text-[#252525]">
                  <span className={isSelected ? 'text-[#B3742D]' : 'text-[#5F5F5F]'}>
                    {isSelected ? 'Viewing Diagnostic' : 'Click to View Diagnostic'}
                  </span>
                  <ArrowRight
                    className={`w-4 h-4 transition-transform ${
                      isSelected ? 'text-[#B3742D] translate-x-1' : 'text-[#CDAB7D]'
                    }`}
                  />
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Archetype Diagnostic Deep-Dive Card */}
        <div className="bg-[#F8F5EF] border-2 border-[#CDAB7D]/60 rounded-sm p-6 sm:p-10 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Overview & Key Challenges */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#B3742D] font-bold block mb-1">
                  DETAILED SITUATION ANALYSIS
                </span>
                <h3 className="font-serif font-bold text-2xl sm:text-3xl text-[#252525]">
                  {selectedArchetype.title}
                </h3>
                <p className="text-sm font-medium text-[#B3742D] mt-1">
                  {selectedArchetype.subtitle}
                </p>
                <p className="mt-3 text-sm text-[#5F5F5F] leading-relaxed">
                  {selectedArchetype.overview}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#252525] mb-3 flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-[#B3742D]" />
                  <span>Key Specific Requirements We Address:</span>
                </h4>
                <ul className="space-y-2.5">
                  {selectedArchetype.needs.map((need, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-[#5F5F5F]">
                      <CheckCircle className="w-4 h-4 text-[#B3742D] shrink-0 mt-0.5" />
                      <span className="leading-normal">{need}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Solution & Action Box */}
            <div className="lg:col-span-5 bg-[#FFFFFF] border border-[#CDAB7D]/40 rounded-sm p-6 sm:p-7 space-y-5 shadow-xs">
              <div className="border-b border-[#CDAB7D]/30 pb-4">
                <span className="text-xs font-mono uppercase tracking-wider text-[#5F5F5F] block mb-1">
                  Recommended Approach
                </span>
                <p className="text-xs text-[#252525] font-medium leading-relaxed">
                  {selectedArchetype.solution}
                </p>
              </div>

              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#B3742D] font-bold block mb-1">
                  Primary Deliverable
                </span>
                <p className="text-xs font-semibold text-[#252525] bg-[#F8F5EF] p-3 rounded-sm border border-[#CDAB7D]/30">
                  {selectedArchetype.keyDeliverable}
                </p>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenConsultation}
                  className="w-full bg-[#B3742D] hover:bg-[#7C4C21] text-[#FFFFFF] text-xs font-semibold py-3 rounded-sm transition-colors flex items-center justify-center gap-2 shadow-xs cursor-pointer"
                >
                  <span>Request Introduction for This Profile</span>
                  <ArrowRight className="w-4 h-4 text-[#FFFFFF]" />
                </button>
              </div>

              <div className="flex items-center gap-1.5 text-[11px] text-[#5F5F5F]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#B3742D]" />
                <span>Strictly confidential FCA-governed discussion</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
