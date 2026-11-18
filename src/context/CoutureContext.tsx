'use client';

import React, { createContext, useContext, useState, useEffect, useRef, useCallback } from 'react';
import {
  MediaSlotId,
  MediaSlot,
  BagItem,
  FeaturedProduct,
} from '@/types/couture';
import {
  INITIAL_MEDIA_SLOTS,
  FEATURED_PRODUCTS,
  HERO_CAMPAIGNS,
} from '@/config/coutureData';
import { DEFAULT_IMAGES } from '@/config/coutureImages';

interface CollectionDrawerState {
  isOpen: boolean;
  collectionKey: string;
}

interface LightboxState {
  isOpen: boolean;
  slotId: MediaSlotId | null;
}

interface ToastState {
  message: string;
  isVisible: boolean;
}

interface CoutureContextType {
  // Media Slots
  mediaSlots: Record<MediaSlotId, MediaSlot>;
  updateMediaSlot: (slotId: MediaSlotId, newSrc: string) => void;
  resetAllPhotos: () => void;

  // Hero Campaign Slider
  activeHeroIndex: number;
  setHeroSlide: (index: number) => void;
  nextHeroSlide: () => void;
  prevHeroSlide: () => void;

  // Featured Product
  activeFeaturedId: string;
  activeFeaturedProduct: FeaturedProduct;
  setFeaturedProduct: (productId: string, userTriggered?: boolean) => void;
  isStageFading: boolean;

  // Shopping Bag
  bag: BagItem[];
  addToBag: (item: { id: string; name: string; price: number; img?: string }) => void;
  updateBagQty: (id: string, delta: number) => void;
  clearBag: () => void;
  bagSubtotal: number;
  bagCount: number;

  // Drawers & Modals
  collectionDrawer: CollectionDrawerState;
  openCollectionDrawer: (collectionKey: string) => void;
  closeCollectionDrawer: () => void;

  isBagOpen: boolean;
  setIsBagOpen: (open: boolean) => void;

  isAccountOpen: boolean;
  setIsAccountOpen: (open: boolean) => void;

  isStoryOpen: boolean;
  setIsStoryOpen: (open: boolean) => void;

  lightbox: LightboxState;
  openLightbox: (slotId: MediaSlotId) => void;
  closeLightbox: () => void;

  isMediaStudioOpen: boolean;
  setIsMediaStudioOpen: (open: boolean) => void;

  isMobileNavOpen: boolean;
  setIsMobileNavOpen: (open: boolean) => void;

  // Toast
  toast: ToastState;
  showToast: (message: string) => void;
}

const CoutureContext = createContext<CoutureContextType | undefined>(undefined);

