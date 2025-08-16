// src/components/seo/LocalBusinessJsonLd.jsx
// Server Component (no "use client") — safe to render in layouts
export default function LocalBusinessJsonLd({ business = {} }) {
    const {
      name,
      phone,
      priceRange,
      street,
      city,
      region,
      postalCode,
      country,
      latitude,
      longitude,
      hours = [],
      sameAs = [],
      menuUrl,
      url = "https://www.effyexotics.com",
      image = "/img/effy-dispensary.svg",
    } = business;
  
    // If we weren't passed a name, don't render schema.
    if (!name) return null;
  
    const openingHoursSpecification = hours.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.days,
      opens: h.opens,
      closes: h.closes,
    }));
  
    const data = {
      "@context": "https://schema.org",
      "@type": "CannabisDispensary",
      "@id": `${url}#${name.replace(/\s+/g, "-").toLowerCase()}`,
      name,
      url,
      image: typeof image === "string" ? image : `${url}${image}`,
      telephone: phone,
      priceRange: priceRange || "$$",
      address: {
        "@type": "PostalAddress",
        streetAddress: street,
        addressLocality: city,
        addressRegion: region,
        postalCode,
        addressCountry: country,
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude,
        longitude,
      },
      openingHoursSpecification,
      sameAs,
      // Helps Google understand your menu link even if it’s an embed
      hasMenu: menuUrl,
    };
  
    return (
      <script
        type="application/ld+json"
        // stringify once; no whitespace to keep it small
        dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
      />
    );
  }
  