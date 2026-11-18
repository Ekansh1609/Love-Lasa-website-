export type MediaSlotId =
  | 'hero_1'
  | 'hero_2'
  | 'hero_3'
  | 'col_new_arrivals'
  | 'col_signature'
  | 'col_bestsellers'
  | 'feat_main'
  | 'feat_craft'
  | 'feat_drape'
  | 'journey_atelier';

export interface MediaSlot {
  id: MediaSlotId;
  label: string;
  ratio: string;
  note: string;
  src: string;
}

export interface HeroCampaign {
  slotId: MediaSlotId;
  kicker: string;
  title: string;
  desc: string;
  ctaText: string;
  ctaHref: string;
}

export interface FeaturedProduct {
  id: string;
  num: string;
  name: string;
  collection: string;
  collectionKey: string;
  price: number;
  desc: string;
  cap1: string;
  cap2: string;
  cap3: string;
  img1: string;
  img2: string;
  img3: string;
}

export interface CollectionItem {
  id: string;
  name: string;
  detail: string;
  price: number;
  img: string;
}

export interface CollectionCategory {
  title: string;
  kicker: string;
  subtitle: string;
  items: CollectionItem[];
}

export interface BagItem {
  id: string;
  name: string;
  price: number;
  qty: number;
  img?: string;
}
