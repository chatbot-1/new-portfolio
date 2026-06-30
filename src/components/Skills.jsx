import { skillGroups } from "../data/portfolio";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const marquee = [
  "React",
  "TypeScript",
  "Python",
  "Node.js",
  "Azure",
  "MongoDB",
  "Tailwind CSS",
  "Django",
  "Firebase",
  "Express.js",
  "Redux",
  "SQL",
  "Java",
  "Git",
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 sm:py-28">
      <div className="container-x">
        <SectionHeading index="04" eyebrow="Capabilities" title="The tools I work with." />

        <div className="grid gap-px border border-ink/15 bg-ink/15 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <Reveal
              key={group.title}
              delay={(i % 3) * 80}
              className="bg-paper p-6 sm:p-7"
            >
              <h3 className="font-sans text-[12px] font-semibold uppercase tracking-[0.18em] text-accent">
                {group.title}
              </h3>
              <ul className="mt-4 space-y-2">
                {group.items.map((item) => (
                  <li key={item} className="font-serif text-[15px] text-ink">
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>

      {/* marquee */}
      <div className="mask-fade-x mt-14 flex select-none overflow-hidden border-y border-ink/15 py-5">
        <div className="flex shrink-0 animate-marquee items-center gap-10 pr-10">
          {[...marquee, ...marquee].map((tech, i) => (
            <span key={i} className="font-serif text-xl italic text-ink-soft sm:text-2xl">
              {tech}
              <span className="ml-10 not-italic text-accent">/</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
