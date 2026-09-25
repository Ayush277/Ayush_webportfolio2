import type { ComponentType } from "react";
import {
  SiNextdotjs,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiTailwindcss,
  SiFastapi,
  SiRedis,
  SiCelery,
  SiPython,
  SiFlask,
  SiScikitlearn,
  SiOnnx,
  SiVercel,
  SiJupyter,
  SiSpring,
  SiOpenjdk,
  SiGradle,
  SiPostgresql,
  SiWxt,
  SiGooglechrome,
  SiHuggingface,
  SiDocker,
  SiGooglegemini,
  SiHtml5,
  SiCss,
  SiJavascript,
  SiJson,
} from "react-icons/si";

export type TechIcon = ComponentType<{ className?: string }>;
export type TechKey =
  | "next" | "ts" | "react" | "node" | "tailwind" | "fastapi" | "redis" | "celery"
  | "python" | "flask" | "sklearn" | "onnx" | "vercel" | "jupyter"
  | "spring" | "java" | "gradle" | "postgres" | "wxt" | "chrome" | "huggingface"
  | "docker" | "gemini" | "html5" | "css3" | "javascript" | "json";

export type TechItem = TechKey | { label: string; tooltip?: string; };

export type ProjectStatus = "live" | "building" | "planned";

export interface Project {
  slug: string;
  title: string;
  imageTitle: string;
  src: string;
  lightModeSrc?: string;
  video: string;
  description: string;
  tech: TechItem[];
  github: string;
  live: string;
  docs: string;
  status: ProjectStatus;
  starsText?: string;
  backgroundImage?: string;
  hasPin: boolean;
}

export const iconMap: Record<TechKey, TechIcon> = {
  next: SiNextdotjs, ts: SiTypescript, react: SiReact, node: SiNodedotjs,
  tailwind: SiTailwindcss, fastapi: SiFastapi, redis: SiRedis, celery: SiCelery,
  python: SiPython, flask: SiFlask, sklearn: SiScikitlearn, onnx: SiOnnx,
  vercel: SiVercel, jupyter: SiJupyter, spring: SiSpring, java: SiOpenjdk,
  gradle: SiGradle, postgres: SiPostgresql, wxt: SiWxt, chrome: SiGooglechrome,
  huggingface: SiHuggingface, docker: SiDocker, gemini: SiGooglegemini,
  html5: SiHtml5, css3: SiCss, javascript: SiJavascript, json: SiJson,
};

export const techColors: Record<TechKey, string> = {
  next: "text-zinc-900 dark:text-white",
  ts: "text-[#3178C6]",
  react: "text-[#61DAFB]",
  node: "text-[#339933]",
  tailwind: "text-[#06B6D4]",
  fastapi: "text-[#009688]",
  redis: "text-[#DC382D]",
  celery: "text-[#37814A]",
  python: "text-[#3776AB]",
  flask: "text-zinc-900 dark:text-white",
  sklearn: "text-[#F7931E]",
  onnx: "text-[#005CED]",
  vercel: "text-zinc-900 dark:text-white",
  jupyter: "text-[#F37626]",
  spring: "text-[#6DB33F]",
  java: "text-[#437291]",
  gradle: "text-[#02303A] dark:text-[#5FBEAF]",
  postgres: "text-[#4169E1]",
  wxt: "text-[#54BC4B]",
  chrome: "text-[#4285F4]",
  huggingface: "text-[#FFD21E]",
  docker: "text-[#2496ED]",
  gemini: "text-[#4796E3]",
  html5: "text-[#E34F26]",
  css3: "text-[#1572B6]",
  javascript: "text-[#F7DF1E]",
  json: "text-zinc-900 dark:text-white",
};

export const techNames: Record<TechKey, string> = {
  next: "Next.js", ts: "TypeScript", react: "React", node: "Node.js",
  tailwind: "Tailwind CSS", fastapi: "FastAPI", redis: "Redis", celery: "Celery",
  python: "Python", flask: "Flask", sklearn: "scikit-learn", onnx: "ONNX Runtime",
  vercel: "Vercel", jupyter: "Jupyter", spring: "Spring Boot", java: "Java 21",
  gradle: "Gradle", postgres: "PostgreSQL", wxt: "WXT", chrome: "Chrome Extension (MV3)",
  huggingface: "transformers.js", docker: "Docker", gemini: "Gemini API",
  html5: "HTML5", css3: "CSS3", javascript: "JavaScript", json: "JSON",
};

