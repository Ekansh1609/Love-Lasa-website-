"use client";

import React from "react";
import { DesktopPinnedReveal } from "./DesktopPinnedReveal";
import { MobileCarousel } from "./MobileCarousel";

export function ThreeImageRevealSection() {
  return (
    <section id="three-image-reveal" className="relative w-full overflow-hidden bg-[#FAF8F5]">
      {/* Desktop (1024px+): Cinematic GSAP Pinned-Scroll Interaction */}
      <div className="hidden lg:block">
        <DesktopPinnedReveal />
      </div>

      {/* Mobile & Tablet (<1024px): Touch/Swipe Horizontal Carousel */}
      <div className="block lg:hidden">
        <MobileCarousel />
      </div>
    </section>
  );
}
