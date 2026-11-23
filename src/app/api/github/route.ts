import { NextResponse } from 'next/server';

const GITHUB_USER = "Ayush277";

// Without GITHUB_TOKEN, fall back to a public contributions feed and reshape it
// into the same structure as GitHub's GraphQL contributionCalendar.
async function publicContributionCalendar() {
  const res = await fetch(
    `https://github-contributions-api.jogruber.de/v4/${GITHUB_USER}?y=last`,
    { next: { revalidate: 3600 } }
  );
  if (!res.ok) throw new Error(`Public contributions feed failed: ${res.status}`);
  const json = (await res.json()) as {
    total?: Record<string, number>;
    contributions: { date: string; count: number }[];
  };

  const days = [...json.contributions].sort((a, b) => a.date.localeCompare(b.date));
  const weeks: { contributionDays: { contributionCount: number; date: string }[] }[] = [];
  let current: { contributionCount: number; date: string }[] = [];
  for (const day of days) {
    const dow = new Date(`${day.date}T00:00:00Z`).getUTCDay();
    if (dow === 0 && current.length) {
      weeks.push({ contributionDays: current });
      current = [];
    }
    current.push({ contributionCount: day.count, date: day.date });
  }
  if (current.length) weeks.push({ contributionDays: current });

  const months: { name: string }[] = [];
  let lastMonth = "";
  for (const week of weeks) {
    const name = new Intl.DateTimeFormat("en", { month: "long", timeZone: "UTC" }).format(
      new Date(`${week.contributionDays[0].date}T00:00:00Z`)
    );
    if (name !== lastMonth) {
      months.push({ name });
      lastMonth = name;
    }
  }

  const totalContributions = days.reduce((sum, d) => sum + d.count, 0);
  return { data: { user: { contributionsCollection: { contributionCalendar: { totalContributions, months, weeks } } } } };
}

export async function POST(request: Request) {
  try {
    const { query } = await request.json();
    const token = process.env.GITHUB_TOKEN || "";

    if (!token) {
      return NextResponse.json(await publicContributionCalendar());
    }

    const response = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
      body: JSON.stringify({ query }),
    });

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("GitHub API Proxy Error:", error);
    return NextResponse.json({ error: "Failed to fetch from GitHub" }, { status: 500 });
  }
}
