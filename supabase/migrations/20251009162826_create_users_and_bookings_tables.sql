/*
  # Create Users and Bookings Tables

  ## 1. New Tables
    
    ### `profiles`
      - `id` (uuid, primary key) - References auth.users
      - `email` (text, unique, not null)
      - `full_name` (text, not null)
      - `mobile` (text, optional)
      - `is_host` (boolean, default false)
      - `profile_image` (text, optional)
      - `created_at` (timestamptz, default now())
      - `updated_at` (timestamptz, default now())

    ### `bookings`
      - `id` (uuid, primary key, auto-generated)
      - `user_id` (uuid, not null) - References profiles.id
      - `property_id` (text, not null)
      - `property_name` (text, not null)
      - `property_image` (text, optional)
      - `check_in` (date, not null)
      - `check_out` (date, not null)
      - `guests` (integer, not null)
      - `total_price` (decimal, not null)
      - `status` (text, default 'confirmed')
      - `created_at` (timestamptz, default now())

  ## 2. Security
    - Enable RLS on both tables
    - Add policies for authenticated users to:
      - Read their own profile data
      - Update their own profile data
      - Read their own bookings
      - Create new bookings for themselves

  ## 3. Important Notes
    - Profiles table syncs with Supabase auth.users
    - Bookings are linked to user profiles
    - All sensitive data protected by RLS
*/

-- Create profiles table
CREATE TABLE IF NOT EXISTS profiles (
  id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email text UNIQUE NOT NULL,
  full_name text NOT NULL,
  mobile text,
  is_host boolean DEFAULT false,
  profile_image text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create bookings table
CREATE TABLE IF NOT EXISTS bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  property_id text NOT NULL,
  property_name text NOT NULL,
  property_image text,
  check_in date NOT NULL,
  check_out date NOT NULL,
  guests integer NOT NULL DEFAULT 1,
  total_price decimal NOT NULL,
  status text DEFAULT 'confirmed',
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

-- Profiles policies
CREATE POLICY "Users can view own profile"
  ON profiles FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Users can update own profile"
  ON profiles FOR UPDATE
  TO authenticated
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);

CREATE POLICY "Users can insert own profile"
  ON profiles FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = id);

-- Bookings policies
CREATE POLICY "Users can view own bookings"
  ON bookings FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create own bookings"
  ON bookings FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own bookings"
  ON bookings FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete own bookings"
  ON bookings FOR DELETE
  TO authenticated
  USING (auth.uid() = user_id);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_bookings_user_id ON bookings(user_id);
CREATE INDEX IF NOT EXISTS idx_bookings_check_in ON bookings(check_in);
CREATE INDEX IF NOT EXISTS idx_profiles_email ON profiles(email);