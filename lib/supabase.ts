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
  username: string
  category: string
  description: string
  location: string | null
  status: "pending" | "in-progress" | "resolved"
  priority: "low" | "medium" | "high" | "critical"
  created_at: string
  assigned_to: string | null
}

// Create a single supabase client for interacting with your database
export const supabase =
  process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    ? createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!)
    : null

export const isSupabaseInitialized = () => !!supabase

// Helper function for login
export async function handleLogin(email: string, password: string) {
  try {
    if (!supabase) {
      throw new Error("Supabase client not initialized")
    }
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    })

    if (error) throw error
    return data
  } catch (error: any) {
    console.error("Error logging in:", error.message)
    throw error
  }
}

export async function ensureTablesExist() {
  if (!supabase) {
    throw new Error("Supabase client not initialized")
  }
  // Placeholder function to ensure tables exist
  // In a real-world scenario, this function would check for the existence of the
  // 'staff' and 'bug_reports' tables and create them if they don't exist.
  // For simplicity, we'll just log a message.
  console.log("Ensuring database tables exist...")
}
