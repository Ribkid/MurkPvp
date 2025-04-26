import { NextResponse } from "next/server"
import { getRecentBugReports, isRedisAvailable } from "@/lib/redis"

export async function GET() {
  try {
    // Check if Redis is available
    if (!(await isRedisAvailable())) {
      return NextResponse.json({ error: "Redis connection not available" }, { status: 503 })
    }

    // Get recent bug reports from Redis
    const reports = await getRecentBugReports(10)

    return NextResponse.json({ reports })
  } catch (error: any) {
    console.error("Error fetching recent bug reports:", error)
    return NextResponse.json({ error: error.message || "Failed to fetch recent bug reports" }, { status: 500 })
  }
}
