# S17 Engineering Guidance

## Implementation standard

Engineering makes confident proclamation reliable. Expressive design is not permission for fragile systems.

## Requirements

- Use semantic HTML and preserve keyboard, anchor, history, and native scroll behavior.
- Keep essential content server-rendered and available without waiting for animation.
- Use typed, composable primitives and centralized presets instead of scattered magic values.
- Prefer CSS for simple state transitions and Motion for React for meaningful choreography.
- Animate transform and opacity first; avoid layout thrashing and expensive blur or shadow animation.
- Optimize responsive images and video, reserve media dimensions, and prevent layout shift.
- Treat reduced motion, touch behavior, focus states, and mobile performance as acceptance criteria.
- Protect Core Web Vitals, SEO, battery life, and maintainable dependency boundaries.
- Test type safety, production builds, key viewport widths, content overflow, and motion fallbacks.

## Decision rule

Do not reject an expressive idea merely because it is ambitious. First ask whether it serves the constitution, then find the simplest performant and accessible implementation. Reject it when it obscures truth, harms access, weakens reliability, or creates unjustified maintenance cost.
