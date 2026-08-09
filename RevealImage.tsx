import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

type RevealImageProps = {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  parallax?: boolean;
  delay?: number;
};

/**
 * Image wrapped in a mask panel that draws back on scroll-in, revealing the
 * photograph beneath. Optionally applies a slow, subtle vertical parallax
 * as the image scrolls through the viewport.
 */
export default function RevealImage({
  src,
  alt,
  className = "",
  imgClassName = "",
  parallax = true,
  delay = 0,
}: RevealImageProps) {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);
  const maskRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const img = imgRef.current;
    const mask = maskRef.current;
    if (!wrap || !img || !mask) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        mask,
        { scaleY: 1 },
        {
          scaleY: 0,
          transformOrigin: "top",
          duration: 1.3,
          delay,
          ease: "power4.inOut",
          scrollTrigger: {
            trigger: wrap,
            start: "top 82%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        img,
        { scale: 1.18, opacity: 0.6 },
        {
          scale: parallax ? 1.06 : 1,
          opacity: 1,
          duration: 1.5,
          delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: wrap,
            start: "top 82%",
            toggleActions: "play none none none",
          },
        }
      );

      if (parallax) {
        gsap.to(img, {
          yPercent: 8,
          ease: "none",
          scrollTrigger: {
            trigger: wrap,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });
      }
    }, wrap);

    return () => ctx.revert();
  }, [delay, parallax]);

  return (
    <div ref={wrapRef} className={`relative overflow-hidden ${className}`}>
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        loading="lazy"
        className={`h-full w-full object-cover ${imgClassName}`}
      />
      <div
        ref={maskRef}
        className="pointer-events-none absolute inset-0 bg-ivory"
        aria-hidden="true"
      />
    </div>
  );
}
