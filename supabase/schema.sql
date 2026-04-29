-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- USERS PROFILE (Extends Supabase Auth)
create table public.profiles (
  id uuid references auth.users not null primary key,
  email text,
  full_name text,
  avatar_url text,
  updated_at timestamp with time zone,
  
  constraint username_length check (char_length(full_name) >= 3)
);

-- TESTIMONIALS
create table public.testimonials (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references public.profiles(id), -- Optional link to user
  name text not null,
  email text,
  feedback text not null,
  rating integer default 5 check (rating >= 1 and rating <= 5),
  role text, -- e.g. "CEO at TechCorp"
  company text,
  is_approved boolean default false, -- Moderation
  created_at timestamp with time zone default timezone('utc'::text, now())
);

-- CONTACT FORM SUBMISSIONS
create table public.contacts (
    id uuid default uuid_generate_v4() primary key,
    name text not null,
    email text not null,
    message text not null,
    status text default 'new', -- new, read, replied
    created_at timestamp with time zone default timezone('utc'::text, now())
);
