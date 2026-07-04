import { routes } from "@/lib/routes";
import type { NavigationItem, NavigationLink } from "@/types/navigation";
import { siteConfig } from "./site";

export const primaryNavigation: NavigationItem[] = [
  {
    label: "About",
    href: routes.about,
    items: [
      { label: "Our Story", href: `${routes.about}#story` },
      { label: "Leadership", href: `${routes.about}#leadership` },
      { label: "Beliefs", href: `${routes.about}#beliefs` },
    ],
  },
  {
    label: "Gather",
    href: routes.gather,
    items: [
      { label: "Sunday Worship", href: `${routes.gather}#sunday` },
      { label: "What to Expect", href: `${routes.gather}#expect` },
      { label: "Plan Your Visit", href: routes.visit },
    ],
  },
  {
    label: "Grow",
    href: routes.grow,
    items: [
      { label: "Connect", href: `${routes.grow}#connect` },
      { label: "Friends Houses", href: `${routes.grow}#friends-houses` },
      { label: "Next Steps", href: `${routes.grow}#next-steps` },
    ],
  },
  {
    label: "Go",
    href: routes.go,
    items: [
      { label: "Mission", href: `${routes.go}#mission` },
      { label: "Community Partnerships", href: `${routes.go}#partnerships` },
      { label: "Volunteer Opportunities", href: `${routes.go}#volunteer` },
    ],
  },
  { label: "Give", href: routes.give },
];

export const utilityNavigation: NavigationLink[] = [
  { label: "Events", href: routes.events },
  { label: "Resources", href: routes.resources },
  { label: "Contact", href: routes.contact },
];

export const socialNavigation: NavigationLink[] = [
  { label: "YouTube", href: siteConfig.social.youtube },
  { label: "Instagram", href: siteConfig.social.instagram },
  { label: "Facebook", href: siteConfig.social.facebook },
];
