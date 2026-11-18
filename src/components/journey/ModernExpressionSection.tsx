'use client';

import React from 'react';
import Image from 'next/image';
import { LightboxImage } from '@/config/journeyData';

interface ModernExpressionSectionProps {
  onOpenLightbox: (img: LightboxImage) => void;
}

export function ModernExpressionSection({ onOpenLightbox }: ModernExpressionSectionProps) {
  return (
    <section
      id="modern-section"
      data-light-section="true"
      className="bg-alabaster text-obsidian py-20 sm:py-28 border-t border-obsidian/10"
    >
      <div className="w-full px-6 sm:px-10 lg:px-16">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-6 h-[1.5px] bg-crimson" />
            <span className="text-[10px] uppercase tracking-[0.34em] text-crimson font-medium">
              04 / Tradition Meets Modern Expression
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-light leading-[1.06] text-obsidian mb-4">
            Heirloom Textiles, Contemporary Silhouette
          </h2>
          <p className="text-xs sm:text-sm text-taupe font-light leading-relaxed">
            Love Lasa bridges centuries-old Indian handloom vocabulary with modern tailoring—translating woven pallus, bandhgala collars, and micro-pleated skirts into effortless pieces for today&rsquo;s wardrobe.
          </p>
        </div>

        {/* 2 Editorial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Card A: The Heritage Loom */}
          <div className="bg-ivory border border-obsidian/10 overflow-hidden flex flex-col shadow-sm">
            <div
              onClick={() =>
                onOpenLightbox({
                  src: '/images/journey/tradition-mulmul.jpg',
                  alt: 'Handloom Bengal mulmul saree',
                  caption: 'Unbleached Bengal mulmul & raw tussar silk with hand-knotted tassels',
                })
              }
              className="photo-zoom-wrap relative aspect-[4/3] w-full overflow-hidden bg-sand cursor-pointer group"
              role="button"
              tabIndex={0}
              aria-label="Enlarge Heritage Loom photograph"
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  onOpenLightbox({
                    src: '/images/journey/tradition-mulmul.jpg',
                    alt: 'Handloom Bengal mulmul saree',
                    caption: 'Unbleached Bengal mulmul & raw tussar silk with hand-knotted tassels',
                  });
                }
              }}
            >
              <Image
                id="img-tradition"
                src="/images/journey/tradition-mulmul.jpg"
                alt="Handloom Bengal mulmul saree"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-top transition-transform duration-1000 group-hover:scale-105"
              />
            </div>
            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between gap-4">
              <div>
                <span className="text-[9px] uppercase tracking-[0.28em] text-crimson font-medium block mb-2">
                  From the Loom
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-light text-obsidian mb-2.5">
                  Unbleached Purity &amp; Tactile Drape
                </h3>
                <p className="text-xs text-taupe font-light leading-relaxed">
                  We preserve the organic slub of handspun tussar, the breathability of Bengal mulmul, and the eighteen-day rhythm of Chanderi pit looms—allowing natural texture to lead.
                </p>
              </div>
              <p className="text-[10px] uppercase tracking-[0.22em] text-obsidian/70 border-t border-obsidian/10 pt-4">
                Chanderi &nbsp;&middot;&nbsp; Varanasi &nbsp;&middot;&nbsp; Bengal
              </p>
            </div>
          </div>

          {/* Card B: Modern Architectural Tailoring */}
          <div className="bg-ivory border border-obsidian/10 overflow-hidden flex flex-col shadow-sm">
            <div
              onClick={() =>
                onOpenLightbox({
                  src: '/images/journey/modern-pleated.jpg',
                  alt: 'Contemporary sculptural micro-pleated silk ensemble',
                  caption: 'Sculptural micro-pleated charcoal silk & weightless cape silhouette',
                })
              }
              className="photo-zoom-wrap relative aspect-[4/3] w-full overflow-hidden bg-sand cursor-pointer group"
              role="button"
              tabIndex={0}
              aria-label="Enlarge Modern Tailoring photograph"
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  onOpenLightbox({
                    src: '/images/journey/modern-pleated.jpg',
                    alt: 'Contemporary sculptural micro-pleated silk ensemble',
                    caption: 'Sculptural micro-pleated charcoal silk & weightless cape silhouette',
                  });
                }
              }}
            >
              <Image
                id="img-modern"
                src="/images/journey/modern-pleated.jpg"
                alt="Contemporary sculptural micro-pleated silk ensemble"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-top transition-transform duration-1000 group-hover:scale-105"
              />
            </div>
            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between gap-4">
              <div>
                <span className="text-[9px] uppercase tracking-[0.28em] text-crimson font-medium block mb-2">
                  Into Today&rsquo;s Wardrobe
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-light text-obsidian mb-2.5">
                  Structured Form &amp; Weightless Movement
                </h3>
                <p className="text-xs text-taupe font-light leading-relaxed">
                  Sharp raw-silk bandhgalas, bias-cut drape skirts, and modular sheer capes pair seamlessly with existing wardrobe staples—crafted to be worn, re-styled, and treasured for decades.
                </p>
              </div>
              <p className="text-[10px] uppercase tracking-[0.22em] text-obsidian/70 border-t border-obsidian/10 pt-4">
                Architectural Tailoring &nbsp;&middot;&nbsp; Modular Layering
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
