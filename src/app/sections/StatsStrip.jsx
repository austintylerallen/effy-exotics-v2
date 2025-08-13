"use client";
import { motion } from "framer-motion";
import s from "./stats-strip.module.css";

const items = [
  { k: "Products Tested", v: "100%" },
  { k: "Avg. Rating", v: "4.9★" },
  { k: "Daily Deals", v: "7 / wk" },
];

export default function StatsStrip() {
  return (
    <section className={s.wrap} aria-label="Trust & Stats">
      <div className={s.grid}>
        {items.map((it) => (
          <motion.div
            key={it.k}
            className={s.item}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className={s.value}>{it.v}</div>
            <div className={s.key}>{it.k}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
