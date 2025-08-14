// src/components/location/LocationSelect.jsx
"use client";
import { useState } from "react";
import { LOCATIONS } from "@/core/locations";
import { useLocation } from "@/core/LocationProvider";

export default function LocationSelect({ className = "", size = "sm" }) {
  const { location, setLocation } = useLocation();
  const [open, setOpen] = useState(false);

  const sizes = {
    sm: {
      trigger: "h-8 px-2 text-xs rounded-lg",
      dot: "h-2 w-2",
      caret: "w-3.5 h-3.5",
      menu: "mt-2 min-w-[160px] px-1 py-1 text-xs",
      item: "px-3 py-1.5",
      check: "w-4.5 h-4.5",
    },
    md: {
      trigger: "h-10 px-3 text-sm rounded-xl",
      dot: "h-2.5 w-2.5",
      caret: "w-4 h-4",
      menu: "mt-2 min-w-[180px] px-1.5 py-1.5 text-sm",
      item: "px-3 py-2",
      check: "w-5 h-5",
    },
  }[size];

  const onChoose = (slug) => {
    setLocation(slug);
    setOpen(false);
  };

  return (
    <div className={`relative ${className}`}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="menu"
        aria-expanded={open}
        className={`inline-flex items-center gap-2 border border-white/20 bg-white/5 hover:bg-white/10 transition ${sizes.trigger}`}
      >
        <span className={`inline-block rounded-full bg-[#FFD36E] ${sizes.dot}`} />
        {location?.name || "Choose Location"}
        <svg className={sizes.caret} viewBox="0 0 24 24" aria-hidden="true">
          <path d="M7 10l5 5 5-5" fill="none" stroke="currentColor" strokeWidth="2" />
        </svg>
      </button>

      {open && (
        <div
          role="menu"
          className={`absolute right-0 z-50 rounded-xl border border-white/15 bg-[#0b0e14]/95 backdrop-blur shadow-lg ${sizes.menu}`}
        >
          {Object.values(LOCATIONS).map((loc) => (
            <button
              key={loc.slug}
              type="button"
              onClick={() => onChoose(loc.slug)}
              className={`flex w-full items-center justify-between rounded-lg hover:bg-white/10 ${sizes.item}`}
            >
              <span>{loc.name}</span>
              {location?.slug === loc.slug && (
                <svg className={sizes.check} viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20 6L9 17l-5-5" fill="none" stroke="#FFD36E" strokeWidth="2" />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
