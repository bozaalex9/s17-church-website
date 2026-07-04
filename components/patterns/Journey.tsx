"use client";

import type { ReactNode } from "react";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/cn";

type JourneyEmotion = "wonder" | "confidence" | "worship" | "formation" | "mission" | "trust" | "generosity";

interface JourneyProps {
  children: ReactNode;
  emotion?: JourneyEmotion;
  className?: string;
}

export function Journey({ children, emotion = "wonder", className }: JourneyProps) {
  return (
    <div data-journey-emotion={emotion} className={cn("relative overflow-hidden", className)}>
      {children}
    </div>
  );
}

interface StoryRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function StoryReveal({ children, className, delay = 0 }: StoryRevealProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 32 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.32 }}
      transition={{ duration: 0.72, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface ThresholdFrameProps {
  children: ReactNode;
  className?: string;
  intensity?: "soft" | "cinematic";
}

export function ThresholdFrame({ children, className, intensity = "cinematic" }: ThresholdFrameProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(
    scrollYProgress,
    [0, 0.35, 0.62, 1],
    intensity === "cinematic" ? [0.985, 1.055, 1.018, 1] : [0.995, 1.018, 1.006, 1],
  );
  const y = useTransform(scrollYProgress, [0, 1], intensity === "cinematic" ? [44, -44] : [14, -14]);

  return (
    <motion.div
      ref={ref}
      style={reduceMotion ? undefined : { scale, y }}
      className={cn("transform-gpu will-change-transform", className)}
    >
      {children}
    </motion.div>
  );
}

interface ParallaxFrameProps {
  children: ReactNode;
  className?: string;
  depth?: "subtle" | "dramatic";
}

export function ParallaxFrame({ children, className, depth = "subtle" }: ParallaxFrameProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], depth === "dramatic" ? [72, -96] : [24, -36]);

  return (
    <motion.div
      ref={ref}
      style={reduceMotion ? undefined : { y }}
      className={cn("transform-gpu will-change-transform", className)}
    >
      {children}
    </motion.div>
  );
}
