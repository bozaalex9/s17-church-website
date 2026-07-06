import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import type { Cta } from "@/types/content";
import { cn } from "@/lib/cn";
import { EditorialObject, RevealSequence } from "@/components/motion/EditorialMotion";

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
      <RevealSequence energy={editorial ? "cinematic" : "calm"} className={editorial ? "max-w-[92rem]" : "max-w-[72rem]"}>
        <EditorialObject role="typography" energy={editorial ? "cinematic" : "calm"}>
          {eyebrow ? <p className={cn("text-utility mb-8 text-[rgba(255,255,255,0.6)]", editorial && "mb-10 md:mb-14")}>{eyebrow}</p> : null}
          <h2 className={cn(
            "text-section text-balance",
            editorial && "max-w-[11ch] text-[clamp(3.75rem,10vw,10.5rem)] font-bold leading-[0.82] tracking-[-0.06em]",
          )}>{title}</h2>
        </EditorialObject>
        <EditorialObject role="copy" energy={editorial ? "cinematic" : "calm"}>
          <p className={cn(
            "text-lead mt-8 max-w-reading text-[rgba(255,255,255,0.72)]",
            editorial && "mt-16 max-w-narrow text-body md:mt-24",
          )}>{body}</p>
        </EditorialObject>
        <EditorialObject role="cta" energy={editorial ? "cinematic" : "calm"} className={cn("mt-10 flex flex-col gap-3 sm:flex-row", editorial && "mt-12")}>
          <Button href={primaryCta.href} variant="inverse" size="lg">
            {primaryCta.label}
          </Button>
          {secondaryCta ? (
            <Button href={secondaryCta.href} variant="ghost" size="lg" className="text-[var(--color-white)] hover:bg-[rgba(255,255,255,0.12)]">
              {secondaryCta.label}
            </Button>
          ) : null}
        </EditorialObject>
      </RevealSequence>
    </Section>
  );
}
