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
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-14 py-5 bg-[#f8f4ee]/90 backdrop-blur-sm border-b border-[#3D405B]/10">
      <Link
        href="/"
        className="font-display font-black text-[#3D405B] text-2xl tracking-tight"
      >
        LT
      </Link>

      <div className="flex items-center gap-1">
        {navLinks.map((link) => {
          const isActive = link.internal && pathname === link.href;

          if (link.internal) {
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`text-sm px-4 py-2 rounded-full transition-all ${
                  isActive
                    ? "font-bold text-[#3D405B] bg-[#F2AF29]/20"
                    : "font-medium text-[#3D405B]/55 hover:text-[#3D405B] hover:bg-[#3D405B]/5"
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
              className="text-sm font-medium text-[#3D405B]/55 hover:text-[#3D405B] transition-colors px-4 py-2 rounded-full hover:bg-[#3D405B]/5"
            >
              {link.label} ↗
            </a>
          );
        })}
      </div>
    </nav>
  );
}
