import type { MotionValue } from "framer-motion";
import { useTransform } from "framer-motion";

export const transitions = {
  standard: { duration: 0.36, ease: [0.22, 1, 0.36, 1] },
  slow: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  cinematic: { duration: 1.1, ease: [0.16, 1, 0.3, 1] },
  threshold: { duration: 1.25, ease: [0.19, 1, 0.22, 1] },
} as const;

export function useThresholdScale(scrollYProgress: MotionValue<number>) {
  return useTransform(scrollYProgress, [0, 1], [0.96, 1.08]);
}

export function useThresholdOpacity(scrollYProgress: MotionValue<number>) {
  return useTransform(scrollYProgress, [0, 0.18, 0.86, 1], [0, 1, 1, 0]);
}
