"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Skeleton } from "@/components/ui/skeleton"

type BugReport = {
  id: string
  username: string
  category: string
  description: string
  status: string
  priority: string
  created_at: string
}

export function RecentBugReports() {
  const [reports, setReports] = useState<BugReport[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchRecentReports() {
      try {
        setLoading(true)
        const response = await fetch("/api/recent-bug-reports")

        if (!response.ok) {
          throw new Error(`Error fetching recent reports: ${response.statusText}`)
        }

        const data = await response.json()
        setReports(data.reports || [])
      } catch (err: any) {
        console.error("Failed to fetch recent bug reports:", err)
        setError(err.message || "Failed to load recent bug reports")
      } finally {
        setLoading(false)
      }
    }

    fetchRecentReports()

    // Set up polling every 30 seconds
    const interval = setInterval(fetchRecentReports, 30000)
    return () => clearInterval(interval)
  }, [])

  const getPriorityColor = (priority: string) => {
    switch (priority.toLowerCase()) {
      case "critical":
        return "bg-red-500 hover:bg-red-600"
      case "high":
        return "bg-orange-500 hover:bg-orange-600"
      case "medium":
        return "bg-yellow-500 hover:bg-yellow-600"
      case "low":
        return "bg-green-500 hover:bg-green-600"
      default:
        return "bg-blue-500 hover:bg-blue-600"
    }
  }

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "resolved":
        return "bg-green-500 hover:bg-green-600"
      case "in-progress":
        return "bg-blue-500 hover:bg-blue-600"
      case "pending":
        return "bg-yellow-500 hover:bg-yellow-600"
      default:
        return "bg-gray-500 hover:bg-gray-600"
    }
  }

  if (loading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Recent Bug Reports</CardTitle>
          <CardDescription>Latest reports from Redis</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex flex-col gap-2">
                <Skeleton className="h-5 w-1/3" />
                <Skeleton className="h-4 w-full" />
                <div className="flex gap-2">
                  <Skeleton className="h-5 w-16" />
                  <Skeleton className="h-5 w-16" />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    )
  }

  if (error) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Recent Bug Reports</CardTitle>
          <CardDescription>Latest reports from Redis</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-red-500">Error loading reports: {error}</div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Bug Reports</CardTitle>
        <CardDescription>Latest reports from Redis</CardDescription>
      </CardHeader>
      <CardContent>
        {reports.length === 0 ? (
          <p className="text-muted-foreground text-center py-4">No recent bug reports found</p>
        ) : (
          <ScrollArea className="h-[300px]">
            <div className="space-y-4">
              {reports.map((report) => (
                <div key={report.id} className="border-b pb-3 last:border-0">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-medium">{report.username}</h4>
                    <span className="text-xs text-muted-foreground">
                      {new Date(report.created_at).toLocaleString()}
                    </span>
                  </div>
                  <p className="text-sm mb-2 line-clamp-2">{report.description}</p>
                  <div className="flex gap-2">
                    <Badge className={getPriorityColor(report.priority)}>{report.priority}</Badge>
                    <Badge className={getStatusColor(report.status)}>{report.status}</Badge>
                    <Badge variant="outline">{report.category}</Badge>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        )}
      </CardContent>
    </Card>
  )
}
