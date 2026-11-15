import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { IMAGES } from "@/config/images";

export function BrandStorySection() {
  return (
    <section id="atelier" className="py-24 sm:py-36 bg-[#F4EFEA] border-t border-[#E5DFD3]">
      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text Narrative (5 columns) */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="flex items-center space-x-2.5 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D32F2F]" />
              <span className="text-[11px] uppercase tracking-[0.28em] text-[#5E5B56]">
                The Atelier Narrative
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl lg:text-5xl tracking-[0.03em] font-light leading-tight text-[#191817]">
              Form Born of Stillness, Not Excess
            </h2>

            <div className="mt-8 space-y-5 text-xs sm:text-sm text-[#5E5B56] font-light leading-relaxed">
              <p>
                Love Lasa originated from an insistence on subtraction. In a landscape
                saturated with ephemeral noise and relentless cycles, we construct
                garments that stand as enduring architectural objects.
              </p>
              <p>
                Each silhouette is measured against the principles of quietude:
                draped natural wools, structured double-faced silks, and unhurried
                hand-finishing. We reject decorative excess in pursuit of pure
                sculptural posture.
              </p>
            </div>

            {/* Atelier hallmarks */}
            <div className="mt-10 pt-8 border-t border-[#E5DFD3] grid grid-cols-2 gap-6 text-[11px] uppercase tracking-[0.2em] text-[#191817]">
              <div>
                <span className="block text-[#8E8A83] text-[10px] mb-1">Method</span>
                Sculptural Draping
              </div>
              <div>
                <span className="block text-[#8E8A83] text-[10px] mb-1">Origins</span>
                Limited Atelier Editions
              </div>
            </div>
          </div>

          {/* Right Editorial Visual (7 columns) */}
          <div className="lg:col-span-7">
            <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full overflow-hidden bg-[#EFE9E0] border border-[#E5DFD3]">
              <Image
                src={IMAGES.brandStory.src}
                alt={IMAGES.brandStory.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover object-center"
              />
              <div className="absolute bottom-4 left-4 z-10 px-3 py-1.5 bg-[#FAF8F5]/90 backdrop-blur-xs text-[10px] uppercase tracking-[0.2em] text-[#191817] border border-[#E5DFD3]">
                {IMAGES.brandStory.caption}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
