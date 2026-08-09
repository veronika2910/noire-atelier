import { useEffect } from "react";
import { Link } from "react-router-dom";
import PageIntro from "@/components/PageIntro";
import Reveal from "@/components/Reveal";
import { services } from "@/data/services";

export default function Services() {
  useEffect(() => {
    document.title = "Services — NOIRÉ ATELIER";
  }, []);

  return (
    <>
      <PageIntro
        eyebrow="Services"
        title="Considered support, at every scale."
        description="From a single spatial concept to a fully realised home, each service can stand alone or combine into a complete process."
      />

      <section className="container-atelier pb-28 md:pb-40">
        <div>
          {services.map((service, i) => (
            <Reveal key={service.index} delay={i * 0.04}>
              <Link
                to="/contact"
                data-cursor="grow"
                className="group hairline flex flex-col gap-4 py-10 transition-colors duration-500 md:flex-row md:items-center md:gap-12 md:py-12"
              >
                <span className="font-display text-lg text-taupe transition-colors duration-500 group-hover:text-bronze md:w-16">
                  {service.index}
                </span>
                <h3 className="font-display text-3xl text-ink transition-transform duration-500 md:w-72 md:text-4xl md:group-hover:translate-x-2">
                  {service.name}
                </h3>
                <p className="max-w-lg text-[15px] leading-relaxed text-ink/60">
                  {service.description}
                </p>
                <span className="ml-auto hidden text-xl text-ink/40 transition-all duration-500 group-hover:translate-x-1 group-hover:text-bronze md:block">
                  &rarr;
                </span>
              </Link>
            </Reveal>
          ))}
          <div className="hairline" />
        </div>
      </section>
    </>
  );
}
