"use client";

import { useId } from "react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import type { Cta } from "@/types/content";
import { CinematicHero, EditorialObject, RevealSequence } from "@/components/motion/EditorialMotion";

interface HeroProps {
  eyebrow: string;
  headline: string;
  lead: string;
  primaryCta: Cta;
  secondaryCta?: Cta;
  imageLabel: string;
}

export function Hero({ eyebrow, headline, lead, primaryCta, secondaryCta, imageLabel }: HeroProps) {
  const titleId = useId();

  return (
    <CinematicHero
      className="relative min-h-screen overflow-hidden bg-[var(--color-ink)] text-[var(--color-white)]"
      ariaLabelledby={titleId}
      media={
        <>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_38%,rgba(255,255,255,0.18),rgba(255,255,255,0.04)_32%,rgba(0,0,0,0.9)_72%)]" />
          <div
            role="img"
            aria-label={imageLabel}
            className="absolute inset-0 opacity-45 mix-blend-screen [background-image:linear-gradient(135deg,rgba(255,255,255,.08),rgba(0,0,0,.38)),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px)] [background-size:auto,72px_72px,72px_72px]"
          />
        </>
      }
    >
      <Container width="wide" className="relative flex min-h-screen items-end pb-[clamp(3rem,8vw,7rem)] pt-32">
        <RevealSequence energy="cinematic" className="max-w-[78rem]">
          <EditorialObject role="typography" energy="cinematic">
            <p className="text-utility mb-8 text-[rgba(255,255,255,0.72)]">{eyebrow}</p>
            <h1 id={titleId} className="text-hero text-balance">{headline}</h1>
          </EditorialObject>
          <EditorialObject role="copy" energy="cinematic">
            <p className="text-lead mt-8 max-w-reading text-[rgba(255,255,255,0.78)]">{lead}</p>
          </EditorialObject>
          <EditorialObject role="cta" energy="cinematic" className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button href={primaryCta.href} variant={primaryCta.variant ?? "inverse"} size="lg">
              {primaryCta.label}
            </Button>
            {secondaryCta ? (
              <Button href={secondaryCta.href} variant={secondaryCta.variant ?? "ghost"} size="lg" className="text-[var(--color-white)] hover:bg-[rgba(255,255,255,0.12)]">
                {secondaryCta.label}
              </Button>
            ) : null}
          </EditorialObject>
        </RevealSequence>
      </Container>
    </CinematicHero>
  );
}
