export const site = {
  name: "Avoy Das",
  shortName: "Avoy",
  role: "AI Automation & Full-Stack Web Engineer",
  headline: "Engineering AI-powered web systems that actually move the business forward.",
  subheadline:
    "I design and ship production-grade websites, dashboards, lead engines, and automation tools for service businesses, agencies, and fast-moving founders.",
  email: "hello@avoydas.com",
  location: "Remote · Available worldwide",
  availability: "Booking 1 new client engagement for this month",
  domain: "avoydas.com",
  url: "https://avoydas.com",
  ogImage: "/og.png",
  social: {
    github: "https://github.com/avoydas",
    linkedin: "https://www.linkedin.com/in/avoydas",
    x: "https://x.com/avoydas",
    email: "mailto:hello@avoydas.com",
  },
  nav: [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ],
  cta: {
    primary: { label: "Book a Strategy Call", href: "/contact" },
    secondary: { label: "View Case Studies", href: "/projects" },
  },
  stats: [
    { label: "Production systems shipped", value: "20+" },
    { label: "Avg. lead-form to inbox", value: "< 2s" },
    { label: "Industries served", value: "8" },
    { label: "Client retention", value: "92%" },
  ],
};

export type Site = typeof site;
