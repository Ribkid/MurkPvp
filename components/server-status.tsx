"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Copy, AlertTriangle } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

type ServerInfo = {
  name: string
  address: string
  version: string
  status: "online" | "offline" | "loading" | "unknown"
}

export function ServerStatus() {
  const [servers, setServers] = useState<ServerInfo[]>([
    { name: "Survival", address: "panel.murkpvp.com", version: "1.21.4", status: "loading" },
    { name: "Skyblock", address: "skyblock.murkpvp.com", version: "1.21.4", status: "loading" },
    { name: "Adventure", address: "adventure.murkpvp.com", version: "1.21", status: "loading" },
  ])
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchServerStatus = async () => {
      try {
        const response = await fetch("/api/server-status")

        if (!response.ok) {
          throw new Error(`Server responded with status: ${response.status}`)
        }

        const data = await response.json()

        if (data.error) {
          // If the API returns an error but also provides fallback data
          setError(data.error)
          if (data.servers) {
            setServers(data.servers)
          }
        } else {
          setServers(data.servers)
          setError(null)
        }
      } catch (error) {
        console.error("Error fetching server status:", error)
        setError("Unable to fetch server status. Displaying last known status.")
        // Don't update servers state, keep showing the last known state
      }
    }

    fetchServerStatus()

    // Refresh status every 60 seconds
    const intervalId = setInterval(fetchServerStatus, 60000)
    return () => clearInterval(intervalId)
  }, [])

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    // Simple alert instead of toast to avoid dependency issues
    alert(`Copied ${text} to clipboard`)
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "online":
        return "default" // green
      case "offline":
        return "destructive" // red
      case "unknown":
        return "secondary" // gray
      default:
        return "secondary" // gray for loading too
    }
  }

  return (
    <div>
      {error && (
        <Alert variant="destructive" className="mb-4">
          <AlertTriangle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {servers.map((server) => (
          <Card key={server.name} className="overflow-hidden">
            <CardContent className="p-0">
              <div className="flex items-center justify-between p-4 border-b">
                <div className="flex items-center gap-2">
                  <h3 className="font-medium">{server.name} Server</h3>
                  <Badge
                    variant={getStatusColor(server.status)}
                    className={server.status === "loading" ? "animate-pulse" : ""}
                  >
                    {server.status === "loading" ? "Checking..." : server.status}
                  </Badge>
                </div>
                <div className="text-sm text-muted-foreground">{server.version}</div>
              </div>
              <div className="p-4 flex items-center justify-between">
                <code className="text-sm font-mono">{server.address}</code>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => copyToClipboard(server.address)}
                  title="Copy to clipboard"
                >
                  <Copy className="h-4 w-4" />
                  <span className="sr-only">Copy server address</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
