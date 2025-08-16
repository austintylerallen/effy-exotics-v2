// "use client";
// import { useEffect, useRef, useState } from "react";
// import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
// import Image from "next/image";
// import styles from "./parallax-hero.module.css";

// const CITIES = ["LAS CRUCES", "ALAMOGORDO"];

// export default function ParallaxHero() {
//   const ref = useRef(null);

//   // Scroll-driven parallax
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start start", "end start"],
//   });

//   const bgY          = useTransform(scrollYProgress, [0, 1], ["0%", "-8%"]);
//   const midY         = useTransform(scrollYProgress, [0, 1], ["0%", "-16%"]);
//   const titleY       = useTransform(scrollYProgress, [0, 1], ["0%", "-6%"]);
//   const titleOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.92]);

//   // City cycling + settle-to-brand behavior
//   const [cityIndex, setCityIndex] = useState(0);
//   const [settled, setSettled] = useState(false);

//   // Swap cities until we "settle"
//   useEffect(() => {
//     if (settled) return;
//     const id = setInterval(() => {
//       setCityIndex((i) => (i + 1) % CITIES.length);
//     }, 2200);
//     return () => clearInterval(id);
//   }, [settled]);

//   // Settle to just "EFFY EXOTICS" after you begin scrolling (~20% of hero)
//   useEffect(() => {
//     const unsub = scrollYProgress.on("change", (v) => {
//       setSettled(v > 0.2);
//     });
//     return () => unsub();
//   }, [scrollYProgress]);

//   const activeCity = CITIES[cityIndex];

//   return (
//     <section ref={ref} className={styles.hero} aria-label="Effy Exotics hero">
//       {/* Backgrounds */}
//       <motion.div className={styles.bg} style={{ y: bgY }} aria-hidden="true" />
//       <motion.div className={styles.mid} style={{ y: midY }} aria-hidden="true">
//         <Image
//           src="/img/hero/bg-texture2.jpg"
//           alt=""
//           fill
//           sizes="100vw"
//           style={{ objectFit: "cover" }}
//           priority
//         />
//       </motion.div>

//       {/* Copy */}
//       <div className={styles.copy}>
//         {/* Headline with animated city slot */}
//         <motion.h1
//           className={styles.title}
//           style={{ y: titleY, opacity: titleOpacity }}
//           initial={{ opacity: 0, y: 18 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
//         >
//           <span className={styles.brand}>EFFY EXOTICS</span>{" "}
//           <span className={styles.citySlot} aria-live="polite">
//             <AnimatePresence mode="popLayout" initial={false}>
//               {!settled && (
//                 <motion.span
//                   key={activeCity}
//                   className={styles.accent}
//                   initial={{ y: 16, opacity: 0, filter: "blur(6px)" }}
//                   animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
//                   exit={{ y: -16, opacity: 0, filter: "blur(6px)" }}
//                   transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
//                 >
//                   {activeCity}
//                 </motion.span>
//               )}
//             </AnimatePresence>
//           </span>
//         </motion.h1>

//         <motion.p
//           className={styles.sub}
//           initial={{ opacity: 0, y: 10 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
//         >
//           Premium flower, carts, and concentrates — thoughtfully curated, clearly labeled.
//         </motion.p>

//         <motion.a
//           className={styles.cta}
//           href="/shop"
//           initial={{ opacity: 0, y: 10 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, ease: "easeOut", delay: 0.45 }}
//           whileHover={{ scale: 1.02 }}
//           whileTap={{ scale: 0.98 }}
//         >
//           Shop Now
//         </motion.a>
//       </div>
//     </section>
//   );
// }



"use client";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import styles from "./parallax-hero.module.css";

const CITIES = ["LAS CRUCES", "ALAMOGORDO"];

export default function ParallaxHero() {
  const ref = useRef(null);

  // Scroll-driven parallax
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const bgY          = useTransform(scrollYProgress, [0, 1], ["0%", "-8%"]);
  const midY         = useTransform(scrollYProgress, [0, 1], ["0%", "-16%"]);
  const titleY       = useTransform(scrollYProgress, [0, 1], ["0%", "-6%"]);
  const titleOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.92]);

  // NEW: fade the mid overlay (bg-texture2) after ~30% scroll
  //  - stays at 1 until 0.30, then fades to 0 by 1.0
  const midOpacity   = useTransform(scrollYProgress, [0, 0.1, 1], [1, 1, 0]);

  // City cycling + settle-to-brand behavior
  const [cityIndex, setCityIndex] = useState(0);
  const [settled, setSettled] = useState(false);

  // Swap cities until we "settle"
  useEffect(() => {
    if (settled) return;
    const id = setInterval(() => {
      setCityIndex((i) => (i + 1) % CITIES.length);
    }, 2200);
    return () => clearInterval(id);
  }, [settled]);

  // Settle to just "EFFY EXOTICS" after you begin scrolling (~20% of hero)
  useEffect(() => {
    const unsub = scrollYProgress.on("change", (v) => {
      setSettled(v > 0.2);
    });
    return () => unsub();
  }, [scrollYProgress]);

  const activeCity = CITIES[cityIndex];

  return (
    <section ref={ref} className={styles.hero} aria-label="Effy Exotics hero">
      {/* Backgrounds */}
      <motion.div className={styles.bg} style={{ y: bgY }} aria-hidden="true" />
      <motion.div
        className={styles.mid}
        style={{ y: midY, opacity: midOpacity }}   // ← fade on scroll
        aria-hidden="true"
      >
        <Image
          src="/img/hero/bg-texture2.jpg"
          alt=""
          fill
          sizes="100vw"
          style={{ objectFit: "cover" }}
          priority
        />
      </motion.div>

      {/* Copy */}
      <div className={styles.copy}>
        {/* Headline with animated city slot */}
        <motion.h1
          className={styles.title}
          style={{ y: titleY, opacity: titleOpacity }}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
        >
          <span className={styles.brand}>EFFY EXOTICS</span>{" "}
          <span className={styles.citySlot} aria-live="polite">
            <AnimatePresence mode="popLayout" initial={false}>
              {!settled && (
                <motion.span
                  key={activeCity}
                  className={styles.accent}
                  initial={{ y: 16, opacity: 0, filter: "blur(6px)" }}
                  animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                  exit={{ y: -16, opacity: 0, filter: "blur(6px)" }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                  {activeCity}
                </motion.span>
              )}
            </AnimatePresence>
          </span>
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
      </div>
    </section>
  );
}
