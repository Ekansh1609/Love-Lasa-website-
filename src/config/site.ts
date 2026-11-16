import { CollectionItem, NavItem, ProductItem } from "@/types";
import { IMAGES } from "./images";

export const SITE_CONFIG = {
  name: "Love Lasa",
  tagline: "Modern Minimalism • Sculpted Presence",
  description:
    "An editorial fashion studio rooted in quiet luxury, architectural silhouettes, and intentional restraint.",
  socials: {
    instagram: "https://instagram.com",
    editorial: "#",
    archive: "#",
  },
};

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "#" },
  { label: "Shop", href: "#shop" },
  { label: "Our Story", href: "#our-story" },
  { label: "Contact Us", href: "#contact-us" },
];

export const DISCOVERY_DESTINATIONS: CollectionItem[] = [
  {
    id: "new-arrivals",
    title: "New Arrivals",
    tagline: "Autumn/Winter 2026",
    description: "Precise draping, muted tones, and effortless volume crafted for contemplative living.",
    href: "#new-arrivals",
    highlightTag: "New Release",
    image: IMAGES.destinations.newArrivals,
  },
  {
    id: "signature-pieces",
    title: "Signature Pieces",
    tagline: "The Permanent Archive",
    description: "Sculptural outerwear and architectural essentials developed without seasonal expiry.",
    href: "#signature-pieces",
    highlightTag: "Core Archive",
    image: IMAGES.destinations.signaturePieces,
  },
  {
    id: "bestsellers",
    title: "Bestsellers",
    tagline: "Quiet Distinction",
    description: "Beloved silhouettes defined by refined proportions, tactile silks, and wool cashmere.",
    href: "#bestsellers",
    highlightTag: "Most Sought",
    image: IMAGES.destinations.bestsellers,
  },
];

export const EDITORIAL_PRODUCTS: ProductItem[] = [
  {
    id: "product-1",
    title: "Sculpted Cocoon Trench",
    subtitle: "Double-faced wool cashmere blend in warm stone",
    priceFormatted: "₹ 34,500",
    category: "Signature Pieces",
    slug: "sculpted-cocoon-trench",
    images: {
      primary: {
        src: "https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=1200&auto=format&fit=crop",
        alt: "Sculpted Cocoon Trench front angle",
        width: 1200,
        height: 1600,
      },
      hover: {
        src: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop",
        alt: "Sculpted Cocoon Trench back profile and texture detail",
        width: 1200,
        height: 1600,
      },
    },
    attributes: {
      material: "90% Virgin Wool, 10% Cashmere",
      fit: "Relaxed tailored silhouette",
      origin: "Crafted in limited atelier batches",
    },
  },
  {
    id: "product-2",
    title: "Column Silk Evening Tunic",
    subtitle: "Heavyweight sand-washed silk with bias-cut fluidity",
    priceFormatted: "₹ 26,000",
    category: "New Arrivals",
    slug: "column-silk-evening-tunic",
    images: {
      primary: {
        src: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1200&auto=format&fit=crop",
        alt: "Column Silk Evening Tunic in ivory",
        width: 1200,
        height: 1600,
      },
      hover: {
        src: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1200&auto=format&fit=crop",
        alt: "Column Silk Evening Tunic movement detail",
        width: 1200,
        height: 1600,
      },
    },
    attributes: {
      material: "100% Sandwashed Mulberry Silk",
      fit: "Elongated drape",
      origin: "Hand-finished edge seams",
    },
  },
  {
    id: "product-3",
    title: "Monolithic Pleated Trouser",
    subtitle: "Structured high-waisted wool crepe with fluid leg line",
    priceFormatted: "₹ 19,800",
    category: "Bestsellers",
    slug: "monolithic-pleated-trouser",
    images: {
      primary: {
        src: "https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?q=80&w=1200&auto=format&fit=crop",
        alt: "Monolithic Pleated Trouser in raw ecru",
        width: 1200,
        height: 1600,
      },
      hover: {
        src: "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?q=80&w=1200&auto=format&fit=crop",
        alt: "Monolithic Pleated Trouser detail",
        width: 1200,
        height: 1600,
      },
    },
    attributes: {
      material: "100% Super 120s Wool Crepe",
      fit: "High rise, wide draped leg",
      origin: "Atelier tailored",
    },
  },
  {
    id: "product-4",
    title: "Architectural Cape Jacket",
    subtitle: "Minimal collarless construction with subtle side vent volume",
    priceFormatted: "₹ 38,000",
    category: "Signature Pieces",
    slug: "architectural-cape-jacket",
    images: {
      primary: {
        src: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=1200&auto=format&fit=crop",
        alt: "Architectural Cape Jacket in dark charcoal",
        width: 1200,
        height: 1600,
      },
      hover: {
        src: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=1200&auto=format&fit=crop",
        alt: "Architectural Cape Jacket texture and profile",
        width: 1200,
        height: 1600,
      },
    },
    attributes: {
      material: "Virgin Wool & Cupro Lining",
      fit: "Structured shoulder, clean drape",
      origin: "Handcrafted edition of 50",
    },
  },
];
