import { FiArrowUpRight } from "react-icons/fi";
import { profile, socials } from "../data/portfolio";
import Reveal from "./Reveal";

const Contact = () => {
  return (
    <section id="contact" className="container-x py-20 sm:py-28">
      <Reveal className="flex items-center gap-3 border-b border-ink/15 pb-4">
        <span className="font-sans text-[12px] font-semibold tracking-[0.25em] text-accent">
          05
        </span>
        <span className="font-sans text-[12px] font-medium uppercase tracking-[0.22em] text-ink-faint">
          Contact
        </span>
      </Reveal>

      <Reveal
        as="h2"
        delay={80}
        className="mt-8 max-w-3xl font-serif text-[2.5rem] font-medium leading-[1.02] tracking-tight sm:text-6xl"
      >
        Let's make something{" "}
        <span className="italic text-accent">worth using</span>.
      </Reveal>

      <Reveal delay={140} className="mt-8">
        <a
          href={`mailto:${profile.email}`}
          className="group inline-flex items-center gap-3 font-serif text-2xl text-ink transition-colors hover:text-accent sm:text-4xl"
        >
          {profile.email}
          <FiArrowUpRight className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
        </a>
      </Reveal>

      <Reveal
        delay={200}
        className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-ink/15 pt-6"
      >
        <span className="font-sans text-[12px] uppercase tracking-[0.2em] text-ink-faint">
          {profile.availability}
        </span>
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          {socials.map((s) => (
            <a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noreferrer"
              className="link-line font-sans text-sm text-ink-soft hover:text-ink"
            >
              {s.name}
            </a>
          ))}
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="link-line font-sans text-sm text-ink-soft hover:text-ink"
          >
            Résumé
          </a>
        </div>
      </Reveal>
    </section>
  );
};

export default Contact;
