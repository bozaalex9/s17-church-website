import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { defaultMetadata } from "@/lib/metadata";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { MotionProvider } from "@/components/motion/EditorialMotion";

export const metadata: Metadata = defaultMetadata;

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f7f4ee",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <a
          href="#main-content"
          className="focus-ring fixed left-4 top-4 z-modal -translate-y-20 bg-[var(--color-ink)] px-4 py-3 text-utility text-[var(--color-white)] transition-transform focus-visible:translate-y-0"
        >
          Skip to content
        </a>
        <MotionProvider>
          <SiteHeader />
          {children}
          <SiteFooter />
        </MotionProvider>
      </body>
    </html>
  );
}
