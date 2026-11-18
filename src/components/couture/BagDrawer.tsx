'use client';

import React from 'react';
import { useCouture } from '@/context/CoutureContext';
import { formatINR } from '@/config/coutureData';

export function BagDrawer() {
  const {
    isBagOpen,
    setIsBagOpen,
    bag,
    updateBagQty,
    clearBag,
    bagSubtotal,
    showToast,
  } = useCouture();

  const handleCheckout = () => {
    if (bag.length === 0) {
      showToast('Your shopping bag is currently empty');
      return;
    }
    setIsBagOpen(false);
    showToast('Private checkout initiated — thank you for your selection');
    clearBag();
  };

  return (
    <div
      id="bag-drawer"
      onClick={(e) => {
        if (e.target === e.currentTarget) setIsBagOpen(false);
      }}
      className={`drawer-backdrop fixed inset-0 z-[60] bg-obsidian/75 backdrop-blur-xs flex justify-end ${
        isBagOpen ? 'is-open' : ''
      }`}
    >
      <div className="drawer-panel w-full max-w-md bg-ivory text-obsidian border-l border-obsidian/15 h-full flex flex-col justify-between p-6 sm:p-8 shadow-2xl">
        <div className="flex items-center justify-between border-b border-obsidian/15 pb-5">
          <div>
            <p className="text-[10px] uppercase tracking-[0.28em] text-crimson font-medium mb-1">
              Your Selection
            </p>
            <h3 className="font-serif text-2xl font-light text-obsidian">Shopping Bag</h3>
          </div>
          <button
            id="close-bag-drawer"
            type="button"
            onClick={() => setIsBagOpen(false)}
            className="p-2 text-obsidian/70 hover:text-crimson focus:outline-none"
            aria-label="Close Shopping Bag"
          >
            <svg
              className="w-5 h-5"
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

        <div id="bag-items-list" className="flex-1 overflow-y-auto py-6 space-y-5">
          {bag.length === 0 ? (
            <div className="py-16 text-center">
              <p className="font-serif text-2xl text-obsidian/70 mb-2">Your bag is empty</p>
              <p className="text-xs text-taupe font-light">
                Explore our collections to curate your selection.
              </p>
            </div>
          ) : (
            bag.map((item) => (
              <div
                key={item.id}
                className="flex items-start justify-between gap-4 border-b border-obsidian/10 pb-4"
              >
                <div>
                  <h4 className="font-serif text-lg text-obsidian">{item.name}</h4>
                  <p className="text-xs text-crimson font-medium mt-0.5">
                    {formatINR(item.price)}
                  </p>
                </div>
                <div className="flex items-center gap-3 border border-obsidian/20 px-2.5 py-1 bg-alabaster">
                  <button
                    type="button"
                    onClick={() => updateBagQty(item.id, -1)}
                    className="bag-dec text-xs text-obsidian hover:text-crimson focus:outline-none"
                  >
                    &minus;
                  </button>
                  <span className="text-xs font-medium">{item.qty}</span>
                  <button
                    type="button"
                    onClick={() => updateBagQty(item.id, 1)}
                    className="bag-inc text-xs text-obsidian hover:text-crimson focus:outline-none"
                  >
                    +
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="border-t border-obsidian/15 pt-5">
          <div className="flex items-center justify-between mb-4">
            <span className="text-[10px] uppercase tracking-[0.24em] text-taupe">Subtotal</span>
            <span id="bag-subtotal" className="font-serif text-2xl text-obsidian">
              {formatINR(bagSubtotal)}
            </span>
          </div>
          <button
            id="btn-checkout"
            type="button"
            onClick={handleCheckout}
            className="w-full py-3.5 bg-crimson text-ivory text-[10px] uppercase tracking-[0.26em] hover:bg-crimson-light transition-colors duration-300"
          >
            Proceed to Private Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
