"use client";

import React from "react";
import { Trophy, Users, FileText, Code2, Briefcase, Globe } from "lucide-react";

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
    description:
      "Won 2 national hackathons, including 1st Place at IntelliHack SRM and AIR 3 at the BITS Hyderabad All India Hackathon. Also Top 50 at Smart India Hackathon 2024–25 and SDE Finalist at Flipkart GRiD 8.0.",
    tags: ["1st · IntelliHack SRM", "AIR 3 · BITS Hyderabad", "Top 50 · SIH 2024–25", "Finalist · Flipkart GRiD 8.0"],
  },
  {
    icon: Code2,
    title: "Competitive Programming",
    description:
      "Achieved a peak LeetCode Contest Rating of 1596 and solved 250+ DSA problems across LeetCode, GeeksforGeeks and Codeforces.",
    tags: ["1596 peak rating", "250+ solved"],
  },
  {
    icon: FileText,
    title: "Research — Plant Stress Prediction",
    description:
      "Co-authored “Plant Stress Prediction using Residual BiLSTM with Temporal Attention and SHAP-Based Explainability AI”, accepted for presentation at CEEE 2026.",
    tags: ["CEEE 2026 · Paper #620", "91.98% accuracy", "92.82% macro F1"],
  },
  {
    icon: Users,
    title: "President — NSCC SRM",
    description: "Led a 100+ member technical community.",
    tags: ["100+ members"],
  },
  {
    icon: Globe,
    title: "Google Developer Groups Lead — 2024–25",
    description: "Drove technical events and developer activities.",
    tags: ["GDG Lead", "2024–25"],
  },
  {
    icon: Briefcase,
    title: "Freelance & Client Work",
    description:
      "Delivered software solutions for client requirements, working directly with clients to gather requirements, translate business needs into technical solutions, implement features, and handle feedback through delivery.",
    tags: ["Client Delivery"],
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
