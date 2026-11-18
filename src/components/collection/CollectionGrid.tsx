'use client';

import React, { useMemo } from 'react';
import { CollectionProduct, formatINR } from '@/config/collectionData';
import { useCouture } from '@/context/CoutureContext';

interface CollectionGridProps {
  products: CollectionProduct[];
  activeFilter: string;
  onFilterChange: (filter: string) => void;
  activeSort: string;
  onSortChange: (sort: string) => void;
  onSelectProduct: (productId: string) => void;
  onOpenQuickView: (product: CollectionProduct) => void;
}

export function CollectionGrid({
  products,
  activeFilter,
  onFilterChange,
  activeSort,
  onSortChange,
  onSelectProduct,
  onOpenQuickView,
}: CollectionGridProps) {
  const { addToBag } = useCouture();

  const filteredAndSorted = useMemo(() => {
    const list =
      activeFilter === 'all'
        ? [...products]
        : products.filter((p) => p.category === activeFilter);

    if (activeSort === 'price-asc') {
      list.sort((a, b) => a.price - b.price);
    } else if (activeSort === 'price-desc') {
      list.sort((a, b) => b.price - a.price);
    }
    return list;
  }, [products, activeFilter, activeSort]);

  const filterButtons = [
    { id: 'all', label: 'All Collections' },
    { id: 'new-arrivals', label: 'New Arrivals' },
    { id: 'signature-pieces', label: 'Signature Pieces' },
    { id: 'bestsellers', label: 'Bestsellers' },
  ];

  return (
    <section
      id="collection-grid-section"
      data-light-section="true"
      className="relative z-20 bg-ivory text-obsidian py-12 sm:py-16 lg:py-20"
    >
      <div className="w-full px-6 sm:px-10 lg:px-16">
        {/* Filtering & Sorting Controls Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-obsidian/10 mb-10 sm:mb-14">
          {/* Category Filter Tabs with Golden Active & Hover Underline */}
          <div
            className="flex flex-wrap items-center gap-4 sm:gap-8"
            role="tablist"
            aria-label="Filter Collections"
          >
            {filterButtons.map((btn) => {
              const isActive = btn.id === activeFilter;
              return (
                <button
                  key={btn.id}
                  type="button"
                  onClick={() => onFilterChange(btn.id)}
                  className={`pb-2 text-[11px] sm:text-xs uppercase tracking-[0.24em] transition-all duration-300 cursor-pointer border-b-2 ${
                    isActive
                      ? 'text-brass-light border-brass-light font-medium'
                      : 'text-obsidian/70 border-transparent hover:text-brass-light hover:border-brass-light/50 font-normal'
                  }`}
                  aria-pressed={isActive}
                >
                  {btn.label}
                </button>
              );
            })}
          </div>

          {/* Sorting & Visible Counter */}
          <div className="flex items-center justify-between sm:justify-end gap-6">
            <span className="text-xs uppercase tracking-[0.24em] text-taupe font-light">
              Showing {filteredAndSorted.length}{' '}
              {filteredAndSorted.length === 1 ? 'Piece' : 'Pieces'}
            </span>

            <div className="flex items-center gap-2.5">
              <label
                htmlFor="sort-select"
                className="text-[10px] uppercase tracking-[0.22em] text-taupe hidden sm:inline"
              >
                Sort:
              </label>
              <select
                id="sort-select"
                value={activeSort}
                onChange={(e) => onSortChange(e.target.value)}
                className="bg-alabaster border border-obsidian/20 px-3 py-2 text-xs text-obsidian uppercase tracking-wider focus:outline-none focus:border-brass-light cursor-pointer transition-colors"
              >
                <option value="relevance">Relevance</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>

        {/* 6-Card Responsive Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {filteredAndSorted.map((prod) => (
            <article
              key={prod.id}
              className="group flex flex-col"
              data-product-id={prod.id}
            >
              {/* Product Card Image Container */}
              <div
                onClick={() => onSelectProduct(prod.id)}
                className="relative aspect-[3/4] w-full overflow-hidden bg-alabaster border border-obsidian/10 cursor-pointer"
                title={`View ${prod.name}`}
              >
                {/* Primary Image */}
                <img
                  src={prod.images[0]}
                  alt={prod.name}
                  className="w-full h-full object-cover object-top select-none transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Secondary Image for smooth crossfade on hover */}
                {prod.images.length > 1 && (
                  <img
                    src={prod.images[1]}
                    alt={`${prod.name} alternate view`}
                    className="absolute inset-0 w-full h-full object-cover object-top opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none select-none"
                  />
                )}

                {/* Top-left Number & Category Badge */}
                <div className="absolute top-4 left-4 pointer-events-none">
                  <span className="px-2.5 py-1 bg-obsidian/75 backdrop-blur-md text-[9px] uppercase tracking-[0.26em] text-ivory border-l-2 border-crimson">
                    {prod.num} / {prod.categoryLabel}
                  </span>
                </div>

                {/* Quick Add Bar: Visible and touch-accessible on mobile/tablet (<1024px), hover reveal on desktop (>=1024px) */}
                <div
                  className="absolute inset-x-3 sm:inset-x-4 bottom-3 sm:bottom-4 flex items-center justify-between gap-2 opacity-100 lg:opacity-0 translate-y-0 lg:translate-y-2 lg:group-hover:opacity-100 lg:group-hover:translate-y-0 transition-all duration-300"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    type="button"
                    onClick={() => onOpenQuickView(prod)}
                    className="flex-1 py-2 sm:py-2.5 bg-ivory/95 text-obsidian text-[9px] sm:text-[10px] uppercase tracking-[0.22em] hover:bg-alabaster transition-colors cursor-pointer font-medium shadow-sm"
                  >
                    Quick View
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      addToBag({
                        id: `${prod.id}-S`,
                        name: `${prod.name} (Size: S)`,
                        price: prod.price,
                        img: prod.images[0],
                      })
                    }
                    className="flex-1 py-2 sm:py-2.5 bg-crimson text-ivory text-[9px] sm:text-[10px] uppercase tracking-[0.22em] hover:bg-crimson-light transition-colors cursor-pointer font-medium shadow-sm"
                  >
                    Add to Bag
                  </button>
                </div>
              </div>

              {/* Minimal Product Caption */}
              <div className="pt-4 flex items-start justify-between gap-4">
                <div>
                  <h3
                    onClick={() => onSelectProduct(prod.id)}
                    className="font-serif text-2xl font-light text-obsidian leading-snug cursor-pointer hover:text-crimson transition-colors"
                  >
                    {prod.name}
                  </h3>
                  <p className="text-[11px] text-taupe font-light mt-0.5">
                    {prod.fabric}
                  </p>
                </div>
                <span className="font-serif text-xl text-obsidian shrink-0">
                  {formatINR(prod.price)}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
