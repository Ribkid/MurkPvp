-- Create staff table
CREATE TABLE IF NOT EXISTS staff (
  id UUID PRIMARY KEY,
  username TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  role TEXT NOT NULL CHECK (role IN ('admin', 'moderator', 'helper')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  last_sign_in TIMESTAMP WITH TIME ZONE
);

-- Create bug reports table
CREATE TABLE IF NOT EXISTS bug_reports (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  username TEXT NOT NULL,
  category TEXT NOT NULL,
  description TEXT NOT NULL,
  location TEXT,
  status TEXT NOT NULL CHECK (status IN ('pending', 'in-progress', 'resolved')) DEFAULT 'pending',
  priority TEXT NOT NULL CHECK (priority IN ('low', 'medium', 'high', 'critical')) DEFAULT 'medium',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  assigned_to UUID REFERENCES staff(id)
);

-- Create responses table for tracking responses to bug reports
CREATE TABLE IF NOT EXISTS responses (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  bug_report_id UUID REFERENCES bug_reports(id) ON DELETE CASCADE,
  staff_id UUID REFERENCES staff(id),
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create initial root user (Ribkid)
-- Note: In a real implementation, you would handle this through the application
-- This is just for reference
INSERT INTO staff (id, username, email, role, created_at)
VALUES 
  ('00000000-0000-0000-0000-000000000000', 'Ribkid', 'ribkid@murkcraft.com', 'admin', CURRENT_TIMESTAMP)
ON CONFLICT (email) DO NOTHING;
