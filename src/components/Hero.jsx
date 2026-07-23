import { FiArrowDownRight } from "react-icons/fi";
import profileImg from "../assets/profile.jpg";
import { profile, socials } from "../data/portfolio";
import SocialIcon from "./SocialIcon";
import Reveal from "./Reveal";

const Hero = () => {
  return (
    <section id="home" className="container-x pt-32 pb-16 sm:pt-40">
      {/* meta row */}
      <Reveal className="flex items-center justify-between border-b border-ink/15 pb-5 font-sans text-[11px] uppercase tracking-[0.22em] text-ink-faint sm:text-[12px]">
        <span>
          {profile.role} · {profile.location.replace("Remote · ", "")}
        </span>
        <span className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Open to work
        </span>
      </Reveal>

      <div className="grid items-end gap-12 pt-10 lg:grid-cols-12 lg:gap-8">
        {/* headline */}
        <div className="lg:col-span-8">
          <Reveal
            as="h1"
            delay={60}
            className="font-serif text-[2.9rem] font-medium leading-[0.98] tracking-tight sm:text-7xl"
          >
            I build <span className="italic text-accent">software</span>
            <br /> people enjoy using.
          </Reveal>

          <Reveal
            as="p"
            delay={140}
            className="mt-7 max-w-lg text-[15px] leading-relaxed text-ink-soft sm:text-base"
          >
            I'm Atul, a software engineer at{" "}
            <a
              href={profile.companyUrl}
              target="_blank"
              rel="noreferrer"
              className="link-line font-medium text-ink"
            >
              Ednius
            </a>
            , working across the stack on web and AI applications. I care about
            software that's fast, reliable, and genuinely useful.
          </Reveal>

          <Reveal delay={220} className="mt-9 flex flex-wrap items-center gap-4">
            <a href="#projects" className="btn btn-primary">
              View selected work <FiArrowDownRight />
            </a>
            <a href="#contact" className="btn btn-ghost">
              Get in touch
            </a>
          </Reveal>
        </div>

        {/* portrait */}
        <Reveal delay={180} className="lg:col-span-4">
          <figure className="relative">
            <div className="overflow-hidden border border-ink/15">
              <img
                src={profileImg}
                alt={`Portrait of ${profile.name}`}
                className="aspect-[4/5] w-full object-cover object-top grayscale transition-all duration-700 ease-out hover:grayscale-0"
              />
            </div>
            <figcaption className="mt-3 flex items-center justify-between font-sans text-[11px] uppercase tracking-[0.2em] text-ink-faint">
              <span>{profile.name}</span>
              <span>Software Engineer</span>
            </figcaption>
          </figure>
        </Reveal>
      </div>

      {/* socials */}
      <Reveal
        delay={260}
        className="mt-14 flex flex-wrap items-center gap-x-7 gap-y-3 border-t border-ink/15 pt-6"
      >
        <span className="font-sans text-[12px] uppercase tracking-[0.2em] text-ink-faint">
          Elsewhere
        </span>
        {socials.map((s) => (
          <a
            key={s.name}
            href={s.url}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-1.5 font-sans text-[13px] text-ink-soft transition-colors hover:text-accent"
          >
            <SocialIcon name={s.icon} className="text-sm" /> {s.name}
          </a>
        ))}
      </Reveal>
    </section>
  );
};

export default Hero;
