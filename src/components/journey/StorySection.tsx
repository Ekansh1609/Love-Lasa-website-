'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { STORY_CHAPTERS, LightboxImage } from '@/config/journeyData';

interface StorySectionProps {
  onOpenLightbox: (img: LightboxImage) => void;
}

export function StorySection({ onOpenLightbox }: StorySectionProps) {
  const [activeChapter, setActiveChapter] = useState<'origin' | 'atelier' | 'clusters'>('origin');
  const currentChapter = STORY_CHAPTERS[activeChapter];

  return (
    <section
      id="story-section"
      data-light-section="true"
      className="bg-ivory text-obsidian py-20 sm:py-28"
    >
      <div className="w-full px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left: Dominant Atelier Architecture Photo */}
          <div className="lg:col-span-7">
            <div
              onClick={() =>
                onOpenLightbox({
                  src: '/images/journey/atelier.jpg',
                  alt: 'LOVE LASA heritage atelier in Kala Ghoda, Mumbai',
                  caption: 'The LOVE LASA Atelier at 14 Kala Ghoda, Fort, Mumbai',
                })
              }
              className="photo-zoom-wrap relative aspect-[16/10] w-full overflow-hidden bg-alabaster border border-obsidian/10 shadow-xl cursor-pointer group"
              role="button"
              tabIndex={0}
              aria-label="Enlarge Kala Ghoda Atelier photograph"
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  onOpenLightbox({
                    src: '/images/journey/atelier.jpg',
                    alt: 'LOVE LASA heritage atelier in Kala Ghoda, Mumbai',
                    caption: 'The LOVE LASA Atelier at 14 Kala Ghoda, Fort, Mumbai',
                  });
                }
              }}
            >
              <Image
                id="img-atelier"
                src="/images/journey/atelier.jpg"
                alt="LOVE LASA heritage atelier in Kala Ghoda, Mumbai"
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover object-center transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute bottom-4 left-4 px-3 py-1.5 bg-obsidian/85 backdrop-blur-md text-ivory text-[9px] uppercase tracking-[0.26em] border-l-2 border-crimson">
                14 Kala Ghoda, Fort, Mumbai
              </div>
            </div>
          </div>

          {/* Right: Brand Origin & Interactive Story Chapters */}
          <div className="lg:col-span-5 space-y-7">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="w-6 h-[1.5px] bg-crimson" />
                <span className="text-[10px] uppercase tracking-[0.34em] text-crimson font-medium">
                  01 / The Story of Love Lasa
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl font-light leading-[1.06] text-obsidian">
                Born From a Quiet Reverence for the Loom
              </h2>
            </div>

            {/* Interactive Chapter Selector */}
            <div
              className="flex flex-wrap gap-2 border-b border-obsidian/10 pb-4"
              role="tablist"
              aria-label="Story Chapters"
            >
              {(Object.keys(STORY_CHAPTERS) as Array<'origin' | 'atelier' | 'clusters'>).map(
                (key) => {
                  const ch = STORY_CHAPTERS[key];
                  const isActive = activeChapter === key;
                  return (
                    <button
                      key={key}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => setActiveChapter(key)}
                      className={`px-3.5 py-2 text-[9px] uppercase tracking-[0.24em] border transition-all duration-300 cursor-pointer ${
                        isActive
                          ? 'bg-crimson text-ivory border-crimson shadow-sm'
                          : 'bg-alabaster text-obsidian/80 border-obsidian/20 hover:border-obsidian/40'
                      }`}
                    >
                      {ch.tabLabel}
                    </button>
                  );
                }
              )}
            </div>

            {/* Story Chapter Body */}
            <div id="story-chapter-body" className="space-y-4 min-h-[145px]">
              <h3 className="font-serif text-2xl font-light text-obsidian transition-opacity duration-300">
                {currentChapter.title}
              </h3>
              <p className="text-xs sm:text-sm text-taupe font-light leading-relaxed transition-opacity duration-300">
                {currentChapter.text}
              </p>
            </div>

            <div className="pt-2 border-t border-obsidian/10 flex items-center justify-between text-[10px] uppercase tracking-[0.22em] text-taupe">
              <span>Small-Batch Numbered Editions</span>
              <span className="text-crimson font-medium">Handloom First</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
