import { NextResponse } from "next/server"
import { supabase } from "@/lib/supabase"

export async function POST() {
  try {
    if (!supabase) {
      return NextResponse.json({ error: "Supabase client not initialized" }, { status: 500 })
    }

    // SQL to create the bug_reports table
    const sql = `
      -- Create the bug_reports table
      CREATE TABLE IF NOT EXISTS public.bug_reports (
        id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
        username TEXT NOT NULL,
        category TEXT NOT NULL,
        description TEXT NOT NULL,
        location TEXT,
        status TEXT NOT NULL DEFAULT 'pending',
        priority TEXT NOT NULL DEFAULT 'medium',
        created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
        updated_at TIMESTAMP WITH TIME ZONE,
        assigned_to TEXT
      );

      -- Enable Row Level Security
      ALTER TABLE public.bug_reports ENABLE ROW LEVEL SECURITY;

      -- Create policies
      -- Allow anyone to insert bug reports
      CREATE POLICY IF NOT EXISTS "Allow anyone to insert bug reports"
        ON public.bug_reports
        FOR INSERT
        TO public
        WITH CHECK (true);

      -- Allow authenticated users to view bug reports
      CREATE POLICY IF NOT EXISTS "Allow authenticated users to view bug reports"
        ON public.bug_reports
        FOR SELECT
        TO authenticated
        USING (true);

      -- Allow authenticated users to update bug reports
      CREATE POLICY IF NOT EXISTS "Allow authenticated users to update bug reports"
        ON public.bug_reports
        FOR UPDATE
        TO authenticated
        USING (true);

      -- Allow authenticated users to delete bug reports
      CREATE POLICY IF NOT EXISTS "Allow authenticated users to delete bug reports"
        ON public.bug_reports
        FOR DELETE
        TO authenticated
        USING (true);

      -- Grant permissions
      GRANT ALL ON public.bug_reports TO authenticated;
      GRANT ALL ON public.bug_reports TO service_role;
    `

    // Execute the SQL
    const { error } = await supabase.rpc("exec_sql", { sql })

    if (error) {
      console.error("Error creating bug_reports table:", error)

      // Try an alternative approach if the RPC method fails
      try {
        // Check if the table exists
        const { error: checkError } = await supabase.from("bug_reports").select("id").limit(1)

        if (checkError && checkError.message.includes("does not exist")) {
          // Table doesn't exist, create it using individual queries
          await supabase.query(`
            CREATE TABLE IF NOT EXISTS public.bug_reports (
              id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
              username TEXT NOT NULL,
              category TEXT NOT NULL,
              description TEXT NOT NULL,
              location TEXT,
              status TEXT NOT NULL DEFAULT 'pending',
              priority TEXT NOT NULL DEFAULT 'medium',
              created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
              updated_at TIMESTAMP WITH TIME ZONE,
              assigned_to TEXT
            )
          `)

          // Enable RLS
          await supabase.query(`ALTER TABLE public.bug_reports ENABLE ROW LEVEL SECURITY`)

          // Create policies
          await supabase.query(`
            CREATE POLICY "Allow anyone to insert bug reports"
              ON public.bug_reports
              FOR INSERT
              TO public
              WITH CHECK (true)
          `)

          await supabase.query(`
            CREATE POLICY "Allow authenticated users to view bug reports"
              ON public.bug_reports
              FOR SELECT
              TO authenticated
              USING (true)
          `)

          await supabase.query(`
            CREATE POLICY "Allow authenticated users to update bug reports"
              ON public.bug_reports
              FOR UPDATE
              TO authenticated
              USING (true)
          `)

          return NextResponse.json({
            success: true,
            message: "Bug reports table created successfully (alternative method)",
          })
        }
      } catch (altError) {
        console.error("Alternative method failed:", altError)
        return NextResponse.json({ error: "Failed to create bug_reports table" }, { status: 500 })
      }

      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ success: true, message: "Bug reports table created successfully" })
  } catch (err: any) {
    console.error("Error in create-bug-reports-table API:", err)
    return NextResponse.json({ error: err.message || "An unknown error occurred" }, { status: 500 })
  }
}
