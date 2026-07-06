"use client";

import Link from "next/link";
import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";
import type { CollectionItem } from "@/types/content";
import { cn } from "@/lib/cn";
import { EditorialObject, MotionCard, RevealSequence } from "@/components/motion/EditorialMotion";

interface CollectionProps {
  eyebrow: string;
  title: string;
  items: CollectionItem[];
  editorial?: boolean;
}

export function Collection({ eyebrow, title, items, editorial = false }: CollectionProps) {
  return (
    <Section tone="white" spacing="cinematic">
      <RevealSequence energy={editorial ? "cinematic" : "editorial"}>
        <EditorialObject role="typography" energy={editorial ? "cinematic" : "editorial"} className={editorial ? "mb-[clamp(6rem,14vw,14rem)] max-w-[92rem]" : "mb-16 max-w-[58rem]"}>
          <p className={cn("text-utility mb-6 text-[var(--color-muted)]", editorial && "mb-10 md:mb-14")}>{eyebrow}</p>
          <h2 className={cn(
            "text-section text-balance",
            editorial && "max-w-[12ch] text-[clamp(3.75rem,10vw,10.5rem)] font-bold leading-[0.82] tracking-[-0.06em]",
          )}>{title}</h2>
        </EditorialObject>
      </RevealSequence>
      <RevealSequence energy={editorial ? "high-energy" : "calm"} className="grid gap-5 lg:grid-cols-3">
        {items.map((item) => {
          const key = item.href ?? `${item.eyebrow}-${item.title}`;
          const card = (
            <Card className="group flex min-h-[34rem] flex-col justify-between overflow-hidden" padding="lg">
              <div>
                <p className="text-utility mb-7 text-[var(--color-bronze)]">{item.eyebrow}</p>
                <h3 className={cn("text-subsection text-balance", editorial && "font-semibold leading-[0.98] tracking-[-0.045em]")}>{item.title}</h3>
                <p className={cn("text-body mt-6 text-[var(--color-muted)]", editorial && "max-w-[32rem] text-support")}>{item.body}</p>
              </div>
              {item.imageLabel ? (
                <div
                  role="img"
                  aria-label={item.imageLabel}
                  className="mt-10 aspect-[8/10] w-full origin-center bg-[linear-gradient(135deg,rgba(17,17,17,.08),rgba(17,17,17,.24))] transition-transform duration-cinematic ease-cinematic group-hover:scale-[1.025] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                />
              ) : null}
            </Card>
          );

          return (
            <MotionCard key={key} energy={editorial ? "high-energy" : "calm"} className="h-full">
              {item.href ? (
                <Link href={item.href} className="focus-ring block h-full">
                  {card}
                </Link>
              ) : (
                card
              )}
            </MotionCard>
          );
        })}
      </RevealSequence>
    </Section>
  );
}
