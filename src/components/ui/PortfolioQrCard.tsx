import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const PORTFOLIO_URL = "https://avoy-portfolio.vercel.app/";
const QR_CODE_SRC = "/qr/portfolio-qr.png";

type PortfolioQrCardProps = {
  className?: string;
};

export function PortfolioQrCard({ className }: PortfolioQrCardProps) {
  return (
    <a
      href={PORTFOLIO_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "glass-card interactive-card group flex flex-col items-start gap-4 rounded-2xl p-5 sm:flex-row sm:items-center",
        className
      )}
      aria-label="Open Aboy Chandra Das portfolio"
    >
      <span className="shrink-0 rounded-2xl border border-white/10 bg-white p-2 shadow-[0_12px_30px_-18px_rgba(255,255,255,0.55)]">
        <Image
          src={QR_CODE_SRC}
          alt="QR code linking to Aboy Chandra Das portfolio"
          width={128}
          height={128}
          sizes="128px"
          className="h-24 w-24 rounded-lg sm:h-28 sm:w-28"
        />
      </span>
      <span className="min-w-0">
        <span className="block text-[10.5px] uppercase tracking-[0.16em] text-foreground-subtle">
          Portfolio
        </span>
        <span className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm font-medium text-white">
          Scan to view portfolio
          <ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-foreground-subtle transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
        </span>
      </span>
    </a>
  );
}
