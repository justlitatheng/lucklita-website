import Nav from "../components/Nav";

interface Post {
  title: string;
  link: string;
  pubDate: string;
  excerpt: string;
  thumbnail: string;
}

const ACCENT_COLORS = [
  "#F2AF29", // yellow
  "#A72608", // red
  "#588157", // green
  "#92AFD7", // blue
  "#D4A5A5", // rose
  "#7B5EA7", // purple
];

function extractCDATA(xml: string, tag: string): string {
  const escaped = tag.replace(":", "\\:");
  const cdata = xml.match(
    new RegExp(`<${escaped}>[\\s]*<!\\[CDATA\\[([\\s\\S]*?)\\]\\]>`)
  );
  if (cdata) return cdata[1].trim();
  const plain = xml.match(
    new RegExp(`<${escaped}>([\\s\\S]*?)<\\/${escaped}>`)
  );
  return plain ? plain[1].trim() : "";
}

function extractAttrFromTag(xml: string, tag: string, attr: string): string {
  const escaped = tag.replace(":", "\\:");
  const tagMatch = xml.match(new RegExp(`<${escaped}[^>]*/>`));
  if (!tagMatch) return "";
  const attrMatch = tagMatch[0].match(new RegExp(`${attr}="([^"]*)"`));
  return attrMatch ? attrMatch[1] : "";
}

function stripHTML(html: string): string {
  return html
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}

function formatDate(pubDate: string): string {
  try {
    return new Date(pubDate).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch {
    return pubDate;
  }
}

async function getMediumPosts(): Promise<Post[]> {
  try {
    const res = await fetch("https://medium.com/feed/@justlitatheng", {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return [];
    const xml = await res.text();

    const items = xml.match(/<item>([\s\S]*?)<\/item>/g) || [];

    return items.slice(0, 9).map((item) => {
      const title = extractCDATA(item, "title") || "Untitled";

      // Guid is most reliable for Medium post URLs
      let link = "";
      const guidMatch = item.match(/<guid[^>]*>([^<]+)<\/guid>/);
      if (guidMatch) link = guidMatch[1].trim();
      if (!link) {
        const linkMatch = item.match(/<link>([^<]+)<\/link>/);
        if (linkMatch) link = linkMatch[1].trim();
      }

      const pubDate = item.match(/<pubDate>([^<]+)<\/pubDate>/)?.[1] || "";

      const content =
        extractCDATA(item, "content:encoded") ||
        extractCDATA(item, "description");
      const excerpt = stripHTML(content).slice(0, 200) + "…";

      const thumbnail =
        extractAttrFromTag(item, "media:thumbnail", "url") ||
        extractAttrFromTag(item, "media:content", "url");

      return { title, link: link || "#", pubDate, excerpt, thumbnail };
    });
  } catch {
    return [];
  }
}

export default async function BlogPage() {
  const posts = await getMediumPosts();

  return (
    <div className="min-h-screen bg-[#f8f4ee]">
      <Nav />

      {/* ── Header ─────────────────────────────────────────── */}
      <section className="pt-36 pb-16 px-6">
        <div className="max-w-[880px] mx-auto">
          <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-[#588157] mb-6">
            Writing
          </p>
          <h1
            className="font-display font-black text-[#1C1B18] leading-[0.88] tracking-[-0.035em] mb-6"
            style={{ fontSize: "clamp(4rem, 12vw, 9rem)" }}
          >
            Blog.
          </h1>
          <p
            className="font-display italic text-[#3D405B]/70 max-w-xl leading-snug mb-8"
            style={{ fontSize: "clamp(1rem, 1.8vw, 1.3rem)" }}
          >
            Essays, reflections, and thinking out loud.{" "}
            <span className="whitespace-nowrap">
              Published on{" "}
              <a
                href="https://medium.com/@justlitatheng"
                target="_blank"
                rel="noopener noreferrer"
                className="not-italic font-bold text-[#3D405B] underline underline-offset-4 decoration-[#F2AF29] decoration-2 hover:text-[#588157] transition-colors"
              >
                Medium ↗
              </a>
            </span>
          </p>
        </div>
      </section>

      {/* ── Posts ──────────────────────────────────────────── */}
      <section className="pb-24 px-6 border-t border-[#3D405B]/8">
        <div className="max-w-[880px] mx-auto pt-16">
          {posts.length === 0 ? (
            <div className="text-center py-20">
              <p className="font-display font-black text-[#1C1B18] text-2xl mb-4">
                Loading posts…
              </p>
              <p className="text-[#3D405B]/60 mb-8">
                Can&apos;t load the feed right now.
              </p>
              <a
                href="https://medium.com/@justlitatheng"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#3D405B] text-[#f8f4ee] font-bold px-6 py-3 rounded-full text-sm hover:bg-[#3D405B]/85 transition-all hover:scale-105"
              >
                Read on Medium ↗
              </a>
            </div>
          ) : (
            <div className="flex flex-col gap-5">
              {posts.map((post, i) => {
                const accent = ACCENT_COLORS[i % ACCENT_COLORS.length];
                return (
                  <a
                    key={post.link + i}
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative bg-white rounded-2xl border border-[#3D405B]/8 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 overflow-hidden flex flex-row"
                  >
                    {/* Colored left border */}
                    <div
                      className="absolute top-0 left-0 bottom-0 w-[3px]"
                      style={{ background: accent }}
                    />

                    {/* Thumbnail */}
                    {post.thumbnail && (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={post.thumbnail}
                        alt=""
                        className="w-48 shrink-0 object-cover"
                      />
                    )}

                    <div className="p-7 flex flex-col flex-1">
                      {post.pubDate && (
                        <p className="text-[10px] font-bold tracking-[0.18em] uppercase text-[#3D405B]/35 mb-3">
                          {formatDate(post.pubDate)}
                        </p>
                      )}

                      <h2
                        className="font-display font-black text-[#1C1B18] leading-tight group-hover:text-[#3D405B] transition-colors mb-3"
                        style={{ fontSize: "clamp(1.1rem, 2vw, 1.4rem)" }}
                      >
                        {post.title}
                      </h2>

                      <p className="text-[#3D405B]/60 text-sm leading-relaxed flex-1">
                        {post.excerpt}
                      </p>

                      <p
                        className="mt-5 text-sm font-semibold transition-colors"
                        style={{ color: accent }}
                      >
                        Read on Medium →
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* ── Footer ─────────────────────────────────────────── */}
      <footer className="bg-[#3D405B] px-6 py-12">
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
              href="https://medium.com/@justlitatheng"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#F2AF29] transition-colors"
            >
              Medium
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
