"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { CheckCircle2 } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function FallbackBugReport() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    username: "",
    category: "",
    description: "",
    location: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In this fallback, we just log the data and show a success message
    console.log("Bug report submitted (fallback mode):", formData)
    setSubmitted(true)
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
      <div className="max-w-md mx-auto">
        <Alert className="bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-900">
          <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400" />
          <AlertTitle>Bug Report Submitted</AlertTitle>
          <AlertDescription>Thank you for your report! Our staff will review it as soon as possible.</AlertDescription>
        </Alert>
        <div className="mt-6 text-center">
          <Button onClick={() => setSubmitted(false)}>Submit Another Report</Button>
        </div>
      </div>
    )
  }

  return (
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

          <Button type="submit" className="w-full">
            Submit Bug Report
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
