"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./parallax-hero.module.css";


export default function ParallaxHero() {
  const ref = useRef(null);

  // 0 when hero top hits viewport top, 1 when hero bottom hits viewport top
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Parallax depths
  const bgY          = useTransform(scrollYProgress, [0, 1], ["0%", "-8%"]);
  const titleY       = useTransform(scrollYProgress, [0, 1], ["0%", "-6%"]);
  const titleOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.92]);

  return (
    <section ref={ref} className={styles.hero} aria-label="Effy Exotics hero">
      {/* --- Background layer (CSS handles image + repeat + veil + haze) --- */}
      <motion.div className={styles.bg} style={{ y: bgY }} aria-hidden="true" />

      {/* --- Foreground product image (optional) --- */}
      {/*
      <motion.div
        className={styles.fg}
        style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]) }}
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Image
          src="/img/hero/feature-jar.png"
          alt="Featured Effy product"
          width={860}
          height={600}
          className={styles.fgImg}
        />
      </motion.div>
      */}

      {/* --- Copy --- */}
      <div className={styles.copy}>
        <motion.h1
          className={styles.title}
          style={{ y: titleY, opacity: titleOpacity }}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
        >
          EFFY EXOTICS <span className={styles.accent}>LAS CRUCES</span>
        </motion.h1>

        <motion.p
          className={styles.sub}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
        >
          Premium flower, carts, and concentrates — thoughtfully curated, clearly labeled.
        </motion.p>

        <motion.a
          className={styles.cta}
          href="/shop"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.45 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Shop Now
        </motion.a>

        {/* --- Brands carousel (optional) ---
        <BrandsCarousel /> */}
      </div>
    </section>
  );
}
