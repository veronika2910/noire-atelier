import { Link } from "react-router-dom";
import { projects } from "@/data/projects";
import RevealImage from "./RevealImage";
import Reveal from "./Reveal";

const LAYOUT: Record<
  string,
  { wrap: string; aspect: string }
> = {
  lg: { wrap: "md:col-span-8", aspect: "aspect-[4/5] md:aspect-[16/10]" },
  md: { wrap: "md:col-span-6", aspect: "aspect-[4/5]" },
  sm: { wrap: "md:col-span-4", aspect: "aspect-[3/4]" },
};

const OFFSET: string[] = [
  "md:col-start-1",
  "md:col-start-7 md:mt-24",
  "md:col-start-1 md:mt-16",
  "md:col-start-6",
];

export default function FeaturedProjects() {
  return (
    <section id="work" className="container-atelier scroll-mt-24 py-28 md:py-40">
      <Reveal className="mb-16 flex flex-col justify-between gap-6 md:mb-24 md:flex-row md:items-end">
        <div>
          <p className="eyebrow">Selected Work</p>
          <h2 className="mt-4 max-w-xl font-display text-[clamp(2rem,4.4vw,3.2rem)] leading-[1.08] text-ink">
            A closer look at recent residences.
          </h2>
        </div>
        <p className="max-w-xs text-sm leading-relaxed text-ink/60">
          Four homes, four cities &mdash; each shaped around its own light,
          material and rhythm of living.
        </p>
      </Reveal>

      <div className="grid grid-cols-1 gap-16 md:grid-cols-12 md:gap-x-8 md:gap-y-24">
        {projects.map((project, i) => {
          const layout = LAYOUT[project.size];
          return (
            <Link
              key={project.slug}
              to={`/work/${project.slug}`}
              data-cursor="view"
              className={`group col-span-1 ${layout.wrap} ${OFFSET[i % OFFSET.length]}`}
            >
              <RevealImage
                src={project.cover}
                alt={project.coverAlt}
                className={`${layout.aspect} w-full`}
                imgClassName="transition-transform duration-[1400ms] ease-atelier group-hover:scale-[1.07]"
              />
              <div className="mt-5 flex items-baseline justify-between border-t border-ink/15 pt-5">
                <div>
                  <p className="eyebrow !text-ink/40">{project.index}</p>
                  <h3 className="mt-1 font-display text-2xl text-ink">
                    {project.name}
                  </h3>
                </div>
                <p className="text-sm text-ink/50">{project.location}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
