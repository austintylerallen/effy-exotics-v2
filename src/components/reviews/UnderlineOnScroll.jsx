"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function UnderlineOnScroll() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 20%"],
  });
  const scaleX = useTransform(scrollYProgress, [0, 0.2, 1], [0, 0.6, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.05], [0, 1]);

  return (
    <span ref={ref} className="relative inline-block">
      <motion.span
        aria-hidden="true"
        style={{ scaleX, opacity, transformOrigin: "0% 50%" }}
        className="absolute left-0 bottom-0 h-[2px] w-full bg-[#FFD36E] rounded-full"
      />
    </span>
  );
}
