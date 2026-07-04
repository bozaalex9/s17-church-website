import { siteConfig } from "@/content/site";
import { routes } from "@/lib/routes";

export const giveHero = {
  eyebrow: "Give",
  headline: "Generosity is part of worship.",
  lead:
    "We give because God has first given to us. Your generosity helps S17 Church make and multiply disciples, care for our neighbors, and serve the city with steady gospel presence.",
  primaryCta: {
    label: "Give through Church Center",
    href: siteConfig.churchCenterGivingUrl,
    variant: "inverse" as const,
  },
  secondaryCta: {
    label: "Why we give",
    href: "#why-we-give",
    variant: "ghost" as const,
  },
} as const;

export const giveStory = {
  eyebrow: "Why we give",
  title: "Giving is not pressure. It is worship shaped by grace.",
  body:
    "Christian generosity begins with the gospel. We do not give to earn God's love; we give because we have received it in Christ. Giving supports the ordinary ministry of the church and the ongoing witness of S17 in Miami.",
} as const;

export const giveChurchCenter = {
  eyebrow: "Church Center",
  title: "Secure giving happens through Church Center.",
  body:
    "S17 uses Church Center for online giving so donors can give securely, set up recurring gifts, manage payment methods, choose funds, and access giving records through a trusted platform.",
  primaryCta: {
    label: "Open Church Center Giving",
    href: siteConfig.churchCenterGivingUrl,
    variant: "primary" as const,
  },
  secondaryCta: {
    label: "Contact us",
    href: routes.contact,
    variant: "secondary" as const,
  },
} as const;

export const givingDetails = [
  {
    eyebrow: "01",
    title: "Secure by design",
    body: "The S17 website does not process payments directly. Church Center handles the giving workflow, payment methods, receipts, and account management.",
    href: siteConfig.churchCenterGivingUrl,
    imageLabel: "Documentary placeholder for a quiet moment of worship at S17 Church.",
  },
  {
    eyebrow: "02",
    title: "Recurring generosity",
    body: "Church Center allows recurring gifts so generosity can become a steady rhythm of worship and mission support.",
    href: siteConfig.churchCenterGivingUrl,
    imageLabel: "Documentary placeholder for S17 Church people gathered around a table.",
  },
  {
    eyebrow: "03",
    title: "Mission support",
    body: "Giving helps support worship, discipleship, mercy, hospitality, and the everyday ministry of loving our neighbors in Miami.",
    href: routes.go,
    imageLabel: "Documentary placeholder for S17 Church serving the city.",
  },
];

export const giveInvitation = {
  eyebrow: "Next step",
  title: "Give through Church Center.",
  body:
    "When you are ready, Church Center will guide you through the secure giving process. The S17 website simply points you there clearly and calmly.",
  primaryCta: {
    label: "Give now",
    href: siteConfig.churchCenterGivingUrl,
    variant: "inverse" as const,
  },
  secondaryCta: {
    label: "Questions? Contact us",
    href: routes.contact,
    variant: "ghost" as const,
  },
} as const;
