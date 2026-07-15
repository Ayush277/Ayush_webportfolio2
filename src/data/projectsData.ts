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
} from "react-icons/si";

export type TechIcon = ComponentType<{ className?: string }>;
export type TechKey =
  | "next" | "ts" | "react" | "node" | "tailwind" | "fastapi" | "redis" | "celery"
  | "python" | "flask" | "sklearn" | "onnx" | "vercel" | "jupyter"
  | "spring" | "java" | "gradle" | "postgres" | "wxt" | "chrome" | "huggingface";

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
  huggingface: SiHuggingface,
};

export const techNames: Record<TechKey, string> = {
  next: "Next.js", ts: "TypeScript", react: "React", node: "Node.js",
  tailwind: "Tailwind CSS", fastapi: "FastAPI", redis: "Redis", celery: "Celery",
  python: "Python", flask: "Flask", sklearn: "scikit-learn", onnx: "ONNX Runtime",
  vercel: "Vercel", jupyter: "Jupyter", spring: "Spring Boot", java: "Java 21",
  gradle: "Gradle", postgres: "PostgreSQL", wxt: "WXT", chrome: "Chrome Extension (MV3)",
  huggingface: "transformers.js",
};

export const projectsData: Project[] = [
  {
    slug: "samsung-prism-worklet-8",
    title: "Samsung PRISM — Worklet 8",
    imageTitle: "Financing, Campaign & Sales Intelligence",
    src: "/projects/samsung-dashboard.png",
    video: "",
    description: "ML intelligence dashboard serving three trained models in real time — loan delinquency risk (RandomForest, AUC 0.72), campaign performance (CatBoost · LightGBM · Ridge) and sell-out forecasting (XGBoost). Models are exported to ONNX in CI with drift-verified builds and run live on Vercel.",
    tech: ["python", "jupyter", "sklearn", "onnx", "flask", "vercel"],
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
