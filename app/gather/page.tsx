import type { Metadata } from "next";
import { Hero } from "@/components/patterns/Hero";
import { Journey, ThresholdFrame } from "@/components/patterns/Journey";
import { Editorial } from "@/components/patterns/Editorial";
import { Collection } from "@/components/patterns/Collection";
import { CTA } from "@/components/patterns/CTA";
import {
  gatherFamily,
  gatherHero,
  gatherInvitation,
  gatherOpening,
  gatherOrder,
  gatherSacraments,
} from "@/content/gather/content";
import { gatherImages } from "@/content/gather/images";
import { gatherMetadata } from "@/content/gather/seo";

export const metadata: Metadata = gatherMetadata;

export default function GatherPage() {
  return (
    <main id="main-content">
      <Journey emotion="worship">
        <Hero
          eyebrow={gatherHero.eyebrow}
          headline={gatherHero.headline}
          lead={gatherHero.lead}
          primaryCta={gatherHero.primaryCta}
          secondaryCta={gatherHero.secondaryCta}
          imageLabel={gatherImages.hero.label}
        />

        <ThresholdFrame intensity="cinematic">
          <Editorial
            tone="paper"
            spacing="cinematic"
            eyebrow={gatherOpening.eyebrow}
            title={gatherOpening.title}
            body={gatherOpening.body}
            imageLabel={gatherImages.opening.label}
            cinematic
          />
        </ThresholdFrame>

        <section id="sunday" aria-label="The order and rhythm of Sunday worship at S17">
          <Collection eyebrow="Sunday rhythm" title="God calls. God speaks. We respond." items={gatherOrder} />
        </section>

        <ThresholdFrame intensity="cinematic">
          <Editorial
            tone="ink"
            spacing="cinematic"
            eyebrow={gatherSacraments.eyebrow}
            title={gatherSacraments.title}
            body={gatherSacraments.body}
            imageLabel={gatherImages.sacraments.label}
            cinematic
          />
        </ThresholdFrame>

        <Editorial
          tone="white"
          spacing="cinematic"
          eyebrow={gatherFamily.eyebrow}
          title={gatherFamily.title}
          body={gatherFamily.body}
          imageLabel={gatherImages.family.label}
          cinematic
        />

        <CTA
          eyebrow={gatherInvitation.eyebrow}
          title={gatherInvitation.title}
          body={gatherInvitation.body}
          primaryCta={gatherInvitation.primaryCta}
          secondaryCta={gatherInvitation.secondaryCta}
        />
      </Journey>
    </main>
  );
}
