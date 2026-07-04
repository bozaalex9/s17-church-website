import { routes } from "@/lib/routes";
import { siteConfig } from "./site";

export const footerContent = {
  tagline: "Where friends become family.",
  address: siteConfig.address,
  primaryLinks: [
    { label: "About", href: routes.about },
    { label: "Gather", href: routes.gather },
    { label: "Grow", href: routes.grow },
    { label: "Go", href: routes.go },
    { label: "Give", href: routes.give },
  ],
  utilityLinks: [
    { label: "Visit", href: routes.visit },
    { label: "Events", href: routes.events },
    { label: "Resources", href: routes.resources },
    { label: "Contact", href: routes.contact },
    { label: "Sermons on YouTube", href: siteConfig.social.youtube },
  ],
} as const;
