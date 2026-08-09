import Reveal from "./Reveal";

export default function IntroSection() {
  return (
    <section className="container-atelier py-28 md:py-40">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-8">
        <Reveal className="md:col-span-8 md:col-start-1">
          <h2 className="font-display text-[clamp(2rem,5vw,3.6rem)] font-normal leading-[1.08] text-ink">
            We design the
            <br />
            <span className="italic text-taupe">feeling</span> of a space.
          </h2>
        </Reveal>

        <Reveal
          delay={0.15}
          className="md:col-span-4 md:col-start-9 md:self-end"
        >
          <p className="text-[15px] leading-relaxed text-ink/70">
            We believe the most memorable interiors are not defined by
            trends, but by how they make you feel. Every project is shaped
            around light, proportion, material and the people who inhabit
            it.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
