"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import s from "./standards.module.css";

export default function Standards() {
  const ref = useRef(null);

  // progress: 0 at top of section, 1 near the end
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  // Parallax + reveal
  const titleY = useTransform(scrollYProgress, [0, 1], ["20%", "-10%"]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.15, 1], [0, 1, 1]);

  const card1Y = useTransform(scrollYProgress, [0, 1], ["12%", "-8%"]);
  const card2Y = useTransform(scrollYProgress, [0, 1], ["6%", "-4%"]);
  const card3Y = useTransform(scrollYProgress, [0, 1], ["0%", "-2%"]);

  const cardOpacity = useTransform(scrollYProgress, [0, 0.08, 1], [0, 1, 1]);

  return (
    <section ref={ref} className={s.wrap} aria-label="Our Standards">
      <div className={s.sticky}>
        <motion.h2 className={s.title} style={{ y: titleY, opacity: titleOpacity }}>
          Our <span className={s.accent}>Standards</span>
        </motion.h2>

        <div className={s.grid}>
          <motion.article className={s.card} style={{ y: card1Y, opacity: cardOpacity }}>
            <h3>Potency Transparency</h3>
            <p>Clear THC/CBD with batch & COA links on every product page.</p>
          </motion.article>

          <motion.article className={s.card} style={{ y: card2Y, opacity: cardOpacity }}>
            <h3>Terpene Forward</h3>
            <p>Flavor + effect expectations surfaced, not buried in fine print.</p>
          </motion.article>

          <motion.article className={s.card} style={{ y: card3Y, opacity: cardOpacity }}>
            <h3>Responsible Sourcing</h3>
            <p>We prioritize compliant cultivators with consistent results.</p>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
