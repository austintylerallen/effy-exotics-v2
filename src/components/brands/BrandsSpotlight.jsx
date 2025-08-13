"use client";
import { useEffect, useMemo, useRef, useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import styles from "./brands-spotlight.module.css";

/**
 * Drop transparent PNG/SVG logos in /public/brands
 * - /public/brands/backpack-boyz.png
 * - /public/brands/cookies.png
 * - /public/brands/effy-exotics.png
 * - /public/brands/pmc-growers.png
 */
const BRANDS = [
  {
    key: "backpack-boyz",
    name: "Backpack Boyz",
    logo: "/img/brands/backpack-boyz.png",
    blurb:
      "Loud, terpene-rich flower with cult drops. Bold profiles and small-batch heat—curated for flavor.",
    cta: { label: "Shop Backpack Boyz", href: "/shop?brand=backpack-boyz" },
  },
  {
    key: "cookies",
    name: "Cookies",
    logo: "/img/brands/cookies.png",
    blurb:
      "Iconic genetics and consistent quality. Classics and collabs built for taste and effect.",
    cta: { label: "Shop Cookies", href: "/shop?brand=cookies" },
  },
  {
    key: "effy-exotics",
    name: "Effy Exotics",
    logo: "/img/brands/effy-exotics.svg",
    blurb:
      "Our signature line: clean, tested, and flavor-forward. Premium flower and carts with balance and punch.",
    cta: { label: "Shop Effy Exotics", href: "/shop?brand=effy-exotics" },
  },
  {
    key: "pmc-growers",
    name: "PMC Growers",
    logo: "/img/brands/pmc-growers.png",
    blurb:
      "Boutique cultivation with meticulous QA. Fresh batches, clear COAs, and terp-driven experiences.",
    cta: { label: "Shop PMC Growers", href: "/shop?brand=pmc-growers" },
  },
];

const FADE = {
  enter: { opacity: 0, y: 8 },
  center: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
};

export default function BrandsSpotlight() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef(null);
  const active = BRANDS[index];

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % BRANDS.length);
  }, []);
  const prev = useCallback(() => {
    setIndex((i) => (i - 1 + BRANDS.length) % BRANDS.length);
  }, []);

  // Auto-advance every 5s (pause on hover/focus)
  useEffect(() => {
    if (paused) return;
    intervalRef.current = setInterval(next, 5000);
    return () => clearInterval(intervalRef.current);
  }, [next, paused]);

  // Keyboard support
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  const dots = useMemo(
    () =>
      BRANDS.map((b, i) => (
        <button
          key={b.key}
          className={`${styles.dot} ${i === index ? styles.dotActive : ""}`}
          onClick={() => setIndex(i)}
          aria-label={`Show ${b.name}`}
          aria-current={i === index ? "true" : "false"}
        />
      )),
    [index]
  );

  return (
    <section
      className={styles.wrap}
      aria-label="Brand Spotlight"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className={styles.inner}>
        {/* Left: text */}
        <div className={styles.left}>
          <AnimatePresence mode="wait">
            <motion.div
              key={`text-${active.key}`}
              initial={FADE.enter}
              animate={FADE.center}
              exit={FADE.exit}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <div className={styles.kicker}>Brand Spotlight</div>
              <h2 className={styles.title}>{active.name}</h2>
              <p className={styles.blurb}>{active.blurb}</p>

              <div className={styles.controls}>
                <button className={styles.nav} onClick={prev} aria-label="Previous brand">‹</button>
                <button className={styles.nav} onClick={next} aria-label="Next brand">›</button>
                <div className={styles.dots} role="tablist" aria-label="Brand selector">
                  {dots}
                </div>
              </div>

              <a className={styles.cta} href={active.cta.href}>{active.cta.label}</a>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right: logo */}
        <div className={styles.right}>
          <AnimatePresence mode="wait">
            <motion.div
              key={`logo-${active.key}`}
              className={styles.logoWrap}
              initial={{ opacity: 0, scale: 0.985 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.985 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <Image
                src={active.logo}
                alt={`${active.name} logo`}
                width={560}
                height={280}
                className={styles.logo}
                priority
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
