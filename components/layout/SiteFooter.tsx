import Link from "next/link";
import { footerContent } from "@/content/footer";
import { socialNavigation } from "@/content/navigation";
import { Container } from "./Container";

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--color-line)] bg-[var(--color-ink)] py-16 text-[var(--color-white)] md:py-24">
      <Container>
        <div className="grid gap-12 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5">
            <Link href="/" className="focus-ring inline-block text-utility">
              S17 Church
            </Link>
            <p className="text-subsection mt-8 max-w-[12ch] text-balance">
              {footerContent.tagline}
            </p>
            <p className="text-support mt-8 max-w-sm text-[rgba(255,255,255,0.72)]">
              {footerContent.address}
            </p>
          </div>

          <nav className="md:col-span-3" aria-label="Footer primary navigation">
            <h2 className="text-utility text-[rgba(255,255,255,0.58)]">Pathway</h2>
            <ul className="mt-6 space-y-3">
              {footerContent.primaryLinks.map((item) => (
                <li key={item.href}>
                  <Link className="focus-ring text-support transition-opacity hover:opacity-70" href={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="md:col-span-2" aria-label="Footer utility navigation">
            <h2 className="text-utility text-[rgba(255,255,255,0.58)]">Information</h2>
            <ul className="mt-6 space-y-3">
              {footerContent.utilityLinks.map((item) => (
                <li key={item.href}>
                  <Link className="focus-ring text-support transition-opacity hover:opacity-70" href={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="md:col-span-2" aria-label="Social links">
            <h2 className="text-utility text-[rgba(255,255,255,0.58)]">Social</h2>
            <ul className="mt-6 space-y-3">
              {socialNavigation.map((item) => (
                <li key={item.href}>
                  <Link className="focus-ring text-support transition-opacity hover:opacity-70" href={item.href} target="_blank" rel="noopener noreferrer">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-[var(--color-line-inverse)] pt-8 text-support text-[rgba(255,255,255,0.58)] md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} S17 Church.</p>
          <p>Beliefs live inside About. Sermons live on YouTube.</p>
        </div>
      </Container>
    </footer>
  );
}
