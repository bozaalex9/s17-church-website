import type { MetadataRoute } from "next";
import { siteConfig } from "@/content/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/beliefs", "/sermons", "/generosity"],
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
