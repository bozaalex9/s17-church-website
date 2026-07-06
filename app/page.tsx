import type { Metadata } from "next";
import { SpotifyPreviewHome } from "@/components/home/SpotifyPreviewHome";
import { homeMetadata } from "@/content/home/seo";
import "./spotify-home.css";

export const metadata: Metadata = homeMetadata;

export default function HomePage() {
  return <SpotifyPreviewHome />;
}
