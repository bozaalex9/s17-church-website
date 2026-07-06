# S17 Site Optimization Audit

Scope: mobile, accessibility, SEO, performance, image loading, animation performance, Core Web Vitals, and deployment readiness.

## Completed Optimizations

- Reworked scroll-linked cinematic movement to use element-scoped `useScroll` targets instead of global page scroll.
- Preserved the approved cinematic motion direction while reducing unintended cross-section coupling.
- Added reduced-motion fallbacks for transitions, hover states, parallax, and threshold movement.
- Added GPU-safe transform classes only where motion is active.
- Added `content-visibility` section containment for long editorial sections.
- Improved external link security with `noopener noreferrer`.
- Added external-link handling to the shared Button component.
- Added a Next.js config with image format optimization, package import optimization, compression, and hidden powered-by header.
- Improved root scroll padding for anchor navigation.
- Improved mobile menu body scroll locking with scrollbar compensation.
- Relaxed Collection item typing so non-link belief/value cards do not require fake hrefs.
- Fixed Card typing to use valid HTML element types.

## Historical Scope Constraints

This audit records the scope of its optimization pass; it is not a governing design or motion authority. Where this report conflicts with the [S17 Website Governance](../docs/governance/README.md), the governance documents control.

- No redesign.
- No new Beliefs page.
- No Sermons page.
- Give remains `/give` and bridges to Church Center.
- Homepage, Visit, Gather, Grow, Go, and About retain their content and route responsibilities while their presentation follows the current Design and Motion Bibles.
- Native scroll only; no scroll hijacking.
- Expressive transitions and depth remain available when they serve ordered, joyful proclamation.

## Deployment Readiness Notes

Before production deployment, install dependencies and run:

```bash
npm install
npm run build
```

Then run Lighthouse against the production build and verify:

- Mobile performance target: 90+
- Accessibility target: 95+
- SEO target: 95+
- Best Practices target: 95+
- CLS target: < 0.1
- LCP target: < 2.5s
- INP target: < 200ms

## Remaining Production Inputs

- Replace documentary placeholders with approved S17 photography.
- Confirm final Church Center Giving URL.
- Confirm final YouTube, Instagram, and Facebook URLs.
- Confirm Events, Resources, and Contact route content before public launch.
