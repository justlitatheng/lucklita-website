"use client";

import { useState } from "react";
import Nav from "./components/Nav";

type Category = "professional" | "personal";

type Project = {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  tag: string;
  category: Category;
  accent: string;
  cta?: string;
  ctaHref?: string;
};

const projects: Project[] = [
  {
    number: "01",
    title: "AI Opportunity Accelerator",
    subtitle: "Google.org",
    description:
      "Supporting 83 nonprofits across 4 US cities in adopting AI through coaching, strategy, and capacity building. I manage a team of 10 coaches — running thought partnerships, check-ins, and progress reviews to ensure organizations are meaningfully advancing their AI implementation. On the technical side, I build automated systems to capture and analyze coaching data, design frameworks to measure progress, and translate insights into strategic interventions. Human and technical, always both.",
    tag: "Professional",
    category: "professional",
    accent: "#F2AF29",
  },
  {
    number: "02",
    title: "Mental Health AI Accelerator",
    subtitle: "",
    description:
      "Supporting a cohort of 21 domestic and international wellness organizations to use AI for better mental health outcomes. I own end-to-end program delivery — cohort communication, client relationships, working sessions, and coaching execution — helping organizations move from curiosity to real impact.",
    tag: "Professional",
    category: "professional",
    accent: "#92AFD7",
  },
  {
    number: "03",
    title: "Tech-Enabled Scaling Research",
    subtitle: "",
    description:
      "Researched 200+ nonprofits globally, built a database of 125+ real-world AI implementation cases, and analyzed 400+ program components to identify patterns in how nonprofits drive impact with AI. Synthesized findings into an interactive data visualization tool previewed across two focus groups and a live virtual event.",
    tag: "Professional",
    category: "professional",
    accent: "#588157",
  },
  {
    number: "04",
    title: "Art Reach Cambodia",
    subtitle: "ARC",
    description:
      "A personal passion project that became something bigger. ARC documents the underrepresented voices of Cambodia — women in the arts, journalists, activists, athletes, among many other creative individuals and identities — through multi-modal storytelling. We believe every story left untold is a piece of culture lost. Currently: completing our first series of short documentary videos featuring Cambodian artists, journalists, and athletes telling their own stories, in their own words. Funded by a $10,000 Davis Peace Project grant. Expanding in collaboration with Safe Space Battambang.",
    tag: "Personal",
    category: "personal",
    accent: "#A72608",
    cta: "Visit ARC Website",
    ctaHref: "#",
  },
];

