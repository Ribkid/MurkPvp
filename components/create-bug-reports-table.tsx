"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle, CheckCircle } from "lucide-react"

export function CreateBugReportsTable() {
  const [isCreating, setIsCreating] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleCreateTable = async () => {
    try {
      setIsCreating(true)
      setError(null)
      setSuccess(false)

      const response = await fetch("/api/create-bug-reports-table", {
        method: "POST",
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to create bug reports table")
      }

      setSuccess(true)
    } catch (err: any) {
      console.error("Error creating bug reports table:", err)
      setError(err.message || "Failed to create bug reports table")
    } finally {
      setIsCreating(false)
    }
  }

  return (
    <div className="space-y-4">
      {error && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {success && (
        <Alert className="bg-green-50 text-green-800 dark:bg-green-900/20 dark:text-green-400">
          <CheckCircle className="h-4 w-4" />
          <AlertTitle>Success</AlertTitle>
          <AlertDescription>Bug reports table created successfully!</AlertDescription>
        </Alert>
      )}

      <Button onClick={handleCreateTable} disabled={isCreating}>
        {isCreating ? "Creating Table..." : "Create Bug Reports Table"}
      </Button>
    </div>
  )
}
