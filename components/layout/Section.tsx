import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";
import { Container } from "./Container";

type SectionSpacing = "sm" | "md" | "lg" | "cinematic";
type SectionTone = "paper" | "ink" | "white";

const spacing: Record<SectionSpacing, string> = {
  sm: "section-y-sm",
  md: "section-y-md",
  lg: "section-y-lg",
  cinematic: "section-y-cinematic",
};

const tone: Record<SectionTone, string> = {
  paper: "bg-[var(--color-paper)] text-[var(--color-ink)]",
  ink: "bg-[var(--color-ink)] text-[var(--color-white)]",
  white: "bg-[var(--color-white)] text-[var(--color-ink)]",
};

interface SectionProps extends HTMLAttributes<HTMLElement> {
  spacing?: SectionSpacing;
  tone?: SectionTone;
  contained?: boolean;
  containerWidth?: "page" | "wide" | "reading" | "narrow";
}

export function Section({
  children,
  className,
  spacing: spacingKey = "md",
  tone: toneKey = "paper",
  contained = true,
  containerWidth = "page",
  ...props
}: SectionProps) {
  return (
    <section className={cn("section-contain", spacing[spacingKey], tone[toneKey], className)} {...props}>
      {contained ? <Container width={containerWidth}>{children}</Container> : children}
    </section>
  );
}
