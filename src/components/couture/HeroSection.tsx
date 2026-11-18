'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { useCouture } from '@/context/CoutureContext';
import { HERO_CAMPAIGNS } from '@/config/coutureData';
import { registerGSAP } from '@/lib/gsap';

export function HeroSection() {
  const {
    activeHeroIndex,
    setHeroSlide,
    nextHeroSlide,
    prevHeroSlide,
    mediaSlots,
  } = useCouture();

  const currentCampaign = HERO_CAMPAIGNS[activeHeroIndex];
  const sectionRef = useRef<HTMLElement>(null);
  const slidesContainerRef = useRef<HTMLDivElement>(null);
  const foregroundRef = useRef<HTMLDivElement>(null);
  const copyRef = useRef<HTMLDivElement>(null);

  // Parallax on scroll with GSAP ScrollTrigger
  useEffect(() => {
    const { gsap, ScrollTrigger } = registerGSAP();

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      if (!sectionRef.current || !slidesContainerRef.current || !foregroundRef.current) return;

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
        onUpdate: (self) => {
          const progress = self.progress;
          if (slidesContainerRef.current) {
            slidesContainerRef.current.style.transform = `scale(${1 + progress * 0.08}) translateY(${progress * 150}px)`;
          }
          if (foregroundRef.current) {
            foregroundRef.current.style.transform = `translateY(${-progress * 180}px)`;
            foregroundRef.current.style.opacity = `${Math.max(0, 1 - progress * 1.4)}`;
          }
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Re-trigger CSS text animation on slide change
  useEffect(() => {
    if (copyRef.current) {
      copyRef.current.classList.remove('hero-copy-enter');
      void copyRef.current.offsetWidth;
      copyRef.current.classList.add('hero-copy-enter');
    }
  }, [activeHeroIndex]);

  return (
    <section id="hero" ref={sectionRef} className="relative w-full h-[112vh] bg-obsidian text-ivory">
      <div id="hero-sticky-stage" className="sticky top-0 w-full h-screen overflow-hidden flex flex-col justify-end">
        {/* Interchangeable Campaign Photographs Container */}
        <div
          id="hero-slides-container"
          ref={slidesContainerRef}
          className="absolute inset-0 w-full h-full will-change-transform"
        >
          {HERO_CAMPAIGNS.map((slide, idx) => {
            const slot = mediaSlots[slide.slotId];
            const isActive = idx === activeHeroIndex;
            return (
              <div
                key={slide.slotId}
                className={`hero-slide absolute inset-0 w-full h-full ${isActive ? 'is-active' : ''}`}
                data-hero-slide={idx}
              >
                {slot?.src && (
                  <img
                    src={slot.src}
                    alt={slide.title}
                    className="w-full h-full object-cover object-top select-none"
                  />
                )}
              </div>
            );
          })}
        </div>

        {/* Subtle bottom gradient protecting upper-third facial clarity */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-obsidian/92 via-obsidian/20 to-obsidian/30" />

        {/* Campaign Typography Directly Over the Photography (Lower Safe Zone) */}
        <div
          id="hero-foreground"
          ref={foregroundRef}
          className="relative z-10 w-full px-6 sm:px-10 lg:px-16 pb-12 sm:pb-16 lg:pb-20 will-change-transform"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div id="hero-copy" ref={copyRef} className="max-w-2xl hero-copy-enter">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-[1.5px] bg-crimson" />
                <p id="hero-kicker" className="text-[10px] uppercase tracking-[0.36em] text-brass-light">
                  {currentCampaign.kicker}
                </p>
              </div>
              <h1
                id="hero-title"
                className="font-serif text-4xl sm:text-6xl lg:text-[84px] font-light leading-[0.95] tracking-[-0.015em] text-ivory mb-4"
              >
                {currentCampaign.title}
              </h1>
              <p
                id="hero-desc"
                className="text-xs sm:text-sm text-ivory/80 font-light tracking-wide max-w-md mb-7"
              >
                {currentCampaign.desc}
              </p>
              {currentCampaign.ctaHref.startsWith('/') ? (
                <Link
                  id="hero-cta"
                  href={currentCampaign.ctaHref}
                  className="group inline-flex items-center gap-4 px-7 py-3.5 bg-obsidian/55 backdrop-blur-md border border-brass/50 text-ivory text-[10px] uppercase tracking-[0.3em] hover:bg-crimson hover:border-crimson transition-all duration-500"
                >
                  <span>{currentCampaign.ctaText}</span>
                  <svg
                    className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.3"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
              ) : (
                <a
                  id="hero-cta"
                  href={currentCampaign.ctaHref}
                  className="group inline-flex items-center gap-4 px-7 py-3.5 bg-obsidian/55 backdrop-blur-md border border-brass/50 text-ivory text-[10px] uppercase tracking-[0.3em] hover:bg-crimson hover:border-crimson transition-all duration-500"
                >
                  <span>{currentCampaign.ctaText}</span>
                  <svg
                    className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.3"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </a>
              )}
            </div>

            {/* Minimal Campaign Switcher */}
            <div className="flex items-center justify-between md:justify-end gap-6">
              <div className="flex items-center gap-3" id="hero-dots" role="tablist" aria-label="Campaign Photographs">
                {HERO_CAMPAIGNS.map((_, idx) => {
                  const isActive = idx === activeHeroIndex;
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setHeroSlide(idx)}
                      className={`hero-dot h-[2.5px] transition-all duration-500 ${
                        isActive ? 'w-12 bg-crimson' : 'w-5 bg-ivory/40 hover:bg-brass-light'
                      }`}
                      aria-label={`Campaign Photograph ${idx + 1}`}
                    />
                  );
                })}
              </div>
              <div className="flex items-center gap-2">
                <button
                  id="hero-prev"
                  type="button"
                  onClick={prevHeroSlide}
                  className="w-10 h-10 rounded-full border border-ivory/30 flex items-center justify-center text-ivory/85 hover:border-crimson hover:bg-crimson hover:text-ivory transition-all"
                  aria-label="Previous Campaign Photograph"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
                    <polyline points="15 18 9 12 15 6" />
                  </svg>
                </button>
                <button
                  id="hero-next"
                  type="button"
                  onClick={nextHeroSlide}
                  className="w-10 h-10 rounded-full border border-ivory/30 flex items-center justify-center text-ivory/85 hover:border-crimson hover:bg-crimson hover:text-ivory transition-all"
                  aria-label="Next Campaign Photograph"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
