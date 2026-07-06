import type { Transition, Variants } from "framer-motion";

export type MotionEnergy = "calm" | "editorial" | "cinematic" | "high-energy" | "sacred";
export type EditorialRole = "typography" | "photography" | "copy" | "object" | "cta";

const ease = [0.16, 1, 0.3, 1] as const;

export const motionBible = {
  ease,
  viewport: { once: true, amount: 0.2 } as const,
  mobileQuery: "(max-width: 767px)",
  sequence: {
    calm: { duration: 0.78, stagger: 0.16, distance: 24 },
    editorial: { duration: 0.9, stagger: 0.2, distance: 36 },
    cinematic: { duration: 1.08, stagger: 0.24, distance: 52 },
    "high-energy": { duration: 0.82, stagger: 0.13, distance: 72 },
    sacred: { duration: 1.25, stagger: 0.28, distance: 16 },
  },
} as const;

export const roleOrder: Record<EditorialRole, number> = {
  typography: 0,
  photography: 1,
  copy: 2,
  object: 3,
  cta: 4,
};

export function objectVariants(energy: MotionEnergy, role: EditorialRole): Variants {
  const preset = motionBible.sequence[energy];
  const distance = role === "typography" ? preset.distance * 0.35 : role === "copy" ? preset.distance * 0.55 : preset.distance;
  const scale = role === "photography" ? 1.055 : role === "object" ? 0.965 : 1;

  return {
    hidden: { opacity: 0, y: distance, scale },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: preset.duration,
        delay: roleOrder[role] * preset.stagger,
        ease,
      },
    },
  };
}

export const quickResponse: Transition = { duration: 0.22, ease };
