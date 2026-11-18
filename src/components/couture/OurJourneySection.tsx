'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { useCouture } from '@/context/CoutureContext';
import { registerGSAP } from '@/lib/gsap';

export function OurJourneySection() {
  const { setIsStoryOpen, mediaSlots } = useCouture();
  const sectionRef = useRef<HTMLElement>(null);
  const loomInnerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const { gsap, ScrollTrigger } = registerGSAP();

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Reveal-up animation
      const revealElements = sectionRef.current?.querySelectorAll('.reveal-up');
      revealElements?.forEach((el) => {
        ScrollTrigger.create({
          trigger: el,
          start: 'top 85%',
          onEnter: () => el.classList.add('is-visible'),
          once: true,
        });
      });

      // Parallax on loom photograph
      if (loomInnerRef.current && sectionRef.current) {
        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
          onUpdate: (self) => {
            const yOffset = (self.progress - 0.5) * 110;
            if (loomInnerRef.current) {
              loomInnerRef.current.style.transform = `translateY(${yOffset}px)`;
            }
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="our-journey"
      ref={sectionRef}
      className="relative z-20 w-full h-[88vh] sm:h-[96vh] bg-obsidian text-ivory overflow-hidden flex items-end"
    >
      {/* Full-bleed Artisan Loom Photograph with Parallax */}
      <div className="absolute inset-0 w-full h-full">
        <div
          ref={loomInnerRef}
          className="parallax-img-inner w-full h-[116%] -mt-[8%]"
          data-parallax="-0.07"
        >
          {mediaSlots.journey_atelier?.src && (
            <img
              src={mediaSlots.journey_atelier.src}
              alt={mediaSlots.journey_atelier.label}
              className="w-full h-full object-cover object-center select-none"
            />
          )}
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-obsidian/92 via-obsidian/35 to-obsidian/25 pointer-events-none" />

      {/* Overlaid Poetic Brand Story */}
      <div className="relative z-10 w-full px-6 sm:px-10 lg:px-16 pb-16 sm:pb-24 flex flex-col md:flex-row md:items-end justify-between gap-10 reveal-up">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-[1.5px] bg-crimson" />
            <span className="text-[10px] uppercase tracking-[0.36em] text-brass-light">
              Our Journey
            </span>
          </div>
          <h2 className="font-serif text-4xl sm:text-6xl lg:text-[72px] font-light leading-[0.98] text-ivory mb-5">
            Born at the Pit Loom
          </h2>
          <p className="text-xs sm:text-sm text-ivory/80 font-light leading-relaxed max-w-lg">
            Every Love Lasa garment is hand-loomed by master weaver clusters in Chanderi, Maheshwar, and Varanasi, uniting heirloom Indian textiles with contemporary architectural form.
          </p>
        </div>

        <Link
          id="btn-read-story"
          href="/journey"
          className="editorial-link inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-ivory hover:text-brass-light transition-colors focus:outline-none shrink-0 group"
        >
          <span>Explore Our Journey</span>
          <svg
            className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.3"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
