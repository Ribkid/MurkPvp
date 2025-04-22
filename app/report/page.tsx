"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { AlertCircle, CheckCircle2 } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { supabase } from "@/lib/supabase"

export default function ReportPage() {
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [formData, setFormData] = useState({
    username: "",
    category: "",
    description: "",
    location: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    try {
      // Insert the bug report into the database
      const { error } = await supabase.from("bug_reports").insert({
        username: formData.username,
        category: formData.category,
        description: formData.description,
        location: formData.location,
        status: "pending",
        priority: "medium",
      })

      if (error) {
        throw error
      }

      setSubmitted(true)
    } catch (err: any) {
      setError(err.message || "Failed to submit bug report")
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, category: value }))
  }

  if (submitted) {
    return (
      <div className="container py-10">
        <div className="max-w-md mx-auto">
          <Alert className="bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-900">
            <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400" />
            <AlertTitle>Bug Report Submitted</AlertTitle>
            <AlertDescription>
              Thank you for your report! Our staff will review it as soon as possible.
            </AlertDescription>
          </Alert>
          <div className="mt-6 text-center">
            <Button
              onClick={() => {
                setSubmitted(false)
                setFormData({
                  username: "",
                  category: "",
                  description: "",
                  location: "",
                })
              }}
            >
              Submit Another Report
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="container py-10">
      <div className="flex flex-col gap-4 mb-8">
        <h1 className="text-4xl font-bold">Report a Bug</h1>
        <p className="text-xl text-muted-foreground">
          Help us improve MurkCraft by reporting bugs, glitches, or issues you encounter.
        </p>
      </div>

      {error && (
        <Alert variant="destructive" className="mb-6">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Bug Report Form</CardTitle>
              <CardDescription>Please provide as much detail as possible about the issue.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="username">Minecraft Username</Label>
                  <Input
                    id="username"
                    name="username"
                    placeholder="Your in-game username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="category">Bug Category</Label>
                  <Select value={formData.category} onValueChange={handleSelectChange} required>
                    <SelectTrigger id="category">
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="enchantments">Custom Enchantments</SelectItem>
                      <SelectItem value="valhalla">ValhallaMMO</SelectItem>
                      <SelectItem value="lands">Lands Plugin</SelectItem>
                      <SelectItem value="mythicmobs">MythicMobs</SelectItem>
                      <SelectItem value="items">Custom Items</SelectItem>
                      <SelectItem value="performance">Server Performance</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location">Location (if applicable)</Label>
                  <Input
                    id="location"
                    name="location"
                    placeholder="Coordinates or area where the bug occurred"
                    value={formData.location}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Bug Description</Label>
                  <Textarea
                    id="description"
                    name="description"
                    placeholder="Please describe the bug in detail. Include steps to reproduce if possible."
                    rows={5}
                    value={formData.description}
                    onChange={handleChange}
                    required
                  />
                </div>

                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? "Submitting..." : "Submit Bug Report"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>Reporting Guidelines</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-medium mb-1">What to Include</h3>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>Clear description of the issue</li>
                  <li>Steps to reproduce the bug</li>
                  <li>Screenshots if possible</li>
                  <li>Server time when it occurred</li>
                  <li>Any error messages you received</li>
                </ul>
              </div>

              <div>
                <h3 className="font-medium mb-1">Common Issues</h3>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>Check if the issue is already known</li>
                  <li>Verify it's not caused by client-side mods</li>
                  <li>Try relogging before reporting</li>
                </ul>
              </div>

              <Alert>
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Important Note</AlertTitle>
                <AlertDescription>
                  For urgent issues or exploits, please report directly to staff on Discord instead of using this form.
                </AlertDescription>
              </Alert>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full" asChild>
                <a href="https://discord.gg/murkcraft" target="_blank" rel="noreferrer">
                  Contact Staff on Discord
                </a>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}
