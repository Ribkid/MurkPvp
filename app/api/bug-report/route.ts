import { NextResponse } from "next/server"
import { supabase } from "@/lib/supabase"

export async function POST(request: Request) {
  try {
    const data = await request.json()

    // Validate required fields
    const { username, category, title, description, steps } = data

    if (!username || !category || !title || !description || !steps) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    // Add timestamp
    const reportData = {
      ...data,
      created_at: new Date().toISOString(),
      status: "new", // Default status for new reports
    }

    // Insert into Supabase
    const { data: insertedData, error } = await supabase.from("bug_reports").insert(reportData).select()

    if (error) {
      console.error("Error inserting bug report:", error)
      return NextResponse.json({ error: "Failed to submit bug report" }, { status: 500 })
    }

    return NextResponse.json({
      success: true,
      message: "Bug report submitted successfully",
      data: insertedData[0],
    })
  } catch (error) {
    console.error("Error processing bug report:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

