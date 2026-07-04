import type { Metadata } from "next";
import { Hero } from "@/components/patterns/Hero";
import { Journey, ParallaxFrame, ThresholdFrame } from "@/components/patterns/Journey";
import { Editorial } from "@/components/patterns/Editorial";
import { Collection } from "@/components/patterns/Collection";
import { CTA } from "@/components/patterns/CTA";
import {
  cityPartnerships,
  goHero,
  goInvitation,
  goOpening,
  goPathway,
  volunteer,
} from "@/content/go/content";
import { goImages } from "@/content/go/images";
import { goMetadata } from "@/content/go/seo";

export const metadata: Metadata = goMetadata;

export default function GoPage() {
  return (
    <main id="main-content">
      <Journey emotion="mission">
        <Hero
          eyebrow={goHero.eyebrow}
          headline={goHero.headline}
          lead={goHero.lead}
          primaryCta={goHero.primaryCta}
          secondaryCta={goHero.secondaryCta}
          imageLabel={goImages.hero.label}
        />

        <section id="mission" aria-label="The mission of S17 Church">
          <ThresholdFrame intensity="cinematic">
            <Editorial
              tone="paper"
              spacing="cinematic"
              eyebrow={goOpening.eyebrow}
              title={goOpening.title}
              body={goOpening.body}
              imageLabel={goImages.opening.label}
              cinematic
            />
          </ThresholdFrame>
        </section>

        <section id="everyday-mission" aria-label="Ways S17 goes in everyday mission">
          <Collection eyebrow="Sent together" title="We serve. We love the city. We go every day." items={goPathway} />
        </section>

        <section id="partnerships" aria-label="S17 community partnerships">
          <ParallaxFrame depth="dramatic">
            <Editorial
              tone="ink"
              spacing="cinematic"
              eyebrow={cityPartnerships.eyebrow}
              title={cityPartnerships.title}
              body={cityPartnerships.body}
              imageLabel={goImages.partnerships.label}
              cinematic
            />
          </ParallaxFrame>
        </section>

        <section id="volunteer" aria-label="Volunteer opportunities at S17">
          <ThresholdFrame intensity="cinematic">
            <Editorial
              tone="white"
              spacing="cinematic"
              eyebrow={volunteer.eyebrow}
              title={volunteer.title}
              body={volunteer.body}
              imageLabel={goImages.volunteer.label}
              cinematic
            />
          </ThresholdFrame>
        </section>

        <CTA
          eyebrow={goInvitation.eyebrow}
          title={goInvitation.title}
          body={goInvitation.body}
          primaryCta={goInvitation.primaryCta}
          secondaryCta={goInvitation.secondaryCta}
        />
      </Journey>
    </main>
  );
}
