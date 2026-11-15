export interface ImageSlot {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
}

export interface ProductItem {
  id: string;
  title: string;
  subtitle: string;
  priceFormatted: string;
  category: "New Arrivals" | "Signature Pieces" | "Bestsellers";
  slug: string;
  images: {
    primary: ImageSlot;
    hover: ImageSlot;
  };
  attributes?: {
    material?: string;
    fit?: string;
    origin?: string;
  };
}

export interface CollectionItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  href: string;
  image: ImageSlot;
  highlightTag?: string;
}

export interface NavItem {
  label: string;
  href: string;
  badge?: string;
}
