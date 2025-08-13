"use client";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

/**
 * Global smooth scrolling via Lenis.
 * No GSAP. Framer Motion will read scroll via useScroll().
 */
export default function SmoothScrollProvider({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      smoothWheel: true,
      duration: 1.1,       // tweak feel here
      wheelMultiplier: 1.0 // try 1.2–1.6 if you want snappier
    });

    let rafId;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    const onResize = () => {
      // Lenis handles most cases automatically; keep hook for future tweaks
    };
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
