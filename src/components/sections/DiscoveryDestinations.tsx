import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { DISCOVERY_DESTINATIONS } from "@/config/site";

export function DiscoveryDestinations() {
  return (
    <section
      id="collections"
      className="py-24 sm:py-32 bg-[#F4EFEA] border-t border-b border-[#E5DFD3]/70"
    >
      <Container size="wide">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-[11px] uppercase tracking-[0.26em] text-[#5E5B56] block mb-3">
              Curated Destinations
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl tracking-[0.03em] font-light text-[#191817]">
              The Core Chapters
            </h2>
          </div>
          <p className="max-w-md text-xs sm:text-sm text-[#5E5B56] font-light leading-relaxed">
            Three distinct perspectives navigating sculptural presence, timeless
            garment construction, and quiet everyday elegance.
          </p>
        </div>

        {/* 3 Editorial Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
          {DISCOVERY_DESTINATIONS.map((destination) => (
            <Link
              key={destination.id}
              href={destination.href}
              className="group block relative"
            >
              {/* Image Frame */}
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#EFE9E0] border border-[#E5DFD3]">
                <Image
                  src={destination.image.src}
                  alt={destination.image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Subtle top badge */}
                {destination.highlightTag && (
                  <div className="absolute top-4 left-4 z-10">
                    <span className="inline-flex items-center space-x-1.5 px-2.5 py-1 bg-[#FAF8F5]/90 backdrop-blur-xs text-[10px] uppercase tracking-[0.18em] text-[#191817] border border-[#E5DFD3]/70">
                      {destination.highlightTag === "New Release" && (
                        <span className="w-1 h-1 rounded-full bg-[#D32F2F]" />
                      )}
                      <span>{destination.highlightTag}</span>
                    </span>
                  </div>
                )}

                {/* Corner hover link icon */}
                <div className="absolute bottom-4 right-4 z-10 w-9 h-9 rounded-full bg-[#FAF8F5]/90 backdrop-blur-xs flex items-center justify-center text-[#191817] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              {/* Text Meta below image */}
              <div className="mt-6">
                <span className="text-[10px] uppercase tracking-[0.22em] text-[#8E8A83] block mb-1.5">
                  {destination.tagline}
                </span>
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#191817] group-hover:text-[#5E5B56] transition-colors">
                    {destination.title}
                  </h3>
                </div>
                <p className="mt-2 text-xs text-[#5E5B56] leading-relaxed font-light">
                  {destination.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
