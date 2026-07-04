import type { Variants } from "framer-motion";

export const navigationOverlay: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.34, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.24, ease: [0.22, 1, 0.36, 1] },
  },
};

export const navigationPanel: Variants = {
  hidden: { y: 18, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.52, ease: [0.16, 1, 0.3, 1] },
  },
  exit: {
    y: 8,
    opacity: 0,
    transition: { duration: 0.24, ease: [0.22, 1, 0.36, 1] },
  },
};
