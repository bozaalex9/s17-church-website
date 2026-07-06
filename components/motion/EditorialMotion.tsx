"use client";

import type { MotionValue, Variants } from "framer-motion";
import type { ReactNode } from "react";
import { createContext, useContext, useEffect, useMemo, useRef, useState } from "react";
import {
  MotionConfig,
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { cn } from "@/lib/cn";
import { motionBible, objectVariants, type EditorialRole, type MotionEnergy } from "@/motion/presets";

interface CameraContextValue {
  progress: MotionValue<number> | null;
  reduced: boolean;
}

const CameraContext = createContext<CameraContextValue>({ progress: null, reduced: false });

function useMobileMotion() {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    const query = window.matchMedia(motionBible.mobileQuery);
    const update = () => setMobile(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);
  return mobile;
}

export function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <MotionConfig reducedMotion="user" transition={{ ease: motionBible.ease }}>
      {children}
    </MotionConfig>
  );
}

export function ScrollCamera({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = Boolean(useReducedMotion());
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 30, mass: 0.35 });
  const value = useMemo(() => ({ progress, reduced }), [progress, reduced]);

  return (
    <CameraContext.Provider value={value}>
      <div ref={ref} data-scroll-camera className={cn("relative overflow-clip", className)}>
        {children}
      </div>
    </CameraContext.Provider>
  );
}

export function ScrollScene({
  children,
  className,
  emotion,
  overlap = "none",
}: {
  children: ReactNode;
  className?: string;
  emotion?: string;
  overlap?: "none" | "soft" | "cinematic";
}) {
  const reduced = Boolean(useReducedMotion());
  const mobile = useMobileMotion();
  const variants: Variants = {
    hidden: { opacity: 0.72, y: reduced ? 0 : mobile ? 16 : 32 },
    active: { opacity: 1, y: 0, transition: { duration: 0.85, ease: motionBible.ease } },
  };

  return (
    <motion.div
      data-scroll-scene
      data-scene-emotion={emotion}
      initial={reduced ? false : "hidden"}
      whileInView={reduced ? undefined : "active"}
      viewport={{ once: false, amount: 0.08 }}
      variants={variants}
      className={cn(
        "relative isolate",
        overlap === "soft" && "-mt-8 pt-8 md:-mt-16 md:pt-16",
        overlap === "cinematic" && "-mt-16 pt-16 md:-mt-28 md:pt-28",
        className,
      )}
    >
      {children}
    </motion.div>
  );
}

export function SceneOverlap({ children, className, depth = "cinematic" }: { children: ReactNode; className?: string; depth?: "soft" | "cinematic" }) {
  return <div className={cn("relative z-10", depth === "soft" ? "-mt-8 md:-mt-14" : "-mt-14 md:-mt-24", className)}>{children}</div>;
}

