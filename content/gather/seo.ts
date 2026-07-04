import type { Metadata } from "next";
import { siteConfig } from "@/content/site";

export const gatherMetadata: Metadata = {
  title: `Gather | ${siteConfig.name}`,
  description:
    "Gather with S17 Church for Sunday worship centered on Scripture, prayer, preaching, singing, and the grace of Jesus Christ.",
  alternates: {
    canonical: "/gather",
  },
};
