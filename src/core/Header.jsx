"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ShopButton from "@/components/shop/ShopButton";
import LocationSelect from "@/components/location/LocationSelect";
import h from "./header.module.css";

export default function Header() {
  const [solid, setSolid] = useState(false);
  const pathname = usePathname() || "/";

  // Derive current city from the URL. Default to las-cruces if unknown.
  const city = pathname.startsWith("/alamogordo")
    ? "alamogordo"
    : pathname.startsWith("/las-cruces")
    ? "las-cruces"
    : "las-cruces";

  const homePath = `/${city}`;

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`${h.header} ${solid ? h.solid : ""}`}>
      <div className={h.inner}>
        <Link href={homePath} className={h.brand}>
          <img src="/img/favicon.png" alt="Effy Exotics Logo" className={h.icon} />
          <span>EFFY EXOTICS</span>
        </Link>

        <nav className={h.nav}>
          {/* Links target the city HOME page + hash so it scrolls to the section */}
          <Link href={{ pathname: homePath, hash: "visit" }}>Visit</Link>
          <Link href={{ pathname: homePath, hash: "about" }}>About</Link>
          {/* City-aware pages */}
          <Link href={`/${city}/the_lab`}>Lab</Link>

          <LocationSelect className="ml-2" />
          <ShopButton className={`${h.cta} ml-1`} />
        </nav>
      </div>
    </header>
  );
}
