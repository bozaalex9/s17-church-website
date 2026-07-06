import { routes } from "@/lib/routes";
import type { Cta, HomeChapter } from "@/types/content";

export const homeOrientation = {
  eyebrow: "Welcome to S17",
  title: "A church for people being formed by grace and sent with love.",
  body:
    "S17 exists to help ordinary people behold Christ, believe the gospel, become disciples, and bless the city.",
};

export const homeChapters: HomeChapter[] = [
  {
    eyebrow: "We gather",
    title: "We come together around Christ.",
    body:
      "Sundays are the family table of S17: worship, Word, prayer, sacraments, and welcome.",
    href: routes.gather,
    imageLabel: "Documentary photo direction: S17 worship gathering",
  },
  {
    eyebrow: "We grow",
    title: "We are formed in homes, habits, and community.",
    body:
      "Friends Houses and next steps help people move from attendance into discipleship.",
    href: routes.grow,
    imageLabel: "Documentary photo direction: Friends House table fellowship",
  },
  {
    eyebrow: "We go",
    title: "We love our neighbors and bless the city.",
    body:
      "Mission is not a program at the edge of the church. It is the shape of a sent people.",
    href: routes.go,
    imageLabel: "Documentary photo direction: S17 serving Miami",
  },
];

export const homeInvitation = {
  eyebrow: "Your next step",
  title: "Come and see what God is building.",
  body:
    "Plan your visit, meet the family, and take one clear next step toward life with Jesus and S17.",
  primaryCta: { label: "Plan Your Visit", href: routes.visit, variant: "primary" } satisfies Cta,
  secondaryCta: { label: "Watch on YouTube", href: "https://www.youtube.com/", variant: "secondary" } satisfies Cta,
};
