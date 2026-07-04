"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { MobileMenu } from "./MobileMenu";
import { cn } from "@/lib/cn";

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const isHome = pathname === "/";
  const [pastHomeHero, setPastHomeHero] = useState(false);

  useEffect(() => {
    if (!isHome) {
      setPastHomeHero(false);
      return;
    }

    const updateHeaderTone = () => {
      setPastHomeHero(window.scrollY > window.innerHeight * 0.72);
    };

    updateHeaderTone();
    window.addEventListener("scroll", updateHeaderTone, { passive: true });
    return () => window.removeEventListener("scroll", updateHeaderTone);
  }, [isHome]);

  const headerTone = isHome && !pastHomeHero ? "text-[var(--color-white)]" : "text-[var(--color-ink)]";

  const closeMenu = () => {
    setMenuOpen(false);
    window.setTimeout(() => menuButtonRef.current?.focus(), 0);
  };

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-header py-5 transition-colors duration-base ease-standard",
          headerTone,
        )}
      >
        <div className="grid grid-cols-3 items-center px-[var(--container-gutter)]">
          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setMenuOpen(true)}
            className="focus-ring min-h-11 justify-self-start text-utility"
            aria-label="Open menu"
            aria-haspopup="dialog"
            aria-expanded={menuOpen}
          >
            Menu
          </button>

          <Link href="/" className="focus-ring min-h-11 justify-self-center text-utility" aria-label="S17 Church home">
            S17
          </Link>

          <button
            type="button"
            className="focus-ring min-h-11 justify-self-end text-utility"
            aria-label="Search site"
          >
            Search
          </button>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={closeMenu} />
    </>
  );
}
