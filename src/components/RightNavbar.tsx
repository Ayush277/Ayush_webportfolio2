"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export function RightNavbar() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0.1 }
    );

    const sections = ["experience", "projects", "leetcode", "skills", "achievements", "education"];
    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const links = [
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "LeetCode", href: "#leetcode" },
    { name: "Skills", href: "#skills" },
    { name: "Achievements", href: "#achievements" },
    { name: "Education", href: "#education" },
  ];

  const activeIndex = links.findIndex((link) => link.href.slice(1) === activeSection);

  // Only render on the homepage where the #hash sections exist
  if (pathname !== "/") return null;

  return (
    <div
      className="fixed inset-0 z-50 pointer-events-none hidden lg:block"
      style={{ width: 'calc(100vw - var(--removed-body-scroll-bar-size, 0px))' }}
    >
      <nav className="absolute top-[22vh] left-[calc(69%+32px)] pointer-events-auto mt-2">
        <div className="flex items-center gap-2 mb-4">
          <span className="h-1 w-1 rounded-full bg-zinc-400 dark:bg-zinc-600" />
          <h3 className="text-[10px] font-bold tracking-[0.25em] text-zinc-400 dark:text-zinc-600 uppercase">Index</h3>
        </div>

        <div className="relative flex flex-col gap-4 pl-4">
          {/* Connecting rail */}
          <div className="absolute left-[3px] top-1 bottom-1 w-px bg-gradient-to-b from-zinc-200 via-zinc-200 to-transparent dark:from-zinc-800 dark:via-zinc-800" />
          {/* Progress fill up to the active item */}
          {activeIndex >= 0 && (
            <div
              className="absolute left-[3px] top-1 w-px bg-gradient-to-b from-sky-400 to-blue-500 transition-all duration-500 ease-out"
              style={{ height: `${(activeIndex / Math.max(links.length - 1, 1)) * 100}%` }}
            />
          )}

          {links.map((link, i) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <Link
                key={link.name}
                href={link.href}
                className="group relative flex items-center gap-3"
              >
                {/* Dot on the rail */}
                <span
                  className={`absolute -left-4 flex items-center justify-center transition-all duration-300 ease-out ${isActive ? "scale-110" : ""}`}
                >
                  <span
                    className={`block rounded-full transition-all duration-300 ease-out ${
                      isActive
                        ? "h-[7px] w-[7px] bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.7)]"
                        : "h-[5px] w-[5px] bg-zinc-300 dark:bg-zinc-700 group-hover:bg-zinc-400 dark:group-hover:bg-zinc-500"
                    }`}
                  />
                </span>

                <span
                  className={`text-[9px] font-mono tabular-nums tracking-tight transition-colors duration-300 ${
                    isActive ? "text-blue-500" : "text-zinc-300 dark:text-zinc-700 group-hover:text-zinc-400 dark:group-hover:text-zinc-600"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                <span
                  className={`text-[12px] font-medium tracking-[0.05em] transition-all duration-300 ease-out ${
                    isActive
                      ? "text-zinc-800 dark:text-zinc-200"
                      : "text-zinc-400 dark:text-zinc-600 group-hover:text-zinc-600 dark:group-hover:text-zinc-400"
                  }`}
                >
                  {link.name}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
