"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, ArrowDown } from "lucide-react";
import { IMAGES } from "@/config/images";

interface HeroSectionProps {
  onScrollCueClick?: () => void;
}

export function HeroSection({ onScrollCueClick }: HeroSectionProps) {
  const scrollToCollections = () => {
    if (onScrollCueClick) {
      onScrollCueClick();
      return;
    }
    const target = document.getElementById("discover-collections");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full h-screen min-h-[640px] flex flex-col justify-between overflow-hidden bg-[#191817] text-white">
      {/* Background Campaign Photography */}
      <div className="absolute inset-0 z-0">
        <Image
          src={IMAGES.hero.src}
          alt={IMAGES.hero.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-[1.02] transition-transform duration-1000 ease-out"
        />
        {/* Subtle cinematic gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/35" />
      </div>

      {/* Spacer to push content down below header */}
      <div className="w-full pt-28 sm:pt-32" />

      {/* Hero Content (Form in Motion) */}
      <div className="relative z-10 w-full max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-16 pb-16 sm:pb-20">
        <div className="max-w-xl">
          {/* Tagline */}
          <span className="inline-block text-[10px] sm:text-[11px] uppercase tracking-[0.28em] text-white/80 font-sans mb-3 sm:mb-4">
            Contemporary Indian Wear
          </span>

          {/* Headline: Form in Motion */}
          <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl font-light tracking-[0.02em] leading-[0.95] text-white mb-6 sm:mb-8">
            Form <br />
            <span className="italic font-light">in Motion</span>
          </h1>

          {/* CTA Link: Explore the Edit -> */}
          <div>
            <a
              href="#discover-collections"
              onClick={(e) => {
                e.preventDefault();
                scrollToCollections();
              }}
              className="inline-flex items-center space-x-2 text-[11px] sm:text-xs uppercase tracking-[0.22em] text-white py-2 border-b border-white/60 hover:border-white transition-all group"
            >
              <span>Explore the Edit</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>

      {/* Downward Scroll Cue */}
      <div className="relative z-10 w-full pb-6 flex justify-center">
        <button
          onClick={scrollToCollections}
          type="button"
          aria-label="Scroll down to Discover Our Collections"
          className="group p-2 text-white/70 hover:text-white transition-colors"
        >
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </button>
      </div>
    </section>
  );
}
