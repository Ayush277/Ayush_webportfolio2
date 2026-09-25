"use client";
import React from "react";
import { cn } from "@/lib/utils";

export type SoftPillVariant = "secondary" | "primary" | "accent";

interface SoftPillButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: SoftPillVariant;
  as?: React.ElementType;
  href?: string;
  target?: string;
  rel?: string;
}

const SoftPillButton = React.forwardRef<HTMLButtonElement, SoftPillButtonProps>(
  ({ className, children, variant = "secondary", as: Comp = "button", ...props }, ref) => {
    const isPrimary = variant === "primary";
    const isAccent = variant === "accent";
    const isSolid = isPrimary || isAccent;
    return (
      <Comp
        ref={ref}
        className={cn(
          "group relative block rounded-[4px] text-center px-5 py-2.5 text-[13px] font-medium tracking-tight transition-[transform] duration-200 active:scale-[0.99] active:duration-[50ms]",
          "[backdrop-filter:blur(6px)]",
          isAccent ? "text-white" : isPrimary ? "text-neutral-50 dark:text-neutral-950" : "text-neutral-900 dark:text-neutral-300",
          className,
        )}
        {...props}
      >
        <span
          aria-hidden="true"
          className={cn(
            "absolute inset-0 rounded-[4px] overflow-hidden transition-colors duration-200 group-active:duration-[50ms]",
            isAccent
              ? "bg-gradient-to-b from-sky-500 to-blue-600 group-hover:from-sky-400 group-hover:to-blue-500 border border-blue-400/30 shadow-[0_0_16px_-4px_rgba(56,132,255,0.55)]"
              : isPrimary
              ? "bg-[#18181b] group-hover:bg-[#27272a] dark:bg-white dark:group-hover:bg-neutral-100 border border-black/10 dark:border-white/10"
              : "bg-white/90 dark:bg-[#0c0c0e] group-hover:dark:bg-[#121214] border border-black/5 dark:border-white/5 group-hover:border-black/10 dark:group-hover:border-white/10"
          )}
        >
          {!isSolid && (
            <span
              className="absolute inset-0 rounded-[4px] transition duration-200 bg-black/[0.02] dark:bg-transparent group-hover:bg-transparent dark:group-hover:bg-white/[0.02] group-active:bg-black/[0.04] dark:group-active:bg-white/[0.04] group-active:duration-[50ms]"
            />
          )}
          <span
            className={cn("absolute inset-0 transition duration-200 group-active:opacity-0 group-active:duration-[50ms]", isSolid ? "opacity-[0.12]" : "opacity-[0.16] dark:opacity-[0.04]")}
            style={{
              background: "linear-gradient(rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 100%)",
            }}
          />
          <span
            className={cn("absolute inset-0 transition duration-200 group-active:duration-[50ms]", isSolid ? "opacity-[0.32]" : "opacity-[0.04] dark:opacity-[0.1]")}
            style={{
              background:
                "radial-gradient(65.62% 65.62% at 50% 100%, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%)",
            }}
          />
          {!isSolid && (
            <span
              className="absolute inset-0 transition duration-200 group-active:opacity-0 group-active:duration-[50ms] opacity-[0.4] dark:opacity-[0.04]"
              style={{
                background:
                  "linear-gradient(99deg, rgba(255, 255, 255, 0) 27.7%, rgba(255, 255, 255, 0.12) 60.19%, rgba(255, 255, 255, 0) 86.06%)",
              }}
            />
          )}
          <span
            aria-hidden="true"
            className={cn("absolute inset-0 rounded-[4px] p-px", isSolid ? "opacity-[0.24]" : "hidden")}
            style={{
              background: isSolid
                ? "linear-gradient(rgb(255, 255, 255) 0%, rgb(153, 153, 153) 55%, rgb(255, 255, 255) 80%, rgb(153, 153, 153) 95%)"
                : "linear-gradient(transparent 0%, rgb(255, 255, 255) 55%, transparent 80%, rgb(255, 255, 255) 95%)",
              WebkitMask:
                "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
              WebkitMaskComposite: "xor",
              maskComposite: "exclude",
            }}
          />
        </span>
        <span className="relative">{children}</span>
      </Comp>
    );
  },
);

SoftPillButton.displayName = "SoftPillButton";

export default SoftPillButton;
