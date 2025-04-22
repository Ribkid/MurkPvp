// This script initializes the database schema for the MurkCraft wiki
// Run this script with: npx tsx scripts/init-database.tsx

import { createClient } from "@supabase/supabase-js"

// Replace these with your actual Supabase URL and anon key
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ""
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""

// Create Supabase client
const supabase = createClient(supabaseUrl, supabaseAnonKey)

async function initDatabase() {
  try {
    console.log("Initializing database schema...")

    // Create staff table if it doesn't exist
    const { error: staffError } = await supabase.rpc("create_staff_table_if_not_exists")

    if (staffError) {
      // If the RPC doesn't exist, we'll create the table directly
      console.log("Creating staff table directly...")
      const { error } = await supabase.query(`
        CREATE TABLE IF NOT EXISTS staff (
          id UUID PRIMARY KEY,
          username TEXT NOT NULL,
          email TEXT NOT NULL UNIQUE,
          role TEXT NOT NULL CHECK (role IN ('admin', 'moderator', 'helper')),
          created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
          last_sign_in TIMESTAMP WITH TIME ZONE
        )
      `)

      if (error) throw error
    }

    // Create bug_reports table if it doesn't exist
    const { error: reportsError } = await supabase.rpc("create_bug_reports_table_if_not_exists")

    if (reportsError) {
      // If the RPC doesn't exist, we'll create the table directly
      console.log("Creating bug_reports table directly...")
      const { error } = await supabase.query(`
        CREATE TABLE IF NOT EXISTS bug_reports (
          id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
          title TEXT NOT NULL,
          description TEXT NOT NULL,
          reporter_name TEXT NOT NULL,
          reporter_email TEXT,
          status TEXT NOT NULL DEFAULT 'open' CHECK (status IN ('open', 'in_progress', 'resolved', 'closed')),
          priority TEXT NOT NULL DEFAULT 'medium' CHECK (priority IN ('low', 'medium', 'high', 'critical')),
          created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
          updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
          assigned_to UUID REFERENCES staff(id)
        )
      `)

      if (error) throw error
    }

    // Create the root user "Ribkid" if it doesn't exist
    const { data: existingRibkid } = await supabase.from("staff").select("id").eq("username", "Ribkid").maybeSingle()

    if (!existingRibkid) {
      console.log('Creating root user "Ribkid"...')

      // Create user in Auth
      const { data, error } = await supabase.auth.signUp({
        email: "ribkid@murkcraft.com",
        password: "RibkidSecurePassword123!", // This should be changed after creation
        options: {
          data: {
            username: "Ribkid",
            role: "admin",
          },
        },
      })

      if (error) {
        console.error("Error creating Ribkid auth user:", error.message)
      } else if (data.user) {
        // Add user to staff table
        const { error: insertError } = await supabase.from("staff").insert({
          id: data.user.id,
          username: "Ribkid",
          email: "ribkid@murkcraft.com",
          role: "admin",
          created_at: new Date().toISOString(),
        })

        if (insertError) {
          console.error("Error adding Ribkid to staff table:", insertError.message)
        } else {
          console.log('Root user "Ribkid" created successfully')
        }
      }
    } else {
      console.log('Root user "Ribkid" already exists')
    }

    console.log("Database initialization completed!")
  } catch (err: any) {
    console.error("Error initializing database:", err.message)
  }
}

initDatabase()
