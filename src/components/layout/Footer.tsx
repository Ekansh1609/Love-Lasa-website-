import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { NAV_ITEMS, SITE_CONFIG } from "@/config/site";

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-[#191817] text-[#FAF8F5] pt-20 pb-12 border-t border-[#2A2826]">
      <Container size="wide">
        {/* Top brand marquee / headline */}
        <div className="pb-16 border-b border-[#2C2926] flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <span className="text-[11px] uppercase tracking-[0.24em] text-[#8E8A83] block mb-3">
              Editorial Fashion House
            </span>
            <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl tracking-[0.06em] font-light leading-none">
              {SITE_CONFIG.name}
            </h2>
          </div>

          <p className="max-w-md text-sm text-[#8E8A83] font-light leading-relaxed">
            Architectural tailoring, unhurried craft, and understated silhouette.
            Every piece is designed to endure beyond seasonal ephemera.
          </p>
        </div>

        {/* Links grid */}
        <div className="py-16 grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-16 border-b border-[#2C2926]">
          {/* Column 1: Destinations */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] text-[#8E8A83] mb-6">
              Collections
            </h3>
            <ul className="space-y-3.5 text-xs tracking-wider">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-[#FAF8F5]/80 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: The House */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] text-[#8E8A83] mb-6">
              The House
            </h3>
            <ul className="space-y-3.5 text-xs tracking-wider text-[#FAF8F5]/80">
              <li>
                <Link href="#atelier" className="hover:text-white transition-colors">
                  Atelier Philosophy
                </Link>
              </li>
              <li>
                <Link href="#editorial" className="hover:text-white transition-colors">
                  Campaign Archives
                </Link>
              </li>
              <li>
                <span className="text-[#8E8A83]">Craftsmanship Index</span>
              </li>
              <li>
                <span className="text-[#8E8A83]">Sartorial Journal</span>
              </li>
            </ul>
          </div>

          {/* Column 3: Client Care */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] text-[#8E8A83] mb-6">
              Client Care
            </h3>
            <ul className="space-y-3.5 text-xs tracking-wider text-[#8E8A83]">
              <li>Bespoke Consultation</li>
              <li>Garment Care & Longevity</li>
              <li>Shipping & Global Inquiries</li>
              <li>Private Salon Appointments</li>
            </ul>
          </div>

          {/* Column 4: Location & Presence */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] text-[#8E8A83] mb-6">
              Salons & Studio
            </h3>
            <p className="text-xs text-[#8E8A83] leading-relaxed mb-4">
              By appointment only.
              <br />
              New Delhi • Mumbai • Global Salons
            </p>
            <a
              href="mailto:concierge@lovelasa.com"
              className="inline-flex items-center space-x-1.5 text-xs text-[#FAF8F5] hover:text-[#D32F2F] transition-colors group"
            >
              <span>concierge@lovelasa.com</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#5E5B56] gap-4">
          <p>© {currentYear} {SITE_CONFIG.name}. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <span className="hover:text-[#FAF8F5]/70 transition-colors cursor-pointer">
              Privacy Policy
            </span>
            <span>•</span>
            <span className="hover:text-[#FAF8F5]/70 transition-colors cursor-pointer">
              Terms of Engagement
            </span>
            <span>•</span>
            <span className="hover:text-[#FAF8F5]/70 transition-colors cursor-pointer">
              Accessibility
            </span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
