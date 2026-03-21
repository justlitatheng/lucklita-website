"use client";

import { useState } from "react";
import Link from "next/link";
import Nav from "./components/Nav";

type Category = "professional" | "personal";

const projects = [
  {
    number: "01",
    title: "AI Opportunity Accelerator",
    oneliner: "Supporting 83 nonprofits across 4 US cities to adopt AI through coaching, strategy, and capacity building.",
    tag: "Professional" as Category,
    accent: "#F2AF29",
    accentBg: "#F2AF29",
  },
  {
    number: "02",
    title: "Mental Health AI Accelerator",
    oneliner: "Supporting 21 wellness organizations globally to use AI for better mental health outcomes.",
    tag: "Professional" as Category,
    accent: "#92AFD7",
    accentBg: "#92AFD7",
  },
  {
    number: "03",
    title: "Tech-Enabled Scaling Research",
    oneliner: "Built a database of 125+ real-world AI implementation cases across 200+ nonprofits globally.",
    tag: "Professional" as Category,
    accent: "#588157",
    accentBg: "#588157",
  },
  {
    number: "04",
    title: "Art Reach Cambodia (ARC)",
    oneliner: "Documenting the underrepresented voices of Cambodia through multi-modal storytelling.",
    tag: "Personal" as Category,
    accent: "#A72608",
    accentBg: "#A72608",
    cta: "Visit ARC Website",
    ctaHref: "#",
  },
];

