"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { X, ArrowUpRight } from "lucide-react";
import { NAV_ITEMS, SITE_CONFIG } from "@/config/site";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#191817]/40 backdrop-blur-xs"
          />

          {/* Drawer content */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-[#FAF8F5] p-6 sm:p-8 flex flex-col justify-between shadow-2xl border-l border-[#E5DFD3]"
          >
            <div>
              {/* Header inside drawer */}
              <div className="flex items-center justify-between pb-6 border-b border-[#E5DFD3]">
                <span className="font-serif text-xl tracking-[0.2em] uppercase text-[#191817]">
                  {SITE_CONFIG.name}
                </span>
                <button
                  onClick={onClose}
                  aria-label="Close menu"
                  className="p-2 -mr-2 text-[#191817] hover:opacity-60 transition-opacity"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation list */}
              <nav className="mt-8 flex flex-col space-y-5" aria-label="Mobile Navigation">
                {NAV_ITEMS.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.05, duration: 0.3 }}
                  >
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className="group flex items-center justify-between font-serif text-2xl text-[#191817] hover:text-[#5E5B56] transition-colors"
                    >
                      <span>{item.label}</span>
                      <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </div>

            {/* Footer inside drawer */}
            <div className="pt-8 border-t border-[#E5DFD3] space-y-4">
              <p className="text-xs uppercase tracking-[0.18em] text-[#5E5B56]">
                {SITE_CONFIG.tagline}
              </p>
              <div className="flex items-center space-x-6 text-xs text-[#5E5B56]">
                <a
                  href={SITE_CONFIG.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#191817] transition-colors"
                >
                  Instagram
                </a>
                <span className="text-[#E5DFD3]">•</span>
                <a
                  href="#editorial"
                  onClick={onClose}
                  className="hover:text-[#191817] transition-colors"
                >
                  Editorial Archive
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
