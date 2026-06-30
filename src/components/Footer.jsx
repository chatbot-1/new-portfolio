import { FiArrowUp } from "react-icons/fi";
import { profile, navLinks } from "../data/portfolio";

const Footer = () => {
  return (
    <footer className="border-t border-ink/15">
      <div className="container-x flex flex-col items-start justify-between gap-6 py-8 sm:flex-row sm:items-center">
        <p className="font-serif text-base">
          {profile.name}
          <span className="text-accent">.</span>{" "}
          <span className="font-sans text-[13px] text-ink-faint">
            — {profile.tagline}
          </span>
        </p>

        <nav className="flex flex-wrap gap-x-5 gap-y-2">
          {navLinks.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className="font-sans text-[12px] uppercase tracking-[0.16em] text-ink-soft transition-colors hover:text-accent"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#home"
          className="group inline-flex items-center gap-2 font-sans text-[12px] uppercase tracking-[0.16em] text-ink-soft transition-colors hover:text-ink"
        >
          Top
          <FiArrowUp className="transition-transform duration-300 group-hover:-translate-y-0.5" />
        </a>
      </div>

      <div className="container-x pb-8">
        <p className="font-sans text-[12px] text-ink-faint">
          © {new Date().getFullYear()} {profile.name}. Built with React, Vite & Tailwind.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
