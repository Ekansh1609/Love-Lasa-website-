import { ImageSlot } from "@/types";

/**
 * LOVE LASA - Centralized Image Registry
 *
 * All imagery throughout the site is governed here.
 * When client photoshoot high-resolution assets are ready,
 * replace the `src` URLs and dimensions in this configuration file.
 * No layout or animation code needs to be modified.
 */

export const IMAGES = {
  hero: {
    src: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=2400&auto=format&fit=crop",
    alt: "Love Lasa Campaign - Contemporary Indian Wear, Form in Motion",
    width: 2400,
    height: 1600,
    caption: "Chapter 01 : Form in Motion",
  } satisfies ImageSlot,

  pinnedReveal: {
    left: {
      src: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1600&auto=format&fit=crop",
      alt: "Panel 01 - Fluid Silk Silhouette in Natural Light",
      width: 1200,
      height: 1600,
      caption: "01 / Draped Minimal",
    } satisfies ImageSlot,

    center: {
      src: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=1800&auto=format&fit=crop",
      alt: "Panel 02 - Sculptural Evening Coat with Monolithic Lines",
      width: 1400,
      height: 1800,
      caption: "02 / Sculpted Form",
    } satisfies ImageSlot,

    right: {
      src: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1600&auto=format&fit=crop",
      alt: "Panel 03 - Tactile Weave and Controlled Texture",
      width: 1200,
      height: 1600,
      caption: "03 / Raw Texture",
    } satisfies ImageSlot,
  },

  destinations: {
    newArrivals: {
      src: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=1400&auto=format&fit=crop",
      alt: "New Arrivals - Ivory Draped Silk Silhouette",
      width: 1400,
      height: 1800,
      caption: "New Arrivals",
    } satisfies ImageSlot,

    signaturePieces: {
      src: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=1400&auto=format&fit=crop",
      alt: "Signature Pieces - Rust Red Draped Gown in Golden Light",
      width: 1400,
      height: 1800,
      caption: "Signature Pieces",
    } satisfies ImageSlot,

    bestsellers: {
      src: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1400&auto=format&fit=crop",
      alt: "Bestsellers - Sculptural Embroidered Drape",
      width: 1400,
      height: 1800,
      caption: "Bestsellers",
    } satisfies ImageSlot,
  },

  brandStory: {
    src: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1800&auto=format&fit=crop",
    alt: "Atelier craftsmanship, hand-finished seams and quiet luxury",
    width: 1800,
    height: 1350,
    caption: "The Lasa Atelier, 2026",
  } satisfies ImageSlot,

  editorialBanner: {
    src: "https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=2200&auto=format&fit=crop",
    alt: "Love Lasa Runway Atmosphere - Minimalist Fluidity",
    width: 2200,
    height: 1200,
    caption: "Form & Presence",
  } satisfies ImageSlot,
};
