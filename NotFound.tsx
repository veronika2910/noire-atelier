import { useEffect } from "react";
import { Link } from "react-router-dom";
import MagneticButton from "@/components/MagneticButton";

export default function NotFound() {
  useEffect(() => {
    document.title = "Page Not Found — NOIRÉ ATELIER";
  }, []);

  return (
    <section className="container-atelier flex min-h-[70vh] flex-col items-start justify-center py-40">
      <p className="eyebrow">404</p>
      <h1 className="mt-6 font-display text-[clamp(2.2rem,6vw,4rem)] leading-[1.05] text-ink">
        This page hasn&rsquo;t been designed yet.
      </h1>
      <p className="mt-6 max-w-md text-[15px] leading-relaxed text-ink/60">
        The page you&rsquo;re looking for doesn&rsquo;t exist. Let&rsquo;s
        take you back home.
      </p>
      <div className="mt-10">
        <MagneticButton
          as={Link}
          to="/"
          className="border border-ink/80 px-7 py-4 text-[11px] uppercase tracking-widest2 text-ink transition-colors duration-300 hover:bg-ink hover:text-ivory"
        >
          Back to Home
        </MagneticButton>
      </div>
    </section>
  );
}
