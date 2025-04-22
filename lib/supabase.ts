import { createClient } from "@supabase/supabase-js"

// Define types for your database tables
export type Staff = {
  id: string
  username: string
  email: string
  role: "admin" | "moderator" | "helper"
  created_at: string
  last_sign_in: string | null
}

export type BugReport = {
  id: string
  title: string
  description: string
  reporter_name: string
  reporter_email: string | null
  status: "open" | "in_progress" | "resolved" | "closed"
  priority: "low" | "medium" | "high" | "critical"
  created_at: string
  updated_at: string
  assigned_to: string | null
}

// Create a single supabase client for interacting with your database
export const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!)
