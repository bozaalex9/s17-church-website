import type { Metadata } from "next";
import { Hero } from "@/components/patterns/Hero";
import { Journey, ParallaxFrame, ThresholdFrame } from "@/components/patterns/Journey";
import { Editorial } from "@/components/patterns/Editorial";
import { Collection } from "@/components/patterns/Collection";
import { CTA } from "@/components/patterns/CTA";
import { giveChurchCenter, giveHero, giveInvitation, giveStory, givingDetails } from "@/content/give/content";
import { giveImages } from "@/content/give/images";
import { giveMetadata } from "@/content/give/seo";

export const metadata: Metadata = giveMetadata;

export default function GivePage() {
  return (
    <main id="main-content">
      <Journey emotion="generosity">
        <Hero
          eyebrow={giveHero.eyebrow}
          headline={giveHero.headline}
          lead={giveHero.lead}
          primaryCta={giveHero.primaryCta}
          secondaryCta={giveHero.secondaryCta}
          imageLabel={giveImages.hero.label}
        />

        <section id="why-we-give" aria-label="Why S17 Church gives">
          <ThresholdFrame intensity="soft">
            <Editorial
              tone="paper"
              spacing="cinematic"
              eyebrow={giveStory.eyebrow}
              title={giveStory.title}
              body={giveStory.body}
              imageLabel={giveImages.story.label}
              cinematic
            />
          </ThresholdFrame>
        </section>

        <section id="church-center" aria-label="Church Center Giving implementation">
          <ParallaxFrame depth="subtle">
            <Editorial
              tone="ink"
              spacing="cinematic"
              eyebrow={giveChurchCenter.eyebrow}
              title={giveChurchCenter.title}
              body={giveChurchCenter.body}
              imageLabel={giveImages.churchCenter.label}
              cinematic
            />
          </ParallaxFrame>
        </section>

        <section id="giving-details" aria-label="Giving details">
          <Collection eyebrow="Giving at S17" title="A simple bridge to a secure giving experience." items={givingDetails} />
        </section>

        <CTA
          eyebrow={giveInvitation.eyebrow}
          title={giveInvitation.title}
          body={giveInvitation.body}
          primaryCta={giveInvitation.primaryCta}
          secondaryCta={giveInvitation.secondaryCta}
        />
      </Journey>
    </main>
  );
}
