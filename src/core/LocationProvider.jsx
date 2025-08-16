// src/core/LocationProvider.jsx
"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import {
  DEFAULT_LOCATION,
  DEFAULT_LOCATION_SLUG,
  LOCATIONS,
  LOCATION_COOKIE,
  LOCATION_SLUGS,
} from "./locations";

// Small cookie utilities (client-side)
function readCookie(name) {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(new RegExp("(^|; )" + name + "=([^;]*)"));
  return match ? decodeURIComponent(match[2]) : null;
}
function writeCookie(name, value, days = 365) {
  if (typeof document === "undefined") return;
  const d = new Date();
  d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${encodeURIComponent(value)}; path=/; expires=${d.toUTCString()}; SameSite=Lax`;
}

const Ctx = createContext({
  slug: DEFAULT_LOCATION_SLUG,
  location: DEFAULT_LOCATION,
  setLocationSlug: () => {},
});

export function LocationProvider({ children, initialSlug }) {
  // Resolve initial slug from prop, cookie, localStorage, or default
  const safeSlug = (s) => (LOCATION_SLUGS.includes(s) ? s : DEFAULT_LOCATION_SLUG);

  const [slug, setSlug] = useState(() => {
    if (initialSlug) return safeSlug(initialSlug);
    if (typeof window !== "undefined") {
      const fromStorage = window.localStorage?.getItem(LOCATION_COOKIE);
      if (fromStorage) return safeSlug(fromStorage);
      const fromCookie = readCookie(LOCATION_COOKIE);
      if (fromCookie) return safeSlug(fromCookie);
    }
    return DEFAULT_LOCATION_SLUG;
  });

  // Persist on change
  useEffect(() => {
    if (typeof window === "undefined") return;
    window.localStorage?.setItem(LOCATION_COOKIE, slug);
    writeCookie(LOCATION_COOKIE, slug);
  }, [slug]);

  const value = useMemo(() => {
    const location = LOCATIONS[slug] || DEFAULT_LOCATION;
    return {
      slug,
      location,
      setLocationSlug: setSlug,
    };
  }, [slug]);

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

// Hook for consumers
export function useLocation() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useLocation must be used within <LocationProvider>");
  return ctx;
}
