'use client';

import React, { useState } from 'react';
import { CollectionProduct, COLLECTION_PRODUCTS, formatINR } from '@/config/collectionData';
import { useCouture } from '@/context/CoutureContext';
import { ZoomLightbox } from './ZoomLightbox';

interface ProductDetailViewProps {
  product: CollectionProduct;
  onBack: () => void;
  onSelectProduct: (productId: string) => void;
  onOpenQuickView: (product: CollectionProduct) => void;
}

export function ProductDetailView({
  product,
  onBack,
  onSelectProduct,
  onOpenQuickView,
}: ProductDetailViewProps) {
  const { addToBag } = useCouture();
  const [activeImgIdx, setActiveImgIdx] = useState(0);
  const [selectedSize, setSelectedSize] = useState('S');
  const [isZoomOpen, setIsZoomOpen] = useState(false);

  const images = product.images;
  const currentImg = images[activeImgIdx] || images[0];

  const handleStepImage = (delta: number) => {
    setActiveImgIdx((prev) => (prev + delta + images.length) % images.length);
  };

  const handleAdd = () => {
    addToBag({
      id: `${product.id}-${selectedSize}`,
      name: `${product.name} (Size: ${selectedSize})`,
      price: product.price,
      img: product.images[0],
    });
  };

  // 4 other products for "You May Also Admire"
  const recommended = COLLECTION_PRODUCTS.filter((p) => p.id !== product.id).slice(0, 4);

  return (
    <section
      id="product-detail-view"
      data-light-section="true"
      className="bg-ivory text-obsidian pt-6 sm:pt-10 pb-16 sm:pb-24 border-t border-obsidian/10"
    >
      <div className="w-full px-6 sm:px-10 lg:px-16">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-3 text-xs tracking-wide text-taupe mb-8 sm:mb-12">
          <button
            type="button"
            onClick={onBack}
            className="text-obsidian hover:text-crimson font-medium flex items-center gap-1.5 transition-colors focus:outline-none cursor-pointer"
          >
            <span>&larr;</span>
            <span>Back to Collection</span>
          </button>
          <span>/</span>
          <span className="text-taupe/70 truncate">{product.name}</span>
        </div>

        {/* Main Product Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start mb-16 sm:mb-24">
          {/* Left Column: Multi-Image Interactive Gallery */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {/* Main Stage Image with Zoom Lightbox Trigger */}
            <div
              onClick={() => setIsZoomOpen(true)}
              className="relative aspect-[3/4] w-full overflow-hidden bg-alabaster border border-obsidian/10 group cursor-zoom-in"
              title="Click to zoom and inspect fabric macro"
            >
              <img
                src={currentImg}
                alt={`${product.name} view ${activeImgIdx + 1}`}
                className="w-full h-full object-cover object-top select-none transition-transform duration-700 group-hover:scale-[1.02]"
              />

              {/* Angle Counter Badge */}
              <div className="absolute top-4 left-4 bg-obsidian/75 backdrop-blur-md px-3 py-1 text-[9px] uppercase tracking-[0.28em] text-ivory pointer-events-none">
                {String(activeImgIdx + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
              </div>

              {/* Prev / Next buttons */}
              {images.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleStepImage(-1);
                    }}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-ivory/90 border border-obsidian/20 text-obsidian flex items-center justify-center hover:bg-crimson hover:border-crimson hover:text-ivory transition-all cursor-pointer focus:outline-none shadow-sm"
                    aria-label="Previous view"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <polyline points="15 18 9 12 15 6" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleStepImage(1);
                    }}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-ivory/90 border border-obsidian/20 text-obsidian flex items-center justify-center hover:bg-crimson hover:border-crimson hover:text-ivory transition-all cursor-pointer focus:outline-none shadow-sm"
                    aria-label="Next view"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </button>
                </>
              )}

              {/* Bottom Click to Zoom Cue */}
              <div className="absolute bottom-4 right-4 bg-obsidian/75 backdrop-blur-md px-3 py-1.5 text-[9px] uppercase tracking-[0.2em] text-ivory opacity-90 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity pointer-events-none">
                Click to Zoom
              </div>
            </div>

            {/* Thumbnails Row */}
            {images.length > 1 && (
              <div className="flex gap-2.5 sm:gap-3 overflow-x-auto pb-2">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveImgIdx(idx)}
                    className={`shrink-0 w-16 sm:w-20 h-22 sm:h-26 overflow-hidden border-2 transition-all cursor-pointer ${
                      activeImgIdx === idx
                        ? 'border-crimson'
                        : 'border-transparent opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={img}
                      alt={`${product.name} angle ${idx + 1}`}
                      className="w-full h-full object-cover object-top"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Editorial Specifications & Purchase Actions */}
          <div className="lg:col-span-5 flex flex-col lg:sticky lg:top-24">
            <span className="text-[10px] uppercase tracking-[0.32em] text-crimson font-medium mb-2">
              {product.num} &mdash; {product.categoryLabel}
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-obsidian leading-[1.08] mb-4">
              {product.name}
            </h1>
            <span className="font-serif text-2xl sm:text-3xl text-obsidian mb-6">
              {formatINR(product.price)}
            </span>

            <p className="text-xs sm:text-sm text-taupe font-light leading-relaxed mb-8">
              {product.desc}
            </p>

            {/* Atelier Craftsmanship & Fabric Details */}
            <div className="border-y border-obsidian/10 py-5 mb-8 flex flex-col gap-3.5 text-xs sm:text-sm">
              <div>
                <strong className="font-medium text-obsidian">Fabric:</strong>{' '}
                <span className="text-taupe">{product.fabric}</span>
              </div>
              <div>
                <strong className="font-medium text-obsidian">Craftsmanship:</strong>{' '}
                <span className="text-taupe">{product.craft}</span>
              </div>
            </div>

            {/* Standard Size Selector (XS, S, M, L) */}
            <div className="mb-8">
              <label className="block text-[10px] uppercase tracking-[0.26em] text-taupe font-medium mb-2.5">
                Select Size: {selectedSize}
              </label>
              <div className="flex flex-wrap gap-2.5">
                {['XS', 'S', 'M', 'L'].map((sz) => (
                  <button
                    key={sz}
                    type="button"
                    onClick={() => setSelectedSize(sz)}
                    className={`min-w-[48px] px-4 py-2 text-xs font-light border transition-all cursor-pointer ${
                      selectedSize === sz
                        ? 'bg-crimson text-ivory border-crimson shadow-xs'
                        : 'bg-ivory text-obsidian border-obsidian/20 hover:border-crimson hover:text-crimson'
                    }`}
                  >
                    {sz}
                  </button>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-3.5 mb-8">
              <button
                type="button"
                onClick={handleAdd}
                className="w-full py-4 bg-crimson text-ivory text-[10px] uppercase tracking-[0.28em] hover:bg-crimson-light transition-colors cursor-pointer font-medium shadow-sm"
              >
                Add to Bag
              </button>
              <p className="text-[10px] text-center text-taupe uppercase tracking-[0.2em]">
                Complimentary atelier delivery across India &bull; Worldwide shipping
              </p>
            </div>
          </div>
        </div>

        {/* You May Also Admire Recommendation Grid */}
        <div className="border-t border-obsidian/10 pt-12 sm:pt-16">
          <div className="flex items-end justify-between mb-8 sm:mb-10">
            <div>
              <span className="text-[10px] uppercase tracking-[0.3em] text-crimson font-medium block mb-1.5">
                Curated Suggestions
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl font-light text-obsidian">
                You May Also Admire
              </h3>
            </div>
            <button
              type="button"
              onClick={onBack}
              className="editorial-link text-[10px] uppercase tracking-[0.24em] text-obsidian hover:text-crimson transition-colors"
            >
              <span>View All Pieces</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {recommended.map((prod) => (
              <article
                key={prod.id}
                className="group flex flex-col"
              >
                <div
                  onClick={() => onSelectProduct(prod.id)}
                  className="relative aspect-[3/4] w-full overflow-hidden bg-alabaster border border-obsidian/10 cursor-pointer"
                >
                  <img
                    src={prod.images[0]}
                    alt={prod.name}
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {prod.images.length > 1 && (
                    <img
                      src={prod.images[1]}
                      alt={`${prod.name} alternate view`}
                      className="absolute inset-0 w-full h-full object-cover object-top opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    />
                  )}
                  {/* Badge */}
                  <div className="absolute top-3 left-3 pointer-events-none">
                    <span className="px-2 py-0.5 bg-obsidian/75 backdrop-blur-md text-[8px] uppercase tracking-[0.24em] text-ivory border-l-2 border-crimson">
                      {prod.num} / {prod.categoryLabel}
                    </span>
                  </div>

                  {/* Quick Actions Bar: Visible on mobile/tablet (<1024px), hover reveal on desktop (>=1024px) */}
                  <div
                    className="absolute inset-x-2.5 sm:inset-x-3 bottom-2.5 sm:bottom-3 flex items-center justify-between gap-2 opacity-100 lg:opacity-0 translate-y-0 lg:translate-y-2 lg:group-hover:opacity-100 lg:group-hover:translate-y-0 transition-all duration-300"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <button
                      type="button"
                      onClick={() => onOpenQuickView(prod)}
                      className="flex-1 py-2 bg-ivory/95 text-obsidian text-[8px] sm:text-[9px] uppercase tracking-[0.2em] hover:bg-alabaster transition-colors cursor-pointer font-medium shadow-sm"
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
                      className="flex-1 py-2 bg-crimson text-ivory text-[8px] sm:text-[9px] uppercase tracking-[0.2em] hover:bg-crimson-light transition-colors cursor-pointer font-medium shadow-sm"
                    >
                      Add to Bag
                    </button>
                  </div>
                </div>

                <div className="pt-3 flex items-start justify-between gap-3">
                  <div>
                    <h4
                      onClick={() => onSelectProduct(prod.id)}
                      className="font-serif text-lg font-light text-obsidian leading-snug cursor-pointer hover:text-crimson transition-colors"
                    >
                      {prod.name}
                    </h4>
                    <p className="text-[10px] text-taupe font-light mt-0.5">{prod.fabric}</p>
                  </div>
                  <span className="font-serif text-base text-obsidian shrink-0">
                    {formatINR(prod.price)}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* Fullscreen Zoom Lightbox */}
      <ZoomLightbox
        isOpen={isZoomOpen}
        onClose={() => setIsZoomOpen(false)}
        images={images}
        currentIndex={activeImgIdx}
        onStepIndex={handleStepImage}
        title={product.name}
      />
    </section>
  );
}
