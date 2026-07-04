import type { Metadata } from "next";
import { siteConfig } from "@/content/site";
import { routes } from "@/lib/routes";

export const giveMetadata: Metadata = {
  title: "Give | S17 Church",
  description:
    "Give to S17 Church through Church Center. Secure online giving for gospel ministry, discipleship, hospitality, and mission in Miami.",
  alternates: {
    canonical: `${siteConfig.url}${routes.give}`,
  },
  openGraph: {
    title: "Give | S17 Church",
    description:
      "Give to S17 Church through Church Center. Secure online giving for gospel ministry, discipleship, hospitality, and mission in Miami.",
    url: `${siteConfig.url}${routes.give}`,
    siteName: siteConfig.name,
    type: "website",
  },
};
