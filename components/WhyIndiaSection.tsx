'use client';

import React from 'react';
import { INDIA_MARKET_DRIVERS } from '@/lib/data';
import { TrendingUp, PieChart, ShieldAlert, ArrowRight, DollarSign, Layers } from 'lucide-react';

interface WhyIndiaSectionProps {
  onOpenConsultation: () => void;
}

export function WhyIndiaSection({ onOpenConsultation }: WhyIndiaSectionProps) {
  const principles = [
    {
      id: 'never-on-its-own',
      title: 'Never Look at India on Its Own',
      icon: PieChart,
      description:
        'An India allocation is assessed against your existing equity exposure, concentration, liquidity needs, and risk capacity. We ensure exposure serves a defined purpose within your overarching family balance sheet.',
    },
    {
      id: 'sterling-result',
      title: 'A Sterling Result',
      icon: DollarSign,
      description:
        'Objectives and risk are framed in GBP terms throughout, ensuring performance outcomes are measured in pounds, not rupees. We model currency movements actively to protect your real purchasing power in the UK.',
    },
    {
      id: 'disciplined-mitigation',
      title: 'Disciplined Risk Mitigation',
      icon: ShieldAlert,
      description:
        'Sizing, diversification, fund evaluation, and continuing review prevent market volatility and currency shifts from eroding outcomes. We avoid unhedged concentration or speculative single-stock bets.',
    },
  ];

  return (
    <section id="why-india" className="bg-[#FFFFFF] border-b border-[#CDAB7D]/30 overflow-hidden">
      {/* 1. WHY INDIA HERO BANNER */}
      <div className="py-16 md:py-24 bg-[#F8F5EF] border-b border-[#CDAB7D]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-sm bg-[#FFFFFF] border border-[#CDAB7D]/50">
              <span className="text-xs uppercase tracking-widest text-[#B3742D] font-bold">
                STRATEGIC ALLOCATION
              </span>
            </div>

            <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-[#252525] tracking-tight leading-tight">
              India is a genuine opportunity.{' '}
              <span className="text-[#B3742D] block sm:inline">
                Most UK investors still get the outcome wrong.
              </span>
            </h2>

            <p className="text-base sm:text-lg lg:text-xl text-[#5F5F5F] leading-relaxed font-light max-w-3xl mx-auto">
              Not because the market underperforms, but because currency movements, valuation timing, fund selection, and allocation size are usually left to chance. Get those four right, and India becomes a considered part of a UK portfolio.
            </p>

            <div className="pt-4 flex justify-center">
              <button
                onClick={onOpenConsultation}
                className="bg-[#B3742D] hover:bg-[#7C4C21] text-[#FFFFFF] font-semibold text-sm px-7 py-3 rounded-sm shadow-xs transition-colors flex items-center gap-2 cursor-pointer"
              >
                <span>Discuss India Portfolio Sizing</span>
                <ArrowRight className="w-4 h-4 text-[#FFFFFF]" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 2. SECTION 1: THE 4 STRATEGIC MARKET DRIVERS */}
      <div className="py-16 md:py-24 bg-[#FFFFFF] border-b border-[#CDAB7D]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F8F5EF] border border-[#CDAB7D]/50 rounded-sm mb-3">
              <TrendingUp className="w-3.5 h-3.5 text-[#B3742D]" />
              <span className="text-xs uppercase tracking-widest text-[#B3742D] font-bold">
                STRUCTURAL GROWTH
              </span>
            </div>
            <h3 className="font-serif font-bold text-3xl sm:text-4xl text-[#252525] tracking-tight">
              The 4 Strategic Market Drivers
            </h3>
            <p className="mt-4 text-base text-[#5F5F5F] leading-relaxed">
              Macroeconomic tailwinds transforming India into an indispensable component of global multi-asset portfolios.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {INDIA_MARKET_DRIVERS.map((driver, idx) => (
              <div
                key={driver.id}
                id={`india-driver-${driver.id}`}
                className="bg-[#FFFFFF] border border-[#CDAB7D]/40 rounded-sm p-6 sm:p-7 shadow-xs flex flex-col justify-between hover:border-[#B3742D] hover:-translate-y-1 transition-all duration-200 group"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-[#CDAB7D]/20 pb-4 mb-5">
                    <span className="font-mono text-xs font-bold text-[#B3742D]">
                      DRIVER 0{idx + 1}
                    </span>
                    <span className="text-xs uppercase font-semibold text-[#5F5F5F]">
                      {driver.sub}
                    </span>
                  </div>

                  <div className="font-serif font-bold text-3xl text-[#B3742D] mb-1">
                    {driver.stat}
                  </div>

                  <h4 className="font-serif font-bold text-xl text-[#252525] mb-3">
                    {driver.title}
                  </h4>

                  <p className="text-xs text-[#5F5F5F] leading-relaxed">
                    {driver.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#CDAB7D]/20 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#B3742D]" />
                  <span className="text-[11px] uppercase tracking-wider text-[#5F5F5F] font-semibold">
                    Structural Alpha
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 3. SECTION 2: PORTFOLIO PRINCIPLES */}
      <div className="py-16 md:py-24 bg-[#F8F5EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FFFFFF] border border-[#CDAB7D]/50 rounded-sm mb-3">
              <Layers className="w-3.5 h-3.5 text-[#B3742D]" />
              <span className="text-xs uppercase tracking-widest text-[#B3742D] font-bold">
                ALLOCATION RIGOUR
              </span>
            </div>
            <h3 className="font-serif font-bold text-3xl sm:text-4xl text-[#252525] tracking-tight">
              Our Core Portfolio Principles
            </h3>
            <p className="mt-4 text-base text-[#5F5F5F] leading-relaxed">
              How we protect UK family capital from currency erosion, unmanaged volatility, and timing traps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {principles.map((p) => {
              const IconComp = p.icon;
              return (
                <div
                  key={p.id}
                  id={`principle-${p.id}`}
                  className="bg-[#FFFFFF] border border-[#CDAB7D]/40 rounded-sm p-7 shadow-xs flex flex-col justify-between hover:border-[#B3742D] transition-colors"
                >
                  <div>
                    <div className="w-12 h-12 rounded-sm bg-[#F8F5EF] border border-[#CDAB7D]/40 flex items-center justify-center mb-5 text-[#B3742D]">
                      <IconComp className="w-6 h-6" />
                    </div>

                    <h4 className="font-serif font-bold text-xl text-[#252525] mb-3">
                      {p.title}
                    </h4>

                    <p className="text-xs sm:text-sm text-[#5F5F5F] leading-relaxed">
                      {p.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#CDAB7D]/20 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#B3742D]" />
                    <span className="text-[10px] uppercase font-mono tracking-widest text-[#5F5F5F]">
                      GBP-Framed Fiduciary Standard
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
