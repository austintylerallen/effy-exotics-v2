// src/components/core/Header.jsx
"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import ShopButton from "@/components/shop/ShopButton";
import LocationSelect from "@/components/location/LocationSelect";
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
        <Link href="/" className={h.brand}>
          <img src="/img/favicon.png" alt="Effy Exotics Logo" className={h.icon} />
          <span>EFFY EXOTICS</span>
        </Link>

        <nav className={h.nav}>
          {/* <Link href="/deals">Deals</Link> */}
          <Link href="/#visit">Visit</Link>
          <Link href="/#about">About</Link>
          <Link href="/lab">Lab</Link>

          {/* Location picker + smart Shop */}
          <LocationSelect className="ml-2" />
          {/* Use the module class here so CSS applies */}
          <ShopButton className={`${h.cta} ml-1`} />
        </nav>
      </div>
    </header>
  );
}
