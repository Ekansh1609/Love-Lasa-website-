'use client';

import React, { useState } from 'react';
import { Header } from '@/components/couture/Header';
import { Footer } from '@/components/couture/Footer';
import { MobileNavOverlay } from '@/components/couture/MobileNavOverlay';
import { BagDrawer } from '@/components/couture/BagDrawer';
import { AccountModal } from '@/components/couture/AccountModal';
import { BackToTop } from '@/components/couture/BackToTop';
import { Toast } from '@/components/couture/Toast';
import { ScrollProgress } from '@/components/couture/ScrollProgress';
import { JourneyHero } from './JourneyHero';
import { StorySection } from './StorySection';
import { InspirationSection } from './InspirationSection';
import { CraftsmanshipSection } from './CraftsmanshipSection';
import { ModernExpressionSection } from './ModernExpressionSection';
import { VisionSection } from './VisionSection';
import { JourneyLightbox } from './JourneyLightbox';
import { LightboxImage } from '@/config/journeyData';

export function JourneyContainer() {
  const [activeLightboxImg, setActiveLightboxImg] = useState<LightboxImage | null>(null);

  return (
    <>
      {/* 1. Global Scroll Progress Hairline */}
      <ScrollProgress />

      {/* 2. Global Shared Header */}
      <Header />

      {/* 3. Global Shared Fullscreen Mobile Navigation Menu */}
      <MobileNavOverlay />

      <main className="min-h-screen">
        {/* Hero: Full-Bleed Pit Loom Section */}
        <JourneyHero />

        {/* 1. The Story of Love Lasa */}
        <StorySection onOpenLightbox={(img) => setActiveLightboxImg(img)} />

        {/* 2. Our Inspiration */}
        <InspirationSection onOpenLightbox={(img) => setActiveLightboxImg(img)} />

        {/* 3. The Art of Craftsmanship */}
        <CraftsmanshipSection onOpenLightbox={(img) => setActiveLightboxImg(img)} />

        {/* 4. Tradition Meets Modern Expression */}
        <ModernExpressionSection onOpenLightbox={(img) => setActiveLightboxImg(img)} />

        {/* 5. Our Vision (Closing Manifesto without popups) */}
        <VisionSection />
      </main>

      {/* 4. Global Shared Footer */}
      <Footer />

      {/* 5. Photograph Inspection Lightbox */}
      <JourneyLightbox
        image={activeLightboxImg}
        onClose={() => setActiveLightboxImg(null)}
      />

      {/* 6. Global Shared Overlays & Utilities */}
      <BagDrawer />
      <AccountModal />
      <BackToTop />
      <Toast />
    </>
  );
}
