export interface StoryChapter {
  id: string;
  tabLabel: string;
  title: string;
  text: string;
}

export interface CraftPillar {
  id: string;
  kicker: string;
  title: string;
  subtitle: string;
  desc: string;
  img: string;
  caption: string;
}

export interface InspirationPillar {
  number: string;
  title: string;
  desc: string;
}

export interface LightboxImage {
  src: string;
  alt: string;
  caption: string;
}

export const STORY_CHAPTERS: Record<string, StoryChapter> = {
  origin: {
    id: 'origin',
    tabLabel: 'Why It Started',
    title: 'Why Love Lasa Began',
    text: 'Love Lasa was founded in Mumbai with a singular conviction: India’s finest handloom textiles deserve silhouettes of quiet architectural clarity. Rather than reserving heirloom weaves for heavy occasionwear, the house was created so handwoven silk-organza, mulmul, and zari could be lived in with ease.',
  },
  atelier: {
    id: 'atelier',
    tabLabel: 'The Mumbai Atelier',
    title: 'Inside 14 Kala Ghoda',
    text: 'Housed in a sunlit heritage space in Fort, Mumbai, the Love Lasa atelier operates as both design studio and private salon. Every garment is pattern-cut, draped, and finished in small numbered runs, allowing bespoke proportions and personal fittings for each client.',
  },
  clusters: {
    id: 'clusters',
    tabLabel: 'Weaver Partnerships',
    title: 'Direct Weaver Partnerships',
    text: 'From the first sketch, Love Lasa has worked directly with third-generation pit-loom clusters in Chanderi, Varanasi, and Bengal. Each eighteen-day weave is commissioned fairly and credited to the craft lineage behind its loom.',
  },
};

export const CRAFT_PILLARS: CraftPillar[] = [
  {
    id: 'resham',
    kicker: 'Craft Study 01',
    title: 'Tonal Resham & Hand-Knotted Tassels',
    subtitle: 'Bengal Mulmul & Chanderi Organza',
    desc: 'Delicate tonal resham needlework and individually hand-knotted edge tassels finish our unbleached mulmul and silk-organza drapes—adding subtle tactility without weighing down the fabric.',
    img: '/images/journey/craft-resham.jpg',
    caption: 'Tonal resham embroidery & hand-knotted tassels on ivory organza',
  },
  {
    id: 'zari',
    kicker: 'Craft Study 02',
    title: '18-Day Pit-Loom Silk-Organza & Zari',
    subtitle: 'Chanderi & Varanasi Looms',
    desc: 'Woven slowly on traditional pit looms, our luminous Chanderi silk-organza and Banarasi tissue carry antique metallic zari borders that catch light softly rather than glaring.',
    img: '/images/journey/craft-zari.jpg',
    caption: 'Macro study of handwoven Chanderi silk-organza and antique metallic zari',
  },
  {
    id: 'tailoring',
    kicker: 'Craft Study 03',
    title: 'Raw Silk Tailoring & Micro-Pleating',
    subtitle: 'Structured Mulberry Silk & Bias Drape',
    desc: 'Architectural mulberry raw-silk bandhgalas and hand-pleated silk panels balance crisp Indian collar geometry with fluid, bias-cut movement.',
    img: '/images/journey/craft-tailoring.jpg',
    caption: 'Structured mulberry raw-silk bandhgala paired with a fluid bias-cut drape skirt',
  },
];

export const INSPIRATION_PILLARS: InspirationPillar[] = [
  {
    number: '01',
    title: 'Indian Culture',
    desc: 'Rooted in heirloom ceremonial dressing, reimagined for quiet, intimate gatherings rather than loud spectacle.',
  },
  {
    number: '02',
    title: 'Traditional Textiles',
    desc: 'Unbleached Bengal mulmul, raw tussar silk, Banarasi tissue, and sheer Chanderi silk-organza.',
  },
  {
    number: '03',
    title: 'Artistic Expression',
    desc: 'Drawn from heritage limestone architecture, antique brass patinas, and painterly tonal restraint.',
  },
  {
    number: '04',
    title: 'Contemporary Fashion',
    desc: 'Weightless construction, clean architectural lines, and effortless drape built for modern wardrobes.',
  },
];