export function RevealSequence({ children, className, energy = "editorial" }: { children: ReactNode; className?: string; energy?: MotionEnergy }) {
  const reduced = Boolean(useReducedMotion());
  const stagger = motionBible.sequence[energy].stagger;
  return (
    <motion.div
      data-reveal-sequence={energy}
      initial={reduced ? false : "hidden"}
      whileInView={reduced ? undefined : "visible"}
      viewport={motionBible.viewport}
      variants={reduced ? undefined : { hidden: {}, visible: { transition: { staggerChildren: stagger } } }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function EditorialObject({ children, className, role = "object", energy = "editorial", delay = 0 }: { children: ReactNode; className?: string; role?: EditorialRole; energy?: MotionEnergy; delay?: number }) {
  const reduced = Boolean(useReducedMotion());
  const variants = objectVariants(energy, role);
  return (
    <motion.div
      data-editorial-object={role}
      variants={reduced ? undefined : variants}
      initial={reduced ? false : undefined}
      transition={delay ? { delay } : undefined}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function DepthImage({ children, className, depth = "witness" }: { children: ReactNode; className?: string; depth?: "quiet" | "witness" | "immersive" }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = Boolean(useReducedMotion());
  const mobile = useMobileMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const range = (depth === "immersive" ? 72 : depth === "witness" ? 42 : 20) * (mobile ? 0.35 : 1);
  const y = useTransform(scrollYProgress, [0, 1], [range, -range]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], mobile ? [1.02, 1, 1.008] : depth === "immersive" ? [1.08, 1, 1.035] : [1.035, 1, 1.015]);
  return <motion.div ref={ref} style={reduced ? undefined : { y, scale }} className={cn("transform-gpu will-change-transform", className)}>{children}</motion.div>;
}

export function MotionCard({ children, className, energy = "cinematic" }: { children: ReactNode; className?: string; energy?: MotionEnergy }) {
  const reduced = Boolean(useReducedMotion());
  const mobile = useMobileMotion();
  return (
    <motion.div
      variants={reduced ? undefined : {
        hidden: { opacity: 0, y: mobile ? 28 : energy === "high-energy" ? 84 : 58, scale: mobile ? 0.98 : 0.94, rotate: mobile ? 0 : -1.2 },
        visible: { opacity: 1, y: 0, scale: 1, rotate: 0, transition: { type: "spring", stiffness: 120, damping: 17, mass: 0.85 } },
      }}
      whileHover={reduced || mobile ? undefined : { y: -10, scale: 1.015, transition: { duration: 0.22 } }}
      className={cn("transform-gpu will-change-transform", className)}
    >{children}</motion.div>
  );
}

export function ParallaxLayer({ children, className, distance = 36 }: { children: ReactNode; className?: string; distance?: number }) {
  const { progress, reduced } = useContext(CameraContext);
  const mobile = useMobileMotion();
  const fallback = useSpring(0, { stiffness: 100, damping: 30 });
  const source = progress ?? fallback;
  const range = mobile ? distance * 0.3 : distance;
  const y = useTransform(source, [0, 1], [range, -range]);
  return <motion.div style={reduced ? undefined : { y }} className={cn("transform-gpu", className)}>{children}</motion.div>;
}

export function CameraFrame({ children, className, intensity = "cinematic" }: { children: ReactNode; className?: string; intensity?: "soft" | "cinematic" }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = Boolean(useReducedMotion());
  const mobile = useMobileMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], mobile ? [14, -10] : intensity === "cinematic" ? [56, -48] : [22, -18]);
  const scale = useTransform(scrollYProgress, [0, 0.48, 1], mobile ? [0.995, 1, 1] : intensity === "cinematic" ? [0.975, 1, 1.015] : [0.99, 1, 1.005]);
  return <motion.div ref={ref} style={reduced ? undefined : { y, scale }} className={cn("transform-gpu will-change-transform", className)}>{children}</motion.div>;
}

export function AmbientLayer({ className }: { className?: string }) {
  const { progress, reduced } = useContext(CameraContext);
  const mobile = useMobileMotion();
  const fallback = useSpring(0, { stiffness: 100, damping: 30 });
  const source = progress ?? fallback;
  const opacity = useTransform(source, [0, 0.45, 1], [0.18, 0.38, 0.12]);
  const scale = useTransform(source, [0, 1], [1, 1.12]);
  return <motion.div aria-hidden="true" style={reduced || mobile ? { opacity: 0.18 } : { opacity, scale }} className={cn("pointer-events-none absolute inset-0 transform-gpu", className)} />;
}

export function CinematicHero({ media, children, className, contentClassName, ariaLabelledby }: { media: ReactNode; children: ReactNode; className?: string; contentClassName?: string; ariaLabelledby?: string }) {
  const ref = useRef<HTMLElement>(null);
  const reduced = Boolean(useReducedMotion());
  const mobile = useMobileMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const mediaScale = useTransform(scrollYProgress, [0, 1], [1, mobile ? 1.055 : 1.14]);
  const mediaY = useTransform(scrollYProgress, [0, 1], [0, mobile ? 22 : 68]);
  const mediaOpacity = useTransform(scrollYProgress, [0, 0.82, 1], [1, 0.8, 0.46]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, mobile ? 0 : -26]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 0.92, 0.25]);

  return (
    <section ref={ref} aria-labelledby={ariaLabelledby} className={cn("relative isolate min-h-[100svh] overflow-hidden", className)}>
      <motion.div aria-hidden="true" style={reduced ? undefined : { scale: mediaScale, y: mediaY, opacity: mediaOpacity }} className="absolute inset-0 -z-20 transform-gpu will-change-transform">{media}</motion.div>
      <motion.div style={reduced ? undefined : { y: contentY, opacity: contentOpacity }} className={cn("relative min-h-[100svh] transform-gpu", contentClassName)}>{children}</motion.div>
    </section>
  );
}
