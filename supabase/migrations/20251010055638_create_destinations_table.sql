/*
  # Create destinations table for Indian travel destinations

  1. New Tables
    - `destinations`
      - `id` (uuid, primary key) - Unique identifier for each destination
      - `name` (text, not null) - Name of the destination
      - `description` (text, not null) - Short description highlighting what the place is famous for
      - `state` (text, not null) - State or region the destination belongs to
      - `region` (text, not null) - Geographic region (North, South, East, West, Central)
      - `image_url` (text, not null) - URL to the destination image
      - `category_tags` (text[], not null) - Array of category tags (hill station, beach, spiritual, etc.)
      - `created_at` (timestamptz) - Timestamp of creation
      
  2. Security
    - Enable RLS on `destinations` table
    - Add policy for public read access (destinations are public data)
    
  3. Indexes
    - Add index on state for filtering
    - Add index on region for filtering
    - Add GIN index on category_tags for array searches
*/

CREATE TABLE IF NOT EXISTS destinations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text NOT NULL,
  state text NOT NULL,
  region text NOT NULL CHECK (region IN ('North', 'South', 'East', 'West', 'Central')),
  image_url text NOT NULL,
  category_tags text[] NOT NULL DEFAULT '{}',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE destinations ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view destinations"
  ON destinations FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE INDEX IF NOT EXISTS idx_destinations_state ON destinations(state);
CREATE INDEX IF NOT EXISTS idx_destinations_region ON destinations(region);
CREATE INDEX IF NOT EXISTS idx_destinations_category_tags ON destinations USING GIN(category_tags);