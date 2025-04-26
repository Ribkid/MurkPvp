"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { AlertCircle, CheckCircle, Terminal, Send } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Server definitions
const servers = [
  {
    id: "997e1fea-9eb2-4189-96b8-03d92478d4b8",
    name: "Survival",
    description: "Main survival server",
  },
  {
    id: "survival-server-id", // Replace with actual ID
    name: "Skyblock",
    description: "Skyblock server",
  },
  {
    id: "adventure-server-id", // Replace with actual ID
    name: "Adventure",
    description: "Adventure server",
  },
]

// Common commands
const commonCommands = [
  { label: "Broadcast Message", value: "say {message}" },
  { label: "Kick Player", value: "kick {player} {reason}" },
  { label: "Ban Player", value: "ban {player} {reason}" },
  { label: "Give Item", value: "give {player} {item} {amount}" },
  { label: "Teleport Player", value: "tp {player} {x} {y} {z}" },
  { label: "Set Time", value: "time set {time}" },
  { label: "Set Weather", value: "weather {weather}" },
  { label: "Restart Server", value: "restart" },
]

export default function ServerCommandsPage() {
  const [selectedServer, setSelectedServer] = useState(servers[0].id)
  const [command, setCommand] = useState("")
  const [commandTemplate, setCommandTemplate] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")
  const [commandHistory, setCommandHistory] = useState<{ command: string; response: string; timestamp: string }[]>([])
  const [apiKey, setApiKey] = useState("ptlc_HWyms1kfN5tiF7q4FpSUYiykW8jXuB3CSBckOAY4d9t")

  const handleCommandTemplateChange = (value: string) => {
    setCommandTemplate(value)
    setCommand(value)
  }

  const handleCommandChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCommand(e.target.value)
  }

  const executeCommand = async () => {
    if (!command.trim()) {
      setError("Please enter a command")
      return
    }

    setIsLoading(true)
    setError("")
    setSuccess("")

    try {
      // Get the selected server
      const server = servers.find((s) => s.id === selectedServer)
      if (!server) {
        throw new Error("Server not found")
      }

      // Execute the command through our proxy API
      const response = await fetch("/api/server-command", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          serverId: selectedServer,
          command,
          apiKey,
        }),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || "Failed to execute command")
      }

      // Add to command history
      setCommandHistory([
        {
          command,
          response: "Command executed successfully",
          timestamp: new Date().toISOString(),
        },
        ...commandHistory,
      ])

      setSuccess(`Command "${command}" executed successfully on ${server.name} server`)
      setCommand("")
    } catch (err: any) {
      setError(err.message || "Failed to execute command")
    } finally {
      setIsLoading(false)
    }
  }

  const formatTimestamp = (timestamp: string) => {
    const date = new Date(timestamp)
    return date.toLocaleTimeString()
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Server Commands</h1>
        <p className="text-muted-foreground">Execute commands on Minecraft servers.</p>
      </div>

      {error && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {success && (
        <Alert className="bg-green-50 text-green-800 dark:bg-green-900/20 dark:text-green-400">
          <CheckCircle className="h-4 w-4" />
          <AlertDescription>{success}</AlertDescription>
        </Alert>
      )}

      <Card>
        <CardHeader>
          <CardTitle>Execute Command</CardTitle>
          <CardDescription>Run commands on the selected Minecraft server.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium">Server</label>
                <Select value={selectedServer} onValueChange={setSelectedServer}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select server" />
                  </SelectTrigger>
                  <SelectContent>
                    {servers.map((server) => (
                      <SelectItem key={server.id} value={server.id}>
                        {server.name} - {server.description}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm font-medium">Common Commands</label>
                <Select value={commandTemplate} onValueChange={handleCommandTemplateChange}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a command template" />
                  </SelectTrigger>
                  <SelectContent>
                    {commonCommands.map((cmd) => (
                      <SelectItem key={cmd.value} value={cmd.value}>
                        {cmd.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="flex gap-2">
              <div className="flex-1">
                <label className="text-sm font-medium">Command</label>
                <div className="flex mt-1">
                  <Input
                    value={command}
                    onChange={handleCommandChange}
                    placeholder="Enter command..."
                    className="flex-1"
                  />
                  <Button onClick={executeCommand} disabled={isLoading} className="ml-2">
                    {isLoading ? (
                      <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-white"></div>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Execute
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </div>

            <div>
              <label className="text-sm font-medium">API Key</label>
              <Input
                type="password"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                placeholder="Enter API key..."
              />
              <p className="text-xs text-muted-foreground mt-1">
                This is the API key used to authenticate with the server panel.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Command History</CardTitle>
          <CardDescription>Recent commands executed on the servers.</CardDescription>
        </CardHeader>
        <CardContent>
          {commandHistory.length === 0 ? (
            <div className="text-center py-4 text-muted-foreground">No commands executed yet</div>
          ) : (
            <div className="space-y-2">
              {commandHistory.map((entry, index) => (
                <div key={index} className="border rounded-md p-3">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center">
                      <Terminal className="h-4 w-4 mr-2 text-muted-foreground" />
                      <code className="text-sm font-mono">{entry.command}</code>
                    </div>
                    <span className="text-xs text-muted-foreground">{formatTimestamp(entry.timestamp)}</span>
                  </div>
                  <div className="mt-2 text-sm text-muted-foreground">{entry.response}</div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
