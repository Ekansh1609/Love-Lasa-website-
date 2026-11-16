"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { registerGSAP } from "@/lib/gsap";
import { IMAGES } from "@/config/images";

interface CollectionCardData {
  id: string;
  line1: string;
  line2?: string;
  href: string;
  image: {
    src: string;
    alt: string;
  };
}

const COLLECTIONS: CollectionCardData[] = [
  {
    id: "new-arrivals",
    line1: "NEW",
    line2: "ARRIVALS",
    href: "#new-arrivals",
    image: IMAGES.destinations.newArrivals,
  },
  {
    id: "signature-pieces",
    line1: "SIGNATURE",
    line2: "PIECES",
    href: "#signature-pieces",
    image: IMAGES.destinations.signaturePieces,
  },
  {
    id: "bestsellers",
    line1: "BESTSELLERS",
    href: "#bestsellers",
    image: IMAGES.destinations.bestsellers,
  },
];

export function DiscoverCollectionsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pinTargetRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    const { gsap } = registerGSAP();

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const mm = gsap.matchMedia();

    // =========================================================================
    // DESKTOP (1024px+): Cinematic Pinned Rolex-style Scale & Reveal
    // =========================================================================
    mm.add("(min-width: 1024px)", () => {
      if (!containerRef.current || !pinTargetRef.current) return;

      const validCards = cardsRef.current.filter(Boolean);

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          pin: pinTargetRef.current,
          start: "top top",
          end: "+=140%",
          scrub: 1.1,
          anticipatePin: 1,
        },
      });

      // Initial state: cards start visually elevated & enlarged (scale 1.18, y 90, opacity 0)
      gsap.set(validCards, {
        scale: 1.18,
        y: 90,
        opacity: 0,
        boxShadow: "0 30px 60px -15px rgba(25, 24, 23, 0.35)",
      });
      if (headerRef.current) {
        gsap.set(headerRef.current, { y: 20, opacity: 0 });
      }

      tl
        // 1. Atmospheric backdrop transition connecting from the hero
        .to(
          backdropRef.current,
          {
            backgroundColor: "#FAF8F5",
            duration: 0.35,
            ease: "power2.out",
          },
          0
        )
        // 2. Section heading emerges
        .to(
          headerRef.current,
          {
            y: 0,
            opacity: 1,
            duration: 0.3,
            ease: "power2.out",
          },
          0.05
        )
        // 3. Cards emerge prominently, visually elevated and larger
        .to(
          validCards,
          {
            opacity: 1,
            y: 20,
            duration: 0.45,
            stagger: 0.08,
            ease: "power2.out",
          },
          0.1
        )
        // 4. Smooth scale-down & settle into normal grid layout (Rolex-style smooth settling)
        .to(
          validCards,
          {
            scale: 1,
            y: 0,
            boxShadow: "0 8px 24px -4px rgba(25, 24, 23, 0.08)",
            duration: 0.55,
            stagger: 0.05,
            ease: "power3.out",
          },
          0.35
        )
        // 5. Brief hold so user absorbs the settled 3-card layout before pin releases
        .to({}, { duration: 0.45 });
    });

    // =========================================================================
    // MOBILE & TABLET (<1024px): Same Elevation & Scale Settle, adapted for touch
    // =========================================================================
    mm.add("(max-width: 1023px)", () => {
      const validCards = cardsRef.current.filter(Boolean);

      validCards.forEach((card) => {
        if (!card) return;

        gsap.fromTo(
          card,
          {
            scale: 1.1,
            y: 60,
            opacity: 0,
            boxShadow: "0 25px 45px -10px rgba(25, 24, 23, 0.28)",
          },
          {
            scale: 1,
            y: 0,
            opacity: 1,
            boxShadow: "0 6px 20px -3px rgba(25, 24, 23, 0.07)",
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              end: "top 55%",
              scrub: 0.8,
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
      id="discover-collections"
      ref={containerRef}
      className="relative w-full bg-[#FAF8F5] text-[#191817]"
    >
      {/* Pinned Stage on Desktop / Normal Flow on Mobile */}
      <div
        ref={pinTargetRef}
        className="relative w-full lg:h-screen lg:min-h-[720px] flex flex-col justify-between py-16 sm:py-20 lg:py-20 px-6 sm:px-10 lg:px-16 overflow-hidden"
      >
        {/* Atmospheric Blurred Backdrop visually connecting Hero to Collections */}
        <div
          ref={backdropRef}
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-b from-[#191817]/90 via-[#2C2724]/40 to-[#FAF8F5] pointer-events-none transition-colors duration-700 backdrop-blur-2xl"
        />

        {/* Section Header: DISCOVER OUR COLLECTIONS */}
        <div
          ref={headerRef}
          className="relative z-10 text-center max-w-xl mx-auto mb-10 lg:mb-12 pt-4"
        >
          <h2 className="text-[11px] sm:text-xs uppercase tracking-[0.28em] font-sans font-medium text-[#5E5B56]">
            Discover Our Collections
          </h2>
        </div>

        {/* Three Collection Cards Grid */}
        <div className="relative z-10 w-full max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-8 my-auto">
          {COLLECTIONS.map((col, idx) => (
            <Link
              key={col.id}
              href={col.href}
              ref={(el) => {
                cardsRef.current[idx] = el;
              }}
              className="group relative block aspect-[3/4] sm:aspect-[4/5] lg:aspect-[3/4] w-full overflow-hidden bg-[#EFE9E0] border border-[#E5DFD3] transition-transform duration-500 ease-out will-change-transform"
            >
              {/* Card Image */}
              <Image
                src={col.image.src}
                alt={col.image.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Gradient Vignette at Bottom for Text Contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-85 group-hover:opacity-90 transition-opacity" />

              {/* Text Overlay at Bottom-Left (matching design reference) */}
              <div className="absolute bottom-6 left-6 right-6 text-white flex items-end justify-between">
                <div>
                  <span className="font-serif text-xl sm:text-2xl lg:text-3xl font-light tracking-[0.14em] uppercase leading-tight block">
                    {col.line1}
                  </span>
                  {col.line2 && (
                    <span className="font-serif text-xl sm:text-2xl lg:text-3xl font-light tracking-[0.14em] uppercase leading-tight block">
                      {col.line2}
                    </span>
                  )}
                </div>

                {/* Right Arrow Indicator */}
                <div className="text-white/80 group-hover:text-white transition-colors">
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom Spacing / Subtle Cue on Desktop */}
        <div className="relative z-10 hidden lg:block text-center pt-4">
          <span className="text-[10px] uppercase tracking-[0.24em] text-[#8E8A83]">
            Curated Autumn/Winter 2026
          </span>
        </div>
      </div>
    </section>
  );
}
