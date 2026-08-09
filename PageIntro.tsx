import Reveal from "./Reveal";

type PageIntroProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export default function PageIntro({
  eyebrow,
  title,
  description,
}: PageIntroProps) {
  return (
    <section className="container-atelier pb-20 pt-40 md:pb-28 md:pt-52">
      <Reveal>
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-6 max-w-3xl font-display text-[clamp(2.2rem,6vw,4.4rem)] font-normal leading-[1.05] text-ink">
          {title}
        </h1>
        {description && (
          <p className="mt-8 max-w-lg text-[15px] leading-relaxed text-ink/60">
            {description}
          </p>
        )}
      </Reveal>
    </section>
  );
}
