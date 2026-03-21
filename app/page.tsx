"use client";

import { useState } from "react";
import Link from "next/link";
import Nav from "./components/Nav";

type Category = "professional" | "personal";

const projects = [
  {
    number: "01",
    title: "AI Opportunity Accelerator",
    subtitle: "Google.org",
    description:
      "Supporting 83 nonprofits across 4 US cities in adopting AI through coaching, strategy, and capacity building. I manage a team of 10 coaches — running thought partnerships, check-ins, and progress reviews to ensure organizations are meaningfully advancing their AI implementation.",
    tag: "Professional" as const,
    category: "professional" as Category,
    accent: "#F2AF29",
  },
  {
    number: "02",
    title: "Mental Health AI Accelerator",
    subtitle: "",
    description:
      "Supporting a cohort of 21 domestic and international wellness organizations to use AI for better mental health outcomes. I own end-to-end program delivery — cohort communication, client relationships, working sessions, and coaching execution.",
    tag: "Professional" as const,
    category: "professional" as Category,
    accent: "#92AFD7",
  },
  {
    number: "03",
    title: "Tech-Enabled Scaling Research",
    subtitle: "",
    description:
      "Researched 200+ nonprofits globally, built a database of 125+ real-world AI implementation cases, and analyzed 400+ program components to identify patterns in how nonprofits drive impact with AI.",
    tag: "Professional" as const,
    category: "professional" as Category,
    accent: "#588157",
  },
  {
    number: "04",
    title: "Art Reach Cambodia",
    subtitle: "ARC",
    description:
      "A personal passion project that became something bigger. ARC documents the underrepresented voices of Cambodia — women in the arts, journalists, activists, athletes — through multi-modal storytelling. Funded by a $10,000 Davis Peace Project grant.",
    tag: "Personal" as const,
    category: "personal" as Category,
    accent: "#A72608",
    cta: "Visit ARC Website",
    ctaHref: "#",
  },
];

const roles = [
  {
    label: "Technologist",
    accent: "#F2AF29",
    body: "Building systems that matter. Obsessed with the space where technology meets human needs and produces something genuinely useful.",
  },
  {
    label: "Social Impact Founder",
    accent: "#A72608",
    body: "Creating organisations that outlast their founders and solve problems that actually matter. Currently: ARC — Art Reach Cambodia.",
  },
  {
    label: "Optimist",
    accent: "#588157",
    body: "Genuinely believing in the power of people to build a better world. Not naively — relentlessly. The crux-finding never stops.",
  },
];

