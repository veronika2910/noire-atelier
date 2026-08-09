import { useEffect, useRef, type ReactNode, type ElementType } from "react";
import { gsap } from "@/lib/gsap";

type MagneticProps = {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  as?: ElementType;
  strength?: number;
  // Intentionally loose: this wrapper forwards arbitrary props (to, href,
  // type, disabled, target, rel, ...) to whichever element/component `as`
  // resolves to, so it can wrap both <a>/<button> and <Link>.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
};

/**
 * Wraps a CTA and gently pulls it toward the cursor within its bounds.
 * No-ops on touch devices — magnetic movement only makes sense with a
 * hovering pointer. Renders as a <button> by default; pass `as={Link}`
 * with a `to` prop (or `as="a"` with `href`) for links.
 */
export default function MagneticButton({
  children,
  className = "",
  onClick,
  as,
  strength = 0.35,
  ...rest
}: MagneticProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const isFinePointer = window.matchMedia(
      "(hover: hover) and (pointer: fine)"
    ).matches;
    if (!isFinePointer) return;

    const move = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const relX = e.clientX - rect.left - rect.width / 2;
      const relY = e.clientY - rect.top - rect.height / 2;
      gsap.to(el, {
        x: relX * strength,
        y: relY * strength,
        duration: 0.5,
        ease: "power3.out",
      });
    };

    const reset = () => {
      gsap.to(el, { x: 0, y: 0, duration: 0.6, ease: "elastic.out(1, 0.4)" });
    };

    el.addEventListener("mousemove", move);
    el.addEventListener("mouseleave", reset);
    return () => {
      el.removeEventListener("mousemove", move);
      el.removeEventListener("mouseleave", reset);
    };
  }, [strength]);

  const Tag = (as ?? "button") as ElementType;

  return (
    <div ref={ref} className="inline-block will-change-transform">
      <Tag onClick={onClick} className={className} data-cursor="grow" {...rest}>
        {children}
      </Tag>
    </div>
  );
}
