import type { Metadata } from "next";
import { siteConfig } from "@/content/site";

export const growMetadata: Metadata = {
  title: "Grow",
  description:
    "Grow as a disciple of Jesus through Friends Houses, Next Steps, Scripture, friendship, and ordinary formation at S17 Church.",
  alternates: {
    canonical: `${siteConfig.url}/grow`,
  },
  openGraph: {
    title: "Grow | S17 Church",
    description:
      "Formation happens when grace becomes a way of life. Grow with S17 through Scripture, friendship, and faithful next steps.",
    url: `${siteConfig.url}/grow`,
    siteName: siteConfig.name,
    type: "website",
  },
};
