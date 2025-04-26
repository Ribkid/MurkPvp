import { NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"
import { addBugReportToRedis, isRedisAvailable } from "@/lib/redis"

export async function POST(request: Request) {
  try {
    const data = await request.json()

    // Validate the request data
    if (!data.username || !data.category || !data.description) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const bugReport = {
      username: data.username,
      category: data.category,
      description: data.description,
      location: data.location || null,
      status: "pending",
      priority: "medium",
      created_at: new Date().toISOString(),
    }

    // Try to store in Redis first
    let redisSuccess = false
    try {
      if (await isRedisAvailable()) {
        await addBugReportToRedis(bugReport)
        redisSuccess = true
        console.log("Bug report added to Redis successfully via API")
      }
    } catch (redisError) {
      console.error("Error storing bug report in Redis via API:", redisError)
      // Continue to Supabase even if Redis fails
    }

    // Initialize Supabase client
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

    let supabaseSuccess = false
    if (supabaseUrl && supabaseKey) {
      const supabase = createClient(supabaseUrl, supabaseKey)

      // Insert the bug report
      const { error } = await supabase.from("bug_reports").insert(bugReport)

      if (error) {
        console.error("Error inserting bug report to Supabase via API:", error)
      } else {
        supabaseSuccess = true
        console.log("Bug report added to Supabase successfully via API")
      }
    } else {
      console.error("Supabase configuration missing")
    }

    // Return success if either storage method worked
    if (redisSuccess || supabaseSuccess) {
      return NextResponse.json({ success: true })
    } else {
      return NextResponse.json(
        {
          error: "Failed to store bug report in both Redis and Supabase",
        },
        { status: 500 },
      )
    }
  } catch (err: any) {
    console.error("Exception in submit-bug-report API:", err)
    return NextResponse.json({ error: err.message || "An unexpected error occurred" }, { status: 500 })
  }
}