export default function Home() {
  const [filter, setFilter] = useState<Category | null>(null);
  const filteredProjects =
    filter === null ? projects : projects.filter((p) => p.category === filter);

  return (
    <div className="min-h-screen">
      <Nav />

      {/* ── Section 1: Hero ──────────────────────────────── */}
      <section className="relative min-h-screen bg-[#f8f4ee] overflow-hidden flex flex-col">
        {/* Floating decorative elements */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-[28%] right-[8%] w-2.5 h-2.5 rounded-full bg-[#F2AF29]" />
          <div className="absolute top-[55%] right-[18%] w-1.5 h-1.5 rounded-full bg-[#A72608]" />
          <div className="absolute bottom-[22%] left-[42%] w-2 h-2 rounded-full bg-[#588157]" />
          <div
            className="absolute top-[35%] right-[6%] w-px bg-[#92AFD7]/50"
            style={{ height: "120px" }}
          />
          <div className="absolute -bottom-24 -right-24 w-[500px] h-[500px] rounded-full bg-[#F2AF29] opacity-10 blur-[100px]" />
          <div className="absolute -top-16 -left-16 w-80 h-80 rounded-full bg-[#92AFD7] opacity-10 blur-[80px]" />
        </div>

        {/* Top row: greeting + roles */}
        <div className="relative flex items-start justify-between px-8 md:px-14 pt-28">
          <p
            className="text-[11px] font-semibold tracking-[0.3em] uppercase text-[#588157]"
            style={{ fontFamily: "var(--font-jakarta)" }}
          >
            Hi. Welcome.
          </p>
          <div className="text-right">
            <p
              className="text-[10px] tracking-[0.22em] uppercase font-medium leading-[2.2]"
              style={{ color: "#92AFD7" }}
            >
              Technologist
              <br />·<br />
              Storyteller
              <br />·<br />
              Builder
            </p>
          </div>
        </div>

        {/* Main headline block */}
        <div className="relative flex-1 flex flex-col justify-center px-8 md:px-14 pt-6 pb-10">
          <p
            className="font-display italic text-[#3D405B] leading-none mb-[-0.05em] ml-0.5 md:ml-1"
            style={{ fontSize: "clamp(1.6rem, 4.5vw, 4rem)", fontWeight: 300 }}
          >
            I&apos;m
          </p>

          <h1
            className="font-display font-black text-[#1C1B18] leading-[0.86] tracking-[-0.035em]"
            style={{ fontSize: "clamp(5rem, 17vw, 18.5rem)" }}
          >
            Lucklita.
          </h1>

          <p
            className="mt-4 font-display italic text-[#3D405B]/70 max-w-2xl leading-snug"
            style={{ fontSize: "clamp(1rem, 2vw, 1.4rem)" }}
          >
            An optimist obsessed with finding and solving the cruxes of
            everything.
          </p>

          <p
            className="mt-4 text-[#3D405B]/60 leading-relaxed max-w-lg"
            style={{ fontSize: "clamp(0.85rem, 1.3vw, 1rem)" }}
          >
            Technologist. Storyteller. Builder. I work at the edges — where
            tech meets art, where data meets humanity, where problems meet
            people who actually care.
          </p>

          <div className="flex justify-between items-end mt-8 md:mt-10">
            <div className="flex items-center gap-5">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 bg-[#3D405B] text-[#f8f4ee] font-bold px-6 py-3 rounded-full text-sm tracking-wide hover:bg-[#3D405B]/80 transition-all hover:scale-105"
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
        </div>

        {/* Marquee ticker */}
        <div className="relative overflow-hidden border-t border-[#3D405B]/10 py-3 bg-[#F2AF29]/10">
          <div
            className="flex whitespace-nowrap gap-12 text-[11px] font-semibold tracking-[0.28em] uppercase text-[#3D405B]/50"
            style={{ animation: "marquee 22s linear infinite" }}
          >
            {[...Array(6)].map((_, i) => (
              <span key={i} className="flex gap-12 shrink-0">
                <span>Technologist</span>
                <span className="text-[#F2AF29]">✦</span>
                <span>Storyteller</span>
                <span className="text-[#F2AF29]">✦</span>
                <span>Builder</span>
                <span className="text-[#F2AF29]">✦</span>
                <span>Optimist</span>
                <span className="text-[#F2AF29]">✦</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 2: Roles & About ─────────────────────── */}
      <section
        id="about"
        className="relative grid grid-cols-1 lg:grid-cols-[5fr,7fr] min-h-screen overflow-hidden"
      >
        {/* Left panel — Powder Blue */}
        <div className="bg-[#92AFD7] px-10 md:px-14 py-20 flex flex-col justify-between relative overflow-hidden">
          <div
            className="pointer-events-none absolute -bottom-8 -left-4 font-display font-black text-[#3D405B]/10 leading-none select-none"
            style={{ fontSize: "clamp(8rem, 18vw, 16rem)" }}
            aria-hidden
          >
            02
          </div>

          <div className="relative">
            <p className="text-[10px] tracking-[0.3em] uppercase font-semibold text-[#3D405B]/60 mb-8">
              02 — Who
            </p>
            <h2
              className="font-display font-black text-[#3D405B] leading-[0.9] tracking-[-0.02em]"
              style={{ fontSize: "clamp(3rem, 7vw, 6.5rem)" }}
            >
              Roles
              <br />
              &amp; About
            </h2>
          </div>

          <div className="relative mt-10 lg:mt-0">
            <p
              className="font-display italic text-[#3D405B] leading-relaxed"
              style={{ fontSize: "clamp(1rem, 1.8vw, 1.3rem)" }}
            >
              I bridge worlds — technology, art, culture, and impact — building
              tools, telling stories, and asking the questions that matter.
              I&apos;m a researcher, a maker, and a founder who believes the
              most interesting problems live at the edges of disciplines.
              Currently: helping nonprofits navigate AI at Project Evident.
              Always: building something that shouldn&apos;t exist yet.
            </p>
          </div>
        </div>

        {/* Right panel — Cream with roles */}
        <div className="bg-[#f8f4ee] px-10 md:px-16 py-20 flex flex-col justify-center gap-12">
          <div className="border-l-4 border-[#F2AF29] pl-6">
            <div className="flex items-baseline gap-3 mb-2">
              <span className="font-mono text-xs text-[#F2AF29]">01</span>
              <h3
                className="font-display font-black text-[#1a1815]"
                style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)" }}
              >
                Technologist
              </h3>
            </div>
            <p className="text-[#3D405B]/70 leading-relaxed text-sm md:text-base">
              Building systems that matter. Obsessed with the space where
              technology meets human needs and produces something genuinely
              useful.
            </p>
          </div>

          <div className="border-l-4 border-[#A72608] pl-6">
            <div className="flex items-baseline gap-3 mb-2">
              <span className="font-mono text-xs text-[#A72608]">02</span>
              <h3
                className="font-display font-black text-[#1a1815]"
                style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)" }}
              >
                Social Impact Founder
              </h3>
            </div>
            <p className="text-[#3D405B]/70 leading-relaxed text-sm md:text-base">
              Creating organisations that outlast their founders and solve
              problems that actually matter. Currently: ARC — Art Reach
              Cambodia.
            </p>
          </div>

          <div className="border-l-4 border-[#588157] pl-6">
            <div className="flex items-baseline gap-3 mb-2">
              <span className="font-mono text-xs text-[#588157]">03</span>
              <h3
                className="font-display font-black text-[#1a1815]"
                style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)" }}
              >
                Optimist
              </h3>
            </div>
            <p className="text-[#3D405B]/70 leading-relaxed text-sm md:text-base">
              Genuinely believing in the power of people to build a better
              world. Not naively — relentlessly. The crux-finding never stops.
            </p>
          </div>
        </div>
      </section>

      {/* ── Section 3: Projects ──────────────────────────── */}
      <section
        id="projects"
        className="bg-[#3D405B] py-24 md:py-32 px-8 md:px-14 overflow-hidden"
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <p className="text-[10px] tracking-[0.3em] uppercase font-semibold text-[#92AFD7]/60 mb-5">
              03 — Work &amp; Projects
            </p>
            <h2
              className="font-display font-black text-[#f8f4ee] leading-[0.88] tracking-[-0.02em]"
              style={{ fontSize: "clamp(3rem, 9vw, 8rem)" }}
            >
              Selected
              <br />
              <span className="text-[#F2AF29]">Work</span>
            </h2>
          </div>
          <p className="text-[#92AFD7]/70 text-sm max-w-xs leading-relaxed md:text-right">
            Ideas turned into reality — from social impact to technology and
            everything in between.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex gap-3 mb-10">
          {(["professional", "personal"] as Category[]).map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(filter === cat ? null : cat)}
              className={`text-xs font-bold tracking-[0.2em] uppercase px-4 py-2 rounded-full transition-all ${
                filter === cat
                  ? "bg-[#F2AF29] text-[#3D405B]"
                  : "border border-white/20 text-[#92AFD7]/60 hover:border-white/40 hover:text-[#92AFD7]"
              }`}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        {/* Project cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filteredProjects.map((project, i) => (
            <div
              key={project.number}
              className={`group rounded-2xl p-8 md:p-10 border border-white/5 hover:scale-[1.02] transition-all duration-300 relative overflow-hidden ${
                i === 1 ? "md:mt-8" : ""
              } ${i === 3 ? "md:-mt-4" : ""}`}
              style={{ background: "rgba(255,255,255,0.04)" }}
            >
              <div
                className="absolute top-0 left-0 right-0 h-[3px]"
                style={{ background: project.accent }}
              />

              <div className="flex items-start justify-between mb-10">
                <span className="font-mono text-[#92AFD7]/40 text-xs">
                  {project.number}
                </span>
                <span
                  className="text-[10px] font-bold tracking-[0.2em] uppercase px-3 py-1 rounded-full"
                  style={{
                    color: project.accent,
                    background: `${project.accent}18`,
                  }}
                >
                  {project.tag}
                </span>
              </div>

              <div className="mb-4">
                <h3
                  className="font-display font-black text-[#f8f4ee] leading-tight group-hover:text-[#F2AF29] transition-colors duration-300"
                  style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)" }}
                >
                  {project.title}
                </h3>
                {project.subtitle && (
                  <p className="text-[#92AFD7]/50 text-sm mt-1">
                    {project.subtitle}
                  </p>
                )}
              </div>

              <p className="text-[#92AFD7]/60 leading-relaxed text-sm">
                {project.description}
              </p>

              <div className="mt-8">
                {project.cta && project.ctaHref ? (
                  <a
                    href={project.ctaHref}
                    className="inline-flex items-center gap-2 bg-[#f8f4ee] text-[#3D405B] font-bold px-5 py-2.5 rounded-full hover:bg-[#F2AF29] transition-all text-sm"
                  >
                    {project.cta} →
                  </a>
                ) : (
                  <div
                    className="flex items-center gap-1.5 text-sm font-medium"
                    style={{ color: `${project.accent}80` }}
                  >
                    Coming soon
                    <span className="group-hover:translate-x-1 transition-transform inline-block">
                      →
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Section 4: Contact ────────────────────────────── */}
      <section
        id="contact"
        className="relative bg-[#F2AF29] py-28 md:py-36 px-8 md:px-14 overflow-hidden"
      >
        <div
          className="pointer-events-none absolute -bottom-10 -right-6 font-display font-black text-[#3D405B]/10 leading-none select-none"
          style={{ fontSize: "clamp(12rem, 30vw, 28rem)" }}
          aria-hidden
        >
          04
        </div>
        <div className="pointer-events-none absolute top-0 right-0 w-64 h-64 rounded-full bg-[#A72608] opacity-10 blur-[70px]" />

        <div className="relative max-w-5xl">
          <p className="text-[10px] tracking-[0.3em] uppercase font-semibold text-[#A72608] mb-6">
            04 — Say Hi
          </p>

          <h2
            className="font-display font-black text-[#3D405B] leading-[0.88] tracking-[-0.03em] mb-8"
            style={{ fontSize: "clamp(3rem, 9vw, 8rem)" }}
          >
            Let&apos;s build
            <br />
            something
            <br />
            that shouldn&apos;t
            <br />
            exist yet.
          </h2>

          <p className="text-[#3D405B]/70 text-base md:text-lg leading-relaxed mb-10 max-w-xl">
            I&apos;m always open to collaborations, conversations, and
            questions that don&apos;t have easy answers.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 items-start">
            <a
              href="mailto:hello@lucklita.com"
              className="inline-flex items-center gap-3 bg-[#3D405B] text-[#F2AF29] font-bold px-8 py-4 rounded-full hover:bg-[#3D405B]/80 transition-all hover:scale-105 text-base md:text-lg tracking-wide"
            >
              hello@lucklita.com →
            </a>
            <div className="flex gap-5 items-center pt-2 sm:pt-4">
              <a
                href="#"
                className="text-sm font-semibold text-[#3D405B] hover:text-[#A72608] transition-colors"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ─────────────────────────────────────────── */}
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
