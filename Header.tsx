import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { gsap } from "@/lib/gsap";
import MagneticButton from "./MagneticButton";

const NAV_LINKS = [
  { label: "Work", to: "/#work" },
  { label: "Studio", to: "/studio" },
  { label: "Services", to: "/services" },
  { label: "Journal", to: "/journal" },
  { label: "Contact", to: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-atelier ${
        scrolled || menuOpen
          ? "bg-ivory/85 backdrop-blur-md shadow-[0_1px_0_0_rgba(21,19,15,0.08)]"
          : "bg-transparent"
      }`}
    >
      <div className="container-atelier flex h-20 items-center justify-between md:h-24">
        <Link
          to="/"
          className="font-display text-lg tracking-[0.18em] text-ink md:text-xl"
          data-cursor="grow"
        >
          NOIR&Eacute; ATELIER
        </Link>

        <nav className="hidden items-center gap-10 lg:flex">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              className="link-underline eyebrow !text-ink/80 hover:!text-ink"
              data-cursor="grow"
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <MagneticButton
            as={Link}
            to="/contact"
            className="border border-ink/80 px-6 py-3 text-[11px] uppercase tracking-widest2 text-ink transition-colors duration-300 hover:bg-ink hover:text-ivory"
          >
            Start a Project
          </MagneticButton>
        </div>

        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
          className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-[6px] lg:hidden"
        >
          <span
            className={`block h-px w-6 bg-ink transition-transform duration-300 ${
              menuOpen ? "translate-y-[3.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-px w-6 bg-ink transition-transform duration-300 ${
              menuOpen ? "-translate-y-[3.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      <MobileNav open={menuOpen} />
    </header>
  );
}

function MobileNav({ open }: { open: boolean }) {
  useEffect(() => {
    if (!open) return;
    gsap.fromTo(
      "[data-mobile-link]",
      { opacity: 0, y: 16 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.06, ease: "power3.out" }
    );
  }, [open]);

  return (
    <div
      className={`fixed inset-0 top-0 flex h-dvh flex-col justify-center bg-ivory transition-opacity duration-500 lg:hidden ${
        open
          ? "pointer-events-auto opacity-100"
          : "pointer-events-none opacity-0"
      }`}
    >
      <nav className="container-atelier flex flex-col gap-6">
        {NAV_LINKS.map((link) => (
          <NavLink
            key={link.label}
            to={link.to}
            data-mobile-link
            className="font-display text-4xl text-ink"
          >
            {link.label}
          </NavLink>
        ))}
        <Link
          to="/contact"
          data-mobile-link
          className="eyebrow mt-4 inline-block w-fit border border-ink/80 px-6 py-4 text-ink"
        >
          Start a Project
        </Link>
      </nav>
    </div>
  );
}
