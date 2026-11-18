'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useCouture } from '@/context/CoutureContext';

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const isCollection = pathname === '/collection';
  const isJourney = pathname === '/journey';
  const { bagCount, setIsBagOpen, setIsAccountOpen, setIsMobileNavOpen } = useCouture();
  const [headerTheme, setHeaderTheme] = useState<'transparent' | 'dark-frosted' | 'light-frosted'>('transparent');

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      const lightSections = document.querySelectorAll('[data-light-section]');

      let onLight = false;
      lightSections.forEach((sec) => {
        const r = sec.getBoundingClientRect();
        if (r.top <= 48 && r.bottom >= 48) onLight = true;
      });

      if (onLight) {
        setHeaderTheme('light-frosted');
      } else if (y > 60) {
        setHeaderTheme('dark-frosted');
      } else {
        setHeaderTheme('transparent');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isLight = headerTheme === 'light-frosted';
  const isDarkFrosted = headerTheme === 'dark-frosted';

  return (
    <header
      id="site-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        isLight
          ? 'bg-ivory/92 backdrop-blur-md border-obsidian/10'
          : isDarkFrosted
          ? 'bg-obsidian/85 backdrop-blur-md border-ivory/10'
          : 'bg-transparent border-transparent'
      }`}
    >
      {/* 1. Mobile & Tablet Layout (< 1024px, including 768px tablet): Hamburger Left, Logo Center, Account & Cart Right */}
      <div className="flex lg:hidden items-center justify-between w-full h-14 sm:h-16 px-4 sm:px-8">
        {/* Left: Hamburger Menu Icon */}
        <div className="w-20 sm:w-28 flex items-center justify-start">
          <button
            id="btn-mobile-menu"
            type="button"
            onClick={() => setIsMobileNavOpen(true)}
            className={`header-icon p-1.5 focus:outline-none cursor-pointer transition-colors duration-300 ${
              isLight ? 'text-obsidian hover:text-crimson' : 'text-ivory hover:text-brass-light'
            }`}
            aria-label="Open Navigation"
          >
            <svg
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.35"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="8" x2="21" y2="8" />
              <line x1="3" y1="16" x2="21" y2="16" />
            </svg>
          </button>
        </div>

        {/* Center: Love Lasa Cursive Script Logo */}
        <div className="flex-1 flex items-center justify-center">
          <Link
            href="/"
            className="flex items-center group focus:outline-none"
            aria-label="LOVE LASA Home"
          >
            <Image
              src="/images/logo.png"
              alt="Love Lasa"
              width={160}
              height={32}
              priority
              className="h-6 sm:h-7.5 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </Link>
        </div>

        {/* Right: Account & Cart Icons */}
        <div className="w-20 sm:w-28 flex items-center justify-end gap-3.5 sm:gap-5">
          <button
            id="btn-account-mobile"
            type="button"
            onClick={() => setIsAccountOpen(true)}
            className={`header-icon p-1.5 transition-colors duration-300 focus:outline-none cursor-pointer ${
              isLight ? 'text-obsidian hover:text-crimson' : 'text-ivory hover:text-brass-light'
            }`}
            aria-label="Account"
          >
            <svg
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.35"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </button>

          <button
            id="btn-bag-mobile"
            type="button"
            onClick={() => setIsBagOpen(true)}
            className={`header-icon relative p-1.5 transition-colors duration-300 focus:outline-none cursor-pointer ${
              isLight ? 'text-obsidian hover:text-crimson' : 'text-ivory hover:text-brass-light'
            }`}
            aria-label="Shopping Bag"
          >
            <svg
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.35"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
            {bagCount > 0 && (
              <span className="absolute -top-1 -right-1.5 min-w-[17px] h-[17px] px-1 rounded-full bg-crimson text-ivory text-[9px] font-medium flex items-center justify-center animate-in fade-in">
                {bagCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* 2. Desktop Layout (>= 1024px): Logo Left, 3 Nav Links Center, Account & Cart Right */}
      <div className="hidden lg:flex items-center justify-between w-full h-14 sm:h-16 px-10 lg:px-16">
        {/* Left: LOVE LASA Cursive Logo */}
        <Link
          href="/"
          className="flex items-center group focus:outline-none"
          aria-label="LOVE LASA Home"
        >
          <Image
            src="/images/logo.png"
            alt="Love Lasa"
            width={170}
            height={34}
            priority
            className="h-7 sm:h-8 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </Link>

        {/* Centre Navigation */}
        <nav
          className="flex items-center gap-10 lg:gap-14"
          aria-label="Primary Navigation"
        >
          <Link
            href="/"
            className={`nav-link text-[10px] uppercase tracking-[0.3em] font-light transition-colors duration-300 pb-1 border-b-2 ${
              isHome
                ? 'text-brass-light border-brass-light'
                : isLight
                ? 'text-obsidian border-transparent hover:text-brass-light hover:border-brass-light/50'
                : 'text-ivory/90 border-transparent hover:text-brass-light hover:border-brass-light/50'
            }`}
          >
            Home
          </Link>
          <Link
            href="/collection"
            className={`nav-link text-[10px] uppercase tracking-[0.3em] font-light transition-colors duration-300 pb-1 border-b-2 ${
              isCollection
                ? 'text-brass-light border-brass-light'
                : isLight
                ? 'text-obsidian border-transparent hover:text-brass-light hover:border-brass-light/50'
                : 'text-ivory/90 border-transparent hover:text-brass-light hover:border-brass-light/50'
            }`}
          >
            Our Collection
          </Link>
          <Link
            href="/journey"
            className={`nav-link text-[10px] uppercase tracking-[0.3em] font-light transition-colors duration-300 pb-1 border-b-2 ${
              isJourney
                ? 'text-brass-light border-brass-light'
                : isLight
                ? 'text-obsidian border-transparent hover:text-brass-light hover:border-brass-light/50'
                : 'text-ivory/90 border-transparent hover:text-brass-light hover:border-brass-light/50'
            }`}
          >
            Our Journey
          </Link>
          <Link
            href="/#contact-us"
            className={`nav-link text-[10px] uppercase tracking-[0.3em] font-light transition-colors duration-300 pb-1 border-b-2 border-transparent hover:text-brass-light hover:border-brass-light/50 ${
              isLight ? 'text-obsidian' : 'text-ivory/90'
            }`}
          >
            Contact Us
          </Link>
        </nav>

        {/* Right: Account & Shopping Bag Icons Only (Enlarged) */}
        <div className="flex items-center gap-5 sm:gap-6">
          <button
            id="btn-account"
            type="button"
            onClick={() => setIsAccountOpen(true)}
            className={`header-icon p-1.5 transition-colors duration-300 focus:outline-none cursor-pointer ${
              isLight ? 'text-obsidian hover:text-crimson' : 'text-ivory hover:text-brass-light'
            }`}
            aria-label="Account"
          >
            <svg
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.35"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </button>

          <button
            id="btn-bag"
            type="button"
            onClick={() => setIsBagOpen(true)}
            className={`header-icon relative p-1.5 transition-colors duration-300 focus:outline-none cursor-pointer ${
              isLight ? 'text-obsidian hover:text-crimson' : 'text-ivory hover:text-brass-light'
            }`}
            aria-label="Shopping Bag"
          >
            <svg
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.35"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
            {bagCount > 0 && (
              <span
                id="bag-count-badge"
                className="absolute -top-1 -right-1.5 min-w-[17px] h-[17px] px-1 rounded-full bg-crimson text-ivory text-[9px] font-medium flex items-center justify-center animate-in fade-in"
              >
                {bagCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
