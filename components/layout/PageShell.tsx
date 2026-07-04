import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface PageShellProps {
  children: ReactNode;
  className?: string;
}

export function PageShell({ children, className }: PageShellProps) {
  return (
    <main id="main-content" className={cn("min-h-screen", className)}>
      {children}
    </main>
  );
}
