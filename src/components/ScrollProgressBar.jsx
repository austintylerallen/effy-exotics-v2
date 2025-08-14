"use client";
import { motion, useScroll } from "framer-motion";

export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      style={{ scaleX: scrollYProgress, transformOrigin: "0% 50%" }}
      className="fixed left-0 top-0 z-[1000] h-1 w-full bg-gradient-to-r from-lime-300 to-amber-300"
    />
  );
}
