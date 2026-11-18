'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export function VisionSection() {
  return (
    <section
      id="vision-section"
      className="relative w-full min-h-[82vh] bg-obsidian text-ivory overflow-hidden flex items-center py-24"
    >
      {/* Full-bleed Vision Background Photograph */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          id="img-vision"
          src="/images/journey/vision-obsidian.jpg"
          alt="LOVE LASA nocturnal obsidian silk and antique gold zari saree"
          fill
          sizes="100vw"
          className="object-cover object-top opacity-55 scale-105"
        />
      </div>

      {/* Atmospheric Vignette Gradients */}
      <div className="absolute inset-0 bg-gradient-to-r from-obsidian via-obsidian/80 to-obsidian/40 pointer-events-none" />

      {/* Vision Editorial Content */}
      <div className="relative z-10 w-full px-6 sm:px-10 lg:px-16">
        <div className="max-w-2xl space-y-7">
          <div className="flex items-center gap-3">
            <span className="w-8 h-[1.5px] bg-crimson" />
            <span className="text-[10px] uppercase tracking-[0.38em] text-brass-light">
              05 / Our Vision
            </span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl lg:text-[62px] font-light leading-[1.02] text-ivory">
            A Living Archive of Indian Handloom, Worn With Quiet Confidence.
          </h2>

          <p className="text-sm sm:text-base text-ivory/80 font-light leading-relaxed">
            Our vision is to build a house where Indian craft is never treated as nostalgia, but as the language of modern luxury. When you wear a Love Lasa creation, we hope you feel unhurried, deeply poised, and intimately connected to the hands that wove every thread.
          </p>

          <div className="pt-4 flex items-center gap-4">
            <Link
              href="/collection"
              className="inline-flex items-center gap-3 px-8 py-4 bg-crimson text-ivory text-[10px] uppercase tracking-[0.28em] hover:bg-crimson-light transition-all duration-300 group shadow-lg"
            >
              <span>Explore The Collection</span>
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
        </div>
      </div>
    </section>
  );
}
