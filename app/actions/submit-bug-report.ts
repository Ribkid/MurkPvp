"use server"

import { supabase } from "@/lib/supabase"

type BugReportData = {
  username: string
  category: string
  description: string
  location?: string
}

export async function submitBugReport(data: BugReportData) {
  try {
    // Check if Supabase is available
    if (!supabase) {
      console.error("Supabase client not initialized")
      return { success: false, error: "Database connection not available" }
    }

    // Try to insert the bug report
    const { error } = await supabase.from("bug_reports").insert({
      username: data.username,
      category: data.category,
      description: data.description,
      location: data.location || null,
      status: "pending",
      priority: "medium",
    })

    if (error) {
      console.error("Error submitting bug report:", error)
      return { success: false, error: error.message }
    }

    return { success: true }
  } catch (err: any) {
    console.error("Exception in submitBugReport:", err)
    return { success: false, error: err.message || "An unexpected error occurred" }
  }
}
