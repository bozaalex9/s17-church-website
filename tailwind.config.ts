import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
    "./motion/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "var(--color-ink)",
        "ink-soft": "var(--color-ink-soft)",
        muted: "var(--color-muted)",
        faint: "var(--color-faint)",
        paper: "var(--color-paper)",
        bronze: "var(--color-bronze)",
        burgundy: "var(--color-burgundy)",
        line: "var(--color-line)",
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
      },
      maxWidth: {
        page: "var(--container-page)",
        wide: "var(--container-wide)",
        reading: "var(--container-reading)",
        narrow: "var(--container-narrow)",
      },
      transitionTimingFunction: {
        standard: "var(--ease-standard)",
        cinematic: "var(--ease-cinematic)",
        threshold: "var(--ease-threshold)",
      },
      transitionDuration: {
        fast: "var(--duration-fast)",
        base: "var(--duration-base)",
        slow: "var(--duration-slow)",
        cinematic: "var(--duration-cinematic)",
      },
      zIndex: {
        header: "var(--z-header)",
        menu: "var(--z-menu)",
        modal: "var(--z-modal)",
      },
    },
  },
  plugins: [],
};

export default config;
