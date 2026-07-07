"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const rotatingWords = ["friends", "neighbors", "disciples", "the city"];

const features = [
  ["A church that's actually for you", "Formed by grace, not performance. Come as you are, every week."],
  ["Homes, not just Sundays", "Friends Houses meet all across Miami — real community, mid-week."],
  ["A clear next step, always", "Next Steps class, serving teams, baptism — you're never stuck at “just visiting.”"],
  ["Sent, not just gathered", "Mission isn't a program at the edge — it's the shape of a sent people."],
];

const pathway = [
  ["✟", "01", "We gather", "We come together around Christ. Sundays are the family table of S17 — worship, Word, prayer, sacraments, and welcome."],
  ["🌱", "02", "We grow", "We are formed in homes, habits, and community. Friends Houses and next steps help people move from attendance into discipleship."],
  ["⌖", "03", "We go", "We love our neighbors and bless the city. Mission is not a program at the edge of the church — it is the shape of a sent people."],
];

const fieldNotes = [
  [1011, "Baptisms on the beach, Easter Sunday."],
  [1027, "A Friends House in Flagami, Tuesday night."],
  [1025, "Setup crew before 9:30am service."],
  [1035, "Serve Day at Fair Havens."],
  [1050, "Communion, taken together."],
];

const nextSteps = [
  ["📅", "Sunday Gathering", "9:30am & 11:15am", ["Worship, Word, and welcome", "Kids' programming every week", "No registration needed"], "See service times"],
  ["⌂", "Friends House", "Weeknights", ["Homes across Miami", "Discipleship, not just discussion", "Open to all, first visit free"], "Find a house"],
  ["♥", "Serve Day", "Monthly", ["Bless our Miami neighbors", "No experience required", "Teams for all ages"], "See upcoming dates"],
  ["●", "New Here class", "First Sunday", ["Meet our pastors", "Hear the story of S17", "Coffee's on us"], "Reserve a seat"],
];

