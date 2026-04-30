"use client";
import React from "react";
import HeroSection from "@/components/HeroSection";
import AIProductSection from "@/components/AIProductSection";
import TechSection from "@/components/TechSection";
import DataSection from "@/components/DataSection";
import TeamSection from "@/components/TeamSection";
import FinanceSection from "@/components/FinanceSection";

export default function Home() {
  return (
    <div className="bg-slate-900 min-h-screen">
      {/* 1. Hero Section (Top of Homepage) */}
      <HeroSection />

      {/* 2. AI Product Section */}
      <AIProductSection />

      {/* 3. Technology Section */}
      <TechSection />

      {/* 4. Data / Analytics Section */}
      <DataSection />

      {/* 5. Team / Consulting Section */}
      <TeamSection />

      {/* 6. Finance Section */}
      <FinanceSection />
    </div>
  );
}
