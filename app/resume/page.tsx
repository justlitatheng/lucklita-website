import Nav from "../components/Nav";

const experience = [
  {
    title: "Associate II, OutcomesAI Team",
    company: "Project Evident",
    location: "Boston, MA",
    period: "November 2023 – Present",
    accent: "#F2AF29",
    sections: [
      {
        heading: "Experimentation & Iteration",
        bullets: [
          "Designed and executed A/B experiments across 4 regional cohorts (SF, Austin, SC, Atlanta) serving 250+ participants, improving \u201cvery satisfied\u201d ratings from 50% to 61%.",
          "Led rapid iteration cycles adjusting program features based on real-time exit survey data, achieving 82% of participants reporting improved AI understanding mid-program.",
          "Implemented structured feedback loops through exit surveys and qualitative interviews.",
        ],
      },
      {
        heading: "Research, Metrics & Strategy",
        bullets: [
          "Managed a network of 10 coaches supporting 83 nonprofits across 4 US cities — running thought partnerships, progress reviews, and strategic interventions.",
          "Built and maintained analytics system tracking coaching engagement across 83 organizations.",
          "Drove simplification initiative reducing AI implementation template from 30 pages to 2 pages, improving completion rates from 14% to 71%.",
          "Defined and tracked engagement metrics for community platform growing to 352 members.",
        ],
      },
      {
        heading: "Technical & Automation",
        bullets: [
          "Built automated data capture system using a Python script to scrape and synthesize publicly available nonprofit data, informing program strategy and research findings.",
          "Built automated knowledge sharing system using Zapier and Slack integration, reducing manual documentation time by 65%.",
          "Developed 50+ training materials, guides, and case studies.",
        ],
      },
      {
        heading: "User Research",
        bullets: [
          "Conducted 8–10 user interviews with community foundation members.",
          "Facilitated workflow mapping sessions with 7–10 nonprofit participants.",
          "Led cross-functional requirements gathering with 5–7 internal stakeholders before platform launch.",
        ],
      },
    ],
  },
  {
    title: "Associate Product Manager & Software Engineer",
    company: "We Sparkle Co.",
    location: "Minneapolis, MN",
    period: "September 2023 – January 2024",
    accent: "#92AFD7",
    sections: [
      {
        heading: "",
        bullets: [
          "Shipped full-stack features using React and C#.",
          "Implemented subscription monetization features.",
          "Applied user-centric design processes using Figma prototyping.",
        ],
      },
    ],
  },
  {
    title: "Project Coordinator & Tech Mentor",
    company: "Software for Good",
    location: "St. Paul, MN",
    period: "June 2022 – August 2022",
    accent: "#588157",
    sections: [
      {
        heading: "",
        bullets: [
          "Managed cross-functional team of 11 developers building two web applications using agile methodologies.",
          "Established code review standards and testing protocols.",
          "Collaborated with stakeholders to gather requirements and prioritize features.",
        ],
      },
    ],
  },
];

const skills = [
  {
    category: "Research & Strategy",
    items:
      "User Research, Qualitative & Quantitative Analysis, Sentiment Analysis, Statistical Methods, Data Visualization, Workflow Mapping, User Journey Mapping",
  },
  {
    category: "Development & Tools",
    items:
      "React, Python, JavaScript, TypeScript, SQL, C#, Ruby on Rails, Figma, Git, Azure DevOps, PostgreSQL, Zapier",
  },
  {
    category: "Design",
    items: "Wireframing, Prototyping, Usability Testing, Information Architecture",
  },
  {
    category: "Collaboration",
    items:
      "Cross-Functional Leadership, Stakeholder Management, Technical Communication, Agile/Scrum",
  },
];

const awards = [
  {
    title: "David Pollatsek '96 Prize in Computer Science",
    subtitle: "Carleton College's highest honor for CS achievement",
    accent: "#F2AF29",
  },
  { title: "Projects for Peace Award", subtitle: "", accent: "#588157" },
  {
    title: "TEDx Youth Bangkok",
    subtitle: "Selected Speaker",
    accent: "#92AFD7",
  },
  { title: "UWC Davis Scholar", subtitle: "", accent: "#A72608" },
];

export default function Resume() {
  return (
    <div className="min-h-screen bg-[#f8f4ee]">
      <Nav />

      {/* ── Page header ─────────────────────────────────── */}
      <section className="pt-36 pb-12 px-8 md:px-14 border-b border-[#3D405B]/10">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-6">
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
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-[#3D405B] text-[#F2AF29] font-bold px-6 py-3 rounded-full text-sm hover:bg-[#3D405B]/80 transition-all hover:scale-105 self-start md:self-end"
          >
            Download PDF ↓
          </a>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-8 md:px-14 py-16 space-y-20">

        {/* ── Summary ──────────────────────────────────── */}
        <section>
          <SectionLabel>Professional Summary</SectionLabel>
          <p className="text-[#3D405B] leading-[1.85] max-w-3xl" style={{ fontSize: "clamp(0.95rem, 1.4vw, 1.05rem)" }}>
            Data-driven technologist and researcher with 2+ years of experience
            at the intersection of AI, social impact, and human-centered design.
            Track record of building automated systems, conducting rigorous
            research, and designing capacity-building programs that drive
            measurable outcomes. Skilled at bridging the technical and human —
            translating complex data into strategy, and strategy into
            implementation.
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
              Relevant Coursework: Human-Computer Interaction, Data
              Visualization, Software Design, Algorithms
            </p>
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
          <SectionLabel>Awards &amp; Recognition</SectionLabel>
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
      <footer className="bg-[#3D405B] px-8 md:px-14 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="font-display font-black text-[#f8f4ee] text-xl mb-1 tracking-tight">
              Lucklita Theng
            </p>
            <p className="text-[#92AFD7]/60 text-xs tracking-widest uppercase">
              Technologist · Storyteller · Builder
            </p>
          </div>
          <div className="flex gap-6 text-[#92AFD7]/60 text-sm font-medium">
            <a href="#" className="hover:text-[#F2AF29] transition-colors">
              LinkedIn
            </a>
            <a
              href="mailto:hello@lucklita.com"
              className="hover:text-[#F2AF29] transition-colors"
            >
              Email
            </a>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-[#92AFD7]/15">
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
