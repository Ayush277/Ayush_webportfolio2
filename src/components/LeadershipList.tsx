"use client";

import React from "react";
import { Trophy, Users, FileText, Code2, Palette } from "lucide-react";

type Item = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  tags: string[];
};

const items: Item[] = [
  {
    icon: Trophy,
    title: "2× National Hackathon Winner",
    description: "1st place at IntelliHack SRM and AIR 3 at the BITS Hyderabad All-India Hackathon.",
    tags: ["1st · IntelliHack", "AIR 3 · BITS Hyderabad"],
  },
  {
    icon: Users,
    title: "Student Technology Organization Lead",
    description:
      "Led a 100+ member organization for two years — recruitment, operations, event planning and cross-functional teams.",
    tags: ["100+ members", "2 years"],
  },
  {
    icon: FileText,
    title: "Published Researcher & Reviewer",
    description:
      "Authored a Dual-Head BiLSTM with SHAP-based temporal attention. Selected as a Reviewer for SMM4H-HeaRD 2026.",
    tags: ["First Author", "SMM4H-HeaRD 2026"],
  },
  {
    icon: Code2,
    title: "Competitive Programming",
    description: "Solved 200+ algorithmic problems across LeetCode and GeeksforGeeks.",
    tags: ["200+ solved", "DSA"],
  },
  {
    icon: Palette,
    title: "UI/UX & Graphic Design Freelancer",
    description:
      "Delivered branding assets, design systems and digital experiences for startups and student organizations.",
    tags: ["Branding", "Design Systems"],
  },
];

export function LeadershipList() {
  return (
    <div className="block">
      {items.map((item, idx) => {
        const isLast = idx === items.length - 1;
        const Icon = item.icon;

        return (
          <div
            key={idx}
            className="group relative block -mx-4 px-4 py-4 hover:bg-zinc-50 dark:hover:bg-zinc-900/20 transition-colors"
          >
            {!isLast && (
              <div
                className="absolute bottom-0 left-0 right-0 h-0 border-b border-black/30 dark:border-white/[0.15] pointer-events-none z-10"
                style={{
                  maskImage: "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
                  WebkitMaskImage: "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
                }}
              />
            )}
            {isLast && (
              <>
                <div
                  className="absolute bottom-0 left-[-100vw] right-[-100vw] h-0 border-b border-black/30 dark:border-white/[0.15] pointer-events-none z-10"
                  style={{
                    maskImage: "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
                    WebkitMaskImage: "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
                  }}
                />
                <div className="absolute bottom-0 left-0 w-[2px] h-[2px] bg-black/40 dark:bg-white/[0.25] -translate-x-1/2 translate-y-1/2 pointer-events-none z-20" />
                <div className="absolute bottom-0 right-0 w-[2px] h-[2px] bg-black/40 dark:bg-white/[0.25] translate-x-1/2 translate-y-1/2 pointer-events-none z-20" />
              </>
            )}

            <div className="flex items-start gap-3.5">
              <div className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-[8px] border border-black/10 bg-zinc-50 text-zinc-600 shadow-sm shadow-black/10 dark:border-zinc-800 dark:bg-[#111111] dark:text-zinc-300">
                <Icon className="h-4 w-4" />
              </div>
              <div className="flex flex-col gap-2 min-w-0">
                <h3 className="text-[14px] md:text-[15px] font-bold text-zinc-900 dark:text-zinc-100">
                  {item.title}
                </h3>
                <p className="text-[13px] text-zinc-500 dark:text-zinc-400 leading-relaxed">
                  {item.description}
                </p>
                <div className="flex flex-wrap items-center gap-2">
                  {item.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded-[4px] border border-black/30 dark:border-white/[0.15] text-[11px] text-zinc-600 dark:text-zinc-400 bg-white/50 dark:bg-black/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
