'use client';

import React, { useState } from 'react';
import { TrendingUp, ArrowRight, Sparkles, Scale } from 'lucide-react';

interface CompoundingIllustrationProps {
  onOpenConsultation: () => void;
}

export function CompoundingIllustration({ onOpenConsultation }: CompoundingIllustrationProps) {
  const [activeHorizon, setActiveHorizon] = useState<'5' | '10' | '20'>('10');

  const comparisonData = {
    '5': {
      years: 5,
      rate8: '£1.47m',
      rate10: '£1.61m',
      diff: '£140,000',
      description: 'Over a 5-year medium horizon, disciplined fund selection and currency hedging generate a meaningful capital edge.',
    },
    '10': {
      years: 10,
      rate8: '£2.16m',
      rate10: '£2.59m',
      diff: '£435,000',
      description: 'Over a decade, the compounding spread widens drastically—delivering near half a million pounds in additional private wealth.',
    },
    '20': {
      years: 20,
      rate8: '£4.66m',
      rate10: '£6.73m',
      diff: '£2,070,000',
      description: 'Over two decades across generations, a 2% annual alpha generates more than £2.07 million in incremental legacy capital.',
    },
  };

  const current = comparisonData[activeHorizon];

  return (
    <section className="py-16 md:py-24 bg-[#FFFFFF] border-b border-[#CDAB7D]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F8F5EF] border border-[#CDAB7D]/50 rounded-sm mb-3">
            <TrendingUp className="w-3.5 h-3.5 text-[#B3742D]" />
            <span className="text-xs uppercase tracking-widest text-[#B3742D] font-bold">
              MATHEMATICAL COMPOUNDING
            </span>
          </div>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-[#252525] tracking-tight">
            Why a small annual difference matters over time
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#5F5F5F] leading-relaxed">
            Hypothetical illustration showing how a 2 percentage point difference in annual growth compounds on a £1,000,000 portfolio (excluding fees, tax, and inflation).
          </p>
        </div>

        {/* Horizon Filter Tabs */}
        <div className="flex justify-center gap-3 mb-10">
          {(['5', '10', '20'] as const).map((h) => (
            <button
              key={h}
              onClick={() => setActiveHorizon(h)}
              className={`px-6 py-2.5 text-sm font-semibold rounded-sm border transition-all cursor-pointer ${
                activeHorizon === h
                  ? 'bg-[#B3742D] text-[#FFFFFF] border-[#B3742D] shadow-xs'
                  : 'bg-[#F8F5EF] text-[#252525] border-[#CDAB7D]/40 hover:bg-[#FFFFFF] hover:text-[#B3742D]'
              }`}
            >
              {h} Years Horizon
            </button>
          ))}
        </div>

        {/* Comparison Grid & Highlight Card */}
        <div className="max-w-4xl mx-auto bg-[#F8F5EF] border-2 border-[#CDAB7D]/60 rounded-sm p-6 sm:p-10 shadow-xs">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Left Rates Comparison */}
            <div className="md:col-span-7 space-y-5">
              <div className="flex items-center justify-between border-b border-[#CDAB7D]/30 pb-3">
                <span className="text-xs font-mono uppercase tracking-wider text-[#5F5F5F]">
                  Starting Capital: £1,000,000
                </span>
                <span className="text-xs font-mono font-bold text-[#B3742D]">
                  {current.years}-Year Projection
                </span>
              </div>

              {/* 8% bar */}
              <div className="bg-[#FFFFFF] border border-[#CDAB7D]/30 p-4 rounded-sm">
                <div className="flex justify-between text-xs mb-1">
                  <span className="font-semibold text-[#5F5F5F]">Standard Portfolio Growth (8.0% p.a.)</span>
                  <span className="font-serif font-bold text-base text-[#252525]">{current.rate8}</span>
                </div>
                <div className="w-full h-2.5 bg-[#F8F5EF] rounded-full overflow-hidden border border-[#CDAB7D]/20">
                  <div className="h-full bg-[#CDAB7D]" style={{ width: activeHorizon === '5' ? '70%' : activeHorizon === '10' ? '60%' : '50%' }} />
                </div>
              </div>

              {/* 10% bar */}
              <div className="bg-[#FFFFFF] border-2 border-[#B3742D] p-4 rounded-sm shadow-2xs">
                <div className="flex justify-between text-xs mb-1">
                  <span className="font-bold text-[#252525] flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#B3742D]" />
                    Optimised Active Allocation (10.0% p.a.)
                  </span>
                  <span className="font-serif font-bold text-lg text-[#B3742D]">{current.rate10}</span>
                </div>
                <div className="w-full h-2.5 bg-[#F8F5EF] rounded-full overflow-hidden border border-[#CDAB7D]/20">
                  <div className="h-full bg-[#B3742D]" style={{ width: activeHorizon === '5' ? '85%' : activeHorizon === '10' ? '80%' : '90%' }} />
                </div>
              </div>

              <p className="text-xs text-[#5F5F5F] leading-relaxed pt-1">
                {current.description}
              </p>
            </div>

            {/* Right Delta Highlight Box */}
            <div className="md:col-span-5 bg-[#FFFFFF] border border-[#CDAB7D]/40 rounded-sm p-6 text-center space-y-4 shadow-xs">
              <div className="w-12 h-12 rounded-full bg-[#F8F5EF] border border-[#CDAB7D]/40 flex items-center justify-center mx-auto text-[#B3742D]">
                <Scale className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs uppercase font-mono tracking-wider text-[#5F5F5F] block mb-1">
                  Compound Delta at Year {current.years}
                </span>
                <div className="font-serif font-bold text-3xl sm:text-4xl text-[#B3742D]">
                  +{current.diff}
                </div>
                <span className="text-[11px] text-[#5F5F5F] block mt-1">
                  Difference in Net Family Capital
                </span>
              </div>

              <div className="pt-3 border-t border-[#CDAB7D]/20">
                <button
                  onClick={onOpenConsultation}
                  className="w-full bg-[#B3742D] hover:bg-[#7C4C21] text-[#FFFFFF] text-xs font-semibold py-2.5 rounded-sm transition-colors flex items-center justify-center gap-1.5 shadow-2xs cursor-pointer"
                >
                  <span>Model Your Family Portfolio</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Footnote */}
          <div className="mt-8 pt-4 border-t border-[#CDAB7D]/30 text-[11px] text-[#5F5F5F] text-center">
            Note: Figures are for mathematical illustration purposes only. Past performance does not guarantee future results. Capital is at risk.
          </div>
        </div>
      </div>
    </section>
  );
}
