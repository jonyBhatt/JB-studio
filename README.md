# JB® Studio — React Clone

A pixel-close recreation of the JB Studio agency landing page, built with:

- **React 19 + TypeScript**
- **Tailwind CSS v4**
- **GSAP** (ScrollTrigger) — word-by-word text reveals, fan-to-grid process cards
- **Framer Motion** — entrance animations, accordions, testimonial cards
- **shadcn-style UI primitives** (Button, Accordion built on Radix)
- **lucide-react** icons

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

## Structure

```
src/
  components/
    ui/              shadcn-style primitives (button, accordion)
    sections/         Hero, About, Work, Services, Process,
                       WhyChooseUs, Pricing, Testimonials, FAQ, Footer
    Navbar.tsx
    RevealText.tsx    GSAP ScrollTrigger word-reveal component
    SmokeBackground.tsx  animated hero background
  App.tsx
  index.css           Tailwind v4 theme + custom keyframes
```

## Notes

- Images are pulled from Unsplash via URL — swap in your own assets in each section file.
- Colors/fonts live in `src/index.css` under `@theme` (Inter + Archivo, paper/ink/accent palette).
- The "Work" section uses native `position: sticky` for the stacking-card scroll effect (no JS needed).
- The "Process" section uses GSAP ScrollTrigger to animate cards from a fanned rotation into a grid.
