"use client";

import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import type { CSSProperties } from "react";
import { useEffect, useRef, useState } from "react";

const rotatingWords = ["friends", "neighbors", "disciples", "the city"];

const featureCards = [
  {
    title: "Gather",
    body: "We gather as one family.",
    image: "/images/preview/style20/asset-04.jpg",
    alt: "Three generations of family smiling together",
    color: "#0056b3",
  },
  {
    title: "Grow",
    body: "We grow together in faith.",
    image: "/images/preview/style20/asset-06.jpg",
    alt: "Friends at a picnic",
    color: "#006742",
  },
  {
    title: "Go",
    body: "We go together into the city.",
    image: "/images/preview/style20/asset-08.jpg",
    alt: "Group photo in front of American flag",
    color: "#C8102E",
  },
];

const moments = [
  ["/images/preview/style20/asset-10.jpg", "Two police officers holding a Salty Donuts gift bag", "Surprising the Coral Gables police with coffee and donuts."],
  ["/images/preview/style20/asset-11.jpg", "Children listening to a storyteller at VBS", "Storytime at VBS this summer."],
  ["/images/preview/style20/asset-12.jpg", "A volunteer filling out a form at a meeting", "Signing up to serve at a volunteer meeting."],
  ["/images/preview/style20/asset-13.jpg", "A child wearing a red bandana at Rodeo Sunday", "Little cowgirl vibes at Rodeo Sunday."],
  ["/images/preview/style20/asset-14.jpg", "Group praying with firefighters outside the station", "Praying for our firefighters outside the station."],
  ["/images/preview/style20/asset-15.jpg", "Women gathered on the beach for Bible study at sunset", "Beach Bible study at sunset."],
  ["/images/preview/style20/asset-16.jpg", "Praying with an Air Force recruiter on Memorial Day", "Praying for the Air Force on Memorial Day."],
  ["/images/preview/style20/asset-17.jpg", "Women dressed up and laughing together at the Ladies Tea", "Dressed up and laughing at our Ladies' Tea."],
];

