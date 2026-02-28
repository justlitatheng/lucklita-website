const projects = [
  {
    number: "01",
    title: "Project One",
    description:
      "Placeholder for an upcoming project at the intersection of technology and human impact. Big ideas, real people.",
    tag: "Technology",
    borderColor: "border-yellow-400",
    tagClass: "text-yellow-400 bg-yellow-400/10",
  },
  {
    number: "02",
    title: "Project Two",
    description:
      "Placeholder for the second initiative — community-driven, research-backed, and built to last.",
    tag: "Social Impact",
    borderColor: "border-fuchsia-500",
    tagClass: "text-fuchsia-400 bg-fuchsia-400/10",
  },
  {
    number: "03",
    title: "Project Three",
    description:
      "Systems thinking applied to messy human problems. Third project in progress.",
    tag: "Research",
    borderColor: "border-blue-400",
    tagClass: "text-blue-400 bg-blue-400/10",
  },
  {
    number: "04",
    title: "Something New",
    description:
      "Something new is brewing. Watch this space — it'll be worth the wait.",
    tag: "Stealth",
    borderColor: "border-lime-400",
    tagClass: "text-lime-400 bg-lime-400/10",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* ── Navigation ─────────────────────────────────────── */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 bg-white border-b border-zinc-100">
        <a
          href="/"
          className="font-display font-black text-zinc-900 text-xl tracking-tight"
        >
          LT
        </a>
        <div className="flex items-center gap-6">
          <a
            href="#work"
            className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors"
          >
            Work
          </a>
          <a
            href="#arc"
            className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors"
          >
            ARC
          </a>
          <a
            href="mailto:hello@lucklita.com"
            className="text-sm font-bold bg-zinc-950 text-white px-5 py-2.5 rounded-full hover:bg-zinc-700 transition-all hover:scale-105"
          >
            Say Hi →
          </a>
        </div>
      </nav>

      {/* ── Hero ───────────────────────────────────────────── */}
      <section className="relative min-h-screen bg-white flex flex-col justify-center pt-28 pb-20 px-8 md:px-16 overflow-hidden">
        {/* Floating blobs */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-28 right-12 w-36 h-36 rounded-full bg-yellow-300 opacity-75 animate-float" />
          <div className="absolute top-1/3 right-1/3 w-7 h-7 rounded-full bg-fuchsia-500 animate-float-slow" />
          <div className="absolute bottom-36 right-24 w-20 h-20 rounded-full bg-blue-400 opacity-60 animate-float-slower" />
          <div className="absolute bottom-52 left-1/3 w-5 h-5 rounded-full bg-lime-400 animate-float" />
          <div className="absolute top-1/2 left-6 w-4 h-4 bg-orange-400 rotate-45 animate-float-slow" />
          <div className="absolute top-44 left-1/4 w-3 h-3 rounded-full bg-fuchsia-300 animate-float-slower" />
        </div>

        <div className="relative max-w-7xl w-full">
          {/* Role label */}
          <p className="text-xs font-semibold tracking-[0.28em] uppercase text-zinc-400 mb-10">
            Technologist &nbsp;·&nbsp; Social Impact Founder &nbsp;·&nbsp;
            Optimist
          </p>

          {/* Name */}
          <h1 className="font-display font-black uppercase tracking-tighter leading-none mb-10">
            <span className="block text-6xl md:text-[7.5rem] lg:text-[10rem] text-zinc-950">
              Lucklita
            </span>
            <span className="block text-6xl md:text-[7.5rem] lg:text-[10rem] text-zinc-950">
              <span className="bg-yellow-300 px-3 pb-2 inline-block leading-tight">
                Theng
              </span>
            </span>
          </h1>

          {/* Tagline */}
          <p className="max-w-xl text-xl md:text-2xl text-zinc-500 italic leading-relaxed mb-14">
            "An optimist obsessed with finding and solving
            <br className="hidden md:block" /> the cruxes of everything."
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="inline-flex items-center gap-2 bg-zinc-950 text-white font-bold px-7 py-3.5 rounded-full hover:bg-zinc-800 transition-all hover:scale-105 text-sm tracking-wide"
            >
              See my work
            </a>
            <a
              href="#arc"
              className="inline-flex items-center gap-2 border-2 border-zinc-900 text-zinc-900 font-bold px-7 py-3.5 rounded-full hover:bg-zinc-100 transition-all hover:scale-105 text-sm tracking-wide"
            >
              ARC Project ↗
            </a>
          </div>
        </div>
      </section>

      {/* ── Work & Projects ────────────────────────────────── */}
      <section id="work" className="bg-zinc-950 py-28 px-8 md:px-16">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <p className="text-zinc-500 text-xs uppercase tracking-[0.28em] mb-4">
                Selected Work
              </p>
              <h2 className="font-display font-black text-white text-5xl md:text-7xl uppercase leading-none">
                Work &<br />
                Projects
              </h2>
            </div>
            <p className="text-zinc-500 text-sm max-w-xs leading-relaxed md:text-right">
              Ideas turned into reality — from social impact to technology and
              everything in between.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {projects.map((project, i) => (
              <div
                key={i}
                className={`group bg-zinc-900 rounded-3xl p-8 border-t-4 ${project.borderColor} hover:scale-[1.02] transition-all duration-300 cursor-pointer`}
              >
                <div className="flex items-start justify-between mb-10">
                  <span className="font-mono text-zinc-600 text-xs">
                    {project.number}
                  </span>
                  <span
                    className={`text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full ${project.tagClass}`}
                  >
                    {project.tag}
                  </span>
                </div>
                <h3 className="font-display font-bold text-white text-2xl md:text-3xl mb-4 group-hover:text-yellow-300 transition-colors duration-300 leading-tight">
                  {project.title}
                </h3>
                <p className="text-zinc-400 leading-relaxed text-sm">
                  {project.description}
                </p>
                <div className="mt-8 flex items-center gap-1.5 text-zinc-600 group-hover:text-zinc-300 transition-colors text-sm font-medium">
                  Coming soon{" "}
                  <span className="group-hover:translate-x-1 transition-transform inline-block">
                    →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ARC Section ────────────────────────────────────── */}
      <section
        id="arc"
        className="relative bg-lime-300 py-28 px-8 md:px-16 overflow-hidden"
      >
        {/* Background blobs */}
        <div className="pointer-events-none absolute -top-28 -right-28 w-80 h-80 rounded-full bg-lime-200 opacity-70" />
        <div className="pointer-events-none absolute -bottom-20 -left-16 w-64 h-64 rounded-full bg-yellow-300 opacity-60" />
        <div className="pointer-events-none absolute top-1/2 right-1/4 w-10 h-10 rounded-full bg-fuchsia-400 opacity-40" />

        <div className="max-w-7xl mx-auto relative">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-zinc-950 text-lime-300 text-xs font-bold tracking-[0.2em] uppercase px-4 py-2.5 rounded-full mb-10">
            <span className="w-1.5 h-1.5 rounded-full bg-lime-400 animate-pulse" />
            Social Impact
          </div>

          {/* Heading */}
          <h2 className="font-display font-black text-zinc-950 text-5xl md:text-7xl lg:text-[6.5rem] uppercase leading-none mb-8">
            ARC —<br />
            Art Reach<br />
            Cambodia
          </h2>

          {/* Description */}
          <p className="text-zinc-700 text-lg md:text-xl leading-relaxed max-w-2xl mb-12">
            A creative initiative connecting Cambodian artists and communities
            through art education, cultural preservation, and the power of human
            expression. More details coming soon.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-20">
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-zinc-950 text-white font-bold px-7 py-3.5 rounded-full hover:bg-zinc-800 transition-all hover:scale-105 text-sm"
            >
              Learn More →
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 border-2 border-zinc-950 text-zinc-950 font-bold px-7 py-3.5 rounded-full hover:bg-lime-200 transition-all hover:scale-105 text-sm"
            >
              Get Involved
            </a>
          </div>

          {/* Placeholder visual cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-zinc-950 rounded-3xl p-8 flex flex-col justify-between h-52">
              <div className="w-8 h-8 rounded-full bg-lime-400" />
              <p className="text-lime-300 font-display font-bold text-xl leading-tight">
                Gallery<br />Coming Soon
              </p>
            </div>
            <div className="bg-yellow-400 rounded-3xl p-8 flex flex-col justify-between h-52">
              <div className="w-8 h-8 rounded-full bg-zinc-950" />
              <p className="text-zinc-950 font-display font-bold text-xl leading-tight">
                Artists &<br />Stories
              </p>
            </div>
            <div className="bg-zinc-800 rounded-3xl p-8 flex flex-col justify-between h-52">
              <div className="w-8 h-8 rounded-full bg-blue-400" />
              <p className="text-white font-display font-bold text-xl leading-tight">
                Programs &<br />Events
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ─────────────────────────────────────────── */}
      <footer className="bg-zinc-950 px-8 md:px-16 py-14">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <p className="font-display font-black text-white text-2xl mb-1">
              Lucklita Theng
            </p>
            <p className="text-zinc-500 text-sm">
              Technologist · Founder · Optimist
            </p>
          </div>
          <div className="flex gap-6 text-zinc-500 text-sm font-medium">
            <a href="#" className="hover:text-white transition-colors">
              Twitter
            </a>
            <a href="#" className="hover:text-white transition-colors">
              LinkedIn
            </a>
            <a
              href="mailto:hello@lucklita.com"
              className="hover:text-white transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
