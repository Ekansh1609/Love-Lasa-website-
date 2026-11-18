'use client';

import React from 'react';
import { useCouture } from '@/context/CoutureContext';
import { COLLECTIONS_CATALOG, formatINR } from '@/config/coutureData';

export function CollectionDrawer() {
  const { collectionDrawer, closeCollectionDrawer, addToBag } = useCouture();
  const { isOpen, collectionKey } = collectionDrawer;

  const catalog = COLLECTIONS_CATALOG[collectionKey] || COLLECTIONS_CATALOG['new-arrivals'];

  return (
    <div
      id="collection-drawer"
      onClick={(e) => {
        if (e.target === e.currentTarget) closeCollectionDrawer();
      }}
      className={`drawer-backdrop fixed inset-0 z-[60] bg-obsidian/75 backdrop-blur-xs flex justify-end ${
        isOpen ? 'is-open' : ''
      }`}
    >
      <div className="drawer-panel w-full max-w-2xl bg-ivory text-obsidian border-l border-obsidian/15 h-full overflow-y-auto p-6 sm:p-10 flex flex-col justify-between shadow-2xl">
        <div>
          <div className="flex items-center justify-between border-b border-obsidian/15 pb-5 mb-8">
            <div>
              <p
                id="drawer-kicker"
                className="text-[10px] uppercase tracking-[0.28em] text-crimson font-medium mb-1"
              >
                {catalog.kicker}
              </p>
              <h3
                id="drawer-title"
                className="font-serif text-3xl sm:text-4xl font-light text-obsidian"
              >
                {catalog.title}
              </h3>
            </div>
            <button
              id="close-collection-drawer"
              type="button"
              onClick={closeCollectionDrawer}
              className="p-2 text-obsidian/70 hover:text-crimson focus:outline-none"
              aria-label="Close Collection"
            >
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.3"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          <p
            id="drawer-subtitle"
            className="text-xs text-taupe font-light leading-relaxed mb-8"
          >
            {catalog.subtitle}
          </p>

          <div id="drawer-items" className="space-y-5">
            {catalog.items.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 p-4 bg-alabaster border border-obsidian/10"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-20 h-24 object-cover object-top bg-sand shrink-0"
                  />
                  <div>
                    <h4 className="font-serif text-xl text-obsidian">{item.name}</h4>
                    <p className="text-xs text-taupe font-light mt-1">{item.detail}</p>
                    <p className="text-xs text-crimson font-medium mt-2">{formatINR(item.price)}</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() =>
                    addToBag({
                      id: item.id,
                      name: item.name,
                      price: item.price,
                      img: item.img,
                    })
                  }
                  className="add-item-btn px-5 py-2.5 bg-crimson text-ivory text-[10px] uppercase tracking-[0.22em] hover:bg-crimson-light transition-colors self-start sm:self-center shrink-0"
                >
                  Add to Bag
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
