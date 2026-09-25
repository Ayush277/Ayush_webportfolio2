"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const stats = [
  { value: "100K+", label: "Records" },
  { value: "3", label: "ML Projects" },
  { value: "250+", label: "DSA Problems" },
  { value: "1596", label: "LeetCode Rating" },
];

export function HeroStatsTicker() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % stats.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  const active = stats[index];

  return (
    <div className="flex items-center gap-2 mt-4 h-[20px] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={active.label}
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-baseline gap-1.5"
        >
          <span className="text-[14px] font-bold text-zinc-900 dark:text-zinc-100">{active.value}</span>
          <span className="text-[11px] text-zinc-500 dark:text-zinc-400 uppercase tracking-wide">{active.label}</span>
        </motion.div>
      </AnimatePresence>
      <div className="flex items-center gap-1 ml-1">
        {stats.map((s, i) => (
          <span
            key={s.label}
            className={`h-1 w-1 rounded-full transition-colors duration-300 ${i === index ? "bg-zinc-400 dark:bg-zinc-500" : "bg-zinc-200 dark:bg-zinc-800"}`}
          />
        ))}
      </div>
    </div>
  );
}
