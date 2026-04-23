# Luxury Premium Redesign Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Transform Altecho Driving School from cyberpunk/neon to luxury premium automotive aesthetic with elegant gold accents, refined typography, and cinematic 3D elements.

**Architecture:** Replace CSS variables and component styles across globals.css, layout.tsx, and all major components. Update 3D scenes with warm metallic materials and gold lighting.

**Tech Stack:** Next.js 16, React 19, Tailwind CSS 4, Three.js/R3F, Framer Motion

---

## Phase 1: Foundation (CSS & Fonts)

### Task 1: Update globals.css with Luxury Premium Design Tokens

**Files:**
- Modify: `app/globals.css:1-767`

Replace entire file content with new luxury premium design tokens:
- Primary: `#d4af37` (Gold), `#f5c542` (Gold Light)
- Backgrounds: `#0a0a0a`, `#141414`, `#1a1a1a`
- Typography: Playfair Display for headings, DM Sans for body
- New utility classes: luxury cards, gold accents, elegant animations
- Remove: neon/cyberpunk effects

---

### Task 2: Update layout.tsx with New Fonts

**Files:**
- Modify: `app/layout.tsx:1-43`

Change fonts:
```tsx
const displayFont = PlayfairDisplay({
  variable: "--font-display-var",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
})

const bodyFont = DM_Sans({
  variable: "--font-body-var",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
})
```

Update metadata to reflect luxury premium positioning.

---

## Phase 2: Core Components

### Task 3: Create Luxury Navbar Component

**Files:**
- Create: `components/LuxuryNavbar.tsx`
- Modify: `app/page.tsx` (replace Navbar import)

Features:
- Transparent initially, solid dark on scroll
- Gold logo accent
- Elegant link styling
- Mobile menu with smooth animation

---

### Task 4: Create Luxury Hero Section

**Files:**
- Create: `components/LuxuryHero.tsx`
- Modify: `app/page.tsx` (replace Hero3D import)

Features:
- Full-screen with premium car/driver imagery
- Parallax background effect
- Elegant gold gradient text
- Two refined CTAs
- Smooth scroll indicator

---

### Task 5: Create Luxury Services Section

**Files:**
- Create: `components/LuxuryServices.tsx`
- Modify: `app/page.tsx` (replace Services3D import)

Features:
- 4-column grid with elegant cards
- Gold accent borders
- Premium icons
- Hover lift effects with subtle gold glow

---

### Task 6: Create Luxury Testimonials Section

**Files:**
- Create: `components/LuxuryTestimonials.tsx`
- Modify: `app/page.tsx` (replace Testimonials3D import)

Features:
- Large elegant quote styling
- Customer photos with refined frames
- Gold star ratings
- Horizontal carousel

---

### Task 7: Create Luxury Pricing Section

**Files:**
- Create: `components/LuxuryPricing.tsx`
- Modify: `app/page.tsx` (replace Pricing3D import)

Features:
- 3-tier layout (Basic, Premium, Elite)
- Premium tier highlighted with gold border
- Elegant feature lists
- Refined CTA buttons

---

### Task 8: Create Areas Served Section

**Files:**
- Modify: `components/Areas.tsx`

Update styling to match luxury theme:
- Elegant card design
- Gold accents
- Refined typography

---

### Task 9: Create Luxury CTA Section

**Files:**
- Modify: `components/CTA.tsx`

Transform to luxury aesthetic:
- Dramatic dark background
- Gold CTA button
- Elegant copy

---

### Task 10: Create Luxury Footer

**Files:**
- Modify: `components/Footer.tsx`

Update styling:
- Gold accent headings
- Elegant layout
- Refined social links

---

## Phase 3: 3D Elements

### Task 11: Update 3D Hero with Luxury Materials

**Files:**
- Modify: `components/3d/Hero3D.tsx`

Changes:
- Warm gold/white lighting instead of cyan/magenta
- Metallic car silhouette materials
- Replace neon orbs with gold particles
- Studio environment preset

---

### Task 12: Update 3D Services Background

**Files:**
- Modify: `components/3d/Services3D.tsx`

Changes:
- Metallic geometric shapes
- Gold color palette for materials
- Warmer lighting
- Subtle effects

---

### Task 13: Update Other 3D Components

**Files:**
- Modify: `components/3d/Testimonials3D.tsx`
- Modify: `components/3d/Pricing3D.tsx`

Apply same luxury material updates.

---

## Phase 4: Integration

### Task 14: Update page.tsx with New Components

**Files:**
- Modify: `app/page.tsx`

Replace all imports to use new Luxury components:
```tsx
import Navbar from "@/components/Navbar"
import LuxuryNavbar from "@/components/LuxuryNavbar"
import LuxuryHero from "@/components/LuxuryHero"
import LuxuryServices from "@/components/LuxuryServices"
import LuxuryTestimonials from "@/components/LuxuryTestimonials"
import LuxuryPricing from "@/components/LuxuryPricing"
import LuxuryFooter from "@/components/LuxuryFooter" // or modified Footer
import Areas from "@/components/Areas"
import CTA from "@/components/CTA"
```

---

### Task 15: Build and Verify

**Files:**
- Run: `npm run build`
- Fix any TypeScript errors
- Verify design visually

---

## Execution

**Plan complete. Two execution options:**

**1. Subagent-Driven (Recommended)** - I dispatch fresh subagent per task, review between tasks, fast iteration

**2. Parallel Session** - Open new session with executing-plans, batch execution with checkpoints

**Which approach?**
