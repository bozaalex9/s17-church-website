export type Cta = {
  label: string;
  href: string;
  variant?: "primary" | "secondary" | "ghost" | "inverse";
};

export type CollectionItem = {
  eyebrow: string;
  title: string;
  body: string;
  href?: string;
  imageLabel?: string;
};

export type HomeChapter = CollectionItem & {
  href: string;
  imageLabel: string;
};
