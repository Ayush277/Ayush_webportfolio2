# Ayush Kumar — Portfolio

A minimal, blueprint-style developer portfolio built with **Next.js 16 (App Router)**, **React 19**, **TypeScript**, **Tailwind CSS v4**, and **Framer Motion**.

## Features

- Profile, experience timeline, and project grid
- Live **GitHub** contribution heatmap (via GitHub GraphQL)
- Live **LeetCode** submission heatmap (via LeetCode GraphQL)
- Skills grid, Leadership & Achievements, and an animated "Connect with me" section
- Light / dark mode with a command palette (⌘/Ctrl + K)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Environment

The GitHub contribution graph works without a token (public feed fallback). For the official GraphQL data, create `.env.local`:

```
GITHUB_TOKEN=your_personal_access_token
```

> `.env.local` is git-ignored — never commit your token. For deployment (e.g. Vercel), add `GITHUB_TOKEN` as an environment variable.

## Customize

Most content lives in:

- `src/app/page.tsx` — profile, bio, socials, skills
- `src/components/ExperienceList.tsx` — experience entries
- `src/data/projectsData.ts` — projects
- `public/` — images, logos, and `AyushKumar_Resume.pdf` (replace this file to update the resume; the /resume preview and its open-in-new-tab link use it automatically)
- `public/projects/*-site.png` — project covers; regenerate with `swiftc -o snap scripts/snap.swift && ./snap <url> <out.png>`

## Connect

- **GitHub:** [Ayush277](https://github.com/Ayush277)
- **LeetCode:** [Happy277](https://leetcode.com/u/Happy277/)
- **LinkedIn:** [ayushkumar277](https://www.linkedin.com/in/ayushkumar277)
- **Email:** prince908ayush@gmail.com
