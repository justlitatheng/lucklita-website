import Nav from "../components/Nav";

const chapters = [
  {
    label: "Age 7",
    location: "Phnom Penh, Cambodia",
    accent: "#F2AF29",
    body: "I was in a car with my late grandfather, a cabinet minister who spent his life trying to pass policies that would benefit the Khmer people. I asked him, with complete sincerity, whether politics was the most direct way to change the world. He gave me an honest answer — it's more complicated than that, he said. You have to know people, understand their motives, navigate systems where power is everywhere and nothing is straightforward.\n\nI understood what he meant. And I could see myself in that world someday. But I wasn't ready for it yet — I still wanted to build things, make things, figure out how stuff worked. Policy felt like something for later. First, I wanted to get my hands on everything.",
  },
  {
    label: "Age 16",
    location: "Karuizawa, Japan",
    accent: "#92AFD7",
    body: "I was studying at UWC ISAK, a school built on the belief that education can bring about positive social change. Being there exposed me to \u201cdesign thinking\u201d and entrepreneurship for the first time — and something clicked. The idea that you could find a problem, build a solution, and put it out into the world. Learning as a byproduct of doing. More than the subjects though, ISAK gave me something harder to name: agency. The freedom to direct my own learning, to take ownership of my own education experience. It convinced me, slowly and then all at once, that I could do anything I put my mind to.\n\nWhile I was in Japan, I came across Gakko — a summer camp program that I still think about. Two things stayed with me from that experience. The first was simple: write your thoughts down. It is a powerful way to track your own growth. I started keeping a journal then and haven't stopped. The second came from a college student mentor who said something that landed quietly and then kept echoing — education, once gained, cannot be taken away. It is one of the few forces that genuinely equips people to change their own situations. I believed that deeply, partly because I was proof of it.\n\nI knew I wasn't built for a traditional classroom — I am too impatient, too eager to see ideas become real things. But the passion to help others unlock their own potential never left me. It just found different shapes.",
  },
  {
    label: "Age 20",
    location: "Phnom Penh, Cambodia",
    accent: "#588157",
    body: "During my gap year, I was working at a journalism startup in a co-working space in Phnom Penh, right across from a tech startup called Koompi, a company working to build Cambodia\u2019s first laptop and operating system. I got talking to one of their developers, a self-taught engineer everyone called Brilliant. When I told him I thought tech was fascinating but probably not for someone like me, he looked genuinely puzzled. You\u2019re about to go study in the United States, he said, and you think you can\u2019t learn to code? My own degree was in communications and I taught myself everything. If I can do it, you can do it.\n\nThat stuck with me. I went to Carleton College and majored in Computer Science with a focus on Human-Computer Interaction. Not because I wanted to be the best engineer, but because I wanted to speak the language, work alongside engineers, and use technology as a tool for everything else I cared about.",
  },
  {
    label: "Age 23",
    location: "Northfield, Minnesota",
    accent: "#A72608",
    body: "During my senior year, I was hit by a car as a pedestrian. I missed job application season and took a medical leave. It gave me more time to think than I had ever had before.\n\nWhat I found was a tension I hadn't fully named yet. One part of me genuinely wants to do good in the world — and doing good is rarely glamorous. It is tedious work, messy systems, slow progress, unglamorous detangling of things that shouldn't have gotten tangled in the first place.\n\nBut there is another part of me that is just hungry. To build, to network, to grow, to figure out how things work and then make them work better. That part lights me up in a completely different way — the strategy, the hustle, the thrill of making something out of nothing.\n\nI used to feel like those two things didn't belong in the same person. I didn't see many role models who had both that I can relate to as a woman of color from Cambodia. So I decided I wanted to become one — someone who could do the necessary, unglamorous work and still be driven, ambitious, and rewarded well for it. I want my cake and I want to eat it too.",
  },
  {
    label: "Today",
    location: "",
    accent: "#3D405B",
    body: "I am 26, living in Boston, and working at Project Evident on their OutcomesAI team \u2014 helping nonprofits figure out how to use AI in ways that actually serve the people they work with. It is the kind of work that is sometimes tedious, sometimes genuinely exciting, and always rooted in something real.\n\nI also started Art Reach Cambodia, a documentary storytelling project that documents Khmer artists, athletes, and journalists whose stories don\u2019t get told enough. It started as a personal question and turned into something much bigger than me.\n\nThe tension I felt at 23 is still there, honestly. I am still figuring out how to be all the things I want to be. I am less afraid of that now. I know what I care about, I know what lights me up. Things are starting to come together, and I am paying attention.",
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
            I&apos;ve been asking the same question since I was seven years old:
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
                <div className="space-y-5 max-w-2xl">
                  {chapter.body.split("\n\n").map((para, p) => (
                    <p
                      key={p}
                      className="text-[#3D405B] leading-[1.9]"
                      style={{ fontSize: "clamp(0.95rem, 1.5vw, 1.1rem)" }}
                    >
                      {para}
                    </p>
                  ))}
                </div>
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
            ✦ &nbsp; more to come, still writing, and scribbling away...
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
