// src/components/shop/ShopButton.jsx
"use client";
import { useLocation } from "@/core/LocationProvider";

export default function ShopButton({
  className = "",
  variant = "primary",      // "primary" | "ghost"
  size = "sm",              // "sm" | "md"
  children = "Shop",
}) {
  const { location } = useLocation();
  const href = location?.dutchieUrl || "#";

  const base =
    "inline-flex items-center justify-center whitespace-nowrap rounded-xl font-semibold transition";

  const sizes = {
    sm: "h-8 px-2 text-xs",     // compact
    md: "h-10 px-3 text-sm",
  };

  const variants = {
    primary: "bg-[#FFD36E] hover:brightness-95",
    ghost: "border border-white/20 bg-white/5 hover:bg-white/10",
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${sizes[size]} ${variants[variant]} !text-black ${className}`}
    >
      {children}
    </a>
  );
}
