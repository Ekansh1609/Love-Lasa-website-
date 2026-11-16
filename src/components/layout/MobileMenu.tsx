"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { X, ArrowRight, User } from "lucide-react";
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
        <div
          className="fixed inset-0 z-50 lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation Menu"
        >
          {/* Subtle backdrop overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#191817]/40 backdrop-blur-xs"
          />

          {/* Drawer content sliding smoothly from the left */}
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "tween", duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-0 top-0 bottom-0 w-full max-w-[340px] sm:max-w-sm bg-[#FAF8F5] p-6 sm:p-8 flex flex-col justify-between shadow-2xl border-r border-[#E5DFD3] overflow-y-auto"
          >
            <div>
              {/* Header inside drawer */}
              <div className="flex items-center justify-between pb-6 border-b border-[#E5DFD3]">
                <span className="font-serif text-xl tracking-[0.24em] uppercase text-[#191817] font-light">
                  {SITE_CONFIG.name}
                </span>
                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Close navigation menu"
                  className="p-2 -mr-2 text-[#191817] hover:opacity-60 transition-opacity focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-current rounded-full"
                >
                  <X className="w-5 h-5 stroke-[1.5]" />
                </button>
              </div>

              {/* Navigation list: Home, Shop, Our Story, Contact Us */}
              <nav className="mt-8 flex flex-col space-y-4" aria-label="Mobile Navigation Links">
                {NAV_ITEMS.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 + index * 0.04, duration: 0.3 }}
                  >
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className="group flex items-center justify-between py-3 border-b border-[#E5DFD3]/40 font-serif text-2xl text-[#191817] hover:text-[#5E5B56] transition-colors"
                    >
                      <span className="font-light tracking-wide">{item.label}</span>
                      <ArrowRight className="w-4 h-4 opacity-30 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Account Action (Search removed) */}
              <div className="mt-8 pt-6 border-t border-[#E5DFD3]">
                <button
                  type="button"
                  onClick={onClose}
                  className="w-full flex items-center space-x-3 text-xs uppercase tracking-[0.2em] text-[#5E5B56] hover:text-[#191817] py-2.5 transition-colors text-left group"
                >
                  <User className="w-4 h-4 stroke-[1.5] group-hover:text-[#191817]" />
                  <span>Account & Profile</span>
                </button>
              </div>
            </div>

            {/* Footer inside drawer */}
            <div className="pt-8 mt-8 border-t border-[#E5DFD3] space-y-3">
              <p className="text-[10px] uppercase tracking-[0.22em] text-[#8E8A83]">
                {SITE_CONFIG.tagline}
              </p>
              <div className="flex items-center space-x-4 text-xs text-[#5E5B56]">
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
                  href="#contact-us"
                  onClick={onClose}
                  className="hover:text-[#191817] transition-colors"
                >
                  Concierge
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
