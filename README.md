# Avoy Das — Portfolio

Premium engineering portfolio and business landing site for **Avoy Das**, AI Automation & Full-Stack Web Engineer.

Built as a production-grade frontend that doubles as proof-of-work: it ships with a real lead engine architecture (Supabase-ready, Resend-ready, admin dashboard) so the same patterns power the live site **and** every client project.

---

## Stack

- **Next.js 16** (App Router, React 19, TypeScript)
- **Tailwind CSS v4** with a custom dark design system
- **Framer Motion** for subtle, purposeful animation
- **Lucide React** for iconography
- **Zod** + **React Hook Form** + `@hookform/resolvers`
- **Supabase** (`@supabase/ssr`, `@supabase/supabase-js`) — server- and browser-safe clients
- **Resend** + `react-email` — transactional email
- **Vercel** Analytics + Speed Insights, **Sentry** ready
- **Deploy**: Vercel

---

## Pages

| Route                       | Purpose                                                   |
| --------------------------- | --------------------------------------------------------- |
| `/`                         | Premium home: hero, featured projects, services, tech, process, about, CTA |
| `/projects`                 | Listing of all case studies                               |
| `/projects/[slug]`          | Individual project case study (problem, solution, outcomes, metrics, gallery) |
| `/services`                 | Six engagement types with deliverables and pricing anchors |
| `/contact`                  | Contact page with validated, accessible form              |
| `/admin/leads`              | Internal leads dashboard (search, filter, status, notes, CSV export) |

`/sitemap.xml` and `/robots.txt` are generated from `src/app/sitemap.ts` and `src/app/robots.ts`.

---

## Project structure

```
src/
├── app/
│   ├── layout.tsx            # Root layout, metadata, OG, navbar + footer
│   ├── page.tsx              # Home
│   ├── globals.css           # Design tokens & utilities (glass, grid-bg, gradients)
│   ├── not-found.tsx
│   ├── sitemap.ts
│   ├── robots.ts
│   ├── projects/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx   # Dynamic case study
│   ├── services/page.tsx
│   ├── contact/page.tsx
│   └── admin/
│       ├── layout.tsx
│       ├── page.tsx          # Redirects to /admin/leads
│       └── leads/page.tsx
│
├── components/
│   ├── layout/               # Navbar, Footer
│   ├── ui/                   # Button, Container, Section, GlassCard, Badge,
│   │                         # SectionHeader, Input, Reveal
│   ├── home/                 # Hero, FeaturedProjects, Services, TechStack,
│   │                         # Process, About, ContactCTA
│   ├── contact/              # ContactForm
│   └── admin/                # LeadStats, LeadsTable (with drawer + CSV export)
│
├── data/
│   ├── site.ts               # Site identity, nav, social, stats
│   ├── projects.ts           # Case study data
│   ├── services.ts           # Engagements & deliverables
│   ├── techStack.ts          # Categorized tech stack
│   ├── process.ts            # 4-stage engagement process
│   └── leads.ts              # Mock leads (swap for Supabase query)
│
├── lib/
│   ├── utils.ts              # cn(), date helpers
│   ├── supabase/
│   │   ├── client.ts         # Browser client
│   │   ├── server.ts         # Server client (App Router-safe)
│   │   └── schema.sql        # Initial leads table + RLS policies
│   ├── email/
│   │   ├── resend.ts         # Lazy-init Resend client
│   │   └── templates.ts      # Plain-text templates (team + auto-reply)
│   └── validations/
│       ├── contact.ts        # Zod schema for contact form
│       └── lead.ts           # Zod schema for stored leads
│
└── types/
    └── index.ts              # Project, Service, Lead, ProcessStep, etc.
```

---

## Design system

The visual language is intentionally premium-SaaS: deep neutral background, layered glass cards, restrained gradients, strong typographic hierarchy, and motion that supports rather than distracts.

Custom Tailwind v4 utilities defined in `globals.css`:

- `glass` / `glass-strong` — layered translucent cards
- `text-gradient` / `text-gradient-brand` — heading treatments
- `grid-bg` — subtle technical grid background
- `ring-glow` — premium card glow
- `animate-shine` / `animate-float` — restrained motion accents

---

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Other scripts:

```bash
npm run build   # Production build
npm run start   # Run production build locally
npm run lint    # ESLint
```

---

## Environment variables

Copy `.env.example` to `.env.local` and fill in:

```
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=

RESEND_API_KEY=
RESEND_FROM="Avoy Das <hello@avoydas.com>"
RESEND_REPLY_TO=hello@avoydas.com
RESEND_NOTIFY_TO=hello@avoydas.com

NEXT_PUBLIC_SENTRY_DSN=
```

The frontend builds and runs without these set — the contact form falls back to a simulated submit, and the admin dashboard uses `src/data/leads.ts`.

---

## Roadmap (post-frontend)

This first version ships a complete, production-ready frontend. The next phases (additive, no rewrites required):

1. **Wire `/api/contact`** → validate with Zod → insert into Supabase `leads` → send via Resend (team + auto-reply).
2. **Connect admin to Supabase** → replace `mockLeads` with `await supabase.from('leads').select(...)`.
3. **Add Supabase auth** → gate `/admin/*` behind a session.
4. **Real-time admin** → Supabase Realtime subscription for new leads.
5. **React-Email templates** → swap plain-text templates for branded React-Email components.

The schema, clients, validators, and types are already in place — each step above is a focused, isolated change.

---

## Deploying

Built for Vercel with zero config. Push to a Vercel-connected repo and the App Router build will pick up automatically. Set the environment variables above in the Vercel dashboard before the first deploy with backend features enabled.
