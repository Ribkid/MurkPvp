import { NextResponse } from "next/server"
import { supabase } from "@/lib/supabase"
import { v4 as uuidv4 } from "uuid"

export async function POST(request: Request) {
  try {
    const data = await request.json()

    // Validate required fields
    if (!data.username || !data.category || !data.description) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Generate a unique ID for the report
    const reportId = uuidv4()

    // Prepare the report data
    const reportData = {
      id: reportId,
      username: data.username,
      category: data.category,
      description: data.description,
      location: data.location || "",
      status: "pending",
      priority: data.priority || "medium",
      created_at: new Date().toISOString(),
      assigned_to: null,
    }

    // Try to insert into Supabase if available
    try {
      if (supabase) {
        const { error } = await supabase.from("bug_reports").insert(reportData)

        if (error) {
          console.error("Supabase error:", error)
          // Continue with local storage fallback
        }
      }
    } catch (dbError) {
      console.error("Database error:", dbError)
      // Continue with response, we'll store in localStorage on client
    }

    // Return success response with the report data
    return NextResponse.json({
      success: true,
      message: "Bug report submitted successfully",
      report: reportData,
    })
  } catch (error) {
    console.error("Error submitting bug report:", error)
    return NextResponse.json({ error: "Failed to submit bug report" }, { status: 500 })
  }
}
