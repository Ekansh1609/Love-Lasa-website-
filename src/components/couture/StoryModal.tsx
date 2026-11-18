'use client';

import React from 'react';
import { useCouture } from '@/context/CoutureContext';

export function StoryModal() {
  const { isStoryOpen, setIsStoryOpen } = useCouture();

  return (
    <div
      id="story-modal"
      onClick={(e) => {
        if (e.target === e.currentTarget) setIsStoryOpen(false);
      }}
      className={`modal-backdrop fixed inset-0 z-[65] bg-obsidian/85 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 ${
        isStoryOpen ? 'is-open' : ''
      }`}
    >
      <div className="bg-charcoal text-ivory w-full max-w-2xl p-8 sm:p-12 border border-ivory/15 relative max-h-[90vh] overflow-y-auto shadow-2xl">
        <button
          id="close-story-modal"
          type="button"
          onClick={() => setIsStoryOpen(false)}
          className="absolute top-6 right-6 p-1.5 text-ivory/60 hover:text-ivory focus:outline-none"
          aria-label="Close Story"
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
        <div className="flex items-center gap-3 mb-3">
          <span className="w-6 h-[1.5px] bg-crimson" />
          <p className="text-[10px] uppercase tracking-[0.28em] text-brass-light">Our Journey</p>
        </div>
        <h3 className="font-serif text-3xl sm:text-4xl font-light text-ivory mb-6">
          From Pit Loom to Contemporary Form
        </h3>
        <div className="space-y-4 text-sm text-ivory/80 font-light leading-relaxed">
          <p>
            Founded as an intimate dialogue between Indian handloom heritage and quiet architectural tailoring, Love Lasa collaborates with third-generation weaver clusters in Chanderi, Maheshwar, and Varanasi.
          </p>
          <p>
            Each textile begins as undyed mulberry silk, organic cotton, or fine tissue—woven slowly so the fabric retains natural breathability and luminous drape.
          </p>
          <p>
            Our ateliers in Fort and Kala Ghoda translate these hand-beaten textures into modular evening wear, unstructured saris, and weightless layers designed to live gracefully across generations.
          </p>
        </div>
      </div>
    </div>
  );
}
