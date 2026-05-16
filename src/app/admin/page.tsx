import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { AdminApp } from "@/components/admin/AdminApp";

export const metadata: Metadata = {
  title: "Admin · Leads",
  robots: { index: false, follow: false },
};

export default function AdminPage() {
  return (
    <Section spacing="lg">
      <Container>
        <AdminApp />
      </Container>
    </Section>
  );
}
