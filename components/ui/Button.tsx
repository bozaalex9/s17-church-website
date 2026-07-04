import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary" | "ghost" | "inverse";
type ButtonSize = "sm" | "md" | "lg";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-[var(--color-ink)] text-[var(--color-white)] hover:bg-[var(--color-ink-soft)]",
  secondary:
    "border border-[var(--color-line)] text-[var(--color-ink)] hover:border-[var(--color-ink)]",
  ghost: "text-[var(--color-ink)] hover:bg-[rgba(17,17,17,0.06)]",
  inverse:
    "bg-[var(--color-white)] text-[var(--color-ink)] hover:bg-[rgba(255,255,255,0.86)]",
};

const sizes: Record<ButtonSize, string> = {
  sm: "min-h-10 px-4 text-[0.75rem]",
  md: "min-h-12 px-6 text-[0.78rem]",
  lg: "min-h-14 px-8 text-[0.82rem]",
};

const base =
  "focus-ring inline-flex items-center justify-center rounded-none font-medium uppercase tracking-[0.08em] transition-colors duration-[var(--duration-base)] ease-[var(--ease-standard)] motion-reduce:transition-none disabled:pointer-events-none disabled:opacity-50";

type CommonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
};

type LinkButtonProps = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type NativeButtonProps = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

function isExternalHref(href: string) {
  return href.startsWith("http://") || href.startsWith("https://") || href.startsWith("mailto:") || href.startsWith("tel:");
}

export function Button(props: LinkButtonProps | NativeButtonProps) {
  const { children, className, variant = "primary", size = "md", ...rest } = props;
  const classes = cn(base, variants[variant], sizes[size], className);

  if ("href" in props && props.href) {
    const { href, target, rel, ...anchorProps } = rest as Omit<LinkButtonProps, keyof CommonProps>;
    const external = isExternalHref(href);

    return (
      <Link
        href={href}
        className={classes}
        target={target ?? (external ? "_blank" : undefined)}
        rel={rel ?? (external ? "noopener noreferrer" : undefined)}
        prefetch={external ? false : undefined}
        {...anchorProps}
      >
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
