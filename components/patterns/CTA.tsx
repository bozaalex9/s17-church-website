import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { StoryReveal } from "./Journey";
import type { Cta } from "@/types/content";

interface CTAProps {
  eyebrow?: string;
  title: string;
  body: string;
  primaryCta: Cta;
  secondaryCta?: Cta;
}

export function CTA({ eyebrow, title, body, primaryCta, secondaryCta }: CTAProps) {
  return (
    <Section tone="ink" spacing="cinematic">
      <StoryReveal className="max-w-[72rem]">
        {eyebrow ? <p className="text-utility mb-8 text-[rgba(255,255,255,0.6)]">{eyebrow}</p> : null}
        <h2 className="text-section text-balance">{title}</h2>
        <p className="text-lead mt-8 max-w-reading text-[rgba(255,255,255,0.72)]">{body}</p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
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