export default function Home() {
  const [filter, setFilter] = useState<Category | null>(null);
  const filtered = filter ? projects.filter((p) => p.tag === filter) : projects;

  return (
    <div className="min-h-screen" style={{ background: "#FAFAF7" }}>
      <Nav />

      {/* ── Hero ───────────────────────────────────────────── */}
      <section className="pt-36 pb-24 px-6">
        <div className="max-w-[860px] mx-auto flex flex-col items-center text-center">

          {/* Photo placeholder */}
          <div
            className="w-[200px] h-[200px] rounded-full flex items-center justify-center mb-10 shrink-0"
            style={{ background: "#92AFD7" }}
          >
            <span className="text-sm font-medium text-[#3D405B]/70 px-4 text-center leading-snug">
              Photo coming soon
            </span>
          </div>

          {/* Name */}
          <h1
            className="font-display font-black text-[#1C1B18] leading-[0.9] tracking-[-0.03em] mb-5"
            style={{ fontSize: "clamp(3rem, 8vw, 6rem)" }}
          >
            Hi, I&apos;m Lucklita.
          </h1>

          {/* Tagline */}
          <p
            className="font-display italic text-[#3D405B]/70 mb-5 max-w-xl leading-snug"
            style={{ fontSize: "clamp(1.05rem, 2vw, 1.35rem)" }}
          >
            An optimist obsessed with finding and solving the cruxes of
            everything.
          </p>

          {/* Body */}
          <p
            className="text-[#3D405B]/60 leading-relaxed max-w-lg mb-10"
            style={{ fontSize: "clamp(0.9rem, 1.4vw, 1rem)" }}
          >
            Technologist. Storyteller. Builder. I work at the edges — where
            tech meets art, where data meets humanity, where problems meet
            people who actually care.
          </p>

          {/* CTA buttons */}
          <div className="flex gap-4 flex-wrap justify-center">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 bg-[#3D405B] text-[#FAFAF7] font-bold px-7 py-3 rounded-full text-sm hover:bg-[#3D405B]/85 transition-all hover:scale-105"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border-2 border-[#3D405B]/20 text-[#3D405B] font-bold px-7 py-3 rounded-full text-sm hover:border-[#3D405B]/50 transition-all hover:scale-105"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* ── About snippet ──────────────────────────────────── */}
      <section className="py-16 px-6" style={{ background: "#F2AF2912" }}>
        <div className="max-w-[640px] mx-auto text-center">
          <p
            className="text-[#3D405B] leading-[1.85] mb-5"
            style={{ fontSize: "clamp(0.95rem, 1.5vw, 1.05rem)" }}
          >
            I bridge worlds — technology, art, culture, and impact — building
            tools, telling stories, and asking the questions that matter.
            Currently helping nonprofits navigate AI at{" "}
            <span className="font-semibold">Project Evident</span>. Always
            building something that shouldn&apos;t exist yet.
          </p>
          <Link
            href="/life-story"
            className="text-sm font-semibold text-[#588157] hover:text-[#3D405B] transition-colors"
          >
            Read my full story →
          </Link>
        </div>
      </section>

      {/* ── Projects ───────────────────────────────────────── */}
      <section id="projects" className="py-24 px-6">
        <div className="max-w-[860px] mx-auto">

          {/* Heading */}
          <div className="text-center mb-10">
            <h2
              className="font-display font-black text-[#1C1B18] leading-tight tracking-[-0.02em] mb-6"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
            >
              My Work
            </h2>

            {/* Filter buttons */}
            <div className="flex gap-3 justify-center">
              {(["professional", "personal"] as Category[]).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(filter === cat ? null : cat)}
                  className={`text-xs font-bold tracking-[0.15em] uppercase px-5 py-2 rounded-full transition-all ${
                    filter === cat
                      ? "bg-[#3D405B] text-[#FAFAF7]"
                      : "border border-[#3D405B]/20 text-[#3D405B]/50 hover:border-[#3D405B]/50 hover:text-[#3D405B]"
                  }`}
                >
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {filtered.map((project) => (
              <div
                key={project.number}
                className="group rounded-2xl p-8 border border-[#3D405B]/8 bg-white hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex flex-col"
              >
                {/* Tag */}
                <span
                  className="text-[10px] font-bold tracking-[0.2em] uppercase px-3 py-1 rounded-full self-start mb-5"
                  style={{
                    color: project.accent,
                    background: `${project.accentBg}15`,
                  }}
                >
                  {project.tag}
                </span>

                {/* Title */}
                <h3
                  className="font-display font-black text-[#1C1B18] leading-tight mb-3 group-hover:text-[#3D405B] transition-colors"
                  style={{ fontSize: "clamp(1.2rem, 2.5vw, 1.5rem)" }}
                >
                  {project.title}
                </h3>

                {/* One-liner */}
                <p className="text-[#3D405B]/60 text-sm leading-relaxed flex-1">
                  {project.oneliner}
                </p>

                {/* CTA */}
                {project.cta && (
                  <div className="mt-6">
                    <a
                      href={project.ctaHref}
                      className="text-sm font-semibold text-[#A72608] hover:text-[#3D405B] transition-colors"
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
        className="py-24 px-6 border-t border-[#3D405B]/8"
      >
        <div className="max-w-[640px] mx-auto text-center">
          <h2
            className="font-display font-black text-[#1C1B18] leading-[0.92] tracking-[-0.02em] mb-6"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
          >
            Let&apos;s build something
            <br />
            that shouldn&apos;t exist yet.
          </h2>

          <p
            className="text-[#3D405B]/60 leading-relaxed mb-10 max-w-md mx-auto"
            style={{ fontSize: "clamp(0.9rem, 1.4vw, 1rem)" }}
          >
            I&apos;m always open to collaborations, conversations, and
            questions that don&apos;t have easy answers.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="mailto:lucklitatheng@proton.me"
              className="inline-flex items-center gap-2.5 bg-[#3D405B] text-[#FAFAF7] font-semibold px-6 py-3 rounded-full text-sm hover:bg-[#3D405B]/85 transition-all hover:scale-105"
            >
              <span>✉</span>
              lucklitatheng@proton.me
            </a>
            <a
              href="https://linkedin.com/in/lucklita-theng"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 border border-[#3D405B]/20 text-[#3D405B] font-semibold px-6 py-3 rounded-full text-sm hover:border-[#3D405B]/50 transition-all hover:scale-105"
            >
              <span>in</span>
              linkedin.com/in/lucklita-theng
            </a>
          </div>
        </div>
      </section>

      {/* ── Footer ─────────────────────────────────────────── */}
      <footer className="py-8 px-6 border-t border-[#3D405B]/8 text-center">
        <p className="text-[#3D405B]/35 text-xs">
          © {new Date().getFullYear()} Lucklita Theng ✨
        </p>
      </footer>
    </div>
  );
}
