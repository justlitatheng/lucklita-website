import Nav from "../components/Nav";
import { RESUME_URL } from "../lib/resume";

const experience = [
  {
    title: "AI Product & Partnerships Consultant",
    company: "iBlueprint.ai",
    location: "Philadelphia, PA",
    period: "August 2026 – Present",
    accent: "#F2AF29",
    sections: [
      {
        heading: "",
        bullets: [
          "Run structured product QA for an AI chatbot and workflow-agent platform from both individual-user and org-admin perspectives, auditing the prompt library, blueprints, and knowledge-base content, and building a repeatable QA protocol for the team.",
          "Support investment and sales pipeline development (VC outreach materials, target lead lists) and represent the platform within a government and social-impact tech cohort, coordinating with partners including Nava, the State of Maryland, and Google.org.",
        ],
      },
    ],
  },
  {
    title: "Associate II, OutcomesAI Team",
    company: "Project Evident",
    location: "Boston, MA",
    period: "November 2024 – August 2026",
    accent: "#92AFD7",
    sections: [
      {
        heading: "",
        bullets: [
          "Built an automated data collection system in Python that scraped 400+ data points from Impact Genome, cutting per-organization collection time from five to six minutes to under one minute, and used it to power large-scale research analyzing 100+ nonprofits' AI adoption patterns into an evidence-based technology-integration framework.",
          "Designed the curriculum for a 6-month AI capacity-building accelerator with Rare Beauty and Google.org, recruiting and coordinating coaches and working with 20+ national and international mental health and wellness organizations to build responsible AI use policies.",
          "Researched and mapped the programmatic models of all 20+ participating organizations to help define 6 tailored AI-adoption pathways, and managed communications for 100+ participants across biweekly working sessions with AI social impact experts.",
        ],
      },
    ],
  },
  {
    title: "Associate Product Manager & Junior Software Engineer",
    company: "We Sparkle Co.",
    location: "Minneapolis, MN",
    period: "September 2023 – January 2024",
    accent: "#588157",
    sections: [
      {
        heading: "",
        bullets: [
          "Conducted user research and A/B tests to scope subscription monetization features, using Figma prototyping to validate flows with customers before build.",
          "Built the resulting features in React and C#, enabling email subscription and platform fee contribution capabilities, and worked with engineers to prioritize technical trade-offs across the roadmap.",
        ],
      },
    ],
  },
  {
    title: "Project Coordinator & Peer Mentor",
    company: "Software for Good",
    location: "St. Paul, MN",
    period: "June 2022 – August 2022",
    accent: "#A72608",
    sections: [
      {
        heading: "",
        bullets: [
          "Coordinated a cross-functional team of 11 apprentices developing two web applications in Ruby on Rails and PostgreSQL, following agile practices.",
          "Established standardized development processes and mentored team members in engineering best practices, improving code quality and delivery consistency through weekly pair-programming and code-review sessions.",
        ],
      },
    ],
  },
  {
    title: "Research Assistant, Institutional Research",
    company: "Carleton College",
    location: "Northfield, MN",
    period: "September 2021 – May 2022",
    accent: "#7B5EA7",
    sections: [
      {
        heading: "",
        bullets: [
          "Built data aggregation systems using Python and SQL, processing 1,000+ data points for executive decision-making.",
          "Collaborated with leadership on data-centric research projects, providing analytical insights that informed student resource allocation.",
        ],
      },
    ],
  },
];

const projects = [
  {
    title: "Project Lead",
    subtitle: "Art Reach Cambodia (ARC)",
    location: "Battambang, Cambodia",
    period: "June 2021 – Present",
    accent: "#F2AF29",
    bullets: [
      "Secured $10,000+ in funding through a project proposal demonstrating alignment with global impact mission, and designed the digital platform architecture through Figma wireframes and a live site.",
    ],
  },
  {
    title: "Team Member, 6-Person Team",
    subtitle: "Government Transparency Data Visualization",
    location: "Northfield, MN",
    period: "September 2022 – February 2023",
    accent: "#92AFD7",
    bullets: [
      "Developed a web application analyzing US political funding sources, designing a React interface and visualization models that made complex campaign finance data legible to public users.",
    ],
  },
  {
    title: "Independent Research",
    subtitle: "Educational Assessment via Machine Learning",
    location: "Northfield, MN",
    period: "September 2022 – January 2023",
    accent: "#588157",
    bullets: [
      "Conducted machine learning research on Dynamic Key Value Memory Networks for K-12 educational assessment, testing models against synthetic and real datasets in Python.",
    ],
  },
];

const certifications = [
  {
    title: "Introduction to Food and Health",
    subtitle: "Stanford University (Coursera)",
    period: "September 2026",
    accent: "#F2AF29",
  },
  {
    title: "Advanced Learning Algorithms",
    subtitle: "DeepLearning.AI (Coursera)",
    period: "September 2024",
    accent: "#92AFD7",
  },
  {
    title: "Supervised Machine Learning: Regression and Classification",
    subtitle: "DeepLearning.AI (Coursera)",
    period: "February 2024",
    accent: "#588157",
  },
];

