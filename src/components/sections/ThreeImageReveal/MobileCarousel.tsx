"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { IMAGES } from "@/config/images";

const PANELS = [
  {
    id: "panel-left",
    number: "01",
    tagline: "Fluid Silk",
    title: "Fluid Silk Silhouette",
    caption: IMAGES.pinnedReveal.left.caption,
    image: IMAGES.pinnedReveal.left,
    isLead: false,
  },
  {
    id: "panel-center",
    number: "02",
    tagline: "Sculpted Form",
    title: "Sculptural Evening Trench",
    caption: IMAGES.pinnedReveal.center.caption,
    image: IMAGES.pinnedReveal.center,
    isLead: true,
  },
  {
    id: "panel-right",
    number: "03",
    tagline: "Raw Texture",
    title: "Tactile Weave & Cut",
    caption: IMAGES.pinnedReveal.right.caption,
    image: IMAGES.pinnedReveal.right,
    isLead: false,
  },
];

export function MobileCarousel() {
  const [activeIndex, setActiveIndex] = useState(1); // Default to lead center item
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Sync scroll position with active index
  const handleScroll = useCallback(() => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const scrollLeft = container.scrollLeft;
    const width = container.offsetWidth;
    const newIndex = Math.round(scrollLeft / (width * 0.8));
    const clampedIndex = Math.max(0, Math.min(newIndex, PANELS.length - 1));
    if (clampedIndex !== activeIndex) {
      setActiveIndex(clampedIndex);
    }
  }, [activeIndex]);

  // Initial scroll to center lead image on mount
  useEffect(() => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const targetCard = container.children[1] as HTMLElement;
      if (targetCard) {
        const offset = targetCard.offsetLeft - (container.offsetWidth - targetCard.offsetWidth) / 2;
        container.scrollTo({ left: offset, behavior: "instant" });
      }
    }
  }, []);

  const scrollToIndex = (index: number) => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const targetCard = container.children[index] as HTMLElement;
    if (targetCard) {
      const offset = targetCard.offsetLeft - (container.offsetWidth - targetCard.offsetWidth) / 2;
      container.scrollTo({ left: offset, behavior: "smooth" });
      setActiveIndex(index);
    }
  };

  const handlePrev = () => {
    const prev = Math.max(0, activeIndex - 1);
    scrollToIndex(prev);
  };

  const handleNext = () => {
    const next = Math.min(PANELS.length - 1, activeIndex + 1);
    scrollToIndex(next);
  };

  return (
    <div className="relative w-full bg-[#FAF8F5] py-16 px-4 sm:px-6">
      {/* Section Header */}
      <div className="max-w-xl mx-auto text-center mb-8">
        <span className="text-[10px] uppercase tracking-[0.26em] text-[#5E5B56] block mb-2">
          Visual Story • Tripartite Form
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl tracking-[0.03em] font-light text-[#191817]">
          The Threefold Form
        </h2>
        <p className="mt-2 text-xs text-[#5E5B56] font-light max-w-sm mx-auto leading-relaxed">
          Swipe horizontally to explore silhouette, structure, and tactile texture.
        </p>
      </div>

      {/* Touch Carousel Container */}
      <div className="relative w-full">
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="flex space-x-4 sm:space-x-6 overflow-x-auto snap-x snap-mandatory scrollbar-none py-4 px-[8vw] sm:px-[15vw]"
          style={{ scrollSnapType: "x mandatory", WebkitOverflowScrolling: "touch" }}
        >
          {PANELS.map((panel, idx) => (
            <div
              key={panel.id}
              className={`relative flex-shrink-0 w-[78vw] sm:w-[60vw] max-w-[380px] aspect-[3/4] snap-center overflow-hidden bg-[#EFE9E0] border transition-all duration-500 ${
                activeIndex === idx
                  ? "border-[#191817]/40 shadow-md scale-100 opacity-100"
                  : "border-[#E5DFD3] scale-[0.96] opacity-75"
              }`}
            >
              <Image
                src={panel.image.src}
                alt={panel.image.alt}
                fill
                sizes="(max-width: 640px) 78vw, 60vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-90" />

              {/* Panel Caption / Meta */}
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <div className="flex items-center space-x-2 mb-1">
                  {panel.isLead && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D32F2F]" />
                  )}
                  <span className="text-[10px] tracking-[0.22em] uppercase text-white/90">
                    {panel.caption}
                  </span>
                </div>
                <p className="font-serif text-lg sm:text-xl font-light tracking-wide">
                  {panel.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Arrow Controls */}
        <div className="flex items-center justify-between pointer-events-none absolute inset-y-0 left-2 right-2">
          <button
            type="button"
            onClick={handlePrev}
            disabled={activeIndex === 0}
            aria-label="Previous image"
            className="pointer-events-auto p-2.5 rounded-full bg-[#FAF8F5]/90 text-[#191817] border border-[#E5DFD3] shadow-xs disabled:opacity-30 disabled:pointer-events-none hover:bg-white transition-colors"
          >
            <ChevronLeft className="w-4 h-4 stroke-[1.5]" />
          </button>

          <button
            type="button"
            onClick={handleNext}
            disabled={activeIndex === PANELS.length - 1}
            aria-label="Next image"
            className="pointer-events-auto p-2.5 rounded-full bg-[#FAF8F5]/90 text-[#191817] border border-[#E5DFD3] shadow-xs disabled:opacity-30 disabled:pointer-events-none hover:bg-white transition-colors"
          >
            <ChevronRight className="w-4 h-4 stroke-[1.5]" />
          </button>
        </div>
      </div>

      {/* Subtle Pagination Indicators */}
      <div className="mt-6 flex items-center justify-center space-x-2.5">
        {PANELS.map((panel, idx) => (
          <button
            key={panel.id}
            onClick={() => scrollToIndex(idx)}
            aria-label={`Go to slide ${panel.number}`}
            className={`transition-all duration-300 rounded-full ${
              activeIndex === idx
                ? "w-6 h-1.5 bg-[#191817]"
                : "w-1.5 h-1.5 bg-[#E5DFD3] hover:bg-[#8E8A83]"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
