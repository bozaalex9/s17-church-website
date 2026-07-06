"use client";

import type { ReactNode } from "react";
import {
  CameraFrame,
  DepthImage,
  EditorialObject,
  RevealSequence,
  ScrollCamera,
} from "@/components/motion/EditorialMotion";

type JourneyEmotion = "wonder" | "confidence" | "worship" | "formation" | "mission" | "trust" | "generosity";

export function Journey({ children, emotion = "wonder", className }: { children: ReactNode; emotion?: JourneyEmotion; className?: string }) {
  return <ScrollCamera className={className}><div data-journey-emotion={emotion}>{children}</div></ScrollCamera>;
}

export function StoryReveal({ children, className, delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  return <RevealSequence className={className}><EditorialObject role="copy" delay={delay}>{children}</EditorialObject></RevealSequence>;
}

export function ThresholdFrame({ children, className, intensity = "cinematic" }: { children: ReactNode; className?: string; intensity?: "soft" | "cinematic" }) {
  return <CameraFrame className={className} intensity={intensity}>{children}</CameraFrame>;
}

export function ParallaxFrame({ children, className, depth = "subtle" }: { children: ReactNode; className?: string; depth?: "subtle" | "dramatic" }) {
  return <DepthImage className={className} depth={depth === "dramatic" ? "immersive" : "quiet"}>{children}</DepthImage>;
}
