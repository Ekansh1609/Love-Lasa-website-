'use client';

import React from 'react';
import { useCouture } from '@/context/CoutureContext';

export function Toast() {
  const { toast } = useCouture();

  return (
    <div
      id="toast"
      className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-[80] bg-obsidian text-ivory px-6 py-3 text-xs tracking-wide border-l-4 border-crimson shadow-2xl transition-all duration-300 ${
        toast.isVisible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
    >
      {toast.message}
    </div>
  );
}
