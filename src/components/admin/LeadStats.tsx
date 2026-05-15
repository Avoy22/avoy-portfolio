import { Inbox, MessageSquare, Sparkles, Trophy, CircleX } from "lucide-react";
import type { Lead, LeadStatus } from "@/types";

const config: Record<
  LeadStatus | "all",
  {
    label: string;
    icon: typeof Inbox;
    tint: string;
    ring: string;
    bg: string;
  }
> = {
  all: {
    label: "Total leads",
    icon: Inbox,
    tint: "text-white",
    ring: "ring-white/10",
    bg: "from-white/6 to-white/2",
  },
  new: {
    label: "New",
    icon: Sparkles,
    tint: "text-accent-3",
    ring: "ring-accent-3/25",
    bg: "from-accent-3/15 to-accent-3/2",
  },
  contacted: {
    label: "Contacted",
    icon: MessageSquare,
    tint: "text-accent",
    ring: "ring-accent/25",
    bg: "from-accent/15 to-accent/2",
  },
  qualified: {
    label: "Qualified",
    icon: Sparkles,
    tint: "text-accent-2",
    ring: "ring-accent-2/25",
    bg: "from-accent-2/15 to-accent-2/2",
  },
  won: {
    label: "Won",
    icon: Trophy,
    tint: "text-success",
    ring: "ring-success/25",
    bg: "from-success/15 to-success/2",
  },
  lost: {
    label: "Lost",
    icon: CircleX,
    tint: "text-foreground-subtle",
    ring: "ring-white/10",
    bg: "from-white/4 to-white/1",
  },
};

const order: (LeadStatus | "all")[] = [
  "all",
  "new",
  "contacted",
  "qualified",
  "won",
];

export function LeadStats({ leads }: { leads: Lead[] }) {
  const counts: Record<string, number> = {
    all: leads.length,
    new: leads.filter((l) => l.status === "new").length,
    contacted: leads.filter((l) => l.status === "contacted").length,
    qualified: leads.filter((l) => l.status === "qualified").length,
    won: leads.filter((l) => l.status === "won").length,
    lost: leads.filter((l) => l.status === "lost").length,
  };

  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
      {order.map((key) => {
        const c = config[key];
        const Icon = c.icon;
        return (
          <div
            key={key}
            className={`glass-card relative overflow-hidden rounded-2xl p-5 transition hover:-translate-y-0.5 hover:border-white/15`}
          >
            <div
              aria-hidden
              className={`pointer-events-none absolute -top-12 -right-12 h-28 w-28 rounded-full bg-linear-to-br ${c.bg} blur-2xl opacity-70`}
            />
            <div className="relative flex items-start justify-between">
              <div>
                <div className="text-[10.5px] uppercase tracking-[0.16em] text-foreground-subtle">
                  {c.label}
                </div>
                <div
                  className={`tabular mt-2 text-3xl font-semibold tracking-tight ${c.tint}`}
                >
                  {counts[key]}
                </div>
              </div>
              <div
                className={`flex h-9 w-9 items-center justify-center rounded-xl bg-white/4 ring-1 ${c.ring} ${c.tint}`}
              >
                <Icon className="h-4 w-4" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
