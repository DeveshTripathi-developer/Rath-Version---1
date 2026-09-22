'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { MetricsBand } from '@/components/MetricsBand';
import { PhilosophyPillars } from '@/components/PhilosophyPillars';
import { CompoundingIllustration } from '@/components/CompoundingIllustration';
import { WhyIndiaSection } from '@/components/WhyIndiaSection';
import { WhoWeHelp } from '@/components/WhoWeHelp';
import { OurApproachSection } from '@/components/OurApproachSection';
import { AdvisorSpotlight } from '@/components/AdvisorSpotlight';
import { WealthCalculator } from '@/components/WealthCalculator';
import { CallbackAndOffice } from '@/components/CallbackAndOffice';
import { FaqSection } from '@/components/FaqSection';
import { Footer } from '@/components/Footer';
import { ConsultationDrawer } from '@/components/ConsultationDrawer';

export function HomePageClient() {
  const [consultationOpen, setConsultationOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#252525] flex flex-col selection:bg-[#F1E1A6] selection:text-[#252525]">
      {/* 1. Top Sticky Notification Bar and Main Navigation */}
      <Navbar onOpenConsultation={() => setConsultationOpen(true)} />

      <main className="flex-1 w-full">
        {/* Page 1: Hero Section & Pedigree */}
        <HeroSection onOpenConsultation={() => setConsultationOpen(true)} />

        {/* Institutional Scale Metrics Band */}
        <MetricsBand />

        {/* Page 1: 6 Core Pillars & What We Stand For */}
        <PhilosophyPillars />

        {/* Page 1: Compounding Growth Illustration */}
        <CompoundingIllustration onOpenConsultation={() => setConsultationOpen(true)} />

        {/* Page 2: Why India */}
        <WhyIndiaSection onOpenConsultation={() => setConsultationOpen(true)} />

        {/* Page 3: Who We Help (6 Client Archetypes) */}
        <WhoWeHelp onOpenConsultation={() => setConsultationOpen(true)} />

        {/* Page 4: Our Approach (4 Stages & 6 Steps) */}
        <OurApproachSection onOpenConsultation={() => setConsultationOpen(true)} />

        {/* Page 5: Our Story & Leadership (Onshore UK + Group Leadership) */}
        <AdvisorSpotlight />

        {/* Interactive Wealth Calculator */}
        <WealthCalculator onOpenConsultation={() => setConsultationOpen(true)} />

        {/* Page 6: Contact & Private Introduction */}
        <CallbackAndOffice />

        {/* Practical FAQs Section */}
        <FaqSection />
      </main>

      {/* Footer & FCA Regulatory Compliance Disclosures */}
      <Footer />

      {/* Interactive Multi-Step Private Introduction Drawer */}
      <ConsultationDrawer
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
      />
    </div>
  );
}