const skills = [
  {
    category: "AI & Data",
    items:
      "LLM prompting, RAG chatbots, workflow agents, applied data science (Python, SQL)",
  },
  {
    category: "Development Tools",
    items:
      "Python, SQL, C#, React, Git, Azure DevOps, PostgreSQL, API Development, Software Development Lifecycle",
  },
  {
    category: "Collaboration Tools",
    items:
      "Figma, Zapier, Slack Integration, Agile Methodologies, Cross-Functional Project Management",
  },
];

const awards = [
  {
    title: "David Pollatsek '96 Prize in Computer Science",
    subtitle: "Carleton College's highest honor for creative interdisciplinary application of computer science",
    accent: "#F2AF29",
  },
  {
    title: "Projects for Peace Award",
    subtitle: "Recognition for developing innovative solutions addressing global challenges, with ARC",
    accent: "#588157",
  },
  {
    title: "TEDx Youth Bangkok",
    subtitle: "Selected Speaker. Topic: 'Cambodia Reimagined'",
    accent: "#92AFD7",
  },
];

export default function Resume() {
  return (
    <div className="min-h-screen bg-[#f8f4ee]">
      <Nav />

      {/* ── Page header ─────────────────────────────────── */}
      <section className="pt-36 pb-12 px-6 border-b border-[#3D405B]/10">
        <div className="max-w-[880px] mx-auto flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-[#588157] mb-4">
              Resume
            </p>
            <h1
              className="font-display font-black text-[#1C1B18] leading-[0.88] tracking-[-0.03em]"
              style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}
            >
              Lucklita
              <br />
              Theng
            </h1>
            <div className="mt-4 flex flex-col gap-1 text-[#3D405B]/60 text-sm">
              <a href="mailto:lucklitatheng@proton.me" className="hover:text-[#3D405B] transition-colors">
                lucklitatheng@proton.me
              </a>
              <a href="https://linkedin.com/in/lucklita-theng" target="_blank" rel="noopener noreferrer" className="hover:text-[#3D405B] transition-colors">
                linkedin.com/in/lucklita-theng
              </a>
            </div>
          </div>
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#3D405B] text-[#F2AF29] font-bold px-6 py-3 rounded-full text-sm hover:bg-[#3D405B]/80 transition-all hover:scale-105 self-start md:self-end"
          >
            View PDF ↗
          </a>
        </div>
      </section>

      <div className="max-w-[880px] mx-auto px-6 py-16 space-y-20">

        {/* ── Summary ──────────────────────────────────── */}
        <section>
          <SectionLabel>Professional Summary</SectionLabel>
          <p className="text-[#3D405B] leading-[1.85] max-w-3xl" style={{ fontSize: "clamp(0.95rem, 1.4vw, 1.05rem)" }}>
            Technologist with a Computer Science background working across AI product, programs, and partnerships for social impact. Currently consulting for iBlueprint.ai on product QA, sales, and partnerships. Previously at Project Evident, where I designed AI capacity-building programs for nonprofits and built data tools for research on nonprofit AI adoption.
          </p>
        </section>

        {/* ── Education ────────────────────────────────── */}
        <section>
          <SectionLabel>Education</SectionLabel>
          <div className="border-l-4 border-[#F2AF29] pl-6 py-1">
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1 mb-2">
              <h3 className="font-display font-black text-[#1C1B18] text-xl md:text-2xl">
                Carleton College
              </h3>
              <span className="text-sm text-[#3D405B]/50 font-medium">
                September 2019 – June 2023
              </span>
            </div>
            <p className="text-[#3D405B]/60 text-sm mb-1">
              Northfield, MN &nbsp;·&nbsp; Bachelor of Arts in Computer Science
              &nbsp;·&nbsp; GPA: 3.7
            </p>
            <p className="text-[#3D405B]/50 text-sm">
              Relevant Coursework: Data Structures, Algorithms, Machine Learning, Human-Computer Interaction, Data Visualization, Software Design
            </p>
          </div>
        </section>

        {/* ── Certifications ───────────────────────────── */}
        <section>
          <SectionLabel>Certifications</SectionLabel>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {certifications.map((cert, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-5 rounded-2xl bg-white/50 border border-[#3D405B]/8"
              >
                <div
                  className="mt-1 w-2 h-2 rounded-full shrink-0"
                  style={{ background: cert.accent }}
                />
                <div>
                  <p className="font-display font-bold text-[#1C1B18] leading-snug">
                    {cert.title}
                  </p>
                  <p className="text-xs text-[#3D405B]/50 mt-1">
                    {cert.subtitle}, {cert.period}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Experience ───────────────────────────────── */}
        <section>
          <SectionLabel>Experience</SectionLabel>
          <div className="space-y-14">
            {experience.map((job, i) => (
              <div key={i} className="border-l-4 pl-6 py-1" style={{ borderColor: job.accent }}>
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1 mb-1">
                  <h3 className="font-display font-black text-[#1C1B18]" style={{ fontSize: "clamp(1.1rem, 2vw, 1.4rem)" }}>
                    {job.title}
                  </h3>
                  <span className="text-sm text-[#3D405B]/50 font-medium shrink-0">
                    {job.period}
                  </span>
                </div>
                <p className="text-sm font-semibold mb-6" style={{ color: job.accent }}>
                  {job.company}
                  {job.location && (
                    <span className="text-[#3D405B]/40 font-normal">
                      {" "}&nbsp;·&nbsp; {job.location}
                    </span>
                  )}
                </p>

                <div className="space-y-6">
                  {job.sections.map((section, j) => (
                    <div key={j}>
                      {section.heading && (
                        <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#3D405B]/40 mb-3">
                          {section.heading}
                        </p>
                      )}
                      <ul className="space-y-2">
                        {section.bullets.map((bullet, k) => (
                          <li key={k} className="flex gap-3 text-[#3D405B]/80 text-sm leading-relaxed">
                            <span className="mt-[6px] shrink-0 w-1 h-1 rounded-full bg-current opacity-40" />
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Projects & Leadership ─────────────────────── */}
        <section>
          <SectionLabel>Projects &amp; Leadership</SectionLabel>
          <div className="space-y-10">
            {projects.map((project, i) => (
              <div key={i} className="border-l-4 pl-6 py-1" style={{ borderColor: project.accent }}>
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1 mb-1">
                  <h3 className="font-display font-black text-[#1C1B18]" style={{ fontSize: "clamp(1.05rem, 1.8vw, 1.3rem)" }}>
                    {project.title}
                  </h3>
                  <span className="text-sm text-[#3D405B]/50 font-medium shrink-0">
                    {project.period}
                  </span>
                </div>
                {project.subtitle && (
                  <p className="text-sm font-semibold mb-4" style={{ color: project.accent }}>
                    {project.subtitle}
                    {project.location && (
                      <span className="text-[#3D405B]/40 font-normal">
                        {" "}&nbsp;·&nbsp; {project.location}
                      </span>
                    )}
                  </p>
                )}
                <ul className="space-y-2 mt-3">
                  {project.bullets.map((bullet, k) => (
                    <li key={k} className="flex gap-3 text-[#3D405B]/80 text-sm leading-relaxed">
                      <span className="mt-[6px] shrink-0 w-1 h-1 rounded-full bg-current opacity-40" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ── Skills ───────────────────────────────────── */}
        <section>
          <SectionLabel>Technical Skills</SectionLabel>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, i) => (
              <div
                key={i}
                className="bg-white/50 rounded-2xl p-6 border border-[#3D405B]/8"
              >
                <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#3D405B]/40 mb-3">
                  {skill.category}
                </p>
                <p className="text-[#3D405B]/80 text-sm leading-relaxed">
                  {skill.items}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Awards ───────────────────────────────────── */}
        <section>
          <SectionLabel>Recognition</SectionLabel>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {awards.map((award, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-5 rounded-2xl bg-white/50 border border-[#3D405B]/8"
              >
                <div
                  className="mt-1 w-2 h-2 rounded-full shrink-0"
                  style={{ background: award.accent }}
                />
                <div>
                  <p className="font-display font-bold text-[#1C1B18] leading-snug">
                    {award.title}
                  </p>
                  {award.subtitle && (
                    <p className="text-xs text-[#3D405B]/50 mt-1">
                      {award.subtitle}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* ── Footer ─────────────────────────────────────── */}
      <footer className="bg-[#3D405B] px-6 py-12 mt-10">
        <div className="max-w-[880px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="font-display font-black text-[#f8f4ee] text-lg mb-1 tracking-tight">
              Lucklita Theng
            </p>
            <p className="text-[#92AFD7]/60 text-xs tracking-widest uppercase">
              Technologist · Storyteller · Builder
            </p>
          </div>
          <div className="flex gap-6 text-[#92AFD7]/60 text-sm font-medium">
            <a
              href="https://linkedin.com/in/lucklita-theng"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#F2AF29] transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="mailto:lucklitatheng@proton.me"
              className="hover:text-[#F2AF29] transition-colors"
            >
              Email
            </a>
          </div>
        </div>
        <div className="max-w-[880px] mx-auto mt-8 pt-6 border-t border-[#92AFD7]/15">
          <p className="text-[#92AFD7]/30 text-xs">
            © {new Date().getFullYear()} Lucklita Theng. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4 mb-8">
      <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#3D405B]/40">
        {children}
      </p>
      <div className="flex-1 h-px bg-[#3D405B]/10" />
    </div>
  );
}
