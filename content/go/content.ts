import type { Cta, HomeChapter } from "@/types/content";

export const goHero = {
  eyebrow: "Go",
  headline: "Worship sends us into the city with love.",
  lead:
    "S17 is a gathered people becoming a sent people. We go because grace has reached us first, and because our neighbors should not have to face life alone.",
  primaryCta: { label: "Find a Way to Serve", href: "#volunteer", variant: "inverse" } satisfies Cta,
  secondaryCta: { label: "See the Mission", href: "#mission", variant: "ghost" } satisfies Cta,
};

export const goOpening = {
  eyebrow: "Worship leads to witness",
  title: "The church does not end at the benediction. The church is sent.",
  body:
    "We gather to behold Christ, grow in grace, and then go with ordinary courage into homes, workplaces, schools, neighborhoods, and the city. Mission is not an event we attend. It is a life we carry together.",
};

export const goPathway: HomeChapter[] = [
  {
    eyebrow: "Serve",
    title: "Use what God has given you for the good of others.",
    body:
      "Serving at S17 is not filling slots. It is a shared witness of hospitality, care, prayer, teaching, mercy, and welcome for the sake of the body and the city.",
    href: "#volunteer",
    imageLabel: "S17 volunteers welcoming people with warmth and clarity.",
  },
  {
    eyebrow: "City",
    title: "Love Miami with patience, presence, and gospel hope.",
    body:
      "We want S17 to be known as a church that sees the city clearly, serves neighbors faithfully, and builds partnerships that help people know they are not alone.",
    href: "#partnerships",
    imageLabel: "A documentary city scene showing S17 neighbors and community life in Miami.",
  },
  {
    eyebrow: "Everyday Mission",
    title: "The most important mission field is often already near you.",
    body:
      "We go through ordinary relationships: family, friends, coworkers, classmates, first responders, refugees, neighbors, and anyone God places in front of us.",
    href: "#everyday-mission",
    imageLabel: "S17 people in everyday conversation and neighborhood presence.",
  },
];

export const cityPartnerships = {
  eyebrow: "Community partnerships",
  title: "We go farther when we serve with others who love the city.",
  body:
    "S17 seeks faithful partnerships with schools, first responders, city leaders, refugee care organizations, family support ministries, and neighbors already doing good work. We do not enter the city as saviors. We enter as servants and witnesses.",
};

export const volunteer = {
  eyebrow: "Volunteer opportunities",
  title: "Take one clear step from attending to participating.",
  body:
    "Whether you serve in hospitality, kids, students, worship support, Friends Houses, care, outreach, or city partnerships, every act of service helps make the gospel visible and the church more like family.",
};

export const goInvitation = {
  eyebrow: "Go with S17",
  title: "Grace received becomes love sent.",
  body:
    "Start with one step. Serve one person. Join one team. Pray for one neighbor. S17 goes together because Jesus first came to us.",
  primaryCta: { label: "Start Serving", href: "/contact", variant: "inverse" } satisfies Cta,
  secondaryCta: { label: "Grow with S17", href: "/grow", variant: "ghost" } satisfies Cta,
};
