import Nav from "../components/Nav";

const chapters = [
  {
    label: "Age 6",
    location: "Phnom Penh, Cambodia",
    accent: "#F2AF29",
    body: "I was in a car with my late grandfather, a cabinet minister who spent his life trying to pass policies that would benefit the Khmer people. I asked him, with complete sincerity, whether politics was the most direct way to change the world. He gave me an honest answer — it's more complicated than that, he said. You have to know people, understand their motives, navigate systems where power is everywhere and nothing is straightforward. I filed that away. Politics wasn't my path, not because I didn't care, but because I wanted to build things and create spaces where people could thrive. I wanted impact that didn't require me to perform.",
  },
  {
    label: "Age 16",
    location: "Karuizawa, Japan",
    accent: "#92AFD7",
    body: "I was studying at UWC ISAK, a school built on the belief that education can bring about positive social change. At a summer camp in Chiba, a college student said something that stayed with me: education, once gained, cannot be taken away. It is one of the few forces that can truly unify a society. I believed that then, and I still do. But I also started to realize that my path wasn't traditional teaching or academia. I was impulsive, driven, and eager to see ideas become real things in the world. What lit me up was Design Thinking and Entrepreneurship — the idea that you could find a problem, build a solution, and put it out into the world. Learning as a byproduct of doing. That felt right for me.",
  },
  {
    label: "Age 20",
    location: "Phnom Penh, Cambodia",
    accent: "#588157",
    body: "During my gap year, I was working at a journalism startup in a co-working space in Phnom Penh, right across from a tech startup called Koompi — a company working to build Cambodia's first laptop and operating system. I got talking to one of their developers, a self-taught engineer everyone called Brilliant. When I told him I thought tech was fascinating but probably not for someone like me, he looked genuinely puzzled. You're about to go study in the United States, he said, and you think you can't learn to code? My own degree was in communications and I taught myself everything. If I can do it, you can do it. That conversation changed the direction of my life. I went to Carleton College and majored in Computer Science with a focus on Human-Computer Interaction — not because I wanted to be the best engineer, but because I wanted to speak the language, work alongside engineers, and use technology as a tool in service of everything else I cared about.",
  },
  {
    label: "Age 23",
    location: "Northfield, Minnesota",
    accent: "#A72608",
    body: "During my senior year, I was hit by a car as a pedestrian. I missed job application season and took a medical leave. It gave me more time to think than I'd ever had before. What did I actually want? Not the most prestigious title or the highest salary. I wanted to be a bridge between technology and people, between what's technically possible and what communities actually need. That clarity has guided every decision I've made since.",
  },
  {
    label: "Today",
    location: "",
    accent: "#3D405B",
    body: "I'm 26, working at Project Evident as part of their OutcomesAI practice, helping nonprofits adopt AI in ways that genuinely improve their work and the communities they serve. I'm a researcher, a builder, and someone who finds deep satisfaction in making complex things accessible to people who need them most. I also founded Art Reach Cambodia, a project close to my heart that documents the underrepresented voices of Khmer artists, athletes, and journalists — because I believe storytelling and technology are most powerful when they work together. The quest continues, and I'm just getting started.",
  },
];

export default function LifeStory() {
  return (
    <div className="min-h-screen bg-[#f8f4ee]">
      <Nav />

      {/* ── Header ──────────────────────────────────────── */}
      <section className="pt-36 pb-16 px-6">
        <div className="max-w-[880px] mx-auto">
        <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-[#588157] mb-6">
          Life Story
        </p>
        <h1
          className="font-display font-black text-[#1C1B18] leading-[0.88] tracking-[-0.03em] mb-8"
          style={{ fontSize: "clamp(3.5rem, 10vw, 9rem)" }}
        >
          The Quest So Far.
        </h1>

        {/* Opening */}
        <div className="max-w-2xl border-l-4 border-[#F2AF29] pl-8 py-2 mt-12">
          <p
            className="font-display italic text-[#3D405B] leading-relaxed"
            style={{ fontSize: "clamp(1.1rem, 2vw, 1.4rem)" }}
          >
            I&apos;ve been asking the same question since I was six years old:
            what&apos;s the most effective way to create change in the world?
            Not who am I — I&apos;ve always known that. But where do I fit, and
            how do all my pieces connect? Maybe the role doesn&apos;t exist yet.
            Maybe I have to build it. This is the quest so far.
          </p>
        </div>
        </div>
      </section>

      {/* ── Chapters ────────────────────────────────────── */}
      <section className="px-6 pb-32">
        <div className="max-w-[880px] mx-auto">
        <div className="space-y-24">
          {chapters.map((chapter, i) => (
            <article key={i} className="relative">
              {/* Vertical accent line */}
              <div
                className="absolute left-0 top-0 bottom-0 w-[3px] rounded-full opacity-30"
                style={{ background: chapter.accent }}
              />

              <div className="pl-10 md:pl-14">
                {/* Chapter label */}
                <div className="flex items-baseline gap-4 mb-3">
                  <h2
                    className="font-display font-black leading-none tracking-[-0.03em]"
                    style={{
                      fontSize: "clamp(2.5rem, 7vw, 6rem)",
                      color: chapter.accent,
                    }}
                  >
                    {chapter.label}
                  </h2>
                  {chapter.location && (
                    <span
                      className="font-display italic text-[#3D405B]/50 leading-tight"
                      style={{ fontSize: "clamp(0.85rem, 1.5vw, 1.1rem)" }}
                    >
                      — {chapter.location}
                    </span>
                  )}
                </div>

                {/* Thin divider */}
                <div
                  className="w-16 h-px mb-6"
                  style={{ background: chapter.accent, opacity: 0.4 }}
                />

                {/* Body text */}
                <p
                  className="text-[#3D405B] leading-[1.9] max-w-2xl"
                  style={{ fontSize: "clamp(0.95rem, 1.5vw, 1.1rem)" }}
                >
                  {chapter.body}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Closing coda */}
        <div className="mt-24 pl-10 md:pl-14">
          <p
            className="font-display italic text-[#3D405B]/50"
            style={{ fontSize: "clamp(1rem, 2vw, 1.3rem)" }}
          >
            ✦ &nbsp; still writing.
          </p>
        </div>
        </div>
      </section>

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
