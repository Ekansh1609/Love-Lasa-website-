"use client";

import React from "react";
import Image from "next/image";
import { Header } from "@/components/layout/Header";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { IMAGES } from "@/config/images";
import { ArrowDown, CheckCircle2 } from "lucide-react";

export default function HeaderVerificationPage() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#191817] font-sans selection:bg-[#191817] selection:text-[#FAF8F5]">
      {/* ========================================================================= */}
      {/* 1. THE WEBSITE HEADER (Subject of this task)                              */}
      {/* ========================================================================= */}
      <Header />

      {/* ========================================================================= */}
      {/* 2. TOP HERO TEST CANVAS (Validates Transparent Header over Hero Imagery)  */}
      {/* ========================================================================= */}
      <section className="relative w-full h-[100vh] min-h-[680px] flex items-center justify-center overflow-hidden bg-[#191817] text-white">
        {/* Background Image simulating campaign hero */}
        <div className="absolute inset-0 z-0">
          <Image
            src={IMAGES.hero.src}
            alt={IMAGES.hero.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center scale-105 opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#191817]/90 via-[#191817]/30 to-black/40" />
        </div>

        {/* Hero Content for Testing Header */}
        <div className="relative z-10 text-center max-w-3xl px-4 sm:px-6">
          <div className="inline-flex items-center space-x-2 mb-4">
            <Badge dot variant="accent">
              Header Component Inspection
            </Badge>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-[0.03em] leading-tight">
            Transparent Header State
          </h1>

          <p className="mt-4 text-xs sm:text-sm text-white/80 max-w-xl mx-auto font-light leading-relaxed">
            The header above is currently rendering in its <strong>transparent hero mode</strong> with white typography and icons.
            Scroll down to inspect the transition into the warm ivory frosted background.
          </p>

          <div className="mt-10 inline-flex flex-col items-center space-y-2 text-xs uppercase tracking-[0.22em] text-white/70">
            <span>Scroll down to test transition</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. SCROLLED VERIFICATION CANVAS (Validates Scrolled Frosted Ivory Header) */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-28 bg-[#FAF8F5] border-t border-[#E5DFD3]">
        <Container size="default">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <span className="text-[10px] uppercase tracking-[0.26em] text-[#5E5B56] block mb-2">
              Scroll State Active
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-light text-[#191817]">
              Frosted Ivory Header Transition
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-[#5E5B56] font-light leading-relaxed">
              Notice how the header transitioned into <code>bg-[#FAF8F5]/90</code> with <code>backdrop-blur-md</code>,
              a subtle hairline bottom border (<code>#E5DFD3</code>), and deep charcoal text (<code>#191817</code>).
            </p>
          </div>

          {/* Verification Criteria Checklist */}
          <div className="max-w-3xl mx-auto border border-[#E5DFD3] bg-[#F4EFEA] p-6 sm:p-10 space-y-6">
            <h3 className="text-xs uppercase tracking-[0.2em] text-[#8E8A83] border-b border-[#E5DFD3] pb-3">
              Header Specification Checklist
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="flex items-start space-x-3 p-3 bg-[#FAF8F5] border border-[#E5DFD3]/80">
                <CheckCircle2 className="w-4 h-4 text-[#D32F2F] flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#191817] block font-medium">Desktop Layout (1280px, 1440px)</strong>
                  <span className="text-[#5E5B56] text-[11px]">
                    Love Lasa wordmark on left; Shop, The Edit, Our World, Notes in center; Search, Account, Bag on right.
                  </span>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-3 bg-[#FAF8F5] border border-[#E5DFD3]/80">
                <CheckCircle2 className="w-4 h-4 text-[#D32F2F] flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#191817] block font-medium">Mobile Layout (375px, 390px, 768px)</strong>
                  <span className="text-[#5E5B56] text-[11px]">
                    Hamburger menu on left; centered Love Lasa wordmark; Search & Bag on right without overflow.
                  </span>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-3 bg-[#FAF8F5] border border-[#E5DFD3]/80">
                <CheckCircle2 className="w-4 h-4 text-[#D32F2F] flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#191817] block font-medium">Slide-in Mobile Drawer</strong>
                  <span className="text-[#5E5B56] text-[11px]">
                    Smooth left drawer with Motion, background scroll lock, close on Esc / X / link click.
                  </span>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-3 bg-[#FAF8F5] border border-[#E5DFD3]/80">
                <CheckCircle2 className="w-4 h-4 text-[#D32F2F] flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#191817] block font-medium">Restrained Vivid Red Accent</strong>
                  <span className="text-[#5E5B56] text-[11px]">
                    Shopping bag counter indicator dot in vivid red (#D32F2F); zero Burgundy or large red blocks.
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Extended Canvas to allow ample scrolling */}
          <div className="mt-16 py-20 text-center border-t border-[#E5DFD3]/60 text-xs text-[#8E8A83]">
            <p className="uppercase tracking-[0.24em]">
              Love Lasa • Header Implementation Ready for Section Rollout
            </p>
          </div>
        </Container>
      </section>
    </div>
  );
}
