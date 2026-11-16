"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, Search, User, ShoppingBag } from "lucide-react";
import { NAV_ITEMS, SITE_CONFIG } from "@/config/site";
import { MobileMenu } from "./MobileMenu";
import { cn } from "@/lib/utils";

interface HeaderProps {
  /** Optional override to force solid ivory style when not over a dark hero */
  forceSolid?: boolean;
}

export function Header({ forceSolid = false }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const showSolidBackground = forceSolid || isScrolled;

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-out",
          showSolidBackground
            ? "bg-[#FAF8F5]/90 backdrop-blur-md py-4 sm:py-4.5 border-b border-[#E5DFD3]/80 text-[#191817] shadow-xs"
            : "bg-gradient-to-b from-black/40 via-black/15 to-transparent py-5 sm:py-6 text-white"
        )}
      >
        <div className="w-full max-w-[1500px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
          {/* ========================================================================= */}
          {/* DESKTOP HEADER (1024px+): Left Wordmark, Nav Links, Right Action Icons    */}
          {/* ========================================================================= */}
          <div className="hidden lg:flex items-center justify-between">
            {/* Left: Brand Wordmark & Navigation Links */}
            <div className="flex items-center space-x-12 xl:space-x-16">
              <Link
                href="/"
                className={cn(
                  "font-serif text-2xl xl:text-3xl tracking-[0.28em] uppercase font-light transition-colors select-none",
                  showSolidBackground ? "text-[#191817]" : "text-white"
                )}
              >
                {SITE_CONFIG.name}
              </Link>

              {/* Navigation Links: Shop, The Edit, Our World, Notes */}
              <nav
                className="flex items-center space-x-7 xl:space-x-9"
                aria-label="Main Desktop Navigation"
              >
                {NAV_ITEMS.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={cn(
                      "text-[11px] uppercase tracking-[0.22em] font-medium py-1 relative group transition-colors",
                      showSolidBackground
                        ? "text-[#5E5B56] hover:text-[#191817]"
                        : "text-white/85 hover:text-white"
                    )}
                  >
                    <span>{item.label}</span>
                    <span
                      className={cn(
                        "absolute bottom-0 left-0 w-0 h-[1px] transition-all duration-300 ease-out group-hover:w-full",
                        showSolidBackground ? "bg-[#191817]" : "bg-white"
                      )}
                    />
                  </Link>
                ))}
              </nav>
            </div>

            {/* Right: Actions Cluster (Search, Account, Shopping Bag) */}
            <div className="flex items-center space-x-2 sm:space-x-3">
              {/* Search Icon */}
              <button
                type="button"
                aria-label="Search catalogue"
                className={cn(
                  "p-2.5 transition-colors rounded-full hover:opacity-75 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-current",
                  showSolidBackground ? "text-[#191817]" : "text-white"
                )}
              >
                <Search className="w-4 h-4 stroke-[1.6]" />
              </button>

              {/* Account Icon */}
              <button
                type="button"
                aria-label="Account and client profile"
                className={cn(
                  "p-2.5 transition-colors rounded-full hover:opacity-75 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-current",
                  showSolidBackground ? "text-[#191817]" : "text-white"
                )}
              >
                <User className="w-4 h-4 stroke-[1.6]" />
              </button>

              {/* Shopping Bag Icon with Restrained Vivid Red Dot */}
              <button
                type="button"
                aria-label="Shopping bag, 0 items"
                className={cn(
                  "p-2.5 transition-colors relative rounded-full hover:opacity-75 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-current",
                  showSolidBackground ? "text-[#191817]" : "text-white"
                )}
              >
                <ShoppingBag className="w-4 h-4 stroke-[1.6]" />
                <span
                  aria-hidden="true"
                  className="absolute top-2 right-1.5 w-1.5 h-1.5 rounded-full bg-[#D32F2F]"
                />
              </button>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* MOBILE & TABLET HEADER (<1024px): Left Menu, Centered Brand, Right Icons   */}
          {/* ========================================================================= */}
          <div className="flex lg:hidden items-center justify-between">
            {/* Left: Hamburger Menu Trigger */}
            <div className="flex items-center w-20">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open navigation menu"
                aria-expanded={mobileMenuOpen}
                className={cn(
                  "p-2 -ml-2 transition-colors rounded-full hover:opacity-70 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-current",
                  showSolidBackground ? "text-[#191817]" : "text-white"
                )}
              >
                <Menu className="w-5 h-5 stroke-[1.5]" />
              </button>
            </div>

            {/* Center: Centred Love Lasa Wordmark */}
            <div className="flex-1 text-center">
              <Link
                href="/"
                className={cn(
                  "inline-block font-serif text-xl sm:text-2xl tracking-[0.24em] uppercase font-light transition-colors select-none",
                  showSolidBackground ? "text-[#191817]" : "text-white"
                )}
              >
                {SITE_CONFIG.name}
              </Link>
            </div>

            {/* Right: Search & Shopping Bag Icons */}
            <div className="flex items-center justify-end space-x-1 sm:space-x-2 w-20">
              <button
                type="button"
                aria-label="Search catalogue"
                className={cn(
                  "p-2 transition-colors rounded-full hover:opacity-70 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-current",
                  showSolidBackground ? "text-[#191817]" : "text-white"
                )}
              >
                <Search className="w-4 h-4 stroke-[1.6]" />
              </button>

              <button
                type="button"
                aria-label="Shopping bag"
                className={cn(
                  "p-2 -mr-1 transition-colors relative rounded-full hover:opacity-70 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-current",
                  showSolidBackground ? "text-[#191817]" : "text-white"
                )}
              >
                <ShoppingBag className="w-4 h-4 stroke-[1.6]" />
                <span
                  aria-hidden="true"
                  className="absolute top-1.5 right-1 w-1.5 h-1.5 rounded-full bg-[#D32F2F]"
                />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Slide-out / Overlay Mobile Navigation Menu */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
}
