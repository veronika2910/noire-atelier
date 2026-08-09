import { useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { getProjectBySlug, projects } from "@/data/projects";
import RevealImage from "@/components/RevealImage";
import Reveal from "@/components/Reveal";
import MagneticButton from "@/components/MagneticButton";

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;

  useEffect(() => {
    if (project) {
      document.title = `${project.name} — NOIRÉ ATELIER`;
    }
  }, [project]);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  const currentIdx = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(currentIdx + 1) % projects.length];

  return (
    <>
      <section className="relative flex h-[85vh] min-h-[520px] w-full items-end overflow-hidden bg-ink">
        <img
          src={project.cover.replace("w=1800", "w=2400")}
          alt={project.coverAlt}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-ink/10" />
        <div className="container-atelier relative z-10 pb-16 text-ivory md:pb-20">
          <p className="eyebrow !text-bronze-light">
            {project.category} &middot; {project.location} &middot; {project.year}
          </p>
          <h1 className="mt-5 max-w-3xl font-display text-[clamp(2.4rem,7vw,5.6rem)] leading-[1.02]">
            {project.name}
          </h1>
        </div>
      </section>

      <section className="container-atelier grid grid-cols-1 gap-12 py-24 md:grid-cols-12 md:gap-8 md:py-32">
        <div className="md:col-span-3">
          <Reveal>
            <p className="eyebrow">Concept</p>
          </Reveal>
        </div>
        <div className="md:col-span-8 md:col-start-5">
          <Reveal>
            <p className="text-[19px] leading-relaxed text-ink/75 md:text-[22px]">
              {project.concept}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container-atelier grid grid-cols-1 gap-12 pb-24 md:grid-cols-12 md:gap-8 md:pb-32">
        <div className="md:col-span-5">
          <Reveal>
            <p className="eyebrow">Challenge</p>
            <p className="mt-5 text-[15px] leading-relaxed text-ink/65">
              {project.challenge}
            </p>
          </Reveal>
        </div>
        <div className="md:col-span-5 md:col-start-7">
          <Reveal delay={0.1}>
            <p className="eyebrow">Approach</p>
            <p className="mt-5 text-[15px] leading-relaxed text-ink/65">
              {project.approach}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="container-atelier mb-10">
          <Reveal>
            <p className="eyebrow">Gallery</p>
          </Reveal>
        </div>
        <div className="container-atelier grid grid-cols-1 gap-8 md:grid-cols-12">
          {project.gallery.map((image, i) => (
            <RevealImage
              key={image.src}
              src={image.src}
              alt={image.alt}
              delay={i * 0.05}
              className={
                image.aspect === "portrait"
                  ? `md:col-span-5 aspect-[3/4] ${i % 2 === 0 ? "" : "md:col-start-8"}`
                  : image.aspect === "square"
                  ? "md:col-span-4 aspect-square"
                  : `md:col-span-8 aspect-[16/10] ${i % 2 === 0 ? "" : "md:col-start-5"}`
              }
            />
          ))}
        </div>
      </section>

      <section className="container-atelier pb-24 md:pb-32">
        <Reveal>
          <p className="eyebrow">Materials</p>
          <div className="mt-6 flex flex-wrap gap-3">
            {project.materials.map((material) => (
              <span
                key={material}
                className="border border-ink/15 px-4 py-2 text-xs uppercase tracking-widest2 text-ink/60"
              >
                {material}
              </span>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="hairline-light bg-ink-soft py-20 text-ivory md:py-28">
        <div className="container-atelier flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="eyebrow !text-bronze-light">Next Project</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl">
              {next.name}
            </h2>
          </div>
          <MagneticButton
            as={Link}
            to={`/work/${next.slug}`}
            className="group flex items-center gap-3 border border-ivory/50 px-7 py-4 text-[11px] uppercase tracking-widest2 text-ivory transition-colors duration-300 hover:bg-ivory hover:text-ink"
          >
            View Project
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              &rarr;
            </span>
          </MagneticButton>
        </div>
      </section>
    </>
  );
}
