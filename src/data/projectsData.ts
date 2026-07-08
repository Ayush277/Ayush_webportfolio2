import type { ComponentType } from "react";
import { Network, Search } from "lucide-react";
import {
  SiNextdotjs,
  SiTypescript,
  SiReact,
  SiThreedotjs,
  SiPrisma,
  SiCloudflare,
  SiLangchain,
  SiNodedotjs,
  SiFramer,
  SiTailwindcss,
  SiBun,
  SiEslint,
  SiRadixui,
  SiChartdotjs,
  SiGithub,
  SiFastapi,
  SiRedis,
  SiCelery,
  SiTldraw,
  SiCss,
  SiPython,
  SiAnthropic,
  SiClaude,
  SiGooglegemini,
  SiMeta,
  SiMongodb,
  SiTensorflow,
  SiPandas,
  SiNumpy,
  SiOpenai,
} from "react-icons/si";

export type TechIcon = ComponentType<{ className?: string }>;
export type TechKey =
  | "next" | "ts" | "react" | "three" | "prisma" | "cloud" | "langchain" | "langgraph" | "rag"
  | "node" | "motion" | "tailwind" | "bun" | "eslint" | "radixui" | "charts" | "github" | "fastapi"
  | "redis" | "celery" | "tldraw" | "css3" | "python" | "anthropic" | "claude" | "gemini" | "llama"
  | "mongodb" | "tensorflow" | "pandas" | "numpy" | "openai";

export type TechItem = TechKey | { label: string; tooltip?: string; };

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
  starsText?: string;
  backgroundImage?: string;
  hasPin: boolean;
}

export const iconMap: Record<TechKey, TechIcon> = {
  next: SiNextdotjs, ts: SiTypescript, react: SiReact, three: SiThreedotjs, prisma: SiPrisma,
  cloud: SiCloudflare, langchain: SiLangchain, langgraph: Network, rag: Search, node: SiNodedotjs,
  motion: SiFramer, tailwind: SiTailwindcss, bun: SiBun, eslint: SiEslint, radixui: SiRadixui,
  charts: SiChartdotjs, github: SiGithub, fastapi: SiFastapi, redis: SiRedis, celery: SiCelery,
  tldraw: SiTldraw, css3: SiCss, python: SiPython, anthropic: SiAnthropic, claude: SiClaude,
  gemini: SiGooglegemini, llama: SiMeta, mongodb: SiMongodb, tensorflow: SiTensorflow,
  pandas: SiPandas, numpy: SiNumpy, openai: SiOpenai,
};

export const techNames: Record<TechKey, string> = {
  next: "Next.js", ts: "TypeScript", react: "React", three: "Three.js", prisma: "Prisma",
  cloud: "Cloudflare", langchain: "LangChain", langgraph: "LangGraph", rag: "RAG",
  node: "Node.js", motion: "Framer Motion", tailwind: "Tailwind CSS", bun: "Bun", eslint: "ESLint",
  radixui: "Radix UI", charts: "Charts", github: "GitHub API", fastapi: "FastAPI", redis: "Redis",
  celery: "Celery", tldraw: "tldraw", css3: "CSS3", python: "Python", anthropic: "Anthropic",
  claude: "Claude", gemini: "Gemini", llama: "LLaMA", mongodb: "MongoDB", tensorflow: "TensorFlow",
  pandas: "Pandas", numpy: "NumPy", openai: "LLMs",
};

export const projectsData: Project[] = [
  {
    slug: "meetstream-ai",
    title: "MeetStream AI",
    imageTitle: "Meeting Intelligence",
    src: "",
    lightModeSrc: "",
    video: "",
    description: "AI meeting assistant that captures conversations and generates summaries, action items and insights using speech-to-text and LLMs.",
    tech: ["react", "fastapi", "python", "mongodb", "openai"],
    github: "https://github.com/Ayush277",
    live: "",
    backgroundImage: "",
    hasPin: true,
  },
  {
    slug: "decision-analytics",
    title: "Decision Analytics Platform",
    imageTitle: "BI Dashboard",
    src: "",
    lightModeSrc: "",
    video: "",
    description: "Business-intelligence platform unifying forecasting, risk analysis and reporting into one decision-support dashboard over 100K+ records.",
    tech: ["python", "tensorflow", "pandas", "charts", "openai"],
    github: "https://github.com/Ayush277",
    live: "",
    backgroundImage: "",
    hasPin: false,
  },
  {
    slug: "time-to-stress",
    title: "Time-to-Stress Prediction",
    imageTitle: "Research - Precision Agriculture",
    src: "",
    lightModeSrc: "",
    video: "",
    description: "A dual-head BiLSTM with SHAP-based temporal attention for time-to-stress prediction. Reviewer, SMM4H-HeaRD 2026.",
    tech: ["python", "tensorflow", "numpy", "charts"],
    github: "https://github.com/Ayush277",
    live: "",
    backgroundImage: "",
    hasPin: false,
  },
];
