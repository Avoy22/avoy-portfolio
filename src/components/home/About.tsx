import Image from "next/image";
import { MapPin, Mail } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { site } from "@/data/site";

export function About() {
  return (
    <Section>
      <Container>
        <SectionHeader eyebrow="About" title="About me" />

        <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-4">
            <div className="relative overflow-hidden rounded-2xl border border-white/12 bg-white/5 shadow-[0_1px_0_rgba(255,255,255,0.06)_inset,0_20px_60px_-20px_rgba(0,0,0,0.7)]">
              <Image
                src="/images/avoy-profile.jpg"
                alt={site.name}
                width={480}
                height={600}
                priority
                sizes="(max-width: 1024px) 240px, 360px"
                className="h-auto w-full object-cover"
              />
            </div>

            <div className="mt-5 flex flex-wrap items-center gap-3 text-[12.5px] text-foreground-muted">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/3 px-3 py-1.5">
                <MapPin className="h-3.5 w-3.5 text-foreground-subtle" />
                {site.location}
              </span>
            </div>
          </div>

          <div className="lg:col-span-8">
            <h3 className="text-balance text-[26px] font-semibold leading-[1.1] tracking-tight text-white sm:text-[32px] lg:text-[36px]">
              I&apos;m {site.name}, a web developer focused on building
              practical business systems.
            </h3>

            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-foreground-muted sm:text-[16.5px]">
              <p>
                I create websites, dashboards, lead tools, and automation
                workflows using modern web technologies. My goal is to help
                businesses replace manual work with simple, clean, and useful
                digital systems.
              </p>
            </div>

            <div className="mt-8">
              <Button href="/contact" variant="primary" size="md">
                <Mail className="h-4 w-4" />
                Contact Me
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
