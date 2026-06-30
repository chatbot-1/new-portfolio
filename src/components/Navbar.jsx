import { useEffect, useState } from "react";
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";
import { profile, navLinks } from "../data/portfolio";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.getElementById(l.id))
      .filter(Boolean);
    if (!sections.length) return;
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        }),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const close = () => setOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-ink/10 bg-paper/85 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <div className="container-x flex items-center justify-between py-4">
        <a
          href="#home"
          onClick={close}
          className="font-serif text-lg font-semibold tracking-tight"
        >
          {profile.name}
          <span className="text-accent">.</span>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {navLinks.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={`font-sans text-[12px] font-medium uppercase tracking-[0.18em] transition-colors ${
                active === l.id ? "text-accent" : "text-ink-soft hover:text-ink"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-1 font-sans text-[12px] font-medium uppercase tracking-[0.18em] text-ink hover:text-accent sm:inline-flex"
          >
            Résumé <FiArrowUpRight />
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="text-ink md:hidden"
          >
            {open ? <FiX className="text-xl" /> : <FiMenu className="text-xl" />}
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden bg-paper transition-all duration-300 md:hidden ${
          open ? "max-h-96 border-t border-ink/10" : "max-h-0"
        }`}
      >
        <nav className="container-x flex flex-col py-1">
          {navLinks.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              onClick={close}
              className="border-b border-ink/[0.07] py-3.5 font-sans text-sm uppercase tracking-wide text-ink-soft hover:text-ink"
            >
              {l.label}
            </a>
          ))}
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noreferrer"
            onClick={close}
            className="py-3.5 font-sans text-sm uppercase tracking-wide text-accent"
          >
            Résumé ↗
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
