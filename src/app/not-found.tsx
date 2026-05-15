import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <Container className="relative flex min-h-[70vh] flex-col items-center justify-center text-center">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 grid-bg [mask-image:radial-gradient(ellipse_50%_40%_at_50%_50%,black,transparent_75%)] opacity-30"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 animate-aurora rounded-full bg-[radial-gradient(circle_at_center,rgba(109,140,255,0.18),transparent_60%)] blur-3xl"
      />
      <div className="tabular text-[11px] font-mono uppercase tracking-[0.18em] text-foreground-subtle">
        404 · Not found
      </div>
      <h1 className="mt-5 text-balance text-4xl font-semibold tracking-[-0.03em] text-gradient sm:text-5xl">
        This page hasn&apos;t been built yet.
      </h1>
      <p className="mt-4 max-w-md text-foreground-muted">
        The link you followed might be outdated, or this page doesn&apos;t
        exist. Head back home and pick another door.
      </p>
      <Link
        href="/"
        className="group mt-8 inline-flex h-11 items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-5 text-sm text-white backdrop-blur transition hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/[0.06]"
      >
        <ArrowLeft className="h-4 w-4 transition group-hover:-translate-x-0.5" />
        Back to home
      </Link>
    </Container>
  );
}