export const projectsData: Project[] = [
  {
    slug: "coverflow",
    title: "CoverFlow",
    imageTitle: "AI-Powered Card Benefit Activation Engine",
    src: "/projects/coverflow.png",
    video: "",
    description: "AI-powered card benefit activation platform that monitors card transactions in real time, identifies qualifying protection benefits, and streamlines insurance claim processing end to end. REST API workflows handle benefit eligibility, transaction data and claim generation, while an OCR + LLM pipeline converts unstructured receipts into structured claim data — with real-time notifications through approval.",
    tech: ["react", "node", "postgres", "redis", "docker", { label: "AWS", tooltip: "Amazon Web Services" }, "gemini", { label: "OCR", tooltip: "Optical Character Recognition" }],
    github: "https://github.com/Ayush277/coverflow",
    live: "https://coverflow-web-rose.vercel.app/",
    docs: "",
    status: "live",
    backgroundImage: "/projects/coverflow-hero.png",
    hasPin: true,
  },
  {
    slug: "ai-business-analytics-platform",
    title: "AI-Powered Business Analytics Platform",
    imageTitle: "Decision Intelligence System",
    src: "/projects/samsung-dashboard.png",
    video: "",
    description: "Unified business analytics platform combining forecasting, risk assessment, interactive dashboards and AI-powered recommendations across 100K+ business records. Sub-200ms REST API and JSON-driven workflows power automated reporting and interactive dashboard views, turning raw data into clear, actionable visualizations.",
    tech: ["html5", "css3", "javascript", { label: "REST APIs", tooltip: "REST APIs" }, "json", "python", { label: "Machine Learning", tooltip: "Machine Learning" }, { label: "LLMs", tooltip: "Large Language Models" }],
    github: "https://github.com/Ayush277/Samsung-Dashboard-worklet-8",
    live: "https://samsung-dashboard-worklet-8.vercel.app",
    docs: "https://samsung-dashboard-worklet-8.vercel.app/docs",
    status: "live",
    backgroundImage: "/projects/samsung-dashboard.png",
    hasPin: true,
  },
  {
    slug: "nomi",
    title: "Nomi",
    imageTitle: "Your Digital Companion",
    src: "/projects/nomi-landing.png",
    video: "",
    description: "An AI companion that lives beside your browser — a floating glass avatar that learns your habits, builds a daily memory of your work and answers questions like \"when did I last study graphs?\". Local-first: on-device inference with transformers.js, encrypted storage, no cloud recording.",
    tech: ["ts", "react", "wxt", "chrome", "huggingface"],
    github: "https://github.com/Ayush277/nomi",
    live: "",
    docs: "https://github.com/Ayush277/nomi/tree/main/docs",
    status: "live",
    backgroundImage: "/projects/nomi-dashboard.png",
    hasPin: true,
  },
  {
    slug: "loopjob",
    title: "LoopJob",
    imageTitle: "Never Miss Another Opening",
    src: "/projects/looper.png",
    video: "",
    description: "A personal always-on agent that monitors company career portals, discovers matching jobs across the indexed job market and semantically matches them against your filters — then emails you new openings, deduplicated, with the reason each one matched.",
    tech: ["next", "ts", "fastapi", "celery", "postgres", "redis"],
    github: "https://github.com/Ayush277/Looper",
    live: "",
    docs: "https://github.com/Ayush277/Looper/blob/main/docs/00-INDEX.md",
    status: "live",
    backgroundImage: "/projects/looper-discovery.png",
    hasPin: false,
  },
  {
    slug: "rate-limiter",
    title: "Rate Limiter",
    imageTitle: "Distributed API Rate Limiting",
    src: "/projects/rate-limiter.png",
    video: "",
    description: "Distributed API rate-limiting service on Spring Boot 4 and Redis — token-bucket and sliding-window strategies backed by atomic Redis operations, so limits stay consistent across service instances.",
    tech: ["java", "spring", "redis", "gradle"],
    github: "https://github.com/Ayush277/Rate-Limiter",
    live: "",
    docs: "",
    status: "live",
    backgroundImage: "/projects/rate-limiter.png",
    hasPin: false,
  },
];
