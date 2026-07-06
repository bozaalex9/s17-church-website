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
  editorial?: boolean;
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
  editorial = false,
}: EditorialProps) {
  return (
    <Section tone={tone} spacing={spacing} containerWidth={cinematic ? "wide" : "page"}>
      <div className={cn(
        "grid gap-12 lg:grid-cols-12 lg:items-end",
        align === "center" && "text-center",
        editorial && "gap-16 lg:block",
      )}>
        <StoryReveal className={cn("lg:col-span-7", editorial && "max-w-[88rem]")}>
          {eyebrow ? <p className={cn("text-utility mb-6 text-[var(--color-muted)]", editorial && "mb-10 md:mb-14")}>{eyebrow}</p> : null}
          <h2 className={cn(
            "text-section text-balance",
            editorial && "text-[clamp(3.25rem,10vw,10.5rem)] font-bold leading-[0.84] tracking-[-0.06em]",
          )}>{title}</h2>
        </StoryReveal>
        <StoryReveal delay={0.08} className={cn(
          "lg:col-span-4 lg:col-start-9",
          align === "center" && "mx-auto max-w-reading lg:col-span-8 lg:col-start-3",
          editorial && "mt-16 max-w-narrow lg:mt-24",
        )}>
          {body ? <p className={cn("text-lead text-pretty text-[var(--color-muted)]", editorial && "text-body")}>{body}</p> : null}
          {children ? <div className={cn(body && (editorial ? "mt-10" : "mt-8"))}>{children}</div> : null}
        </StoryReveal>
      </div>
      {imageLabel ? (
        <ParallaxFrame depth={cinematic ? "dramatic" : "subtle"} className={editorial ? "mt-24 md:mt-40" : "mt-20"}>
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
