// src/app/providers.jsx
"use client";

import Analytics from "@/components/seo/Analytics";
import SmoothScrollProvider from "@/core/SmoothScrollProvider";
import { LocationProvider } from "@/core/LocationProvider";

import { CityProvider } from "@/core/CityContext";
import { DEFAULT_LOCATION } from "@/core/locations";

export default function Providers({ children, initialLocationSlug }) {
  return (
    <>
      <Analytics />
      {/* Default city for non-city routes; components can still read LocationProvider too */}
      <CityProvider value={DEFAULT_LOCATION}>
        <LocationProvider initialSlug={initialLocationSlug}>
          <SmoothScrollProvider>{children}</SmoothScrollProvider>
        </LocationProvider>
      </CityProvider>
    </>
  );
}
