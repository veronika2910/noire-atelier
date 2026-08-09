import { useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import IntroSection from "@/components/IntroSection";
import FeaturedProjects from "@/components/FeaturedProjects";
import Reveal from "@/components/Reveal";
import RevealImage from "@/components/RevealImage";
import { Link } from "react-router-dom";
import MagneticButton from "@/components/MagneticButton";

export default function Home() {
  useEffect(() => {
    document.title = "NOIRÉ ATELIER — Luxury Interior Design Studio";
  }, []);

  return (
    <>
      <HeroSection />
      <IntroSection />
      <FeaturedProjects />

      <section className="bg-ink-soft py-28 text-ivory md:py-40">
        <div className="container-atelier grid grid-cols-1 items-center gap-14 md:grid-cols-12">
          <RevealImage
            src="https://images.unsplash.com/photo-1621293954908-907159247fc8?q=80&w=1800&auto=format&fit=crop"
            alt="Warm wood-panelled interior with designer furniture"
            className="aspect-[4/5] md:col-span-5"
          />
          <div className="md:col-span-6 md:col-start-7">
            <Reveal>
              <p className="eyebrow !text-bronze-light">The Studio</p>
              <h2 className="mt-6 font-display text-[clamp(2rem,4.4vw,3.2rem)] leading-[1.1]">
                We create spaces with a sense of place.
              </h2>
              <p className="mt-8 max-w-md text-[15px] leading-relaxed text-ivory/65">
                No&iacute;re Atelier is a residential interior design studio
                working across architecture, materials, lighting and
                custom furniture &mdash; shaping homes that belong,
                unmistakably, to the people who live in them.
              </p>
              <div className="mt-10">
                <MagneticButton
                  as={Link}
                  to="/studio"
                  className="group inline-flex items-center gap-3 border border-ivory/50 px-7 py-4 text-[11px] uppercase tracking-widest2 text-ivory transition-colors duration-300 hover:bg-ivory hover:text-ink"
                >
                  About the Studio
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    &rarr;
                  </span>
                </MagneticButton>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
