import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import { projects } from "../data/portfolio";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const Projects = () => {
  return (
    <section id="projects" className="container-x py-20 sm:py-28">
      <SectionHeading index="03" eyebrow="Selected Work" title="Things I've built." />

      <div className="border-t border-ink/15">
        {projects.map((project, i) => {
          const primary = project.live || project.github;
          return (
            <Reveal
              key={project.name}
              delay={(i % 3) * 70}
              className="group border-b border-ink/15"
            >
              <div className="grid gap-4 py-8 transition-colors duration-300 group-hover:bg-ink/[0.03] md:grid-cols-12 md:gap-8 md:px-3">
                <div className="flex items-baseline gap-4 md:col-span-5">
                  <span className="font-sans text-[12px] text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <a
                      href={primary}
                      target="_blank"
                      rel="noreferrer"
                      className="font-serif text-2xl font-medium leading-tight transition-colors hover:text-accent sm:text-3xl"
                    >
                      {project.name}
                    </a>
                    {project.featured && (
                      <span className="mt-1 block font-sans text-[11px] uppercase tracking-[0.2em] text-ink-faint">
                        Featured
                      </span>
                    )}
                  </div>
                </div>

                <p className="text-[14.5px] leading-relaxed text-ink-soft md:col-span-5">
                  {project.blurb}
                </p>

                <div className="flex items-end justify-between gap-3 md:col-span-2 md:flex-col md:items-end">
                  <div className="flex flex-wrap gap-x-3 gap-y-1 md:justify-end">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="font-sans text-[11px] text-ink-faint">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${project.name} on GitHub`}
                        className="text-ink-faint transition-colors hover:text-ink"
                      >
                        <FiGithub className="text-base" />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${project.name} live`}
                        className="text-ink-faint transition-all duration-300 hover:-translate-y-0.5 hover:translate-x-0.5 hover:text-accent"
                      >
                        <FiArrowUpRight className="text-lg" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
