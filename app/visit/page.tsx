import type { Metadata } from "next";
import { Hero } from "@/components/patterns/Hero";
import { Journey, ThresholdFrame } from "@/components/patterns/Journey";
import { Editorial } from "@/components/patterns/Editorial";
import { Collection } from "@/components/patterns/Collection";
import { CTA } from "@/components/patterns/CTA";
import {
  visitFamily,
  visitFlow,
  visitHero,
  visitInvitation,
  visitMoments,
  visitWelcome,
} from "@/content/visit/content";
import { visitImages } from "@/content/visit/images";
import { visitMetadata } from "@/content/visit/seo";

export const metadata: Metadata = visitMetadata;

export default function VisitPage() {
  return (
    <main id="main-content">
      <Journey emotion="confidence">
        <Hero
          eyebrow={visitHero.eyebrow}
          headline={visitHero.headline}
          lead={visitHero.lead}
          primaryCta={visitHero.primaryCta}
          secondaryCta={visitHero.secondaryCta}
          imageLabel={visitImages.hero.label}
        />

        <ThresholdFrame intensity="cinematic">
          <Editorial
            eyebrow={visitWelcome.eyebrow}
            title={visitWelcome.title}
            body={visitWelcome.body}
            imageLabel={visitImages.welcome.label}
            cinematic
          />
        </ThresholdFrame>

        <section id="what-to-expect" aria-label="What to expect when you visit S17">
          <Collection eyebrow="Your first Sunday" title="A visit you can actually walk through." items={visitMoments} />
        </section>

        <ThresholdFrame intensity="cinematic">
          <Editorial
            tone="ink"
            spacing="cinematic"
            eyebrow={visitFlow.eyebrow}
            title={visitFlow.title}
            body={visitFlow.body}
            imageLabel={visitImages.worship.label}
            cinematic
          />
        </ThresholdFrame>

        <Editorial
          tone="white"
          spacing="cinematic"
          eyebrow={visitFamily.eyebrow}
          title={visitFamily.title}
          body={visitFamily.body}
          imageLabel={visitImages.family.label}
          cinematic
        />

        <CTA
          eyebrow={visitInvitation.eyebrow}
          title={visitInvitation.title}
          body={visitInvitation.body}
          primaryCta={visitInvitation.primaryCta}
          secondaryCta={visitInvitation.secondaryCta}
        />
      </Journey>
    </main>
  );
}
