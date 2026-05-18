# Avoy Chandra Das Portfolio

Professional portfolio for **Avoy Chandra Das**, an AI Automation and Full-Stack Web Developer focused on business websites, lead systems, admin dashboards, and practical automation tools.

[View Live Portfolio](https://avoy-portfolio.vercel.app/)

This project is more than a static portfolio. It is built as a production-style Next.js application that demonstrates frontend quality, backend integration, lead capture, protected internal tooling, and client-facing case studies.

## Overview

The portfolio presents services, project case studies, technical skills, resume details, and contact paths in one cohesive site. It also includes working product features that show how similar systems can be built for small businesses and service providers:

- Lead capture through a Supabase-backed contact form.
- A protected admin dashboard for reviewing and managing leads.
- CSV export for handoff to spreadsheets, CRMs, or client workflows.
- A rule-based Automation Audit tool that turns business inputs into practical automation recommendations.

## Main Features

- **Next.js portfolio** with App Router, TypeScript, responsive pages, SEO metadata, sitemap, and robots configuration.
- **3 case study projects** covering lead management, business dashboards, and CRM-style workflows.
- **Supabase contact form** with server-side validation and database insertion.
- **Protected admin leads dashboard** for viewing, searching, filtering, updating status, and adding notes.
- **CSV export** for lead data and downstream business workflows.
- **Automation Audit tool** that scores workflow inputs and stores qualified audit submissions.
- **Resume page with PDF download** at `/resume`.
- **Tech stack icons** rendered through reusable UI/data structures for a scannable skills section.

## Tech Stack

| Area | Tools |
| --- | --- |
| Framework | Next.js 16, React 19, TypeScript |
| Styling | Tailwind CSS v4, custom design tokens |
| UI and motion | Framer Motion, Lucide React, React Icons |
| Forms and validation | React Hook Form, Zod, `@hookform/resolvers` |
| Database and backend | Supabase, Supabase SSR, Supabase JS |
| Email-ready workflow | Resend, React Email |
| Analytics and monitoring | Vercel Analytics, Vercel Speed Insights, Sentry-ready configuration |
| Deployment | Vercel |

## Architecture Overview

```text
src/
  app/
    page.tsx                  Home page
    projects/                 Case study listing and dynamic project pages
    services/                 Service positioning
    contact/                  Public contact page
    automation-audit/         Workflow audit tool
    resume/                   Resume page with PDF download
    admin/                    Protected admin UI
    api/
      contact/                Contact form submission API
      audit/                  Automation audit API
      admin/leads/            Protected lead read/update/export APIs

  components/
    home/                     Homepage sections
    contact/                  Contact form
    audit/                    Audit form experience
    admin/                    Admin dashboard UI
    layout/                   Navbar and footer
    ui/                       Reusable UI primitives

  data/                       Site, project, service, process, and tech stack content
  lib/
    admin/                    Admin auth and CSV helpers
    audit/                    Audit scoring logic
    email/                    Resend setup and email templates
    supabase/                 Browser, server, admin clients, and schema
    validations/              Zod schemas
  types/                      Shared TypeScript types
```

### Data Flow

1. Visitors submit the contact form or Automation Audit form.
2. API routes validate the payload with Zod.
3. Server-only Supabase admin access writes submissions to the database.
4. Admin API routes verify an access token before returning or updating leads.
5. The admin dashboard consumes those protected routes and can export leads as CSV.

## Environment Variables

Create `.env.local` in the project root. Do not commit it.

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
ADMIN_ACCESS_TOKEN=
```

Optional email and monitoring variables are also supported:

```env
RESEND_API_KEY=
RESEND_FROM="Avoy Chandra Das <hello@avoydas.com>"
RESEND_REPLY_TO=hello@avoydas.com
RESEND_NOTIFY_TO=hello@avoydas.com
NEXT_PUBLIC_SENTRY_DSN=
```

Supabase schema reference: `src/lib/supabase/schema.sql`.

## Local Setup

1. Install dependencies:

```bash
npm install
```

2. Create local environment variables:

```bash
cp .env.example .env.local
```

Then add the required Supabase and admin token values listed above.

3. Run the development server:

```bash
npm run dev
```

4. Open the app:

```text
http://localhost:3000
```

Useful scripts:

```bash
npm run build
npm run start
npm run lint
```

## Deployment on Vercel

1. Push the repository to GitHub, GitLab, or Bitbucket.
2. Import the project in Vercel.
3. Set the production environment variables in the Vercel project settings:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY`
   - `ADMIN_ACCESS_TOKEN`
4. Add optional Resend and monitoring variables if those services are enabled.
5. Deploy with the default Vercel Next.js settings.

After deployment, test the public contact flow, Automation Audit flow, admin login, lead update actions, and CSV export.

## Security Notes

- `SUPABASE_SERVICE_ROLE_KEY` must stay server-only. Never expose it through client components, public variables, or browser code.
- Admin API routes are protected with `ADMIN_ACCESS_TOKEN`.
- `.env.local` must not be committed.
- Public Supabase values use the `NEXT_PUBLIC_` prefix; private keys do not.
- Rotate `ADMIN_ACCESS_TOKEN` and Supabase keys if they are ever exposed.

## Screenshots

Add current production screenshots here as the UI evolves.

| Page | Screenshot |
| --- | --- |
| Home | `public/screenshots/home.png` |
| Case Studies | `public/screenshots/projects.png` |
| Automation Audit | `public/screenshots/automation-audit.png` |
| Admin Leads Dashboard | `public/screenshots/admin-leads.png` |
| Resume | `public/screenshots/resume.png` |

## Future Improvements

- Add real production screenshots to this README.
- Add automated tests for form validation, audit scoring, and protected admin API behavior.
- Add Supabase Auth or another session-based admin authentication layer if the dashboard grows beyond a single-owner workflow.
- Add richer email templates for contact and audit follow-up.
- Add lead notifications through email, Slack, or another client-preferred channel.
- Add more case studies as production client work becomes available.

## License

This is a personal portfolio project. Reuse of the code, branding, written content, or visual design should be discussed with the author.
