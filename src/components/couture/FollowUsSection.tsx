'use client';

import React, { useRef } from 'react';
import { DEFAULT_IMAGES } from '@/config/coutureImages';

interface SocialCard {
  platform: string;
  label: string;
  href: string;
  image: string;
  alt: string;
  icon: React.ReactNode;
}

const SOCIAL_CARDS: SocialCard[] = [
  {
    platform: 'Instagram',
    label: 'INSTAGRAM',
    href: 'https://instagram.com/lovelasa',
    image: DEFAULT_IMAGES.devika_1,
    alt: 'Love Lasa on Instagram — Autumn/Winter Campaign',
    icon: (
      <svg
        className="w-4 h-4 sm:w-4.5 sm:h-4.5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    platform: 'Pinterest',
    label: 'PINTEREST',
    href: 'https://pinterest.com/lovelasa',
    image: DEFAULT_IMAGES.devika_2,
    alt: 'Love Lasa on Pinterest — Textile Weaves & Zari Embroidery',
    icon: (
      <svg
        className="w-4 h-4 sm:w-4.5 sm:h-4.5"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12C24.017 5.367 18.644 0 12.017 0z" />
      </svg>
    ),
  },
  {
    platform: 'YouTube',
    label: 'YOUTUBE',
    href: 'https://youtube.com/@lovelasa',
    image: DEFAULT_IMAGES.journey_atelier,
    alt: 'Love Lasa on YouTube — Handloom Pit Looms & Master Weavers',
    icon: (
      <svg
        className="w-4 h-4 sm:w-4.5 sm:h-4.5"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    platform: 'TikTok',
    label: 'TIKTOK',
    href: 'https://tiktok.com/@lovelasa',
    image: DEFAULT_IMAGES.devika_3,
    alt: 'Love Lasa on TikTok — Sculptural Silhouettes & Drapes',
    icon: (
      <svg
        className="w-4 h-4 sm:w-4.5 sm:h-4.5"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
      </svg>
    ),
  },
];

export function FollowUsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;
    const cardWidth = scrollContainerRef.current.clientWidth / 2;
    scrollContainerRef.current.scrollBy({
      left: direction === 'left' ? -cardWidth : cardWidth,
      behavior: 'smooth',
    });
  };

  return (
    <section
      id="follow-us"
      ref={sectionRef}
      data-light-section="true"
      className="relative z-20 bg-ivory text-obsidian pt-12 sm:pt-16 pb-14 sm:pb-20 border-t border-obsidian/10"
    >
      <div className="w-full px-6 sm:px-10 lg:px-16">
        {/* Section Header: Always 100% visible, no reveal-up delay */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          {/* Centered Kicker with flanking lines */}
          <div className="flex items-center justify-center gap-3 sm:gap-4 mb-2.5 sm:mb-3">
            <span className="w-6 sm:w-10 h-[1px] bg-crimson" />
            <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.36em] text-crimson font-medium">
              Follow Us
            </span>
            <span className="w-6 sm:w-10 h-[1px] bg-crimson" />
          </div>

          {/* Editorial Display Heading */}
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-obsidian tracking-wide mb-3">
            A Glimpse Into Our World
          </h2>

          {/* Editorial Italic Subtitle */}
          <p className="font-serif italic text-xs sm:text-sm lg:text-base text-taupe font-normal max-w-2xl mx-auto">
            Discover the world of Love Lasa through our latest collections, creative moments and craftsmanship.
          </p>
        </div>

        {/* Showcase Container */}
        <div className="relative group/carousel">
          {/* Left Arrow Button — Mobile & Tablet ONLY (hidden on desktop where all 4 cards fit) */}
          <button
            type="button"
            onClick={() => handleScroll('left')}
            className="flex lg:hidden absolute -left-3 sm:-left-4 top-1/2 -translate-y-1/2 z-30 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-ivory/95 border border-obsidian/15 shadow-md items-center justify-center text-obsidian hover:bg-crimson hover:border-crimson hover:text-ivory transition-all duration-300 cursor-pointer focus:outline-none"
            aria-label="Scroll left"
          >
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          {/* Right Arrow Button — Mobile & Tablet ONLY (hidden on desktop where all 4 cards fit) */}
          <button
            type="button"
            onClick={() => handleScroll('right')}
            className="flex lg:hidden absolute -right-3 sm:-right-4 top-1/2 -translate-y-1/2 z-30 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-ivory/95 border border-obsidian/15 shadow-md items-center justify-center text-obsidian hover:bg-crimson hover:border-crimson hover:text-ivory transition-all duration-300 cursor-pointer focus:outline-none"
            aria-label="Scroll right"
          >
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>

          {/* Cards Container: Medium-size square cards with tighter spacing, 4-Column Grid on desktop */}
          <div
            ref={scrollContainerRef}
            className="flex lg:grid lg:grid-cols-4 gap-2.5 sm:gap-3.5 lg:gap-3.5 overflow-x-auto lg:overflow-visible pb-3 lg:pb-0 scroll-smooth snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {SOCIAL_CARDS.map((card) => (
              <a
                key={card.platform}
                href={card.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex-shrink-0 w-[72vw] sm:w-[42vw] lg:w-full aspect-square overflow-hidden bg-obsidian rounded-sm shadow-sm border border-obsidian/10 transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-2xl hover:border-crimson/30 snap-start focus:outline-none"
                aria-label={`Follow Love Lasa on ${card.platform}`}
              >
                {/* Editorial Photography */}
                <img
                  src={card.image}
                  alt={card.alt}
                  className="w-full h-full object-cover object-top select-none transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Ambient dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/95 via-obsidian/25 to-transparent opacity-85 group-hover:opacity-95 transition-opacity duration-300" />

                {/* Bottom Social Bar */}
                <div className="absolute inset-x-0 bottom-0 p-3.5 sm:p-4 flex items-center justify-between text-ivory border-t border-ivory/10 backdrop-blur-[2px] bg-obsidian/20">
                  <div className="flex items-center gap-2.5">
                    <span className="text-ivory group-hover:text-brass-light transition-colors duration-300">
                      {card.icon}
                    </span>
                    <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.24em] font-light text-ivory group-hover:text-brass-light transition-colors duration-300">
                      {card.label}
                    </span>
                  </div>

                  <span className="text-ivory/80 group-hover:text-ivory group-hover:translate-x-1.5 transition-all duration-300">
                    <svg
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
