# Love Lasa — Website

> **Love Lasa** is a premium, editorial, photography-led fashion and lifestyle brand website built on modern minimalism, cinematic scroll storytelling, and quiet luxury.

---

## 1. Project Overview & Current Scope

* **Current Phase:** Phase 1 — Frontend Design MVP
* **Focus:** Responsive, high-fidelity editorial brand presentation, cinematic scroll sequences, and visual discovery.
* **Out of Scope (Deferred to Future Phases):** Authentication, Supabase database, persistent cart, Razorpay payment processing, SMS OTP, and Admin dashboard.

---

## 2. Technology Stack

* **Framework:** Next.js 16 (App Router) + React 19
* **Language:** TypeScript
* **Styling:** Tailwind CSS v4 (with `@theme` design tokens)
* **Complex Animation:** GSAP + ScrollTrigger (cinematic pinned three-image reveal)
* **UI Transitions:** Motion for React
* **Typography:** Cormorant Garamond (editorial headings) & DM Sans (interface / body) via `next/font/google`
* **Icons:** Lucide React

---

## 3. Project Structure

```text
Love-Lasa/
├── public/
│   └── images/               # Local static assets & placeholders
├── src/
│   ├── app/
│   │   ├── globals.css       # Design tokens, CSS variables, typography utility classes
│   │   ├── layout.tsx        # Cormorant Garamond & DM Sans setup, metadata
│   │   └── page.tsx          # Homepage orchestration
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx     # Transparent over hero, frosted ivory on scroll, mobile toggle
│   │   │   ├── MobileMenu.tsx # Smooth slide-out navigation with Motion
│   │   │   └── Footer.tsx     # Editorial footer with brand note & directory
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx           # Full-viewport campaign hero with scroll cue
│   │   │   ├── PinnedRevealSection.tsx   # Signature GSAP ScrollTrigger 3-image reveal
│   │   │   ├── DiscoveryDestinations.tsx # New Arrivals, Signature Pieces, Bestsellers
│   │   │   ├── ProductShowcase.tsx       # Large editorial frames with alternate hover views
│   │   │   ├── BrandStorySection.tsx     # Atelier craftsmanship narrative
│   │   │   └── NewsletterSection.tsx     # Minimalist correspondence invitation
│   │   └── ui/
│   │       ├── Button.tsx     # Reusable editorial buttons (primary, outline, text)
│   │       └── Container.tsx  # Responsive layout wrapper
│   ├── config/
│   │   ├── images.ts          # Centralized image configuration (replace client assets here)
│   │   └── site.ts            # Brand text, navigation links, and product catalogue
│   ├── lib/
│   │   ├── gsap.ts            # Safe client-side GSAP + ScrollTrigger registration
│   │   └── utils.ts           # Class merging (clsx + tailwind-merge)
│   └── types/
│       └── index.ts           # TypeScript interfaces for image slots, products, collections
├── .env.example               # Template for future backend variables
├── next.config.ts             # Remote image patterns & Next.js configuration
├── package.json               # Dependencies & scripts
└── tsconfig.json              # TypeScript configuration
```

---

## 4. Central Asset Replacement Guide

All photography across the website is controlled centrally in [`src/config/images.ts`](file:///d:/Love-Lasa/src/config/images.ts).

To replace placeholder imagery with client photoshoot assets:
1. Open `src/config/images.ts`.
2. Update the `src` URL (or local path under `/public/images/`) for each predictable image slot:
   * `IMAGES.hero`: Full-viewport campaign hero
   * `IMAGES.pinnedReveal.left`: Left reveal panel (fluid silk)
   * `IMAGES.pinnedReveal.center`: Center lead panel (1.18fr sculptural trench)
   * `IMAGES.pinnedReveal.right`: Right reveal panel (tactile weave)
   * `IMAGES.destinations`: Collection headers
   * `IMAGES.brandStory`: Atelier portrait
3. **No layout or animation code needs to be altered.**

---

## 5. Local Development

```bash
# Install dependencies
npm install

# Run the development server
npm run dev

# Open in browser
http://localhost:3000

# Build for production
npm run build
```
