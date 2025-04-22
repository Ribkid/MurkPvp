-- Function to create the staff table if it doesn't exist
CREATE OR REPLACE FUNCTION create_staff_table_if_not_exists()
RETURNS void AS $$
BEGIN
  -- Check if the staff table exists
  IF NOT EXISTS (
    SELECT FROM pg_tables
    WHERE schemaname = 'public'
    AND tablename = 'staff'
  ) THEN
    -- Create the staff table
    CREATE TABLE public.staff (
      id UUID PRIMARY KEY,
      username TEXT NOT NULL UNIQUE,
      email TEXT NOT NULL UNIQUE,
      role TEXT NOT NULL CHECK (role IN ('admin', 'moderator', 'helper')),
      created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
      last_sign_in TIMESTAMP WITH TIME ZONE
    );

    -- Set up RLS policies
    ALTER TABLE public.staff ENABLE ROW LEVEL SECURITY;
    
    -- Create policy to allow authenticated users to read staff data
    CREATE POLICY "Allow authenticated users to read staff data"
      ON public.staff
      FOR SELECT
      TO authenticated
      USING (true);
      
    -- Create policy to allow staff to update their own data
    CREATE POLICY "Allow staff to update their own data"
      ON public.staff
      FOR UPDATE
      TO authenticated
      USING (auth.uid() = id);
  END IF;
  
  -- Check if the bug_reports table exists
  IF NOT EXISTS (
    SELECT FROM pg_tables
    WHERE schemaname = 'public'
    AND tablename = 'bug_reports'
  ) THEN
    -- Create the bug_reports table
    CREATE TABLE public.bug_reports (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      title TEXT NOT NULL,
      description TEXT NOT NULL,
      reporter_name TEXT NOT NULL,
      reporter_email TEXT,
      status TEXT NOT NULL DEFAULT 'open' CHECK (status IN ('open', 'in_progress', 'resolved', 'closed')),
      priority TEXT NOT NULL DEFAULT 'medium' CHECK (priority IN ('low', 'medium', 'high', 'critical')),
      created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
      updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
      assigned_to UUID REFERENCES public.staff(id)
    );
    
    -- Set up RLS policies
    ALTER TABLE public.bug_reports ENABLE ROW LEVEL SECURITY;
    
    -- Create policy to allow anyone to insert bug reports
    CREATE POLICY "Allow anyone to insert bug reports"
      ON public.bug_reports
      FOR INSERT
      TO anon
      WITH CHECK (true);
      
    -- Create policy to allow authenticated staff to read and update bug reports
    CREATE POLICY "Allow authenticated staff to read and update bug reports"
      ON public.bug_reports
      FOR ALL
      TO authenticated
      USING (true);
  END IF;
END;
$$ LANGUAGE plpgsql;
