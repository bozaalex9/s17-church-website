export const storyTokens = {
  arrival: {
    spacing: "cinematic",
    motion: "threshold",
    image: "cinematicZoom",
  },
  welcome: {
    spacing: "lg",
    motion: "reveal",
    image: "scaleSettle",
  },
  belonging: {
    spacing: "lg",
    motion: "progression",
    image: "parallax",
  },
  formation: {
    spacing: "cinematic",
    motion: "progression",
    image: "sticky",
  },
  mission: {
    spacing: "cinematic",
    motion: "threshold",
    image: "parallax",
  },
  reflection: {
    spacing: "lg",
    motion: "slowReveal",
    image: "still",
  },
  invitation: {
    spacing: "md",
    motion: "reveal",
    image: "none",
  },
} as const;

export type StoryToken = keyof typeof storyTokens;
