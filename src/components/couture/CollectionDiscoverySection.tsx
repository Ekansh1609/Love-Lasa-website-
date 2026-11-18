'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { useCouture } from '@/context/CoutureContext';
import { registerGSAP } from '@/lib/gsap';

export function CollectionDiscoverySection() {
  const { mediaSlots } = useCouture();
  const sectionRef = useRef<HTMLElement>(null);
  const card1InnerRef = useRef<HTMLDivElement>(null);
  const card2InnerRef = useRef<HTMLDivElement>(null);
  const card3InnerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const { gsap, ScrollTrigger } = registerGSAP();

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Reveal animations for .reveal-up and .reveal-curtain inside this section
      const revealElements = sectionRef.current?.querySelectorAll('.reveal-up, .reveal-curtain');
      revealElements?.forEach((el) => {
        ScrollTrigger.create({
          trigger: el,
          start: 'top 85%',
          onEnter: () => el.classList.add('is-visible'),
          once: true,
        });
      });

      // Parallax inner images
      const pairs = [
        { ref: card1InnerRef, speed: -0.06 },
        { ref: card2InnerRef, speed: 0.05 },
        { ref: card3InnerRef, speed: -0.05 },
      ];

      pairs.forEach(({ ref, speed }) => {
        if (!ref.current || !ref.current.parentElement) return;
        ScrollTrigger.create({
          trigger: ref.current.parentElement,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
          onUpdate: (self) => {
            const yOffset = (self.progress - 0.5) * 120 * (speed / 0.05);
            if (ref.current) {
              ref.current.style.transform = `translateY(${yOffset}px)`;
            }
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="collection-discovery"
      ref={sectionRef}
      className="relative z-20 -mt-20 bg-obsidian text-ivory rounded-t-[28px] sm:rounded-t-[42px] shadow-[0_-40px_90px_rgba(0,0,0,0.88)]"
    >
      {/* Minimal Floating Section Header */}
      <div className="w-full px-6 sm:px-10 lg:px-16 pt-16 sm:pt-20 pb-8 flex items-end justify-between border-b border-ivory/10 reveal-up">
        <div className="flex items-center">
          <h2 className="font-serif text-3xl sm:text-5xl font-light tracking-wide text-ivory">
            The Collections
          </h2>
        </div>
        <span className="text-[10px] uppercase tracking-[0.32em] text-brass-light">
          01 &mdash; 03
        </span>
      </div>

      {/* Full-Bleed 3-Column Monumental Fashion Photography */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-1.5 sm:gap-2 bg-obsidian">
        {/* Destination 1: New Arrivals — Navigates directly to /collection?category=new-arrivals */}
        <Link
          href="/collection?category=new-arrivals"
          className="collection-card group relative h-[78vh] sm:h-[88vh] w-full overflow-hidden cursor-pointer reveal-curtain block"
          data-collection="new-arrivals"
          aria-label="Explore New Arrivals Collection"
        >
          <div className="collection-media-wrap absolute inset-0 w-full h-full">
            <div
              ref={card1InnerRef}
              className="parallax-img-inner w-full h-[112%] -mt-[6%]"
              data-parallax="-0.06"
            >
              {mediaSlots.col_new_arrivals?.src && (
                <img
                  src={mediaSlots.col_new_arrivals.src}
                  alt="New Arrivals"
                  className="w-full h-full object-cover object-top select-none"
                />
              )}
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian/90 via-obsidian/15 to-transparent opacity-85 group-hover:opacity-95 transition-opacity duration-500" />
          <div className="absolute inset-x-0 bottom-0 p-8 sm:p-10 lg:p-12 flex flex-col justify-end">
            <span className="text-[10px] uppercase tracking-[0.34em] text-brass-light mb-2">
              01 / Season
            </span>
            <div className="flex items-end justify-between gap-4">
              <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-ivory leading-none">
                New Arrivals
              </h3>
              <span className="editorial-link text-[10px] uppercase tracking-[0.28em] text-ivory group-hover:text-brass-light">
                Explore
              </span>
            </div>
          </div>
        </Link>

        {/* Destination 2: Signature Pieces — Navigates directly to /collection?category=signature-pieces */}
        <Link
          href="/collection?category=signature-pieces"
          className="collection-card group relative h-[78vh] sm:h-[88vh] w-full overflow-hidden cursor-pointer reveal-curtain block"
          data-collection="signature-pieces"
          aria-label="Explore Signature Pieces Collection"
        >
          <div className="collection-media-wrap absolute inset-0 w-full h-full">
            <div
              ref={card2InnerRef}
              className="parallax-img-inner w-full h-[112%] -mt-[6%]"
              data-parallax="0.05"
            >
              {mediaSlots.col_new_arrivals?.src && (
                <img
                  src={mediaSlots.col_new_arrivals.src}
                  alt="Signature Pieces"
                  className="w-full h-full object-cover object-top select-none"
                />
              )}
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian/90 via-obsidian/15 to-transparent opacity-85 group-hover:opacity-95 transition-opacity duration-500" />
          <div className="absolute inset-x-0 bottom-0 p-8 sm:p-10 lg:p-12 flex flex-col justify-end">
            <span className="text-[10px] uppercase tracking-[0.34em] text-brass-light mb-2">
              02 / Atelier
            </span>
            <div className="flex items-end justify-between gap-4">
              <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-ivory leading-none">
                Signature Pieces
              </h3>
              <span className="editorial-link text-[10px] uppercase tracking-[0.28em] text-ivory group-hover:text-brass-light">
                Explore
              </span>
            </div>
          </div>
        </Link>

        {/* Destination 3: Bestsellers — Navigates directly to /collection?category=bestsellers */}
        <Link
          href="/collection?category=bestsellers"
          className="collection-card group relative h-[78vh] sm:h-[88vh] w-full overflow-hidden cursor-pointer reveal-curtain block"
          data-collection="bestsellers"
          aria-label="Explore Bestsellers Collection"
        >
          <div className="collection-media-wrap absolute inset-0 w-full h-full">
            <div
              ref={card3InnerRef}
              className="parallax-img-inner w-full h-[112%] -mt-[6%]"
              data-parallax="-0.05"
            >
              {mediaSlots.col_new_arrivals?.src && (
                <img
                  src={mediaSlots.col_new_arrivals.src}
                  alt="Bestsellers"
                  className="w-full h-full object-cover object-top select-none"
                />
              )}
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian/90 via-obsidian/15 to-transparent opacity-85 group-hover:opacity-95 transition-opacity duration-500" />
          <div className="absolute inset-x-0 bottom-0 p-8 sm:p-10 lg:p-12 flex flex-col justify-end">
            <span className="text-[10px] uppercase tracking-[0.34em] text-brass-light mb-2">
              03 / Archive
            </span>
            <div className="flex items-end justify-between gap-4">
              <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-ivory leading-none">
                Bestsellers
              </h3>
              <span className="editorial-link text-[10px] uppercase tracking-[0.28em] text-ivory group-hover:text-brass-light">
                Explore
              </span>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}
