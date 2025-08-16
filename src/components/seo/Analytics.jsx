"use client";

import Script from "next/script";

/**
 * Lightweight analytics. Swap to GA4 if you prefer.
 * - Uses Plausible as the default example.
 * - Safe to render anywhere; no props required.
 */
export default function Analytics() {
  return (
    <>
      {/* Plausible */}
      <Script
        strategy="afterInteractive"
        data-domain="effyexotics.com"
        src="https://plausible.io/js/script.js"
      />

      {/*
      // ——— If you want GA4 instead, remove the Plausible <Script> above and use this:
      <Script
        id="ga4"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `,
        }}
      />
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
      />
      */}
    </>
  );
}
