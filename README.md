# Aboy Chandra Das Portfolio

Professional portfolio for **Aboy Chandra Das**, focused on full-stack web development, business automation, lead systems, dashboards, and practical AI-assisted workflows.

[View Live Portfolio](https://avoy-portfolio.vercel.app/)

## Project Overview

Aboy Chandra Das Portfolio is a full-stack portfolio website built to showcase case studies, business systems, automation tools, and contact workflows in one production-style application.

The site is designed for recruiters, clients, senior engineers, and technology companies who want to evaluate both frontend presentation and backend implementation. It includes public portfolio pages, working lead capture flows, a protected admin dashboard, CSV export, and an Automation Audit tool that demonstrates how business inputs can be turned into structured automation recommendations.

## Main Features

- Modern Next.js portfolio with responsive pages and production deployment.
- 3 case study projects focused on business workflows, dashboards, and lead systems.
- Supabase-backed contact form for storing incoming leads.
- Protected admin leads dashboard for reviewing submissions.
- CSV export for moving lead data into spreadsheets or client workflows.
- Automation Audit tool for collecting workflow details and generating practical recommendations.
- Resume page with downloadable PDF.
- Tech stack icons for a scannable skills section.
- Responsive dark UI designed for desktop and mobile.
- Deployed on Vercel.

## Featured Projects

- **ServicePro Lead Engine**: A lead-generation and admin workflow concept for service businesses.
- **Business Expense & Sales Dashboard**: A dashboard experience for tracking expenses, sales, and business performance.
- **AI Lead Tracker CRM**: A CRM-style lead tracking system for managing prospects and follow-up status.
- **Automation Audit Tool**: A workflow assessment tool that collects business inputs and recommends automation opportunities.

## Tech Stack

| Area | Tools |
| --- | --- |
| Frontend | Next.js, React, TypeScript, Tailwind CSS, shadcn/ui |
| Backend | Next.js API Routes, Zod validation |
| Database | Supabase |
| Deployment | Vercel |
| Tools | GitHub, Resend, Google Sheets / Apps Script where relevant |

## Architecture Overview

The project follows a practical lead-capture and admin workflow:

```text
User submits contact/audit form
  -> API route validates input with Zod
  -> Supabase stores the lead or audit submission
  -> Protected admin dashboard reads leads
  -> Admin can update status, add notes, and export CSV
```

At a high level, public pages are handled by the Next.js app routes, form submissions are processed through server-side API routes, and lead data is stored in Supabase. Admin routes are protected so real lead data is not exposed publicly.

## Environment Variables

Create a `.env.local` file in the project root with the required values:

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
ADMIN_ACCESS_TOKEN=
```

Security note: do not commit `.env.local`. `SUPABASE_SERVICE_ROLE_KEY` must stay server-side only and must never be exposed through client components, public environment variables, or browser code.

## Local Setup

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Run linting:

```bash
npm run lint
```

Create a production build:

```bash
npm run build
```

The local development app usually runs at:

```text
http://localhost:3000
```

## Home Screen App Icon / PWA Metadata

The portfolio includes a Next.js web app manifest at `src/app/manifest.ts` and app icon assets for Add to Home Screen behavior in mobile browsers. The installable app metadata uses the "Aboy Systems Portfolio" name with dark, app-style icons stored under `public/icons`, plus `public/apple-touch-icon.png` for Apple touch icon support.

## Deployment

This portfolio is deployed on Vercel. To deploy a new instance, connect the repository to Vercel, keep the default Next.js build settings, and add the required environment variables in the Vercel project settings.

Required production variables:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
- `ADMIN_ACCESS_TOKEN`

After deployment, test the public contact form, Automation Audit flow, protected admin dashboard, lead status updates, notes, and CSV export.

## Security Notes

- `SUPABASE_SERVICE_ROLE_KEY` is server-side only.
- Admin routes require a bearer token.
- User input is validated with Zod before database writes.
- `.env.local` is ignored and should not be committed.
- Real admin data is not publicly exposed.

## Screenshots

Current screenshots are stored in `public/screenshots`.

![ServicePro homepage](public/screenshots/servicepro-home-full.png)
![ServicePro dashboard](public/screenshots/servicepro-dashboard.png)
![Business dashboard](public/screenshots/business-dashboard-full.png)
![AI Lead Tracker](public/screenshots/ai-lead-tracker-full.png)

Additional portfolio-level screenshots, such as homepage, resume, audit tool, and admin dashboard captures, can be added later for a stronger README presentation.

## Future Improvements

- More project case studies.
- Better demo mode for protected workflows.
- More test coverage for forms, API routes, and admin behavior.
- Improved analytics for traffic and lead conversion insights.
- Better README screenshots with current production UI captures.

## License

This is a personal portfolio project. Reuse of the code, branding, written content, or visual design should be discussed with the author.
