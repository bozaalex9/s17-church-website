import type { ReactNode } from "react";
import { Section } from "@/components/layout/Section";
import { StoryReveal, ParallaxFrame } from "./Journey";
import { cn } from "@/lib/cn";

interface EditorialProps {
  eyebrow?: string;
  title: string;
  body?: string;
  children?: ReactNode;
  tone?: "paper" | "ink" | "white";
  spacing?: "sm" | "md" | "lg" | "cinematic";
  align?: "left" | "center";
  imageLabel?: string;
  cinematic?: boolean;
}

export function Editorial({
  eyebrow,
  title,
  body,
  children,
  tone = "paper",
  spacing = "lg",
  align = "left",
  imageLabel,
  cinematic = false,
}: EditorialProps) {
  return (
    <Section tone={tone} spacing={spacing} containerWidth={cinematic ? "wide" : "page"}>
      <div className={cn("grid gap-12 lg:grid-cols-12 lg:items-end", align === "center" && "text-center")}>
        <StoryReveal className="lg:col-span-7">
          {eyebrow ? <p className="text-utility mb-6 text-[var(--color-muted)]">{eyebrow}</p> : null}
          <h2 className="text-section text-balance">{title}</h2>
        </StoryReveal>
        <StoryReveal delay={0.08} className={cn("lg:col-span-4 lg:col-start-9", align === "center" && "mx-auto max-w-reading lg:col-span-8 lg:col-start-3")}>
          {body ? <p className="text-lead text-pretty text-[var(--color-muted)]">{body}</p> : null}
          {children ? <div className={cn(body && "mt-8")}>{children}</div> : null}
        </StoryReveal>
      </div>
      {imageLabel ? (
        <ParallaxFrame depth={cinematic ? "dramatic" : "subtle"} className="mt-20">
          <div
            role="img"
            aria-label={imageLabel}
            className="aspect-[16/9] w-full bg-[linear-gradient(135deg,rgba(17,17,17,.08),rgba(17,17,17,.22)),linear-gradient(90deg,rgba(17,17,17,.12)_1px,transparent_1px)] [background-size:auto,64px_64px]"
          />
        </ParallaxFrame>
      ) : null}
    </Section>
  );
}
