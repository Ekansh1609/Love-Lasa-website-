"use client";

import React, { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { Container } from "@/components/ui/Container";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <section id="editorial" className="py-24 sm:py-32 bg-[#FAF8F5] border-t border-[#E5DFD3]">
      <Container size="narrow">
        <div className="text-center max-w-xl mx-auto">
          <div className="flex items-center justify-center space-x-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D32F2F]" />
            <span className="text-[11px] uppercase tracking-[0.28em] text-[#5E5B56]">
              Private Correspondence
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl tracking-[0.03em] font-light text-[#191817]">
            The Lasa Gazette
          </h2>

          <p className="mt-4 text-xs sm:text-sm text-[#5E5B56] font-light leading-relaxed">
            Receive private notices of new edition releases, private salon dates,
            and seasonal campaign essays. Never frequent; always intentional.
          </p>

          {/* Form */}
          <div className="mt-10">
            {submitted ? (
              <div className="py-4 px-6 bg-[#F4EFEA] border border-[#E5DFD3] inline-flex items-center space-x-2 text-xs uppercase tracking-[0.18em] text-[#191817]">
                <Check className="w-4 h-4 text-[#D32F2F]" />
                <span>You have been added to the private registry.</span>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto"
              >
                <div className="relative w-full">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    aria-label="Email address for private correspondence"
                    className="w-full px-4 py-3.5 bg-transparent border-b border-[#191817]/40 text-xs text-[#191817] placeholder:text-[#8E8A83] focus:outline-none focus:border-[#191817] transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  aria-label="Subscribe to correspondence"
                  className="w-full sm:w-auto px-6 py-3.5 bg-[#191817] text-[#FAF8F5] text-xs uppercase tracking-[0.2em] inline-flex items-center justify-center space-x-2 hover:bg-[#2C2926] transition-colors flex-shrink-0"
                >
                  <span>Inquire</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
            <p className="mt-4 text-[10px] text-[#8E8A83] tracking-wider uppercase">
              Confidentiality respected • Unsubscribe at any time
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
