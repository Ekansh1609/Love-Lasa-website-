import React, { Suspense } from 'react';
import type { Metadata } from 'next';
import { CollectionContainer } from '@/components/collection/CollectionContainer';

export const metadata: Metadata = {
  title: 'The Collection — LOVE LASA Contemporary Indian Couture',
  description:
    'Explore the six numbered handloom silhouettes woven across Chanderi, Varanasi, and Bengal. Made to measure Indian luxury couture.',
};

export default function CollectionPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-obsidian flex items-center justify-center text-ivory">
          <span className="text-xs uppercase tracking-[0.3em] font-light">Loading Collection...</span>
        </div>
      }
    >
      <CollectionContainer />
    </Suspense>
  );
}
