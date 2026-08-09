import { useEffect } from "react";
import PageIntro from "@/components/PageIntro";
import RevealImage from "@/components/RevealImage";
import Reveal from "@/components/Reveal";
import { articles } from "@/data/journal";

export default function Journal() {
  useEffect(() => {
    document.title = "Journal — NOIRÉ ATELIER";
  }, []);

  const [feature, ...rest] = articles;

  return (
    <>
      <PageIntro
        eyebrow="Journal"
        title="Notes on interiors, material and time."
      />

      <section className="container-atelier pb-16 md:pb-24">
        <article className="group grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-8" data-cursor="view">
          <RevealImage
            src={feature.image}
            alt={feature.imageAlt}
            className="aspect-[16/10] md:col-span-8"
            imgClassName="transition-transform duration-[1400ms] ease-atelier group-hover:scale-[1.05]"
          />
          <div className="md:col-span-4 md:self-center">
            <Reveal>
              <p className="eyebrow">{feature.category} &middot; {feature.date}</p>
              <h2 className="mt-4 font-display text-3xl leading-[1.1] text-ink md:text-4xl">
                {feature.title}
              </h2>
              <p className="mt-5 text-[15px] leading-relaxed text-ink/60">
                {feature.excerpt}
              </p>
            </Reveal>
          </div>
        </article>
      </section>

      <section className="container-atelier pb-28 md:pb-40">
        <div className="hairline grid grid-cols-1 gap-x-8 gap-y-16 pt-16 md:grid-cols-3 md:pt-20">
          {rest.map((article, i) => (
            <Reveal key={article.slug} delay={i * 0.08}>
              <article data-cursor="view" className="group">
                <RevealImage
                  src={article.image}
                  alt={article.imageAlt}
                  className="aspect-[4/5]"
                  imgClassName="transition-transform duration-[1400ms] ease-atelier group-hover:scale-[1.06]"
                />
                <p className="eyebrow mt-6">
                  {article.category} &middot; {article.date}
                </p>
                <h3 className="mt-3 font-display text-2xl leading-[1.15] text-ink">
                  {article.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/55">
                  {article.excerpt}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
