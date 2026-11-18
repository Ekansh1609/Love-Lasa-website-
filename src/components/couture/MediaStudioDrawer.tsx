'use client';

import React from 'react';
import { useCouture } from '@/context/CoutureContext';
import { MediaSlotId } from '@/types/couture';

export function MediaStudioDrawer() {
  const {
    isMediaStudioOpen,
    setIsMediaStudioOpen,
    mediaSlots,
    updateMediaSlot,
    resetAllPhotos,
    showToast,
  } = useCouture();

  const handleFileUpload = (slotId: MediaSlotId, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        updateMediaSlot(slotId, reader.result);
        const slot = mediaSlots[slotId];
        showToast(`Updated "${slot?.label || slotId}" with your image`);
      }
    };
    reader.readAsDataURL(file);
    e.target.value = '';
  };

  return (
    <div
      id="media-studio-drawer"
      onClick={(e) => {
        if (e.target === e.currentTarget) setIsMediaStudioOpen(false);
      }}
      className={`drawer-backdrop fixed inset-0 z-[70] bg-obsidian/75 backdrop-blur-xs flex justify-end ${
        isMediaStudioOpen ? 'is-open' : ''
      }`}
    >
      <div className="drawer-panel w-full max-w-md bg-ivory text-obsidian border-l border-obsidian/15 h-full flex flex-col justify-between p-6 sm:p-8 shadow-2xl">
        <div className="flex items-center justify-between border-b border-obsidian/15 pb-4">
          <div>
            <p className="text-[10px] uppercase tracking-[0.24em] text-crimson font-medium mb-1">
              Client Photography
            </p>
            <h3 className="font-serif text-2xl font-light text-obsidian">
              Replaceable Image Slots
            </h3>
          </div>
          <button
            id="close-media-studio"
            type="button"
            onClick={() => setIsMediaStudioOpen(false)}
            className="p-2 text-obsidian/70 hover:text-crimson focus:outline-none"
            aria-label="Close Photo Studio"
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
        <p className="text-xs text-taupe font-light py-3 leading-relaxed">
          Upload actual client photoshoot images below to preview them live in any frame.
        </p>

        <div id="media-studio-list" className="flex-1 overflow-y-auto space-y-3 pr-1">
          {Object.values(mediaSlots).map((slot) => (
            <div
              key={slot.id}
              className="p-3 bg-alabaster border border-obsidian/15 flex items-center gap-3"
            >
              <img
                src={slot.src}
                alt={slot.label}
                className="w-12 h-14 object-cover object-top bg-sand shrink-0 border border-obsidian/10"
              />
              <div className="flex-1 min-w-0">
                <p className="text-xs font-medium text-obsidian truncate">{slot.label}</p>
                <p className="text-[9px] uppercase tracking-wider text-taupe">
                  {slot.ratio} &middot; {slot.note}
                </p>
                <label className="mt-1.5 inline-block text-[9px] uppercase tracking-wider text-crimson hover:underline cursor-pointer">
                  <span>Upload New Image</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleFileUpload(slot.id, e)}
                    className="hidden media-slot-input"
                  />
                </label>
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-obsidian/15 pt-4 flex items-center justify-between gap-3">
          <button
            id="btn-reset-all-photos"
            type="button"
            onClick={resetAllPhotos}
            className="text-[10px] uppercase tracking-[0.2em] text-crimson hover:text-obsidian underline focus:outline-none cursor-pointer"
          >
            Reset All Placeholders
          </button>
        </div>
      </div>
    </div>
  );
}
