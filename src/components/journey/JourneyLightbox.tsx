'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { LightboxImage } from '@/config/journeyData';

interface JourneyLightboxProps {
  image: LightboxImage | null;
  onClose: () => void;
}

export function JourneyLightbox({ image, onClose }: JourneyLightboxProps) {
  useEffect(() => {
    if (!image) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [image, onClose]);

  if (!image) return null;

  return (
    <div
      id="photo-lightbox"
      className="fixed inset-0 z-[75] bg-obsidian/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-300"
      role="dialog"
      aria-modal="true"
      aria-label="Photograph Inspection"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full bg-obsidian border border-brass/30 shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          id="close-photo-lightbox"
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center bg-obsidian/80 hover:bg-crimson text-ivory border border-ivory/20 transition-colors cursor-pointer"
          aria-label="Close Photograph"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* Image Display */}
        <div className="relative h-[65vh] sm:h-[75vh] w-full flex items-center justify-center bg-obsidian">
          <Image
            src={image.src}
            alt={image.alt || 'LOVE LASA Photograph'}
            fill
            sizes="(max-width: 1024px) 100vw, 85vw"
            className="object-contain"
          />
        </div>

        {/* Footer Caption */}
        <div className="px-6 py-4 border-t border-ivory/10 flex items-center justify-between gap-4 bg-obsidian/95">
          <p id="lightbox-caption" className="font-serif text-base sm:text-lg text-ivory/90 font-light truncate">
            {image.caption || image.alt}
          </p>
          <span className="text-[9px] uppercase tracking-[0.24em] text-brass-light shrink-0">
            LOVE LASA Archive
          </span>
        </div>
      </div>
    </div>
  );
}
