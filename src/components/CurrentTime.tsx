"use client";

import { useEffect, useState } from "react";

function TwoDots() {
  return (
    <div className="mx-0.5 sm:mx-1 flex flex-col gap-2 -translate-x-[2px] sm:-translate-x-[3px]">
      <div className="w-[2px] h-[2px] bg-zinc-400 dark:bg-zinc-500"></div>
      <div className="w-[2px] h-[2px] bg-zinc-400 dark:bg-zinc-500"></div>
    </div>
  );
}

export function CurrentTime() {
  const [time, setTime] = useState<Date | null>(null);
  const [is24Hour, setIs24Hour] = useState(() => {
    if (typeof window === "undefined") return true;
    const stored = localStorage.getItem("time_format_24h");
    return stored !== null ? stored === "true" : true;
  });

  useEffect(() => {
    const initialTimer = window.setTimeout(() => setTime(new Date()), 0);
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => {
      window.clearTimeout(initialTimer);
      clearInterval(timer);
    };
  }, []);

  const toggleFormat = () => {
    setIs24Hour((prev) => {
      const next = !prev;
      if (typeof window !== "undefined") localStorage.setItem("time_format_24h", String(next));
      return next;
    });
  };

  if (!time) {
    return (
      <div className="flex items-center opacity-0">
        <div
          className="text-[20px] sm:text-[24px] tracking-[0.15em] text-zinc-400 dark:text-zinc-500"
          style={{ fontFamily: '"Doto", monospace', fontWeight: 700 }}
        >
          00.00.00
        </div>
      </div>
    );
  }

  const rawHours = time.getHours();
  const period = rawHours >= 12 ? "PM" : "AM";
  const displayHours = is24Hour ? rawHours : rawHours % 12 || 12;
  const hours = displayHours.toString().padStart(2, "0");
  const minutes = time.getMinutes().toString().padStart(2, "0");
  const seconds = time.getSeconds().toString().padStart(2, "0");

  return (
    <button
      type="button"
      onClick={toggleFormat}
      aria-label={`Switch to ${is24Hour ? "12-hour" : "24-hour"} time format`}
      title={`Switch to ${is24Hour ? "12-hour" : "24-hour"} time format`}
      className="flex items-center h-[24px] cursor-pointer group"
    >
      <div
        className="text-[20px] sm:text-[24px] tracking-[0.15em] flex items-center text-zinc-400 dark:text-zinc-500 h-full transition-colors group-hover:text-zinc-600 dark:group-hover:text-zinc-300"
        style={{ fontFamily: '"Doto", monospace', fontWeight: 700 }}
      >
        <span>{hours}</span>
        <TwoDots />
        <span>{minutes}</span>
        <TwoDots />
        <span>{seconds}</span>
      </div>
      {!is24Hour && (
        <span className="ml-1.5 text-[10px] sm:text-[11px] tracking-normal text-zinc-400 dark:text-zinc-500 self-end mb-0.5 sm:mb-1">
          {period}
        </span>
      )}
    </button>
  );
}
