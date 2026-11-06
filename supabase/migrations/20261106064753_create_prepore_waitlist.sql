/*
# Create Prepore waitlist storage

1. New Tables
- `prepore_waitlist` stores only the early-access details requested by the Prepore website.
- `email` is the required contact field and is unique to avoid duplicate signups.
- `first_name`, `study_year`, and `preferred_language` are optional context fields.
- `consent` records the required agreement to receive early-access and product updates.
- `created_at` records when the signup was submitted.

2. Security
- Row Level Security is enabled on the table.
- Anonymous and authenticated visitors may submit a waitlist entry.
- No public read, update, or delete access is granted.
- Insert access is limited to the listed signup columns; `created_at` remains database-managed.

3. Important Notes
- This is a single-tenant public signup form and does not require accounts.
- The website uses this table as the verified free persistence option instead of claiming an unverified Google Sheets connection.
*/

CREATE TABLE IF NOT EXISTS public.prepore_waitlist (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text NOT NULL UNIQUE,
  first_name text,
  study_year text,
  preferred_language text,
  consent boolean NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT prepore_waitlist_email_length CHECK (char_length(email) BETWEEN 3 AND 320),
  CONSTRAINT prepore_waitlist_consent_true CHECK (consent = true)
);

ALTER TABLE public.prepore_waitlist ENABLE ROW LEVEL SECURITY;

REVOKE ALL ON public.prepore_waitlist FROM anon, authenticated;
GRANT INSERT (email, first_name, study_year, preferred_language, consent) ON public.prepore_waitlist TO anon, authenticated;

DROP POLICY IF EXISTS "Allow public waitlist submissions" ON public.prepore_waitlist;
CREATE POLICY "Allow public waitlist submissions"
ON public.prepore_waitlist
FOR INSERT
TO anon, authenticated
WITH CHECK (consent = true);
