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
  status: "pending" | "in-progress" | "resolved" | "closed"
  priority: "low" | "medium" | "high" | "critical"
  created_at: string
  updated_at: string | null
  assigned_to: string | null
}

// Create a single supabase client for interacting with your database
let supabaseInstance: ReturnType<typeof createClient> | null = null

try {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (supabaseUrl && supabaseAnonKey) {
    supabaseInstance = createClient(supabaseUrl, supabaseAnonKey, {
      auth: {
        persistSession: false, // Don't persist the session in localStorage
      },
    })
    console.log("Supabase client initialized successfully")
  } else {
    console.warn("Missing Supabase environment variables")
  }
} catch (error) {
  console.error("Error initializing Supabase client:", error)
}

export const supabase = supabaseInstance

// Function to check if Supabase is properly initialized
export function isSupabaseInitialized() {
  return !!supabase
}
