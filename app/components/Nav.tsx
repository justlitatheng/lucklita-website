"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/", internal: true },
  { label: "Resume", href: "/resume", internal: true },
  { label: "Life Story", href: "/life-story", internal: true },
  { label: "Blog", href: "https://medium.com", internal: false },
  { label: "ARC", href: "#", internal: false },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4 border-b border-[#3D405B]/8"
      style={{ background: "#FAFAF7F2", backdropFilter: "blur(8px)" }}
    >
      <div className="max-w-[860px] mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="font-display font-black text-[#3D405B] text-xl tracking-tight"
        >
          Lucklita Theng
        </Link>

        {/* Links */}
        <div className="flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = link.internal && pathname === link.href;

            if (link.internal) {
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`text-sm px-3 py-1.5 rounded-lg transition-colors ${
                    isActive
                      ? "font-semibold text-[#3D405B]"
                      : "font-medium text-[#3D405B]/50 hover:text-[#3D405B]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            }

            return (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-[#3D405B]/50 hover:text-[#3D405B] transition-colors px-3 py-1.5 rounded-lg"
              >
                {link.label} ↗
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
