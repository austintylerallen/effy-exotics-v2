// src/app/CityRouteInitializer.jsx
"use client";

import { useEffect } from "react";
import { useLocation } from "@/core/LocationProvider";

/**
 * On mount, push the desired slug into the LocationProvider so
 * components (footer, header links, shop embed) render the right city.
 */
export default function CityRouteInitializer({ slug }) {
  const { setLocationSlug } = useLocation();
  useEffect(() => {
    if (slug) setLocationSlug(slug);
  }, [slug, setLocationSlug]);
  return null;
}
