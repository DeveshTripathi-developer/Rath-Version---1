'use client';

import React from 'react';
import { APPROACH_STAGES, CLIENT_JOURNEY_STEPS } from '@/lib/data';
import { Compass, CheckCircle2, ArrowRight, ShieldCheck, ChevronRight, HelpCircle } from 'lucide-react';

interface OurApproachSectionProps {
  onOpenConsultation: () => void;
}

export function OurApproachSection({ onOpenConsultation }: OurApproachSectionProps) {
  return (
    <section id="our-approach" className="bg-[#FFFFFF] border-b border-[#CDAB7D]/30">
      {/* 1. HERO BANNER */}
      <div className="py-16 md:py-24 bg-[#F8F5EF] border-b border-[#CDAB7D]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-sm bg-[#FFFFFF] border border-[#CDAB7D]/50">
              <Compass className="w-3.5 h-3.5 text-[#B3742D]" />
              <span className="text-xs uppercase tracking-widest text-[#B3742D] font-bold">
                SYSTEMATIC METHODOLOGY
              </span>
            </div>

            <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-[#252525] tracking-tight leading-tight">
              A process built in India over two decades.{' '}
              <span className="text-[#B3742D] block sm:inline">
                Delivered here, for the first time, by a UK team.
              </span>
            </h2>

            {/* Core Rule Callout */}
            <div className="mt-8 p-6 sm:p-8 bg-[#FFFFFF] border-2 border-[#CDAB7D]/60 rounded-sm shadow-xs max-w-3xl mx-auto text-left">
              <span className="text-xs font-mono uppercase tracking-widest text-[#B3742D] font-bold block mb-2">
                THE FOUNDATIONAL WEALTH PRINCIPLE
              </span>
              <p className="font-serif italic text-lg sm:text-xl text-[#252525] leading-relaxed">
                “Every investment should have a defined job. If a pound in your portfolio cannot answer &lsquo;what is this for,&rsquo; it has not been properly structured yet.”
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 2. THE 4-STAGE PROCESS */}
      <div className="py-16 md:py-24 bg-[#FFFFFF] border-b border-[#CDAB7D]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase font-mono tracking-widest text-[#B3742D] font-bold block mb-2">
              THE AR WEALTH FRAMEWORK
            </span>
            <h3 className="font-serif font-bold text-3xl sm:text-4xl text-[#252525] tracking-tight">
              The 4-Stage Wealth Process
            </h3>
            <p className="mt-4 text-base text-[#5F5F5F] leading-relaxed">
              A repeatable, mathematically grounded discipline applied across every client engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {APPROACH_STAGES.map((stage) => (
              <div
                key={stage.number}
                id={`approach-stage-${stage.number}`}
                className="bg-[#FFFFFF] border border-[#CDAB7D]/40 rounded-sm p-6 sm:p-7 shadow-xs flex flex-col justify-between hover:border-[#B3742D] transition-colors group"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-[#CDAB7D]/20 pb-4 mb-5">
                    <span className="font-mono text-xl font-bold text-[#B3742D]">
                      {stage.number}
                    </span>
                    <span className="font-serif font-bold text-lg text-[#252525]">
                      {stage.name}
                    </span>
                  </div>

                  <p className="text-xs font-semibold text-[#B3742D] mb-3 leading-snug">
                    {stage.tagline}
                  </p>

                  <p className="text-xs text-[#5F5F5F] leading-relaxed">
                    {stage.details}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#CDAB7D]/20 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#B3742D]" />
                  <span className="text-[10px] uppercase font-mono tracking-widest text-[#5F5F5F]">
                    Stage Protocol
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 3. THE 6-STEP CLIENT JOURNEY */}
      <div className="py-16 md:py-24 bg-[#F8F5EF] border-b border-[#CDAB7D]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase font-mono tracking-widest text-[#B3742D] font-bold block mb-2">
              YOUR ONBOARDING ROADMAP
            </span>
            <h3 className="font-serif font-bold text-3xl sm:text-4xl text-[#252525] tracking-tight">
              The 6-Step Client Journey
            </h3>
            <p className="mt-4 text-base text-[#5F5F5F] leading-relaxed">
              From first confidential inquiry to continuous custody and reporting.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CLIENT_JOURNEY_STEPS.map((step) => (
              <div
                key={step.step}
                id={`journey-step-${step.step}`}
                className="bg-[#FFFFFF] border border-[#CDAB7D]/40 rounded-sm p-6 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-[#CDAB7D]/20 pb-3 mb-4">
                    <span className="text-xs font-mono font-bold text-[#B3742D] px-2 py-0.5 bg-[#F8F5EF] rounded-xs border border-[#CDAB7D]/30">
                      STEP {step.step}
                    </span>
                    <ChevronRight className="w-4 h-4 text-[#CDAB7D]" />
                  </div>

                  <h4 className="font-serif font-bold text-lg text-[#252525] mb-2">
                    {step.title}
                  </h4>

                  <p className="text-xs text-[#5F5F5F] leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-[#CDAB7D]/20 flex items-center gap-1.5 text-[11px] text-[#5F5F5F]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B3742D]" />
                  <span>FCA Fiduciary Milestone</span>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Bar */}
          <div className="mt-12 text-center">
            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center gap-2 bg-[#B3742D] hover:bg-[#7C4C21] text-[#FFFFFF] font-semibold text-sm px-8 py-3.5 rounded-sm shadow-xs transition-colors cursor-pointer"
            >
              <span>Initiate Step 01: Private Introduction</span>
              <ArrowRight className="w-4 h-4 text-[#FFFFFF]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
