import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { StoryReveal } from "./Journey";
import type { Cta } from "@/types/content";
import { cn } from "@/lib/cn";

interface CTAProps {
  eyebrow?: string;
  title: string;
  body: string;
  primaryCta: Cta;
  secondaryCta?: Cta;
  editorial?: boolean;
}

export function CTA({ eyebrow, title, body, primaryCta, secondaryCta, editorial = false }: CTAProps) {
  return (
    <Section tone="ink" spacing="cinematic">
      <StoryReveal className={editorial ? "max-w-[92rem]" : "max-w-[72rem]"}>
        {eyebrow ? <p className={cn("text-utility mb-8 text-[rgba(255,255,255,0.6)]", editorial && "mb-10 md:mb-14")}>{eyebrow}</p> : null}
        <h2 className={cn(
          "text-section text-balance",
          editorial && "max-w-[11ch] text-[clamp(3.75rem,10vw,10.5rem)] font-bold leading-[0.82] tracking-[-0.06em]",
        )}>{title}</h2>
        <p className={cn(
          "text-lead mt-8 max-w-reading text-[rgba(255,255,255,0.72)]",
          editorial && "mt-16 max-w-narrow text-body md:mt-24",
        )}>{body}</p>
        <div className={cn("mt-10 flex flex-col gap-3 sm:flex-row", editorial && "mt-12")}>
          <Button href={primaryCta.href} variant="inverse" size="lg">
            {primaryCta.label}
          </Button>
          {secondaryCta ? (
            <Button href={secondaryCta.href} variant="ghost" size="lg" className="text-[var(--color-white)] hover:bg-[rgba(255,255,255,0.12)]">
              {secondaryCta.label}
            </Button>
          ) : null}
        </div>
      </StoryReveal>
    </Section>
  );
}
