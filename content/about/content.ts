import type { Cta, HomeChapter } from "@/types/content";

export const aboutHero = {
  eyebrow: "About S17",
  headline: "Seen. Sanctified. Sent.",
  lead:
    "S17 Church is a family becoming a faithful witness in Miami — gathered by grace, renewed by truth, and sent with love.",
  primaryCta: { label: "Start with Visit", href: "/visit", variant: "inverse" } satisfies Cta,
  secondaryCta: { label: "Explore Our Beliefs", href: "#beliefs", variant: "ghost" } satisfies Cta,
};

export const aboutStory = {
  eyebrow: "Our story",
  title: "A church family being renewed for a new season of faithful witness.",
  body:
    "S17 carries the story of a local church in West Miami being renewed around the gospel, discipleship, hospitality, and mission. We are not trying to become impressive. We are asking God to make us faithful, clear, warm, and sent.",
};

export const aboutMission = {
  eyebrow: "Mission",
  title: "Make × Multiply disciples.",
  body:
    "We want to see people behold Christ, believe the gospel, become mature disciples, and bless the city. Our discipleship rhythm is simple: we gather, we grow, and we go.",
};

export const aboutValues: HomeChapter[] = [
  {
    eyebrow: "Revival",
    title: "We need God to do what only God can do.",
    body:
      "We pray for spiritual renewal that begins with repentance, dependence, worship, and love for our neighbors.",
    href: "#values",
    imageLabel: "A quiet prayer moment in the S17 church family.",
  },
  {
    eyebrow: "Reformation",
    title: "Truth gives the church clarity and courage.",
    body:
      "We are formed by Scripture, strengthened by historic doctrine, and committed to clarity in a confused age.",
    href: "#beliefs",
    imageLabel: "A Bible and notes in a discipleship gathering at S17.",
  },
  {
    eyebrow: "Renewal",
    title: "Grace makes ordinary people new together.",
    body:
      "We expect the gospel to renew homes, friendships, service, mercy, hospitality, and our witness in the city.",
    href: "/grow",
    imageLabel: "S17 people sharing life around a table.",
  },
];

export const leadership = {
  eyebrow: "Leadership",
  title: "Leaders serve the family. They do not replace the family.",
  body:
    "S17 leadership exists to shepherd, equip, protect, and mobilize the church. The goal is not platform. The goal is a healthy body where every member is being formed and sent.",
};

export const aboutInvitation = {
  eyebrow: "Next step",
  title: "The best way to understand S17 is to come and see.",
  body:
    "Read the story. Know the beliefs. Meet the people. Then take one simple next step into the life of the church.",
  primaryCta: { label: "Plan Your Visit", href: "/visit", variant: "inverse" } satisfies Cta,
  secondaryCta: { label: "Gather with Us", href: "/gather", variant: "ghost" } satisfies Cta,
};
