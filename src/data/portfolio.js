// ──────────────────────────────────────────────────────────────
//  Single source of truth for all portfolio content.
//  Update text/links here — the components read straight from this.
// ──────────────────────────────────────────────────────────────

export const profile = {
  name: "Atul Singh",
  initials: "AS",
  role: "Software Engineer",
  company: "Ednius",
  companyUrl: "https://www.ednius.com/",
  location: "Remote · India",
  email: "atulsingh.conn@gmail.com",
  resumeUrl:
    "https://drive.google.com/file/d/1WLJCkZpw8eBuiF0kPGRNEpwkTvzFzFe8/view?usp=sharing",
  tagline: "Software engineer who likes building useful things.",
  about: [
    "I'm Atul — a software engineer who enjoys building products end to end, from the data model to the deploy. These days I work across the stack at Ednius, mostly with React, TypeScript, Azure, and Python.",
    "I like keeping things simple and reliable, picking up new tools, and learning from other people who build. When I'm not shipping, I help run a FlutterFlow developer community and started my college's first GDSC chapter.",
  ],
  focusAreas: [
    "Full-stack engineering",
    "AI / LLM systems",
    "Cloud (Azure)",
    "Clean, reliable UI",
  ],
  education: {
    school: "IIMT College of Engineering",
    degree: "B.Tech, Information Technology",
    period: "2020 — 2024",
    location: "Greater Noida, India",
  },
  availability: "Open to new opportunities",
};

export const quickFacts = [
  { label: "Role", value: "Software Engineer, Ednius" },
  { label: "Based in", value: "India · Remote" },
  { label: "Focus", value: "Full-stack & AI systems" },
  { label: "Education", value: "B.Tech, Information Technology" },
  { label: "Community", value: "GDSC Lead · FlutterFlow" },
];

export const socials = [
  { name: "GitHub", handle: "chatbot-1", url: "https://github.com/chatbot-1", icon: "github" },
  {
    name: "LinkedIn",
    handle: "atulxtech",
    url: "https://www.linkedin.com/in/atulxtech/",
    icon: "linkedin",
  },
  { name: "X", handle: "dirthief_", url: "https://x.com/dirthief_", icon: "x" },
  {
    name: "Instagram",
    handle: "nchovrga",
    url: "https://www.instagram.com/nchovrga/",
    icon: "instagram",
  },
];

export const experiences = [
  {
    role: "Software Engineer",
    company: "Ednius Inc.",
    url: "https://www.ednius.com/",
    period: "Feb 2024 — Present",
    location: "Remote",
    summary:
      "Work across the stack on an AI-powered grading platform built with React, TypeScript, Azure, and Python.",
    highlights: [
      "Helped build a multi-agent AI grading engine that evaluates essays, short answers, math, code, diagrams, and handwriting against instructor rubrics — cutting turnaround from 1–2 weeks to under 24 hours.",
      "Shipped instructor tools for rubric configuration, grade review/override, and class-wide learning analytics used across partner universities.",
      "Integrated with Canvas LMS to auto-deliver AI scores and personalized feedback for 60,000+ graded responses.",
      "Deployed and maintained cloud infrastructure on Azure with FERPA, GDPR, and SOC 2-aligned security (AES-256 at rest, TLS 1.3 in transit).",
    ],
    tags: ["React", "TypeScript", "Python", "Azure", "AI systems"],
  },
  {
    role: "Co-Organizer",
    company: "FlutterFlow Developer Group",
    url: "https://www.meetup.com/",
    period: "Jan 2025 — Present",
    location: "Prayagraj",
    summary:
      "Co-organize monthly meetups and technical sessions for a 500+ member developer community.",
    highlights: [
      "Promote knowledge-sharing on no-code / low-code app development through hands-on sessions.",
    ],
    tags: ["Community", "FlutterFlow", "Public speaking"],
  },
];

export const leadership = [
  {
    role: "Google Developer Student Clubs — Lead",
    org: "GDSC IIMT",
    period: "2023 — 2024",
    note: "First to establish a GDSC chapter on campus; ran 5+ events across different tech domains.",
  },
  {
    role: "Microsoft Learn Student Ambassador",
    org: "MLSA",
    period: "2023",
    note: "First MLSA on campus; led sessions on Git/GitHub and web hosting.",
  },
];

export const projects = [
  {
    name: "Governor",
    blurb:
      "An open-source distributed rate limiter for Node.js — token bucket, sliding window log, and sliding window counter algorithms behind one interface, with an atomic Redis-backed mode via Lua scripting. Proved and fixed a real race condition and benchmarked all three at ~2M ops/sec locally.",
    tags: ["TypeScript", "Redis", "Node.js", "Lua"],
    github: "https://github.com/chatbot-1/governor",
    live: "https://www.npmjs.com/package/@chatbot-1/governor",
  },
  {
    name: "Juror",
    blurb:
      "A zero-cost LLM evaluation toolkit that scores model outputs against a rubric using a local model as judge — running entirely on Ollama with no external API cost. Surfaced a self-eval bias across 84 real grades and ships a Streamlit dashboard reading live from SQLite, with 35 passing tests.",
    tags: ["Python", "Ollama", "Streamlit", "SQLite"],
    github: "https://github.com/chatbot-1/juror",
    live: "https://pypi.org/project/juror/",
  },
];

export const skillGroups = [
  {
    title: "Languages",
    items: ["JavaScript (ES6+)", "TypeScript", "Python", "Java", "SQL"],
  },
  {
    title: "Frontend",
    items: ["React.js", "Redux", "Context API", "Tailwind CSS", "Bootstrap", "HTML5 / CSS3"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "Django", "REST APIs", "JWT Auth"],
  },
  {
    title: "AI / LLM Systems",
    items: [
      "Multi-agent architecture",
      "LLM integration",
      "Prompt engineering",
      "AI grading & feedback",
    ],
  },
  {
    title: "Cloud & DevOps",
    items: ["Microsoft Azure", "Azure SQL", "Static Web Apps", "Firebase", "CI/CD", "Git"],
  },
  {
    title: "Databases & Tools",
    items: ["MongoDB", "SQL", "Postman", "VS Code", "Agile / Scrum"],
  },
];

export const navLinks = [
  { id: "about", label: "About" },
  { id: "work", label: "Work" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];
