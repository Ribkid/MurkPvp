import { NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"

export async function POST(request: Request) {
  try {
    const data = await request.json()

    // Validate the request data
    if (!data.username || !data.category || !data.description) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Initialize Supabase client
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

    if (!supabaseUrl || !supabaseKey) {
      return NextResponse.json({ error: "Database configuration missing" }, { status: 500 })
    }

    const supabase = createClient(supabaseUrl, supabaseKey)

    // Create the bug_reports table if it doesn't exist
    try {
      await supabase.rpc("create_bug_reports_table_if_not_exists")
    } catch (error) {
      console.error("Error creating table:", error)
      // Continue anyway, as the table might already exist
    }

    // Insert the bug report
    const { error } = await supabase.from("bug_reports").insert({
      username: data.username,
      category: data.category,
      description: data.description,
      location: data.location || null,
      status: "pending",
      priority: "medium",
    })

    if (error) {
      console.error("Error inserting bug report:", error)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (err: any) {
    console.error("Exception in submit-bug-report API:", err)
    return NextResponse.json({ error: err.message || "An unexpected error occurred" }, { status: 500 })
  }
}
