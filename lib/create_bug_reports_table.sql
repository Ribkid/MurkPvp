-- Create a function to create the bug_reports table if it doesn't exist
CREATE OR REPLACE FUNCTION create_bug_reports_table_if_not_exists()
RETURNS void AS $$
BEGIN
  -- Check if the table exists
  IF NOT EXISTS (
    SELECT FROM pg_tables 
    WHERE schemaname = 'public' 
    AND tablename = 'bug_reports'
  ) THEN
    -- Create the table
    CREATE TABLE public.bug_reports (
      id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
      username TEXT NOT NULL,
      category TEXT NOT NULL,
      description TEXT NOT NULL,
      location TEXT,
      status TEXT NOT NULL DEFAULT 'pending',
      priority TEXT NOT NULL DEFAULT 'medium',
      created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
      updated_at TIMESTAMP WITH TIME ZONE,
      assigned_to UUID REFERENCES auth.users(id)
    );
    
    -- Add RLS policies
    ALTER TABLE public.bug_reports ENABLE ROW LEVEL SECURITY;
    
    -- Allow authenticated users to view all bug reports
    CREATE POLICY "Allow authenticated users to view bug reports"
      ON public.bug_reports
      FOR SELECT
      TO authenticated
      USING (true);
      
    -- Allow authenticated users to insert bug reports
    CREATE POLICY "Allow authenticated users to insert bug reports"
      ON public.bug_reports
      FOR INSERT
      TO authenticated
      WITH CHECK (true);
      
    -- Allow authenticated users to update bug reports
    CREATE POLICY "Allow authenticated users to update bug reports"
      ON public.bug_reports
      FOR UPDATE
      TO authenticated
      USING (true);
  END IF;
END;
$$ LANGUAGE plpgsql;
