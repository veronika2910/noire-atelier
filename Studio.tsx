import { useEffect } from "react";
import PageIntro from "@/components/PageIntro";
import ProcessSteps from "@/components/ProcessSteps";
import Reveal from "@/components/Reveal";
import RevealImage from "@/components/RevealImage";

const FOCUS_AREAS = ["Architecture", "Materials", "Lighting", "Custom Furniture", "Atmosphere"];

export default function Studio() {
  useEffect(() => {
    document.title = "Studio — NOIRÉ ATELIER";
  }, []);

  return (
    <>
      <PageIntro
        eyebrow="Studio"
        title="We create spaces with a sense of place."
      />

      <section className="container-atelier grid grid-cols-1 gap-12 pb-28 md:grid-cols-12 md:gap-8 md:pb-40">
        <RevealImage
          src="https://images.unsplash.com/photo-1682184805271-11671b7ecf4c?q=80&w=1800&auto=format&fit=crop"
          alt="Studio-designed living room bathed in daylight"
          className="aspect-[4/3] md:col-span-7"
        />
        <div className="md:col-span-4 md:col-start-9 md:self-center">
          <Reveal>
            <p className="text-[15px] leading-relaxed text-ink/70">
              No&iacute;re Atelier is a design studio focused on residential
              interiors. Founded on the belief that a home should be
              designed from the inside out, we work closely with a small
              number of clients each year, giving every project the depth
              of attention it deserves.
            </p>
            <p className="mt-6 text-[15px] leading-relaxed text-ink/70">
              Our work sits at the intersection of architecture and
              interior &mdash; we are as comfortable reworking a floor
              plan as we are selecting the weight of a linen.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="mt-10 flex flex-wrap gap-3">
            {FOCUS_AREAS.map((area) => (
              <span
                key={area}
                className="border border-ink/15 px-4 py-2 text-xs uppercase tracking-widest2 text-ink/60"
              >
                {area}
              </span>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="container-atelier pb-28 md:pb-40">
        <Reveal className="mb-14 md:mb-20">
          <p className="eyebrow">Our Approach</p>
          <h2 className="mt-4 max-w-xl font-display text-[clamp(2rem,4.4vw,3.2rem)] leading-[1.08] text-ink">
            A process built for depth, not speed.
          </h2>
        </Reveal>
        <ProcessSteps />
      </section>
    </>
  );
}
