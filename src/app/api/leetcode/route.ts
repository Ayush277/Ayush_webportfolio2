import { NextResponse } from "next/server";

// Proxies LeetCode's public GraphQL to fetch a user's submission calendar.
// No auth/token required.
export async function POST(request: Request) {
  try {
    const { username } = await request.json();
    if (!username) {
      return NextResponse.json({ error: "Missing username" }, { status: 400 });
    }

    const query = `
      query userProfileCalendar($username: String!, $year: Int) {
        matchedUser(username: $username) {
          userCalendar(year: $year) {
            submissionCalendar
          }
        }
      }
    `;

    const fetchYear = async (year: number): Promise<Record<string, number>> => {
      const res = await fetch("https://leetcode.com/graphql/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Referer: "https://leetcode.com",
          "User-Agent": "Mozilla/5.0",
        },
        body: JSON.stringify({ query, variables: { username, year } }),
        cache: "no-store",
      });
      const json = await res.json();
      const cal = json?.data?.matchedUser?.userCalendar?.submissionCalendar;
      return cal ? (JSON.parse(cal) as Record<string, number>) : {};
    };

    const now = new Date();
    const year = now.getUTCFullYear();
    const [cur, prev] = await Promise.all([fetchYear(year), fetchYear(year - 1)]);
    const calendar: Record<string, number> = { ...prev, ...cur };
    const total = Object.values(calendar).reduce((a, b) => a + Number(b), 0);

    return NextResponse.json({ calendar, total });
  } catch (error) {
    console.error("LeetCode API Proxy Error:", error);
    return NextResponse.json({ error: "Failed to fetch from LeetCode" }, { status: 500 });
  }
}
