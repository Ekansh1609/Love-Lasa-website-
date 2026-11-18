'use client';

import React, { useState, useEffect } from 'react';
import { CollectionProduct, formatINR } from '@/config/collectionData';
import { useCouture } from '@/context/CoutureContext';

interface QuickViewModalProps {
  product: CollectionProduct | null;
  onClose: () => void;
  onOpenProductDetail: (productId: string) => void;
}

function QuickViewModalInner({
  product,
  onClose,
  onOpenProductDetail,
}: {
  product: CollectionProduct;
  onClose: () => void;
  onOpenProductDetail: (productId: string) => void;
}) {
  const { addToBag } = useCouture();
  const [selectedImg, setSelectedImg] = useState<string>(product.images[0]);
  const [selectedSize, setSelectedSize] = useState<string>('S');

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const handleAdd = () => {
    addToBag({
      id: `${product.id}-${selectedSize}`,
      name: `${product.name} (Size: ${selectedSize})`,
      price: product.price,
      img: product.images[0],
    });
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center p-3 sm:p-6 bg-obsidian/80 backdrop-blur-sm animate-in fade-in duration-300"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${product.name} Quick View`}
    >
      {/* Outer Card with Pinned Close Button */}
      <div
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-ivory text-obsidian shadow-2xl border border-obsidian/15 animate-in zoom-in-95 duration-300 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Prominent High-Visibility Fixed Close Button (Pinned across Mobile, Tablet, Desktop) */}
        <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-50">
          <button
            type="button"
            onClick={onClose}
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-ivory text-obsidian border-2 border-obsidian/20 hover:border-crimson hover:bg-crimson hover:text-ivory flex items-center justify-center shadow-lg transition-all duration-200 cursor-pointer focus:outline-none"
            aria-label="Close Quick View"
            title="Close Quick View (Esc)"
          >
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Scrollable Content Container */}
        <div className="overflow-y-auto p-5 sm:p-8 md:p-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-start">
            {/* Left: Gallery */}
            <div className="md:col-span-6 flex flex-col gap-4">
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-alabaster border border-obsidian/10">
                <img
                  src={selectedImg || product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover object-top select-none"
                />
              </div>
              {product.images.length > 1 && (
                <div className="flex gap-2.5 overflow-x-auto pb-1">
                  {product.images.map((img, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setSelectedImg(img)}
                      className={`w-16 h-20 shrink-0 overflow-hidden border-2 transition-all cursor-pointer ${
                        selectedImg === img
                          ? 'border-crimson shadow-xs'
                          : 'border-transparent opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={img}
                        alt={`${product.name} thumbnail ${idx + 1}`}
                        className="w-full h-full object-cover object-top"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Right: Info & Actions */}
            <div className="md:col-span-6 flex flex-col pr-0 sm:pr-8">
              <span className="text-[10px] uppercase tracking-[0.3em] text-crimson font-medium mb-1">
                {product.num} &mdash; {product.categoryLabel}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-light text-obsidian mb-2">
                {product.name}
              </h3>
              <span className="font-serif text-xl sm:text-2xl text-obsidian mb-4">
                {formatINR(product.price)}
              </span>
              <p className="text-xs sm:text-sm text-taupe font-light leading-relaxed mb-6">
                {product.desc}
              </p>

              {/* Fabric & Craft Details */}
              <div className="border-y border-obsidian/10 py-4 mb-6 flex flex-col gap-2 text-xs">
                <p>
                  <strong className="font-medium text-obsidian">Fabric:</strong>{' '}
                  <span className="text-taupe">{product.fabric}</span>
                </p>
                <p>
                  <strong className="font-medium text-obsidian">Craft:</strong>{' '}
                  <span className="text-taupe">{product.craft}</span>
                </p>
              </div>

              {/* Standard Size Selector (XS, S, M, L) */}
              <div className="mb-6">
                <label className="block text-[10px] uppercase tracking-[0.24em] text-taupe mb-2">
                  Select Size: {selectedSize}
                </label>
                <div className="flex flex-wrap gap-2">
                  {['XS', 'S', 'M', 'L'].map((sz) => (
                    <button
                      key={sz}
                      type="button"
                      onClick={() => setSelectedSize(sz)}
                      className={`min-w-[42px] px-3.5 py-1.5 text-xs font-light border transition-all cursor-pointer ${
                        selectedSize === sz
                          ? 'bg-crimson text-ivory border-crimson'
                          : 'bg-alabaster text-obsidian border-obsidian/20 hover:border-crimson hover:text-crimson'
                      }`}
                    >
                      {sz}
                    </button>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-3">
                <button
                  type="button"
                  onClick={handleAdd}
                  className="w-full py-3.5 bg-crimson text-ivory text-[10px] uppercase tracking-[0.28em] hover:bg-crimson-light transition-colors cursor-pointer font-medium shadow-sm"
                >
                  Add to Bag
                </button>
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onOpenProductDetail(product.id);
                  }}
                  className="w-full py-3 bg-alabaster text-obsidian text-[10px] uppercase tracking-[0.24em] border border-obsidian/20 hover:bg-ivory hover:border-crimson transition-colors cursor-pointer"
                >
                  View Full Details &rarr;
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="w-full py-2 text-[10px] uppercase tracking-[0.22em] text-taupe hover:text-crimson transition-colors cursor-pointer text-center"
                >
                  &times; Close Quick View
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function QuickViewModal(props: QuickViewModalProps) {
  if (!props.product) return null;
  return (
    <QuickViewModalInner
      key={props.product.id}
      product={props.product}
      onClose={props.onClose}
      onOpenProductDetail={props.onOpenProductDetail}
    />
  );
}
