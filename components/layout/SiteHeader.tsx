"use client";

import Link from "next/link";
import Image from "next/image";
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
          "fixed inset-x-0 top-0 z-header pb-5 pt-[calc(1.25rem+env(safe-area-inset-top))] transition-colors duration-base ease-standard",
          headerTone,
        )}
      >
        <div className="grid grid-cols-[1fr_auto_1fr] items-center pl-[max(var(--container-gutter),env(safe-area-inset-left))] pr-[max(var(--container-gutter),env(safe-area-inset-right))]">
          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setMenuOpen(true)}
            className="focus-ring min-h-11 justify-self-start text-utility"
            aria-label="Open menu"
            aria-haspopup="dialog"
            aria-expanded={menuOpen}
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6" fill="none">
              <path d="M3 7h18M3 17h18" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </button>

          <Link href="/" className="focus-ring flex min-h-11 items-center justify-self-center" aria-label="S17 Church home">
            <Image
              src="/images/branding/s17-logo-white.png"
              alt=""
              width={948}
              height={536}
              priority
              className={cn(
                "h-auto w-16 transition-[filter] duration-base ease-standard md:w-[4.5rem]",
                (!isHome || pastHomeHero) && "brightness-0",
              )}
            />
          </Link>

          <button
            type="button"
            className="focus-ring min-h-11 justify-self-end text-utility"
            aria-label="Search site"
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6" fill="none">
              <circle cx="10.75" cy="10.75" r="6.75" stroke="currentColor" strokeWidth="1.5" />
              <path d="m16 16 4.25 4.25" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </button>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={closeMenu} />
    </>
  );
}
