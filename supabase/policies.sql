-- Enable RLS on all tables
alter table public.profiles enable row level security;
alter table public.testimonials enable row level security;
alter table public.contacts enable row level security;

-- PROFILES
-- Public: Everyone can view profiles (for avatars etc)
create policy "Public profiles are viewable by everyone."
  on profiles for select
  using ( true );

-- Owner: Users can update their own profile
create policy "Users can insert their own profile."
  on profiles for insert
  with check ( auth.uid() = id );

create policy "Users can update own profile."
  on profiles for update
  using ( auth.uid() = id );

-- TESTIMONIALS
-- Public: Everyone can view APPROVED testimonials
create policy "Testimonials viewable by everyone if approved"
  on testimonials for select
  using ( is_approved = true );

-- Public: Anyone can insert a testimonial (Subject to moderation)
create policy "Anyone can submit a testimonial"
  on testimonials for insert
  with check ( true );

-- CONTACTS
-- Public: Anyone can submit contact form
create policy "Anyone can insert contact form"
  on contacts for insert
  with check ( true );

-- Admin: Only admins can view contact submissions (You'd need an admin role/claim logic)
-- For now, allowing authenticated users to read (assuming only you are auth'd as admin initially)
create policy "Auth users view contacts"
  on contacts for select
  using ( auth.role() = 'authenticated' );
