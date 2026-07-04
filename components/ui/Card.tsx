import type { ElementType, HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

type CardVariant = "plain" | "bordered" | "ink";
type CardPadding = "sm" | "md" | "lg";

const variants: Record<CardVariant, string> = {
  plain: "bg-transparent",
  bordered: "border border-[var(--color-line)] bg-transparent",
  ink: "bg-[var(--color-ink)] text-[var(--color-white)]",
};

const padding: Record<CardPadding, string> = {
  sm: "p-5",
  md: "p-7 md:p-8",
  lg: "p-8 md:p-12",
};

interface CardProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
  variant?: CardVariant;
  padding?: CardPadding;
  eyebrow?: string;
  title?: string;
  children?: ReactNode;
}

export function Card({
  as: Component = "article",
  className,
  variant = "bordered",
  padding: paddingKey = "md",
  eyebrow,
  title,
  children,
  ...props
}: CardProps) {
  return (
    <Component className={cn(variants[variant], padding[paddingKey], className)} {...props}>
      {eyebrow ? <p className="text-utility mb-5 text-[var(--color-muted)]">{eyebrow}</p> : null}
      {title ? <h3 className="text-subsection text-balance">{title}</h3> : null}
      {children ? <div className={cn(title && "mt-5", "text-body text-pretty")}>{children}</div> : null}
    </Component>
  );
}
