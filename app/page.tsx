import type { Metadata } from "next";
import { Hero } from "@/components/patterns/Hero";
import { Journey, ThresholdFrame } from "@/components/patterns/Journey";
import { Editorial } from "@/components/patterns/Editorial";
import { Collection } from "@/components/patterns/Collection";
import { CTA } from "@/components/patterns/CTA";
import {
  homeChapters,
  homeHero,
  homeInvitation,
  homeOrientation,
  homeScripture,
} from "@/content/home/content";
import { homeImages } from "@/content/home/images";
import { homeMetadata } from "@/content/home/seo";

export const metadata: Metadata = homeMetadata;

export default function HomePage() {
  return (
    <main id="main-content">
      <Journey emotion="wonder">
        <Hero
          eyebrow={homeHero.eyebrow}
          headline={homeHero.headline}
          lead={homeHero.lead}
          primaryCta={homeHero.primaryCta}
          secondaryCta={homeHero.secondaryCta}
          imageLabel={homeImages.hero.label}
        />

        <ThresholdFrame intensity="cinematic">
          <Editorial
            eyebrow={homeOrientation.eyebrow}
            title={homeOrientation.title}
            body={homeOrientation.body}
            imageLabel={homeImages.welcome.label}
            cinematic
          />
        </ThresholdFrame>

        <Collection eyebrow="The S17 pathway" title="We gather. We grow. We go." items={homeChapters} />

        <Editorial
          tone="ink"
          spacing="cinematic"
          align="center"
          eyebrow={homeScripture.reference}
          title={`“${homeScripture.text}”`}
          body="The name S17 comes from Jesus' prayer in John 17:17. We are sanctified by the truth and sent into the world with love."
        />

        <CTA
          eyebrow={homeInvitation.eyebrow}
          title={homeInvitation.title}
          body={homeInvitation.body}
          primaryCta={homeInvitation.primaryCta}
          secondaryCta={homeInvitation.secondaryCta}
        />
      </Journey>
    </main>
  );
}
