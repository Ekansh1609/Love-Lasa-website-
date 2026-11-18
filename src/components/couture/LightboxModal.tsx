'use client';

import React from 'react';
import { useCouture } from '@/context/CoutureContext';

export function LightboxModal() {
  const { lightbox, closeLightbox, mediaSlots } = useCouture();
  const { isOpen, slotId } = lightbox;

  const slot = slotId ? mediaSlots[slotId] : null;

  return (
    <div
      id="lightbox-modal"
      onClick={(e) => {
        if (e.target === e.currentTarget) closeLightbox();
      }}
      className={`modal-backdrop fixed inset-0 z-[75] bg-obsidian/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-10 ${
        isOpen ? 'is-open' : ''
      }`}
    >
      <button
        id="close-lightbox"
        type="button"
        onClick={closeLightbox}
        className="absolute top-6 right-6 p-2 text-ivory/70 hover:text-ivory focus:outline-none"
        aria-label="Close Fullscreen Image"
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
      <div className="max-w-4xl w-full max-h-[88vh] flex flex-col items-center">
        <div
          id="lightbox-media"
          className="w-full max-h-[78vh] overflow-hidden flex items-center justify-center"
        >
          {slot?.src && (
            <img
              src={slot.src}
              alt={slot.label}
              className="max-h-[76vh] w-auto object-contain shadow-2xl select-none"
            />
          )}
        </div>
        <p
          id="lightbox-caption"
          className="mt-4 text-xs uppercase tracking-[0.24em] text-ivory/75 text-center"
        >
          {slot ? `${slot.label} — ${slot.note}` : ''}
        </p>
      </div>
    </div>
  );
}
