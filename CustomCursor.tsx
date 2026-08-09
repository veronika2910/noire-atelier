import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

/**
 * Minimal custom cursor. Enabled only for pointer:fine + hover:hover devices
 * (i.e. real desktops), so it never interferes with touch usability.
 *
 * Any element can opt in to cursor reactions via:
 *   data-cursor="view"   -> shows "VIEW" label, cursor grows
 *   data-cursor="grow"   -> cursor grows, no label
 */
export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);
  const labelRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    setEnabled(mq.matches && !reducedMotion);

    const listener = (e: MediaQueryListEvent) =>
      setEnabled(e.matches && !reducedMotion);
    mq.addEventListener("change", listener);
    return () => mq.removeEventListener("change", listener);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    document.documentElement.classList.add("cursor-enabled");

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    const quickDot = {
      x: gsap.quickTo(dot, "x", { duration: 0.15, ease: "power3.out" }),
      y: gsap.quickTo(dot, "y", { duration: 0.15, ease: "power3.out" }),
    };
    const quickRing = {
      x: gsap.quickTo(ring, "x", { duration: 0.45, ease: "power3.out" }),
      y: gsap.quickTo(ring, "y", { duration: 0.45, ease: "power3.out" }),
    };

    const move = (e: MouseEvent) => {
      quickDot.x(e.clientX);
      quickDot.y(e.clientY);
      quickRing.x(e.clientX);
      quickRing.y(e.clientY);
    };

    const over = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest?.(
        "[data-cursor]"
      ) as HTMLElement | null;
      if (!target) return;
      const mode = target.getAttribute("data-cursor");
      gsap.to(ring, {
        scale: mode === "view" ? 2.6 : 1.8,
        duration: 0.4,
        ease: "power3.out",
      });
      if (mode === "view" && labelRef.current) {
        gsap.to(labelRef.current, { opacity: 1, duration: 0.3 });
      }
    };

    const out = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest?.(
        "[data-cursor]"
      ) as HTMLElement | null;
      if (!target) return;
      gsap.to(ring, { scale: 1, duration: 0.4, ease: "power3.out" });
      if (labelRef.current) {
        gsap.to(labelRef.current, { opacity: 0, duration: 0.2 });
      }
    };

    const hide = () => gsap.to([dot, ring], { opacity: 0, duration: 0.2 });
    const show = () => gsap.to([dot, ring], { opacity: 1, duration: 0.2 });

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    window.addEventListener("mouseout", out);
    document.addEventListener("mouseleave", hide);
    document.addEventListener("mouseenter", show);

    return () => {
      document.documentElement.classList.remove("cursor-enabled");
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      window.removeEventListener("mouseout", out);
      document.removeEventListener("mouseleave", hide);
      document.removeEventListener("mouseenter", show);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[100] h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-bronze"
        aria-hidden="true"
      />
      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-[100] flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-bronze/70"
        aria-hidden="true"
      >
        <span
          ref={labelRef}
          className="text-[9px] uppercase tracking-widest2 text-bronze opacity-0"
        >
          View
        </span>
      </div>
    </>
  );
}
