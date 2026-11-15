"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { EDITORIAL_PRODUCTS } from "@/config/site";

const CATEGORIES = ["All Curations", "Signature Pieces", "New Arrivals", "Bestsellers"] as const;

export function ProductShowcase() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All Curations");

  const filteredProducts =
    selectedCategory === "All Curations"
      ? EDITORIAL_PRODUCTS
      : EDITORIAL_PRODUCTS.filter((p) => p.category === selectedCategory);

  return (
    <section id="new-arrivals" className="py-24 sm:py-32 bg-[#FAF8F5] text-[#191817]">
      <Container size="wide">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <span className="text-[11px] uppercase tracking-[0.26em] text-[#5E5B56] block mb-3">
              Editorial Catalogue
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl tracking-[0.03em] font-light">
              Sculpted Silhouettes
            </h2>
          </div>

          {/* Minimalist Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-4 border-b border-[#E5DFD3] pb-2 md:pb-0 md:border-b-0">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-[11px] uppercase tracking-[0.2em] py-2 px-3 transition-colors relative ${
                  selectedCategory === cat
                    ? "text-[#191817] font-medium"
                    : "text-[#8E8A83] hover:text-[#191817]"
                }`}
              >
                <span>{cat}</span>
                {selectedCategory === cat && (
                  <motion.div
                    layoutId="activeFilterUnderline"
                    className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#191817]"
                    transition={{ duration: 0.3 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid: Large editorial frames, not small generic cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 lg:gap-x-14 gap-y-16 sm:gap-y-20">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4 }}
                className="group flex flex-col"
              >
                {/* Large Editorial Image with Hover Alternate */}
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#EFE9E0] border border-[#E5DFD3]">
                  {/* Primary Image */}
                  <Image
                    src={product.images.primary.src}
                    alt={product.images.primary.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-center transition-all duration-700 ease-out group-hover:scale-105 group-hover:opacity-0"
                  />

                  {/* Alternate Hover Image */}
                  <Image
                    src={product.images.hover.src}
                    alt={product.images.hover.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-center transition-all duration-700 ease-out opacity-0 group-hover:opacity-100 group-hover:scale-105"
                  />

                  {/* Category Pill */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="text-[10px] tracking-[0.2em] uppercase px-2.5 py-1 bg-[#FAF8F5]/90 backdrop-blur-xs text-[#191817] border border-[#E5DFD3]/80">
                      {product.category}
                    </span>
                  </div>

                  {/* Quick view indicator */}
                  <div className="absolute bottom-4 right-4 z-10 w-10 h-10 rounded-full bg-[#FAF8F5]/90 backdrop-blur-xs flex items-center justify-center text-[#191817] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Details Meta */}
                <div className="mt-6 flex flex-col justify-between flex-1">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#191817] group-hover:text-[#5E5B56] transition-colors">
                      {product.title}
                    </h3>
                    <span className="font-sans text-sm tracking-wider font-normal text-[#191817]">
                      {product.priceFormatted}
                    </span>
                  </div>

                  <p className="mt-1.5 text-xs text-[#5E5B56] font-light leading-relaxed">
                    {product.subtitle}
                  </p>

                  {/* Attributes snippet */}
                  {product.attributes && (
                    <div className="mt-4 pt-3 border-t border-[#E5DFD3]/60 flex items-center justify-between text-[11px] text-[#8E8A83]">
                      <span>{product.attributes.material}</span>
                      <span className="text-[#191817] font-medium tracking-wider group-hover:underline underline-offset-4">
                        View Details
                      </span>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
}
