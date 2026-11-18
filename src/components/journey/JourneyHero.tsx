'use client';

import React from 'react';
import Image from 'next/image';

export function JourneyHero() {
  const handleScrollToStory = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.getElementById('story-section');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="journey-hero"
      className="relative w-full h-screen min-h-screen min-h-[100dvh] bg-obsidian text-ivory overflow-hidden flex items-end"
    >
      {/* Full-bleed Pit Loom Photograph */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          id="img-hero"
          src="/images/journey/journey-hero.jpg"
          alt="Master weaver working at a wooden pit loom for LOVE LASA"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-105 opacity-75"
        />
      </div>

      {/* Atmospheric Vignette Gradients */}
      <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/45 to-obsidian/30 pointer-events-none" />

      {/* Hero Editorial Typography */}
      <div className="relative z-10 w-full px-6 sm:px-10 lg:px-16 pb-10 sm:pb-14 lg:pb-20 flex flex-col md:flex-row md:items-end justify-between gap-6 sm:gap-8">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-[1.5px] bg-crimson" />
            <span className="text-[10px] uppercase tracking-[0.38em] text-brass-light">
              Our Journey &nbsp;&middot;&nbsp; Kala Ghoda, Mumbai
            </span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-[74px] font-light leading-[0.96] text-ivory">
            Woven in Silence,<br />
            <span className="italic text-brass-light">Tailored for Today.</span>
          </h1>
        </div>

        <div className="max-w-sm space-y-5">
          <p className="text-xs sm:text-sm text-ivory/80 font-light leading-relaxed">
            From third-generation pit looms in Chanderi, Varanasi, and Bengal to our sunlit atelier in Kala Ghoda, every Love Lasa silhouette begins with a single unhurried thread.
          </p>
          <a
            href="#story-section"
            onClick={handleScrollToStory}
            className="editorial-link inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-ivory hover:text-brass-light transition-colors group"
          >
            <span>Begin the Story</span>
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-1"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.3"
            >
              <line x1="12" y1="5" x2="12" y2="19" />
              <polyline points="19 12 12 19 5 12" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
