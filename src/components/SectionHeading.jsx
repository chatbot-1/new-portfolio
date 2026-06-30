import Reveal from "./Reveal";

const SectionHeading = ({ index, eyebrow, title, kicker }) => (
  <div className="mb-12">
    <Reveal className="flex items-center gap-3 border-b border-ink/15 pb-4">
      <span className="font-sans text-[12px] font-semibold tracking-[0.25em] text-accent">
        {index}
      </span>
      <span className="font-sans text-[12px] font-medium uppercase tracking-[0.22em] text-ink-faint">
        {eyebrow}
      </span>
    </Reveal>
    <Reveal
      as="h2"
      delay={80}
      className="mt-6 max-w-3xl font-serif text-[2.2rem] font-medium leading-[1.05] tracking-tight sm:text-5xl"
    >
      {title}
    </Reveal>
    {kicker && (
      <Reveal as="p" delay={140} className="mt-4 max-w-xl text-[15px] leading-relaxed text-ink-soft">
        {kicker}
      </Reveal>
    )}
  </div>
);

export default SectionHeading;
