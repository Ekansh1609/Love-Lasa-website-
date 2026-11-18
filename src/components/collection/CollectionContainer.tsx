'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { COLLECTION_PRODUCTS, CollectionProduct } from '@/config/collectionData';
import { Header } from '@/components/couture/Header';
import { Footer } from '@/components/couture/Footer';
import { MobileNavOverlay } from '@/components/couture/MobileNavOverlay';
import { BagDrawer } from '@/components/couture/BagDrawer';
import { AccountModal } from '@/components/couture/AccountModal';
import { BackToTop } from '@/components/couture/BackToTop';
import { Toast } from '@/components/couture/Toast';
import { CollectionHero } from './CollectionHero';
import { CollectionGrid } from './CollectionGrid';
import { ProductDetailView } from './ProductDetailView';
import { QuickViewModal } from './QuickViewModal';

export function CollectionContainer() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get('category');
  const productParam = searchParams.get('product');

  const [activeSort, setActiveSort] = useState<string>('relevance');
  const [quickViewProduct, setQuickViewProduct] = useState<CollectionProduct | null>(null);

  // Active filter derived from search param or 'all'
  const activeFilter =
    categoryParam && ['new-arrivals', 'signature-pieces', 'bestsellers'].includes(categoryParam)
      ? categoryParam
      : 'all';

  // Active product derived directly from URL search param
  const activeProduct = productParam
    ? COLLECTION_PRODUCTS.find((p) => p.id === productParam) || null
    : null;

  // Scroll to top when switching between grid and detail or between products
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [productParam]);

  const handleSelectProduct = (productId: string) => {
    const params = new URLSearchParams();
    if (activeFilter !== 'all') {
      params.set('category', activeFilter);
    }
    params.set('product', productId);
    router.push(`/collection?${params.toString()}`, { scroll: false });
  };

  const handleBackToCollection = () => {
    if (activeFilter !== 'all') {
      router.push(`/collection?category=${activeFilter}`, { scroll: false });
    } else {
      router.push('/collection', { scroll: false });
    }
  };

  const handleFilterChange = (filter: string) => {
    if (filter === 'all') {
      router.push('/collection', { scroll: false });
    } else {
      router.push(`/collection?category=${filter}`, { scroll: false });
    }
  };

  return (
    <>
      {/* 1. Global Shared Header */}
      <Header />

      {/* 2. Global Shared Fullscreen Mobile Navigation Menu */}
      <MobileNavOverlay />

      <main className="min-h-screen">
        {activeProduct ? (
          /* Full In-Page Product Detail View */
          <ProductDetailView
            product={activeProduct}
            onBack={handleBackToCollection}
            onSelectProduct={handleSelectProduct}
            onOpenQuickView={(prod) => setQuickViewProduct(prod)}
          />
        ) : (
          /* Collection Browse View */
          <>
            <CollectionHero />
            <CollectionGrid
              products={COLLECTION_PRODUCTS}
              activeFilter={activeFilter}
              onFilterChange={handleFilterChange}
              activeSort={activeSort}
              onSortChange={setActiveSort}
              onSelectProduct={handleSelectProduct}
              onOpenQuickView={(prod) => setQuickViewProduct(prod)}
            />
          </>
        )}
      </main>

      {/* 3. Global Shared Luxury Footer */}
      <Footer />

      {/* 4. Quick View Fast Product Modal */}
      <QuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onOpenProductDetail={handleSelectProduct}
      />

      {/* 5. Global Drawers, Modals & Floating Back-To-Top */}
      <BagDrawer />
      <AccountModal />
      <BackToTop />
      <Toast />
    </>
  );
}
