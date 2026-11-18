'use client';

import React from 'react';
import Image from 'next/image';

export function CollectionHero() {
  return (
    <section
      id="collection-hero"
      className="relative w-full h-[52vh] sm:h-[60vh] bg-obsidian text-ivory overflow-hidden flex items-end"
    >
      {/* Background Campaign Photography */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/collection-hero.jpg"
          alt="LOVE LASA Collection Campaign"
          fill
          priority
          className="object-cover object-top scale-105 opacity-75"
        />
      </div>

      {/* Atmospheric Dark Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/45 to-obsidian/30 pointer-events-none" />

      {/* Hero Content */}
      <div className="relative z-10 w-full px-6 sm:px-10 lg:px-16 pb-10 sm:pb-14 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="flex items-center gap-3 mb-2.5">
            <span className="w-8 h-[1.5px] bg-crimson" />
            <span className="text-[10px] uppercase tracking-[0.36em] text-brass-light font-medium">
              Autumn / Winter Edit
            </span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-[72px] font-light leading-[0.95] text-ivory tracking-wide">
            The Collection
          </h1>
        </div>
        <p className="text-xs sm:text-sm text-ivory/80 font-light max-w-sm leading-relaxed">
          Six numbered handloom silhouettes woven across Chanderi, Varanasi, and Bengal.
        </p>
      </div>
    </section>
  );
}
