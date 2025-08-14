// src/core/LocationProvider.jsx
"use client";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { DEFAULT_LOCATION, LOCATIONS, LOCATION_COOKIE, LOCATION_SLUGS } from "./locations";

const Ctx = createContext({
  location: DEFAULT_LOCATION,
  setLocation: () => {},
  hasChoice: false,
});

export function LocationProvider({ children }) {
  const [loc, setLoc] = useState(DEFAULT_LOCATION);
  const [hasChoice, setHasChoice] = useState(false);

  // On mount, initialize from cookie if present
  useEffect(() => {
    const cookie = typeof document !== "undefined"
      ? document.cookie.split("; ").find((c) => c.startsWith(`${LOCATION_COOKIE}=`))
      : null;
    const slugFromCookie = cookie ? decodeURIComponent(cookie.split("=").pop() || "") : "";

    const slug = LOCATION_SLUGS.includes(slugFromCookie)
      ? slugFromCookie
      : DEFAULT_LOCATION.slug;

    setLoc(LOCATIONS[slug]);
    setHasChoice(LOCATION_SLUGS.includes(slugFromCookie));
  }, []);

  const setLocation = (slug) => {
    const next = LOCATIONS[slug] || DEFAULT_LOCATION;
    setLoc(next);
    setHasChoice(true);
    // persist for 1 year
    document.cookie = `${LOCATION_COOKIE}=${encodeURIComponent(next.slug)}; path=/; max-age=${60*60*24*365}`;
  };

  const value = useMemo(() => ({ location: loc, setLocation, hasChoice }), [loc, hasChoice]);

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useLocation() {
  return useContext(Ctx);
}
