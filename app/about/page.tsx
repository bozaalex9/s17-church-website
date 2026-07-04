import type { Metadata } from "next";
import { Hero } from "@/components/patterns/Hero";
import { Journey, ParallaxFrame, ThresholdFrame } from "@/components/patterns/Journey";
import { Editorial } from "@/components/patterns/Editorial";
import { Collection } from "@/components/patterns/Collection";
import { CTA } from "@/components/patterns/CTA";
import { aboutHero, aboutInvitation, aboutMission, aboutStory, aboutValues, leadership } from "@/content/about/content";
import { aboutImages } from "@/content/about/images";
import { beliefs, beliefsIntro, confessions } from "@/content/about/beliefs";
import { aboutMetadata } from "@/content/about/seo";

export const metadata: Metadata = aboutMetadata;

export default function AboutPage() {
  return (
    <main id="main-content">
      <Journey emotion="trust">
        <Hero
          eyebrow={aboutHero.eyebrow}
          headline={aboutHero.headline}
          lead={aboutHero.lead}
          primaryCta={aboutHero.primaryCta}
          secondaryCta={aboutHero.secondaryCta}
          imageLabel={aboutImages.hero.label}
        />

        <section id="story" aria-label="The story of S17 Church">
          <ThresholdFrame intensity="soft">
            <Editorial
              tone="paper"
              spacing="cinematic"
              eyebrow={aboutStory.eyebrow}
              title={aboutStory.title}
              body={aboutStory.body}
              imageLabel={aboutImages.story.label}
              cinematic
            />
          </ThresholdFrame>
        </section>

        <section id="mission" aria-label="The mission of S17 Church">
          <ParallaxFrame depth="subtle">
            <Editorial
              tone="ink"
              spacing="cinematic"
              eyebrow={aboutMission.eyebrow}
              title={aboutMission.title}
              body={aboutMission.body}
              imageLabel={aboutImages.mission.label}
              cinematic
            />
          </ParallaxFrame>
        </section>

        <section id="values" aria-label="The values of S17 Church">
          <Collection eyebrow="Values" title="Revival. Reformation. Renewal." items={aboutValues} />
        </section>

        <section id="beliefs" aria-label="Beliefs of S17 Church">
          <ThresholdFrame intensity="soft">
            <Editorial
              tone="white"
              spacing="cinematic"
              eyebrow={beliefsIntro.eyebrow}
              title={beliefsIntro.title}
              body={beliefsIntro.body}
              imageLabel={aboutImages.beliefs.label}
              cinematic
            />
          </ThresholdFrame>
          <Collection eyebrow="What we believe" title="Doctrine shapes the family." items={beliefs} />
          <Editorial
            tone="paper"
            spacing="lg"
            eyebrow={confessions.eyebrow}
            title={confessions.title}
            body={confessions.body}
          />
        </section>

        <section id="leadership" aria-label="Leadership at S17 Church">
          <Editorial
            tone="ink"
            spacing="cinematic"
            eyebrow={leadership.eyebrow}
            title={leadership.title}
            body={leadership.body}
            imageLabel={aboutImages.leadership.label}
            cinematic
          />
        </section>

        <CTA
          eyebrow={aboutInvitation.eyebrow}
          title={aboutInvitation.title}
          body={aboutInvitation.body}
          primaryCta={aboutInvitation.primaryCta}
          secondaryCta={aboutInvitation.secondaryCta}
        />
      </Journey>
    </main>
  );
}
