# Visual Interactions Design

Date: 2026-02-05

## Summary
Add intense, scroll-driven motion across all sections with a parallax layer and a fixed “boat” element that travels with scroll. Use framer-motion for smooth animations, shared scroll progress, and prefers-reduced-motion fallbacks.

## Goals
- Increase visual impact and interactivity across every section.
- Add a persistent, scroll-synced “boat” visual at the page edge.
- Keep performance smooth and avoid content obstruction.
- Respect prefers-reduced-motion.

## Non-goals
- Rewriting existing section content or layout.
- Introducing heavy canvas/Lottie assets.
- Changing typography or brand palette.

## Key Decisions
- Use framer-motion for motion primitives and scroll progress.
- Centralize scroll progress in a context provider.
- Wrap sections with a MotionSection that handles reveal + parallax.
- Hide/soften effects on small screens and reduced motion.

## Components
- ScrollProvider (context) exposes scrollYProgress.
- MotionSection wraps each section with in-view reveal and a parallax decor layer.
- Boat renders an inline SVG, fixed to the right, moving with scroll and subtle bobbing.

## Animation Specs
- Reveal: opacity 0->1, y 24->0, blur 6->0, spring transition.
- Parallax: decor layer y mapped to scroll progress +/- 12–24px.
- Boat: y mapped to scroll progress (vh range), with light rotate/x oscillation.

## Testing
- Desktop + mobile scroll performance (no stutter).
- Boat does not cover CTAs or main copy.
- Reduced motion disables parallax and bobbing.

## Risks
- Excessive motion causing distraction; mitigate via subtle parallax ranges.
- Interaction with existing hero/background layers; ensure z-index isolation.
