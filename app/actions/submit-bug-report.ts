"use server"

import { supabase } from "@/lib/supabase"
import { addBugReportToRedis } from "@/lib/redis"

export async function submitBugReport(formData: FormData) {
  try {
    // Extract form data
    const username = formData.get("username") as string
    const email = formData.get("email") as string
    const category = formData.get("category") as string
    const description = formData.get("description") as string
    const stepsToReproduce = formData.get("stepsToReproduce") as string
    const expectedBehavior = formData.get("expectedBehavior") as string
    const actualBehavior = formData.get("actualBehavior") as string

    // Create bug report object
    const bugReport = {
      username,
      email,
      category,
      description,
      steps_to_reproduce: stepsToReproduce,
      expected_behavior: expectedBehavior,
      actual_behavior: actualBehavior,
      status: "open",
      created_at: new Date().toISOString(),
    }

    // Try to submit to Supabase
    let supabaseSuccess = false
    let supabaseError = null
    let reportId = null

    if (supabase) {
      try {
        const { data, error } = await supabase.from("bug_reports").insert(bugReport).select()

        if (error) {
          throw error
        }

        supabaseSuccess = true
        reportId = data?.[0]?.id
      } catch (error: any) {
        console.error("Error submitting bug report to Supabase:", error)
        supabaseError = error.message
      }
    }

    // Try to submit to Redis
    let redisSuccess = false
    let redisError = null

    try {
      const redisReportId = await addBugReportToRedis({
        ...bugReport,
        id: reportId, // Use the Supabase ID if available
      })

      redisSuccess = !!redisReportId
    } catch (error: any) {
      console.error("Error submitting bug report to Redis:", error)
      redisError = error.message
    }

    // Return result
    if (supabaseSuccess || redisSuccess) {
      return {
        success: true,
        message: "Bug report submitted successfully",
        supabaseSuccess,
        redisSuccess,
        reportId,
      }
    } else {
      return {
        success: false,
        message: "Failed to submit bug report",
        supabaseError,
        redisError,
      }
    }
  } catch (error: any) {
    console.error("Error in submitBugReport:", error)
    return {
      success: false,
      message: "An unexpected error occurred",
      error: error.message,
    }
  }
}