export function CoutureProvider({ children }: { children: React.ReactNode }) {
  // 1. Media slots state
  const [mediaSlots, setMediaSlots] = useState<Record<MediaSlotId, MediaSlot>>(INITIAL_MEDIA_SLOTS);

  const updateMediaSlot = useCallback((slotId: MediaSlotId, newSrc: string) => {
    setMediaSlots((prev) => {
      const slot = prev[slotId];
      if (!slot) return prev;
      const next = {
        ...prev,
        [slotId]: { ...slot, src: newSrc },
      };
      // Keep all three collection cards synced with the new arrival image
      if (slotId === 'col_new_arrivals' || slotId === 'col_signature' || slotId === 'col_bestsellers') {
        next.col_new_arrivals = { ...next.col_new_arrivals, src: newSrc };
        next.col_signature = { ...next.col_signature, src: newSrc };
        next.col_bestsellers = { ...next.col_bestsellers, src: newSrc };
      }
      return next;
    });
  }, []);

  // 2. Hero Campaign State
  const [activeHeroIndex, setActiveHeroIndex] = useState(0);
  const heroTimerRef = useRef<NodeJS.Timeout | null>(null);

  const resetHeroAutoplay = useCallback(() => {
    if (heroTimerRef.current) clearInterval(heroTimerRef.current);
    heroTimerRef.current = setInterval(() => {
      setActiveHeroIndex((prev) => (prev + 1) % HERO_CAMPAIGNS.length);
    }, 6500);
  }, []);

  const setHeroSlide = useCallback(
    (index: number) => {
      setActiveHeroIndex(index);
      resetHeroAutoplay();
    },
    [resetHeroAutoplay]
  );

  const nextHeroSlide = useCallback(() => {
    setActiveHeroIndex((prev) => (prev + 1) % HERO_CAMPAIGNS.length);
    resetHeroAutoplay();
  }, [resetHeroAutoplay]);

  const prevHeroSlide = useCallback(() => {
    setActiveHeroIndex((prev) => (prev - 1 + HERO_CAMPAIGNS.length) % HERO_CAMPAIGNS.length);
    resetHeroAutoplay();
  }, [resetHeroAutoplay]);

  useEffect(() => {
    resetHeroAutoplay();
    return () => {
      if (heroTimerRef.current) clearInterval(heroTimerRef.current);
    };
  }, [resetHeroAutoplay]);

  // 3. Featured Product
  const [activeFeaturedId, setActiveFeaturedIdState] = useState<string>('devika-saree');
  const [isStageFading, setIsStageFading] = useState(false);

  const setFeaturedProduct = useCallback((productId: string, userTriggered = false) => {
    const prod = FEATURED_PRODUCTS[productId];
    if (!prod) return;

    if (userTriggered) {
      setIsStageFading(true);
      setTimeout(() => setIsStageFading(false), 800);
    }

    setActiveFeaturedIdState(productId);
    // Sync featured images in media slots
    setMediaSlots((prev) => ({
      ...prev,
      feat_main: { ...prev.feat_main, src: prod.img1 },
      feat_craft: { ...prev.feat_craft, src: prod.img2 },
      feat_drape: { ...prev.feat_drape, src: prod.img3 },
    }));
  }, []);

  const activeFeaturedProduct = FEATURED_PRODUCTS[activeFeaturedId] || FEATURED_PRODUCTS['devika-saree'];

  // 4. Shopping Bag
  const [bag, setBag] = useState<BagItem[]>([]);

  // 5. Toast
  const [toast, setToast] = useState<ToastState>({ message: '', isVisible: false });
  const toastTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const showToast = useCallback((message: string) => {
    if (toastTimeoutRef.current) clearTimeout(toastTimeoutRef.current);
    setToast({ message, isVisible: true });
    toastTimeoutRef.current = setTimeout(() => {
      setToast({ message: '', isVisible: false });
    }, 3200);
  }, []);

  const addToBag = useCallback(
    (item: { id: string; name: string; price: number; img?: string }) => {
      setBag((prev) => {
        const existing = prev.find((b) => b.id === item.id);
        if (existing) {
          return prev.map((b) => (b.id === item.id ? { ...b, qty: b.qty + 1 } : b));
        }
        return [...prev, { ...item, qty: 1 }];
      });
      showToast(`Added "${item.name}" to your bag`);
    },
    [showToast]
  );

  const updateBagQty = useCallback((id: string, delta: number) => {
    setBag((prev) =>
      prev
        .map((b) => (b.id === id ? { ...b, qty: b.qty + delta } : b))
        .filter((b) => b.qty > 0)
    );
  }, []);

  const clearBag = useCallback(() => {
    setBag([]);
  }, []);

  const bagSubtotal = bag.reduce((sum, i) => sum + i.price * i.qty, 0);
  const bagCount = bag.reduce((sum, i) => sum + i.qty, 0);

  // 6. Drawers & Modals
  const [collectionDrawer, setCollectionDrawer] = useState<CollectionDrawerState>({
    isOpen: false,
    collectionKey: 'new-arrivals',
  });
  const openCollectionDrawer = useCallback((collectionKey: string) => {
    setCollectionDrawer({ isOpen: true, collectionKey });
  }, []);
  const closeCollectionDrawer = useCallback(() => {
    setCollectionDrawer((prev) => ({ ...prev, isOpen: false }));
  }, []);

  const [isBagOpen, setIsBagOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const [isStoryOpen, setIsStoryOpen] = useState(false);

  const [lightbox, setLightbox] = useState<LightboxState>({ isOpen: false, slotId: null });
  const openLightbox = useCallback((slotId: MediaSlotId) => {
    setLightbox({ isOpen: true, slotId });
  }, []);
  const closeLightbox = useCallback(() => {
    setLightbox({ isOpen: false, slotId: null });
  }, []);

  const [isMediaStudioOpen, setIsMediaStudioOpen] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  // Reset all photos back to initial defaults
  const resetAllPhotos = useCallback(() => {
    setMediaSlots({
      hero_1: { ...INITIAL_MEDIA_SLOTS.hero_1, src: DEFAULT_IMAGES.hero_1 },
      hero_2: { ...INITIAL_MEDIA_SLOTS.hero_2, src: DEFAULT_IMAGES.hero_2 },
      hero_3: { ...INITIAL_MEDIA_SLOTS.hero_3, src: DEFAULT_IMAGES.hero_3 },
      col_new_arrivals: { ...INITIAL_MEDIA_SLOTS.col_new_arrivals, src: DEFAULT_IMAGES.col_new_arrivals },
      col_signature: { ...INITIAL_MEDIA_SLOTS.col_signature, src: DEFAULT_IMAGES.col_new_arrivals },
      col_bestsellers: { ...INITIAL_MEDIA_SLOTS.col_bestsellers, src: DEFAULT_IMAGES.col_new_arrivals },
      feat_main: { ...INITIAL_MEDIA_SLOTS.feat_main, src: DEFAULT_IMAGES.devika_1 },
      feat_craft: { ...INITIAL_MEDIA_SLOTS.feat_craft, src: DEFAULT_IMAGES.devika_2 },
      feat_drape: { ...INITIAL_MEDIA_SLOTS.feat_drape, src: DEFAULT_IMAGES.devika_3 },
      journey_atelier: { ...INITIAL_MEDIA_SLOTS.journey_atelier, src: DEFAULT_IMAGES.journey_atelier },
    });
    setFeaturedProduct('devika-saree', false);
    showToast('Restored default editorial campaign photography');
  }, [setFeaturedProduct, showToast]);

  return (
    <CoutureContext.Provider
      value={{
        mediaSlots,
        updateMediaSlot,
        resetAllPhotos,
        activeHeroIndex,
        setHeroSlide,
        nextHeroSlide,
        prevHeroSlide,
        activeFeaturedId,
        activeFeaturedProduct,
        setFeaturedProduct,
        isStageFading,
        bag,
        addToBag,
        updateBagQty,
        clearBag,
        bagSubtotal,
        bagCount,
        collectionDrawer,
        openCollectionDrawer,
        closeCollectionDrawer,
        isBagOpen,
        setIsBagOpen,
        isAccountOpen,
        setIsAccountOpen,
        isStoryOpen,
        setIsStoryOpen,
        lightbox,
        openLightbox,
        closeLightbox,
        isMediaStudioOpen,
        setIsMediaStudioOpen,
        isMobileNavOpen,
        setIsMobileNavOpen,
        toast,
        showToast,
      }}
    >
      {children}
    </CoutureContext.Provider>
  );
}

export function useCouture() {
  const context = useContext(CoutureContext);
  if (!context) {
    throw new Error('useCouture must be used within a CoutureProvider');
  }
  return context;
}
