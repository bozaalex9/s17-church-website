"use client";

import { useEffect, useId, useRef } from "react";
import { useReducedMotion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { CinematicHero, EditorialObject, RevealSequence } from "@/components/motion/EditorialMotion";

export function HomeHero() {
  const titleId = useId();
  const mobileVideoRef = useRef<HTMLVideoElement>(null);
  const desktopVideoRef = useRef<HTMLVideoElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!reduceMotion) return;
    mobileVideoRef.current?.pause();
    desktopVideoRef.current?.pause();
  }, [reduceMotion]);

  return (
    <CinematicHero
      ariaLabelledby={titleId}
      className="bg-[var(--color-ink)] text-[var(--color-white)]"
      media={
        <>
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
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.18)_0%,rgba(0,0,0,0.05)_38%,rgba(0,0,0,0.58)_100%)]" />
        </>
      }
    >

      <Container width="wide" className="flex min-h-[100svh] items-end pb-[clamp(3rem,9vw,7.5rem)] pt-28">
        <RevealSequence energy="cinematic">
          <EditorialObject role="typography" energy="cinematic">
            <h1 id={titleId} className="text-[clamp(3rem,13.2vw,5.25rem)] font-bold leading-[0.82] tracking-[-0.06em] md:text-[clamp(5rem,10.5vw,11rem)]">
              <span className="block whitespace-nowrap">Where friends</span>
              <span className="block whitespace-nowrap">become family.</span>
            </h1>
          </EditorialObject>
        </RevealSequence>
      </Container>
    </CinematicHero>
  );
}
