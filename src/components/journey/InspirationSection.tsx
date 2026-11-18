'use client';

import React from 'react';
import Image from 'next/image';
import { INSPIRATION_PILLARS, LightboxImage } from '@/config/journeyData';

interface InspirationSectionProps {
  onOpenLightbox: (img: LightboxImage) => void;
}

export function InspirationSection({ onOpenLightbox }: InspirationSectionProps) {
  return (
    <section
      id="inspiration-section"
      data-light-section="true"
      className="bg-alabaster text-obsidian py-20 sm:py-28 border-t border-obsidian/10"
    >
      <div className="w-full px-6 sm:px-10 lg:px-16">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-6 h-[1.5px] bg-crimson" />
              <span className="text-[10px] uppercase tracking-[0.34em] text-crimson font-medium">
                02 / Our Inspiration
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-light leading-[1.06] text-obsidian">
              Indian Culture, Living Textiles &amp; Artistic Form
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-taupe font-light max-w-md leading-relaxed">
            Our creative identity lives at the intersection of heritage textile archives, architectural light, and the unhurried grace of contemporary Indian dressing.
          </p>
        </div>

        {/* Photo Triptych */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          {/* Wide Moodboard Flatlay (6 cols) */}
          <div className="lg:col-span-6 flex flex-col">
            <div
              onClick={() =>
                onOpenLightbox({
                  src: '/images/journey/moodboard.jpg',
                  alt: 'LOVE LASA textile moodboard with zari spools and Chanderi swatches',
                  caption: 'Chanderi silk-organza swatches, antique gold zari spools, and raw tussar silk skeins',
                })
              }
              className="photo-zoom-wrap relative aspect-[16/10] lg:flex-1 w-full overflow-hidden bg-sand border border-obsidian/10 cursor-pointer shadow-md group"
              role="button"
              tabIndex={0}
              aria-label="Enlarge Textile Moodboard"
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  onOpenLightbox({
                    src: '/images/journey/moodboard.jpg',
                    alt: 'LOVE LASA textile moodboard with zari spools and Chanderi swatches',
                    caption: 'Chanderi silk-organza swatches, antique gold zari spools, and raw tussar silk skeins',
                  });
                }
              }}
            >
              <Image
                id="img-moodboard"
                src="/images/journey/moodboard.jpg"
                alt="LOVE LASA textile moodboard with zari spools and Chanderi swatches"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 bg-gradient-to-t from-obsidian/85 via-obsidian/40 to-transparent text-ivory">
                <p className="text-[9px] uppercase tracking-[0.28em] text-brass-light mb-1">
                  Material Archive
                </p>
                <p className="font-serif text-xl sm:text-2xl font-light">
                  Raw tussar skeins, antique zari spools &amp; hand-dyed organza
                </p>
              </div>
            </div>
          </div>

          {/* Portrait 1 (3 cols) */}
          <div className="lg:col-span-3 flex flex-col">
            <div
              onClick={() =>
                onOpenLightbox({
                  src: '/images/journey/inspiration-1.jpg',
                  alt: 'Chanderi silk-organza drape inspiration',
                  caption: 'Architectural transparency in handwoven Chanderi silk-organza',
                })
              }
              className="photo-zoom-wrap relative aspect-[3/4] w-full overflow-hidden bg-sand border border-obsidian/10 cursor-pointer shadow-md group"
              role="button"
              tabIndex={0}
              aria-label="Enlarge Inspiration Portrait 1"
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  onOpenLightbox({
                    src: '/images/journey/inspiration-1.jpg',
                    alt: 'Chanderi silk-organza drape inspiration',
                    caption: 'Architectural transparency in handwoven Chanderi silk-organza',
                  });
                }
              }}
            >
              <Image
                id="img-insp-1"
                src="/images/journey/inspiration-1.jpg"
                alt="Chanderi silk-organza drape inspiration"
                fill
                sizes="(max-width: 1024px) 100vw, 25vw"
                className="object-cover object-top transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-obsidian/85 to-transparent text-ivory">
                <p className="text-[9px] uppercase tracking-[0.26em] text-brass-light">
                  Indian Culture
                </p>
                <p className="font-serif text-lg font-light">Ceremonial poise without excess</p>
              </div>
            </div>
          </div>

          {/* Portrait 2 (3 cols) */}
          <div className="lg:col-span-3 flex flex-col">
            <div
              onClick={() =>
                onOpenLightbox({
                  src: '/images/journey/inspiration-2.jpg',
                  alt: 'Banarasi tissue ensemble inspiration',
                  caption: 'Warm bronze-gold Banarasi tissue tailored for fluid movement',
                })
              }
              className="photo-zoom-wrap relative aspect-[3/4] w-full overflow-hidden bg-sand border border-obsidian/10 cursor-pointer shadow-md group"
              role="button"
              tabIndex={0}
              aria-label="Enlarge Inspiration Portrait 2"
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  onOpenLightbox({
                    src: '/images/journey/inspiration-2.jpg',
                    alt: 'Banarasi tissue ensemble inspiration',
                    caption: 'Warm bronze-gold Banarasi tissue tailored for fluid movement',
                  });
                }
              }}
            >
              <Image
                id="img-insp-2"
                src="/images/journey/inspiration-2.jpg"
                alt="Banarasi tissue ensemble inspiration"
                fill
                sizes="(max-width: 1024px) 100vw, 25vw"
                className="object-cover object-top transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-obsidian/85 to-transparent text-ivory">
                <p className="text-[9px] uppercase tracking-[0.26em] text-brass-light">
                  Artistic Expression
                </p>
                <p className="font-serif text-lg font-light">Light, shadow &amp; metallic weave</p>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Inspiration Pillars Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 pt-10 border-t border-obsidian/10">
          {INSPIRATION_PILLARS.map((pillar) => (
            <div key={pillar.number}>
              <span className="text-[10px] uppercase tracking-[0.26em] text-crimson font-medium block mb-1.5">
                {pillar.number} / {pillar.title}
              </span>
              <p className="text-xs text-taupe font-light leading-relaxed">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
