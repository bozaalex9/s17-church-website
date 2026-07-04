import type { Cta, HomeChapter } from "@/types/content";

export const gatherHero = {
  eyebrow: "Gather",
  headline: "God gathers ordinary people around extraordinary grace.",
  lead:
    "Sunday worship is the center of S17’s life together. We gather to hear God’s Word, respond in prayer and song, receive grace, and be sent back into the city as witnesses of Jesus.",
  primaryCta: { label: "Plan Your Visit", href: "/visit", variant: "inverse" } satisfies Cta,
  secondaryCta: { label: "What Happens on Sunday", href: "#sunday", variant: "ghost" } satisfies Cta,
};

export const gatherOpening = {
  eyebrow: "The Lord’s Day",
  title: "We do not gather to perform. We gather because God calls his people near.",
  body:
    "The room is simple on purpose: Scripture, prayer, preaching, singing, sacraments, and a family learning to follow Jesus together. Worship at S17 is reverent, human, and warm.",
};

export const gatherOrder: HomeChapter[] = [
  {
    eyebrow: "God Calls",
    title: "We begin with grace, not achievement.",
    body:
      "Worship starts because God speaks first. We come with real lives, real burdens, and real need, trusting that Christ welcomes sinners by grace.",
    href: "#god-calls",
    imageLabel: "S17 people arriving and preparing for Sunday worship.",
  },
  {
    eyebrow: "God Speaks",
    title: "The Word gives the morning its center.",
    body:
      "Scripture shapes the service. The preaching of the Word is meant to comfort, confront, form, and send us with gospel clarity.",
    href: "#god-speaks",
    imageLabel: "An open Bible and worship gathering at S17 Church.",
  },
  {
    eyebrow: "We Respond",
    title: "Prayer and song become the language of faith.",
    body:
      "We sing, confess, pray, and respond together—not as a performance, but as a people being renewed by the grace of God.",
    href: "#we-respond",
    imageLabel: "S17 congregation responding in worship and prayer.",
  },
];

export const gatherSacraments = {
  eyebrow: "Means of grace",
  title: "Worship forms us slowly, faithfully, and together.",
  body:
    "S17 is committed to the ordinary means of grace. God uses the Word, prayer, sacraments, and the gathered church to make disciples who behold, believe, become, and bless.",
};

export const gatherFamily = {
  eyebrow: "Where friends become family",
  title: "The gathering does not end when the service ends.",
  body:
    "After worship, we make room for conversation, questions, encouragement, and the beginning of real friendship. You are not meant to walk alone.",
};

export const gatherInvitation = {
  eyebrow: "Come gather with us",
  title: "Start with one Sunday. We will help you take the next step.",
  body:
    "Plan your visit, meet someone by name, and experience the gathered life of S17 Church.",
  primaryCta: { label: "Plan Your Visit", href: "/visit", variant: "inverse" } satisfies Cta,
  secondaryCta: { label: "Grow with S17", href: "/grow", variant: "ghost" } satisfies Cta,
};
