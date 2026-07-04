"use client";

import { useId, useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import type { Cta } from "@/types/content";

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
  const ref = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const opacity = useTransform(scrollYProgress, [0, 0.84], [1, 0.58]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -72]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen overflow-hidden bg-[var(--color-ink)] text-[var(--color-white)]"
      aria-labelledby={titleId}
    >
      <motion.div
        aria-hidden="true"
        style={reduceMotion ? undefined : { scale, opacity }}
        className="absolute inset-0 transform-gpu bg-[radial-gradient(circle_at_50%_38%,rgba(255,255,255,0.18),rgba(255,255,255,0.04)_32%,rgba(0,0,0,0.9)_72%)] will-change-transform"
      />
      <div
        role="img"
        aria-label={imageLabel}
        className="absolute inset-0 opacity-45 mix-blend-screen [background-image:linear-gradient(135deg,rgba(255,255,255,.08),rgba(0,0,0,.38)),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px)] [background-size:auto,72px_72px,72px_72px]"
      />
      <Container width="wide" className="relative flex min-h-screen items-end pb-[clamp(3rem,8vw,7rem)] pt-32">
        <motion.div
          style={reduceMotion ? undefined : { y }}
          initial={reduceMotion ? false : { opacity: 0, y: 32 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-[78rem] transform-gpu will-change-transform"
        >
          <p className="text-utility mb-8 text-[rgba(255,255,255,0.72)]">{eyebrow}</p>
          <h1 id={titleId} className="text-hero text-balance">
            {headline}
          </h1>
          <p className="text-lead mt-8 max-w-reading text-[rgba(255,255,255,0.78)]">{lead}</p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button href={primaryCta.href} variant={primaryCta.variant ?? "inverse"} size="lg">
              {primaryCta.label}
            </Button>
            {secondaryCta ? (
              <Button href={secondaryCta.href} variant={secondaryCta.variant ?? "ghost"} size="lg" className="text-[var(--color-white)] hover:bg-[rgba(255,255,255,0.12)]">
                {secondaryCta.label}
              </Button>
            ) : null}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
