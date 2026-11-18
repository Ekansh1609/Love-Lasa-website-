"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { registerGSAP } from "@/lib/gsap";
import { IMAGES } from "@/config/images";

export function PinnedRevealSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pinTargetRef = useRef<HTMLDivElement>(null);
  const leftPanelRef = useRef<HTMLDivElement>(null);
  const centerPanelRef = useRef<HTMLDivElement>(null);
  const rightPanelRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const { gsap } = registerGSAP();

    // Respect user's reduced-motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      // Keep static and fully visible
      return;
    }

    const mm = gsap.matchMedia();

    // DESKTOP: Full cinematic pinned 3-panel reveal sequence
    mm.add("(min-width: 1024px)", () => {
      if (
        !containerRef.current ||
        !pinTargetRef.current ||
        !leftPanelRef.current ||
        !centerPanelRef.current ||
        !rightPanelRef.current
      )
        return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          pin: pinTargetRef.current,
          start: "top top",
          end: "+=160%",
          scrub: 1.2,
          anticipatePin: 1,
        },
      });

      // Initial state
      gsap.set([leftPanelRef.current, rightPanelRef.current], {
        y: 160,
        opacity: 0,
        scale: 0.94,
      });
      gsap.set(centerPanelRef.current, {
        y: 220,
        opacity: 0,
        scale: 0.9,
      });

      // Timeline choreography
      tl
        // 1. Background tone softens & subtle heading fade
        .to(backdropRef.current, {
          backgroundColor: "rgba(244, 239, 234, 0.95)",
          duration: 0.4,
          ease: "power2.out",
        })
        .to(
          headingRef.current,
          {
            opacity: 0.85,
            y: -15,
            duration: 0.4,
            ease: "power2.out",
          },
          0
        )
        // 2. Center hero panel emerges first with commanding presence
        .to(
          centerPanelRef.current,
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.7,
            ease: "power3.out",
          },
          0.1
        )
        // 3. Supporting left & right panels flank into position (1fr / 1.15fr / 1fr balance)
        .to(
          leftPanelRef.current,
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.65,
            ease: "power3.out",
          },
          0.25
        )
        .to(
          rightPanelRef.current,
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.65,
            ease: "power3.out",
          },
          0.3
        )
        // 4. Controlled pause / hold in view while reader absorbs the composition
        .to({}, { duration: 0.5 });
    });

    // MOBILE / TABLET: Fluid sequential scroll reveal (no scroll-jacking or pin-trapping)
    mm.add("(max-width: 1023px)", () => {
      const panels = [
        centerPanelRef.current,
        leftPanelRef.current,
        rightPanelRef.current,
      ].filter(Boolean);

      panels.forEach((panel) => {
        gsap.fromTo(
          panel,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: panel,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    });

    return () => {
      mm.revert();
    };
  }, []);

  return (
    <section
      id="pinned-reveal"
      ref={containerRef}
      className="relative w-full bg-[#FAF8F5] text-[#191817]"
    >
      {/* Pinned Viewport Frame */}
      <div
        ref={pinTargetRef}
        className="relative w-full min-h-screen flex flex-col justify-between py-16 sm:py-20 lg:py-24 px-4 sm:px-6 md:px-10 lg:px-16 overflow-hidden"
      >
        {/* Softening backdrop element */}
        <div
          ref={backdropRef}
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none transition-colors duration-500 bg-[#FAF8F5]"
        />

        {/* Section Header */}
        <div
          ref={headingRef}
          className="relative z-10 max-w-4xl mx-auto text-center mb-10 lg:mb-12"
        >
          <span className="text-[11px] sm:text-xs uppercase tracking-[0.28em] text-[#5E5B56] block mb-3">
            Signature Visual Sequence
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl tracking-[0.03em] font-light leading-tight">
            The Threefold Form
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-[#5E5B56] max-w-lg mx-auto font-light leading-relaxed">
            A controlled exploration of silhouette, texture, and tailored volume.
          </p>
        </div>

        {/* The Three-Image Composition (1fr / 1.15fr / 1fr Desktop Proportion) */}
        <div className="relative z-10 w-full max-w-[1500px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_1.18fr_1fr] gap-6 sm:gap-8 lg:gap-10 items-center justify-center my-auto">
          {/* Panel 1 (Left - Fluid Silk) */}
          <div
            ref={leftPanelRef}
            className="group relative w-full aspect-[3/4] overflow-hidden bg-[#EFE9E0] shadow-sm rounded-none border border-[#E5DFD3]/60"
          >
            <Image
              src={IMAGES.pinnedReveal.left.src}
              alt={IMAGES.pinnedReveal.left.alt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 30vw"
              className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <span className="text-[10px] tracking-[0.2em] uppercase text-white/80 block">
                {IMAGES.pinnedReveal.left.caption}
              </span>
              <p className="font-serif text-base sm:text-lg tracking-wide font-light">
                Fluid Silk Silhouette
              </p>
            </div>
          </div>

          {/* Panel 2 (Center - Sculptural Lead 1.18fr) */}
          <div
            ref={centerPanelRef}
            className="group relative w-full aspect-[3/4] md:col-span-2 lg:col-span-1 overflow-hidden bg-[#EFE9E0] shadow-md rounded-none border border-[#E5DFD3]"
          >
            <Image
              src={IMAGES.pinnedReveal.center.src}
              alt={IMAGES.pinnedReveal.center.alt}
              fill
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 38vw"
              className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-90" />
            <div className="absolute bottom-5 left-5 right-5 text-white">
              <div className="flex items-center space-x-2 mb-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D32F2F]" />
                <span className="text-[10px] tracking-[0.22em] uppercase text-white/90">
                  {IMAGES.pinnedReveal.center.caption}
                </span>
              </div>
              <p className="font-serif text-lg sm:text-2xl tracking-wide font-light">
                Sculptural Evening Trench
              </p>
            </div>
          </div>

          {/* Panel 3 (Right - Raw Texture) */}
          <div
            ref={rightPanelRef}
            className="group relative w-full aspect-[3/4] overflow-hidden bg-[#EFE9E0] shadow-sm rounded-none border border-[#E5DFD3]/60"
          >
            <Image
              src={IMAGES.pinnedReveal.right.src}
              alt={IMAGES.pinnedReveal.right.alt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 30vw"
              className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <span className="text-[10px] tracking-[0.2em] uppercase text-white/80 block">
                {IMAGES.pinnedReveal.right.caption}
              </span>
              <p className="font-serif text-base sm:text-lg tracking-wide font-light">
                Tactile Weave & Cut
              </p>
            </div>
          </div>
        </div>

        {/* Minimal sequence indicator bottom */}
        <div className="relative z-10 flex items-center justify-center space-x-6 text-[10px] uppercase tracking-[0.24em] text-[#8E8A83] mt-8">
          <span>01 / Form</span>
          <span className="w-8 h-[1px] bg-[#E5DFD3]" />
          <span>02 / Presence</span>
          <span className="w-8 h-[1px] bg-[#E5DFD3]" />
          <span>03 / Detail</span>
        </div>
      </div>
    </section>
  );
}
