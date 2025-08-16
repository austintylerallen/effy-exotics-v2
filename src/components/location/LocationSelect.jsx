// src/components/location/LocationSelect.jsx
"use client";

import { useMemo, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useLocation } from "@/core/LocationProvider";
import { LOCATIONS, LOCATION_SLUGS } from "@/core/locations";

export default function LocationSelect({ className = "" }) {
  const { slug: activeSlug, setLocationSlug } = useLocation(); // ✅ correct setter
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const activeLabel = useMemo(
    () => LOCATIONS[activeSlug]?.cityLabel ?? "Choose",
    [activeSlug]
  );

  const handleChoose = (nextSlug) => {
    // Persist selection (context + localStorage/cookie via provider)
    setLocationSlug(nextSlug);

    // Compute destination:
    // If current path starts with a city slug, swap it; otherwise go to /<nextSlug>.
    const parts = (pathname || "/").split("/").filter(Boolean);
    if (parts.length > 0 && LOCATION_SLUGS.includes(parts[0])) {
      parts[0] = nextSlug;
      router.push("/" + parts.join("/"));
    } else {
      router.push("/" + nextSlug);
    }

    setOpen(false);
  };

  return (
    <div className={`relative ${className}`}>
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="rounded-xl bg-white/10 text-white px-3 py-2 text-sm hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-white/30"
      >
        {activeLabel}
        <span className="ml-1 opacity-70">▾</span>
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute right-0 mt-2 w-44 rounded-xl border border-white/10 bg-[#0b0e14]/90 backdrop-blur-md text-sm shadow-lg z-50"
        >
          {LOCATION_SLUGS.map((s) => {
            const loc = LOCATIONS[s];
            const selected = s === activeSlug;
            return (
              <li key={s}>
                <button
                  role="option"
                  aria-selected={selected}
                  onClick={() => handleChoose(s)}
                  className={`w-full text-left px-3 py-2 hover:bg-white/10 ${
                    selected ? "text-white" : "text-white/80"
                  }`}
                >
                  {loc.cityLabel}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