export default function Home() {
  const [filter, setFilter] = useState<Category | null>(null);
  const filtered = filter ? projects.filter((p) => p.category === filter) : projects;

  return (
    <div className="min-h-screen bg-[#f8f4ee]">
      <Nav />

      {/* ── Hero ───────────────────────────────────────────── */}
      <section className="pt-36 pb-20 px-6">
        <div className="max-w-[880px] mx-auto">
          <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-[#588157] mb-6">
            Hi. Welcome.
          </p>

          <p
            className="font-display italic text-[#3D405B] leading-none mb-1"
            style={{ fontSize: "clamp(1.4rem, 3.5vw, 3rem)", fontWeight: 300 }}
          >
            I&apos;m
          </p>
          <h1
            className="font-display font-black text-[#1C1B18] leading-[0.88] tracking-[-0.035em] mb-6"
            style={{ fontSize: "clamp(4.5rem, 14vw, 11rem)" }}
          >
            Lucklita.
          </h1>

          <p
            className="font-display italic text-[#3D405B]/70 max-w-2xl leading-snug mb-4"
            style={{ fontSize: "clamp(1rem, 1.8vw, 1.3rem)" }}
          >
            An optimist obsessed with finding and solving the cruxes of
            everything.
          </p>

          <p className="text-[#3D405B]/65 leading-relaxed max-w-lg mb-10 text-base">
            Technologist. Storyteller. Builder. I work at the edges — where
            tech meets art, where data meets humanity, where problems meet
            people who actually care.
          </p>

          <div className="flex items-center gap-4 flex-wrap">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 bg-[#3D405B] text-[#f8f4ee] font-bold px-6 py-3 rounded-full text-sm hover:bg-[#3D405B]/85 transition-all hover:scale-105"
            >
              See my work
            </a>
            <a
              href="#about"
              className="text-sm font-medium text-[#3D405B]/50 hover:text-[#3D405B] transition-colors"
            >
              About ↓
            </a>
          </div>
        </div>
      </section>

      {/* ── About ──────────────────────────────────────────── */}
      <section id="about" className="py-20 px-6 border-t border-[#3D405B]/8">
        <div className="max-w-[880px] mx-auto">
          <SectionLabel>About</SectionLabel>

          {/* Intro paragraph */}
          <div className="border-l-4 border-[#F2AF29] pl-6 mb-14 max-w-2xl">
            <p
              className="font-display italic text-[#3D405B] leading-relaxed"
              style={{ fontSize: "clamp(1rem, 1.6vw, 1.2rem)" }}
            >
              I bridge worlds — technology, art, culture, and impact — building
              tools, telling stories, and asking the questions that matter.
              Currently helping nonprofits navigate AI at{" "}
              <span className="not-italic font-bold">Project Evident</span>.
              Always building something that shouldn&apos;t exist yet.
            </p>
            <Link
              href="/life-story"
              className="inline-block mt-4 text-sm font-semibold text-[#588157] hover:text-[#3D405B] transition-colors"
            >
              Read my full story →
            </Link>
          </div>

          {/* Roles */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {roles.map((role) => (
              <div
                key={role.label}
                className="border-l-4 pl-5 py-1"
                style={{ borderColor: role.accent }}
              >
                <h3 className="font-display font-black text-[#1C1B18] text-lg mb-2">
                  {role.label}
                </h3>
                <p className="text-[#3D405B]/65 text-sm leading-relaxed">
                  {role.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Projects ───────────────────────────────────────── */}
      <section
        id="projects"
        className="py-20 px-6 border-t border-[#3D405B]/8"
      >
        <div className="max-w-[880px] mx-auto">
          <SectionLabel>Work &amp; Projects</SectionLabel>

          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <h2
              className="font-display font-black text-[#1C1B18] leading-[0.9] tracking-[-0.02em]"
              style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)" }}
            >
              Selected{" "}
              <span style={{ color: "#F2AF29" }}>Work</span>
            </h2>

            {/* Filter buttons */}
            <div className="flex gap-2">
              {(["professional", "personal"] as Category[]).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(filter === cat ? null : cat)}
                  className={`text-xs font-bold tracking-[0.15em] uppercase px-4 py-2 rounded-full transition-all ${
                    filter === cat
                      ? "bg-[#3D405B] text-[#f8f4ee]"
                      : "border border-[#3D405B]/20 text-[#3D405B]/50 hover:border-[#3D405B]/50 hover:text-[#3D405B]"
                  }`}
                >
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {filtered.map((project) => (
              <div
                key={project.number}
                className="group relative bg-white rounded-2xl p-8 border border-[#3D405B]/8 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 overflow-hidden flex flex-col"
              >
                {/* Colored top border accent */}
                <div
                  className="absolute top-0 left-0 right-0 h-[3px]"
                  style={{ background: project.accent }}
                />

                <div className="flex items-start justify-between mb-6">
                  <span className="font-mono text-[#3D405B]/30 text-xs">
                    {project.number}
                  </span>
                  <span
                    className="text-[10px] font-bold tracking-[0.18em] uppercase px-3 py-1 rounded-full"
                    style={{
                      color: project.accent,
                      background: `${project.accent}15`,
                    }}
                  >
                    {project.tag}
                  </span>
                </div>

                <div className="mb-3">
                  <h3
                    className="font-display font-black text-[#1C1B18] leading-tight group-hover:text-[#3D405B] transition-colors"
                    style={{ fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)" }}
                  >
                    {project.title}
                  </h3>
                  {project.subtitle && (
                    <p className="text-[#3D405B]/40 text-sm mt-1">
                      {project.subtitle}
                    </p>
                  )}
                </div>

                <p className="text-[#3D405B]/65 leading-relaxed text-sm flex-1">
                  {project.description}
                </p>

                {project.cta && project.ctaHref && (
                  <div className="mt-6">
                    <a
                      href={project.ctaHref}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#A72608] hover:text-[#3D405B] transition-colors"
                    >
                      {project.cta} →
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact ────────────────────────────────────────── */}
      <section
        id="contact"
        className="py-20 px-6 border-t border-[#3D405B]/8"
      >
        <div className="max-w-[880px] mx-auto">
          <SectionLabel>Say Hi</SectionLabel>

          {/* Subtle gold accent line */}
          <div className="w-12 h-1 rounded-full bg-[#F2AF29] mb-8" />

          <h2
            className="font-display font-black text-[#1C1B18] leading-[0.9] tracking-[-0.02em] mb-6 max-w-2xl"
            style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)" }}
          >
            Let&apos;s build something
            <br />
            that shouldn&apos;t exist yet.
          </h2>

          <p className="text-[#3D405B]/65 leading-relaxed max-w-lg mb-10 text-base">
            I&apos;m always open to collaborations, conversations, and
            questions that don&apos;t have easy answers.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-start">
            <a
              href="mailto:lucklitatheng@proton.me"
              className="inline-flex items-center gap-2.5 bg-[#3D405B] text-[#f8f4ee] font-semibold px-6 py-3 rounded-full text-sm hover:bg-[#3D405B]/85 transition-all hover:scale-105"
            >
              ✉ lucklitatheng@proton.me
            </a>
            <a
              href="https://linkedin.com/in/lucklita-theng"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 border border-[#3D405B]/20 text-[#3D405B] font-semibold px-6 py-3 rounded-full text-sm hover:border-[#3D405B]/50 transition-all hover:scale-105"
            >
              in linkedin.com/in/lucklita-theng
            </a>
          </div>
        </div>
      </section>

      {/* ── Footer ─────────────────────────────────────────── */}
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
      <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#3D405B]/35">
        {children}
      </p>
      <div className="flex-1 h-px bg-[#3D405B]/10" />
    </div>
  );
}
