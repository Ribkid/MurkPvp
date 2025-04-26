import { NextResponse } from "next/server"
import { isRedisAvailable, getBugReportStats, BUG_REPORTS_KEY, redis } from "@/lib/redis"

export async function GET() {
  try {
    // Check if Redis client exists
    if (!redis) {
      return NextResponse.json({
        isConnected: false,
        totalBugReports: 0,
        categoryCounts: {},
        message: "Redis client not initialized. Check your environment variables.",
      })
    }

    // Check if Redis is available with a timeout
    let isConnected = false
    try {
      const checkPromise = isRedisAvailable()
      const timeoutPromise = new Promise<boolean>((_, reject) =>
        setTimeout(() => reject(new Error("Connection check timed out")), 5000),
      )

      isConnected = (await Promise.race([checkPromise, timeoutPromise])) as boolean
    } catch (error) {
      console.error("Redis connection check failed:", error)
      return NextResponse.json({
        isConnected: false,
        totalBugReports: 0,
        categoryCounts: {},
        message: error instanceof Error ? error.message : "Connection check failed",
      })
    }

    if (!isConnected) {
      return NextResponse.json({
        isConnected: false,
        totalBugReports: 0,
        categoryCounts: {},
        message: "Redis connection not available. The service might be down or unreachable.",
      })
    }

    // Get bug report statistics
    let stats = {}
    let totalBugReports = 0

    try {
      // Get category counts
      stats = await getBugReportStats()

      // Get total bug reports count
      totalBugReports = await redis.llen(BUG_REPORTS_KEY)
    } catch (error) {
      console.error("Error fetching Redis data:", error)
      return NextResponse.json({
        isConnected: true, // We were able to connect, but data fetch failed
        totalBugReports: 0,
        categoryCounts: {},
        message: "Connected to Redis but failed to fetch data",
      })
    }

    // Convert string values to numbers for category counts
    const formattedCategoryCounts: Record<string, number> = {}
    for (const [key, value] of Object.entries(stats)) {
      formattedCategoryCounts[key] = typeof value === "string" ? Number.parseInt(value, 10) : 0
    }

    return NextResponse.json({
      isConnected: true,
      totalBugReports,
      categoryCounts: formattedCategoryCounts,
    })
  } catch (error: any) {
    console.error("Error in Redis stats API route:", error)

    return NextResponse.json(
      {
        isConnected: false,
        totalBugReports: 0,
        categoryCounts: {},
        error: error.message || "Failed to fetch Redis statistics",
        message: "An unexpected error occurred while fetching Redis statistics",
      },
      { status: 500 },
    )
  }
}
