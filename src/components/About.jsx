import { profile, quickFacts } from "../data/portfolio";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const About = () => {
  return (
    <section id="about" className="container-x py-20 sm:py-28">
      <SectionHeading
        index="01"
        eyebrow="About"
        title={
          <>
            A software engineer who likes to keep things{" "}
            <span className="italic text-accent">simple</span>.
          </>
        }
      />

      <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
        <div className="space-y-5 lg:col-span-7">
          {profile.about.map((para, i) => (
            <Reveal
              as="p"
              key={i}
              delay={i * 90}
              className="text-[15.5px] leading-relaxed text-ink-soft sm:text-base"
            >
              {para}
            </Reveal>
          ))}

          <Reveal delay={220} className="pt-3">
            <p className="eyebrow">What I focus on</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {profile.focusAreas.map((f) => (
                <span key={f} className="tag">
                  {f}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={140} className="lg:col-span-5">
          <dl className="border-t border-ink/15">
            {quickFacts.map((fact) => (
              <div
                key={fact.label}
                className="flex items-baseline justify-between gap-6 border-b border-ink/15 py-4"
              >
                <dt className="font-sans text-[12px] uppercase tracking-[0.18em] text-ink-faint">
                  {fact.label}
                </dt>
                <dd className="text-right font-serif text-[15px]">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
};

export default About;
