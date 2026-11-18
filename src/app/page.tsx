import React from 'react';
import { ScrollProgress } from '@/components/couture/ScrollProgress';
import { Header } from '@/components/couture/Header';
import { MobileNavOverlay } from '@/components/couture/MobileNavOverlay';
import { HeroSection } from '@/components/couture/HeroSection';
import { CollectionDiscoverySection } from '@/components/couture/CollectionDiscoverySection';
import { FeaturedStorySection } from '@/components/couture/FeaturedStorySection';
import { OurJourneySection } from '@/components/couture/OurJourneySection';
import { FollowUsSection } from '@/components/couture/FollowUsSection';
import { Footer } from '@/components/couture/Footer';
import { BagDrawer } from '@/components/couture/BagDrawer';
import { AccountModal } from '@/components/couture/AccountModal';
import { MediaStudioDrawer } from '@/components/couture/MediaStudioDrawer';
import { Toast } from '@/components/couture/Toast';
import { BackToTop } from '@/components/couture/BackToTop';

export default function HomePage() {
  return (
    <>
      {/* Scroll Continuity Hairline */}
      <ScrollProgress />

      {/* Adaptive Minimal Luxury Header */}
      <Header />

      {/* Fullscreen Mobile Navigation Menu Overlay */}
      <MobileNavOverlay />

      <main>
        {/* 1. Hero — Full-Bleed Runway Fashion Campaign */}
        <HeroSection />

        {/* 2. Collection Discovery — Soft Black Cinematic Gallery */}
        <CollectionDiscoverySection />

        {/* 3. Featured Collection — Warm Ivory & Warm Beige Exhibition Stage */}
        <FeaturedStorySection />

        {/* 4. Our Journey — Full-Viewport Pit Loom Story */}
        <OurJourneySection />

        {/* 5. Follow Us — A Glimpse Into Our World (Social Showcase) */}
        <FollowUsSection />
      </main>

      {/* Minimal Luxury Footer */}
      <Footer />

      {/* Interactive Modals and Drawers */}
      <BagDrawer />
      <AccountModal />
      <MediaStudioDrawer />
      <BackToTop />
      <Toast />
    </>
  );
}
