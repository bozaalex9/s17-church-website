import type { MotionValue } from "framer-motion";
import { useTransform } from "framer-motion";

export function useParallax(
  scrollYProgress: MotionValue<number>,
  distance: number = 96,
) {
  return useTransform(scrollYProgress, [0, 1], [-distance, distance]);
}

export function useCinematicZoom(
  scrollYProgress: MotionValue<number>,
  from: number = 0.92,
  to: number = 1.08,
) {
  return useTransform(scrollYProgress, [0, 1], [from, to]);
}

export function useProgressiveFade(scrollYProgress: MotionValue<number>) {
  return useTransform(scrollYProgress, [0, 0.2, 0.82, 1], [0, 1, 1, 0]);
}
