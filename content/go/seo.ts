import type { Metadata } from "next";
import { siteConfig } from "@/content/site";

export const goMetadata: Metadata = {
  title: `Go | ${siteConfig.name}`,
  description:
    "Go with S17 Church through service, community partnerships, everyday mission, and faithful love for Miami.",
  alternates: {
    canonical: `${siteConfig.url}/go`,
  },
};
