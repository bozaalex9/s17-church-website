import type { Metadata } from "next";
import { Hero } from "@/components/patterns/Hero";
import { Journey, ParallaxFrame, ThresholdFrame } from "@/components/patterns/Journey";
import { Editorial } from "@/components/patterns/Editorial";
import { Collection } from "@/components/patterns/Collection";
import { CTA } from "@/components/patterns/CTA";
import {
  friendsHouses,
  growHero,
  growInvitation,
  growOpening,
  growPathway,
  nextSteps,
} from "@/content/grow/content";
import { growImages } from "@/content/grow/images";
import { growMetadata } from "@/content/grow/seo";

export const metadata: Metadata = growMetadata;

export default function GrowPage() {
  return (
    <main id="main-content">
      <Journey emotion="formation">
        <Hero
          eyebrow={growHero.eyebrow}
          headline={growHero.headline}
          lead={growHero.lead}
          primaryCta={growHero.primaryCta}
          secondaryCta={growHero.secondaryCta}
          imageLabel={growImages.hero.label}
        />

        <section id="connect" aria-label="Connect to the growth pathway at S17">
          <ThresholdFrame intensity="cinematic">
            <Editorial
              tone="paper"
              spacing="cinematic"
              eyebrow={growOpening.eyebrow}
              title={growOpening.title}
              body={growOpening.body}
              imageLabel={growImages.opening.label}
              cinematic
            />
          </ThresholdFrame>
        </section>

        <section id="next-steps" aria-label="The S17 discipleship pathway for growth">
          <Collection eyebrow="Formation pathway" title="We behold. We become. We bless." items={growPathway} />
        </section>

        <section id="friends-houses" aria-label="Friends Houses at S17">
          <ParallaxFrame depth="dramatic">
            <Editorial
              tone="ink"
              spacing="cinematic"
              eyebrow={friendsHouses.eyebrow}
              title={friendsHouses.title}
              body={friendsHouses.body}
              imageLabel={growImages.friendsHouses.label}
              cinematic
            />
          </ParallaxFrame>
        </section>

        <ThresholdFrame intensity="cinematic">
          <Editorial
            tone="white"
            spacing="cinematic"
            eyebrow={nextSteps.eyebrow}
            title={nextSteps.title}
            body={nextSteps.body}
            imageLabel={growImages.nextSteps.label}
            cinematic
          />
        </ThresholdFrame>

        <CTA
          eyebrow={growInvitation.eyebrow}
          title={growInvitation.title}
          body={growInvitation.body}
          primaryCta={growInvitation.primaryCta}
          secondaryCta={growInvitation.secondaryCta}
        />
      </Journey>
    </main>
  );
}
