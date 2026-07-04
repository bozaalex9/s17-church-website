import type { Cta, HomeChapter } from "@/types/content";

export const visitHero = {
  eyebrow: "Visit S17",
  headline: "You can walk in without having it all together.",
  lead:
    "Sundays at S17 are simple, warm, and centered on Jesus. Come as you are, meet a real person, and take the next step at a pace you can actually walk.",
  primaryCta: { label: "Plan Your Visit", href: "/contact", variant: "inverse" } satisfies Cta,
  secondaryCta: { label: "What to Expect", href: "#what-to-expect", variant: "ghost" } satisfies Cta,
};

export const visitWelcome = {
  eyebrow: "Where friends become family",
  title: "From the parking lot to the pew, we want your first step to feel possible.",
  body:
    "You will not be left to figure everything out alone. Our hospitality team is there to greet you, help you find your way, and introduce you to someone by name.",
};

export const visitMoments: HomeChapter[] = [
  {
    eyebrow: "Arrive",
    title: "A clear first step.",
    body:
      "When you arrive, someone will welcome you, help you know where to go, and make the morning feel less unfamiliar.",
    href: "#arrive",
    imageLabel: "A warm S17 welcome moment at the church entrance.",
  },
  {
    eyebrow: "Worship",
    title: "A gathered people around the Word.",
    body:
      "The service is centered on Scripture, prayer, singing, preaching, and the ordinary means of grace.",
    href: "#worship",
    imageLabel: "S17 people gathered in worship on a Sunday morning.",
  },
  {
    eyebrow: "Connect",
    title: "A name, not a number.",
    body:
      "After worship, we want to help you meet someone, ask questions, and know the next faithful step.",
    href: "#connect",
    imageLabel: "People talking after worship at S17 Church.",
  },
];

export const visitFlow = {
  eyebrow: "What to expect",
  title: "A Sunday that feels reverent, human, and easy to enter.",
  body:
    "Expect a warm welcome, clear directions, Scripture-saturated worship, and people who are learning to follow Jesus together. You do not need to know church language to belong in the room.",
};

export const visitFamily = {
  eyebrow: "For families",
  title: "Bring the whole story with you.",
  body:
    "Kids, questions, nerves, and real life are welcome. S17 is being built as a family where people are seen, sanctified, and sent together.",
};

export const visitInvitation = {
  eyebrow: "Your next step",
  title: "Come this Sunday. We will help you from there.",
  body:
    "Plan your visit so we can know your name, help you arrive with confidence, and welcome you like family.",
  primaryCta: { label: "Plan Your Visit", href: "/contact", variant: "inverse" } satisfies Cta,
  secondaryCta: { label: "Learn About S17", href: "/about", variant: "ghost" } satisfies Cta,
};
