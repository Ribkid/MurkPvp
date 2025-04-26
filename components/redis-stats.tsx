"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { RefreshCw, WifiOff } from "lucide-react"
import { Button } from "@/components/ui/button"

type RedisStats = {
  totalBugReports: number
  categoryCounts: Record<string, number>
  isConnected: boolean
  message?: string
}

export function RedisStats() {
  const [stats, setStats] = useState<RedisStats | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [retryCount, setRetryCount] = useState(0)

  const fetchRedisStats = async () => {
    try {
      setLoading(true)
      setError(null)

      // Use AbortController to handle timeouts
      const controller = new AbortController()
      const timeoutId = setTimeout(() => controller.abort(), 8000) // 8 second timeout

      console.log("Fetching Redis stats...")
      const response = await fetch("/api/redis-stats", {
        cache: "no-store",
        next: { revalidate: 0 },
        signal: controller.signal,
      }).finally(() => clearTimeout(timeoutId))

      console.log("Redis stats response status:", response.status)

      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status} ${response.statusText}`)
      }

      const data = await response.json()
      console.log("Redis stats data:", data)

      if (data.error) {
        throw new Error(data.error)
      }

      setStats(data)
      // Reset retry count on success
      setRetryCount(0)
    } catch (err: any) {
      console.error("Failed to fetch Redis stats:", err)

      // Handle specific network errors
      if (err.name === "AbortError") {
        setError("Request timed out. The Redis service might be slow or unreachable.")
      } else if (err.message === "Failed to fetch") {
        setError("Network error. Check your internet connection or Redis service availability.")
      } else {
        setError(err.message || "Failed to load Redis statistics")
      }

      // Increment retry count
      setRetryCount((prev) => prev + 1)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchRedisStats()

    // Set up polling every minute, with exponential backoff on errors
    const interval = setInterval(
      fetchRedisStats,
      retryCount > 0 ? Math.min(60000 * Math.pow(2, retryCount - 1), 300000) : 60000,
    )
    return () => clearInterval(interval)
  }, [retryCount])

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div>
          <CardTitle>Redis Statistics</CardTitle>
          <CardDescription>Real-time bug report data</CardDescription>
        </div>
        <Button variant="ghost" size="sm" onClick={fetchRedisStats} disabled={loading} title="Refresh stats">
          <RefreshCw className={`h-4 w-4 ${loading ? "animate-spin" : ""}`} />
          <span className="sr-only">Refresh</span>
        </Button>
      </CardHeader>
      <CardContent>
        {loading ? (
          <div className="flex items-center justify-center h-[100px]">
            <p className="text-sm text-muted-foreground">Loading Redis statistics...</p>
          </div>
        ) : error ? (
          <div className="flex flex-col items-center justify-center h-[100px] text-center">
            <WifiOff className="h-8 w-8 text-amber-500 mb-2" />
            <p className="text-sm text-red-500">{error}</p>
            <p className="text-xs text-muted-foreground mt-2">
              This could be a temporary network issue. Will retry automatically.
            </p>
            <Button variant="outline" size="sm" className="mt-4" onClick={fetchRedisStats}>
              Retry Now
            </Button>
          </div>
        ) : !stats ? (
          <div className="flex items-center justify-center h-[100px]">
            <p className="text-sm text-muted-foreground">No Redis data available</p>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span>Connection Status:</span>
              <span className={`font-medium ${stats.isConnected ? "text-green-500" : "text-red-500"}`}>
                {stats.isConnected ? "Connected" : "Disconnected"}
              </span>
            </div>
            {stats.message && (
              <div className="text-sm text-amber-500 bg-amber-50 dark:bg-amber-950/30 p-2 rounded">{stats.message}</div>
            )}
            <div className="flex items-center justify-between">
              <span>Total Bug Reports:</span>
              <span className="font-medium">{stats.totalBugReports}</span>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium">Reports by Category:</h4>
              {Object.entries(stats.categoryCounts).length > 0 ? (
                <ul className="space-y-1">
                  {Object.entries(stats.categoryCounts).map(([category, count]) => (
                    <li key={category} className="flex items-center justify-between text-sm">
                      <span>{category}:</span>
                      <span>{count}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm text-muted-foreground">No category data available</p>
              )}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
