import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "@/lib/gsap";
import MagneticButton from "./MagneticButton";

export default function HeroSection() {
  const rootRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        "[data-hero-mask]",
        { scaleY: 1 },
        { scaleY: 0, transformOrigin: "top", duration: 1.4, ease: "power4.inOut" }
      )
        .fromTo(
          "[data-hero-image]",
          { scale: 1.15 },
          { scale: 1, duration: 1.8, ease: "power3.out" },
          "<"
        )
        .fromTo(
          "[data-hero-eyebrow]",
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.9"
        )
        .fromTo(
          "[data-hero-line]",
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 1, stagger: 0.12 },
          "-=0.5"
        )
        .fromTo(
          "[data-hero-sub]",
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.9 },
          "-=0.6"
        )
        .fromTo(
          "[data-hero-cta]",
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.1 },
          "-=0.6"
        )
        .fromTo(
          "[data-hero-scroll]",
          { opacity: 0 },
          { opacity: 1, duration: 0.8 },
          "-=0.4"
        );
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      className="relative flex h-[100dvh] min-h-[640px] w-full items-end overflow-hidden bg-ink"
    >
      <div className="absolute inset-0" data-hero-image>
        <img
          src="https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=2400&auto=format&fit=crop"
          alt="Minimalist luxury living room bathed in natural light"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/25 to-ink/10" />
      </div>
      <div
        className="absolute inset-0 z-10 origin-top bg-ivory"
        data-hero-mask
        aria-hidden="true"
      />

      <div className="container-atelier relative z-20 w-full pb-16 md:pb-24">
        <p
          data-hero-eyebrow
          className="eyebrow !text-bronze-light opacity-0"
        >
          No&iacute;re Atelier &mdash; Luxury Interior Design
        </p>

        <h1 className="mt-6 max-w-4xl font-display text-[clamp(2.6rem,9vw,6.2rem)] font-normal leading-[0.98] text-ivory">
          <span className="block overflow-hidden">
            <span data-hero-line className="block opacity-0">
              Spaces designed
            </span>
          </span>
          <span className="block overflow-hidden">
            <span data-hero-line className="block italic opacity-0">
              to be lived in.
            </span>
          </span>
        </h1>

        <p
          data-hero-sub
          className="mt-8 max-w-md text-[15px] leading-relaxed text-ivory/75 opacity-0"
        >
          We create timeless interiors where architecture, material and
          atmosphere exist in perfect balance.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <div data-hero-cta className="opacity-0">
            <MagneticButton
              as="a"
              href="#work"
              className="border border-ivory/70 px-7 py-4 text-[11px] uppercase tracking-widest2 text-ivory transition-colors duration-300 hover:bg-ivory hover:text-ink"
            >
              Explore Our Work
            </MagneticButton>
          </div>
          <div data-hero-cta className="opacity-0">
            <MagneticButton
              as={Link}
              to="/contact"
              className="px-7 py-4 text-[11px] uppercase tracking-widest2 text-ivory/80 transition-colors duration-300 hover:text-ivory"
            >
              Start a Project
            </MagneticButton>
          </div>
        </div>
      </div>

      <div
        data-hero-scroll
        className="absolute bottom-8 right-6 z-20 hidden items-center gap-3 opacity-0 md:right-16 lg:flex"
      >
        <span className="h-10 w-px bg-ivory/40" />
        <span className="text-[10px] uppercase tracking-widest2 text-ivory/60">
          Scroll
        </span>
      </div>
    </section>
  );
}
