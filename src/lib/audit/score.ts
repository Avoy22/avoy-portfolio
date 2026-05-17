import type {
  AuditInput,
  Bottleneck,
  BusinessType,
  Outcome,
  Volume,
} from "@/lib/validations/audit";

export type Complexity = "Low" | "Medium" | "High";

export type AuditResult = {
  score: number;
  band: "Foundational" | "Strong" | "Urgent";
  recommendedSystem: string;
  recommendedSlug:
    | "business-websites"
    | "lead-systems"
    | "business-dashboards"
    | "workflow-automation";
  features: string[];
  complexity: Complexity;
  summary: string;
};

const volumeScore: Record<Volume, number> = {
  "under-50": 8,
  "50-200": 16,
  "200-1000": 24,
  "1000-5000": 30,
  "5000-plus": 34,
};

const bottleneckScore: Record<Bottleneck, number> = {
  "lead-followup": 26,
  "data-entry": 28,
  "customer-support": 24,
  "order-processing": 26,
  reporting: 20,
  scheduling: 18,
  "content-generation": 22,
  other: 16,
};

const outcomeScore: Record<Outcome, number> = {
  "save-time": 14,
  "reduce-errors": 16,
  "increase-revenue": 18,
  "scale-team": 18,
  "improve-cx": 14,
};

const businessScore: Record<BusinessType, number> = {
  ecommerce: 8,
  agency: 6,
  "service-business": 6,
  saas: 8,
  "real-estate": 7,
  restaurant: 5,
  healthcare: 6,
  education: 5,
  other: 4,
};

const bottleneckToRecommendation: Record<
  Bottleneck,
  { slug: AuditResult["recommendedSlug"]; system: string; features: string[] }
> = {
  "lead-followup": {
    slug: "lead-systems",
    system: "Lead Management System",
    features: [
      "Typed inquiry form with validation and spam protection",
      "Supabase lead database with status & notes workflow",
      "Auto-routed email notifications to the right teammate",
      "Rule-based lead scoring & priority tagging",
      "Follow-up reminders and stale-lead alerts",
    ],
  },
  "data-entry": {
    slug: "workflow-automation",
    system: "Data Entry Automation Pipeline",
    features: [
      "Form-to-database capture replacing spreadsheet entry",
      "Webhook + scheduled sync between your existing tools",
      "Validation rules to catch malformed records at the edge",
      "Audit log of every automated change",
      "Slack / email alerts on exceptions",
    ],
  },
  "customer-support": {
    slug: "workflow-automation",
    system: "Support Inbox Triage System",
    features: [
      "Inbound ticket classification by topic & urgency",
      "Auto-drafted replies for the top 5 recurring questions",
      "Routing to the right teammate based on rules",
      "SLA timers with escalation alerts",
      "Weekly digest of unresolved issues",
    ],
  },
  "order-processing": {
    slug: "workflow-automation",
    system: "Order / Booking Automation",
    features: [
      "Order intake API with payment + inventory checks",
      "Auto-generated confirmations, invoices, and receipts",
      "Status sync between storefront, fulfilment, and CRM",
      "Exception queue for failed or flagged orders",
      "Daily reconciliation report",
    ],
  },
  reporting: {
    slug: "business-dashboards",
    system: "Live Business Dashboard",
    features: [
      "Unified data model across your sources",
      "KPI cards with week-over-week and month-over-month deltas",
      "Role-based access for owner / ops / sales views",
      "Scheduled email digests of key metrics",
      "CSV export for board / accountant reviews",
    ],
  },
  scheduling: {
    slug: "workflow-automation",
    system: "Scheduling & Coordination System",
    features: [
      "Self-serve booking with availability rules",
      "Auto-confirmations, reminders, and reschedule links",
      "Calendar sync (Google / Outlook) with conflict handling",
      "No-show flagging and follow-up sequences",
      "Capacity dashboard for the team",
    ],
  },
  "content-generation": {
    slug: "workflow-automation",
    system: "Content & Proposal Automation",
    features: [
      "Template library with merge-field personalisation",
      "Rule-based drafts from form inputs or CRM records",
      "Approval workflow before send",
      "Version history and reusable snippet blocks",
      "Send tracking and reply attribution",
    ],
  },
  other: {
    slug: "workflow-automation",
    system: "Custom Workflow Automation",
    features: [
      "Discovery workshop to map the current process",
      "Bespoke webhook + database pipeline",
      "Integration with the tools you already use",
      "Internal dashboard to monitor automated runs",
      "Documentation and team handoff",
    ],
  },
};

function complexityFor(volume: Volume, bottleneck: Bottleneck): Complexity {
  const heavy: Bottleneck[] = [
    "order-processing",
    "customer-support",
    "content-generation",
  ];
  const bigVolume: Volume[] = ["1000-5000", "5000-plus"];

  if (bigVolume.includes(volume) && heavy.includes(bottleneck)) return "High";
  if (bigVolume.includes(volume) || heavy.includes(bottleneck)) return "Medium";
  if (volume === "under-50" && bottleneck === "scheduling") return "Low";
  return "Medium";
}

function bandFor(score: number): AuditResult["band"] {
  if (score >= 75) return "Urgent";
  if (score >= 55) return "Strong";
  return "Foundational";
}

function summaryFor(band: AuditResult["band"], system: string): string {
  switch (band) {
    case "Urgent":
      return `Your workflow is leaving real revenue and time on the table. A ${system.toLowerCase()} would pay back fast.`;
    case "Strong":
      return `There's a clear, well-shaped automation opportunity here. A ${system.toLowerCase()} is the right next step.`;
    case "Foundational":
      return `You're early — automation will help, but the highest ROI is locking in the foundations first with a ${system.toLowerCase()}.`;
  }
}

export function scoreAudit(input: AuditInput): AuditResult {
  const volume = input.monthly_volume as Volume;
  const bottleneck = input.main_bottleneck as Bottleneck;
  const outcome = input.desired_outcome as Outcome;
  const business = input.business_type as BusinessType;

  const raw =
    volumeScore[volume] +
    bottleneckScore[bottleneck] +
    outcomeScore[outcome] +
    businessScore[business];

  const score = Math.max(0, Math.min(100, raw));
  const rec = bottleneckToRecommendation[bottleneck];
  const band = bandFor(score);
  const complexity = complexityFor(volume, bottleneck);

  return {
    score,
    band,
    recommendedSystem: rec.system,
    recommendedSlug: rec.slug,
    features: rec.features,
    complexity,
    summary: summaryFor(band, rec.system),
  };
}
