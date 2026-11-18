'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { useCouture } from '@/context/CoutureContext';
import { formatINR } from '@/config/coutureData';
import { registerGSAP } from '@/lib/gsap';

export function FeaturedStorySection() {
  const {
    activeFeaturedId,
    activeFeaturedProduct,
    setFeaturedProduct,
    isStageFading,
    mediaSlots,
    addToBag,
  } = useCouture();

  const sectionRef = useRef<HTMLElement>(null);
  const craftInnerRef = useRef<HTMLDivElement>(null);
  const drapeInnerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const { gsap, ScrollTrigger } = registerGSAP();

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Reveal animations
      const revealElements = sectionRef.current?.querySelectorAll('.reveal-up, .reveal-curtain');
      revealElements?.forEach((el) => {
        ScrollTrigger.create({
          trigger: el,
          start: 'top 85%',
          onEnter: () => el.classList.add('is-visible'),
          once: true,
        });
      });

      // Parallax on image 2 & 3
      [
        { ref: craftInnerRef, speed: -0.04 },
        { ref: drapeInnerRef, speed: 0.04 },
      ].forEach(({ ref, speed }) => {
        if (!ref.current || !ref.current.parentElement) return;
        ScrollTrigger.create({
          trigger: ref.current.parentElement,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
          onUpdate: (self) => {
            const yOffset = (self.progress - 0.5) * 80 * (speed / 0.04);
            if (ref.current) {
              ref.current.style.transform = `translateY(${yOffset}px)`;
            }
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="featured-story"
      ref={sectionRef}
      data-light-section="true"
      className="relative z-20 pt-24 sm:pt-32 pb-20 sm:pb-28 bg-ivory text-obsidian overflow-hidden"
    >
      <span id="featured-bg-number" className="hidden">
        {activeFeaturedProduct.num}
      </span>

      {/* Minimal Top Bar: Garment Title + 3-Garment Switcher */}
      <div className="w-full px-6 sm:px-10 lg:px-16 mb-10 sm:mb-14 flex flex-col lg:flex-row lg:items-end justify-between gap-6 reveal-up">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="w-6 h-[1.5px] bg-crimson" />
            <span
              id="featured-collection-tag"
              className="text-[10px] uppercase tracking-[0.34em] text-crimson font-medium"
            >
              {activeFeaturedProduct.collection}
            </span>
          </div>
          <h2
            id="featured-product-title"
            className="font-serif text-4xl sm:text-6xl font-light leading-none text-obsidian"
          >
            {activeFeaturedProduct.name}
          </h2>
        </div>

        {/* Switcher demonstrating that the featured product & all 3 photos replace together */}
        <div
          className="flex flex-wrap items-center gap-2"
          role="tablist"
          aria-label="Featured Product Selection"
        >
          {[
            { id: 'devika-saree', label: '01 · Devika Saree' },
            { id: 'meher-kurta', label: '02 · Meher Tissue Set' },
            { id: 'ira-drape', label: '03 · Ira Silk Drape' },
          ].map((tab) => {
            const isActive = tab.id === activeFeaturedId;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setFeaturedProduct(tab.id, true)}
                className={`featured-switch-btn px-4 py-2.5 text-[10px] uppercase tracking-[0.24em] border transition-all duration-500 ${
                  isActive
                    ? 'bg-crimson text-ivory border-crimson'
                    : 'bg-alabaster text-obsidian/80 border-obsidian/20 hover:border-crimson'
                }`}
                data-featured-id={tab.id}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Monumental 3-Photo Same-Product Lookbook Framed in Warm Beige (#EAE0D0) */}
      <div id="featured-triptych-stage" className="w-full px-4 sm:px-8 lg:px-16">
        <div
          className={`p-2 sm:p-4 bg-alabaster border border-obsidian/10 grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-4 items-stretch shadow-sm ${
            isStageFading ? 'featured-stage-fade' : ''
          }`}
        >
          {/* Image 1 — Main Photograph (Dominant Full-Height Portrait with Overlaid Story & CTA) */}
          <div
            className="lg:col-span-7 relative h-[82vh] sm:h-[92vh] overflow-hidden group reveal-curtain"
          >
            <div className="w-full h-full transition-transform duration-1000 group-hover:scale-[1.03]">
              {mediaSlots.feat_main?.src && (
                <img
                  src={mediaSlots.feat_main.src}
                  alt={activeFeaturedProduct.name}
                  className="w-full h-full object-cover object-top select-none"
                />
              )}
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian/92 via-obsidian/15 to-transparent pointer-events-none" />

            {/* Top-left subtle badge with Signature Red border */}
            <div className="absolute top-6 left-6 sm:top-8 sm:left-8 flex items-center gap-3 pointer-events-none">
              <span className="text-[10px] uppercase tracking-[0.3em] text-ivory bg-obsidian/70 backdrop-blur-md px-3.5 py-1.5 border-l-2 border-crimson">
                01 / Full Silhouette
              </span>
            </div>

            {/* Bottom Overlaid Editorial Story + Actions directly on Image 1 */}
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10 lg:p-12 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
              <div className="max-w-md pointer-events-none">
                <span
                  id="feat-cap-1"
                  className="text-[10px] uppercase tracking-[0.28em] text-brass-light block mb-2"
                >
                  {activeFeaturedProduct.cap1}
                </span>
                <p
                  id="featured-product-desc"
                  className="text-xs sm:text-sm text-ivory/90 font-light leading-relaxed"
                >
                  {activeFeaturedProduct.desc}
                </p>
              </div>

              <div
                className="flex items-center gap-5 shrink-0"
                onClick={(e) => e.stopPropagation()}
              >
                <span
                  id="featured-product-price"
                  className="font-serif text-2xl text-brass-light"
                >
                  {formatINR(activeFeaturedProduct.price)}
                </span>
                <Link
                  id="featured-see-more"
                  href={`/collection?product=${activeFeaturedProduct.id}`}
                  className="editorial-link text-[10px] uppercase tracking-[0.26em] text-ivory hover:text-brass-light focus:outline-none"
                >
                  <span>See More</span>
                </Link>
                <button
                  id="featured-quick-add"
                  type="button"
                  onClick={() =>
                    addToBag({
                      id: activeFeaturedProduct.id,
                      name: activeFeaturedProduct.name,
                      price: activeFeaturedProduct.price,
                      img: activeFeaturedProduct.img1,
                    })
                  }
                  className="px-5 py-3 bg-crimson text-ivory text-[10px] uppercase tracking-[0.24em] hover:bg-crimson-light transition-colors"
                >
                  Add to Bag
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Image 2 (Fabric Macro) + Image 3 (Alternate Drape) Stacked Edge-to-Edge */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3 sm:gap-4">
            {/* Image 2 — Fabric and Craftsmanship (Close-up of the SAME outfit) */}
            <div
              className="relative h-[44vh] sm:h-[45vh] overflow-hidden group reveal-curtain"
            >
              <div
                ref={craftInnerRef}
                className="parallax-img-inner w-full h-[112%] -mt-[6%] transition-transform duration-1000 group-hover:scale-[1.05]"
                data-parallax="-0.04"
              >
                {mediaSlots.feat_craft?.src && (
                  <img
                    src={mediaSlots.feat_craft.src}
                    alt={activeFeaturedProduct.cap2}
                    className="w-full h-full object-cover object-top select-none"
                  />
                )}
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/88 via-transparent to-transparent pointer-events-none" />
              <div className="absolute top-5 left-5 pointer-events-none">
                <span className="text-[9px] uppercase tracking-[0.28em] text-ivory bg-obsidian/70 backdrop-blur-md px-3 py-1 border-l-2 border-brass">
                  02 / Fabric &amp; Craftsmanship
                </span>
              </div>
              <div className="absolute bottom-5 left-5 right-5 pointer-events-none">
                <p
                  id="feat-cap-2"
                  className="font-serif text-xl sm:text-2xl font-light text-ivory"
                >
                  {activeFeaturedProduct.cap2}
                </p>
              </div>
            </div>

            {/* Image 3 — Alternate Styling and Draping (Same outfit from alternate angle) */}
            <div
              className="relative h-[44vh] sm:h-[45vh] overflow-hidden group reveal-curtain"
            >
              <div
                ref={drapeInnerRef}
                className="parallax-img-inner w-full h-[112%] -mt-[6%] transition-transform duration-1000 group-hover:scale-[1.05]"
                data-parallax="0.04"
              >
                {mediaSlots.feat_drape?.src && (
                  <img
                    src={mediaSlots.feat_drape.src}
                    alt={activeFeaturedProduct.cap3}
                    className="w-full h-full object-cover object-top select-none"
                  />
                )}
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/88 via-transparent to-transparent pointer-events-none" />
              <div className="absolute top-5 left-5 pointer-events-none">
                <span className="text-[9px] uppercase tracking-[0.28em] text-ivory bg-obsidian/70 backdrop-blur-md px-3 py-1 border-l-2 border-crimson">
                  03 / Alternate Draping
                </span>
              </div>
              <div className="absolute bottom-5 left-5 right-5 pointer-events-none">
                <p
                  id="feat-cap-3"
                  className="font-serif text-xl sm:text-2xl font-light text-ivory"
                >
                  {activeFeaturedProduct.cap3}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
