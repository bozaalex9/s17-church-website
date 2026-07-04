import type { Cta, HomeChapter } from "@/types/content";

export const growHero = {
  eyebrow: "Grow",
  headline: "Formation happens when grace becomes a way of life.",
  lead:
    "S17 helps people grow as disciples of Jesus through ordinary practices, real friendship, honest accountability, and the steady renewal of God’s Word.",
  primaryCta: { label: "Find Your Next Step", href: "#next-steps", variant: "inverse" } satisfies Cta,
  secondaryCta: { label: "Explore Friends Houses", href: "#friends-houses", variant: "ghost" } satisfies Cta,
};

export const growOpening = {
  eyebrow: "Behold. Believe. Become. Bless.",
  title: "Growth is not self-improvement. It is life slowly remade by Jesus.",
  body:
    "The Christian life is not meant to be rushed, performed, or walked alone. We grow as we behold Christ, believe the gospel, become more like him, and bless our neighbors with the grace we have received.",
};

export const growPathway: HomeChapter[] = [
  {
    eyebrow: "Behold",
    title: "We begin by looking at Jesus.",
    body:
      "Discipleship starts with attention. We return to Scripture, prayer, worship, and gospel truth so our lives are shaped by Christ before they are shaped by noise.",
    href: "#behold",
    imageLabel: "S17 people gathered around Scripture and prayer.",
  },
  {
    eyebrow: "Become",
    title: "We practice faith in community.",
    body:
      "Formation happens around tables, in honest conversations, through repentance, encouragement, and the weekly work of applying the Word together.",
    href: "#become",
    imageLabel: "A Friends House gathering around a table in conversation.",
  },
  {
    eyebrow: "Bless",
    title: "We grow so we can love our neighbors.",
    body:
      "Maturity is never private. As grace renews us, we become people who bless our homes, workplaces, streets, and city with the love of Christ.",
    href: "#bless",
    imageLabel: "S17 people serving and encouraging neighbors in the city.",
  },
];

export const friendsHouses = {
  eyebrow: "Friends Houses",
  title: "Smaller rooms where friendship, Scripture, and mission become normal.",
  body:
    "Friends Houses are S17’s small-group rhythm: simple gatherings where people revisit Sunday’s truth, speak honestly, pray together, and name one person they will bless. This is where friends become family during the week.",
};

export const nextSteps = {
  eyebrow: "Next Steps",
  title: "You do not need to know everything to take one faithful step.",
  body:
    "Whether you are new to faith, returning to church, ready for membership, or looking for a place to serve, S17 will help you take a clear next step without pressure or confusion.",
};

export const growInvitation = {
  eyebrow: "Grow with S17",
  title: "Take the next faithful step into formation and friendship.",
  body:
    "Start with one conversation. Join a Friends House. Attend Next Steps. Let grace become a shared way of life.",
  primaryCta: { label: "Connect with S17", href: "/contact", variant: "inverse" } satisfies Cta,
  secondaryCta: { label: "Go with S17", href: "/go", variant: "ghost" } satisfies Cta,
};
