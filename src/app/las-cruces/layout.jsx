// src/app/las-cruces/layout.js
import LocalBusinessJsonLd from "@/components/seo/LocalBusinessJsonLd";
import CityRouteInitializer from "../CityRouteInitializer";

export const metadata = {
  title: "Effy Exotics – Las Cruces | Cannabis Dispensary",
  description:
    "Premium cannabis in Las Cruces, NM — curated flower, edibles, concentrates, and CBD with friendly guidance.",
  alternates: { canonical: "/las-cruces" },
  openGraph: {
    type: "website",
    url: "https://www.effyexotics.com/las-cruces",
    title: "Effy Exotics – Las Cruces | Cannabis Dispensary",
    description:
      "Premium cannabis in Las Cruces, NM — curated flower, edibles, concentrates, and CBD with friendly guidance.",
    siteName: "Effy Exotics",
    images: [{ url: "/img/social-preview.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Effy Exotics – Las Cruces",
    description:
      "Premium cannabis in Las Cruces, NM — curated flower, edibles, concentrates, and CBD.",
    images: ["/img/social-preview.jpg"],
  },
};

export default function LasCrucesLayout({ children }) {
  const biz = {
    name: "Effy Exotics – Las Cruces",
    phone: "+1-575-652-4619",
    priceRange: "$$",
    street: "2153 W Picacho Ave",
    city: "Las Cruces",
    region: "NM",
    postalCode: "88077",
    country: "US",
    latitude: 32.311383948399154,
    longitude: -106.80641921326792,
    hours: [
      { days: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"], opens:"07:00", closes:"23:30" },
      { days: ["Sunday"], opens:"10:00", closes:"23:30" },
    ],
    sameAs: [
      "https://www.facebook.com/effyexotics",
      "https://www.instagram.com/effyexotics",
    ],
    menuUrl: "https://dutchie.com/api/v2/embedded-menu/66b662a0d91b92addb39e11a.js",
  };

  return (
    <>
      {/* Set active city in context */}
      <CityRouteInitializer slug="las-cruces" />

      {/* City-specific structured data */}
      <LocalBusinessJsonLd business={biz} />

      {/* Render page content into the global <main> from root layout */}
      {children}
    </>
  );
}
