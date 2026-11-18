'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export function Footer() {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const isCollection = pathname === '/collection';
  const isJourney = pathname === '/journey';

  return (
    <footer
      id="contact-us"
      className="bg-obsidian text-ivory border-t border-ivory/10 pt-6 sm:pt-8 lg:pt-10 pb-5 sm:pb-6"
    >
      <div className="w-full px-6 sm:px-10 lg:px-16">
        {/* 3 Symmetrical Columns with Dividers */}
        <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-ivory/10 items-center">
          {/* Column 1 (Left): Brand Logo & Tagline */}
          <div className="py-4 lg:py-0 px-0 lg:px-8 xl:px-12 flex flex-col items-center lg:items-start text-center lg:text-left">
            <Link
              href="/"
              className="inline-block group focus:outline-none"
              aria-label="LOVE LASA Home"
            >
              <Image
                src="/images/logo.png"
                alt="Love Lasa"
                width={240}
                height={50}
                className="h-10 sm:h-12 lg:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </Link>
            <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.28em] text-ivory/80 font-light mt-2.5 sm:mt-3">
              Contemporary Indian Couture
            </p>
          </div>

          {/* Column 2 (Middle): Menu Options */}
          <div className="py-4 lg:py-0 px-0 lg:px-8 xl:px-12 flex flex-col items-center text-center">
            <nav
              className="flex flex-col gap-2.5 sm:gap-3 text-[10px] sm:text-[11px] uppercase tracking-[0.3em] font-light"
              aria-label="Footer Navigation"
            >
              <Link
                href="/"
                className={`transition-colors duration-300 ${
                  isHome ? 'text-brass-light font-medium' : 'text-ivory/85 hover:text-brass-light'
                }`}
              >
                Home
              </Link>
              <Link
                href="/collection"
                className={`transition-colors duration-300 ${
                  isCollection ? 'text-brass-light font-medium' : 'text-ivory/85 hover:text-brass-light'
                }`}
              >
                Our Collection
              </Link>
              <Link
                href="/journey"
                className={`transition-colors duration-300 ${
                  isJourney ? 'text-brass-light font-medium' : 'text-ivory/85 hover:text-brass-light'
                }`}
              >
                Our Journey
              </Link>
              <Link
                href="/#contact-us"
                className="text-ivory/85 hover:text-brass-light transition-colors duration-300"
              >
                Contact Us
              </Link>
            </nav>
          </div>

          {/* Column 3 (Right): Get In Touch - Right aligned on desktop so right margin matches left margin */}
          <div className="py-4 lg:py-0 px-0 lg:px-8 xl:px-12 flex flex-col items-center lg:items-end text-center lg:text-left">
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:max-w-[280px]">
              <h4 className="text-[10px] sm:text-[11px] uppercase tracking-[0.32em] text-crimson font-medium mb-2.5 sm:mb-3">
                Get In Touch
              </h4>

              <div className="flex flex-col gap-2 sm:gap-2.5 text-xs sm:text-sm font-light">
                {/* Email */}
                <a
                  href="mailto:atelier@lovelasa.com"
                  className="flex items-center gap-2.5 text-ivory/80 hover:text-brass-light transition-colors duration-300 group"
                >
                  <svg
                    className="w-4 h-4 text-ivory/60 group-hover:text-brass-light transition-colors flex-shrink-0"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  <span>atelier@lovelasa.com</span>
                </a>

                {/* Phone */}
                <a
                  href="tel:+919876543210"
                  className="flex items-center gap-2.5 text-ivory/80 hover:text-brass-light transition-colors duration-300 group"
                >
                  <svg
                    className="w-4 h-4 text-ivory/60 group-hover:text-brass-light transition-colors flex-shrink-0"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <span>+91 98765 43210</span>
                </a>

                {/* Address */}
                <div className="flex items-start gap-2.5 text-ivory/70 leading-snug text-left">
                  <svg
                    className="w-4 h-4 text-ivory/60 mt-0.5 flex-shrink-0"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span>
                    14 Kala Ghoda, Fort,<br />
                    Mumbai &ndash; 400001, India
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Horizontal Separator & Centered Copyright (NO social icons) */}
        <div className="w-full border-t border-ivory/10 mt-5 sm:mt-6 pt-4 sm:pt-5 flex items-center justify-center">
          <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.28em] text-ivory/50 font-light text-center">
            &copy; 2026 LOVE LASA. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
}
