import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type ContainerWidth = "page" | "wide" | "reading" | "narrow";

const widths: Record<ContainerWidth, string> = {
  page: "max-w-[var(--container-page)]",
  wide: "max-w-[var(--container-wide)]",
  reading: "max-w-[var(--container-reading)]",
  narrow: "max-w-[var(--container-narrow)]",
};

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  width?: ContainerWidth;
}

export function Container({ className, width = "page", ...props }: ContainerProps) {
  return (
    <div
      className={cn("mx-auto w-full px-[var(--container-gutter)]", widths[width], className)}
      {...props}
    />
  );
}
