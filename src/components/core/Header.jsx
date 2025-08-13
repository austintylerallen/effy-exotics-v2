"use client";
import { useEffect, useState } from "react";
import h from "./header.module.css";

export default function Header() {
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`${h.header} ${solid ? h.solid : ""}`}>
      <div className={h.inner}>
        <div className={h.brand}>
          <span className={h.dot} />
          <span>EFFY EXOTICS</span>
        </div>
        <nav className={h.nav}>
          <a href="/las-cruces">Las Cruces</a>
          <a href="/alamogordo">Alamogordo</a>
          <a href="/deals">Deals</a>
          <a href="/about">About</a>
        </nav>
      </div>
    </header>
  );
}
