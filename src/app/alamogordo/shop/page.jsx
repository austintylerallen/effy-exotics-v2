// src/app/alamogordo/shop/page.jsx
"use client";
import { useEffect } from "react";
import { useLocation } from "@/core/LocationProvider";

export const metadata = { title: "Shop – Alamogordo | Effy Exotics" };

export default function ShopPage() {
  const { location } = useLocation();

  useEffect(() => {
    if (!location?.menuUrl) return;
    const s = document.createElement("script");
    s.async = true;
    s.id = "dutchie--embed__script";
    s.src = location.menuUrl;
    document.body.appendChild(s);
    return () => { document.body.removeChild(s); };
  }, [location?.menuUrl]);

  return (
    <section className="container mx-auto px-6 py-10">
      <h1 className="text-3xl font-light">Shop — {location?.cityLabel ?? "Alamogordo"}</h1>
      <div className="mt-6" id="menu-embed" />
    </section>
  );
}
