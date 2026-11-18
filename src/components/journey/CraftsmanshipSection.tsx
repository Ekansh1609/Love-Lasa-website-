'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { CRAFT_PILLARS, LightboxImage } from '@/config/journeyData';

interface CraftsmanshipSectionProps {
  onOpenLightbox: (img: LightboxImage) => void;
}

export function CraftsmanshipSection({ onOpenLightbox }: CraftsmanshipSectionProps) {
  const [activeCraftIdx, setActiveCraftIdx] = useState<number>(0);
  const currentCraft = CRAFT_PILLARS[activeCraftIdx];

  return (
    <section
      id="craft-section"
      data-light-section="true"
      className="bg-ivory text-obsidian py-20 sm:py-28 border-t border-obsidian/10"
    >
      <div className="w-full px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left: Interactive Craft Details & Selector */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="w-6 h-[1.5px] bg-crimson" />
                <span className="text-[10px] uppercase tracking-[0.34em] text-crimson font-medium">
                  03 / The Art of Craftsmanship
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl font-light leading-[1.06] text-obsidian mb-4">
                Every Thread Carries the Maker&rsquo;s Hand
              </h2>
              <p className="text-xs sm:text-sm text-taupe font-light leading-relaxed">
                We work exclusively with techniques that honor the integrity of our textiles—never masking a handloom weave beneath unnecessary ornament.
              </p>
            </div>

            {/* 3 Authentic Craft Pillars */}
            <div id="craft-pillars" className="space-y-3" role="tablist" aria-label="Craft Pillars">
              {CRAFT_PILLARS.map((item, idx) => {
                const active = idx === activeCraftIdx;
                return (
                  <button
                    key={item.id}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() => setActiveCraftIdx(idx)}
                    className={`craft-pillar-btn w-full text-left p-5 border transition-all duration-300 cursor-pointer ${
                      active
                        ? 'bg-alabaster border-crimson shadow-sm'
                        : 'bg-ivory border-obsidian/10 hover:border-obsidian/30'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-4 mb-1">
                      <span
                        className={`text-[9px] uppercase tracking-[0.26em] ${
                          active ? 'text-crimson font-medium' : 'text-taupe'
                        }`}
                      >
                        {item.subtitle}
                      </span>
                      <span
                        className={`text-[10px] font-serif ${
                          active ? 'text-crimson font-medium' : 'text-taupe'
                        }`}
                      >
                        0{idx + 1}
                      </span>
                    </div>
                    <h3 className="font-serif text-xl sm:text-2xl font-light text-obsidian mb-1.5">
                      {item.title}
                    </h3>
                    {active && (
                      <p className="text-xs text-taupe font-light leading-relaxed mt-2 animate-in fade-in">
                        {item.desc}
                      </p>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: Large Macro Craft Photograph */}
          <div className="lg:col-span-7">
            <div
              onClick={() =>
                onOpenLightbox({
                  src: currentCraft.img,
                  alt: currentCraft.title,
                  caption: currentCraft.caption,
                })
              }
              className="photo-zoom-wrap relative aspect-[4/3] sm:aspect-[16/11] w-full overflow-hidden bg-alabaster border border-obsidian/10 shadow-xl cursor-pointer group"
              role="button"
              tabIndex={0}
              aria-label={`Enlarge ${currentCraft.title} study`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  onOpenLightbox({
                    src: currentCraft.img,
                    alt: currentCraft.title,
                    caption: currentCraft.caption,
                  });
                }
              }}
            >
              <Image
                id="craft-active-img"
                key={currentCraft.img}
                src={currentCraft.img}
                alt={currentCraft.title}
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover object-center transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-md px-4 py-3 bg-obsidian/85 backdrop-blur-md text-ivory border-l-2 border-crimson">
                <p id="craft-photo-kicker" className="text-[9px] uppercase tracking-[0.26em] text-brass-light mb-0.5">
                  {currentCraft.kicker}
                </p>
                <p id="craft-photo-caption" className="font-serif text-lg font-light">
                  {currentCraft.caption}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
