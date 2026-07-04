import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <PageShell>
      <Section spacing="cinematic" containerWidth="reading">
        <p className="text-utility text-[var(--color-muted)]">404</p>
        <h1 className="text-section mt-6 text-balance">This page is not part of the S17 pathway.</h1>
        <p className="text-lead mt-8 text-[var(--color-muted)]">
          Return home or use the menu to continue through About, Gather, Grow, Go, and Give.
        </p>
        <div className="mt-10">
          <Button href="/">Return Home</Button>
        </div>
      </Section>
    </PageShell>
  );
}