export function SpotifyPreviewHome() {
  const [word, setWord] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const menuEase = [0.22, 1, 0.36, 1] as const;
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroMediaScale = useTransform(heroScroll, [0, 1], [1, 1.06]);
  const heroHeadlineY = useTransform(heroScroll, [0, 1], [0, -8]);
  const heroHeadlineOpacity = useTransform(heroScroll, [0, 0.72, 1], [1, 0.92, 0.58]);
  const heroSupportY = useTransform(heroScroll, [0, 1], [0, -12]);
  const heroSupportOpacity = useTransform(heroScroll, [0, 0.68, 1], [1, 0.85, 0.45]);

  useEffect(() => {
    const timer = window.setInterval(() => setWord((current) => (current + 1) % rotatingWords.length), 2200);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const menu = menuRef.current;
    const focusable = menu?.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
    );
    window.requestAnimationFrame(() => focusable?.[0]?.focus());

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        return;
      }
      if (event.key !== "Tab" || !focusable?.length) return;
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
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      window.requestAnimationFrame(() => menuButtonRef.current?.focus());
    };
  }, [menuOpen]);

  return (
    <main className={`spotify-home${menuOpen ? " menu-is-open" : ""}`} id="main-content">
      <header>
        <div className="wrap nav-inner">
          <a href="#" className="logo"><img src="/images/preview/style20/asset-01.png" alt="S17" style={{ height: 22, width: "auto" }} /></a>
          <nav className="links" aria-label="Primary navigation">
            <div className="nav-dropdown">
              <span className="dd-trigger">Pathway <span className="caret">▼</span></span>
              <div className="dd-panel">
                <a href="/gather" className="dd-item"><div className="dd-title">Gather <span>— We come together around Christ.</span></div></a>
                <a href="/grow" className="dd-item"><div className="dd-title">Grow <span>— Formed in homes and habits.</span></div></a>
                <a href="/go" className="dd-item"><div className="dd-title">Go <span>— Sent to love our neighbors.</span></div></a>
              </div>
            </div>
            <a href="#">Events</a><a href="/give">Give</a>
          </nav>
          <div className="nav-divider" />
          <div className="nav-right"><a href="#" className="text-link">Resources</a><a href="#" className="text-link">Contact</a></div>
          <a href="#visit" className="nav-cta">Plan Your Visit</a>
          <button
            ref={menuButtonRef}
            className="menu-btn"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="editorial-menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="menu-icon" aria-hidden="true"><span /><span /></span>
          </button>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            ref={menuRef}
            id="editorial-menu"
            className="editorial-menu"
            aria-label="Site menu"
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, x: 16, y: -8 }}
            animate={reduceMotion ? { opacity: 1 } : { opacity: 1, x: 0, y: 0 }}
            exit={{
              opacity: 0,
              x: reduceMotion ? 0 : 16,
              y: reduceMotion ? 0 : -8,
              transition: { duration: reduceMotion ? 0.01 : 0.26, ease: menuEase },
            }}
            transition={{ duration: reduceMotion ? 0.01 : 0.3, ease: menuEase }}
            onAnimationStart={() => {
              if (menuRef.current) menuRef.current.style.willChange = reduceMotion ? "opacity" : "transform, opacity";
            }}
            onAnimationComplete={() => {
              if (menuRef.current) menuRef.current.style.willChange = "auto";
            }}
          >
            <div className="menu-atmosphere" aria-hidden="true" />
            <motion.div
              className="wrap menu-scene"
              initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -4 }}
              animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              exit={{
                opacity: 0,
                y: 0,
                transition: { duration: reduceMotion ? 0.01 : 0.18, ease: menuEase },
              }}
              transition={{ duration: reduceMotion ? 0.01 : 0.24, delay: reduceMotion ? 0 : 0.05, ease: menuEase }}
            >
              <button className="menu-close-spacer" aria-hidden="true" tabIndex={-1} />
              <h1 className="mmenu-h1">Pathway</h1>
              <div className="mmenu-pills">
                <a href="/gather" className="mmenu-pill" onClick={() => setMenuOpen(false)}>Gather</a>
                <a href="/grow" className="mmenu-pill" onClick={() => setMenuOpen(false)}>Grow</a>
                <a href="/go" className="mmenu-pill" onClick={() => setMenuOpen(false)}>Go</a>
              </div>
              <div className="mmenu-links-big">
                <a href="#" onClick={() => setMenuOpen(false)}>Events</a>
                <a href="/give" onClick={() => setMenuOpen(false)}>Give</a>
              </div>
              <div className="mmenu-divider" />
              <div className="mmenu-links-small">
                <a href="#" onClick={() => setMenuOpen(false)}>Resources</a>
                <a href="/contact" onClick={() => setMenuOpen(false)}>Contact</a>
              </div>
              <img className="mmenu-logo" src="/images/preview/style20/asset-02.png" alt="S17" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.section
        ref={heroRef}
        className="hero"
      >
        <motion.div
          className="hero-media-stage"
          initial={reduceMotion ? false : { opacity: 0, scale: 0.94, y: 18 }}
          animate={reduceMotion ? undefined : { opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: reduceMotion ? 0.01 : 0.55, ease: menuEase }}
        >
          <motion.div
            className="hero-mark"
            style={reduceMotion ? undefined : { scale: heroMediaScale }}
          >
            <img src="/images/preview/style20/asset-03.jpg" alt="S17 community gathered outdoors in Miami" />
          </motion.div>
        </motion.div>
        <motion.div
          className="scrim"
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={reduceMotion ? undefined : { opacity: 1 }}
          transition={{ duration: 0.42, ease: menuEase }}
        />
        <div className="hero-content-stage">
          <div className="hero-inner">
            <motion.div
              className="hero-headline-stage"
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: reduceMotion ? 0.01 : 0.5, delay: reduceMotion ? 0 : 0.1, ease: menuEase }}
            >
              <motion.h1 style={reduceMotion ? undefined : { y: heroHeadlineY, opacity: heroHeadlineOpacity }}>
                The family for<br />
                <span className="rotate-shell">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={rotatingWords[word]}
                      className="rotate"
                      initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 8, scale: 0.985 }}
                      animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
                      exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -8, scale: 1.015 }}
                      transition={{ duration: reduceMotion ? 0.01 : 0.28, ease: menuEase }}
                    >
                      {rotatingWords[word]}
                    </motion.span>
                  </AnimatePresence>
                </span>
              </motion.h1>
            </motion.div>
            <motion.div
              className="hero-cta-stage"
              initial={reduceMotion ? false : { opacity: 0, y: 10 }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: reduceMotion ? 0.01 : 0.42, delay: reduceMotion ? 0 : 0.2, ease: menuEase }}
            >
              <motion.div className="ctas" style={reduceMotion ? undefined : { y: heroSupportY, opacity: heroSupportOpacity }}>
                <a href="#visit" className="btn-accent">Plan Your Visit</a><a href="#" className="btn-outline">Watch Now</a>
              </motion.div>
            </motion.div>
            <motion.div
              className="hero-copy-stage"
              initial={reduceMotion ? false : { opacity: 0, y: 8 }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: reduceMotion ? 0.01 : 0.36, delay: reduceMotion ? 0 : 0.3, ease: menuEase }}
            >
              <motion.p className="fine-center" style={reduceMotion ? undefined : { y: heroSupportY, opacity: heroSupportOpacity }}>
                A church where friends become family.<br />New here? <a href="#">See what to expect.</a>
              </motion.p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <section className="intro">
        <img className="intro-bg" src="https://picsum.photos/id/1062/1200/1400" alt="" />
        <div className="intro-scrim" />
        <div className="wrap">
          <h2 style={{ marginTop: 14 }}>As the city&apos;s church home, S17 is where neighbors and newcomers come together.</h2>
          <p>It&apos;s the place to find your people for the season you&apos;re in. The place that brings grace to your whole life.</p>
        </div>
      </section>

      <section className="device-section">
        <div className="wrap">
          <div className="device-head">
            <h2>We are here with you</h2>
            <p>No matter the season, no matter the distance you&apos;re still family.</p>
          </div>
          <div className="device-photo"><img src="https://picsum.photos/id/1027/900/540" alt="" /></div>
          <div className="device-copy"><h3>On Sundays</h3><p>Join us in person at 9:30am or 11:15am at 5911 West Flagler St., Miami.</p></div>
          <div className="device-photo"><img src="https://picsum.photos/id/1011/900/540" alt="" /></div>
          <div className="device-copy"><h3>Anywhere</h3><p>Can&apos;t make it in? Stream every service live, or catch up after on YouTube.</p></div>
          <div className="device-photo"><img src="https://picsum.photos/id/1025/900/540" alt="" /></div>
          <div className="device-copy"><h3>In a home</h3><p>Real food, real conversation, real friendships — Friends Houses meet weekly across Miami.</p></div>
        </div>
      </section>

      <section className="feature-list">
        <div className="wrap">
          <h2>With a family<br />that never stops</h2>
          <div className="flist">
            <div className="flist-row"><div className="flist-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 6.5c-1.5-1.2-3.6-1.8-6-1.8v13c2.4 0 4.5.6 6 1.8 1.5-1.2 3.6-1.8 6-1.8v-13c-2.4 0-4.5.6-6 1.8z" /><line x1="12" y1="6.5" x2="12" y2="19.5" /></svg></div><h3>Reading of Creeds</h3><p>We confess what the church has always believed. Ancient truth, spoken aloud.</p></div>
            <div className="flist-row"><div className="flist-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><line x1="5" y1="9" x2="5" y2="15" /><line x1="9" y1="6" x2="9" y2="18" /><line x1="13" y1="3" x2="13" y2="21" /><line x1="17" y1="7" x2="17" y2="17" /><line x1="21" y1="10" x2="21" y2="14" /></svg></div><h3>Sound doctrine</h3><p>Lose yourself in truth clearly taught, rooted in Scripture and the confessions.</p></div>
            <div className="flist-row"><div className="flist-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M8 15a4 4 0 0 1-4-4V7a4 4 0 0 1 8 0v4a4 4 0 0 1-4 4z" /><path d="M16 15a4 4 0 0 1-4-4V7a4 4 0 0 1 8 0v4a4 4 0 0 1-4 4z" /><path d="M6 15v1a4 4 0 0 0 4 4" /><path d="M14 15v1a4 4 0 0 0 4 4" /></svg></div><h3>Corporate confession</h3><p>Confess your sins together, or let the liturgy carry you automatically.</p></div>
            <div className="flist-row"><div className="flist-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M8 12.5l2.5 2.5 5.5-6" /></svg></div><h3>Immersive worship</h3><p>Full voice, full heart — worship you can feel in your chest.</p></div>
          </div>
        </div>
      </section>

      <div className="cta-band" id="visit">
        <a href="#visit" className="btn-accent">What to Expect</a>
        <p className="fine">Sundays, 10am English &amp; 11:15am Spanish<br />5911 West Flagler St., Miami.</p>
      </div>

      <div className="art-gap" />

      <section className="discover">
        <div className="wrap">
          <h2>Fresh ways to<br />grow deeper</h2>
          <p className="sub">Formed for you, by grace.</p>
        </div>
      </section>

      {featureCards.map((card) => (
        <section className="fcard-section" key={card.title}>
          <div className="wrap">
            <div className="fcard-list">
              <div className="feature-card" style={{ "--card-bg": card.color } as CSSProperties}>
                <div className="fc-mockup">
                  <img src={card.image} alt={card.alt} />
                  <div className="fc-fade" />
                </div>
                <div className="fc-eyebrow-row"><img src="/images/preview/style20/asset-01.png" alt="S17" /><span>{card.title}</span></div>
                <h3>{card.body}</h3>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="moments-section">
        <div className="wrap">
          <h2>Shaping the big<br />moments in<br />faith</h2>
          <p className="sub">S17 is where faith takes root and life change begins. Be here when grace shows up.</p>
        </div>
        <div className="moments-strip">
          {moments.map(([src, alt, caption]) => (
            <div className="moments-item" key={caption}>
              <img src={src} alt={alt} />
              <p>{caption}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="final-cta">
        <div className="wrap">
          <h2>New here?</h2>
          <p>Join us this Sunday and see what S17 is all about. No experience necessary — just come as you are.</p>
          <a href="#visit" className="btn-accent">Plan Your Visit</a>
          <a href="#pathway" className="soft-link">Or explore the S17 Path.</a>
        </div>
      </section>

      <footer><div className="wrap footer-grid"><div className="footer-brand"><p className="logo-f"><img src="/images/preview/style20/asset-18.png" alt="S17" style={{ height: 26, width: "auto" }} /></p><p>Where friends become family.</p><p>5911 West Flagler St., Miami, FL 33144</p></div><div className="footer-col"><h4>Useful Links</h4><ul><li><a href="#visit">Plan Your Visit</a></li><li><a href="#">Support/Contact</a></li><li><a href="/give">Give</a></li></ul></div><div className="footer-col"><h4>About S17</h4><ul><li><a href="#">Path</a></li><li><a href="#">Beliefs</a></li><li><a href="#">Leaders</a></li></ul></div><div className="footer-col"><h4>Social</h4><div className="social-row"><a href="#" aria-label="Instagram"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" stroke="none" /></svg></a><a href="#" aria-label="YouTube"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M22.5 7.2s-.22-1.56-.9-2.24c-.86-.9-1.83-.9-2.27-.96C16.2 3.7 12 3.7 12 3.7h-.01s-4.2 0-7.33.3c-.44.06-1.41.06-2.27.96-.68.68-.9 2.24-.9 2.24S1.2 9 1.2 10.8v1.4C1.2 14 1.5 15.8 1.5 15.8s.22 1.56.9 2.24c.86.9 1.98.87 2.48.97 1.8.17 7.12.3 7.12.3s4.2-.01 7.33-.3c.44-.06 1.41-.06 2.27-.96.68-.68.9-2.24.9-2.24s.3-1.8.3-3.6v-1.4c0-1.8-.3-3.6-.3-3.6zM9.75 14.9V8.9l6 3-6 3z" /></svg></a><a href="#" aria-label="Facebook"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M13.5 21v-7.6h2.6l.4-3h-3v-1.9c0-.87.24-1.46 1.5-1.46h1.6V4.34c-.28-.04-1.23-.12-2.34-.12-2.32 0-3.9 1.4-3.9 4v2.2H8v3h2.4V21h3.1z" /></svg></a></div></div></div><div className="wrap footer-bottom"><p>© 2026 S17 Church.</p></div></footer>
    </main>
  );
}
