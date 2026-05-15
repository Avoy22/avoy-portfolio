-- ─────────────────────────────────────────────────────────────
-- Avoy Portfolio · Supabase schema (initial)
-- Run this in the Supabase SQL editor to bootstrap the leads table.
-- ─────────────────────────────────────────────────────────────

create extension if not exists "pgcrypto";

create type lead_status as enum (
  'new',
  'contacted',
  'qualified',
  'won',
  'lost'
);

create table if not exists public.leads (
  id          uuid primary key default gen_random_uuid(),
  created_at  timestamptz not null default now(),
  name        text not null,
  email       text not null,
  company     text,
  budget      text,
  service     text,
  message     text not null,
  status      lead_status not null default 'new',
  source      text,
  notes       text
);

create index if not exists leads_created_at_idx on public.leads (created_at desc);
create index if not exists leads_status_idx     on public.leads (status);

-- Row level security: tighten before going live.
alter table public.leads enable row level security;

-- Public can insert (form submissions). Reads are admin-only.
create policy "public can insert leads"
  on public.leads
  for insert
  to anon
  with check (true);

create policy "authenticated can read leads"
  on public.leads
  for select
  to authenticated
  using (true);

create policy "authenticated can update leads"
  on public.leads
  for update
  to authenticated
  using (true)
  with check (true);
