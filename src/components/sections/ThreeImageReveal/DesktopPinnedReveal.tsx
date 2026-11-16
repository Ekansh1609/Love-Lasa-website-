"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { registerGSAP } from "@/lib/gsap";
import { IMAGES } from "@/config/images";

export function DesktopPinnedReveal() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pinTargetRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const leftPanelRef = useRef<HTMLDivElement>(null);
  const centerPanelRef = useRef<HTMLDivElement>(null);
  const rightPanelRef = useRef<HTMLDivElement>(null);
  const indicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const { gsap } = registerGSAP();

    // Respect prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const mm = gsap.matchMedia();

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
          end: "+=170%",
          scrub: 1.1,
          anticipatePin: 1,
        },
      });

      // Initial visual states
      gsap.set([leftPanelRef.current, rightPanelRef.current], {
        y: 140,
        opacity: 0,
        scale: 0.95,
      });
      gsap.set(centerPanelRef.current, {
        y: 200,
        opacity: 0,
        scale: 0.91,
      });
      if (indicatorRef.current) {
        gsap.set(indicatorRef.current, { opacity: 0, y: 10 });
      }

      // Timeline Sequence
      tl
        // 1. Background subtly softens to warm beige tone
        .to(
          backdropRef.current,
          {
            backgroundColor: "#F4EFEA",
            duration: 0.4,
            ease: "power2.out",
          },
          0
        )
        // 2. Heading title settles into focal view
        .to(
          headerRef.current,
          {
            y: -10,
            opacity: 0.9,
            duration: 0.35,
            ease: "power2.out",
          },
          0
        )
        // 3. Center lead panel (1.18fr) emerges first with authority
        .to(
          centerPanelRef.current,
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.65,
            ease: "power3.out",
          },
          0.1
        )
        // 4. Staggered reveal of left panel then right panel
        .to(
          leftPanelRef.current,
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.6,
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
            duration: 0.6,
            ease: "power3.out",
          },
          0.32
        )
        // 5. Sequence indicator fades in
        .to(
          indicatorRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.35,
            ease: "power2.out",
          },
          0.45
        )
        // 6. Brief hold: all three images remain visible and locked in view before release
        .to({}, { duration: 0.6 });
    });

    return () => {
      mm.revert();
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full bg-[#FAF8F5]">
      {/* Pinned Screen Viewport */}
      <div
        ref={pinTargetRef}
        className="relative w-full h-screen min-h-[720px] flex flex-col justify-between py-12 xl:py-16 px-6 md:px-12 lg:px-16 overflow-hidden"
      >
        {/* Softening Backdrop */}
        <div
          ref={backdropRef}
          aria-hidden="true"
          className="absolute inset-0 bg-[#FAF8F5] pointer-events-none transition-colors duration-700"
        />

        {/* Section Header */}
        <div
          ref={headerRef}
          className="relative z-10 max-w-3xl mx-auto text-center pt-4"
        >
          <span className="text-[10px] xl:text-[11px] uppercase tracking-[0.28em] text-[#5E5B56] block mb-2">
            Visual Story • Tripartite Form
          </span>
          <h2 className="font-serif text-3xl xl:text-5xl tracking-[0.03em] font-light text-[#191817]">
            The Threefold Form
          </h2>
          <p className="mt-2 text-xs xl:text-sm text-[#5E5B56] font-light max-w-md mx-auto leading-relaxed">
            A controlled exploration of silhouette, texture, and architectural drape.
          </p>
        </div>

        {/* 1fr / 1.18fr / 1fr Composition */}
        <div className="relative z-10 w-full max-w-[1440px] mx-auto grid grid-cols-[1fr_1.18fr_1fr] gap-6 xl:gap-10 items-center justify-center my-auto">
          {/* Panel 1: Left (1fr) */}
          <div
            ref={leftPanelRef}
            className="group relative w-full aspect-[3/4] overflow-hidden bg-[#EFE9E0] border border-[#E5DFD3] shadow-xs"
          >
            <Image
              src={IMAGES.pinnedReveal.left.src}
              alt={IMAGES.pinnedReveal.left.alt}
              fill
              sizes="30vw"
              className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-85" />
            <div className="absolute bottom-5 left-5 right-5 text-white">
              <span className="text-[10px] tracking-[0.22em] uppercase text-white/80 block mb-1">
                {IMAGES.pinnedReveal.left.caption}
              </span>
              <p className="font-serif text-lg xl:text-xl font-light tracking-wide">
                Fluid Silk Silhouette
              </p>
            </div>
          </div>

          {/* Panel 2: Center Lead (1.18fr) */}
          <div
            ref={centerPanelRef}
            className="group relative w-full aspect-[3/4] overflow-hidden bg-[#EFE9E0] border border-[#E5DFD3] shadow-md"
          >
            <Image
              src={IMAGES.pinnedReveal.center.src}
              alt={IMAGES.pinnedReveal.center.alt}
              fill
              priority
              sizes="38vw"
              className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent opacity-90" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <div className="flex items-center space-x-2 mb-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D32F2F]" />
                <span className="text-[10px] tracking-[0.22em] uppercase text-white/90">
                  {IMAGES.pinnedReveal.center.caption}
                </span>
              </div>
              <p className="font-serif text-xl xl:text-2xl font-light tracking-wide">
                Sculptural Evening Trench
              </p>
            </div>
          </div>

          {/* Panel 3: Right (1fr) */}
          <div
            ref={rightPanelRef}
            className="group relative w-full aspect-[3/4] overflow-hidden bg-[#EFE9E0] border border-[#E5DFD3] shadow-xs"
          >
            <Image
              src={IMAGES.pinnedReveal.right.src}
              alt={IMAGES.pinnedReveal.right.alt}
              fill
              sizes="30vw"
              className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-85" />
            <div className="absolute bottom-5 left-5 right-5 text-white">
              <span className="text-[10px] tracking-[0.22em] uppercase text-white/80 block mb-1">
                {IMAGES.pinnedReveal.right.caption}
              </span>
              <p className="font-serif text-lg xl:text-xl font-light tracking-wide">
                Tactile Weave & Cut
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Sequence Indicator */}
        <div
          ref={indicatorRef}
          className="relative z-10 flex items-center justify-center space-x-6 text-[10px] uppercase tracking-[0.24em] text-[#8E8A83] pb-2"
        >
          <span>01 / Form</span>
          <span className="w-8 h-[1px] bg-[#E5DFD3]" />
          <span>02 / Presence</span>
          <span className="w-8 h-[1px] bg-[#E5DFD3]" />
          <span>03 / Detail</span>
        </div>
      </div>
    </div>
  );
}
