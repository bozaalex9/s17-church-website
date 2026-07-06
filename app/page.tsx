import type { Metadata } from "next";
import { HomeHero } from "@/components/home/HomeHero";
import { Journey, ThresholdFrame } from "@/components/patterns/Journey";
import { Editorial } from "@/components/patterns/Editorial";
import { Collection } from "@/components/patterns/Collection";
import { CTA } from "@/components/patterns/CTA";
import { Button } from "@/components/ui/Button";
import { SceneOverlap, ScrollScene } from "@/components/motion/EditorialMotion";
import {
  homeChapters,
  homeInvitation,
  homeOrientation,
} from "@/content/home/content";
import { homeImages } from "@/content/home/images";
import { homeMetadata } from "@/content/home/seo";

export const metadata: Metadata = homeMetadata;

export default function HomePage() {
  return (
    <main id="main-content">
      <Journey emotion="wonder">
        <HomeHero />

        <SceneOverlap>
          <ScrollScene emotion="welcome" overlap="cinematic">
            <ThresholdFrame intensity="cinematic">
              <Editorial
                eyebrow={homeOrientation.eyebrow}
                title={homeOrientation.title}
                body={homeOrientation.body}
                imageLabel={homeImages.welcome.label}
                cinematic
                editorial
              >
                <Button href="/visit" variant="primary" size="lg">
                  Plan Your Visit
                </Button>
              </Editorial>
            </ThresholdFrame>
          </ScrollScene>
        </SceneOverlap>

        <ScrollScene emotion="belonging" overlap="soft">
          <Collection eyebrow="The S17 pathway" title="We gather. We grow. We go." items={homeChapters} editorial />
        </ScrollScene>

        <ScrollScene emotion="invitation" overlap="cinematic">
          <CTA
            eyebrow={homeInvitation.eyebrow}
            title={homeInvitation.title}
            body={homeInvitation.body}
            primaryCta={homeInvitation.primaryCta}
            secondaryCta={homeInvitation.secondaryCta}
            editorial
          />
        </ScrollScene>
      </Journey>
    </main>
  );
}
