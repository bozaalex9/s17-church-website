"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { primaryNavigation, socialNavigation, utilityNavigation } from "@/content/navigation";
import { navigationOverlay, navigationPanel } from "@/motion/navigation";
import { cn } from "@/lib/cn";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const [expanded, setExpanded] = useState<string | null>(null);

  useEffect(() => {
    if (!open) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = `${window.innerWidth - document.documentElement.clientWidth}px`;

    const focusableSelector =
      'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key !== "Tab" || !panelRef.current) return;

      const focusable = Array.from(
        panelRef.current.querySelectorAll<HTMLElement>(focusableSelector),
      ).filter((element) => !element.hasAttribute("disabled"));

      if (!focusable.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    window.setTimeout(() => panelRef.current?.querySelector<HTMLElement>("button, a")?.focus(), 0);

    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.paddingRight = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-menu overflow-y-auto bg-[var(--color-ink)] text-[var(--color-white)]"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={navigationOverlay}
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
        >
          <motion.div
            ref={panelRef}
            className="flex min-h-dvh flex-col px-[var(--container-gutter)] py-6"
            variants={navigationPanel}
          >
            <div className="grid grid-cols-3 items-center">
              <button
                type="button"
                onClick={onClose}
                className="focus-ring justify-self-start text-utility text-[rgba(255,255,255,0.82)]"
                aria-label="Close menu"
              >
                Close
              </button>
              <Link href="/" onClick={onClose} className="focus-ring justify-self-center text-utility">
                S17
              </Link>
              <button
                type="button"
                className="focus-ring justify-self-end text-utility text-[rgba(255,255,255,0.82)]"
                aria-label="Search site"
              >
                Search
              </button>
            </div>

            <nav className="mt-16" aria-label="Mobile primary navigation">
              <ul className="space-y-2">
                {primaryNavigation.map((item) => {
                  const hasItems = "items" in item && item.items?.length;
                  const id = `mobile-submenu-${item.label.toLowerCase().replace(/\s+/g, "-")}`;
                  const isExpanded = expanded === item.label;

                  return (
                    <li key={item.href} className="border-b border-[var(--color-line-inverse)] pb-4">
                      <div className="flex items-center justify-between gap-6">
                        <Link
                          href={item.href}
                          onClick={onClose}
                          className="focus-ring text-section uppercase leading-[0.9] tracking-[var(--tracking-title)]"
                        >
                          {item.label}
                        </Link>
                        {hasItems ? (
                          <button
                            type="button"
                            className="focus-ring min-h-12 min-w-12 text-2xl"
                            aria-expanded={isExpanded}
                            aria-controls={id}
                            onClick={() => setExpanded(isExpanded ? null : item.label)}
                          >
                            <span aria-hidden>{isExpanded ? "−" : "+"}</span>
                            <span className="sr-only">Toggle {item.label} submenu</span>
                          </button>
                        ) : null}
                      </div>

                      {hasItems ? (
                        <div
                          id={id}
                          className={cn(
                            "grid transition-[grid-template-rows,opacity] duration-slow ease-cinematic",
                            isExpanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                          )}
                        >
                          <ul className="overflow-hidden pt-5">
                            {item.items?.map((child) => (
                              <li key={child.href}>
                                <Link
                                  href={child.href}
                                  onClick={onClose}
                                  className="focus-ring block py-2 text-lead text-[rgba(255,255,255,0.72)]"
                                >
                                  {child.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ) : null}
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className="mt-auto grid gap-10 pt-16 md:grid-cols-2">
              <nav aria-label="Mobile utility navigation">
                <ul className="flex flex-wrap gap-x-6 gap-y-3">
                  {utilityNavigation.map((item) => (
                    <li key={item.href}>
                      <Link href={item.href} onClick={onClose} className="focus-ring text-utility text-[rgba(255,255,255,0.72)]">
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              <nav aria-label="Mobile social links" className="md:justify-self-end">
                <ul className="flex flex-wrap gap-x-6 gap-y-3">
                  {socialNavigation.map((item) => (
                    <li key={item.href}>
                      <Link href={item.href} target="_blank" rel="noopener noreferrer" className="focus-ring text-utility text-[rgba(255,255,255,0.72)]">
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
