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
