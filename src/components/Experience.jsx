import { FiArrowUpRight } from "react-icons/fi";
import { experiences, leadership } from "../data/portfolio";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const Experience = () => {
  return (
    <section id="work" className="container-x py-20 sm:py-28">
      <SectionHeading index="02" eyebrow="Experience" title="Where I've been working." />

      <div className="border-t border-ink/15">
        {experiences.map((exp, i) => (
          <Reveal
            key={exp.company}
            delay={i * 80}
            className="grid gap-5 border-b border-ink/15 py-9 md:grid-cols-12 md:gap-8"
          >
            <div className="md:col-span-4">
              <p className="font-sans text-[12px] uppercase tracking-[0.18em] text-ink-faint">
                {exp.period}
              </p>
              <h3 className="mt-2 font-serif text-2xl font-medium leading-tight">
                {exp.role}
              </h3>
              <a
                href={exp.url}
                target="_blank"
                rel="noreferrer"
                className="mt-1 inline-flex items-center gap-1 font-sans text-sm text-accent hover:underline"
              >
                {exp.company} <FiArrowUpRight />
              </a>
              <p className="mt-1 font-sans text-[12px] text-ink-faint">{exp.location}</p>
            </div>

            <div className="md:col-span-8">
              <p className="text-[15px] leading-relaxed text-ink-soft">{exp.summary}</p>
              <ul className="mt-4 space-y-2.5">
                {exp.highlights.map((point, j) => (
                  <li
                    key={j}
                    className="flex gap-3 text-[14.5px] leading-relaxed text-ink-soft"
                  >
                    <span className="mt-2.5 h-px w-4 shrink-0 bg-accent" />
                    {point}
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap gap-2">
                {exp.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Leadership & community */}
      <Reveal className="mt-12">
        <p className="eyebrow">Leadership & community</p>
        <div className="mt-5 grid gap-px border border-ink/15 bg-ink/15 sm:grid-cols-2">
          {leadership.map((item) => (
            <div key={item.role} className="bg-paper p-6">
              <div className="flex items-baseline justify-between gap-4">
                <p className="font-serif text-base font-medium">{item.role}</p>
                <span className="font-sans text-[12px] text-ink-faint">{item.period}</span>
              </div>
              <p className="mt-1 font-sans text-[13px] text-accent">{item.org}</p>
              <p className="mt-2 text-[13.5px] leading-relaxed text-ink-soft">{item.note}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
};

export default Experience;
