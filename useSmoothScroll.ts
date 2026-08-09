import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";

/**
 * Initialises Lenis smooth scrolling and syncs it with GSAP's ticker so
 * ScrollTrigger-driven animations stay perfectly in step with scroll position.
 * Respects prefers-reduced-motion by skipping smoothing entirely.
 */
export function useSmoothScroll() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t: number) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
    }

    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(raf);
      lenis.destroy();
    };
  }, []);
}
