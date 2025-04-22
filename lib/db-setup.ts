import { supabase } from "./supabase"

export async function setupDatabase() {
  try {
    console.log("Checking database setup...")

    // First, check if the Supabase client is properly initialized
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
      console.error("Supabase environment variables are not properly set")
      return false
    }

    // Check if the staff table exists by querying it
    const { data: staffData, error: staffError } = await supabase
      .from("staff")
      .select("id, username, email")
      .eq("username", "Ribkid")
      .maybeSingle()

    if (staffError && staffError.code !== "PGRST116") {
      console.error("Error checking staff table:", staffError)
      return false
    }

    // If the root user already exists, we're done
    if (staffData) {
      console.log("Root user already exists, skipping setup")
      return true
    }

    console.log("Root user not found, attempting to create...")

    // Create the staff table if it doesn't exist
    // Note: In a production environment, you would use migrations
    const { error: createTableError } = await supabase.rpc("create_staff_table_if_not_exists")

    if (createTableError) {
      console.log("Note: If the RPC function doesn't exist, this is expected on first run")
      // We'll continue anyway as the table might already exist
    }

    // Check if the user already exists in auth
    const { data: existingUser, error: userCheckError } =
      await supabase.auth.admin.getUserByEmail("ribkid@murkcraft.com")

    if (userCheckError && userCheckError.message !== "User not found") {
      console.error("Error checking existing user:", userCheckError)
      return false
    }

    let userId = existingUser?.id

    // If user doesn't exist in auth, create them
    if (!userId) {
      // Instead of using signUp, use the admin createUser function
      // This requires admin privileges which might not be available in the browser
      // For now, we'll just create a record in the staff table
      console.log("Creating staff record directly...")

      // Generate a UUID for the user
      userId = crypto.randomUUID()

      // Insert the user into our staff table
      const { error: insertError } = await supabase.from("staff").insert({
        id: userId,
        username: "Ribkid",
        email: "ribkid@murkcraft.com",
        role: "admin",
        created_at: new Date().toISOString(),
      })

      if (insertError) {
        console.error("Error inserting root user into staff table:", insertError)
        return false
      }

      console.log('Root user "Ribkid" created successfully in staff table')
    }

    return true
  } catch (error) {
    console.error("Unexpected error in setupDatabase:", error)
    return false
  }
}
