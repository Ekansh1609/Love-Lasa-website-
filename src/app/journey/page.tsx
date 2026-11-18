import React, { Suspense } from 'react';
import type { Metadata } from 'next';
import { JourneyContainer } from '@/components/journey/JourneyContainer';

export const metadata: Metadata = {
  title: 'Our Journey — LOVE LASA Contemporary Indian Couture',
  description:
    'From third-generation pit looms in Chanderi, Varanasi, and Bengal to our atelier in Kala Ghoda, Mumbai. Woven in silence, tailored for today.',
};

export default function JourneyPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-obsidian flex items-center justify-center text-ivory">
          <span className="text-xs uppercase tracking-[0.3em] font-light">Loading Our Journey...</span>
        </div>
      }
    >
      <JourneyContainer />
    </Suspense>
  );
}
