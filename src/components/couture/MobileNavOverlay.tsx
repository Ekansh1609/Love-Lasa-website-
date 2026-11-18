'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useCouture } from '@/context/CoutureContext';

export function MobileNavOverlay() {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const isCollection = pathname === '/collection';
  const isJourney = pathname === '/journey';
  const { isMobileNavOpen, setIsMobileNavOpen } = useCouture();

  const handleLinkClick = () => {
    setIsMobileNavOpen(false);
  };

  return (
    <div
      id="mobile-nav-overlay"
      className={`fixed inset-0 z-50 bg-[#FAF8F5] text-obsidian flex flex-col justify-between p-8 sm:p-10 transition-all duration-500 ${
        isMobileNavOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
    >
      {/* Top Bar with Logo & Close Button */}
      <div className="flex items-center justify-between border-b border-obsidian/10 pb-5">
        <Link href="/" onClick={handleLinkClick}>
          <Image
            src="/images/logo.png"
            alt="Love Lasa"
            width={160}
            height={32}
            priority
            className="h-7 sm:h-8 w-auto object-contain"
          />
        </Link>
        <button
          id="btn-close-mobile-menu"
          type="button"
          onClick={() => setIsMobileNavOpen(false)}
          className="p-2 text-obsidian/70 hover:text-crimson focus:outline-none cursor-pointer transition-colors duration-300"
          aria-label="Close Navigation"
        >
          <svg
            className="w-6 h-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.35"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>

      {/* Navigation Links — Home, Our Collection, Our Journey, Contact Us */}
      <nav className="flex flex-col gap-7 my-auto" aria-label="Mobile Navigation">
        <Link
          href="/"
          onClick={handleLinkClick}
          className={`mobile-nav-link font-serif text-3xl sm:text-4xl font-light tracking-wide transition-colors duration-300 ${
            isHome ? 'text-brass-light' : 'text-obsidian hover:text-brass-light'
          }`}
        >
          Home
        </Link>
        <Link
          href="/collection"
          onClick={handleLinkClick}
          className={`mobile-nav-link font-serif text-3xl sm:text-4xl font-light tracking-wide transition-colors duration-300 ${
            isCollection ? 'text-brass-light' : 'text-obsidian hover:text-brass-light'
          }`}
        >
          Our Collection
        </Link>
        <Link
          href="/journey"
          onClick={handleLinkClick}
          className={`mobile-nav-link font-serif text-3xl sm:text-4xl font-light tracking-wide transition-colors duration-300 ${
            isJourney ? 'text-brass-light' : 'text-obsidian hover:text-brass-light'
          }`}
        >
          Our Journey
        </Link>
        <Link
          href="/#contact-us"
          onClick={handleLinkClick}
          className="mobile-nav-link font-serif text-3xl sm:text-4xl font-light tracking-wide text-obsidian hover:text-brass-light transition-colors duration-300"
        >
          Contact Us
        </Link>
      </nav>

      {/* Bottom Editorial Tagline */}
      <p className="text-[10px] uppercase tracking-[0.3em] text-taupe border-t border-obsidian/10 pt-5">
        Contemporary Indian Couture
      </p>
    </div>
  );
}