export function SpotifyPreviewHome() {
  const [word, setWord] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

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

  const menuItems = [
    ["About", "/about"],
    ["Gather", "/gather"],
    ["Grow", "/grow"],
    ["Go", "/go"],
    ["Give", "/give"],
  ];

  return (
    <main className={`spotify-home${menuOpen ? " menu-is-open" : ""}`} id="main-content">
      <header>
        <div className="wrap nav-inner">
          <a href="#" className="logo"><img src="/images/preview/s17-preview-logo.png" alt="S17" style={{ height: 22, width: "auto" }} /></a>
          <nav className="links" aria-label="Primary navigation">
            <div className="nav-dropdown">
              <span className="dd-trigger">Pathway <span className="caret">▼</span></span>
              <div className="dd-panel">
                <a href="/gather" className="dd-item"><div className="dd-title">Gather <span>— We come together around Christ.</span></div></a>
                <a href="/grow" className="dd-item"><div className="dd-title">Grow <span>— Formed in homes and habits.</span></div></a>
                <a href="/go" className="dd-item"><div className="dd-title">Go <span>— Sent to love our neighbors.</span></div></a>
              </div>
            </div>
            <a href="/about">About</a><a href="/give">Give</a>
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
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, x: 18, y: -10 }}
            animate={reduceMotion ? { opacity: 1 } : { opacity: 1, x: 0, y: 0 }}
            exit={{
              opacity: 0,
              x: reduceMotion ? 0 : 18,
              y: reduceMotion ? 0 : -10,
              transition: { duration: reduceMotion ? 0.01 : 0.24, ease: [0.22, 1, 0.36, 1] },
            }}
            transition={{ duration: reduceMotion ? 0.01 : 0.3, ease: [0.22, 1, 0.36, 1] }}
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
                transition: { duration: reduceMotion ? 0.01 : 0.18, ease: [0.22, 1, 0.36, 1] },
              }}
              transition={{ duration: reduceMotion ? 0.01 : 0.24, delay: reduceMotion ? 0 : 0.06, ease: [0.22, 1, 0.36, 1] }}
            >
              <nav className="editorial-links" aria-label="Menu navigation">
                {menuItems.map(([label, href], index) => (
                  <motion.a
                    href={href}
                    key={label}
                    onClick={() => setMenuOpen(false)}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      duration: reduceMotion ? 0.01 : 0.24,
                      delay: reduceMotion ? 0 : 0.06 + index * 0.03,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <span>{label}</span>
                  </motion.a>
                ))}
              </nav>
              <motion.div
                className="menu-bottom"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: reduceMotion ? 0.01 : 0.24, delay: reduceMotion ? 0 : 0.06, ease: [0.22, 1, 0.36, 1] }}
              >
                <nav className="menu-utilities" aria-label="Menu utility navigation">
                  <div className="menu-utility-primary">
                    <a href="/visit" onClick={() => setMenuOpen(false)}>Plan your visit</a>
                    <a href="/contact" onClick={() => setMenuOpen(false)}>Contact</a>
                  </div>
                  <span className="menu-separator" aria-hidden="true" />
                  <a className="menu-login" href="https://s17.churchcenter.com/">Log in</a>
                </nav>
                <a className="menu-footer-logo" href="/" aria-label="S17 Church home" onClick={() => setMenuOpen(false)}>
                  <img src="/images/branding/s17-logo-white.png" alt="" />
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <section className="hero">
        <div className="hero-mark"><img src="/images/preview/s17-preview-hero.jpg" alt="S17 community gathered outdoors in Miami" /></div>
        <div className="scrim" />
        <div className="hero-inner">
          <h1>The family for<br /><span className="rotate">{rotatingWords[word]}</span></h1>
          <div className="ctas"><a href="#visit" className="btn-accent">Plan Your Visit</a><a href="/visit" className="btn-outline">See What to Expect</a></div>
          <p className="fine-center">A church where friends become family.<br />New here? <a href="/visit">See what to expect.</a></p>
        </div>
      </section>

      <section className="intro"><div className="wrap"><span className="eyebrow">Welcome to S17</span><h2 style={{ marginTop: 14 }}>As the family of God, S17 is where neighbors and disciples come together.</h2><p>It's the place to find your people, your next step, and a city worth blessing. The place that brings church into your whole life.</p><div className="intro-video"><img src="https://picsum.photos/id/1039/1200/675" alt="" /></div></div></section>

      <section className="featured"><div className="wrap"><span className="eyebrow">Current series</span><div className="featured-card" style={{ marginTop: 20 }}><div className="featured-text"><span className="badge">Sundays</span><h2>Ordinary People, Beheld by Christ</h2><p>A six-week walk through the Gospel of Mark — starting where everyone gets to start: not enough, but seen.</p><a href="#visit" className="btn-accent">Join us Sundays</a><p className="fine">Sundays, 9:30am & 11:15am · 5911 West Flagler St., Miami.</p></div><div className="featured-img"><img src="https://picsum.photos/id/1041/900/700" alt="Congregation gathered in worship" /></div></div></div></section>

      <section className="feature-list"><div className="wrap"><h2>With a family that never stops showing up</h2><div className="flist">{features.map(([title, body]) => <div className="flist-row" key={title}><span className="flist-check">+</span><div><h3>{title}</h3><p>{body}</p></div></div>)}</div><div style={{ marginTop: 36 }}><a href="#visit" className="btn-accent">Plan Your Visit</a><p className="fine">Sundays, 9:30am & 11:15am · 5911 West Flagler St., Miami.</p></div></div></section>

      <section className="pathway"><div className="wrap"><div className="pathway-head"><span className="eyebrow">The S17 pathway</span><h2 style={{ marginTop: 14 }}>We gather. We grow. We go.</h2></div><div className="pathway-grid">{pathway.map(([icon, numeral, title, body]) => <a href={`/${title.split(" ")[1]}`} className="pathway-card" key={title}><div className="top-row"><span style={{ fontSize: 22 }}>{icon}</span><span className="numeral">{numeral}</span></div><h3>{title}</h3><p>{body}</p><span className="more">Learn more →</span></a>)}</div></div></section>

      <section className="engage"><div className="wrap"><div className="engage-head"><span className="eyebrow">However you engage</span><h2 style={{ marginTop: 14 }}>Take part wherever you are</h2></div><div className="engage-grid"><div className="engage-item"><div className="ic">📍</div><h3>In person</h3><p>Join the family every Sunday at our West Flagler gathering.</p></div><div className="engage-item"><div className="ic">▶</div><h3>Online</h3><p>Can't make it in? Every sermon is on YouTube, usually posted by Sunday evening.</p></div><div className="engage-item"><div className="ic">⌂</div><h3>In a home</h3><p>Friends Houses meet throughout the week — no Sunday required to belong.</p></div></div></div></section>

      <section className="field-notes"><div className="wrap fn-head"><span className="eyebrow">Shaping the everyday moments of S17</span><h2 style={{ marginTop: 14 }}>Real Sundays. Real people.</h2></div><div className="fn-strip">{fieldNotes.map(([id, caption]) => <figure className="fn-card" key={caption}><img src={`https://picsum.photos/id/${id}/400/400`} alt="" /><figcaption>{caption}</figcaption></figure>)}</div></section>

      <section className="next-steps" id="visit"><div className="wrap"><div className="ns-head"><span className="eyebrow">Your next step</span><h2 style={{ marginTop: 14 }}>Come and see what God is building</h2><p>Plan your visit, meet the family, and take one clear next step toward life with Jesus and S17.</p></div><div className="ns-grid">{nextSteps.map(([icon, title, timing, items, action]) => <div className="ns-card" key={String(title)}><div className="ic">{icon as string}</div><h3>{title as string}</h3><div className="ns-price">{timing as string}</div><div className="ns-divider" /><ul>{(items as string[]).map((item) => <li key={item}>{item}</li>)}</ul><a href="/visit" className="cta">{action as string}</a></div>)}</div></div></section>

      <footer><div className="wrap footer-grid"><div className="footer-brand"><p className="logo-f"><img src="/images/preview/s17-preview-logo.png" alt="S17" style={{ height: 26, width: "auto" }} /></p><p>Where friends become family.</p><p>5911 West Flagler St., Miami, FL 33144</p></div><div className="footer-col"><h4>Pathway</h4><ul><li><a href="/about">About</a></li><li><a href="/gather">Gather</a></li><li><a href="/grow">Grow</a></li><li><a href="/go">Go</a></li><li><a href="/give">Give</a></li></ul></div><div className="footer-col"><h4>Information</h4><ul><li><a href="/visit">Visit</a></li><li><a href="#">Events</a></li><li><a href="#">Resources</a></li><li><a href="#">Contact</a></li><li><a href="https://youtube.com/">Sermons on YouTube</a></li></ul></div><div className="footer-col"><h4>Social</h4><div className="social-row"><a href="#" aria-label="YouTube">YT</a><a href="#" aria-label="Instagram">IG</a><a href="#" aria-label="Facebook">FB</a></div></div></div><div className="wrap footer-bottom"><p>© 2026 S17 Church.</p><p>Beliefs live inside About. Sermons live on YouTube.</p></div></footer>
    </main>
  );
}
