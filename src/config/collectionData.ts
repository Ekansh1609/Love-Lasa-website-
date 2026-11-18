export interface CollectionProduct {
  id: string;
  num: string;
  name: string;
  category: 'new-arrivals' | 'signature-pieces' | 'bestsellers';
  categoryLabel: string;
  price: number;
  fabric: string;
  craft: string;
  desc: string;
  images: string[];
}

export const COLLECTION_PRODUCTS: CollectionProduct[] = [
  {
    id: 'devika-saree',
    num: '01',
    name: 'The Devika Zari Organza Saree',
    category: 'signature-pieces',
    categoryLabel: 'Signature Pieces',
    price: 48500,
    fabric: 'Handwoven Chanderi Silk-Organza',
    craft: '18-day pit-loom weave with antique metallic zari border',
    desc: 'Architectural transparency meets heirloom gold. Handwoven in Chanderi with a luminous metallic zari pallu and fluid drape.',
    images: [
      '/images/products/devika-saree_0.jpg',
      '/images/products/devika-saree_1.jpg',
      '/images/products/devika-saree_2.jpg',
    ],
  },
  {
    id: 'meher-kurta',
    num: '02',
    name: 'The Meher Tissue Kurta Ensemble',
    category: 'new-arrivals',
    categoryLabel: 'New Arrivals',
    price: 36000,
    fabric: 'Handspun Banarasi Tissue & Organza',
    craft: 'Tonal resham-tucked seams & hand-finished odhani',
    desc: 'A three-piece silhouette in warm bronze-gold tissue, tailored for weightless movement and quiet ceremonial presence.',
    images: [
      '/images/products/meher-kurta_0.jpg',
      '/images/products/meher-kurta_1.jpg',
      '/images/products/meher-kurta_2.jpg',
    ],
  },
  {
    id: 'ira-drape',
    num: '03',
    name: 'The Ira Handloom Mulmul Saree',
    category: 'bestsellers',
    categoryLabel: 'Bestsellers',
    price: 29500,
    fabric: 'Unbleached Bengal Mulmul & Tussar Silk',
    craft: 'Hand-knotted tassels & woven gold selvedge',
    desc: 'Breathable organic mulmul and raw tussar silk in warm ivory, finished with delicate hand-knotted edge tassels.',
    images: [
      '/images/products/ira-drape_0.jpg',
      '/images/products/ira-drape_1.jpg',
      '/images/products/ira-drape_2.jpg',
    ],
  },
  {
    id: 'tara-jacket',
    num: '04',
    name: 'Tara Raw Silk Bandhgala & Drape Skirt',
    category: 'new-arrivals',
    categoryLabel: 'New Arrivals',
    price: 54000,
    fabric: 'Structured Mulberry Raw Silk',
    craft: 'Hand-embroidered collar & bias-cut skirt',
    desc: 'Sharp architectural tailoring paired with a flowing bias-cut silk skirt, balancing structured form and fluid drape.',
    images: [
      '/images/products/tara-jacket_0.jpg',
      '/images/products/tara-jacket_1.jpg',
    ],
  },
  {
    id: 'kavya-lehenga',
    num: '05',
    name: 'Kavya Hand-Pleated Skirt & Cape',
    category: 'signature-pieces',
    categoryLabel: 'Signature Pieces',
    price: 68000,
    fabric: 'Hand-Pleated Charcoal Silk & Zari',
    craft: 'Micro-pleated panels with sheer cape overlay',
    desc: 'Sculptural micro-pleating in soft black silk topped with a weightless, hand-finished cape for evening occasions.',
    images: [
      '/images/products/kavya-lehenga_0.jpg',
      '/images/products/kavya-lehenga_1.jpg',
    ],
  },
  {
    id: 'noor-saree',
    num: '06',
    name: 'Noor Nocturne Zari Silk Saree',
    category: 'bestsellers',
    categoryLabel: 'Bestsellers',
    price: 46000,
    fabric: 'Handwoven Obsidian Silk & Zari',
    craft: 'Restrained antique gold zari border on pit loom',
    desc: 'Deep obsidian handloom silk illuminated by a restrained antique gold border, designed for timeless evening wear.',
    images: [
      '/images/products/noor-saree_0.jpg',
      '/images/products/noor-saree_1.jpg',
    ],
  },
];

export const formatINR = (num: number): string =>
  '₹' + num.toLocaleString('en-IN');
