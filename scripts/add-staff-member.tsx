// This is a script to add a staff member to your Supabase database
// Run this script with: npx tsx scripts/add-staff-member.tsx

import { createClient } from "@supabase/supabase-js"

// Replace these with your actual Supabase URL and anon key
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ""
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""

// Create Supabase client
const supabase = createClient(supabaseUrl, supabaseAnonKey)

async function addStaffMember() {
  // Replace with the email and password you want to use
  const email = "acalrhys@gmail.com"
  // Don't hardcode passwords in scripts - use environment variables or enter at runtime
  const password = process.env.STAFF_PASSWORD

  if (!password) {
    console.error("Please set the STAFF_PASSWORD environment variable")
    process.exit(1)
  }

  try {
    console.log(`Creating staff account for ${email}...`)

    // Create user in Auth
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          username: "Acalrhys",
          role: "admin",
        },
      },
    })

    if (error) {
      throw error
    }

    if (data.user) {
      console.log("User created in Auth system")

      // Add user to staff table
      const { error: insertError } = await supabase.from("staff").insert({
        id: data.user.id,
        username: "Acalrhys",
        email,
        role: "admin",
        created_at: new Date().toISOString(),
      })

      if (insertError) {
        throw insertError
      }

      console.log("Staff member added successfully!")
    }
  } catch (err: any) {
    console.error("Error adding staff member:", err.message)
  }
}

addStaffMember()
