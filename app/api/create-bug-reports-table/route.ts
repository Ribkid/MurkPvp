import { NextResponse } from "next/server"
import { supabase } from "@/lib/supabase"

export async function POST() {
  try {
    // Check if we have access to Supabase
    if (!supabase) {
      return NextResponse.json({ error: "Supabase client not initialized" }, { status: 500 })
    }

    // Try to create the bug_reports table if it doesn't exist
    const { error } = await supabase.rpc("create_bug_reports_table")

    if (error) {
      console.error("Error creating bug_reports table:", error)

      // Try a direct SQL approach as fallback
      const { error: sqlError } = await supabase.from("bug_reports").insert({
        username: "system",
        category: "system",
        description: "Table initialization",
        status: "pending",
        priority: "low",
      })

      if (sqlError && !sqlError.message.includes("already exists")) {
        return NextResponse.json({ error: sqlError.message }, { status: 500 })
      }
    }

    return NextResponse.json({ success: true })
  } catch (err: any) {
    console.error("Error in create-bug-reports-table route:", err)
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}
