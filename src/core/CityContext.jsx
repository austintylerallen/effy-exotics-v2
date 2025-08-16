// src/core/CityContext.jsx
"use client";
import { createContext, useContext } from "react";
import { DEFAULT_LOCATION } from "./locations";

/**
 * Provide a non-null default so components don't crash if the provider
 * isn't mounted (e.g., on a bare page). You can still override via <CityProvider>.
 */
const CityContext = createContext(DEFAULT_LOCATION);

export function CityProvider({ value = DEFAULT_LOCATION, children }) {
  return <CityContext.Provider value={value}>{children}</CityContext.Provider>;
}

/** Always returns a location object (defaults to DEFAULT_LOCATION). */
export function useCity() {
  return useContext(CityContext) || DEFAULT_LOCATION;
}

/** Optional hook if you want to detect "no provider" explicitly elsewhere. */
export function useOptionalCity() {
  return useContext(CityContext);
}
