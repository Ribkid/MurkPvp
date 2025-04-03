"use client"

import type React from "react"

import { useState } from "react"
import { Bug, Check, AlertCircle, Loader2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { useToast } from "@/hooks/use-toast"

export default function BugReportPage() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    username: "",
    category: "",
    title: "",
    description: "",
    steps: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      const response = await fetch("/api/bug-report", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || "Failed to submit bug report")
      }

      // Success
      setSubmitted(true)
      toast({
        title: "Bug report submitted",
        description: "Thank you for helping improve MurkCraft!",
      })

      // Reset form after 3 seconds
      setTimeout(() => {
        setSubmitted(false)
        setFormData({
          username: "",
          category: "",
          title: "",
          description: "",
          steps: "",
        })
      }, 3000)
    } catch (err) {
      console.error("Error submitting bug report:", err)
      setError(err instanceof Error ? err.message : "An unknown error occurred")
      toast({
        variant: "destructive",
        title: "Submission failed",
        description: err instanceof Error ? err.message : "Please try again later",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, category: value }))
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col items-center text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Report a Bug</h1>
        <p className="text-xl text-muted-foreground max-w-2xl">
          Help us improve MurkCraft by reporting any issues you encounter
        </p>
      </div>

      <div className="max-w-2xl mx-auto">
        {submitted ? (
          <Alert className="bg-green-500/20 border-green-500">
            <Check className="h-4 w-4 text-green-500" />
            <AlertTitle>Bug report submitted!</AlertTitle>
            <AlertDescription>
              Thank you for helping improve MurkCraft. Our team will review your report as soon as possible.
            </AlertDescription>
          </Alert>
        ) : error ? (
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        ) : (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bug className="h-5 w-5" />
                Bug Report Form
              </CardTitle>
              <CardDescription>
                Please provide as much detail as possible to help us identify and fix the issue.
              </CardDescription>
            </CardHeader>
            <form onSubmit={handleSubmit}>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="username">Minecraft Username</Label>
                    <Input
                      id="username"
                      name="username"
                      placeholder="Your in-game name"
                      value={formData.username}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="category">Bug Category</Label>
                    <Select
                      value={formData.category}
                      onValueChange={handleSelectChange}
                      disabled={isSubmitting}
                      required
                    >
                      <SelectTrigger id="category">
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="gameplay">Gameplay</SelectItem>
                        <SelectItem value="plugin">Plugin Specific</SelectItem>
                        <SelectItem value="performance">Performance</SelectItem>
                        <SelectItem value="visual">Visual Glitch</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="title">Bug Title</Label>
                  <Input
                    id="title"
                    name="title"
                    placeholder="Brief description of the issue"
                    value={formData.title}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Bug Description</Label>
                  <Textarea
                    id="description"
                    name="description"
                    placeholder="Detailed explanation of what happened"
                    rows={4}
                    value={formData.description}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="steps">Steps to Reproduce</Label>
                  <Textarea
                    id="steps"
                    name="steps"
                    placeholder="Step-by-step instructions to reproduce the bug"
                    rows={3}
                    value={formData.steps}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    "Submit Bug Report"
                  )}
                </Button>
              </CardFooter>
            </form>
          </Card>
        )}

        <div className="mt-8 bg-muted rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4">Before Submitting a Bug Report</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Check if the bug has already been reported on our Discord server</li>
            <li>Make sure you're using the latest version of Minecraft</li>
            <li>Try restarting your game to see if the issue persists</li>
            <li>Include screenshots or videos if possible (you can share links in the description)</li>
            <li>Be as specific as possible about what happened and when</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

