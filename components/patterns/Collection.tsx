"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";
import type { CollectionItem } from "@/types/content";

interface CollectionProps {
  eyebrow: string;
  title: string;
  items: CollectionItem[];
}

export function Collection({ eyebrow, title, items }: CollectionProps) {
  const reduceMotion = useReducedMotion();

  return (
    <Section tone="white" spacing="cinematic">
      <div className="mb-16 max-w-[58rem]">
        <p className="text-utility mb-6 text-[var(--color-muted)]">{eyebrow}</p>
        <h2 className="text-section text-balance">{title}</h2>
      </div>
      <motion.div
        initial={reduceMotion ? false : "hidden"}
        whileInView={reduceMotion ? undefined : "visible"}
        viewport={{ once: true, amount: 0.18 }}
        variants={{ visible: { transition: { staggerChildren: 0.14 } }, hidden: {} }}
        className="grid gap-5 lg:grid-cols-3"
      >
        {items.map((item) => {
          const key = item.href ?? `${item.eyebrow}-${item.title}`;
          const card = (
            <Card className="group flex min-h-[34rem] flex-col justify-between overflow-hidden transition-transform duration-cinematic ease-cinematic hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:translate-y-0" padding="lg">
              <div>
                <p className="text-utility mb-7 text-[var(--color-bronze)]">{item.eyebrow}</p>
                <h3 className="text-subsection text-balance">{item.title}</h3>
                <p className="text-body mt-6 text-[var(--color-muted)]">{item.body}</p>
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
            <motion.div
              key={key}
              variants={{
                hidden: { opacity: 0, y: 38, scale: 0.985 },
                visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.72, ease: [0.16, 1, 0.3, 1] } },
              }}
              className="transform-gpu will-change-transform"
            >
              {item.href ? (
                <Link href={item.href} className="focus-ring block h-full">
                  {card}
                </Link>
              ) : (
                card
              )}
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
}
