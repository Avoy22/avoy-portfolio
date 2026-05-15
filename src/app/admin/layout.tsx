import type { Metadata } from "next";
import Link from "next/link";
import { LayoutDashboard, Inbox, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "Admin",
  description: "Internal admin — leads dashboard.",
  robots: { index: false, follow: false },
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      <div className="sticky top-16 z-30 border-b border-white/6 bg-background/80 backdrop-blur-xl sm:top-18">
        <Container className="flex flex-col gap-4 py-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-linear-to-br from-accent via-accent-2 to-accent-3 text-black shadow-[0_8px_24px_-8px_rgba(109,140,255,0.55)]">
              <Sparkles className="h-4 w-4" strokeWidth={2.5} />
            </div>
            <div>
              <div className="text-[10.5px] uppercase tracking-[0.18em] text-foreground-subtle">
                Admin · Lead Engine
              </div>
              <div className="text-sm font-semibold tracking-tight text-white">
                Internal dashboard
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Badge tone="neutral" dot>
              Mock data
            </Badge>
            <nav className="flex items-center gap-1 rounded-full border border-white/10 bg-white/3 p-1 backdrop-blur">
              <Link
                href="/admin/leads"
                className="inline-flex items-center gap-2 rounded-full bg-white/8 px-3.5 py-1.5 text-xs font-medium text-white shadow-[0_1px_0_rgba(255,255,255,0.04)_inset]"
              >
                <Inbox className="h-3.5 w-3.5" />
                Leads
              </Link>
              <button
                disabled
                className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-medium text-foreground-subtle"
                title="Coming soon"
              >
                <LayoutDashboard className="h-3.5 w-3.5" />
                Pipeline
              </button>
            </nav>
          </div>
        </Container>
      </div>
      {children}
    </div>
  );
}
