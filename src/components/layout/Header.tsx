"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, ShoppingBag, Search } from "lucide-react";
import { NAV_ITEMS, SITE_CONFIG } from "@/config/site";
import { MobileMenu } from "./MobileMenu";
import { cn } from "@/lib/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-out",
          isScrolled
            ? "bg-[#FAF8F5]/90 backdrop-blur-md py-4 border-b border-[#E5DFD3]/70 shadow-xs"
            : "bg-gradient-to-b from-[#191817]/25 via-transparent to-transparent py-6 md:py-8 text-white"
        )}
      >
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16 flex items-center justify-between">
          {/* Left: Navigation links (Desktop) */}
          <nav
            className="hidden lg:flex items-center space-x-8"
            aria-label="Main Navigation"
          >
            {NAV_ITEMS.slice(0, 3).map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "text-[11px] uppercase tracking-[0.2em] transition-colors relative py-1 group",
                  isScrolled
                    ? "text-[#5E5B56] hover:text-[#191817]"
                    : "text-white/85 hover:text-white"
                )}
              >
                <span>{item.label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-current transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Center: Brand Wordmark */}
          <div className="flex-1 lg:flex-none text-left lg:text-center">
            <Link
              href="/"
              className={cn(
                "inline-block font-serif text-2xl sm:text-3xl tracking-[0.28em] uppercase transition-colors select-none",
                isScrolled ? "text-[#191817]" : "text-white"
              )}
            >
              {SITE_CONFIG.name}
            </Link>
          </div>

          {/* Right: Atelier link & actions */}
          <div className="flex items-center space-x-6 sm:space-x-8">
            <div className="hidden lg:flex items-center space-x-8">
              {NAV_ITEMS.slice(3).map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    "text-[11px] uppercase tracking-[0.2em] transition-colors relative py-1 group",
                    isScrolled
                      ? "text-[#5E5B56] hover:text-[#191817]"
                      : "text-white/85 hover:text-white"
                  )}
                >
                  <span>{item.label}</span>
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-current transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </div>

            {/* Utility icons (Visual only for MVP) */}
            <div className="flex items-center space-x-4 sm:space-x-5">
              <button
                type="button"
                aria-label="Search collection"
                className={cn(
                  "p-1.5 transition-colors hover:opacity-75 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-current",
                  isScrolled ? "text-[#191817]" : "text-white"
                )}
              >
                <Search className="w-4 h-4 stroke-[1.5]" />
              </button>

              <button
                type="button"
                aria-label="Shopping bag"
                className={cn(
                  "p-1.5 transition-colors relative hover:opacity-75 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-current",
                  isScrolled ? "text-[#191817]" : "text-white"
                )}
              >
                <ShoppingBag className="w-4 h-4 stroke-[1.5]" />
                {/* Restrained vivid-red accent dot */}
                <span
                  aria-hidden="true"
                  className="absolute top-1 right-0.5 w-1.5 h-1.5 rounded-full bg-[#D32F2F]"
                />
              </button>

              {/* Mobile hamburger menu toggle */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open navigation menu"
                className={cn(
                  "lg:hidden p-1.5 transition-colors hover:opacity-75 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-current",
                  isScrolled ? "text-[#191817]" : "text-white"
                )}
              >
                <Menu className="w-5 h-5 stroke-[1.5]" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Slide-out Mobile Menu */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
}
