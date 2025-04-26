"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { AlertCircle, CheckCircle } from "lucide-react"

export default function BugReportPage() {
  const router = useRouter()
  const [username, setUsername] = useState("")
  const [category, setCategory] = useState("")
  const [description, setDescription] = useState("")
  const [location, setLocation] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)
    setSuccess(false)

    try {
      // Validate form
      if (!username || !category || !description) {
        throw new Error("Please fill out all required fields")
      }

      // Submit the bug report
      const response = await fetch("/api/bug-report", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          category,
          description,
          location,
          priority: "medium", // Default priority
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit bug report")
      }

      // If Supabase failed but API succeeded, store in localStorage as backup
      if (data.report) {
        try {
          const storedReports = localStorage.getItem("bugReports")
          const reports = storedReports ? JSON.parse(storedReports) : []
          reports.push(data.report)
          localStorage.setItem("bugReports", JSON.stringify(reports))
        } catch (storageError) {
          console.error("Failed to store in localStorage:", storageError)
        }
      }

      // Show success message
      setSuccess(true)

      // Reset form
      setUsername("")
      setCategory("")
      setDescription("")
      setLocation("")

      // Redirect after a delay
      setTimeout(() => {
        router.push("/")
      }, 3000)
    } catch (err: any) {
      console.error("Error submitting bug report:", err)
      setError(err.message || "Failed to submit bug report")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="container py-10">
      <div className="max-w-2xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>Report a Bug</CardTitle>
            <CardDescription>
              Found a bug or issue on the MurkCraft server? Let us know and we'll fix it!
            </CardDescription>
          </CardHeader>
          <CardContent>
            {error && (
              <Alert variant="destructive" className="mb-6">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            {success && (
              <Alert className="mb-6 bg-green-50 text-green-800 dark:bg-green-900/20 dark:text-green-400">
                <CheckCircle className="h-4 w-4" />
                <AlertDescription>
                  Bug report submitted successfully! Thank you for helping improve MurkCraft. You will be redirected to
                  the homepage in a few seconds.
                </AlertDescription>
              </Alert>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="username">
                  Your Minecraft Username <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="username"
                  placeholder="Enter your Minecraft username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  disabled={isSubmitting || success}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="category">
                  Bug Category <span className="text-red-500">*</span>
                </Label>
                <Select value={category} onValueChange={setCategory} disabled={isSubmitting || success} required>
                  <SelectTrigger id="category">
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="enchantments">Enchantments</SelectItem>
                    <SelectItem value="valhalla">ValhallaMMO</SelectItem>
                    <SelectItem value="lands">Lands</SelectItem>
                    <SelectItem value="performance">Performance/Lag</SelectItem>
                    <SelectItem value="items">Custom Items</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">
                  Bug Description <span className="text-red-500">*</span>
                </Label>
                <Textarea
                  id="description"
                  placeholder="Describe the bug in detail. What happened? What did you expect to happen?"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  disabled={isSubmitting || success}
                  rows={5}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="location">Location (Optional)</Label>
                <Input
                  id="location"
                  placeholder="Where did this happen? (e.g., coordinates, world, etc.)"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  disabled={isSubmitting || success}
                />
              </div>
            </form>
          </CardContent>
          <CardFooter>
            <Button
              onClick={handleSubmit}
              disabled={isSubmitting || success || !username || !category || !description}
              className="w-full"
            >
              {isSubmitting ? "Submitting..." : "Submit Bug Report"}
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
