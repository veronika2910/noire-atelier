import { Link } from "react-router-dom";
import MagneticButton from "./MagneticButton";
import Reveal from "./Reveal";

const NAV_LINKS = [
  { label: "Work", to: "/#work" },
  { label: "Studio", to: "/studio" },
  { label: "Services", to: "/services" },
  { label: "Journal", to: "/journal" },
  { label: "Contact", to: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-ivory">
      <div className="container-atelier py-24 md:py-32">
        <Reveal>
          <p className="eyebrow !text-bronze-light">Have a project in mind?</p>
          <div className="mt-6 flex flex-col items-start justify-between gap-10 md:flex-row md:items-end">
            <h2 className="max-w-2xl font-display text-4xl leading-[1.1] md:text-6xl">
              Let&rsquo;s create something timeless.
            </h2>
            <MagneticButton
              as={Link}
              to="/contact"
              className="group flex shrink-0 items-center gap-3 border border-ivory/50 px-7 py-4 text-[11px] uppercase tracking-widest2 text-ivory transition-colors duration-300 hover:bg-ivory hover:text-ink"
            >
              Start a Project
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                &rarr;
              </span>
            </MagneticButton>
          </div>
        </Reveal>

        <div className="hairline-light mt-20 grid grid-cols-2 gap-10 pt-12 text-sm md:grid-cols-4">
          <div>
            <p className="font-display text-lg">NOIR&Eacute; ATELIER</p>
            <p className="mt-2 text-ivory/60">Luxury Interior Design Studio</p>
          </div>

          <div className="flex flex-col gap-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="link-underline w-fit text-ivory/70 hover:text-ivory"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-2 text-ivory/70">
            <a
              href="mailto:hello@noireatelier.com"
              className="link-underline w-fit hover:text-ivory"
            >
              hello@noireatelier.com
            </a>
            <p>Prague, Czech Republic</p>
          </div>

          <div className="flex flex-col gap-2 text-ivory/70">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="link-underline w-fit hover:text-ivory"
            >
              Instagram
            </a>
            <a
              href="https://pinterest.com"
              target="_blank"
              rel="noreferrer"
              className="link-underline w-fit hover:text-ivory"
            >
              Pinterest
            </a>
          </div>
        </div>

        <div className="mt-16 flex flex-col justify-between gap-4 text-xs text-ivory/40 md:flex-row">
          <p>&copy; {new Date().getFullYear()} No&iacute;re Atelier. Demo portfolio project.</p>
          <p>Design &amp; development &mdash; portfolio showcase</p>
        </div>
      </div>
    </footer>
  );
}
