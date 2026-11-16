"use client";

import React from "react";
import { Header } from "@/components/layout/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import { DiscoverCollectionsSection } from "@/components/sections/DiscoverCollectionsSection";
import { ThreeImageRevealSection } from "@/components/sections/ThreeImageReveal";
import { Container } from "@/components/ui/Container";
import { CheckCircle2 } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#191817] font-sans selection:bg-[#191817] selection:text-[#FAF8F5]">
      {/* Editorial Navigation Header */}
      <Header />

      <main>
        {/* 1. Hero Section (Form in Motion) */}
        <HeroSection />

        {/* 2. Discover Our Collections Section (Rolex-style Atmospheric Reveal & Settle) */}
        <DiscoverCollectionsSection />

        {/* 3. Three-Image Reveal Section (Tripartite Form) */}
        <ThreeImageRevealSection />

        {/* Verification & Continuity Status */}
        <section className="py-20 sm:py-28 bg-[#FAF8F5] border-t border-[#E5DFD3]">
          <Container size="default">
            <div className="max-w-2xl mx-auto text-center mb-12">
              <span className="text-[10px] uppercase tracking-[0.26em] text-[#5E5B56] block mb-2">
                Interaction Verification
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-light text-[#191817]">
                Hero to Collections Transition
              </h2>
              <p className="mt-3 text-xs sm:text-sm text-[#5E5B56] font-light leading-relaxed">
                The Hero naturally transitions into Discover Our Collections via an atmospheric blurred backdrop.
                The three collection cards emerge visually elevated and larger, smoothly settling into the grid.
              </p>
            </div>

            <div className="max-w-3xl mx-auto border border-[#E5DFD3] bg-[#F4EFEA] p-6 sm:p-8 space-y-4 text-xs">
              <div className="flex items-start space-x-3 p-3 bg-[#FAF8F5] border border-[#E5DFD3]/80">
                <CheckCircle2 className="w-4 h-4 text-[#D32F2F] flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#191817] block font-medium">Hero Section ("Form in Motion")</strong>
                  <span className="text-[#5E5B56] text-[11px]">
                    Contemporary Indian Wear tag, Cormorant Garamond display title with italic "in Motion", "Explore the Edit →", and downward scroll cue.
                  </span>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-3 bg-[#FAF8F5] border border-[#E5DFD3]/80">
                <CheckCircle2 className="w-4 h-4 text-[#D32F2F] flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#191817] block font-medium">Rolex-Style Scale Reveal (Desktop 1024px+)</strong>
                  <span className="text-[#5E5B56] text-[11px]">
                    Pinned ScrollTrigger scene, atmospheric blurred backdrop, cards emerge elevated at scale 1.18 with dramatic drop shadow, then smoothly scale down to 1.0 and settle into the 3-column grid before pin releases.
                  </span>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-3 bg-[#FAF8F5] border border-[#E5DFD3]/80">
                <CheckCircle2 className="w-4 h-4 text-[#D32F2F] flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#191817] block font-medium">Responsive Vertical Reveal (Mobile & Tablet)</strong>
                  <span className="text-[#5E5B56] text-[11px]">
                    Preserves the elevation & scale settle interaction on mobile while maintaining continuous, uninterrupted vertical touch scrolling.
                  </span>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>
    </div>
  );
}
