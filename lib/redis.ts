import { Redis } from "@upstash/redis"

// Create Redis client using environment variables
const createRedisClient = () => {
  try {
    // Check for environment variables with multiple fallbacks
    let url = process.env.UPSTASH_REDIS_REST_URL || process.env.KV_REST_API_URL || process.env.KV_URL || ""
    const token =
      process.env.UPSTASH_REDIS_REST_TOKEN ||
      process.env.KV_REST_API_TOKEN ||
      process.env.KV_REST_API_READ_ONLY_TOKEN ||
      ""

    if (!url || !token) {
      console.warn("Missing Redis REST API URL or token. Redis functionality will be disabled.")
      return null
    }

    // Ensure URL starts with https://
    if (!url.startsWith("http://") && !url.startsWith("https://")) {
      url = `https://${url}`
    }

    return new Redis({
      url,
      token,
      retry: {
        retries: 3,
        backoff: (retryCount) => Math.min(Math.exp(retryCount) * 50, 1000), // Exponential backoff
      },
      // Add a longer timeout for network issues
      fetch: (url, options) => {
        return fetch(url, {
          ...options,
          signal: AbortSignal.timeout(5000), // 5 second timeout
        })
      },
    })
  } catch (error) {
    console.error("Failed to initialize Redis client:", error)
    return null
  }
}

// Create the Redis client
export const redis = createRedisClient()

// Cache for Redis availability to avoid repeated checks
let redisAvailableCache: { available: boolean; timestamp: number } | null = null
const CACHE_TTL = 30000 // 30 seconds

// Helper function to check if Redis is available with caching
export const isRedisAvailable = async (): Promise<boolean> => {
  // If we have a recent cache entry, use it
  if (redisAvailableCache && Date.now() - redisAvailableCache.timestamp < CACHE_TTL) {
    return redisAvailableCache.available
  }

  if (!redis) return false

  try {
    // Use a simple get operation with a short timeout instead of ping
    // This is more reliable for REST API connections
    await redis.get("_health_check", { retry: true })

    // Cache the result
    redisAvailableCache = { available: true, timestamp: Date.now() }
    return true
  } catch (error) {
    console.error("Redis connection error:", error)

    // Cache the negative result too, but for a shorter time
    redisAvailableCache = { available: false, timestamp: Date.now() }
    return false
  }
}

// Bug report related functions
export const BUG_REPORTS_KEY = "bug_reports"
export const RECENT_BUGS_KEY = "recent_bugs"
export const BUG_STATS_KEY = "bug_stats"

// Add a bug report to Redis with retry logic
export async function addBugReportToRedis(bugReport: any) {
  if (!redis) {
    console.error("Redis client not available")
    return null
  }

  // Check if Redis is available before attempting operations
  const available = await isRedisAvailable()
  if (!available) {
    console.error("Redis is not available, skipping bug report storage")
    return null
  }

  try {
    // Generate a unique ID if one doesn't exist
    const reportId = bugReport.id || `bug-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`
    const reportWithId = { ...bugReport, id: reportId }

    // Store the full bug report with its ID as the key
    await redis.set(`bug:${reportId}`, JSON.stringify(reportWithId))

    // Add to the list of all bug reports
    await redis.lpush(BUG_REPORTS_KEY, reportId)

    // Keep a list of recent bugs (last 10)
    await redis.lpush(RECENT_BUGS_KEY, reportId)
    await redis.ltrim(RECENT_BUGS_KEY, 0, 9)

    // Update stats by category
    await redis.hincrby(BUG_STATS_KEY, bugReport.category || "uncategorized", 1)

    return reportId
  } catch (error) {
    console.error("Error adding bug report to Redis:", error)
    return null
  }
}

// Get recent bug reports with fallback
export async function getRecentBugReports(limit = 10): Promise<any[]> {
  if (!redis) return []

  // Check if Redis is available before attempting operations
  const available = await isRedisAvailable()
  if (!available) {
    console.error("Redis is not available, returning empty bug reports list")
    return []
  }

  try {
    // Get the IDs of recent reports
    const reportIds = await redis.lrange(RECENT_BUGS_KEY, 0, limit - 1)

    if (!reportIds.length) return []

    // Get the actual reports
    const reports = await Promise.all(
      reportIds.map(async (id) => {
        try {
          const report = await redis.get(`bug:${id}`)
          return report ? JSON.parse(report as string) : null
        } catch (error) {
          console.error(`Error fetching report ${id}:`, error)
          return null
        }
      }),
    )

    return reports.filter(Boolean)
  } catch (error) {
    console.error("Error getting recent bug reports from Redis:", error)
    return []
  }
}

// Get bug report statistics with fallback
export async function getBugReportStats() {
  if (!redis) return {}

  // Check if Redis is available before attempting operations
  const available = await isRedisAvailable()
  if (!available) {
    console.error("Redis is not available, returning empty stats")
    return {}
  }

  try {
    return (await redis.hgetall(BUG_STATS_KEY)) || {}
  } catch (error) {
    console.error("Error getting bug report stats from Redis:", error)
    return {}
  }
}
