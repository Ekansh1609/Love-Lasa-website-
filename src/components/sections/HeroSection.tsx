"use client";

import React from "react";
import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { IMAGES } from "@/config/images";
import { SITE_CONFIG } from "@/config/site";

export function HeroSection() {
  const scrollToNext = () => {
    const nextSection = document.getElementById("pinned-reveal");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full h-screen min-h-[700px] flex items-end justify-between overflow-hidden bg-[#191817]">
      {/* Background Campaign Photography */}
      <div className="absolute inset-0 z-0">
        <Image
          src={IMAGES.hero.src}
          alt={IMAGES.hero.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-105 animate-pulse/0 transition-transform duration-1000 ease-out"
        />
        {/* Cinematic subtle gradient overlays to ensure text legibility while keeping warm neutral tone */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#191817]/70 via-[#191817]/25 to-black/35" />
      </div>

      {/* Hero Content & Brand Statement */}
      <div className="relative z-10 w-full max-w-[1500px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16 pb-12 sm:pb-16 flex flex-col justify-end text-white">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <span className="inline-block text-[11px] sm:text-xs uppercase tracking-[0.28em] text-[#E5DFD3] mb-4">
              {IMAGES.hero.caption}
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-[0.04em] leading-[0.95] text-white">
              The Architecture of Stillness
            </h1>
            <p className="mt-5 text-sm sm:text-base text-white/80 font-light max-w-xl leading-relaxed">
              {SITE_CONFIG.description}
            </p>
          </div>

          {/* Right Action / Scroll Cue */}
          <div className="flex items-center space-x-6 sm:space-x-8">
            <a
              href="#new-arrivals"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3.5 sm:py-4 bg-[#FAF8F5] text-[#191817] font-sans text-xs uppercase tracking-[0.2em] transition-all hover:bg-white active:scale-95"
            >
              Explore Collection
            </a>

            <button
              onClick={scrollToNext}
              aria-label="Scroll down to campaign reveal"
              className="group flex items-center space-x-3 text-xs uppercase tracking-[0.2em] text-white/80 hover:text-white transition-colors"
            >
              <span className="hidden sm:inline-block">Scroll</span>
              <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center group-hover:border-white transition-colors">
                <ArrowDown className="w-4 h-4 animate-bounce" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
