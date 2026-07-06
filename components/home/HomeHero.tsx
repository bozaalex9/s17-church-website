"use client";

import { useEffect, useId, useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Container } from "@/components/layout/Container";

export function HomeHero() {
  const titleId = useId();
  const heroRef = useRef<HTMLElement>(null);
  const mobileVideoRef = useRef<HTMLVideoElement>(null);
  const desktopVideoRef = useRef<HTMLVideoElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const mediaScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const mediaOpacity = useTransform(scrollYProgress, [0, 0.88, 1], [1, 0.78, 0.5]);
  const headlineY = useTransform(scrollYProgress, [0, 1], [0, -32]);
  const headlineOpacity = useTransform(scrollYProgress, [0, 0.72, 1], [1, 0.92, 0.35]);

  useEffect(() => {
    if (!reduceMotion) return;
    mobileVideoRef.current?.pause();
    desktopVideoRef.current?.pause();
  }, [reduceMotion]);

  return (
    <section
      ref={heroRef}
      aria-labelledby={titleId}
      className="relative isolate min-h-[100svh] overflow-hidden bg-[var(--color-ink)] text-[var(--color-white)]"
    >
      <motion.div
        aria-hidden="true"
        style={reduceMotion ? undefined : { scale: mediaScale, opacity: mediaOpacity }}
        className="absolute inset-0 -z-20 transform-gpu will-change-transform"
      >
        <video
          ref={mobileVideoRef}
          className="h-full w-full object-cover md:hidden"
          autoPlay={!reduceMotion}
          muted
          loop
          playsInline
          preload="metadata"
          poster="/images/home/hero-mobile-poster.jpg"
          tabIndex={-1}
        >
          <source src="/videos/home/hero-mobile.mp4" type="video/mp4" />
        </video>
        <video
          ref={desktopVideoRef}
          className="hidden h-full w-full object-cover md:block"
          autoPlay={!reduceMotion}
          muted
          loop
          playsInline
          preload="metadata"
          poster="/images/home/hero-desktop-poster.jpg"
          tabIndex={-1}
        >
          <source src="/videos/home/hero-desktop.mp4" type="video/mp4" />
        </video>
      </motion.div>

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(0,0,0,0.18)_0%,rgba(0,0,0,0.05)_38%,rgba(0,0,0,0.58)_100%)]"
      />

      <Container width="wide" className="flex min-h-[100svh] items-end pb-[clamp(3rem,9vw,7.5rem)] pt-28">
        <motion.h1
          id={titleId}
          style={reduceMotion ? undefined : { y: headlineY, opacity: headlineOpacity }}
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="transform-gpu text-[clamp(3rem,13.2vw,5.25rem)] font-bold leading-[0.82] tracking-[-0.06em] will-change-transform md:text-[clamp(5rem,10.5vw,11rem)]"
        >
          <span className="block whitespace-nowrap">Where friends</span>
          <span className="block whitespace-nowrap">become family.</span>
        </motion.h1>
      </Container>
    </section>
  );
}
