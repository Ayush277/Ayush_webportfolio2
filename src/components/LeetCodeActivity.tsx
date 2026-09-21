"use client";

import React, { useEffect, useMemo, useState } from "react";

const LEETCODE_USER = "Happy277";

interface Day {
  count: number;
  date: string; // yyyy-mm-dd
}
interface TooltipState {
  count: number;
  date: string;
  x: number;
  y: number;
}

export function LeetCodeActivity() {
  const [calendar, setCalendar] = useState<Record<string, number> | null>(null);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [tooltip, setTooltip] = useState<TooltipState | null>(null);

  useEffect(() => {
    const run = async () => {
      const cacheKey = "leetcode_calendar";
      const cached = typeof window !== "undefined" ? localStorage.getItem(cacheKey) : null;
      if (cached) {
        try {
          const p = JSON.parse(cached);
          setCalendar(p.calendar);
          setTotal(p.total);
          setLoading(false);
        } catch {}
      }
      try {
        const res = await fetch("/api/leetcode", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username: LEETCODE_USER }),
        });
        const data = await res.json();
        if (data?.calendar) {
          setCalendar(data.calendar);
          setTotal(data.total || 0);
          if (typeof window !== "undefined") {
            localStorage.setItem(cacheKey, JSON.stringify({ calendar: data.calendar, total: data.total }));
          }
        }
      } catch (e) {
        console.error("Failed to fetch LeetCode calendar", e);
      } finally {
        setLoading(false);
      }
    };
    run();
  }, []);

  // build 53 aligned weeks (Sun..Sat) ending this week
  const { weeks, months } = useMemo(() => {
    const today = new Date();
    const end = new Date(Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate()));
    // walk back to the Saturday that ends the current week
    const endWeekEnd = new Date(end);
    endWeekEnd.setUTCDate(end.getUTCDate() + (6 - end.getUTCDay()));
    const start = new Date(endWeekEnd);
    start.setUTCDate(endWeekEnd.getUTCDate() - (53 * 7 - 1));

    const w: Day[][] = [];
    const monthLabels: string[] = [];
    const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    for (let col = 0; col < 53; col++) {
      const days: Day[] = [];
      for (let row = 0; row < 7; row++) {
        const d = new Date(start);
        d.setUTCDate(start.getUTCDate() + col * 7 + row);
        const key = Math.floor(d.getTime() / 1000).toString();
        const count = calendar ? Number(calendar[key] || 0) : 0;
        days.push({ count, date: d.toISOString().slice(0, 10) });
      }
      const first = new Date(start);
      first.setUTCDate(start.getUTCDate() + col * 7);
      monthLabels.push(first.getUTCDate() <= 7 ? MONTHS[first.getUTCMonth()] : "");
      w.push(days);
    }
    return { weeks: w, months: monthLabels };
  }, [calendar]);

  const levels = useMemo(
    () => [
      "bg-zinc-100 dark:bg-zinc-800",
      "bg-zinc-300 dark:bg-zinc-600",
      "bg-zinc-500 dark:bg-zinc-500",
      "bg-zinc-700 dark:bg-zinc-300",
      "bg-zinc-950 dark:bg-zinc-100",
    ],
    [],
  );
  const getLevel = (c: number) => (c === 0 ? 0 : c <= 2 ? 1 : c <= 4 ? 2 : c <= 7 ? 3 : 4);

  const fmt = (date: string) =>
    new Intl.DateTimeFormat("en", { month: "short", day: "numeric", year: "numeric" }).format(
      new Date(`${date}T00:00:00`),
    );

  const showTip = (day: Day, e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    setTooltip({ count: day.count, date: fmt(day.date), x: r.left + r.width / 2, y: r.top });
  };

  const status = loading && total === 0 ? "Loading LeetCode activity" : `${total} submissions in the last year`;
  const dashed = {
    maskImage: "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
    WebkitMaskImage: "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
  };

  return (
    <section id="leetcode" className="relative z-10 mt-6 flex flex-col scroll-mt-24" aria-labelledby="leetcode-title">
      <div className="absolute top-0 left-[-100vw] right-[-100vw] h-0 border-t border-black/30 pointer-events-none dark:border-white/[0.15]" style={dashed} />
      <div className="absolute top-0 -left-4 z-20 size-[2px] -translate-x-1/2 -translate-y-1/2 bg-black/50 pointer-events-none dark:bg-white/[0.25]" />
      <div className="absolute top-0 -right-4 z-20 size-[2px] translate-x-1/2 -translate-y-1/2 bg-black/50 pointer-events-none dark:bg-white/[0.25]" />

      <div className="relative py-2">
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <div className="flex items-baseline gap-2.5 flex-wrap">
            <h2 id="leetcode-title" className="text-[18px] font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">
              LeetCode Activity
            </h2>
            <span className="hidden sm:inline text-[11px] text-zinc-500 dark:text-zinc-400">
              Peak Rating: <span className="font-semibold text-zinc-700 dark:text-zinc-300">1596</span>
              <span className="mx-1.5 text-zinc-300 dark:text-zinc-700">·</span>
              Solved: <span className="font-semibold text-zinc-700 dark:text-zinc-300">250+</span>
            </span>
          </div>
          <a
            href={`https://leetcode.com/u/${LEETCODE_USER}/`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-right text-[11px] text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors"
          >
            {status}
          </a>
        </div>
        <div className="absolute bottom-0 left-[-100vw] right-[-100vw] h-0 border-b border-black/30 pointer-events-none dark:border-white/[0.15]" style={dashed} />
        <div className="absolute bottom-0 -left-4 z-20 size-[2px] -translate-x-1/2 translate-y-1/2 bg-black/50 pointer-events-none dark:bg-white/[0.25]" />
        <div className="absolute bottom-0 -right-4 z-20 size-[2px] translate-x-1/2 translate-y-1/2 bg-black/50 pointer-events-none dark:bg-white/[0.25]" />
      </div>

      <div className="relative py-4">
        <div className="mb-2 flex w-full justify-between text-[10px] text-zinc-400 dark:text-zinc-500">
          {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].map((m, i) => (
            <span key={`${m}-${i}`}>{m}</span>
          ))}
        </div>
        <div className="grid grid-cols-[repeat(53,minmax(0,1fr))] gap-x-[2px]" role="img" aria-label={status}>
          {weeks.map((week, ci) => (
            <div key={ci} className="flex flex-col gap-[2px]">
              {week.map((day) => (
                <div
                  key={day.date}
                  className={`aspect-square w-full rounded-[2px] opacity-80 outline-none transition-[opacity,transform] hover:scale-125 hover:opacity-100 dark:opacity-70 dark:hover:opacity-100 ${levels[getLevel(day.count)]}`}
                  onMouseEnter={(e) => showTip(day, e)}
                  onMouseLeave={() => setTooltip(null)}
                />
              ))}
            </div>
          ))}
        </div>

        <div className="mt-3 flex items-center justify-between gap-3">
          <span className="text-[11px] text-zinc-500 dark:text-zinc-400">Less active</span>
          <div className="flex shrink-0 items-center gap-1.5">
            {levels.map((l, i) => (
              <div key={i} className={`size-2 rounded-[2px] opacity-80 dark:opacity-70 ${l}`} />
            ))}
            <span className="text-[11px] text-zinc-500 dark:text-zinc-400">More active</span>
          </div>
        </div>

        {tooltip && (
          <div
            className="pointer-events-none fixed z-[100] -translate-x-1/2 -translate-y-[calc(100%+8px)] rounded-md border border-zinc-200 bg-white px-2.5 py-1.5 text-[11px] font-medium text-zinc-700 shadow-lg shadow-zinc-950/10 dark:border-white/10 dark:bg-zinc-950 dark:text-zinc-200 dark:shadow-black/40"
            style={{ left: tooltip.x, top: tooltip.y }}
          >
            {tooltip.count} submissions on {tooltip.date}
          </div>
        )}
      </div>

      <div className="absolute bottom-0 left-[-100vw] right-[-100vw] h-0 border-b border-black/30 pointer-events-none dark:border-white/[0.15]" style={dashed} />
      <div className="absolute bottom-0 -left-4 z-20 size-[2px] -translate-x-1/2 translate-y-1/2 bg-black/50 pointer-events-none dark:bg-white/[0.25]" />
      <div className="absolute bottom-0 -right-4 z-20 size-[2px] translate-x-1/2 translate-y-1/2 bg-black/50 pointer-events-none dark:bg-white/[0.25]" />
    </section>
  );
}
