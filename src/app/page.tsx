import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { PinnedRevealSection } from "@/components/sections/PinnedRevealSection";
import { DiscoveryDestinations } from "@/components/sections/DiscoveryDestinations";
import { ProductShowcase } from "@/components/sections/ProductShowcase";
import { BrandStorySection } from "@/components/sections/BrandStorySection";
import { NewsletterSection } from "@/components/sections/NewsletterSection";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#191817] selection:bg-[#191817] selection:text-[#FAF8F5]">
      {/* Editorial Minimal Header */}
      <Header />

      <main className="flex-1">
        {/* Full Viewport Campaign Hero with Scroll Cue */}
        <HeroSection />

        {/* Signature Pinned 3-Image Reveal Sequence (GSAP ScrollTrigger) */}
        <PinnedRevealSection />

        {/* Discovery Destinations: New Arrivals, Signature Pieces, Bestsellers */}
        <DiscoveryDestinations />

        {/* Image-led Product Discovery (Large editorial frames, hover alternate views) */}
        <ProductShowcase />

        {/* Atelier Craftsmanship & Brand Narrative */}
        <BrandStorySection />

        {/* Minimal Private Correspondence Invitation */}
        <NewsletterSection />
      </main>

      {/* Editorial Footer */}
      <Footer />
    </div>
  );
}
