'use client';

import React, { useState } from 'react';
import { LEADERSHIP, LeadershipMember } from '@/lib/data';
import { ShieldCheck, Award, X, Quote, Landmark, ExternalLink, ChevronRight, GraduationCap } from 'lucide-react';

export function AdvisorSpotlight() {
  const [selectedMember, setSelectedMember] = useState<LeadershipMember | null>(null);

  const ukLeaders = LEADERSHIP.filter((m) => m.category === 'uk-onshore');
  const groupLeaders = LEADERSHIP.filter((m) => m.category === 'group-leadership');

  return (
    <section id="leadership" className="py-16 md:py-24 bg-[#FFFFFF] border-b border-[#CDAB7D]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HERO BANNER & ACCOUNTABILITY STATEMENT */}
        <div className="text-center max-w-4xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-sm bg-[#F8F5EF] border border-[#CDAB7D]/50">
            <Landmark className="w-3.5 h-3.5 text-[#B3742D]" />
            <span className="text-xs uppercase tracking-widest text-[#B3742D] font-bold">
              ESTABLISHED STEWARDSHIP
            </span>
          </div>

          <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-[#252525] tracking-tight">
            Established track record now available to UK investors.{' '}
            <span className="text-[#B3742D] block sm:inline">
              A process that isn&apos;t new at all.
            </span>
          </h2>

          <div className="mt-6 p-4 sm:p-5 bg-[#F8F5EF] border border-[#CDAB7D]/40 rounded-sm text-xs sm:text-sm text-[#5F5F5F] leading-relaxed max-w-3xl mx-auto">
            <span className="font-bold text-[#252525]">Direct FCA Accountability: </span>
            Anand Rathi Wealth UK Limited is the FCA-regulated entity responsible for your relationship, portfolio implementation, and ongoing reporting, backed by Financial Services Compensation Scheme (FSCS) coverage.
          </div>
        </div>

        {/* SECTION 1: ONSHORE UK LEADERSHIP TEAM */}
        <div className="mb-20">
          <div className="flex items-center gap-3 border-b border-[#CDAB7D]/40 pb-3 mb-8">
            <div className="w-2 h-2 rounded-full bg-[#B3742D]" />
            <h3 className="font-serif font-bold text-2xl text-[#252525]">
              Onshore UK Leadership Team
            </h3>
            <span className="text-xs text-[#5F5F5F] font-mono ml-auto">
              London Headquarters • Octagon Point
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ukLeaders.map((leader) => (
              <div
                key={leader.id}
                id={`leader-card-${leader.id}`}
                className="bg-[#F8F5EF] border-2 border-[#CDAB7D]/60 rounded-sm p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:border-[#B3742D] transition-colors"
              >
                <div>
                  <div className="flex flex-wrap items-start justify-between gap-2 border-b border-[#CDAB7D]/30 pb-4 mb-5">
                    <div>
                      <h4 className="font-serif font-bold text-2xl text-[#252525]">
                        {leader.name}
                      </h4>
                      <p className="text-xs font-semibold text-[#B3742D] uppercase tracking-wider mt-0.5">
                        {leader.role}
                      </p>
                    </div>
                    <span className="px-2.5 py-1 bg-[#FFFFFF] text-[11px] font-mono font-medium text-[#252525] border border-[#CDAB7D]/40 rounded-sm">
                      {leader.experience}
                    </span>
                  </div>

                  <p className="text-sm text-[#5F5F5F] leading-relaxed mb-6">
                    {leader.bioSummary}
                  </p>

                  {/* Qualifications Pill List */}
                  <div className="space-y-2 mb-6">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#252525] block">
                      Credentials & Education:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {leader.qualifications.map((q, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#FFFFFF] border border-[#CDAB7D]/30 text-xs text-[#252525] rounded-xs font-medium"
                        >
                          <GraduationCap className="w-3.5 h-3.5 text-[#B3742D]" />
                          <span>{q}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#CDAB7D]/30 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedMember(leader)}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#B3742D] hover:text-[#7C4C21] transition-colors cursor-pointer"
                  >
                    <span>Read Executive Profile</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                  <span className="text-[11px] text-[#5F5F5F]">City of London</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 2: GROUP LEADERSHIP */}
        <div>
          <div className="flex items-center gap-3 border-b border-[#CDAB7D]/40 pb-3 mb-8">
            <div className="w-2 h-2 rounded-full bg-[#B3742D]" />
            <h3 className="font-serif font-bold text-2xl text-[#252525]">
              Global Group Leadership
            </h3>
            <span className="text-xs text-[#5F5F5F] font-mono ml-auto">
              $11.16B AUM • 30+ Years Pedigree
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {groupLeaders.map((leader) => (
              <div
                key={leader.id}
                id={`group-leader-${leader.id}`}
                className="bg-[#FFFFFF] border border-[#CDAB7D]/40 rounded-sm p-6 flex flex-col justify-between shadow-2xs hover:border-[#B3742D] transition-colors"
              >
                <div>
                  <div className="border-b border-[#CDAB7D]/20 pb-3 mb-4">
                    <h4 className="font-serif font-bold text-lg text-[#252525]">
                      {leader.name}
                    </h4>
                    <p className="text-[11px] font-semibold text-[#B3742D] uppercase tracking-wider">
                      {leader.role}
                    </p>
                  </div>

                  <p className="text-xs text-[#5F5F5F] leading-relaxed mb-4">
                    {leader.bioSummary}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#CDAB7D]/20">
                  <button
                    onClick={() => setSelectedMember(leader)}
                    className="w-full text-left inline-flex items-center justify-between text-xs font-semibold text-[#B3742D] hover:text-[#7C4C21] transition-colors cursor-pointer"
                  >
                    <span>View Biography</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* DETAILED BIOGRAPHY MODAL */}
      {selectedMember && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#252525]/60 backdrop-blur-xs">
          <div className="bg-[#FFFFFF] border-2 border-[#CDAB7D] rounded-sm max-w-2xl w-full p-6 sm:p-8 max-h-[90vh] overflow-y-auto shadow-2xl relative">
            <button
              onClick={() => setSelectedMember(null)}
              className="absolute top-4 right-4 p-2 text-[#5F5F5F] hover:text-[#252525] focus:outline-none cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-6">
              <div className="border-b border-[#CDAB7D]/30 pb-4">
                <span className="text-[10px] uppercase font-mono tracking-widest text-[#B3742D] font-bold block mb-1">
                  {selectedMember.category === 'uk-onshore' ? 'ONSHORE UK LEADERSHIP' : 'GROUP LEADERSHIP'}
                </span>
                <h3 className="font-serif font-bold text-3xl text-[#252525]">
                  {selectedMember.name}
                </h3>
                <p className="text-sm font-semibold text-[#B3742D] mt-0.5">
                  {selectedMember.title}
                </p>
              </div>

              {/* Full Bio Paragraphs */}
              <div className="space-y-3 text-sm text-[#5F5F5F] leading-relaxed">
                {selectedMember.fullBio.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              {/* Focus Areas */}
              <div>
                <h5 className="text-xs font-bold uppercase tracking-wider text-[#252525] mb-2">
                  Areas of Expertise:
                </h5>
                <div className="flex flex-wrap gap-2">
                  {selectedMember.focusAreas.map((fa, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 bg-[#F8F5EF] border border-[#CDAB7D]/30 text-xs text-[#252525] rounded-xs font-medium"
                    >
                      {fa}
                    </span>
                  ))}
                </div>
              </div>

              {/* Quote */}
              <div className="p-4 bg-[#F8F5EF] border-l-4 border-[#B3742D] rounded-r-sm text-xs italic text-[#252525] leading-relaxed flex gap-3">
                <Quote className="w-4 h-4 text-[#B3742D] shrink-0 mt-0.5" />
                <span>{selectedMember.quote}</span>
              </div>

              <div className="pt-2 text-right">
                <button
                  onClick={() => setSelectedMember(null)}
                  className="px-6 py-2.5 bg-[#B3742D] text-[#FFFFFF] text-xs font-semibold rounded-sm hover:bg-[#7C4C21] transition-colors cursor-pointer"
                >
                  Close Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
