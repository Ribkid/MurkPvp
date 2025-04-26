-- Function to create the staff table if it doesn't exist
CREATE OR REPLACE FUNCTION create_staff_table_if_not_exists()
RETURNS void AS $$
BEGIN
    -- Check if the table exists
    IF NOT EXISTS (
        SELECT FROM pg_tables
        WHERE schemaname = 'public'
        AND tablename = 'staff'
    ) THEN
        -- Create the table
        CREATE TABLE public.staff (
            id UUID PRIMARY KEY,
            username TEXT NOT NULL,
            email TEXT UNIQUE NOT NULL,
            role TEXT NOT NULL DEFAULT 'helper',
            created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
            last_sign_in TIMESTAMP WITH TIME ZONE
        );

        -- Add RLS policies
        ALTER TABLE public.staff ENABLE ROW LEVEL SECURITY;

        -- Policy for authenticated users to view staff
        CREATE POLICY "Authenticated users can view staff"
            ON public.staff
            FOR SELECT
            TO authenticated
            USING (true);

        -- Policy for admins to manage staff
        CREATE POLICY "Admins can manage staff"
            ON public.staff
            USING (
                EXISTS (
                    SELECT 1 FROM public.staff
                    WHERE id = auth.uid() AND role = 'admin'
                )
            );
            
        -- Insert root admin if not exists
        INSERT INTO public.staff (id, username, email, role)
        VALUES 
            ('00000000-0000-0000-0000-000000000000', 'Ribkid', 'ribkid@murkcraft.com', 'admin')
        ON CONFLICT (email) DO NOTHING;
    END IF;
END;
$$ LANGUAGE plpgsql;
