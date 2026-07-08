"use client";

import React from "react";
import { motion } from "framer-motion";
import { SiGithub, SiLeetcode, SiGmail } from "react-icons/si";

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zM8.34 18.34V9.75H5.67v8.59h2.67zM7 8.5a1.55 1.55 0 1 0 0-3.1 1.55 1.55 0 0 0 0 3.1zm11.34 9.84v-4.7c0-2.5-1.34-3.67-3.13-3.67-1.44 0-2.09.79-2.45 1.35v-1.16h-2.67c.04.75 0 8.59 0 8.59h2.67v-4.8c0-.24.02-.48.09-.65.19-.48.63-.98 1.37-.98.97 0 1.35.74 1.35 1.82v4.61h2.67z" />
  </svg>
);

const socials = [
  { name: "GitHub", href: "https://github.com/Ayush277", Icon: SiGithub, color: "#6e5cff" },
  { name: "LeetCode", href: "https://leetcode.com/u/Happy277/", Icon: SiLeetcode, color: "#ffa116" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/ayushkumar277", Icon: LinkedinIcon, color: "#0a66c2" },
  { name: "Email", href: "mailto:prince908ayush@gmail.com", Icon: SiGmail, color: "#ea4335" },
];

export function ConnectWithMe() {
  return (
    <div className="relative flex flex-col items-center overflow-hidden py-14">
      {/* aesthetic aurora blobs drifting behind */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute h-40 w-40 rounded-full bg-[#6e4bff]/20 blur-3xl dark:bg-[#6e4bff]/25"
        animate={{ x: [-60, 40, -60], y: [-10, 14, -10], scale: [1, 1.15, 1] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute h-36 w-36 rounded-full bg-[#0a66c2]/15 blur-3xl dark:bg-[#0a66c2]/20"
        animate={{ x: [50, -40, 50], y: [10, -12, 10], scale: [1.1, 1, 1.1] }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.h3
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative z-10 mb-1 text-[18px] font-bold tracking-tight text-zinc-900 dark:text-zinc-100"
      >
        Connect with me
      </motion.h3>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="relative z-10 mb-8 text-[12px] text-zinc-500 dark:text-zinc-400"
      >
        Always up for a good conversation.
      </motion.p>

      <motion.div
        className="relative z-10 flex items-center gap-4 sm:gap-5"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{ show: { transition: { staggerChildren: 0.09 } } }}
      >
        {socials.map((s, i) => {
          const Icon = s.Icon;
          return (
            <motion.a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.name}
              variants={{
                hidden: { opacity: 0, y: 18, scale: 0.8 },
                show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 260, damping: 18 } },
              }}
              className="group relative"
            >
              {/* continuous gentle float, staggered per-icon */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3 + i * 0.4, repeat: Infinity, ease: "easeInOut", delay: i * 0.25 }}
              >
                <div
                  className="relative flex size-11 items-center justify-center rounded-full border border-black/10 bg-white/70 text-zinc-500 backdrop-blur transition-all duration-300 group-hover:-translate-y-0.5 group-hover:scale-110 group-hover:border-transparent group-hover:text-[var(--sc)] group-hover:shadow-[0_8px_24px_-6px_var(--sc)] dark:border-white/10 dark:bg-white/5 dark:text-zinc-400 sm:size-12"
                  style={{ ["--sc" as string]: s.color }}
                >
                  {/* glow ring on hover */}
                  <span
                    className="pointer-events-none absolute inset-0 rounded-full opacity-0 ring-1 ring-[var(--sc)] transition-opacity duration-300 group-hover:opacity-100"
                    style={{ ["--sc" as string]: s.color }}
                  />
                  <Icon className="size-5 transition-transform duration-300 group-hover:scale-110" />
                </div>
              </motion.div>

              {/* tooltip label */}
              <span className="pointer-events-none absolute -bottom-7 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-zinc-900 px-2 py-0.5 text-[10px] font-medium text-zinc-100 opacity-0 shadow-lg transition-opacity duration-300 group-hover:opacity-100 dark:bg-zinc-100 dark:text-zinc-900">
                {s.name}
              </span>
            </motion.a>
          );
        })}
      </motion.div>
    </div>
  );
}
